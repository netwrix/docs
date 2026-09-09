# Xchange article — Self-Aligning Documentation: Architecture Overview

This file is the publish-ready body of an internal Xchange article summarizing the
architecture in [README.md](./README.md). It is kept here so the article and the design
doc stay in sync.

## How to publish

Formatted for Xchange conventions: **title goes in the title field, not in the body** (the body must not open with an H1), Outline-flavoured `:::info` / `:::warning` callouts, and Mermaid in fenced code blocks. Mermaid rendering is confirmed — Xchange hosts a "Mermaid Diagrams" reference doc and many architecture docs use `flowchart` blocks.

**Recommended home:** `PM - Product Management › Product Operations Playbook › Docs › Processes` (collection `b1481e4d-5de7-4703-a83d-43a814e0dfa6`), as a sibling to your existing **Current workflows** doc. That doc already establishes the convention this article follows — "the pipeline is large enough that one diagram isn't readable, so it's split into four, cross-linked at the points where they hand off to each other." Cross-link the two. Alternatives with write access: **R&D - AI**, **R&D - Research & Development**, **TECH - Technical Enablement Department** (`R&D - Architecture` is read-only for you).

**Title field:** `Self-Aligning Documentation: Architecture Overview`

**Set `fullWidth: true`** — the diagram-heavy Xchange docs (NPS Architecture Diagrams, Feature Domain Map) all use it, and diagram 1 is wide.
Everything below the horizontal rule is the article body — paste it as-is. Do **not** include
the heading above it: Xchange stores the title as a separate field, so the body must not open
with an H1.


---

Netwrix documents 27 products, in one shared documentation site. Documentation drifts from product reality because nothing connects a doc page back to the product feature it describes. A page has a title and a description, but nothing says which feature it covers, when that feature last changed, or whether anyone has checked the page since. Today, drift is found by a person reading pages one at a time.

This is the architecture for a system that closes that loop. It builds an understanding of what a product actually does, compares that against the existing documentation to find gaps in both directions, and drafts the fix.

:::info
**Status: design proposal.** Nothing here is built yet. Rollout starts deliberately small, with clear pass/fail criteria at each stage, because two earlier attempts at this problem produced zero merged documentation changes.
:::

## The workflow, at a glance

A finding and its human review happen inside the product team's own workspace, not in the public documentation repository — a writer and an engineer look at it there first, which means writers will need access to that workspace, not just the docs site. Only one thing ever crosses into the public repo: a draft page, and only after it has been stripped down to plain customer-facing language. No internal file names, code, or ticket numbers ever make that crossing.

This diagram shows the automated path, triggered when the product changes. A writer can also ask for a check on demand instead; that version happens entirely within the documentation repository.

```mermaid
flowchart TB
  subgraph PR["Product team's workspace — internal"]
    direction TB
    A(["Product changes"]) --> B["Understand what changed"]
    B --> C["Compare against<br/>the current docs"]
    C --> D{"Gap or drift<br/>found?"}
    D -- "no" --> E(["Nothing happens<br/>— no cost"])
    D -- "yes" --> F["Finding is recorded<br/>for review"]
    F --> G{"Writer and engineer<br/>review it"}
    G -- "not real" --> H(["Recorded so it<br/>never resurfaces"])
    G -- "confirmed" --> I["Draft the page"]
    I --> READ{"Is it readable?"}
    READ -- "no — revise" --> I
    READ -- "yes" --> SLOP{"Does it sound<br/>human, not AI?"}
    SLOP -- "no — revise" --> I
    SLOP -- "yes" --> RED{{"Only customer language<br/>survives from here on"}}
    RED -- "internal detail found —<br/>blocked" --> FAIL(["Nothing is posted"])
  end

  subgraph DOCS["Public documentation site"]
    direction TB
    PRQ["Pull request<br/>opened"]
    LINT["Existing style check<br/>runs, as always"]
    J["Writers and engineers<br/>review the change"]
    K(["Change is published"])
    PRQ --> LINT --> J --> K
  end

  RED -- "clean" --> PRQ
  K -.->|"docs are current<br/>again"| C

  classDef stop fill:#374151,stroke:#6b7280,color:#f9fafb
  classDef human fill:#78350f,stroke:#f59e0b,color:#fffbeb
  classDef ai fill:#0c4a6e,stroke:#0ea5e9,color:#f0f9ff
  classDef gate fill:#7f1d1d,stroke:#ef4444,color:#fef2f2
  classDef check fill:#134e4a,stroke:#14b8a6,color:#f0fdfa
  class E,H,K stop
  class G,J human
  class B,C,I ai
  class RED,FAIL gate
  class READ,SLOP,LINT check
```

