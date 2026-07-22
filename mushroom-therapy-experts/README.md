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
- Skill: `psilocybin-assessment` — **PRAT-24 readiness assessment test**
- Command: `/psilocybin-assessment` — administer PRAT-24 section by section

## PRAT-24

The **Psilocybin Readiness Assessment Test** is an educational 24-item screen (intention, psychiatric safety, medical/medicines, eating/addiction, supports, legality). It yields **STOP / CAUTION / CONDITIONAL-GO** for seeking regulated care — not a diagnosis or dose plan.

### Interactive dashboard

Open the browser UI:

```bash
cd /workspace/mushroom-therapy-experts/assessment-dashboard
python3 -m http.server 8765
```

Then visit http://127.0.0.1:8765 — section-by-section flow, live scoring, and a results dashboard (meter, STOP flags, risks/strengths, next action).

Dashboard files:
- `/workspace/mushroom-therapy-experts/assessment-dashboard/index.html`
- `/workspace/mushroom-therapy-experts/assessment-dashboard/styles.css`
- `/workspace/mushroom-therapy-experts/assessment-dashboard/app.js`

## Install (this repo)

If you use the marketplace entry from this repository:

```bash
# Claude Code example — after marketplace add of this repo
claude plugin install mushroom-therapy-experts@i-have-adhd
```

For local Cursor use, copy or symlink `/workspace/mushroom-therapy-experts` to `/home/ubuntu/.cursor/plugins/local/mushroom-therapy-experts`.

## Safety

See `rules/therapy-safety.mdc`. The plugin will not help source, grow, forage, extract, or dose illegal substances, and it will not claim mushrooms cure food addiction.

The therapy specialist can structure **assessment**, **non-drug preparation**, and **grounding guide language**. It will not medically clear anyone, set milligram/gram doses, or replace an in-person clinician and sober sitter.
