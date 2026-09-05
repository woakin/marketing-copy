# 🌐 Website Conversion Copywriter — Agent Skill

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![SKILL.md](https://img.shields.io/badge/standard-SKILL.md-blue)](https://agentskills.io)
[![Version: 2.0.0](https://img.shields.io/badge/version-2.0.0-green.svg)](https://github.com/woakin/marketing-copy)

You prompt your AI to write website copy, and it spits back: *"We deliver robust, innovative, world-class solutions that empower modern enterprises."*

It sounds like every generic SaaS on the internet — meaning it converts nobody. Visitors land on your page, get hit with abstract buzzwords, and bounce within 3 seconds because they can't figure out what you do, who it's for, or why they should care.

You can install the **Website Conversion Copywriter** skill to turn your AI agent into an elite conversion copywriter. The skill enforces proven psychological frameworks (StoryBrand SB7, PAS, BAB, FAB, SUCCES), structures high-converting page wireframes, and runs an automated self-audit against your custom brand profile before generating a single word — which means you get clear, scannable, high-converting website copy that turns visitors into buyers.

---

## Installation

### One-line install (recommended)

Use the [Skills CLI](https://github.com/vercel-labs/skills) to install directly into your AI coding assistant:

```bash
npx skills add woakin/marketing-copy
```

The CLI auto-detects your environment and installs the skill files to the correct location (e.g., `.gemini/skills/`, `.agents/skills/`, `.claude/skills/`, or `.cursor/skills/`).

**Supported agents:** Antigravity · Claude Code · Cursor · Codex · Gemini CLI · Copilot · Cline · Aider

---

### Manual install (alternative)

Clone the repository directly into your skills directory:

```bash
git clone https://github.com/woakin/marketing-copy.git
```

| Agent | Loading instructions |
| :--- | :--- |
| **Antigravity** | Place in your workspace or skills folder; the agent auto-detects `SKILL.md` |
| **Claude Code** | Place in `.claude/skills/marketing-copy/` |
| **Cursor** | Include `SKILL.md` in `.cursorrules` or mention `@SKILL.md` in prompt |
| **Custom LLM** | Supply `SKILL.md` and relevant `references/` into your system prompt |

---

## Directory Structure

```
marketing-copy/
├── SKILL.md                      ← Main router, constraints & self-audit engine
├── README.md                     ← Documentation & examples
├── assets/
│   └── BRAND_TEMPLATE.md         ← Canonical schema for brand & website profiles
├── brands/
│   ├── BRAND_TEMPLATE.md         ← Pointer to canonical schema
│   └── example-acme.md           ← Verified reference brand profile
├── references/
│   ├── storybrand.md             ← SB7 framework for Website Hero & Value Props
│   ├── quick-frameworks.md       ← PAS, BAB & FAB for Problem, Stories & Feature grids
│   ├── made-to-stick.md          ← SUCCES framework for Social Proof & Trust Metrics
│   ├── page-architectures.md     ← High-converting SaaS & Services landing page wireframes
│   └── setup-script.md           ← 9-step website brand onboarding interview
└── scripts/
    ├── validate-brand.sh         ← Checks brand profile completeness & placeholders
    └── validate-skill.mjs        ← Automated CI validation for spec compliance
```

---

## Quick Start

### Step 1 — Onboard your website brand profile

Run the setup interview to generate a persistent brand profile:

```
/setup
```

The agent interviews you across 9 critical website topics (one at a time):

1. Brand Name, Website & Category
2. Value Proposition & Tagline
3. Target Website Visitor & Stage of Awareness
4. The Villain (status quo friction you defeat)
5. Proof Points & Concrete Numbers
6. Primary & Secondary Website CTAs
7. Voice & Tone
8. Forbidden Words & Jargon
9. Competitors & Differentiator

Saves a structured, reusable profile to `./brands/[your-brand].md`.

---

### Step 2 — Generate high-converting website copy

Request any website section or full page. The agent will:
1. Load your brand profile (`./brands/[brand].md`)
2. Select and announce the optimal framework
3. Recite the pre-flight verification checklist
4. Draft the copy with clear visual hierarchy (H1, Subhead, Bullets, CTAs, Microcopy)
5. Run and print the mandatory **Self-Audit Loop**

**Example prompts:**
```
Write an above-the-fold hero section for Acme Analytics using our brand profile.
```
```
Create a 3-column Feature Grid (FAB framework) highlighting our automated billing reconciliation.
```
```
Draft a full SaaS landing page wireframe for our new product launch.
```

---

### Step 3 — Audit existing website copy

Have website copy you've already written? Get an objective conversion audit without unwanted rewriting:

```
/audit [paste your website copy here]
```

---

## Framework Routing for Websites

The skill routes each website component to its optimal psychological framework:

| Website Section / Page Type | Primary Framework | Source Reference |
| :--- | :--- | :--- |
| **Hero Section & Above-the-Fold** | **StoryBrand (SB7) + 3-Second Rule** | `references/storybrand.md` |
| **Problem & Agitation Sections** | **PAS (Problem-Agitate-Solve)** | `references/quick-frameworks.md` |
| **Customer Transformation & Case Studies** | **BAB (Before-After-Bridge)** | `references/quick-frameworks.md` |
| **Feature Grids & Product Cards** | **FAB (Feature-Advantage-Benefit)** | `references/quick-frameworks.md` |
| **Social Proof, Metrics & Trust Blocks** | **SUCCES (Concrete & Credible)** | `references/made-to-stick.md` |
| **Full Landing Page / Sales Page Flow** | **Page Architecture (AIDA + SB7)** | `references/page-architectures.md` |

---

## Before & After Examples (Website Copy)

### 1. Hero Section (Above-the-Fold)

**❌ Without Skill:**
> **H1:** The Next-Generation Intelligent Data Management Platform  
> **Subhead:** At Acme, we leverage cutting-edge AI architecture to deliver seamless operational synergies and world-class enterprise scalability.  
> **CTA:** `[Get Started]`  
> *(Problems: Vague jargon, company-centric "we", zero clarity on what it does in 3 seconds, high friction CTA without microcopy).*

**✅ With Skill (StoryBrand SB7 + 3-Second Rule):**
> **Eyebrow:** FINANCIAL INTELLIGENCE FOR FAST-GROWING SAAS  
> **Headline (H1):** Automated Financial Clarity in 60 Seconds Flat.  
> **Subhead (H2):** Stop spending your Sunday nights cleaning spreadsheet exports. Acme connects to your billing stack and delivers audit-ready board reports on autopilot — so you can make decisions with total confidence.  
>  
> **Primary Button:** `[Start Your Free 14-Day Trial →]`  
> **Secondary Button:** `[Explore Interactive Sandbox]`  
> **Microcopy:** *No credit card required • Connects with QuickBooks and Stripe in 60 seconds*  
> *(Why it works: Passes the 3-second test, customer is the hero, names the Sunday night villain, provides risk-free microcopy).*

---

### 2. Problem Section (PAS Framework)

**❌ Without Skill:**
> "Manual reporting is inefficient and causes human error across teams. Companies lose productivity when using legacy methods."

**✅ With Skill (Problem-Agitate-Solve):**
> **Headline:** The Silent Tax on Every Growing Finance Team.  
> **Problem:** Every month-end, your most expensive operators are locked in a room doing low-value data entry.  
> **Agitate:** One mistyped formula in cell G42 cascades into a $30,000 reporting variance. You find out during your board meeting — when an investor spots the discrepancy. The stress builds, your team burns out, and you spend the next quarter looking over your shoulder.  
> **Solve:** Acme replaces fragile spreadsheets with automated, audit-proof pipelines. Sync your accounts once, and your numbers stay 100% accurate, forever.

---

### 3. Feature Grid (FAB Framework)

**❌ Without Skill:**
> - **Feature 1:** Real-Time Webhook Engine  
> - **Feature 2:** Multi-Entity Currency Conversion  
> - **Feature 3:** Role-Based Access Control (RBAC)  
> *(Problems: Raw technical specs with zero customer benefits explained).*

**✅ With Skill (Feature-Advantage-Benefit):**
> - **Instant Ledger Sync:** Our zero-delay webhook engine pulls transactions in real time... *which means you never make hiring or budget decisions on stale data.*
> - **Automated Multi-Currency:** Automatically reconciles foreign exchange rates at the exact millisecond of each charge... *which means month-end currency variances drop to zero.*
> - **Granular Department Locks:** Assign permissions by team, spend category, or executive tier... *which means you can share live dashboards without exposing executive compensation.*

---

### 4. Transformation Block (BAB Framework)

**❌ Without Skill:**
> "Client X was happy with our platform. They experienced a 40% efficiency boost in their accounting processes after using our tool."

**✅ With Skill (Before-After-Bridge):**
> **Before:** Before Acme, the finance team at TechFlow spent the first 8 days of every single month manually chasing receipts and fixing reconciliation errors. They were exhausted, perpetually behind, and dreading every month-end.  
> **After:** Today, TechFlow closes their books on Day 1 by 11:00 AM. Zero late nights, zero discrepancies, and complete peace of mind.  
> **The Bridge:** They plugged Acme into their billing stack in under 15 minutes — automating 99.4% of their receipt extraction with audit-ready accuracy.

---

## The Mandatory Self-Audit

Every response produced by the skill ends with a structured audit block:

```
━━━━━━━━━━━━━━━━━━━━━━━━
SELF-AUDIT
━━━━━━━━━━━━━━━━━━━━━━━━
Framework: StoryBrand (SB7) | Website Section: Hero Above-the-Fold | Brand: Acme Analytics

FRAMEWORK SCORE: 7 / 7
✅ Hero  ✅ External Problem  ✅ Internal Problem  ✅ Philosophical
✅ Guide  ✅ Plan  ✅ Call to Action

3-SECOND CLARITY CHECK:
Can a visitor answer What it is, Who it's for, and What they get in 3 seconds?
Result: PASS ✅

JARGON CHECK:
Scanned for: leverage, synergy, world-class, robust, seamless, innovative, disruptive...
Found: None | Result: CLEAN ✅

EMPATHY & VILLAIN CHECK:
External villain named: Sunday-night spreadsheet cleanup → ADDRESSED ✅
Internal visitor emotion addressed: Boardroom anxiety → ADDRESSED ✅

HERO CHECK:
Visitor positioned as Hero; Acme as the automated Guide? YES ✅

CTA & FRICTION CHECK:
Primary CTA has action verb + tangible outcome? YES ✅
Friction-reducing microcopy present beneath button? YES ✅

OVERALL: APPROVED ✅
━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## Command Reference

| Command | Description |
| :--- | :--- |
| `/setup` | Run the Website Brand Onboarding Interview → saves `./brands/[name].md` |
| `/load [brand-name]` | Load an existing brand profile |
| `/list-brands` | List all saved brand profiles in `./brands/` |
| `/audit [copy]` | Score existing website copy against conversion principles — no rewrite |
| `/rewrite [section type]` | Rewrite provided copy using the optimal framework for that section |
| `/frameworks` | List all website frameworks and section mappings |
| `/validate [brand-name]` | Check brand profile completeness via `validate-brand.sh` |

---

## Global Constraints (Always Enforced)

- **The 3-Second Header Rule:** What is it? Who is it for? What do I get? Must be answered above the fold.
- **The Hero Shift:** The visitor is the hero; the company is the guide. No self-serving "We are...".
- **Scanability:** F-pattern optimization. Concise paragraphs, bold bullet leads, clear subheads.
- **Benefit Coupling:** Every feature must couple with "...which means [outcome]".
- **Outcome-Driven CTAs + Microcopy:** High-intent verbs paired with friction reducers.
- **The Villain Must Be Named:** Explicitly name the status quo friction.

---

## Spec Compliance & CI

Run local validation tests:

```bash
npm test
```

This verifies:
- `SKILL.md` frontmatter and metadata compliance
- Consistency between all references and routing tables
- Clean validation of brand templates and reference profiles via `scripts/validate-brand.sh`

---

## License

Released under the [MIT License](./LICENSE). Free to use, adapt, and build upon.
