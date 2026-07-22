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

## Skill / command

- Skill: `consult-therapy-panel` — synthesizes the panel for addiction / food-compulsion / therapy claims
- Command: `/mushroom-therapy-panel` — same panel format on demand

## Install (this repo)

If you use the marketplace entry from this repository:

```bash
# Claude Code example — after marketplace add of this repo
claude plugin install mushroom-therapy-experts@i-have-adhd
```

For local Cursor use, copy or symlink this folder to `~/.cursor/plugins/local/mushroom-therapy-experts/`.

## Safety

See `rules/therapy-safety.mdc`. The plugin will not help source, grow, forage, extract, or dose illegal substances, and it will not claim mushrooms cure food addiction.
