# Local dev cert for acme-ai-consulting.dev

A self-signed wildcard cert for `*.acme-ai-consulting.dev`, used only for
local HTTPS termination through nginx. Not valid anywhere else, and never
deployed.

**The `.key` / `.crt` / `.csr` files are `.gitignore`d** — do not check the
private key into this public repo. Regenerate locally when setting up a
new machine.

## Generate

From `env/nginx/ssl/`:

```bash
openssl genrsa -des3 -passout pass:x -out acme.pass.key 2048
openssl rsa -passin pass:x -in acme.pass.key -out acme.key
rm acme.pass.key

openssl req -new -key acme.key -out acme.csr \
  -subj "/C=US/ST=California/L=Alameda/O=Acme/OU=Acme/CN=*.acme-ai-consulting.dev/emailAddress=ben@benkruger.com"

openssl x509 -req -sha256 -extfile acme.ext -days 3650 \
  -in acme.csr -signkey acme.key -out acme.crt
```

## Install (run from the repo root)

```bash
env/nginx/install.sh
```

`install.sh` copies `acme.crt` / `acme.key` to `/etc/ssl/` (sudo), trusts
the cert in the System keychain, appends hostnames to `/etc/hosts`, and
symlinks the nginx server block into Homebrew's nginx config.
