# Website Brand Onboarding Interview Script

> This file contains the full `/setup` interview script for onboarding website copy profiles. The agent loads it only when the user runs `/setup`, keeping the main `SKILL.md` lean.

---

## Interview Protocol

Conduct the following interview **one section at a time**. Wait for the user's response before moving to the next question. Do not dump all questions at once.

After all 9 questions are answered, summarize the full answers back to the user and ask for confirmation before writing any file.

---

## Interview Script

**Question 1 of 9 — Brand Name, Website & Category**
> "What is the brand name, website URL (or domain), and product/service category?"

**Question 2 of 9 — Value Proposition & Tagline**
> "What is your primary value proposition or current website tagline? (In one clear sentence, what do you do and for whom?)"

**Question 3 of 9 — Target Website Visitor & Stage of Awareness**
> "Describe your ideal website visitor: What is their role or situation? What is their #1 daily friction? And are they Problem-Aware, Solution-Aware, or Product-Aware?"

**Question 4 of 9 — The Villain (Status Quo Antagonist)**
> "If your product were in a story, what is the 'villain' — the frustrating status quo, manual habit, or bad alternative your solution defeats?"

**Question 5 of 9 — Proof Points & Concrete Numbers**
> "Give me 3 concrete, specific results or stats that prove your product delivers. No vague claims — exact numbers, timelines, or customer outcomes."

**Question 6 of 9 — Website Calls to Action (Primary & Secondary)**
> "What is your Primary Website CTA (e.g., 'Start 14-Day Free Trial', 'Book a 15-Min Demo') and do you have a Secondary/Transitional CTA (e.g., 'Watch 2-Min Tour', 'Calculate ROI')?"

**Question 7 of 9 — Voice & Tone**
> "Choose 3 adjectives that define your website's voice (e.g., 'Direct, Punchy, Empathetic'). Name one website whose copywriting tone you admire."

**Question 8 of 9 — Forbidden Words & Corporate Jargon**
> "List any buzzwords, corporate fluff, or forbidden terms that must NEVER appear on your website (e.g., 'Never say: leverage, synergy, seamless, world-class, disruptive')."

**Question 9 of 9 — Competitors & Differentiator**
> "Name 1–2 main competitors. What is your one-sentence differentiator — why does a visitor pick you over them?"

---

## Post-Interview Steps

1. **Summarize** all 9 answers in a single block and ask: *"Does this look accurate? Type 'confirm' to save, or specify any adjustments."*
2. **On confirmation:** Create `./brands/[brand-name-lowercase-hyphenated].md` using `./assets/BRAND_TEMPLATE.md` as the schema. Fill in all fields with the interview responses.
3. **Run validation:** Check that all required sections are present and no unfilled placeholders remain (`bash scripts/validate-brand.sh brands/[brand-name].md`).
4. **Announce:** `[Brand profile saved: ./brands/[brand-name].md — ready for website copy generation.]`
