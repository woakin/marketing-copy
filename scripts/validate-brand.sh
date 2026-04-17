#!/usr/bin/env bash
# validate-brand.sh
# Checks a brand profile against the required BRAND_TEMPLATE.md schema.
# Usage: bash scripts/validate-brand.sh brands/my-brand.md

set -euo pipefail

BRAND_FILE="${1:-}"

if [[ -z "$BRAND_FILE" ]]; then
  echo "Usage: bash scripts/validate-brand.sh brands/[brand-name].md"
  exit 1
fi

if [[ ! -f "$BRAND_FILE" ]]; then
  echo "ERROR: File not found: $BRAND_FILE"
  exit 1
fi

echo "Validating: $BRAND_FILE"
echo "────────────────────────────────"

ERRORS=0

# Required section headings per BRAND_TEMPLATE.md schema
REQUIRED_SECTIONS=(
  "## Identity"
  "## Ideal Customer Persona"
  "## The Villain"
  "## Voice & Tone"
  "## Proof Points"
  "## Forbidden Words"
  "## Mandatory Phrases"
  "## Competitors & Differentiation"
)

for section in "${REQUIRED_SECTIONS[@]}"; do
  if grep -qF "$section" "$BRAND_FILE"; then
    echo "  ✅  $section"
  else
    echo "  ❌  MISSING: $section"
    ERRORS=$((ERRORS + 1))
  fi
done

echo "────────────────────────────────"

# Check for unfilled placeholder brackets [like this]
UNFILLED=$(grep -oP '\[(?!BRAND NAME\])[^\]]+\]' "$BRAND_FILE" | grep -v "^$" | head -10 || true)
if [[ -n "$UNFILLED" ]]; then
  echo "⚠️  WARNING: Unfilled template placeholders found:"
  echo "$UNFILLED" | while read -r line; do echo "    → $line"; done
  ERRORS=$((ERRORS + 1))
fi

echo ""
if [[ $ERRORS -eq 0 ]]; then
  echo "RESULT: ✅ VALID — Brand profile is complete."
  exit 0
else
  echo "RESULT: ❌ INVALID — $ERRORS issue(s) found. Fix before generating copy."
  exit 1
fi