Before a person ever sees a draft, it has to pass two checks on its own: is it readable, and does it sound natural rather than generic AI writing? Either one can send it back for another pass. By the time a pull request opens, both have already passed — the public repo's own style check still runs too, the same as it does for every other change.

The rest of this article walks through the same loop one layer at a time: what stays private, what's mechanical versus judgment-based, and how the system keeps working as both the product and the documentation change underneath it.

## The three capabilities

| # | Capability | Question it answers |
|---|---|---|
| 1 | **Product understanding** | What does this product do, what does it require, and what must a user actually do? |
| 2 | **Documentation alignment** | Which doc page covers which feature — and what is uncovered, stale, or describing something that no longer exists? |
| 3 | **Documentation drafting** | Given a gap, what should the page say and where does it belong? |

Understanding feeds drafting with substance. Alignment feeds it with placement.

## The design principle

**Mechanical steps find and match facts. The model only writes prose and makes judgment calls on genuinely ambiguous cases.**

Every place a model is asked to *find* something rather than *describe* something is a place mistakes creep in — and writer trust is the scarce resource here. A tool that produces three bad findings gets ignored from then on, and no later improvement wins those readers back. So the model is never turned loose to hunt for drift on its own. A mechanical pass first extracts the facts that make a page true — a setting, a default value, a route — and matches them against what the docs currently say. Only the leftover, genuinely unclear cases go to a model for a judgment call.

This also means most drift detection is a simple comparison, not a guess: capture the facts as they stand today, capture them again later, and compare. Because that snapshot only contains things a customer could actually observe, a code change that doesn't move the snapshot is, by definition, not something a doc needs to reflect.

## 1. What stays private, and what's allowed to cross

The documentation site is public. Every product team's own workspace is internal. That one fact shapes the whole design: the tools, the raw findings, and anything that references internal file names or ticket numbers all stay inside the product team's side. Anything crossing into the public docs has to pass through a check that blocks the crossing if anything internal slips in.

```mermaid
flowchart TB
  subgraph INT["Internal"]
    direction TB
    TOOLKIT["Shared toolkit<br/><i>works the same way<br/>in every product</i>"]
    subgraph PR["Product teams"]
      direction LR
      P1["Product A"]
      P2["Product B"]
      P3["Product C"]
      P4["Product D"]
    end
    ART["Findings, with full detail"]
  end

  RED{{"Only customer language<br/>gets through<br/><b>blocks by default</b>"}}

  subgraph PUB["Public documentation site"]
    direction TB
    DOCS["The doc pages themselves"]
    LEDG["Review history<br/><i>never overwritten</i>"]
  end

  WRITER(["A writer"])

  TOOLKIT --> PR
  PR -- "raises" --> ART
  ART -- "customer-facing summary only" --> RED
  RED -- "passes" --> DOCS
  WRITER -- "records a verdict" --> LEDG
```

Reading a product's own source naturally produces something like "this file, this line." That's useful for an engineer and unacceptable in a public page. So the model never gets to publish anything directly — it hands off a draft, and a separate check blocks the handoff outright if it spots an internal reference of any kind. It blocks rather than quietly stripping the reference out: a filter nobody has to double-check is a filter people learn not to trust.

None of that internal detail is lost — it's just kept where it belongs, visible to the product team, linked to the public finding so the two can be cross-referenced.

## 2. What's mechanical, and what's judgment

