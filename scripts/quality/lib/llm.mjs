import { spawn, spawnSync } from 'node:child_process';
import os from 'node:os';
import Anthropic from '@anthropic-ai/sdk';

let client;

const hasKey = () => Boolean(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN);

let cli;
/** The Claude Code CLI on PATH, signed in as the user. Used when there is no API key. */
export function hasClaudeCli() {
  cli ??= spawnSync('claude', ['--version'], { stdio: 'ignore' }).status === 0;
  return cli;
}

/** True when a model can be called: an API key, or the user's Claude Code login. */
export function hasApiKey() {
  return hasKey() || hasClaudeCli();
}

/**
 * Stand-in for the SDK's messages.create that runs `claude -p`. It covers what the
 * quality scripts use: system, one user message, and a JSON schema. It runs from the
 * temp dir with no settings, tools, or skills, so no project hooks fire (no recursion)
 * and the model sees only the prompt.
 */
// Many pages times several runs each would start dozens of `claude -p` processes at once; cap them.
const MAX_CLI = 6;
let running = 0;
const waiting = [];
const acquire = () => (running < MAX_CLI ? (running++, Promise.resolve()) : new Promise(r => waiting.push(r)));
const release = () => (waiting.length ? waiting.shift()() : running--);

const cliClient = {
  messages: {
    async create(params) {
      await acquire();
      try {
        // A `claude -p` process occasionally returns nothing (timeout, rate limit); one retry clears most of those.
        try {
          return await runCli(params);
        } catch {
          return await runCli(params);
        }
      } finally {
        release();
      }
    },
  },
};

function runCli({ model, system, messages, output_config }) {
      const args = [
        '-p', '--model', model, '--setting-sources', '', '--tools', '', '--disable-slash-commands',
        '--no-session-persistence', '--output-format', 'json', '--system-prompt', system,
      ];
      const schema = output_config?.format?.schema;
      if (schema) args.push('--json-schema', JSON.stringify(schema));
      return new Promise((resolve, reject) => {
        const child = spawn('claude', args, {
          cwd: os.tmpdir(),
          env: { ...process.env, NWX_QUALITY_CHILD: '1' },
        });
        let out = '';
        let err = '';
        const timer = setTimeout(() => child.kill(), 180_000);
        child.stdout.on('data', d => (out += d));
        child.stderr.on('data', d => (err += d));
        child.on('error', e => { clearTimeout(timer); reject(e); });
        child.on('close', code => {
          clearTimeout(timer);
          try {
            const j = JSON.parse(out);
            if (code !== 0 || j.is_error) throw new Error(j.result || `claude exited ${code}`);
            const text = j.structured_output ? JSON.stringify(j.structured_output) : j.result;
            resolve({ content: [{ type: 'text', text }] });
          } catch (e) {
            reject(new Error(`claude -p failed: ${e.message} ${err.slice(0, 200)}`));
          }
        });
        child.stdin.end(messages.map(m => m.content).join('\n\n'));
      });
}

export function getClient() {
  if (hasKey()) return (client ??= new Anthropic());
  return cliClient;
}

export function textOf(response) {
  return response.content
    .filter(b => b.type === 'text')
    .map(b => b.text)
    .join('');
}
