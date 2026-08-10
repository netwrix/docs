# Documentation audit review guide

Read this once before you start reviewing. It applies to every page in your
product's `review-list.csv` — you don't need a separate copy per page.

## Before you start

Open the page's `live_page_url` and the product side by side. Work through
the page top to bottom. Check every item below, then write up every problem
you find using the form below — directly in a Claude Code chat, not in the
spreadsheet.

## Checklist

- **UI elements match the product.** Every menu, button, field, tab, dialog,
  and label named on the page exists in the product and is named the same
  way. Names, capitalization, and navigation paths all match.
- **Code, commands, and configuration work as written.** Run every command,
  script, query, and configuration snippet exactly as the page presents it.
  Confirm each one succeeds and produces the documented result. Don't correct
  a snippet in your head as you read it — if it needs correcting, it's wrong.
- **Requirements are complete.** Every prerequisite is listed: permissions,
  roles, licenses, ports, supported versions, dependencies, and any setup the
  reader must finish first. Confirm nothing is assumed.
- **The procedure succeeds using only this page.** Follow the steps as
  written, from a clean starting state, without prior knowledge of the
  product and without consulting another page. Note every point where you had
  to guess, backtrack, or look something up.
- **Screenshots are accurate.** Every screenshot matches the current product:
  same layout, same labels, same version. Flag any screenshot that shows an
  older release.
- **Screenshots are necessary.** For each screenshot, decide whether the text
  alone would carry the reader through the step. Removing a screenshot that
  adds nothing reduces the maintenance burden on every future release —
  prefer removing it over updating it. Recommend removal by default and keep
  a screenshot only when it shows something the words genuinely can't.

## Writing up a correction

For each problem you find, fill out one block of this form. Be specific
enough that someone who has never opened this page can act on it:

```
Where: <quote the exact sentence, step number, heading, or snippet>
Fix: <what it should say instead — write the replacement text>
Why: <what the product actually does, or what went wrong when you followed the page as written>
```

## When you're done with a page

If you found no problems, set `audited` to `Done` in the sheet and move on.

If you wrote up one or more corrections, open Claude Code from the repository
root and paste your form with an instruction like:

> Apply these documentation audit findings to `<source_path>`. Make only the
> changes my notes describe. Follow the Netwrix writing standards in
> `docs/CLAUDE.md`, and run `/dale <source_path>` afterward.
>
> Where: ...
> Fix: ...
> Why: ...

Review Claude's changes, open a pull request against `dev`, and once it
merges, set `fixed` to `Done` in the sheet — then set `audited` to `Done` too,
since finding and fixing the problem is itself the audit. If the correction
turned out not to need a code change (e.g. it was already accurate), set
`fixed` to `No fix necessary` instead.
