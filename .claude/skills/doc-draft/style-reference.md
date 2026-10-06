# Style reference for drafting

## Output style

Netwrix documentation sounds like a knowledgeable colleague walking you through something — direct, clear, and respectful of your time. It never sounds like a manual written by committee.

**Write like this:**

> The monitoring plan collects audit data from Active Directory and stores it in the Netwrix database. By default, it runs every 24 hours.
>
> To change the collection interval:
>
> 1. Go to **Settings** > **Monitoring Plans**.
> 2. Select the monitoring plan you want to update.
> 3. Update the **Collection interval** field and click **Save**.

**Not like this:**

> It should be noted that the monitoring plan is utilized for the purpose of collecting data from Active Directory, which will subsequently be transmitted to the Netwrix database. Users may wish to configure the collection interval as needed by navigating to the appropriate settings.

The difference:
- **Direct, not padded.** "Collects and stores" vs. "is utilized for the purpose of collecting."
- **Active, not passive.** "The monitoring plan collects" vs. "data will be transmitted."
- **Procedural steps are instructions, not descriptions.** "Go to Settings" vs. "navigating to the appropriate settings."
- **No throat-clearing.** Never start with "It should be noted that" or "Please be aware that."

## Style reference

Vale and Dale run when you run the style check (step 9 of the skill) and again in the pre-commit hook. Nothing lints on the PR. The self-review step in each task type covers the same issues Dale checks (passive voice, wordiness, idioms, hedging, future tense). The rules below cover what linters don't catch. Apply these while writing.

### Grammar

- **Contractions**: Use common contractions (don't, can't, you'll). Avoid unusual ones (should've, could've).
- **Anthropomorphism**: Don't attribute human traits to software. "The system displays" not "the system sees."
- **Parallel structure**: Items in a list or series use the same grammatical form.
- **Nominalizations**: Use verbs, not nouns derived from verbs. "Configure" not "perform the configuration of."
- **One idea per sentence**: Break compound sentences that cover multiple concepts.
- **Articles**: Don't omit articles (a, an, the) for brevity.
- **That/which**: "That" for restrictive clauses (no comma). "Which" for nonrestrictive (with comma).
- **Who/whom**: "Who" for subjects, "whom" for objects.
- **Since/because**: "Since" for time, "because" for causation.
- **While/although**: "While" for time, "although" for contrast.
- **Whether/if**: "Whether" for alternatives, "if" for conditions.
- **Fewer/less**: "Fewer" for countable, "less" for uncountable.
- **Collective nouns**: Singular in American English. "The team configures" not "the team configure."
- **Gendered pronouns**: Avoid. Repeat the noun instead of using he/she or singular they.

### Formatting

- **Headings**: Sentence case. Infinitive for tasks ("Install the agent"), gerund for concepts ("Reviewing audit logs").
- **Bold**: UI elements, buttons, menu items.
- **Code formatting**: Commands, file paths, technical values.
- **No italics**.
- **Oxford comma**: Required.
- **Em dashes**: No spaces (word—word).
- **Hyphens**: Compound modifiers before nouns ("real-time monitoring" but "runs in real time").
- **Numbers**: Spell out 0–9, numerals for 10+. Numerals with units (5 GB). Commas in thousands (1,500).
- **Dates**: Month Day, Year (January 15, 2025).
- **Time**: 12-hour clock with AM/PM.

### Terminology

- **Inclusive terms**: allowlist/denylist, primary/replica — not whitelist/blacklist, master/slave.
- **Version comparisons**: "or later" / "or earlier" — not "or higher" / "or newer."
- **No time-relative qualifiers**: No "currently", "as of this writing", or pre-announcing future features.

### Structure

- Concepts before procedures: overview → prerequisites → steps.
- An example goes immediately after the procedure or concept it illustrates.
- Common tasks before advanced topics.
- Cross-references at the end of sections.
- Alt text on every image.

For the full style guide with detailed examples, see `netwrix_style_guide.md` in the project root.
