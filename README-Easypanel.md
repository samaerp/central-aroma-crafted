# Deploy Vite React (SPA) to Easypanel (App)

This repository is based on **Vite + React**. Use the following files for deployment:

- `Dockerfile` (multi-stage: Node build → Nginx serve)
- `nginx.conf` (Nginx for SPA, gzip + cache + healthcheck)
- `.dockerignore`

## File Structure
```
(project root)
├─ package.json
├─ src/...
├─ index.html
├─ Dockerfile
├─ .dockerignore
└─ nginx.conf
```

> Ensure `Dockerfile` is located **in the root** of the project (at the same level as `package.json`).

## Steps in Easypanel
1. **Apps → New App → From Git (Dockerfile)**  
   - Repository: repository containing this project
   - Dockerfile Path: `Dockerfile`
   - Build Context: `/`

2. **Ports**  
   - Internal Port: `80` (container exposes port 80)
   - Protocol: `HTTP`

3. **Domains**  
   - Add domain: `https://your-domain.com`  
   - Force HTTPS: ON (recommended)  
   - Cloudflare: create an A record pointing to your Easypanel server IP (Proxied ON)

4. **Healthcheck**  
   - Path: `/healthz`  
   - Interval: 30s (default is fine)

5. **Resources**  
   - CPU/RAM as needed (start small; this is only serving static files)

6. **Build & Deploy**  
   - Easypanel akan build image (Node 20) → build Vite → copy ke Nginx.  
   - Setelah deploy sukses, cek `https://dev-web.centralaroma.com`.

## Environment Variables (optional)
Vite only reads env variables **during build** and variables must be prefixed with **`VITE_`**.  
Example: use `import.meta.env.VITE_SITE_URL` in your code.  
- Build arg in Dockerfile is set to: `VITE_SITE_URL=https://app.example.com`  
- If you need to override during build in Easypanel, add a Build Arg with key:
  - **Name**: `VITE_SITE_URL`
  - **Value**: `https://your-domain.com`

> If your app needs runtime env variables (not build-time), move to a JSON config fetch mechanism (served from `/config.json`) or use SSR. For pure SPA, use `VITE_*` and rebuild when changed.

## Caching Notes
- Hashed files (`.js/.css` etc.) will be cached for 1 year (`immutable`).  
- `index.html` is **not** cached so each deployment is immediately active.

## Troubleshooting
- Blank page (404 refresh deep-link): ensure **SPA fallback** is active (already in `nginx.conf`).  
- 502/504 from Easypanel: check Ports (must be 80), healthcheck `/healthz`, and container logs.  
- Assets fail to load due to CSP: remove/loosen CSP in `nginx.conf` (by default we do **not** set CSP).

## Changes Made for Easypanel App Deployment

1. Updated Dockerfile:
   - Changed nginx.conf path from `docker/nginx.conf` to `nginx.conf` in the root directory
   - Updated to use nginx:1.25-alpine instead of 1.27-alpine for better compatibility
   - Removed Central Aroma specific branding and URLs

2. Updated nginx.conf:
   - Simplified configuration for Easypanel deployment
   - Improved comments for better understanding

3. Removed branding:
   - Removed lovable-tagger dependency from package.json
   - Updated color scheme in index.css to use generic blue theme
   - Replaced brand-specific text and images in Header and Footer components

--
Configured for Easypanel App mode.
