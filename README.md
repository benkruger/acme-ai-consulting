# acme-ai-consulting

Svelte 5 SPA for **acme-ai-consulting.com**. Deployed to GitHub Pages via
GitHub Actions on push to `main`.

Locally this runs at **https://acme-ai-consulting.dev** with nginx
terminating HTTPS and proxying to Vite. Mirrors the `*.hipaa-health.dev`
local-dev pattern in `hh/env/nginx/`.

## One-time local setup

Requires Homebrew nginx to already be running (installed via `hh/env/nginx/install.sh`
or `brew install nginx`).

```bash
# 1. Install JS deps
npm install

# 2. Generate a self-signed wildcard cert for *.acme-ai-consulting.dev
cd env/nginx/ssl
# See env/nginx/ssl/README.md for the openssl recipe (six lines).
# Do NOT check the generated .key / .crt / .csr into git — they are .gitignored.

# 3. Install the cert + nginx server block + /etc/hosts entries
cd ../../..
env/nginx/install.sh   # will prompt for sudo
```

`env/nginx/install.sh` copies the cert to `/etc/ssl/`, trusts it in the
System keychain, appends `acme-ai-consulting.dev` / `www.acme-ai-consulting.dev`
to `/etc/hosts`, symlinks the nginx server block, and reloads nginx.

## Day-to-day

```bash
bin/start    # start nginx + daemonize Vite; visit https://acme-ai-consulting.dev
bin/stop     # stop nginx + stop Vite
bin/status   # is Vite running?
bin/logs     # tail the Vite log
```

All traffic goes through nginx. There is no plain-HTTP path to Vite — the
dev server binds `127.0.0.1:4100` and is only reachable via nginx's HTTPS
proxy at `https://acme-ai-consulting.dev`. `bin/start` and `bin/stop` own
the full stack; if another project (hh, cc, etc.) starts or stops nginx,
the commands are idempotent and coexist.

## CI and quality gates

`bin/flow ci` is the universal gate — runs format → lint → build → test
in sequence, skips if nothing has changed since the last passing run.

```bash
flow ci              # full pipeline
flow ci --format     # prettier --check
flow ci --lint       # svelte-ignore ban + eslint + svelte-check
flow ci --build      # vite build
flow ci --test       # vitest run --coverage
flow ci --force      # bypass the dirty-check sentinel
```

Individual scripts mirror the four CI buckets:

- `bin/format` — `prettier --check` (add `--write` to rewrite)
- `bin/lint` — svelte-ignore ban, eslint, svelte-check (add `--fix` for eslint autofix)
- `bin/build` — `vite build` (add `--watch` for iteration)
- `bin/test` — `vitest run --coverage` (plus `--file <path>`, `--watch`, `--ui`, `--report`)
- `bin/dependencies` — invoked by `/flow-start` to refresh deps

Coverage thresholds live in `vitest.config.js`: **100 / 100 / 100** on
lines, statements, functions. Branches at 80 — Svelte compiles attribute
interpolations into defensive nullish branches that are unreachable from
userland (documented in the config).

## Deployment

Push to `main`. GitHub Actions builds and deploys to `acme-ai-consulting.com`
via Pages. Workflow at `.github/workflows/deploy.yml`.

## Ports and hostnames

| Environment              | URL                            | Vite port |
| ------------------------ | ------------------------------ | --------- |
| Local dev (this project) | https://acme-ai-consulting.dev | 4100      |
| Local dev (hh/web)       | https://\*.hipaa-health.dev    | 4000      |
| Production               | https://acme-ai-consulting.com | —         |

## Project layout

```
.
├── bin/                   # dev + CI entrypoints (mirrors flow's pattern)
├── env/nginx/             # local HTTPS reverse proxy config
│   ├── acme-ai-consulting.conf
│   ├── hosts.txt
│   ├── install.sh
│   └── ssl/               # self-signed cert (generated locally, gitignored)
├── public/                # static assets copied verbatim into dist/
│   ├── CNAME              # binds Pages site to acme-ai-consulting.com
│   └── 404.html           # SPA redirect fallback for deep links
├── src/
│   ├── App.svelte         # shell
│   ├── main.js            # mount point
│   ├── app.css            # design tokens + base typography
│   ├── components/        # reusable primitives (Anvil, Dial, CTAButton, …)
│   ├── routes/            # Home composition (single-page for now)
│   └── sections/          # Hero, Problem, … site sections
├── .github/workflows/     # Pages deploy
└── vite.config.js
```
