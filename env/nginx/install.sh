#!/usr/bin/env bash
# Mirrors hh/env/nginx/install.sh for the acme-ai-consulting project.
# Run once per machine. Requires Homebrew nginx already installed via hh's
# setup (or `brew install nginx`).
set -euo pipefail

ORG=acme-ai-consulting
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "Installing $ORG nginx"

NGINX_CONF="$(brew --prefix)/etc/nginx"
NGINX_SERVERS="$NGINX_CONF/servers"
mkdir -p "$NGINX_SERVERS"
mkdir -p "$HOME/code/logs"

echo ''
echo '→ Appending hosts.txt to /etc/hosts'
cat "$SCRIPT_DIR/hosts.txt" | sudo tee -a /etc/hosts

echo ''
echo '→ Symlinking nginx server block'
ln -sf "$SCRIPT_DIR/acme-ai-consulting.conf" "$NGINX_SERVERS/acme-ai-consulting.conf"

echo ''
echo '→ Installing SSL cert'
if [ ! -f "$SCRIPT_DIR/ssl/acme.crt" ] || [ ! -f "$SCRIPT_DIR/ssl/acme.key" ]; then
  echo "ERROR: $SCRIPT_DIR/ssl/acme.{crt,key} not found — generate them first." >&2
  echo "See $SCRIPT_DIR/ssl/README.md" >&2
  exit 1
fi

sudo mkdir -p /etc/ssl/private
sudo mkdir -p /etc/ssl/certs
sudo cp "$SCRIPT_DIR/ssl/acme.crt" "/etc/ssl/certs/$ORG.crt"
sudo cp "$SCRIPT_DIR/ssl/acme.key" "/etc/ssl/private/$ORG.key"

# nginx runs as the current user (Homebrew) and must be able to read the
# key at reload. `openssl genrsa` creates the key with 0600 on macOS;
# relax to 0644 so nginx can read it. Matches hh/env/nginx/ssl/hh.key.
sudo chmod 644 "/etc/ssl/private/$ORG.key"

echo ''
echo '→ Trusting cert in System keychain'
sudo security add-trusted-cert -d -r trustRoot \
  -k /Library/Keychains/System.keychain \
  "/etc/ssl/certs/$ORG.crt"

echo ''
echo '→ Reloading nginx'
"$(brew --prefix)/bin/nginx" -s reload || "$(brew --prefix)/bin/nginx"

echo ''
echo "Done. Visit https://acme-ai-consulting.dev after running bin/start."
