# Handoff: /doc-set and the Threat Manager 3.4 pilot (as of 2026-10-23)

## Goal
Build `/doc-set`: draft a whole product version's docs from code (first source), Jira (second), and existing docs (third, kept when accurate), in Netwrix style and structure. Pilot: Threat Manager 3.3 to 3.4.

## Where everything is
- **Skill:** `/home/jameshaytko/docs/.claude/skills/doc-set/` (`SKILL.md`, `references/fact-pack.md`, `references/lint-pass.md`). **Workflow:** `.claude/workflows/doc-set.js`. `.claude/` is gitignored, so these are on disk only.
- **Scripts and tests:** working copy in `/home/jameshaytko/docs/.doc-set/tools/scripts/` (gitignored, survives branch switches): `doc-set/*.mjs`, `doc-set/review-client.js`, `test-doc-set.mjs` (28 tests; run `cd .doc-set/tools && node --test scripts/test-doc-set.mjs`), plus `doc-restyle/integrity.mjs` and `quality/lib` copied from branch `docs/doc-restyle-skill`. The main checkout is on `demo/20261022`; `stash@{0}` ("wip before demo branch") holds an OLDER copy of the scripts, the CLAUDE.md edit, a `package.json` test line, and doc-draft comment cleanups. **None of this tooling is committed to any branch.**
- **Run state:** `/home/jameshaytko/docs/.doc-set/threatmanager-3.4/` (`meta.json` with worktree paths and `seedBaseline`, `facts.json`, `claims.json`, `manifest.json`, `plan.json`, `scope.json`, `triage/`, `results/`, `lintpass/`, `review/`).
- **Docs worktree:** `/home/jameshaytko/docs-threatmanager-3.4`, branch `docs/threatmanager-3.4`. Uncommitted: seeded `docs/threatmanager/3.4/` (141 files), `sidebars/threatmanager/3.4.js`, the `src/config/products.js` edit, and all drafted pages. **Code worktree:** `/home/jameshaytko/itdr-threatmanager-3.4` at pinned `05e12b936` (merge base with `release/3.3`: `fccad2d26`).
- **Dale rule PR:** https://github.com/netwrix/docs/pull/1772 (worktree `/home/jameshaytko/docs-dale-passive-rule`, branch `fix/dale-passive-voice-actor`). Open, no reviewers requested.
- **Review page (Artifact):** https://claude.ai/artifact/1roJuBJD5scWnaJxKhP8gR (version 5; capabilities `db`, `user`, `comments`). Superseded and not deleted: author report `1rwXthtyuBeWQm3DsXj4ED`, side by side `Gyj5poDMRBn4RmHtxYRD78`, pilot report `7pn2pUJV7vu2Cm9dtA4Ejo`.
- **Xchange draft:** https://xchange.netwrix.com/doc/reviewing-doc-set-drafts-with-your-team-iCIixgVKQL (draft under PM > Product Operations Playbook > Docs).
- **Jira:** project TMR, cloudId `12b6d685-dbaa-4aa9-9b14-8b406bfdbe39`.

## Pilot state
- Phases 1 to 7 done. Facts: 416 extracted, 321 customer-visible in scope. Claims: 27 across epics TMR-141, TMR-1454, TMR-99, TMR-96. Manifest: 119 pages (72 KEEP, 40 UPDATE, 3 REWRITE, 4 NEW). All 47 non-KEEP pages are drafted and verified.
- 72 KEEP pages had a lint-only pass (62 edited, 10 unchanged); the integrity check passes on all 72. The single-product site build passes (`DOCS_PRODUCT=threatmanager DOCS_PRODUCT_LATEST_ONLY=true npm run build`, run in the docs worktree).
- Last full style check (it ran with the OLD Dale rule): 66 pass, 53 fail, 125 findings, about 114 of them passive voice.
- The user tested the review page: recorded an approval (stored with a page fingerprint), left a comment, and the comment was applied. Not yet seen in a browser: the "Changed since review" marker.

## Decisions the user made
- Out of scope: NTP integration (beta UI), KB articles, the Location API. `upgrade3.3.md` renamed to `upgrade3.4.md`; silent-install variables split into `install/silentinstall.md`; new threats stay as H2 sections on `threats/entraid.md`.
- KEEP pages get a lint-only pass. `index.md` marketing claims were dropped. Typo fixes applied (about 40 of 51; 11 held back as content guesses, in `review/typos.md`).
- Comments are handled in review rounds, triggered by the PM (skill step 8). Reviewers need Contributor access to record a review.
- Voice rules: procedures are commands. "You can" only for what the reader can do; name the tool for what the tool can do. A passive that reports a past or completed action with no stated actor stays passive. Never add "you", "someone" or the product as an actor. Approved Dale rule: flag a passive only if it can be rewritten in active voice without changing meaning; the reader counts as the actor when the sentence tells them what to do.

## Open items
1. Commit the tooling (skill, workflow, scripts, tests) to a branch. Needs `git add -f` for `.claude/`.
2. Review the 3.4 pages, then commit the docs worktree and open the PR for the 3.4 docs. Nothing is committed or pushed for it.
3. Share the review page with the engineers as Contributors and run a review round.
4. After PR #1772 merges: rerun `npm run quality:check -- --files .doc-set/threatmanager-3.4/lintpass/all-pages.txt` from the docs worktree (run it detached, it writes output only at the end), then regenerate and republish the review page.
5. Held back for the user: 10 + 7 restore-skipped lines on content pages (`lintpass/actor-restore.json`, `can-restore.json`), 11 typo guesses, TODO markers on pages (see the report), blank Port and Database defaults in `silentinstall.md`, unverified inherited text on `upgrade.md`, admonition and acronym leftovers (ESC1, ESC7, RO).
6. Optional: delete the three superseded artifacts; request reviewers on PR #1772.

## Lessons and gotchas
- Launch the workflow with `scriptPath`, never by name (a name lookup ran a stale copy). Batch names must be unique to their pages or results overwrite.
- The scratchpad is wiped at session end. Keep worktrees and state outside it.
- `integrity.mjs --base` needs a commit: use `seedBaseline` from `meta.json` (a dangling commit object).
- Dale is model-based, caches by page text and rules, and gives different findings between runs. It runs only after Vale and the AI-ism gate pass.
- A verifier can be wrong (it flagged a correct "Click Next"). Check against the code before changing a sentence.
- Restoring one line can drop a merged neighbor. Check with the lost-line scan and a truncated-sentence scan, not only the integrity check.
- `pkill -f` can match its own shell. A spend limit was hit once (resets Oct 31); parallel workflows are costly.
- Verify a file edit by reading it back, by section. Earlier in the session two edits were claimed but missed.
- In Atlassian, fixVersion is unreliable: scope by epics and their children.
