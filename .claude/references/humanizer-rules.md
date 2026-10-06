# Humanizer rubric — model-judged AI-isms

Judgment-only companion to `scripts/doc-draft/slop.mjs`. That gate already
catches everything a regex or a page-level statistic can catch: the lexical
catalog (`scripts/doc-draft/ai-isms.yml`) and six structural signals
(sentence-length variance, tricolon rate, repeated paragraph openers,
bullet density, heading-to-prose ratio, em-dash rate). Never re-implement
any of those here — this file exists only for the patterns from
[Wikipedia:Signs of AI writing](https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing)
that need a reader's judgment, not a counter.

Sourced from the `humanizer` skill's pattern catalog, trimmed to what
applies to Netwrix technical documentation. Dropped entirely: the skill's
"personality and soul" guidance (first-person voice, opinions, humor) —
that's Wikipedia-article/essay advice, and it conflicts with Netwrix house
style (`docs/CLAUDE.md`), which is impersonal, instructional, second-person
("you"). Also dropped: patterns that only occur in encyclopedia articles
(notability/media-coverage framing, "Challenges and Future Prospects"
sections) — kept below only where a docs-shaped version of the pattern
exists.

Scoring a page against this rubric means finding zero instances of any
pattern below. Every finding must cite the exact line and quote the
offending text — never a vague "this section feels AI-written."

## Patterns to find

1. **Inflated significance.** Framing a routine feature or step as
   uniquely important: "plays a crucial role," "serves as a cornerstone,"
   "is essential to ensuring." State what the feature does; let its
   importance speak for itself.
2. **Superficial `-ing` analysis clauses.** A sentence that states a fact,
   then tacks on an unearned interpretive clause: "The scan runs nightly,
   ensuring your data stays current." Cut the clause or replace it with a
   real, specific consequence.
3. **Promotional/advertisement language.** "Powerful," "robust,"
   "seamless," "cutting-edge," "industry-leading," "game-changing" used as
   unsupported praise rather than a specific, checkable claim.
4. **Vague attributions.** "Users report," "many organizations find,"
   "it's widely recognized" — with no source. Either name the source or
   drop the claim.
5. **Copula avoidance.** Circling around a simple "is/are" with "serves
   as," "functions as," "acts as," "stands as" when a plain "is" says the
   same thing.
6. **Negative parallelisms.** "Not just X, but Y," "isn't merely X — it's
   Y." Occasional use is fine; more than one per page is a tell.
7. **Elegant variation / synonym cycling.** Swapping in a synonym for a
   term purely to avoid repeating it ("the tool... the utility... the
   application...") when the repeated term would be clearer. Netwrix style
   prefers the same term every time for the same thing.
8. **False ranges.** "From basic reporting to advanced analytics,"
   "ranging from simple fixes to complex overhauls" — a rhetorical span
   standing in for a real list. Name the actual items instead.
9. **Boldface overuse.** Bolding for emphasis rather than the house-style
   uses (UI labels, key terms on first use). More than a couple of
   emphasis-only bolded phrases in a paragraph is a tell.
10. **Inline-header vertical lists.** A bullet list where every item opens
    with a bolded 2-4 word label immediately followed by a colon, used
    for plain prose that doesn't need list formatting at all.
11. **Emojis and curly/smart quotation marks.** Netwrix docs use straight
    quotes and no decorative emoji in body prose.
12. **Collaborative-artifact leftovers.** Text that reads like a reply to
    a prompt rather than documentation: "Certainly, here's...", "I hope
    this helps," "As an AI...", "Let me know if you'd like...", or a
    knowledge-cutoff disclaimer ("as of my last update").
13. **Sycophantic/servile tone.** "Great question," "you're absolutely
    right to ask" — has no place in reference documentation aimed at a
    reader, not a requester.
14. **Filler phrases and throat-clearing.** "It is important to note
    that," "In today's fast-paced environment," "needless to say" — adds
    words, not information.
15. **Excessive hedging.** Stacking qualifiers ("may potentially,"
    "could possibly in some cases") past what the actual certainty
    warrants for a documented, tested behavior.
16. **Generic positive conclusions.** A closing paragraph or section that
    restates the page's value in vague, feel-good terms instead of ending
    on the last concrete instruction or fact.

## Not in scope here

Sentence-length uniformity, tricolon overuse, repeated paragraph openers,
bullet density, heading-to-prose ratio, and em-dash rate are scored by
`slop.mjs` as real numbers against calibrated thresholds — don't
re-score them by eye here, and don't flag a single tricolon or em dash on
sight; the gate already knows the difference between house style and
overuse.
