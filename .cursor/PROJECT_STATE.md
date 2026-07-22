# Project state

- **Current Objective:** Add a psilocybin therapy specialist agent for assessment, prep planning, and in-session guidance.
- **Active Code Matrix:**
  - `mushroom-therapy-experts/agents/psilocybin-therapy-specialist.md`
  - `mushroom-therapy-experts/skills/psilocybin-session-facilitation/SKILL.md`
  - `mushroom-therapy-experts/commands/psilocybin-session.md`
  - `mushroom-therapy-experts/rules/therapy-safety.mdc`
  - `mushroom-therapy-experts/README.md`
- **Architectural Decisions:**
  - Facilitator covers Assess → Prepare → Guide → Integrate.
  - Prep plans are non-pharmacological only; no mg/gram dosing or sourcing.
  - Guide mode is grounding/presence language; requires human sitter disclaimer.
- **Next Tactical Steps:**
  - [x] Author `psilocybin-therapy-specialist` + session skill/command
  - [ ] Sync local plugin copy, commit, push, update PR
