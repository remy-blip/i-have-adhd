# Project state

- **Current Objective:** Ship PRAT-24 (Psilocybin Readiness Assessment Test) as an interactive screening command/skill.
- **Active Code Matrix:**
  - `mushroom-therapy-experts/skills/psilocybin-assessment/SKILL.md`
  - `mushroom-therapy-experts/commands/psilocybin-assessment.md`
  - `mushroom-therapy-experts/agents/psilocybin-therapy-specialist.md`
  - `mushroom-therapy-experts/README.md`
- **Architectural Decisions:**
  - PRAT-24 is educational only; STOP flags override point totals.
  - Administered section-by-section (A–F), not one giant form dump.
  - Results never include dosing or medical clearance.
- **Next Tactical Steps:**
  - [x] Author PRAT-24 skill + `/psilocybin-assessment` command
  - [ ] Sync local plugin, commit, push, update PR
