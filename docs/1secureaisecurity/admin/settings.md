---
title: "Settings"
description: "Set how AI Security scans run, how long results are kept, which rules raise issues, and which alerts you receive."
sidebar_position: 3
---

# Settings

Settings is where you set which rules raise issues, which alerts you receive, how this organization's AI Security scans run, and how long their results are kept. It has three tabs, in this order: **Rules**, **Alerts**, and **Settings**.

Only an organization administrator can change a setting. For anyone else, the controls are off, and hovering a control on the **Rules** or **Alerts** tab says "Only an organization administrator can change this."

## Rules tab

The **Rules** tab lists all AI Security rules, the platforms they apply to, and whether each is on for this organization.

| Column | What it shows |
|--------|---------------|
| Enabled | Whether the rule raises issues in this organization. |
| Platforms | The platforms the rule applies to. |
| Your severity | The severity in force, and whether it was changed from the default. |
| Threshold | The number the rule checks against, where it has one. |
| Open issues | How many open issues the rule has raised. |
| Exceptions | How many of its issues have an exception. |

Select a rule's row to open its drawer. The drawer says what the rule checks, why it matters, what an issue looks like, and the platforms it applies to. Under **Settings for this organization**, it holds the same **Enabled**, **Your severity**, and **Threshold** controls as the row.

### Change a rule

1. Select the **Rules** tab.
2. Find the rule's row.
3. Change any of these. Each change saves on its own.
   - **Enabled**: turn the switch on or off.
   - **Your severity**: choose a severity, or **Default** to use the rule's own.
   - **Threshold**: enter a number, then press Enter or leave the field. A number outside the rule's range shows "Between [min] and [max]" and isn't saved. The field says **Saving**, then **Saved**. **Use default** returns the rule's own number.

A rule the scanner doesn't evaluate can't be changed, and hovering its controls says "Not evaluated by the scanner." **Threshold** is empty on a rule whose number you can't change.

### Change several rules at once

1. On the **Rules** tab, select the checkbox on each rule's row. The bar over the table counts the rules selected.
2. Click **Enable** or **Disable**, or choose a severity in **Set severity**.
3. Read the confirmation, and click **Apply**.

**Reset to defaults** returns every rule with custom settings to its defaults. It asks "Reset every rule to its default?" first.

## Alerts tab

The **Alerts** tab lists all AI Security alerts, what triggers each one, and whether this organization receives it. Alerts are grouped as **Agent change**, **Data access**, **Governance**, **Identity lifecycle**, and **Runtime**.

**Roll up** is the period in which repeat alerts of one kind about the same item are combined into one alert. For example, with a roll up of 24 hours, repeats of one kind of alert about the same agent within 24 hours arrive as one alert. An alert raised from an issue shows **Once per issue**, its only choice: AI Security sends it once for each issue.

### Change an alert

1. Select the **Alerts** tab.
2. Find the alert's row.
3. Turn the **Enabled** switch on or off to choose whether this organization receives the alert.
4. In **Roll up**, choose the period.

Each change saves on its own. If a change can't be saved, the row says "This alert couldn't be saved."

## Settings tab (scans and retention)

![Settings tab with the Scan schedule, Scan limits, Retention, and Marked as not AI-related cards](/images/1secureaisecurity/misc/settings-tab-scan-schedule-and-limits.webp)

### Scan schedule

**Run scans** takes **Every day** or **Every week**, and **Start at (UTC)** takes the hour. **Not set** means scans run only when somebody starts one.

An organization that never saved a schedule is scanned every day, at an hour 1Secure picks for it, from the day after it connects its first source. 1Secure keeps any save from then on, **Not set** included.

Scans start on the schedule you save. A daily scan starts at the start hour. A weekly scan starts at the start hour once a week has passed since the last scan. With no hour set, scans start at 00:00 UTC. You can also start a scan at any time from **Sources**.

To set the schedule:

1. Select the **Settings** tab.
2. Under **Scan schedule**, choose **Every day**, **Every week**, or **Not set** in **Run scans**.
3. Choose the hour in **Start at (UTC)**.
4. Click **Save**. The page says "Setting saved."

### Scan limits

Scan limits set how far back a source's first scan looks, and how long each source's scan may run. Empty fields use the default, and changes apply from the next scan. Click **Save** to keep a change. The same **Save** keeps the scan schedule.

| Setting | What it limits |
|---------|----------------|
| Activity window | How far back a first scan looks, from 1 to 365 days. Left empty, each platform uses its own default, between 3 and 180 days. A later scan reads on from where the last one stopped. A source not scanned for more than 14 days catches up on the last 14 days only, or on the Activity window where it is longer, and older activity isn't read. Agent activity is kept for 180 days, so a longer window shows no more than that. |
| Time per source | How long each source's scan may run. Reads past this limit continue on the next scans. |

The **Settings** tab doesn't hold limits for one platform. Where a platform has any, they are under **Scan settings** on the platform's card on the **Sources** page, and they apply to every source of that platform.

| Setting | What it limits |
|---------|----------------|
| Agents with full configuration | Agents over this limit are listed without their configuration. |
| Sites scanned | How many SharePoint sites a scan reads. |
| Execution history pages | How many pages of run history a scan reads. |
| Execution history window | How far back a scan reads run history. |
| Detection events window | How far back a scan reads endpoint detection events. |
| Read Microsoft 365 Copilot interactions | A switch in the **Purview audit log** source's drawer on the **Sources** page, on by default. Its help says "Shows files Copilot used, jailbreak flags and who ran agents. Turn off to shorten large scans." Off, the scan doesn't read Copilot interaction records. It still reads the Agent 365 records. |

:::info
A source that runs out of time is read in part, and the scan drawer says "Raise Time per source under Settings, then scan again." Raise **Time per source** here.
:::

### Retention

Retention shows how long scan results are kept before 1Secure removes them. Netwrix sets these periods. The card shows them under "Set by Netwrix.", and you can't change them.

| Data | Kept for |
|------|----------|
| Agent activity | 180 days, counted from when the activity happened. |
| Trend history | 400 days. |
| Acknowledged alerts | 90 days, counted from the acknowledgment. Open alerts are never removed. |

The periods may change after the Beta.

### Marked as not AI-related

This card lists the programs and domains marked as not AI-related on Shadow AI. Scans skip them. Click **Undo** on an entry to have scans report it again.
