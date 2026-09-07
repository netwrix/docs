---
title: Labels
description: Tag sources with key=value labels to filter the Sources page and to target scans at every source that matches.
sidebar_position: 5
---

A label is a `key=value` pair attached to a source, such as `env=production` or `team=finance`. Labels do two jobs: they let you filter the Sources page, and they let a scan target "every source with these labels" instead of a fixed list. Label a new file server `env=production` and the production scans pick it up on their next run without anyone editing them.

Labels on sources are separate from labels on agents, which decide where scans run; see [Agent labels and scan routing](../agents/agent-labels.md).

## The label model

- A label has a key and a value. Both are required.
- A source can carry up to 50 labels, and each key appears at most once per source. `env=production` and `env=staging` can't both be on the same source.
- Keys can be up to 63 characters and values up to 255. Neither can contain `=`, `;`, or `,`. Spaces, slashes, colons, and non-Latin characters are fine.
- Access Analyzer trims leading and trailing whitespace and compares labels case-insensitively: `Env=Production` and `env=production` are the same label. When you enter a key or value that already exists in another casing, the editor snaps it to the existing form.
- Labels form a shared vocabulary. Attaching `env=production` to a second source reuses the same label, and the editor suggests known keys and, after you pick a key, its known values.

### A labeling scheme that works

Pick a small set of keys, decide their values up front, and use them on every source. The following scheme answers most of the questions people ask of the Sources page and gives scans something stable to target.

| Key | Example values | Use it for |
|---|---|---|
| `env` | `production`, `staging`, `dev` | Scheduling: nightly Sensitive data scans on production only |
| `team` | `finance`, `hr`, `engineering` | Ownership; filtering the list when a team asks what's scanned |
| `region` | `emea`, `us-east`, `apac` | Splitting scans by region so each runs in its own maintenance window |
| `data` | `confidential`, `internal`, `public` | Deciding which sources need Sensitive data scans at all |
| `owner` | `jane.doe` | Who to call when a scan fails |

With this scheme, a scan targeting `env=production` and `data=confidential` covers every confidential production source, including any you add later.

## Ways to set labels

- In the **Labels** field in the **Details** section of the source form, when you add or edit a source. See [Add a source](index.md#add-a-source).
- In bulk: select several sources on the Sources page and click **Edit labels**. See [Edit labels on several sources](#edit-labels-on-several-sources).
- In a CSV import: the `labels` column takes `key=value` pairs separated by `;`. See [Import sources from a CSV file](import-sources.md).

### The label editor

The editor is a two-column grid with **Key** and **Value** headers, a remove button at the end of each row, and an always-present empty row at the bottom for the next label. There's no add button; filling in the empty row creates a new one below it.

Both cells offer autocomplete from the existing vocabulary: keys in the **Key** cell, and the values already used with that key in the **Value** cell. When nothing matches, the list says **No matching keys.** or **No matching values.** Keep typing to create a new label. Pasting `key=value` into the **Key** cell splits it into both cells.

The editor rejects mistakes inline:

| Message | Cause |
|---|---|
| **This label is already added** | The same `key=value` pair is on another row |
| **This key is already added** | Another row uses the same key |
| **Label key is required** / **Label value is required** | A row has only a key or only a value when you save |
| **Label key must be at most 63 characters** / **Label value must be at most 255 characters** | Too long |
| **Label key must not contain "=", ";", or ","** (or the value equivalent) | A forbidden character |

## Edit labels on several sources

1. On the Sources page, select the sources with the row checkboxes.
2. In the bulk action bar, click **Edit labels**. The dialog title shows how many sources you're editing.
3. Under **Add labels**, enter the labels every selected source should get.
4. Under **Remove labels**, select the labels to remove. The list offers only labels that at least one selected source carries. If none of the selected sources has a label, the field reads **The selected sources have no labels to remove.**
5. Click **Apply to N sources**. The button shows the number of sources you selected, for example **Apply to 3 sources**.

You must add or remove at least one label. If an addition would take a source past 50 labels, the dialog names that source and rejects the whole update, so none of the sources change. After the update, the dialog switches to **Label update results** and lists each source as **Updated** or with the reason it failed.

## Filter the Sources page by labels

The **Filter by labels (all must match)** box in the Sources toolbar takes one or more labels and shows only the sources that carry every one of them. Selecting `env=production` and `team=finance` shows the sources that have both, not either. The page URL carries the active filter, so you can bookmark a filtered view or send the link to a colleague. Click **Clear filters** to remove it and any other active filter.

## Target scans at labels

When you create a scan, the **Target** step asks **Which sources should this scan cover?** and offers two answers:

- **Specific sources**: pick exactly which sources to scan. The list stays fixed until you edit the scan.
- **Sources matching labels**: target every source that carries all of the labels you enter, re-evaluated at each run.

With **Sources matching labels**, enter the labels under **Source labels**. A source must carry all of them to be included: `env=production` plus `team=finance` targets production finance sources only. As you type, the step shows how many sources match right away, so you can check the selection before saving.

A scan can match nothing yet. The step shows **No sources match these labels yet** with the reminder **You can still create this scan — it will target any sources that match when it runs.** This is how you set up a scan before you add the sources it covers.

Each run resolves the labels again. A source you add or relabel into the set joins the next run; a source you delete or relabel out of it drops out. When a source drops out, its executions for that scan are removed as well. If a matching source is of a type that the scan can't handle, such as an Active Directory source matched by an Access scan, the step warns you, and the run skips that source without failing.

See [Scans](../scans/index.md) for the rest of the scan settings.