```mermaid
flowchart LR
  subgraph SRC["Sources"]
    direction TB
    CODE["The product's own code"]
    CURATED["Docs the engineering team<br/>already maintains<br/><i>architecture notes, glossaries</i>"]
    SPEC["Specs and tickets"]
  end

  subgraph C1["① Understanding"]
    direction TB
    EXTRACT["Extract the facts<br/><i>mechanical</i>"]
    SYNTH["Summarize context<br/><i>model</i>"]
  end

  MAN[("A snapshot of<br/>verified facts")]

  subgraph C2["② Alignment"]
    direction TB
    JOIN["Match facts against<br/>the current docs<br/><i>mechanical</i>"]
    CLASS["Judge the unclear cases<br/><i>model</i>"]
  end

  COV[("Coverage map")]

  subgraph C3["③ Drafting"]
    direction TB
    PLACE["Decide where it belongs<br/><i>model</i>"]
    PROSE["Write or revise the page<br/><i>model</i>"]
    CHECK{"Self-check:<br/>readable, and sounds human?"}
    SHELL["Open the pull request<br/><i>mechanical</i>"]
  end

  OUT["Gap report<br/><i>the first output</i>"]
  PRD["Draft pull request"]

  CODE --> EXTRACT
  CURATED --> SYNTH
  SPEC --> EXTRACT
  EXTRACT --> MAN
  SYNTH --> MAN
  MAN --> JOIN
  JOIN --> CLASS
  CLASS --> COV
  COV --> OUT
  COV --> PLACE
  MAN --> PLACE
  PLACE --> PROSE
  PROSE --> CHECK
  CHECK -- "no — revise" --> PROSE
  CHECK -- "yes" --> SHELL
  SHELL --> PRD
```

The drafting self-check follows the same rule as everything upstream of it: readability and "does this sound like AI wrote it" are measured, not eyeballed, against a fixed bar. Failing either sends the draft back for another pass — the model can revise its own work, but it never gets to grade its own work. None of this replaces a person's review, or the public repo's own style check; it just means that by the time a person looks at a draft, it has already cleared the bars a machine can check on its own, so a bad draft costs a revision cycle instead of a reviewer's patience.

One input matters more than it might seem: every product team already maintains its own architecture and glossary notes, written by the engineers who own the code. Understanding leans on those, rather than trying to re-derive meaning from raw source code. A model turned loose on source code alone can't reliably tell a customer-facing feature from an internal implementation detail; an engineer's own glossary already makes that distinction.

## 3. Why reorganizing the docs can't break anything

A separate effort is going to reorganize documentation folders across all 27 products. Any map that identified a feature by its file path would be destroyed by that reorganization. So nothing here works that way.

```mermaid
flowchart LR
  subgraph P["Product side"]
    F1["A feature<br/><i>identified by a stable ID,<br/>never a file path</i>"]
    EV["Evidence<br/><i>where the fact<br/>was found</i>"]
  end

  subgraph D["Docs side"]
    U["A document ID<br/><i>stored inside the page itself</i>"]
    PATHS[("Path lookup<br/><b>the only place<br/>a file path lives</b><br/><i>rebuilt automatically</i>")]
    FILE["The doc page"]
  end

  F1 --- EV
  F1 -- "documents" --> U
  U --> PATHS
  PATHS --> FILE

  RENAME{{"A folder gets<br/>renamed or moved"}}
  RENAME -- "the ID moves<br/>with the page" --> U
  RENAME -- "lookup<br/>rebuilds itself" --> PATHS
```

Every connection between a feature and a page is keyed on two stable IDs, never a path. The document's ID travels with the page when it moves. The file path lives in exactly one lookup table, and that table gets rebuilt automatically. A reorganization touches that one table and breaks nothing else.

Feature IDs come from the product's own code — a setting name, a flag, a rule ID — never from a file path, and never invented by a model. Once assigned, an ID is never silently reused or redefined; only new aliases can be added on top of it.

## 4. The states a doc page can be in

```mermaid
stateDiagram-v2
  direction LR
  [*] --> undocumented: feature exists,<br/>no page covers it
  undocumented --> drafted: a draft<br/>is in progress
  drafted --> published: merged
  published --> stale: the underlying<br/>fact changed
  stale --> published: re-verified
  undocumented --> exempt: a human marks it<br/>exempt, with a reason
  exempt --> undocumented: exemption removed
  published --> retired: the feature<br/>no longer exists<br/><b>human confirms</b>
  stale --> retired: the feature<br/>no longer exists<br/><b>human confirms</b>
  retired --> [*]

  note right of exempt
    Without this state,
    the coverage number
    is misleading and
    gets dismissed
  end note
```

