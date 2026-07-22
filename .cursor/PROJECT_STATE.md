# Project state

- **Current Objective:** Ship a focused `mushroom-therapy-experts` plugin with specialist agents for psilocybin therapy discussion.
- **Active Code Matrix:**
  - `mushroom-therapy-experts/.cursor-plugin/plugin.json`
  - `mushroom-therapy-experts/agents/*.md`
  - `mushroom-therapy-experts/rules/therapy-safety.mdc`
  - `mushroom-therapy-experts/skills/consult-therapy-panel/SKILL.md`
  - `mushroom-therapy-experts/commands/mushroom-therapy-panel.md`
  - `.claude-plugin/marketplace.json`
  - `README.md`
- **Architectural Decisions:**
  - Keep ADHD skill unchanged; add a separate plugin subdirectory to preserve scope.
  - Agents are clearly labeled AI personas, not clinicians; safety rule blocks sourcing/dosing/foraging help.
  - Panel skill + `/mushroom-therapy-panel` command synthesize multi-lens answers (e.g. food addiction claims).
- **Next Tactical Steps:**
  - [x] Author five expert agents + safety rule
  - [x] Wire marketplace entry and README pointer
  - [x] Commit, push, open PR
  - [x] Sync copy to `~/.cursor/plugins/local/mushroom-therapy-experts`
