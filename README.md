# 🎯 Strategic Copywriter — Agent Skill

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![SKILL.md](https://img.shields.io/badge/standard-SKILL.md-blue)](https://agentskills.io)

A modular agent skill that transforms generic marketing text into high-conversion copy using proven psychological frameworks. Built on the [SKILL.md](./SKILL.md) standard.

> **No more "Curse of Knowledge" copy.** This skill forces every draft through a structured retrieval, drafting, and self-audit workflow before output is delivered.

---

## What This Skill Does

| Without This Skill | With This Skill |
|---|---|
| "We provide high-performance solutions." | "Stop losing Sundays to spreadsheets. Automate your reports in 60 seconds." |
| Generic LLM output | Framework-routed copy (SB7, SUCCES, STEPPS, PAS, BAB) |
| No brand consistency | Persistent brand profiles with voice, proof points, and forbidden words |
| No accountability | Structured self-audit with per-element scoring after every draft |

---

## Installation

This skill requires an AI agent that supports the **SKILL.md standard** (e.g., [Antigravity](https://antigravity.dev), Cursor with custom system prompts, or any LLM with file-system context).

### 1. Clone the repository

```bash
git clone https://github.com/woakin/marketing-copy.git
cd marketing-copy
```

### 2. Point your agent at `SKILL.md`

Configure your agent to read `SKILL.md` as its system prompt or skill file. The exact method depends on your agent:

| Agent | How to load |
|---|---|
| **Antigravity** | Place `SKILL.md` in your skill directory; the agent auto-loads it |
| **Cursor** | Add the contents of `SKILL.md` to `.cursorrules` or your system prompt |
| **Custom LLM** | Prepend the full contents of `SKILL.md` to your system message |

### 3. Verify the directory structure

```
marketing-copy/          ← Directory name must match SKILL.md `name` field
├── SKILL.md             ← Main router & logic engine
├── README.md            ← You are here
├── assets/
│   └── BRAND_TEMPLATE.md           ← Canonical schema for brand profiles
├── brands/
│   └── [your-brand].md             ← Runtime profiles created by /setup
├── references/
│   ├── storybrand.md               ← SB7 framework (Decks & Pitches)
│   ├── made-to-stick.md            ← SUCCES framework (Data & Stats)
│   ├── contagious.md               ← STEPPS framework (Social & Viral)
│   ├── quick-frameworks.md         ← PAS & BAB (Ads, Landing Pages, Case Studies)
│   └── setup-script.md             ← Full /setup interview protocol
└── scripts/
    └── validate-brand.sh           ← Brand profile completeness checker
```

No package dependencies. No build step. The skill runs entirely on Markdown and a single Bash script.

### How brand data is stored

Two directories serve different purposes — do not delete either:

| Directory | Role | Changes? |
|---|---|---|
| `assets/` | Static files that ship with the skill (the blank template schema) | No — design-time only |
| `brands/` | Live brand profiles written by `/setup` at runtime | Yes — grows as you add brands |

Think of `assets/BRAND_TEMPLATE.md` as the blank form, and `brands/[name].md` as completed copies of that form.

---

## Quick Start

### Step 1 — Onboard a brand

Run the setup interview to create a persistent brand profile:

```
/setup
```

The agent will interview you across 9 topics (one at a time):

1. Brand Name & Industry
2. Tagline
3. Ideal Customer Persona
4. The Villain (the core problem you defeat)
5. Proof Points (concrete stats — no vague claims)
6. Voice & Tone
7. Forbidden Words
8. Mandatory Phrases
9. Competitors & Differentiator

At the end, it saves a structured profile to `./brands/[your-brand-name].md`.

### Step 2 — Generate copy

Specify the asset type and your brand. The agent will:
1. Load your brand profile
2. Select and announce the correct framework
3. Draft copy using the Global Strategic Constraints
4. Deliver a scored Self-Audit with every response

**Example prompts:**

```
Write a landing page hero section for Acme using our brand profile.
```
```
Create a LinkedIn ad for the new onboarding feature — Acme brand.
```
```
Build a business deck narrative for our Series A pitch.
```

### Step 3 — Audit existing copy

Paste copy you've already written and get a framework score:

```
/audit [paste your copy here]
```

---

## Framework Routing

The skill automatically selects the right framework based on your asset type:

| Asset Type | Framework | Reference File |
|---|---|---|
| Business Deck / Pitch | StoryBrand (SB7) | `references/storybrand.md` |
| Data / Key Statistics | SUCCES (Heath Brothers) | `references/made-to-stick.md` |
| Ads / Landing Pages | PAS (Problem-Agitate-Solve) | `references/quick-frameworks.md` |
| Social / Viral Content | STEPPS (Berger) | `references/contagious.md` |
| Case Studies | BAB (Before-After-Bridge) | `references/quick-frameworks.md` |

---

## The Self-Audit

Every response ends with a structured audit block. You cannot skip it.

```
━━━━━━━━━━━━━━━━━━━━━━━━
SELF-AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━
Framework: StoryBrand (SB7) | Asset: Business Deck | Brand: Acme

FRAMEWORK SCORE: 7 / 7
✅ Hero  ✅ External Problem  ✅ Internal Problem  ✅ Philosophical
✅ Guide  ✅ Plan  ✅ Call to Action  ✅ Failure  ✅ Success

JARGON CHECK:
Scanned for: leverage, synergy, world-class, robust, seamless...
Found: None | Result: CLEAN ✅

EMPATHY CHECK:
External problem: Manual reporting → ADDRESSED ✅
Internal problem: Sunday-night dread → ADDRESSED ✅

HERO CHECK:
Brand positioned as Guide (not Hero)? YES ✅

OVERALL: APPROVED ✅
━━━━━━━━━━━━━━━━━━━━━━━━
```

**Max scores by framework:** SB7 (7) · SUCCES (6) · STEPPS (6) · PAS (3) · BAB (3)

---

## Command Reference

| Command | Description |
|---|---|
| `/setup` | Run the Brand Onboarding Interview → saves `./brands/[name].md` |
| `/load [brand-name]` | Load an existing brand profile |
| `/list-brands` | List all saved brand profiles |
| `/audit [copy]` | Score existing copy against its framework — no rewrite |
| `/rewrite [asset type]` | Rewrite provided copy using the correct framework |
| `/frameworks` | List all frameworks and their asset types |
| `/validate [brand-name]` | Run `validate-brand.sh` to check profile completeness |

---

## Adding a New Brand Profile

**Option A (recommended) — via agent:**
Run `/setup` in your agent. It will interview you and save the completed profile to `./brands/[name].md` automatically.

**Option B — manually:**

```bash
cp assets/BRAND_TEMPLATE.md brands/my-brand.md
# Edit brands/my-brand.md, then validate:
bash scripts/validate-brand.sh brands/my-brand.md
```

Then load it in your next session with:

```
/load my-brand
```

---

## Global Constraints (Always Active)

These rules apply to every piece of copy regardless of framework:

- **The Hero Shift** — Never lead with "We are…" Lead with "You can…" or "Imagine if…"
- **Concrete > Abstract** — Specific sensory outcomes only. No superlatives.
- **The 10-Year-Old Test** — If a child can't explain the value prop, simplify it.
- **Benefit Coupling** — Every feature must be followed by "…which means [benefit]."
- **The Villain Must Be Named** — Every asset must name the external problem being fought.

---

## Validating a Brand Profile

Before generating copy, confirm the brand profile is complete:

```bash
bash scripts/validate-brand.sh brands/my-brand.md
```

The script checks all 8 required sections and flags any unfilled template placeholders (`[like this]`). A failed validation should be resolved before generating copy.

---

## Extending the Skill

### Add a new framework
1. Create `references/[framework-name].md` following the existing format (Core Concept → Elements → Verification Checklist).
2. Add a row to the Framework Routing table in `SKILL.md` (Section 1).
3. Add a score entry to the Self-Audit rubric table (Section 4).

### Add a new command
1. Define the command's behavior in `SKILL.md` Section 8 (Command Reference).
2. Add a row to the Command Reference table in `SKILL.md` and this README.

### Validate spec compliance
Use the official [skills-ref](https://github.com/agentskills/agentskills/tree/main/skills-ref) CLI tool:
```bash
skills-ref validate ./
```

---

## Project Structure — File Roles

| File | Role |
|---|---|
| `SKILL.md` | The router. Controls onboarding, routing, constraints, workflow, and auditing. |
| `assets/BRAND_TEMPLATE.md` | The canonical schema. All brand profiles must match this structure. |
| `brands/[name].md` | Runtime brand profiles created by `/setup` or manually. |
| `references/storybrand.md` | SB7 framework — loaded on-demand for Decks & Pitches. |
| `references/made-to-stick.md` | SUCCES framework — loaded on-demand for Data & Stats assets. |
| `references/contagious.md` | STEPPS framework — loaded on-demand for Social & Viral content. |
| `references/quick-frameworks.md` | PAS & BAB — loaded on-demand for Ads, Landing Pages, Case Studies. |
| `references/setup-script.md` | Full `/setup` interview script — loaded only when `/setup` is triggered. |
| `scripts/validate-brand.sh` | Deterministic validator. Checks brand profile completeness before copy generation. |

---

*Built on the SKILL.md standard — a modular, file-based agent skill architecture.*

---

## License

Released under the [MIT License](./LICENSE) — free to use, fork, modify, and redistribute. Attribution appreciated but the barrier is low: just keep the copyright notice in any copies.
