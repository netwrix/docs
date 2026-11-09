/**
 * docs-paths.mjs — where a run's pages live and where their "before" text comes from.
 *
 * A versioned run copies the previous version's folder (docs/<id>/<from>/) to the new one (docs/<id>/<version>/),
 * so the old text of a page is the same page in the previous folder, with its links rewritten.
 * An align run (meta.versionless) edits a versionless product's pages in place (docs/<id>/), so the old text
 * is the page as it was at meta.oldRef, read from git.
 */
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { rewriteDocLinks } from './seed-version.mjs';

export const isAlign = meta => !!meta.versionless;

/** The folder prefix of a run's pages, with a trailing slash. */
export function docsPrefix(meta) {
  return isAlign(meta) ? `docs/${meta.product}/` : `docs/${meta.product}/${meta.version}/`;
}

/** A page path without the product's docs prefix, for example install/overview.md. */
export function shortPath(meta, p) {
  const pre = docsPrefix(meta);
  return p.startsWith(pre) ? p.slice(pre.length) : p;
}

/** The id a page gets in the review page, its links, and the vote store: its short path with every run of other characters as one hyphen. */
export const slugify = short => short.replace(/[^a-z0-9]+/gi, '-').replace(/-+$/, '');

/** Throws when two pages share a slug (for example a_b.md and a-b.md): they would share an anchor, a template, and reviews. */
export function assertUniqueSlugs(shorts) {
  const seen = new Map();
  for (const s of shorts) {
    const id = slugify(s);
    if (seen.has(id) && seen.get(id) !== s) throw new Error(`Two pages share the review id "${id}": ${seen.get(id)} and ${s}. Rename one of them before building the review page.`);
    seen.set(id, s);
  }
}

/** The page's text before this run, or null when there was no such page. `page` is a manifest row. */
export function readOldText(meta, page) {
  if (page.action === 'NEW') return null;
  const rel = page.renamedFrom || page.path;
  if (isAlign(meta)) {
    try {
      return execFileSync('git', ['show', `${meta.oldRef}:${rel}`], { cwd: meta.docsWorktree, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 * 1024 * 1024 });
    } catch {
      return null;
    }
  }
  const oldFile = path.join(meta.docsWorktree, rel.replace(`/${meta.version}/`, `/${meta.from}/`));
  return fs.existsSync(oldFile) ? rewriteDocLinks(fs.readFileSync(oldFile, 'utf8'), meta.product, meta.from, meta.version) : null;
}

/** Column labels for the comparison: { old, oldMissing, new }. */
export function versionLabels(meta) {
  return isAlign(meta)
    ? { old: 'Old (origin/dev)', oldMissing: 'Old (no page at baseline)', new: 'New (aligned to code)' }
    : { old: `Old (${meta.from})`, oldMissing: `Old (no ${meta.from} page)`, new: `New (${meta.version})` };
}

/** One phrase naming what a run compares, for page headers. */
export function runLabel(meta) {
  return isAlign(meta) ? `${meta.product}, aligned to the deployed code` : `${meta.product} ${meta.from} to ${meta.version}`;
}
