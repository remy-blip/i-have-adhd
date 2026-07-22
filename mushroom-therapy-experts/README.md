# Mushroom Therapy Experts

Cursor plugin that adds specialist **agents** for evidence-based discussion of psilocybin / psychoactive mushroom therapy.

These are AI personas for education and framing — **not** licensed clinicians and **not** a treatment service.

## Experts

| Agent | Role |
|-------|------|
| `psilocybin-research-analyst` | Clinical trial evidence and study limits |
| `addiction-medicine-consultant` | Addiction / compulsive-use framing and standard care |
| `eating-disorder-clinician` | Binge eating and ED-informed perspective |
| `psychedelic-harm-reduction` | Risks, legal caution, non-enabling safety |
| `ethnomycology-context` | Cultural history vs modern "mushroom therapy" |
| `psilocybin-therapy-specialist` | Patient assessment → prep plan → in-session guide → integration |

## Skill / command

- Skill: `consult-therapy-panel` — synthesizes the panel for addiction / food-compulsion / therapy claims
- Command: `/mushroom-therapy-panel` — same panel format on demand
- Skill: `psilocybin-session-facilitation` — assessment, preparation plan, trip/session guide
- Command: `/psilocybin-session` — run assess / prepare / guide / integrate

## Install (this repo)

If you use the marketplace entry from this repository:

```bash
# Claude Code example — after marketplace add of this repo
claude plugin install mushroom-therapy-experts@i-have-adhd
```

For local Cursor use, copy or symlink this folder to `~/.cursor/plugins/local/mushroom-therapy-experts/`.

## Safety

See `rules/therapy-safety.mdc`. The plugin will not help source, grow, forage, extract, or dose illegal substances, and it will not claim mushrooms cure food addiction.

The therapy specialist can structure **assessment**, **non-drug preparation**, and **grounding guide language**. It will not medically clear anyone, set milligram/gram doses, or replace an in-person clinician and sober sitter.
