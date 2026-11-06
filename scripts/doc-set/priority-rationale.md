# Why doc-set ranks review pages the way it does

Reviewers of a large doc-set run face hundreds of changed pages. The ranking tells them which pages to approve first. It decides order only: it never hides a page, and a page's band doesn't change what a reviewer must check on it.

The code is in `scripts/doc-set/review-core.js` (`PRIORITY`, `scorePage`, `bandOf`) and `scripts/doc-set/priority.mjs`. The classify step is `scripts/doc-set/classify-scope.mjs`.

## The question behind the score

If a reviewer only has time for 20 pages, which 20 reduce the most harm and wasted effort? A page earns an early slot when it is:

1. **New to the reviewer.** A reviewer has never seen new or rewritten text, so errors are likely and nothing vouches for it.
2. **Read by many people.** One mistake on a page every customer reads costs more than the same mistake on a page few readers open.
3. **Costly when wrong.** A bad install step or a wrong port costs a customer far more than a wrong label in a rarely used dialog.
4. **Uncertain.** Claims the tools couldn't verify need a person who knows the product.

That gives four factors. Pages with style fixes only are different: the integrity check already confirms that their facts, numbers, links, code and labels are unchanged, so they always rank last. (Restyling itself is a separate pass after the doc-set, not part of it.)

## The score

`score = 100 × change weight × (0.40 × reach + 0.35 × consequence + 0.25 × uncertainty)`

### Change weight (multiplier)
- New = 1.0. Rewritten = 0.9. Both are text no one has reviewed.
- Updated = 0.5 to 0.9, scaled by the share of lines changed. An update that touches 5% of a page is mostly old text that already passed review.
- It multiplies the other factors, so a barely changed page can't outrank a new page just by being important.

### Reach (weight 0.40)
Follows the usual layers of a documentation set, from what every reader needs to what few readers need:

| Level | Value | Example |
|---|---|---|
| product | 1.0 | requirements, install, upgrade, first launch, licensing |
| feature | 0.7 | setting up or using a core feature |
| sub-feature | 0.45 | one option or setting inside a feature |
| edge | 0.25 | a rare configuration or a single error |

A model assigns the level, because folder names don't reliably separate a core feature from an edge case. Pages linked from many other pages in the set (the top 10%) move up one level.

### Consequence (weight 0.35)
- High (1.0): wrong text can break an install or upgrade, lose data, weaken security (credentials, permissions, keys, ports), or breach the license.
- Medium (0.6): a feature ends up misconfigured or doesn't work.
- Low (0.3): confusion or a wrong lookup the reader can recover from.

A model assigns this too. A rule raises low to medium for task pages with code blocks and for pages that mention uninstall, delete, restore, keys, certificates, passwords or permissions.

### Uncertainty (weight 0.25)
Counts, capped at 3: claims from Jira that code didn't confirm, held-back items (typo guesses, unverified text, blank defaults), facts with no Jira backing, and facts marked removed. Three or more counts the same as a full score. This factor gets the smallest weight because it measures how much the pipeline doubts the page, not how much the reader needs it.

### Why these weights
Reach and consequence get the most weight because they describe what a wrong page does to a customer. The other factors describe the drafting process. The weights are judgment, not fitted to data: no history of reviewer corrections exists to fit them to. Treat them as a starting point and tune them in `PRIORITY.weights`.

## Bands
| Band | Score | Reviewer action |
|---|---|---|
| P1 Review first | 55 or more | Approve before the release PR merges |
| P2 Review next | 35 to 54 | Approve before the release |
| P3 If time allows | below 35 | Best effort |
| P4 Style fixes only | none | Spot-check about 10% |

Thresholds were set on the first run (Threat Manager 3.4) so that P1 holds about 10% of the changed pages. If P1 grows past about 20%, raise `PRIORITY.bands.P1`. Never move one page between bands by hand: change its scope or consequence in `priority-input.json` and rerun, so the reason shown with the page stays true.

## Threat Manager 3.4 result
108 pages: 5 in P1, 16 in P2, 26 in P3, 61 in P4. P1 is the signing key and silent install pages, secure install, the 3.4 upgrade and the action service install. P3 is mostly investigation options, playbook actions and the Entra ID and Active Directory object pages.

## Limits
- **One model pass:** Scope and consequence come from one Haiku pass with a short rationale per page. A reviewer who disagrees should override the rating, not the score.
- **No traffic data:** Page views aren't used. At this site's traffic, per-page counts are too noisy to beat the rating, and popularity doesn't measure the cost of an error.
- **Reclassification:** Any edit to a page changes its hash, so the next classify run asks about it again.
- **Held-back items:** Items the tools can't read are only counted if listed in `held-back.json`.
- **One run:** The weights and thresholds were checked against one product version. Revisit them after two or three more runs, using which pages reviewers actually changed.
