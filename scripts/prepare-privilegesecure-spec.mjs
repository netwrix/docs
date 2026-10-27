#!/usr/bin/env node
// Prepares the Privilege Secure OpenAPI specification for docusaurus-plugin-openapi-docs.
//
// The backend specification references .NET entity schemas that nest into each other. The plugin
// inlines every $ref, which overflows on the raw file. This script inlines schemas to a fixed depth,
// keeps one media type per body, and gives each operation a unique operationId (the plugin names
// each page after it).
//
// Usage: node scripts/prepare-privilegesecure-spec.mjs <input.json> <output.json> [depth]
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const [input, output, depthArg] = process.argv.slice(2);
if (!input || !output) {
  console.error('Usage: prepare-privilegesecure-spec.mjs <input.json> <output.json> [depth]');
  process.exit(1);
}
const maxDepth = Number(depthArg ?? 2);
const spec = JSON.parse(readFileSync(input, 'utf8'));
const schemas = spec.components?.schemas ?? {};

const hasRef = (n) =>
  Array.isArray(n) ? n.some(hasRef) : n && typeof n === 'object' ? '$ref' in n || Object.values(n).some(hasRef) : false;

function expand(n, depth, stack) {
  if (Array.isArray(n)) return n.map((v) => expand(v, depth, stack));
  if (!n || typeof n !== 'object') return n;
  if ('$ref' in n) {
    const name = n.$ref.split('/').pop();
    const target = schemas[name] ?? {};
    const simple = 'enum' in target || !hasRef(target);
    if (!simple && (depth <= 0 || stack.includes(name))) {
      return {
        type: 'object',
        title: name,
        description: `Object of type ${name}. The properties are omitted here to keep the page readable.`,
      };
    }
    const out = expand(structuredClone(target), depth - 1, [...stack, name]);
    if (!out.title) out.title = name;
    return out;
  }
  return Object.fromEntries(Object.entries(n).map(([k, v]) => [k, expand(v, depth, stack)]));
}

function oneMediaType(content) {
  const keys = Object.keys(content ?? {});
  if (!keys.length) return content;
  const keep = keys.includes('application/json') ? 'application/json' : keys[0];
  return { [keep]: expand(content[keep], maxDepth, []) };
}

const used = new Set();
const methods = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch'];
for (const [path, item] of Object.entries(spec.paths)) {
  for (const method of methods) {
    const op = item[method];
    if (!op) continue;
    op.parameters = expand(op.parameters ?? [], maxDepth, []);
    if (op.requestBody?.content) op.requestBody.content = oneMediaType(op.requestBody.content);
    for (const response of Object.values(op.responses ?? {})) {
      if (response.content) response.content = oneMediaType(response.content);
    }
    const tag = op.tags?.[0] ?? 'General';
    let id = `${tag}_${op.operationId ?? method}`;
    if (used.has(id)) id = `${id}_${method}_${path.replace(/[^A-Za-z0-9]+/g, '_')}`;
    used.add(id);
    op.operationId = id;
    if (!op.summary) op.summary = `${method.toUpperCase()} ${path}`;
  }
}

// The descriptions come from .NET XML comments and can hold tags such as <param name="id"></param>,
// which break MDX. Strip the tags and tidy the whitespace.
function clean(n) {
  if (Array.isArray(n)) return n.map(clean);
  if (!n || typeof n !== 'object') return n;
  return Object.fromEntries(
    Object.entries(n).map(([k, v]) => [
      k,
      (k === 'description' || k === 'summary') && typeof v === 'string'
        ? v.replace(/<\/?[A-Za-z][^>]*>/g, ' ').replace(/&gt;|&lt;/g, '').replace(/\s+/g, ' ').trim()
        : clean(v),
    ]),
  );
}
spec.paths = clean(spec.paths);

spec.components = { securitySchemes: spec.components?.securitySchemes ?? {} };
for (const scheme of Object.values(spec.components.securitySchemes)) {
  if (scheme.description) scheme.description = scheme.description.replace(/\s+/g, ' ').trim();
}
mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, JSON.stringify(spec, null, 1));
console.log(`Wrote ${output} (${used.size} operations, depth ${maxDepth})`);
