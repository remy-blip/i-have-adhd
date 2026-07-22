# Install i-have-adhd

One skill. Claude Code, Codex, Antigravity, Cursor, and any harness that reads agent skills.

<details>
<summary><strong>Claude Code</strong></summary>

### Install

```bash
claude plugin marketplace add ayghri/i-have-adhd
claude plugin install i-have-adhd@i-have-adhd
```

Type `/i-have-adhd`.

### Verify

```bash
claude plugin list
```

### Update

```bash
claude plugin marketplace update i-have-adhd
```

### Uninstall

```bash
claude plugin uninstall i-have-adhd
claude plugin marketplace remove i-have-adhd
```

Or keep it installed and turn it off: `claude plugin disable i-have-adhd`.

### Always-on (optional)

Add to `~/.claude/CLAUDE.md`:

```markdown
## Output style

Always follow the rules in the `i-have-adhd` skill: action-first, numbered steps, no preamble, no closers, state restated each turn.
```

</details>

<details>
<summary><strong>Codex</strong></summary>

### Install

```bash
codex plugin marketplace add ayghri/i-have-adhd --ref main
codex plugin add i-have-adhd@i-have-adhd
```

Type `$i-have-adhd`.

### Verify

```bash
codex plugin list
```

### Update

```bash
codex plugin marketplace upgrade i-have-adhd
codex plugin remove i-have-adhd
codex plugin add i-have-adhd@i-have-adhd
```

### Uninstall

```bash
codex plugin remove i-have-adhd
codex plugin marketplace remove i-have-adhd
```

### Always-on (optional)

Add to `~/.codex/AGENTS.md`:

```markdown
## Output style

Always follow the rules in the `i-have-adhd` skill: action-first, numbered steps, no preamble, no closers, state restated each turn.
```

</details>

<details>
<summary><strong>Antigravity (<code>agy</code>)</strong></summary>

### Install

```bash
agy plugin install https://github.com/ayghri/i-have-adhd
```

### Verify

```bash
agy plugin list
```

### Update

```bash
agy plugin uninstall i-have-adhd
agy plugin install https://github.com/ayghri/i-have-adhd
```

### Uninstall

```bash
agy plugin uninstall i-have-adhd
```

Or keep it installed and turn it off: `agy plugin disable i-have-adhd`.

### Always-on (optional)

Add to `~/.gemini/GEMINI.md`:

```markdown
## Output style

Always follow the rules in the `i-have-adhd` skill: action-first, numbered steps, no preamble, no closers, state restated each turn.
```

</details>

<details>
<summary><strong>Cursor (plugin)</strong></summary>

Native Cursor plugin via `.cursor-plugin/plugin.json`. Ships the same `skills/i-have-adhd` skill.

### Install (local, immediate)

```bash
git clone https://github.com/ayghri/i-have-adhd.git ~/.cursor/plugins/local/i-have-adhd
```

Or from an existing clone:

```bash
mkdir -p ~/.cursor/plugins/local
cp -R /path/to/i-have-adhd ~/.cursor/plugins/local/i-have-adhd
```

Restart Cursor (or open a new Agent chat). Type `/i-have-adhd`.

### Verify

Confirm the plugin folder and skill exist:

```bash
ls ~/.cursor/plugins/local/i-have-adhd/.cursor-plugin/plugin.json
ls ~/.cursor/plugins/local/i-have-adhd/skills/i-have-adhd/SKILL.md
```

In Agent chat, type `/` and look for `i-have-adhd`.

### Update

```bash
cd ~/.cursor/plugins/local/i-have-adhd && git pull
```

Start a new Agent chat so Cursor re-reads the skill.

### Uninstall

```bash
rm -rf ~/.cursor/plugins/local/i-have-adhd
```

### Always-on (optional)

Paste into **Cursor Settings → Rules → User Rules**, or a project rule under `.cursor/rules/` with `alwaysApply: true`:

```markdown
## Output style

Always follow the rules in the `i-have-adhd` skill: action-first, numbered steps, no preamble, no closers, state restated each turn.
```

</details>

<details>
<summary><strong>Cursor, OpenCode, Amp, Pi, and any other agent-skills harness</strong></summary>

Works with any harness that reads agent skills. Swap `-a <agent>` for yours. Prefer the Cursor plugin section above when you want a first-class Cursor install.

### Install

```bash
npx skills add ayghri/i-have-adhd                  # this workspace
npx skills add ayghri/i-have-adhd -g               # all projects
npx skills add ayghri/i-have-adhd -a cursor -y     # one agent only
npx skills add ayghri/i-have-adhd -a opencode -y
```

New agent chat, type `/i-have-adhd`.

Without the CLI, copy the skill folder into whatever path your agent scans:

```bash
git clone https://github.com/ayghri/i-have-adhd
mkdir -p ~/.cursor/skills     # Cursor. Use .agents/skills for OpenCode, or your agent's own path
cp -R i-have-adhd/skills/i-have-adhd ~/.cursor/skills/
```

### Verify

```bash
npx skills list
npx skills ls -g    # if installed globally
```

### Update

```bash
npx skills update i-have-adhd
npx skills update -g    # if installed globally
```

### Uninstall

```bash
npx skills remove i-have-adhd
npx skills remove i-have-adhd -g    # if installed globally
```

### Always-on (optional)

Paste this into your agent's persistent rules file. Cursor: **Settings → Rules → User Rules**, or a project rule under `.cursor/rules/` with `alwaysApply: true`. OpenCode: `~/.config/opencode/AGENTS.md`.

```markdown
## Output style

Always follow the rules in the `i-have-adhd` skill: action-first, numbered steps, no preamble, no closers, state restated each turn.
```

</details>

## How activation works

1. **Installed, not invoked.** Nothing happens. `SKILL.md` sets `disable-model-invocation: true`, so the model never sees the skill and never applies the rules on its own.
2. **You type `/i-have-adhd`.** Rules on for that session. The skill body tells the model to keep applying them on every turn until you say "stop adhd mode" or "normal mode".
3. **You add the always-on config above.** Rules on from message one, every session.

No middle ground. If you did not turn it on, it is off.

## Troubleshooting

**`/i-have-adhd` not in autocomplete.** Restart the agent. The plugin index is read at startup.

**`claude plugin marketplace add` fails.** Use the `owner/repo` form. A local path must point at the repo root, not `.claude-plugin/`.

**Installed but replies still preamble.** Open a new session. If it still drifts, tighten the wording in `skills/i-have-adhd/SKILL.md`.

**Want different rules.** Fork, edit `skills/i-have-adhd/SKILL.md`, then install your fork (drop upstream first — names collide):

```bash
claude plugin uninstall i-have-adhd
claude plugin marketplace remove i-have-adhd
claude plugin marketplace add <your-username>/i-have-adhd
claude plugin install i-have-adhd@i-have-adhd
```

For Cursor local plugin: clone your fork over `~/.cursor/plugins/local/i-have-adhd`, restart, re-invoke `/i-have-adhd`.

**Skill missing after `npx skills add`.** Start a new agent chat. Skills are indexed at session start. Confirm the folder landed where your agent scans (`~/.cursor/skills/` for Cursor, `.agents/skills/` for OpenCode) and that the frontmatter `name` matches the folder name.

**Cursor plugin missing after clone.** Confirm `~/.cursor/plugins/local/i-have-adhd/.cursor-plugin/plugin.json` exists, then restart Cursor or open a new Agent chat.
