#!/bin/bash
# SessionStart hook
# Registra il marketplace pubblico delle skill e installa il plugin condiviso,
# cosi' le skill sono disponibili anche nelle sessioni cloud (che NON
# auto-installano i marketplace dichiarati in extraKnownMarketplaces).
# Best-effort: ogni passo non deve mai bloccare l'avvio della sessione.
set -uo pipefail

echo "[skillworkspace] registro il marketplace e installo il plugin…"

# Idempotente: se gia' presente, non fa danni.
claude plugin marketplace add Bonny94ITA/SkillWorkspace 2>&1 || true
claude plugin marketplace update skillworkspace 2>&1 || true

# 'enabledPlugins' in settings.json dovrebbe abilitarlo da solo una volta noto il
# marketplace; proviamo comunque l'install esplicito (ignorato se non supportato).
claude plugin install workspace-skills@skillworkspace 2>&1 || true

echo "[skillworkspace] hook completato. Marketplace registrati:"
claude plugin marketplace list 2>&1 || true

exit 0
