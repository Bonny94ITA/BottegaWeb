#!/bin/bash
# SessionStart hook
# - imposta l'autore git preferito (JeanClaude)
# - installa le dipendenze npm nelle sessioni web (Claude Code on the web)
set -euo pipefail

# Identità git preferita (email noreply@anthropic.com per commit "Verified").
git config --global user.name "JeanClaude" 2>/dev/null || true
git config --global user.email "noreply@anthropic.com" 2>/dev/null || true

# Le dipendenze servono solo nell'ambiente remoto effimero (sessioni web).
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-.}"

# Idempotente e cache-friendly: npm install (non ci) sfrutta la cache del container.
npm install
