# 🌐 Website Conversion Copywriter — Agent Skill

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![SKILL.md](https://img.shields.io/badge/standard-SKILL.md-blue)](https://agentskills.io)
[![Version: 2.1.0](https://img.shields.io/badge/version-2.1.0-green.svg)](https://github.com/woakin/marketing-copy)
[![Security: Safe](https://img.shields.io/badge/Security-Safe%20(0%20alerts)-brightgreen.svg)](https://skills.sh/woakin/marketing-copy)
[![Agents](https://img.shields.io/badge/agents-Antigravity%20%7C%20Claude%20%7C%20Cursor%20%7C%20Codex-purple.svg)](https://github.com/vercel-labs/skills)

```bash
npx skills add woakin/marketing-copy
```

> ⚡ **Zero Setup. Immediate Results. 3 Conversion Angles Ready to A/B Test.**  
> *Installs in 5 seconds • No API keys or configuration needed • Runs 100% offline & local.*

---

## The Problem With Generic AI Copy

You prompt your AI to write website copy, and it spits back:  
> *"We deliver robust, innovative, world-class solutions that empower modern enterprises."*

It sounds like every generic SaaS on the internet — **meaning it converts nobody**. Visitors land on your page, get hit with abstract buzzwords, and bounce within 3 seconds because they can't figure out what you do, who it's for, or why they should care.

---

## The Solution: Instant Conversion Intelligence

The **Website Conversion Copywriter** skill turns your AI assistant into an elite conversion copywriter with **zero setup required**. No 9-question onboarding quizzes.

Just call the skill and get **3 high-converting angles** engineered with battle-tested psychological frameworks (StoryBrand SB7, PAS, BAB, FAB, SUCCES), complete with H1s, subheads, dual CTAs, and friction-reducing microcopy:

```
┌────────────────────────────────────────────────────────────────────────┐
│ USER: "Write a landing page hero for my automated reconciliation app"   │
│                                                                        │
│ AGENT: [Framework: StoryBrand SB7 + 3-Second Rule]                     │
│ ⚡ Generated 3 Distinct Conversion Angles in 2 seconds:                 │
│                                                                        │
│   • Angle 1 (Direct & Clear): StoryBrand SB7 + 3-Second Rule           │
│   • Angle 2 (Pain & The Villain): PAS Framework                        │
│   • Angle 3 (Transformation & Relief): BAB Framework                   │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Quick Install

### One-line install (recommended)

Install directly into your AI coding assistant with the [Skills CLI](https://github.com/vercel-labs/skills):

```bash
npx skills add woakin/marketing-copy
```

The CLI auto-detects your environment and installs the skill files to the correct location (e.g., `.gemini/skills/`, `.agents/skills/`, `.claude/skills/`, or `.cursor/skills/`).

**Supported agents:** Antigravity · Claude Code · Cursor · Codex · Gemini CLI · Copilot · Cline · Aider

---

### Manual install (alternative)

```bash
git clone https://github.com/woakin/marketing-copy.git
```

| Agent | Loading instructions |
| :--- | :--- |
| **Antigravity** | Place in your workspace or skills folder; auto-detected via `SKILL.md` |
| **Claude Code** | Place in `.claude/skills/marketing-copy/` |
| **Cursor** | Include `SKILL.md` in `.cursorrules` or reference `@SKILL.md` |
| **Custom LLM** | Supply `SKILL.md` and `references/` into your system prompt |

---

## Instant Use (Zero-Setup Workflow)

Ask your agent for website copy. Provide as much or as little context as you have:

```
Write a landing page hero section for my app that automates invoice reconciliation.
```

The skill automatically extracts your context (or inspects your repo's `README.md`/`package.json` if available) and **immediately returns 3 distinct conversion angles**:

### 🎯 The "Rule of 3" Conversion Angles

#### Angle 1: Direct & Clear (StoryBrand SB7 + 3-Second Rule)
> **Eyebrow:** AUTOMATED INVOICE RECONCILIATION FOR SAAS  
> **Headline (H1):** Automated Invoice Reconciliation in 60 Seconds Flat.  
> **Subhead (H2):** Sync Stripe, QuickBooks, and your bank accounts with zero code. Reconcile 10,000+ transactions without touching a single spreadsheet cell.  
> **Primary CTA:** `[Start Your Free 14-Day Trial →]`  
> **Secondary CTA:** `[Explore Interactive Sandbox]`  
> **Microcopy:** *No credit card required • Instant 60-second setup*

#### Angle 2: Pain & The Villain (PAS Framework)
> **Eyebrow:** STOP SPREADSHEET RECONCILIATION CHAOS  
> **Headline (H1):** Never Spend Another Sunday Night Hunting for Spreadsheet Errors.  
> **Subhead (H2):** One broken Excel formula shouldn't trigger a $20,000 reporting variance. Stop letting manual data entry steal your weekends and drain your finance team.  
> **Primary CTA:** `[End Spreadsheet Frustration →]`  
> **Secondary CTA:** `[Calculate Time Saved]`  
> **Microcopy:** *Free forever for teams under 5 • Plug & play in 2 minutes*

#### Angle 3: Transformation & Relief (BAB Framework)
> **Eyebrow:** MODERN FINANCIAL PEACE OF MIND  
> **Headline (H1):** Close Your Month-End Books on Day 1 by 11:00 AM.  
> **Subhead (H2):** Walk into your next board meeting with 100% audit-proof confidence. Turn 8 days of manual data chasing into an automated 15-minute review.  
> **Primary CTA:** `[Reclaim Your Weekends →]`  
> **Secondary CTA:** `[Read Customer Case Study]`  
> **Microcopy:** *Used by 1,400+ fast-growing finance teams*

---

## Framework Routing by Website Section

Need more than a hero section? The skill routes every part of your website to its optimal psychological framework:

| Website Section / Page Type | Primary Framework | Source Reference |
| :--- | :--- | :--- |
| **Hero Section & Above-the-Fold** | **StoryBrand (SB7) + 3-Second Rule (3 Angles)** | `references/storybrand.md` |
| **Problem & Agitation Sections** | **PAS (Problem-Agitate-Solve)** | `references/quick-frameworks.md` |
| **Customer Transformation & Case Studies** | **BAB (Before-After-Bridge)** | `references/quick-frameworks.md` |
| **Feature Grids & Product Cards** | **FAB (Feature-Advantage-Benefit)** | `references/quick-frameworks.md` |
| **Social Proof, Metrics & Trust Blocks** | **SUCCES (Concrete & Credible)** | `references/made-to-stick.md` |
| **Full Landing Page / Sales Page Flow** | **Page Architecture (AIDA + SB7)** | `references/page-architectures.md` |

---

## The Built-in Self-Audit

Every response produced by the skill ends with a structured CRO self-audit block:

```
━━━━━━━━━━━━━━━━━━━━━━━━
SELF-AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━
Framework: StoryBrand (SB7) | Section: Hero Above-the-Fold | Brand: Acme

3-SECOND CLARITY CHECK:
Can a visitor answer What it is, Who it's for, and What they get in 3 seconds?
Result: PASS ✅

JARGON CHECK:
Scanned for: leverage, synergy, world-class, robust, seamless, innovative, disruptive...
Found: None | Result: CLEAN ✅

EMPATHY & VILLAIN CHECK:
External villain named: Sunday-night spreadsheet chaos → ADDRESSED ✅
Internal visitor emotion addressed: Fear of broken formulas → ADDRESSED ✅

HERO CHECK:
Visitor is Hero; product is Guide? YES ✅

CTA & MICROCOPY CHECK:
Action-oriented primary button + risk-reversal subtext present? YES ✅

OVERALL: APPROVED ✅
━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Optional Brand Persistence

Love the copy and want your agent to remember your brand for future sessions? Just ask:

```
/save-brand acme
```

The agent saves the extracted context into `./brands/acme.md`. Next time, you can simply say:
```
Write a 3-column feature grid for Acme using our saved profile.
```

---

## Command Reference

| Command | Description |
| :--- | :--- |
| *(Any prompt)* | Generates instant website copy or 3 Hero angles — zero setup required |
| `/save-brand [name]` | Save current brand context to `./brands/[name].md` for future sessions |
| `/load [name]` | Load an existing saved brand profile |
| `/list-brands` | List all saved brand profiles in `./brands/` |
| `/audit [copy]` | Score existing website copy against conversion principles — no rewrite |
| `/rewrite [angle]` | Rewrite provided copy targeting a specific angle (`direct`, `pain`, or `transformation`) |
| `/frameworks` | List all website frameworks and section mappings |
| `/setup` | (Optional) Guided step-by-step interview for users who want structured onboarding |

---

## 🚀 Ready to Upgrade Your Website Copy?

Install in 5 seconds and generate your first 3 conversion angles:

```bash
npx skills add woakin/marketing-copy
```

**Next step:** Ask your agent:
> *"Write a high-converting hero section for my website [describe your product in 1 sentence]"*

---

## License

Released under the [MIT License](./LICENSE). Free to use, adapt, and build upon.