The `exempt` state is what keeps a coverage number honest. "41 of 412 features documented" invites the fair objection that most of that 412 is internal plumbing nobody should ever document. So the count only includes features a customer can actually see, exemptions require a stated reason, and they're visible whenever they're added. The system reports three separate numbers — covered, stale, and orphaned — never one composite score, because a single number invites disbelief and three numbers invite a specific, fixable conversation.

The reverse case matters just as much: a page describing something that no longer exists. That's caught when a page's claimed feature disappears from the current snapshot, or when something the product used to expose is simply gone in a later snapshot. A page that never claimed to cover anything specific is reported as merely unmapped, never as drift — that distinction is what keeps the whole report credible.

## 5. Spending nothing on the changes that don't matter

```mermaid
flowchart TB
  PUSH(["Product code changes"]) --> LOOP{"Was this our own<br/>automated commit?"}
  LOOP -- yes --> STOP1(["Stop — avoid a loop"])
  LOOP -- no --> G1{"Did anything<br/>customer-facing change?"}
  G1 -- no --> STOP2(["Stop — no cost"])
  G1 -- yes --> DEDUPE{"Already flagged?"}
  DEDUPE -- yes --> STOP3(["Stop — already tracked"])
  DEDUPE -- no --> ALIGN["Check it against<br/>the docs"]
  ALIGN --> RED{{"Only customer language<br/>gets through"}}
  RED -- fail --> FAILJOB(["Blocked — nothing posted"])
  RED -- pass --> ISSUE["Finding is recorded"]
  ISSUE --> HUMAN(["Writer triages it"])
  HUMAN -- "confirmed" --> EXISTING["Existing process<br/>drafts the fix"]
```

Cheap checks run first, and have to agree before anything expensive happens. A large refactor that doesn't touch anything customer-facing costs nothing, because nothing about it looks worth checking.

The result is a recorded finding, not an automatic pull request. A finding is easy to ignore if it's wrong; an unwanted pull request is not, and across 27 products that difference in cost adds up fast. A writer who agrees the finding is real triggers the existing process that turns a confirmed finding into a pull request.

## 6. Rollout, with a checkpoint between each stage

```mermaid
flowchart LR
  S0["Stage 0<br/>Fix what's blocking us<br/>no automation yet"]
  G0{"A first manual run<br/>works end to end"}
  S1["Stage 1<br/>One small, falsifiable pilot"]
  G1{"Findings are accurate,<br/>and changes actually get merged"}
  S2["Stage 2<br/>A second product,<br/>with multiple versions"]
  G2{"A gap is reported once,<br/>not once per version"}
  S3["Stage 3<br/>A third product,<br/>fully automatic trigger"]
  G3{"Drafts pass review<br/>with zero internal leaks"}
  S4["Stage 4<br/>The largest product<br/><i>talk to its owner first</i>"]
  S5["Every remaining product<br/><i>same toolkit,<br/>new configuration only</i>"]

  S0 --> G0 --> S1 --> G1 --> S2 --> G2 --> S3 --> G3 --> S4 --> S5
  G1 -- fail --> KILL(["Stop —<br/>invest elsewhere instead"])
```

## What we're building on, not rebuilding

Most of what this needs already exists somewhere in the organization: a way to distribute a tool to every product team without copy-pasting it into each repo; working connections to the two systems that track work items; usage and cost tracking already in place; and, in every product repo, architecture and glossary notes the engineering team already keeps up to date. The documentation site itself already has editorial review, style checking, and a path from a labeled issue to a drafted fix.

The one genuinely new piece is the toolkit that connects all of this together, plus the snapshot and coverage formats it produces.

## Open asks

1. A dedicated identity for this automation, with write access to the documentation site and read access to product teams' workspaces, so it isn't running on any one person's personal access.
2. A home for the shared toolkit, and confirmation that its usage is billed centrally rather than through individual accounts.
3. Access to one more work-tracking system that today only works interactively, not from automation.
4. A conversation with the owner of the largest product before its stage begins — that team already runs its own separate, manual documentation process, and this needs to work with that process, not around it.
5. Read and comment access to each product team's workspace for documentation writers. Today writers only work inside the public documentation site.
