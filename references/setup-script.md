# Brand Onboarding Interview Script

> This file contains the full `/setup` interview script. The agent loads it only when the user runs `/setup`, keeping the main `SKILL.md` lean.

---

## Interview Protocol

Conduct the following interview **one section at a time**. Wait for the user's response before moving to the next question. Do not present all questions at once.

After all 9 questions are answered, summarize the full answers back to the user and ask for confirmation before writing any file.

---

## Interview Script

**Question 1 of 9 — Brand Name & Industry**
> "What is the brand name, and what industry or category does it operate in?"

**Question 2 of 9 — Tagline**
> "Does the brand have an existing tagline or positioning statement? (Type 'none' if not.)"

**Question 3 of 9 — Ideal Customer Persona**
> "Describe your ideal customer: What is their role or situation? What is their #1 pain point? What do they secretly want to be or feel?"

**Question 4 of 9 — The Villain**
> "If your brand were a story, what is the 'villain' — the one external problem or frustrating status quo your brand exists to defeat?"

**Question 5 of 9 — Proof Points**
> "Give me 3 concrete, specific results or stats that prove your brand works. No vague claims — numbers, outcomes, timelines. (e.g., '43% faster onboarding', 'saves 6 hours/week')"

**Question 6 of 9 — Voice & Tone**
> "Choose 3 adjectives that describe your brand's voice (e.g., 'Bold, Empathetic, Direct'). Then name one brand that sounds like you — even if it's in a different industry."

**Question 7 of 9 — Forbidden Words**
> "List any words, phrases, or tones that are completely off-brand. (e.g., 'Never say: leverage, synergy, disruptive, seamless')"

**Question 8 of 9 — Mandatory Phrases**
> "Are there any phrases, slogans, or claims that *must* appear in every asset? (Type 'none' if not.)"

**Question 9 of 9 — Competitors & Differentiation**
> "Name 1-2 direct competitors. What do customers say when they choose you over them? What is your one-line differentiator?"

---

## Post-Interview Steps

1. **Summarize** all 9 answers in a single block and ask: *"Does this look correct? Type 'confirm' to save, or tell me what to change."*
2. **On confirmation:** Create `./brands/[brand-name-lowercase-hyphenated].md` using `./assets/BRAND_TEMPLATE.md` as the schema. Fill in all fields with the interview answers.
3. **Run validation:** Announce `[Validating brand profile...]` and check that all 8 required sections are populated. If any field contains a placeholder like `[Brand Name]`, flag it and ask the user to fill it in.
4. **Announce:** `[Brand profile saved: ./brands/[brand-name].md — ready for copy generation.]`
