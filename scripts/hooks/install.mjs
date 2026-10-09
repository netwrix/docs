#!/usr/bin/env node

/**
 * Installs the hk git hooks defined in .config/hk.pkl.
 *
 * Runs from `npm install` (prepare) and `mise install` (postinstall). Never
 * fails the install: if mise is missing it prints setup steps and exits 0.
 */

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const REPO_ROOT = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const HOOKS = ['pre-commit', 'pre-push'];

// The hooks live in repo-wide git config, so they also fire on branches that
// predate .config/hk.pkl (where `mise x -- hk` can't resolve hk) and from git
// clients without mise on PATH. Git runs hooks from the worktree root.
const GUARD =
  'test ! -f .config/hk.pkl || ! { command -v mise >/dev/null 2>&1 || ' +
  '{ echo "hooks: mise is not on PATH, so the Vale checks were skipped." >&2; false; }; } || ';

/** Inserts GUARD after hk's `HK=0` check in a hook command or shim. */
export function guardHookCommand(command) {
  if (command.includes(GUARD)) return command;
  const at = command.indexOf('|| ');
  return at === -1 ? command : command.slice(0, at + 3) + GUARD + command.slice(at + 3);
}

/** True when `mise trust --show` lists any config as untrusted. */
export const hasUntrustedConfig = (showOutput) => /: untrusted\s*$/m.test(showOutput);

const run = (cmd, args, opts = {}) => spawnSync(cmd, args, { cwd: REPO_ROOT, encoding: 'utf8', ...opts });

// hk rewrites its hooks on every install, so re-apply the guard each time.
function guardInstalledHooks() {
  for (const hook of HOOKS) {
    const key = `hook.hk-${hook}.command`;
    const command = run('git', ['config', '--local', '--get', key]).stdout.trim();
    if (command) run('git', ['config', '--local', key, guardHookCommand(command)]);

    let shim = run('git', ['rev-parse', '--git-path', `hooks/${hook}`]).stdout.trim();
    if (shim && !isAbsolute(shim)) shim = join(REPO_ROOT, shim);
    if (shim && existsSync(shim)) {
      const content = readFileSync(shim, 'utf8');
      if (content.includes('hk run')) writeFileSync(shim, guardHookCommand(content));
    }
  }
}

function main() {
  // mise's postinstall hook runs this again while we call `mise x` below.
  if (process.env.CI || process.env.DOCS_HOOKS_INSTALLING) return;
  if (run('git', ['rev-parse', '--git-dir']).status !== 0) return;

  // Husky set core.hooksPath. On Git older than 2.54, hk writes .git/hooks
  // shims, which git ignores while hooksPath points elsewhere.
  const hooksPath = run('git', ['config', '--local', '--get', 'core.hooksPath']).stdout.trim();
  if (hooksPath.startsWith('.husky')) {
    run('git', ['config', '--local', '--unset', 'core.hooksPath']);
    console.log(`hooks: removed the old husky core.hooksPath (${hooksPath}).`);
  } else if (hooksPath) {
    console.warn(`hooks: core.hooksPath is set to ${hooksPath}; hk hooks may not run on Git older than 2.54.`);
  }

  if (run('mise', ['--version']).status !== 0) {
    console.warn(`
hooks: mise isn't installed, so the Vale pre-commit and pre-push checks are off.
  macOS:   brew install mise
  Windows: winget install jdx.mise
Then run \`mise install\` in this repo.
`);
    return;
  }

  // Trusting is left to the user: mise remembers trust per path, so trusting
  // here would also silently trust any branch checked out at this path later.
  if (hasUntrustedConfig(run('mise', ['trust', '--show']).stdout)) {
    console.warn("hooks: run `mise install` in this repo and accept mise's trust prompt to turn on the Vale hooks.");
    return;
  }

  const env = { ...process.env, DOCS_HOOKS_INSTALLING: '1' };
  const install = run('mise', ['x', '--', 'hk', 'install', '--mise'], { env, stdio: 'inherit' });
  if (install.status !== 0) {
    console.warn('hooks: `hk install` failed; run `mise install` in this repo to retry.');
    return;
  }
  guardInstalledHooks();
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
