# acme-ai-consulting — rules for Claude

## Commits

### Never run `git commit` or `git push` directly

All commits go through `/flow:flow-commit`. Direct `git commit` and `git push` are forbidden. `finalize-commit` (called by the skill) handles the push.

### Only invoke `/flow:flow-commit` when the user says the word "commit"

The word `commit` must appear in the user's current-turn message. Valid:

- "commit it"
- "commit and push"
- "commit this"
- "yes commit"

NOT valid (even after a "ready to commit?" question):

- "yes"
- "good"
- "proceed"
- "continue"
- "looks good"
- "great"

If the current-turn message does not contain the word "commit", do not invoke the skill. If ambiguous, ask one line: "commit now?" and wait.

## Destructive or externally-visible actions

Never take these without an explicit instruction naming the action:

- Disabling GitHub Pages or other services
- Deleting repos, branches, remote refs, files
- Force-pushing
- `rm`, `rm -rf`
- Any deploy

"I want to review locally" does NOT authorize disabling Pages. "Clean this up" does NOT authorize deletion. Ambiguous → ask.

## `flow ci` green is not a green light to commit infrastructure

`flow ci` exercises format, lint, unit tests, production build. It does NOT exercise:

- nginx configs (`env/nginx/*.conf`)
- `env/nginx/install.sh`, SSL cert generation
- `bin/start`, `bin/stop`, `bin/status`, `bin/logs`
- `/etc/hosts`, system keychain
- Live browser behavior through nginx proxy

Before inviting a commit of infrastructure: user runs it end-to-end, confirms it works, then says "commit".

## Answering questions

When the user asks a direct question, answer the question. Do not substitute action for an answer.

## Run diagnostics yourself — never ask the user to run commands you can run

You have Bash tool access to the same machine the user is on. When debugging, **you** run `curl`, `dig`, `openssl`, `cat`, `ls`, `ps`, etc. Do not ask the user to paste output.

Only ask the user to run a command when it genuinely requires their input:

- Interactive `sudo` prompts (password entry)
- GUI triggers (`open`, browser screenshots the user has to describe)
- Secrets the user has not shared
- Credentials or keychain access you do not have

In those cases, say exactly why before asking.

## When uncertain

Ask. One line. Wait.
