---
name: psilocybin-assessment
description: >-
  Administer the Psilocybin Readiness Assessment Test: a structured
  educational screening for regulated psilocybin-assisted therapy pathways.
  Use when the user asks for a psilocybin assessment, screening test,
  readiness quiz, or intake questionnaire.
---

# Psilocybin Readiness Assessment Test (PRAT-24)

Educational screening tool only. **Not** a medical diagnosis, **not** medical clearance, **not** permission to use psilocybin. AI-administered; results must be reviewed with a licensed clinician before any real session.

Follow `rules/therapy-safety.mdc`. Never output doses, sourcing, or DIY administration advice from scores.

## How to administer

1. Open with this disclaimer (once):

> This is the **Psilocybin Readiness Assessment Test (PRAT-24)** — an educational screen for talking with a clinician about regulated care. It cannot clear you medically. If you are in crisis, contact local emergency services or a crisis line now.

2. Ask questions **one section at a time** (A→F). Wait for answers before the next section.
3. Accept Yes / No / Not sure / short free text. If skipped, mark **Unknown** and treat as CAUTION.
4. After all sections, compute the scorecard and give **STOP / CAUTION / CONDITIONAL-GO**.
5. End with top risks, top strengths, and **one** next action. Offer `/psilocybin-session` prepare phase if CONDITIONAL-GO and they want a prep plan.

Prefer the interactive dashboard when the user wants a UI:

- Path: `mushroom-therapy-experts/assessment-dashboard/`
- Serve: `python3 -m http.server 8765` from that folder, then open `http://127.0.0.1:8765`

## Answer key conventions

| Code | Meaning |
|------|---------|
| Y | Yes |
| N | No |
| U | Unknown / not sure |
| STOP | Any hard-stop trigger → overall STOP regardless of points |
| +2 | Strong readiness / protective factor |
| +1 | Mild readiness |
| 0 | Neutral |
| −1 | Caution |
| −2 | Strong caution |

Max protective subtotal (no stops): **32**. Report both **Stop flags** and **Readiness points**.

---

## Section A — Intention & expectations (Q1–Q4)

**Q1.** What is your main reason for considering psilocybin therapy?  
*(food compulsion / addiction, depression/anxiety, trauma, curiosity, spiritual, other — free text)*  
Score later qualitatively; flag “cure my life in one session” as −2.

**Q2.** Do you believe one session will permanently fix the problem? (Y/N/U)  
N = +2 · U = 0 · Y = −2

**Q3.** Are you willing to do preparation and integration work with a professional (not just the medicine day)? (Y/N/U)  
Y = +2 · U = 0 · N = −2

**Q4.** Is your primary goal weight loss or “appetite kill”? (Y/N/U)  
N = +1 · U = 0 · Y = −2 *(redirect to ED/medical care)*

---

## Section B — Psychiatric safety (Q5–Q10)

**Q5.** Current thoughts of suicide with a plan or intent, or ability to stay safe feels shaky? (Y/N/U)  
**Y or U with distress → STOP** · N = +2

**Q6.** Personal history of psychosis, schizophrenia, or schizophreniform illness? (Y/N/U)  
**Y → STOP** · U = −2 · N = +2

**Q7.** Personal history of bipolar I or manic episode? (Y/N/U)  
**Y → STOP (needs specialty clearance; default STOP here)** · U = −2 · N = +1

**Q8.** First-degree family history of psychosis or bipolar I? (Y/N/U)  
Y = −2 · U = −1 · N = +1

**Q9.** Psychiatric hospitalization in the last 12 months? (Y/N/U)  
Y = −2 · U = −1 · N = +1

**Q10.** Are you in active trauma flooding / daily panic that feels unmanageable without support? (Y/N/U)  
Y = −2 · U = −1 · N = +1

---

## Section C — Medical & medicines (Q11–Q15)

**Q11.** Pregnancy, trying to conceive, or breastfeeding? (Y/N/U)  
**Y → STOP** · U = −2 · N = +1

**Q12.** Known serious heart disease, uncontrolled blood pressure, or prior heart attack/stroke? (Y/N/U)  
**Y → STOP pending cardiology/physician clearance (record STOP)** · U = −2 · N = +1

**Q13.** Seizure disorder or serious neurological disease under active treatment? (Y/N/U)  
Y = −2 · U = −1 · N = +1

**Q14.** Currently taking MAOIs, lithium, or other medicines your clinician has flagged as psychedelic-relevant? (Y/N/U/List)  
Y = −2 *(must have prescriber review)* · U = −2 · N = +1 · Always say: interactions need clinician/pharmacist review — do not adjudicate yourself.

**Q15.** Heavy daily alcohol use, benzodiazepine dependence, or other unstable substance dependence right now? (Y/N/U)  
Y = −2 · U = −1 · N = +1

---

## Section D — Eating & addiction context (Q16–Q18)

**Q16.** Active binge-and-purge cycles, severe food restriction, or medically unstable eating disorder? (Y/N/U)  
Y = −2 *(prefer ED specialty care first)* · U = −1 · N = +1

**Q17.** If food compulsion / addiction is the goal: are you already connected to therapy or medical care for it? (Y/N/U/NA)  
Y = +2 · NA = 0 · U = 0 · N = −1

**Q18.** Do you expect psilocybin alone (no therapy) to resolve addiction or binge eating? (Y/N/U)  
N = +2 · U = 0 · Y = −2

---

## Section E — Supports & setting (Q19–Q22)

**Q19.** Do you have a sober, trusted human who can be present for a supervised session day? (Y/N/U)  
Y = +2 · U = −1 · N = −2

**Q20.** Stable private place to recover for 24–48 hours afterward? (Y/N/U)  
Y = +2 · U = −1 · N = −2

**Q21.** Planning to do this entirely alone, without any clinical or sober support? (Y/N/U)  
**Y → STOP for unsupervised pathway** · U = −2 · N = +2

**Q22.** Major life crisis this week (eviction, acute grief, violence) with no stability? (Y/N/U)  
Y = −2 · U = −1 · N = +1

---

## Section F — Access & legality (Q23–Q24)

**Q23.** Are you pursuing a **legal / regulated** route (licensed service, prescription context where legal, or clinical trial) rather than informal illegal supply? (Y/N/U)  
Y = +2 · U = −1 · N = −2 *(state legal risk; do not help obtain)*  

**Q24.** Willing to postpone if screening with a licensed clinician says wait? (Y/N/U)  
Y = +2 · U = 0 · N = −2

---

## Scorecard

### 1. Hard STOP
If any STOP trigger fired, overall result is **STOP**. List each trigger. Do not soften into GO.

### 2. Readiness points
Sum numeric scores from answered items (ignore pure free-text Q1 except expectation penalty if applicable).

| Points (no STOP) | Result |
|------------------|--------|
| ≤ 0 | **STOP / not ready** — stabilize care first |
| 1–10 | **CAUTION** — address gaps before any regulated pathway |
| 11–20 | **CAUTION → CONDITIONAL** — possible with clinician-led plan |
| ≥ 21 | **CONDITIONAL-GO** — reasonable to *seek* regulated assessment/intake (still not clearance) |

### 3. Report template

```
## PRAT-24 results
- Result: STOP | CAUTION | CONDITIONAL-GO
- Stop flags: …
- Readiness points: X / 32
- Top 3 risks: …
- Top 3 strengths: …
- One next action: …
- Reminder: Not medical clearance. No dosing. Licensed clinician required.
```

## Crisis override

If answers indicate immediate danger to self/others, stop the quiz and give crisis/emergency guidance only.
