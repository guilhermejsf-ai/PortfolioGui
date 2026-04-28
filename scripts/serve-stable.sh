#!/bin/sh

set -eu

PORT="${1:-3002}"

PID="$(lsof -ti tcp:"$PORT" 2>/dev/null || true)"

if [ -n "$PID" ]; then
  kill $PID 2>/dev/null || true
  sleep 1
fi

if [ -d .next ]; then
  STALE_DIR=".next-stale-$$"
  rm -rf "$STALE_DIR" 2>/dev/null || true
  mv .next "$STALE_DIR"
  rm -rf "$STALE_DIR" 2>/dev/null || true
fi

npm run build
exec npm run start -- -p "$PORT"
