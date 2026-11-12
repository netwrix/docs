---
title: "Issues"
description: "Use the Issues page to decide what to fix first, mark an issue resolved, or make an exception for it."
sidebar_position: 5
---

# Issues

The Issues page lists what is wrong now across your agents and identities. Use it to decide what to fix first, to mark an issue resolved, or to make an exception for one.

![Issues page on the Open tab with By action and All issues, the Open issues, Since the last scan, and Fix progress cards, and the By category cards](/images/1secureaisecurity/pages/issues-page.webp)

## Cards

| Card | What it counts |
|------|----------------|
| Open issues | Open issues, split into critical, high, medium, and low, with "and [n] informational" after them where informational issues are open. That note opens the list narrowed to them. The card doesn't count exceptions. |
| Since the last scan | The issues the latest scan found new, resolved, and reopened. |
| Fix progress | How the open issues changed over 30 days, 90 days, or all time, for all open issues and for critical and high. |
| Categories | A card for each risk category with its open issues, worst severity first, then most open issues. Select a category to see its issues. **Not checked** means no rule in that category ran. |

## Tabs

| Tab | What it lists |
|-----|---------------|
| Open | The open and reopened issues. |
| Exceptions | The issues an exception covers. |
| Resolved | Issues the latest scan no longer finds. |

The count on the **Open** tab equals the **Open issues** card on the **Overview**.

After the first scan, there is nothing to compare with. **Since the last scan** and **Fix progress** say "First scan, nothing to compare yet", and the category cards show no change. The second scan brings them back.

## Ways to list issues

- **By action** groups issues under a **Recommended action**, with its **Severity** and its count of **Issues**, so one fix can close many issues.
- **All issues** lists every issue with **Issue**, **Affected**, **Platform**, **Severity**, **Owner**, **Status**, and **Discovered**.

Search with "Search issues, actions or agents".

Where two subjects on the page share a name, each issue title adds where its subject lives in brackets after the name: the environment for Copilot Studio and Power Platform, the site for SharePoint agents, otherwise the project or workspace. A name that only one subject holds keeps its title.

**Owner** names the agent's owner or sponsor. An agent with only a creator recorded reads **No owner**, as it does on the **Agents** page.

An issue about a setting on a resource that several agents share, such as an Azure AI Foundry resource's keys, is listed once, on the resource's identity. Every agent on the resource lists the issue on its own **Issues** tab, however many agents there are.

## Issue drawer

Select an issue to open its drawer. It shows **What we found**, **How to resolve**, **Details**, and **Activity**, and **View agent** or **View identity** to open the issue's subject. Where 1Secure knows which roles can make the fix, an info banner with a **Required access** tag names them.

An issue about a setting for the whole Microsoft tenant, such as who may consent to apps or Anyone sharing in SharePoint, names **Microsoft tenant settings** under **Affected**.

An issue about a setting for a whole workspace names that platform's workspace settings, such as **Notion workspace settings**. This applies to a Notion workspace, n8n instance, Atlassian site, Gemini Enterprise project, OpenAI organization, GitHub organization, Okta org, Anthropic organization, or Google Workspace domain. Neither a tenant settings issue nor a workspace settings issue has an owner, and nothing opens from it.

An earlier scan showed each workspace settings issue on one of the platform's agents, workflows, tokens, keys, members, or OAuth clients. The next scan moves the issue onto the workspace settings.

- Where the platform held one open issue for that rule, the moved issue keeps its first seen date, its status, and any exception. The scan counts it as neither resolved nor new.
- Where the platform held more than one open issue for that rule, such as two Confluence spaces open to anonymous readers, the earlier issues resolve and the moved ones start as new.

## Mark an issue resolved

1. In the issue drawer, click **Mark as resolved**.
2. Wait for the next scan to confirm the resolution. The scan reopens the issue if it still finds it.

Until the scan runs, the drawer says "Waiting for the next scan to confirm this is resolved.", states when scans run, such as "Scans run every day at 02:00 UTC.", and offers **Go to the source to scan now**.

## Mark an issue as an exception

1. In the issue drawer, click **Mark as exception**.
2. Choose a reason: **Accepted risk**, **False positive**, or **Not applicable**.
3. Under **Review again**, choose **In 30 days**, **In 90 days**, **In 1 year**, or **Never**. The issue reopens on that date if it is still present.
4. In **Note (optional)**, add a note if you want one. A note is required when you make more than 10 exceptions at once.
5. Click **Mark as exception**. The page shows "Exception made."

:::info
Exceptions don't affect risk. An exception keeps the issue on the **Exceptions** tab until its review date.
:::

Settling an issue marks its alerts seen. See [Alerts](/docs/1secureaisecurity/admin/pages/alerts.md) for how the two relate.
