# syntax=docker/dockerfile:1

###############################
# BUILD STAGE
###############################
FROM node:20-alpine AS build
WORKDIR /app

# Non-interactive & more consistent in CI
ENV CI=1

# Install dependencies (fallback to npm install if lockfile out-of-sync)
COPY package*.json ./
RUN set -eux; \
    npm config set audit false; \
    npm config set fund false; \
    if [ -f package-lock.json ]; then \
      npm ci --no-audit --no-fund \
      || (echo "Lockfile out of sync; fallback to npm install" \
          && rm -f package-lock.json \
          && npm install --no-audit --no-fund); \
    else \
      npm install --no-audit --no-fund; \
    fi

# Copy source
COPY . .

# Build-time site URL (Vite: import.meta.env.VITE_SITE_URL)
ARG VITE_SITE_URL=https://app.example.com
ENV VITE_SITE_URL=${VITE_SITE_URL}

# Build static app (ensure "build" script exists in package.json)
RUN npm run build

###############################
# RUNTIME STAGE
###############################
FROM nginx:1.25-alpine

# Optional: minimize default entrypoint logs
ENV NGINX_ENTRYPOINT_QUIET_LOGS=1

# Use Nginx config (SPA with try_files)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Clean default html then copy build results to html root
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ /usr/share/nginx/html/

# Healthcheck file to ensure 200 response
RUN printf "ok" > /usr/share/nginx/html/healthz

# Healthcheck endpoint: http://localhost/healthz
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1

EXPOSE 80
# Nginx runs as PID 1 by default
