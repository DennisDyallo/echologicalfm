#!/bin/bash
set -euo pipefail

SERVICES_DIR="$HOME/services"
SITE_DIR="$SERVICES_DIR/echological-fm/site"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "==> Installing dependencies..."
cd "$SCRIPT_DIR"
npm install --silent

echo "==> Building site..."
npm run build

echo "==> Deploying to $SITE_DIR..."
rm -rf "$SITE_DIR"/*
cp -r "$SCRIPT_DIR/dist/"* "$SITE_DIR/"

echo "==> Reloading Caddy..."
docker exec caddy caddy reload --config /etc/caddy/Caddyfile 2>/dev/null || echo "    (Caddy reload skipped — container not running locally)"

echo "==> Done. Deployed echological.fm"
ls -lh "$SITE_DIR/index.html"
