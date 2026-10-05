// Condense a Docusaurus build log into a short summary for Claude to relay.
const MAX_ITEMS = 15;

function dedupe(items) {
  return [...new Set(items)];
}

function section(title, items) {
  if (!items.length) return [];
  const shown = items.slice(0, MAX_ITEMS).map((i) => `  - ${i}`);
  if (items.length > MAX_ITEMS) shown.push(`  ... and ${items.length - MAX_ITEMS} more (see log)`);
  return [`${title} (${items.length}):`, ...shown];
}

export function summarize(text, { exitCode = 0, durationMs = 0, product = 'all', logPath = '' } = {}) {
  const lines = text.split(/\r?\n/);
  const brokenLinks = [];
  const brokenAnchors = [];
  const mdLinks = [];
  const mdx = [];

  let source = null;
  let mode = null;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/Exhaustive list of all broken links/i.test(line)) mode = 'links';
    else if (/Broken anchors found/i.test(line)) mode = 'anchors';

    const src = line.match(/source page path\s*=\s*(\S+?):?\s*$/);
    if (src) source = src[1];
    const tgt = line.match(/->\s*linking to\s+(\S+)/);
    if (tgt && source) {
      const entry = `${source} -> ${tgt[1]}`;
      (mode === 'anchors' ? brokenAnchors : brokenLinks).push(entry);
    }

    const md = line.match(/Markdown link with URL `([^`]+)` in source file "([^"]+)"(?: \(line (\d+)\))?/);
    if (md) mdLinks.push(`${md[2]}${md[3] ? `:${md[3]}` : ''} -> ${md[1]}`);

    const mdxm = line.match(/MDX compilation failed for file "([^"]+)"/);
    if (mdxm) {
      const detail = lines.slice(i + 1, i + 6).find((l) => /Cause:|Details:/.test(l)) || '';
      mdx.push(`${mdxm[1]} ${detail.trim()}`.trim());
    }
  }

  const oom = /heap out of memory|Allocation failed - JavaScript heap/i.test(text);
  const stale = /Cannot find module .*\.docusaurus|ENOENT.*\.docusaurus|Unexpected token.*cache/i.test(text);
  const success = exitCode === 0;

  // Single-product builds warn about links from other products' pages by design; count them, list only in-scope ones.
  let outOfScope = 0;
  const scoped = (items) => {
    if (product === 'all') return items;
    const keep = items.filter((i) => i.split(' -> ')[0].includes(`/${product}/`));
    outOfScope += items.length - keep.length;
    return keep;
  };
  const scopedLinks = scoped(dedupe(brokenLinks));
  const scopedAnchors = scoped(dedupe(brokenAnchors));

  const out = ['=== Summary ==='];
  out.push(`Result: ${success ? 'SUCCESS' : 'FAILED'} (exit ${exitCode})`);
  out.push(`Scope: ${product}`);
  if (durationMs) out.push(`Duration: ${Math.round(durationMs / 1000)}s`);
  out.push(...section('Broken links', scopedLinks));
  out.push(...section('Broken anchors', scopedAnchors));
  out.push(...section('Unresolved markdown links', dedupe(mdLinks)));
  out.push(...section('MDX errors', dedupe(mdx)));
  if (oom) out.push('Out of memory: narrow the scope (one product, --latest-only) or close other apps. The build needs up to 16 GB.');
  if (stale) out.push('Possible stale cache: re-run with --clean.');
  if (!success && !scopedLinks.length && !scopedAnchors.length && !mdLinks.length && !mdx.length && !oom && !stale) {
    const tail = lines.filter((l) => l.trim()).slice(-8).map((l) => `  ${l}`);
    out.push('Last output lines:', ...tail);
  }
  if (product !== 'all' && outOfScope) {
    out.push(`Ignored ${outOfScope} broken link(s) from other products' pages: single-product builds leave those out by design. Run a full build to check them.`);
  }
  if (logPath) out.push(`Full log: ${logPath}`);
  return out.join('\n');
}
