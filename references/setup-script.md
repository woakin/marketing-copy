# Optional Brand Onboarding & Save Script

> **Note:** This script is **100% optional**. The skill operates immediately without requiring setup. This protocol is only loaded when a user explicitly requests a guided walkthrough (`/setup`) or saves their brand context (`/save-brand`).

---

## Fast Save (`/save-brand [name]`)

When the user asks to save their brand after generating copy, extract the context from the conversation and generate `./brands/[name].md` using `./assets/BRAND_TEMPLATE.md`. Confirm with:
`[Brand profile saved: ./brands/[name].md — will be loaded automatically when requested.]`

---

## Guided Walkthrough (`/setup`)

If the user explicitly runs `/setup`, conduct the following rapid interview **one section at a time**:

1. **Brand Name, Website & Category:** What is the brand name, URL, and category?
2. **Value Proposition & Tagline:** What problem do you solve in one clear sentence?
3. **Target Visitor & Friction:** Who is the visitor, and what is their #1 daily frustration?
4. **The Villain:** What frustrating status quo or bad alternative does your product defeat?
5. **Concrete Proof Points:** Give 1–3 specific numbers (time saved, % improvement, customer volume).
6. **Website CTAs:** What is your primary CTA button, and do you have a secondary CTA?
7. **Voice & Tone:** 3 tone adjectives (e.g., Direct, Punchy, Empathetic).
8. **Forbidden Words:** Any buzzwords or corporate jargon to strictly ban.
9. **Differentiator:** Why does a visitor pick you over competitors in one sentence?

After completion, save to `./brands/[name].md`.
