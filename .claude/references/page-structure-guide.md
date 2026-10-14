# Page structure guide: what a page is and how to scope and name it

`documentation-section-guide.md` says where a page goes (the zone). This guide says what the page is: its job, its title, and whether it is a new page, a new section, or an edit. Read both before you decide where new content goes.

## 1. Decide the page's job

Before you write, state the reader's goal in one sentence for yourself: what they want to do, understand, or look up. Use it to pick the title, the type, and what to leave out. Give the page one primary type:

| Type | The reader wants to | Headings |
|---|---|---|
| Task | Do something | Imperative verbs |
| Concept | Understand something | Noun phrases or gerunds |
| Reference | Look something up (flags, settings, fields, codes) | Noun phrases |
| Troubleshooting | Fix a problem | The symptom or the error |

Secondary content from another type is fine if it supports the job. A task page may carry a short section on limits and a troubleshooting section. If a second job needs its own prerequisites and steps, it is a second page.

Every page opens with a short overview of one to three sentences: what the feature, surface, or term is, and what it is useful for. Take the value from the source material, and don't invent a benefit it doesn't support. Skip marketing language. A glossary entry is the exception, because its definition does that job.

## 2. New page, new section, or edit

Work through these in order and stop at the first that fits.

1. **The behavior is already documented and the code changed it.** Edit that page. Search the docs for statements the change makes false (limits, "you can't" claims, old labels, old defaults) and fix each one. Don't add a second page that contradicts the first.
2. **An existing page already answers the same reader question.** Add a section to it.
3. **The content is a distinct task with its own prerequisites, procedure, and failure modes.** Write a new page.
4. **The content is a few paragraphs that only make sense inside a parent task.** Add a section to the parent page.

When you add a page, add a one-line link from the page where a reader would look first (the parent overview or the neighboring task page). Link to existing procedures instead of copying them.

## 3. Name the page for the reader's goal

- **Default: name it for the task the reader performs.** A title that states the task tells a reader who needs it that this is their page.
- **Name it for the UI surface (a card, page, or dialog) when that is what the reader looks for.** That means the surface covers several tasks, or the surface exists for one purpose and nothing else belongs on it. Sections under it hold the tasks.
- **Name it for the thing being specified when the page is a reference or a prerequisite**.
- Match the neighboring page titles in form: gerund, noun phrase, or imperative. Follow `docs/CLAUDE.md` for headings.
- Use UI labels exactly as the product shows them, in bold when they appear in text.
- Don't name a page for a PR, a ticket, a service, a code package, or an internal name the reader never sees.

## 4. Get to the task fast

This section applies to task pages. For a reference page, see section 5.

A reader who needs to act should reach the steps quickly. Keep the overview from section 1 to its one to three sentences.

- After the overview, lead with what the reader came to do. Add only the orientation they need before acting.
- When a surface carries several tasks, give each task its own imperative heading and order them by how often readers need them.
- When there is more than one way to do the task, add a section near the top that says which method fits which situation, then give each method its own section.
- Put conditions that decide whether the task is possible ahead of the steps. A section on prerequisites or conditions comes before the procedure.

## 5. Reference pages: a UI surface or a glossary

The reader wants to look something up, not follow steps. They scan, and they may arrive from search in the middle of the page. Organize for lookup.

- **Open with the overview from section 1**: at least one sentence on what the surface or list covers, and at least one on why it is useful or what people use it for. No walkthrough.
- **Cover everything the surface offers.** For a UI surface, give each element (tab, column, filter, button, field, status) once, in the order the screen shows it. Don't skip elements because they seem obvious. Find the full list in the code or UI strings, not from memory.
- **One heading per element or group**, named with the exact UI label. Use a table when every item has the same attributes (name, what it does, allowed values, default). Use headings with short paragraphs when items need more than a sentence.
- **Describe what each element does or means, not how to use it.** When an element starts a longer procedure, give one sentence and link to the task page. Don't write the procedure here.
- **Define a term where the reader looks it up.** In a glossary, order entries alphabetically, start each with the term in bold and a one-sentence definition, and link to the page that explains it. Don't repeat the full explanation.
- **Keep the same shape for every item.** Readers compare entries, so use the same attributes in the same order.
- **Put conditions and exceptions on the item they affect**, not in a separate section at the end.
- **Don't add Troubleshooting or What it doesn't do sections** unless the surface has failure modes of its own. Link to the task or troubleshooting page instead.
- **Link in both directions.** Task pages link to the reference for details. The reference links back to the tasks it supports.

If the surface also carries tasks the reader performs, keep the reference page for lookup and give each task its own page or its own section after the reference content.

## 6. API documentation

Follow the Change Tracker model (`docs/changetracker/api/`).

- **Substantial API with an OpenAPI spec:** don't hand-write endpoint pages. The reference is generated from the spec, so the fix for a wrong endpoint description is in the spec. Hand-write only the pages around it:
  - `overview`: what the API is for, the base URL, and how to get access.
  - `authentication`: how to get and use a token, with one working example. Place it before any page that calls an endpoint.
  - `reference/index`: what the reference covers, how it is organized, how to use the interactive explorer, and a link to download the spec.
  - Task guides: one page per workflow that spans endpoints or needs context the spec can't give (a gotcha, a required call order, a client library limit). These are task pages, so they follow sections 1 to 4.
- **Small API with no spec:** write one page per resource group, in the endpoint-first form of the existing hand-written API pages. For each endpoint, give the method and path, a request example, the parameters (name, what it does, type, required or optional), the response and its status codes, and an error example if the failure isn't obvious.
- **Keep the same shape for every endpoint**, as in section 5.
- **Wrap URL placeholders such as `<hub-url>` in backticks** so MDX doesn't parse them as tags, and give every code fence a language.
- **Check the product's `api/CLAUDE.md`** for how its reference is generated before you edit anything there. Generated `.api.mdx` files are gitignored, so don't edit them.

## 7. Order inside a task page

Overview, then prerequisites, then procedures, as `docs/CLAUDE.md` requires. After the procedures:

- **Limits:** what the task doesn't do, irreversible effects, and things the reader might assume.
- **Troubleshooting:** the failures a reader can hit, each with its message and the fix.
- Put an example right after the procedure or concept it illustrates.

## 8. Placement

Place the page by the reader's question, per `documentation-section-guide.md`. Set `sidebar_position` beside the pages a reader would use before and after it. A prerequisite page sits before the procedure that needs it.

## 9. Report your structure choice

In your report, say in one or two lines whether you wrote a new page, a section, or an edit, why, and why you chose that title. List each existing page you edited because the change made a statement false.
