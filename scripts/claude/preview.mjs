#!/usr/bin/env node
// Usage: node scripts/claude/preview.mjs start [<product>|all] [--dev|--prod] [--latest-only] [--poll]
//        node scripts/claude/preview.mjs stop | status
import { spawn, spawnSync, execFileSync } from 'node:child_process';
import { mkdirSync, openSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { REPO_ROOT, validateProduct, landingPath } from './lib/products.mjs';
import { summarize } from './lib/log-summary.mjs';

const PORTS = { dev: 4500, prod: 8080 };
const logDir = join(REPO_ROOT, '.docs-logs');
const pidFile = join(logDir, 'preview.pid');
const isWin = process.platform === 'win32';

const args = process.argv.slice(2);
const action = args[0] || 'status';
const flags = new Set(args.filter((a) => a.startsWith('--')));
const product = args.slice(1).find((a) => !a.startsWith('--')) || 'all';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function responds(port) {
  try {
    const res = await fetch(`http://localhost:${port}/`, { signal: AbortSignal.timeout(2000) });
    return res.status < 500;
  } catch {
    return false;
  }
}

function portOwner(port) {
  try {
    if (isWin) {
      const out = execFileSync('netstat', ['-ano'], { encoding: 'utf8' });
      const line = out.split('\n').find((l) => l.includes(`:${port} `) && /LISTENING/.test(l));
      return line ? line.trim().split(/\s+/).pop() : '';
    }
    return execFileSync('lsof', ['-ti', `:${port}`, '-sTCP:LISTEN'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim().split('\n')[0];
  } catch {
    return '';
  }
}

// preview.pid is a file on disk, so validate it before using it: only our two ports, integer PIDs.
function readState() {
  try {
    const state = JSON.parse(readFileSync(pidFile, 'utf8'));
    if (!Number.isInteger(state.pid) || state.pid <= 1) return null;
    // Map back to our own constants rather than trusting the file's value.
    const port = Object.values(PORTS).find((p) => p === state.port);
    if (!port) return null;
    return { ...state, port };
  } catch {
    return null;
  }
}

function readLog(path) {
  try {
    return readFileSync(path, 'utf8');
  } catch {
    return '';
  }
}

function pidAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return e.code === 'EPERM';
  }
}

// Guard against PID reuse: on Unix, the saved PID must still be one of our npm shells.
function isOurProcess(pid) {
  if (!pidAlive(pid)) return false;
  if (isWin) return true;
  try {
    const args = execFileSync('ps', ['-p', String(pid), '-o', 'args='], { encoding: 'utf8' });
    return /npm run/.test(args);
  } catch {
    return false;
  }
}

function processGroup(pid) {
  try {
    return Number(execFileSync('ps', ['-p', String(pid), '-o', 'pgid='], { encoding: 'utf8' }).trim());
  } catch {
    return NaN;
  }
}

function killTree(pid) {
  if (isWin) spawnSync('taskkill', ['/PID', String(pid), '/T', '/F'], { stdio: 'ignore' });
  else {
    try { process.kill(-pid, 'SIGTERM'); } catch { try { process.kill(pid, 'SIGTERM'); } catch {} }
  }
}

async function start() {
  if (product !== 'all') {
    try { await validateProduct(product); } catch (e) { console.error(e.message); process.exit(1); }
  }
  if (flags.has('--latest-only') && product === 'all') {
    console.error('--latest-only needs a product.');
    process.exit(1);
  }
  const mode = flags.has('--prod') ? 'prod' : 'dev';
  const port = PORTS[mode];
  const state = readState();
  if (state && isOurProcess(state.pid)) {
    console.error(`A ${state.mode} preview is already ${(await responds(state.port)) ? 'running' : 'starting or building'} (PID ${state.pid}). Run "stop" first.`);
    process.exit(1);
  }
  if (state) rmSync(pidFile, { force: true }); // stale file from a server that already exited
  if (await responds(port)) {
    console.error(`Port ${port} is already in use (PID ${portOwner(port) || 'unknown'}). Stop that process or run "stop".`);
    process.exit(1);
  }

  const env = { ...process.env };
  delete env.DOCS_PRODUCT;
  delete env.DOCS_PRODUCT_LATEST_ONLY;
  if (product !== 'all') env.DOCS_PRODUCT = product;
  if (flags.has('--latest-only')) env.DOCS_PRODUCT_LATEST_ONLY = 'true';

  mkdirSync(logDir, { recursive: true });
  const logPath = join(logDir, `preview-${mode}.log`);
  const out = openSync(logPath, 'w');
  const startScript = flags.has('--poll') ? 'start-chok' : 'start';
  const cmd = mode === 'dev' ? `npm run ${startScript}` : 'npm run build && npm run serve';
  const child = spawn(cmd, { cwd: REPO_ROOT, env, shell: true, detached: true, stdio: ['ignore', out, out] });
  child.unref();
  writeFileSync(pidFile, JSON.stringify({ pid: child.pid, port, mode, product, logPath }));

  const url = `http://localhost:${port}${await landingPath(product)}`;
  console.log(`Starting ${mode} server for ${product} (PID ${child.pid}). Log: ${logPath}`);
  const deadline = Date.now() + 9 * 60 * 1000;
  while (Date.now() < deadline) {
    if (await responds(port)) {
      console.log(`=== Summary ===\nResult: RUNNING\nURL: ${url}\nStop with: /docs-preview stop`);
      return;
    }
    if (child.exitCode !== null) break;
    await sleep(3000);
  }
  const text = readLog(logPath);
  if (child.exitCode !== null) {
    // The build or server exited: reuse the build summary so broken links and MDX errors are listed.
    rmSync(pidFile, { force: true });
    console.log(summarize(text, { exitCode: child.exitCode || 1, product, logPath }));
  } else {
    const tail = text.split('\n').filter(Boolean).slice(-10).join('\n');
    console.log(`=== Summary ===\nResult: NOT READY YET\nThe server did not respond on port ${port} within 9 minutes. Last log lines:\n${tail}\nFull log: ${logPath}\nCheck again with: /docs-preview status`);
  }
  process.exit(1);
}

async function stop() {
  const state = readState();
  // Only signal a process that is still ours; a stale PID file may name a reused PID.
  if (state && isOurProcess(state.pid)) {
    killTree(state.pid);
    // The npm shell can exit while the server child lives on in the same process group.
    if (!isWin) {
      const owner = Number(portOwner(state.port));
      if (owner && processGroup(owner) === state.pid) killTree(owner);
    }
  }
  rmSync(pidFile, { force: true });
  await sleep(1500);
  const busy = [];
  for (const port of Object.values(PORTS)) if (await responds(port)) busy.push(`${port} (PID ${portOwner(port) || 'unknown'})`);
  console.log(`=== Summary ===\n${busy.length ? `Still in use: ${busy.join(', ')}. Not started by this skill; stop it manually.` : 'Stopped. Ports 4500 and 8080 are free.'}`);
}

async function status() {
  const state = readState();
  const lines = ['=== Summary ==='];
  if (!state) lines.push('No preview started by this skill.');
  else {
    const up = await responds(state.port);
    lines.push(`${state.mode} server, scope ${state.product}, PID ${state.pid}: ${up ? 'RUNNING' : isOurProcess(state.pid) ? 'STARTING (still building)' : 'EXITED (stale record; run stop to clear)'}`);
    if (up) lines.push(`URL: http://localhost:${state.port}${await landingPath(state.product)}`);
    lines.push(`Log: ${state.logPath}`);
  }
  for (const [mode, port] of Object.entries(PORTS)) {
    if (await responds(port)) lines.push(`Port ${port} (${mode}) is in use by PID ${portOwner(port) || 'unknown'}.`);
  }
  console.log(lines.join('\n'));
}

if (action === 'start') await start();
else if (action === 'stop') await stop();
else if (action === 'status') await status();
else {
  console.error('Usage: preview.mjs start|stop|status [product|all] [--dev|--prod] [--latest-only] [--poll]');
  process.exit(1);
}
