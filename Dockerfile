# syntax=docker/dockerfile:1

###############################
# BUILD STAGE
###############################
FROM node:20-alpine AS build
WORKDIR /app

# Non-interaktif & lebih konsisten di CI
ENV CI=1

# Install dependencies (fallback ke npm install jika lockfile out-of-sync)
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
ARG VITE_SITE_URL=https://dev-web.centralaroma.com
ENV VITE_SITE_URL=${VITE_SITE_URL}

# Build static app (pastikan script "build" ada di package.json)
RUN npm run build

###############################
# RUNTIME STAGE
###############################
FROM nginx:1.27-alpine

# Optional: minimalkan log bawaan entrypoint
ENV NGINX_ENTRYPOINT_QUIET_LOGS=1

# Pakai Nginx config kamu (SPA with try_files)
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Bersihkan default html lalu copy hasil build ke root html
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ /usr/share/nginx/html/

# Healthcheck file agar pasti 200
RUN printf "ok" > /usr/share/nginx/html/healthz

# Healthcheck endpoint: http://localhost/healthz
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz || exit 1

EXPOSE 80
# Nginx runs as PID 1 by default
