# syntax=docker/dockerfile:1

###############################
# BUILD STAGE
###############################
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy source
COPY . .

# Build-time site URL (used by Vite if referenced via import.meta.env.VITE_SITE_URL)
ARG VITE_SITE_URL=https://dev-web.centralaroma.com
ENV VITE_SITE_URL=${VITE_SITE_URL}

# Build the static app
RUN npm run build

###############################
# RUNTIME STAGE
###############################
FROM nginx:1.27-alpine

# Copy Nginx config
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Static files
COPY --from=build /app/dist /usr/share/nginx/html

# Healthcheck endpoint: http://localhost/healthz
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1/healthz || exit 1

EXPOSE 80

# Nginx runs by default as PID 1
