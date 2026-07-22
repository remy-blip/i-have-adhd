# PRAT-24 Assessment Dashboard

Interactive browser dashboard for the **Psilocybin Readiness Assessment Test (PRAT-24)**.

Educational screening only — **not** medical clearance, diagnosis, or dosing advice.

## Run locally

```bash
cd /workspace/mushroom-therapy-experts/assessment-dashboard
python3 -m http.server 8765
```

Open [http://127.0.0.1:8765](http://127.0.0.1:8765).

Or open `/workspace/mushroom-therapy-experts/assessment-dashboard/index.html` directly in a browser (localStorage progress still works).

## What it includes

- Welcome + scoring explainer
- Sections A–F with live progress and running points
- STOP flag detection
- Results dashboard: readiness meter, flags, risks, strengths, section bars, next action
- Print / save via the browser print dialog
