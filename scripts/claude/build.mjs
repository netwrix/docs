#!/usr/bin/env node
// Usage: node scripts/claude/build.mjs [<product>|all] [--latest-only] [--clean]
// Runs the Docusaurus production build, logs to .docs-logs/, prints a short summary.
import { spawn, spawnSync } from 'node:child_process';
import { mkdirSync, createWriteStream, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { REPO_ROOT, validateProduct } from './lib/products.mjs';
import { summarize } from './lib/log-summary.mjs';

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith('--')));
const product = args.find((a) => !a.startsWith('--')) || 'all';

if (product !== 'all') {
  try {
    await validateProduct(product);
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}
if (flags.has('--latest-only') && product === 'all') {
  console.error('--latest-only needs a product: DOCS_PRODUCT_LATEST_ONLY only applies to a single-product build.');
  process.exit(1);
}

const logDir = join(REPO_ROOT, '.docs-logs');
mkdirSync(logDir, { recursive: true });
const logPath = join(logDir, `build-${new Date().toISOString().replace(/[:.]/g, '-')}.log`);

if (flags.has('--clean')) {
  console.log('Clearing Docusaurus cache...');
  spawnSync('npm run clear', { cwd: REPO_ROOT, shell: true, stdio: 'ignore' });
}

const env = { ...process.env };
delete env.DOCS_PRODUCT;
delete env.DOCS_PRODUCT_LATEST_ONLY;
if (product !== 'all') env.DOCS_PRODUCT = product;
if (flags.has('--latest-only')) env.DOCS_PRODUCT_LATEST_ONLY = 'true';

console.log(`Building ${product}${flags.has('--latest-only') ? ' (latest version only)' : ''}. Log: ${logPath}`);
const started = Date.now();
const log = createWriteStream(logPath);
const child = spawn('npm run build', { cwd: REPO_ROOT, env, shell: true });
child.stdout.pipe(log, { end: false });
child.stderr.pipe(log, { end: false });
child.on('close', (code) => {
  log.end(() => {
    console.log(summarize(readFileSync(logPath, 'utf8'), {
      exitCode: code ?? 1,
      durationMs: Date.now() - started,
      product,
      logPath,
    }));
    process.exit(code === 0 ? 0 : 1);
  });
});
