# Deploy Vite React (SPA) ke Easypanel (App) — Domain: dev-web.centralaroma.com

Repo kamu terdeteksi berbasis **Vite + React**. Gunakan file-file berikut:

- `Dockerfile` (multi-stage: Node build → Nginx serve)
- `docker/nginx.conf` (Nginx untuk SPA, gzip + cache + healthcheck)
- `.dockerignore`

## Struktur file
```
(root proyek kamu)
├─ package.json
├─ src/...
├─ index.html
├─ Dockerfile
├─ .dockerignore
└─ docker/
   └─ nginx.conf
```

> Pastikan `Dockerfile` berada **di root** proyek (sebaris dengan `package.json`).

## Langkah di Easypanel
1. **Apps → New App → From Git (Dockerfile)**  
   - Repository: repo yang berisi project ini.
   - Dockerfile Path: `Dockerfile`
   - Build Context: `/`

2. **Ports**  
   - Internal Port: `80` (container expose 80)
   - Protocol: `HTTP`

3. **Domains**  
   - Tambah domain: `https://dev-web.centralaroma.com`  
   - Force HTTPS: ON (direkomendasikan)  
   - Cloudflare: buat A record `dev-web` → IP server Easypanel (Proxied ON).

4. **Healthcheck**  
   - Path: `/healthz`  
   - Interval: 30s (default ok)

5. **Resources**  
   - CPU/RAM sesuai kebutuhan (mulai kecil dulu; ini hanya serve static).

6. **Build & Deploy**  
   - Easypanel akan build image (Node 20) → build Vite → copy ke Nginx.  
   - Setelah deploy sukses, cek `https://dev-web.centralaroma.com`.

## Variabel Lingkungan (opsional)
Vite hanya membaca env **saat build** dan variabel harus diawali **`VITE_`**.  
Contoh: gunakan `import.meta.env.VITE_SITE_URL` di kode kamu.  
- Build arg di Dockerfile sudah diset: `VITE_SITE_URL=https://dev-web.centralaroma.com`  
- Jika perlu override saat build di Easypanel, tambahkan Build Arg dengan key:
  - **Name**: `VITE_SITE_URL`
  - **Value**: `https://dev-web.centralaroma.com`

> Kalau app kamu butuh env runtime (bukan build), pindahkan ke mekanisme fetch JSON config (served dari `/config.json`) atau gunakan SSR. Untuk SPA murni, gunakan `VITE_*` dan rebuild saat berubah.

## Catatan Caching
- File hashed (`.js/.css` dll) akan di-cache 1 tahun (`immutable`).  
- `index.html` **tidak** di-cache agar setiap deploy langsung aktif.

## Troubleshooting
- Blank page (404 refresh deep-link): pastikan **SPA fallback** aktif (sudah di `nginx.conf`).  
- 502/504 dari Easypanel: cek Ports (harus 80), healthcheck `/healthz`, dan log container.  
- Asset gagal load karena CSP: hapus/longgarkan CSP di `nginx.conf` (default kami **tidak** set CSP).

--
Made for Easypanel App mode.
