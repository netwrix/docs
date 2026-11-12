---
title: "Settings"
description: "Set how AI Security scans run, how long results are kept, which rules raise issues, and which alerts you receive."
sidebar_position: 3
---

# Settings

Settings is where you set how this organization's AI Security scans run, how long their results are kept, which rules raise issues, and which alerts you receive. It has three tabs: **Rules**, **Alerts**, and **Settings**.

![Settings tab with the Scan schedule, Scan limits, Retention, and Marked as not AI-related cards](/images/1secureaisecurity/misc/settings-tab-scan-schedule-and-limits.webp)

## Settings tab

### Scan schedule

**Run scans** takes **Every day** or **Every week**, and **Start at (UTC)** takes the hour. **Not set** means scans run only when somebody starts one.

An organization that never saved a schedule is scanned every day, at an hour 1Secure picks for it, from the day after it connects its first source. 1Secure keeps any save from then on, **Not set** included.

Scans start on the schedule you save. A daily scan starts at the start hour. A weekly scan starts at the start hour once a week has passed since the last scan. With no hour set, scans start at 00:00 UTC. You can also start a scan at any time from **Sources**.

### Scan limits

Scan limits set how far back a source's first scan looks, and how long each source's scan may run. Empty fields use the default, and changes apply from the next scan. Click **Save** to keep a change.

| Setting | What it limits |
|---------|----------------|
| Activity window | How far back a first scan looks. The default is each platform's own, 3 to 180 days. A later scan reads on from where the last one stopped, never further back than 14 days, or than the Activity window where it is longer. |
| Time per source | How long each source's scan may run. Reads past this limit continue on the next scans. |

The **Settings** tab doesn't hold limits for one platform. Where a platform has any, they are under **Scan settings** on the platform's card on the **Sources** page, and they apply to every source of that platform.

| Setting | What it limits |
|---------|----------------|
| Agents with full configuration | Agents over this limit are listed without their configuration. |
| Sites scanned | How many SharePoint sites a scan reads. |
| Execution history pages | How many pages of run history a scan reads. |
| Execution history window | How far back a scan reads run history. |
| Detection events window | How far back a scan reads endpoint detection events. |
| Read Microsoft 365 Copilot interactions | A switch in the **Purview audit log** source's drawer on the **Sources** page, on by default. Turn it off to shorten large scans. With it off, scans lose the files each Copilot answer touched, the jailbreak flag, and the per-person runs of the agents used in Copilot. |

:::info
A source that runs out of time is read in part, and the scan drawer says "Raise Time per source under Settings, then scan again." Raise **Time per source** here.
:::

### Retention

Retention shows how long scan results are kept before 1Secure removes them: **Agent activity**, **Acknowledged alerts**, and **Trend history**. The setting applies to the whole deployment, and you can't change it here.

### Marked as not AI-related

This card lists the programs and domains marked as not AI-related on Shadow AI. Scans skip them. Click **Undo** on an entry to have scans report it again.

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

**Reset to defaults** returns every rule with custom settings to its defaults.

## Alerts tab

The **Alerts** tab lists all AI Security alerts, what triggers each one, and whether this organization receives it. Alerts are grouped as **Agent change**, **Data access**, **Governance**, **Identity lifecycle**, and **Runtime**.

**Roll up** is the period in which repeat alerts of one kind about the same item are combined into one. AI Security sends alerts from issues once for each issue.
