#!/bin/sh
set -eu
cd "$(dirname "$0")/.."
if command -v node >/dev/null 2>&1 && command -v pnpm >/dev/null 2>&1; then
  exec pnpm "$@"
fi
runtime_node="/Users/avocado/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin"
runtime_tools="/Users/avocado/.cache/codex-runtimes/codex-primary-runtime/dependencies/bin/fallback"
if [ -x "$runtime_node/node" ] && [ -x "$runtime_tools/pnpm" ]; then
  export PATH="$runtime_node:$runtime_tools:$PATH"
  exec pnpm "$@"
fi
printf '%s\n' '请安装 Node.js 24 和 pnpm 11，或在 Codex 中让 AI 帮你启动。' >&2
exit 1
