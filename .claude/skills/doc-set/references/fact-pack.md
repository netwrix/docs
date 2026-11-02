# Fact pack, claims, manifest, and results

A `/doc-set` run keeps its state in `.doc-set/<product>-<version>/`. All files are JSON. `scripts/doc-set/manifest.mjs validate` checks them; `scripts/doc-set/coverage.mjs` reads them.

## facts.json (from code)

```json
{
  "product": "pingcastle", "version": "3.6", "ref": "v3.6.0", "refSha": "<sha>", "baseline": "v3.5.0", "baselineSha": "<sha>",
  "facts": [
    { "id": "F012", "statement": "The --max-nodes option limits the number of nodes scanned. Default 100.",
      "cite": "src/Cli/Options.cs:88", "area": "cli", "status": "new", "internal": false }
  ]
}
```

- `id`: `F` plus a number, unique in the file.
- `statement`: one customer-visible fact, in plain words, with the exact UI label, option name, default, or limit as the code shows it.
- `cite`: `path:line` in the code at `ref`. Required unless `internal` is true.
- `area`: the feature area. Triage groups pages by it.
- `status`: `new`, `changed`, or `removed` against the merge base; `unchanged` otherwise. A `removed` fact is never written on a page. It tells triage which pages to RETIRE or UPDATE.
- `tickets`: optional list of Jira or ADO keys from the commits that introduced or changed the fact (for example `["TMR-1455"]`). The claims phase uses it to link a ticket to its facts. A fact needs no ticket.
- `internal`: true for what the customer never sees or acts on (class names, build details, tested-on versions, numbers you derived). Follow "Write for the customer" in `.claude/skills/doc-draft/SKILL.md`. Internal facts are listed in the report and left off pages.

Where to look: UI resource and string files, settings and config schemas, CLI help and argument parsers, API specs, installer and requirements files, permission and role definitions, error and log messages the customer reads, and the three-dot diff `baseline...ref` (from the merge base) for what changed.

## claims.json (from Jira)

```json
{ "claims": [
  { "id": "C003", "key": "PLAT-1234", "summary": "Add scan timeout setting",
    "status": "confirmed", "facts": ["F012"], "note": "" }
] }
```

- `status`: `confirmed` (a fact backs it; list the fact ids), `contradicted` (the code says otherwise; the code wins and the note says how), `jira-only` (no code evidence yet; it becomes a `{/* TODO */}` and is never written as fact), `not-shipped` (the ticket isn't in this release), `internal` (shipped, but nothing a customer sees, such as a library migration), or `cancelled` (the work was dropped). Only `confirmed` and `jira-only` claims must be assigned to a page. `claims.json` may also carry `factsWithoutClaims`: a list of `{ "id": "F123", "reason": "..." }` for customer-visible facts in a claimed feature that no ticket mentions. They are still documented; the list only shows where Jira is silent.
- `differences`: optional list of strings, one per detail in the ticket that the code contradicts, even when the claim is `confirmed`. The report lists them so a writer sees where the ticket and the product disagree. The code wins.
- The ticket is a claim. Never write a ticket key or customer name on a page.

## manifest.json (the plan the writer approves)

```json
{
  "product": "pingcastle", "version": "3.6", "from": "3.5",
  "pages": [
    { "path": "docs/pingcastle/3.6/administration/scan-options.md", "action": "UPDATE",
      "type": "reference", "zone": "administration", "sidebar_position": 440,
      "facts": ["F012"], "claims": ["C003"], "note": "" }
  ],
  "dropped": [ { "id": "F077", "reason": "Covered by the KB, not the guide" } ]
}
```

- `path` is never under a `kb/` folder; the validator rejects it.
- `action`: `KEEP`, `RESTYLE`, `UPDATE`, `REWRITE`, `RETIRE`, or `NEW`.
- `type`: `task`, `concept`, `reference`, or `troubleshooting` (`.claude/references/page-structure-guide.md`). Not needed for KEEP or RETIRE.
- `zone` and `sidebar_position` follow `.claude/references/documentation-section-guide.md`.
- UPDATE, REWRITE, and NEW pages must list at least one fact.
- Every non-internal, non-removed fact is assigned to a page or listed in `dropped` with a reason. Every claim that isn't `contradicted` or `not-shipped` is the same.
- `renamedFrom`: set when a page keeps its content but changes path; the old file is removed from the new version folder and inbound links are updated at assembly.
- A move, split, or merge goes in `note` and needs the writer's yes before drafting.

## results/<batch>.json (written by draft agents)

```json
{ "batch": "administration",
  "pages": [
    { "path": "docs/pingcastle/3.6/administration/scan-options.md", "status": "done",
      "factsCovered": ["F012"], "todos": ["Default timeout not found in code"],
      "untraced": [], "preexistingFindings": 0, "checks": { "quality": "pass", "integrity": "n/a" } }
  ] }
```

- `status`: `done` or `failed`. A page is done only when `quality:check` passes (and `integrity.mjs` passes for RESTYLE).
- `factsCovered`: the fact ids the final page states.
- `preexistingFindings`: the number of old 3.3 sentences the drafter reworded only to clear a style finding. A page is `done` only when the whole-page check passes.
- `untraced`: sentences the verifier could not trace to a fact. Fix them or turn them into TODOs; the list must be empty for `done`.
