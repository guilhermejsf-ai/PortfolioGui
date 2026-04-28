#!/bin/sh

set -eu

PORT="${PORT:-3007}"

PID="$(lsof -ti tcp:"$PORT" 2>/dev/null || true)"

if [ -n "$PID" ]; then
  kill $PID 2>/dev/null || true
  sleep 1
fi

if [ -d .next-dev ]; then
  STALE_DIR=".next-dev-stale-$$"
  rm -rf "$STALE_DIR" 2>/dev/null || true
  mv .next-dev "$STALE_DIR"
  rm -rf "$STALE_DIR" 2>/dev/null || true
fi

exec ./node_modules/.bin/next dev -p "$PORT"
