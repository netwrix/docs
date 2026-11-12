---
title: "Alerts"
description: "Read what happened in your environment, mark alerts as seen, and see how each alert relates to an issue."
sidebar_position: 8
---

# Alerts

The Alerts page lists what happened in your environment, newest first. You read each alert, see whether it relates to an issue, and mark it as seen.

The page is titled **Alerts and activity** and has two tabs. **Alerts** lists the alerts. **Activity** lists what every agent and machine identity did as the platforms reported it, newest first. The **Activity** tab hides sign ins made by 1Secure's own scans. The switch **Show 1Secure's own sign ins** under the table shows them, beside how many are hidden.

![Alerts tab with the New alerts and Since you last looked cards, the By group tiles, the New, Seen, and All tabs, the Platform, Group, and Severity filters, and the Severity, Subject, Owner, Alert, Time, and Status columns](/images/1secureaisecurity/pages/alerts-page.webp)

## Alerts and issues

An alert tells you something happened. An issue tells you something is wrong now.

An alert is a moment. It has a time, a subject (an agent, an identity, an app, a person, or a platform), and the platform that reported it. You can't fix an alert, because it already happened. You read it and mark it as seen.

An issue is a standing fact a scan found. It stays open until a scan no longer finds it, until someone marks it resolved, or until someone makes an exception for it.

## Cards and groups

The **Alerts** tab opens with two cards.

- **New alerts** counts the alerts nobody has marked as seen, by severity. Select a severity to narrow the list to it.
- **Since you last looked** counts the alerts raised since your last visit to this page in this browser. On a first visit, it says "Counted from your next visit."

The first scan of a source raises no alerts from what the platform reported. That scan brings the audit history from before you connected the source, such as roles given, consents, and sign ins from past weeks. The history is listed on the **Activity** tab and in each identity's history. Alerts start with the next scan, which reports only what happened since. While every source has been scanned only once and no alert exists (new or seen), a note ahead of the cards says "A source's first scan raises no alerts. They start with the next scan."

Under the cards, **By group** has a tile for each group: **Data access**, **Identity lifecycle**, **Agent change**, **Runtime**, and **Governance**. Each tile shows how many alerts are new and how many of them are critical or high. Select a tile to see that group's alerts. The sidebar badge on Alerts counts every new alert.

The Issues page lists issues with **Open**, **Exceptions**, and **Resolved** tabs.

## When alerts are raised

### Identity lifecycle alerts

AI Security raises **Identity lifecycle** alerts only for an AI agent the Agents page lists, or for an identity such an agent runs as. A service principal or app that no listed agent uses raises none of them. The alerts are:

- A secret or certificate added, replaced, or expired.
- An identity disabled or given a role.
- An app consented to.
- Failed sign ins.
- A sign in from a new address or country.

Only a public address raises a sign in from a new address. A private, link-local, or loopback address doesn't. AI Security marks as seen an open alert for a sign in from a new address, raised earlier, whose addresses are all private.

An alert about an identity an agent runs as names that agent as its subject and in its title, and opens its page. The drawer's details name the identity under **Identity**. Any other alert whose subject is an identity reads **Identity** and opens the identity's page.

An identity's first ever sign in raises no sign in from a new address or country. It raises **AI agent or tool first ran**, which names the address and the country it came from. Like the sign in alerts, it names the agent that runs as the identity in its title and opens that agent. A later sign in from a new country raises one **Sign in from a new country** alert that names the new place, its address, and its country together, with no new address alert beside it.

### Combined alerts

The first times one agent or identity shows in one scan are one alert, titled by its name. They include its first run, a host it reached, a new place or a new address it signed in from, and a secret or certificate added to it in the same scan. The drawer lists each under **Event**, and the alert takes the highest severity among them. AI Security marks the secret or certificate alert that the combined alert lists as seen.

A knowledge source added to an agent raises one **AI agent can read new data** alert, which names the site or page with its address, and no **AI agent connected to a service** alert beside it. A connector is named by its display name and the action the agent calls, such as MSN Weather (Current weather).

A new person or computer on a tool marked not approved raises one **Not approved AI tool in use** alert that names them. AI Security marks the first use and first computer alerts that the same records raised as seen.

### Discovery and consent alerts

**New AI agent discovered** is raised once for each agent, and lists the permissions the agent holds. An Agent 365 registry row that is an agent another platform already lists raises none. The row is matched by its application ID, and by its name only where it carries no application ID. The other agent's alert then says the row was taken to be that agent. After the agent leaves your environment, AI Security marks its alert as seen.

**Person consented to an app** is High where the consent covers the whole organization, and lists the permissions it granted and whom it covers. AI Security counts one person's consents to one app within a minute as one.

A role activated through Microsoft Entra Privileged Identity Management (PIM) raises **Identity given a role** only for Global Administrator. Any other activation is listed on the **Activity** tab with no alert.

Failed sign ins that continue while their alert isn't yet seen update that alert's count and time rather than raise a new alert each day. A new alert starts after the alert is marked seen or the failures stop for a day.

**Secret or certificate added** is Medium. It is High in any of these cases:

- The identity holds a privileged directory, admin, or Azure role.
- The identity is an AI agent that reaches sensitive data.
- The platform names who added the secret or certificate, and that person isn't one of the identity's owners on record.

## Mark an alert as seen

1. Select **Alerts** in the sidebar. The tabs are **New**, **Seen**, and **All**, with the columns **Severity**, **Subject**, **Owner**, **Alert**, **Time**, and **Status**. **All alerts** lists them by time. **By kind** groups them under each kind of alert.
2. Narrow the list with the **Platform**, **Group**, and **Severity** filters. The page hides low alerts until you turn on **Show low** or choose a severity. **Clear filters** removes every filter.
3. Select an alert to open its drawer.
4. Click **Mark as seen**. The alert moves to **Seen** for everyone in the organization, and the sidebar badge count goes down.

To undo it, open a seen alert and click **Mark as new**. The alert moves back to **New** for everyone, and the page says "Marked as new."

The **Owner** column names who owns the agent or identity the alert is about, or says "No owner". It is empty where nobody is named, as the "i" beside its header says, such as for an alert about a person or a platform.

- An alert whose subject is an identity names the identity's owners, sponsors, and creators, as the Identities page does. A person who only consented to the app is among them, whatever kind of alert it is.
- An alert about an agent, including an alert about the identity it runs as, names the agent's owners.
- Where the directory holds the account, the page shows the person who acted and each account the alert names by their display name rather than their address.

The page lists the same kind of alert about the same subject once. Where it happened more than once, the list says how often, for example "4 times since" a date and time. Marking it as seen marks every occurrence as seen.

## Alert drawer

The drawer's title is the alert's sentence with the names filled in. Under it are the kind of alert, its severity, **New** or **Seen**, and how long ago it happened. The drawer shows where the alert sits in the list, for example "Alert 3 of 12", and moves to the alert before or after it. Its sections come in this order:

1. **What happened.** "Happened 4 times since" a date and time where it happened more than once, how 1Secure knows, and why it matters.
2. **People**, for a tool used after it was marked not approved: each person and the machines they used it on.
3. **Occurrences**, where the alert happened more than once: who or what, when, and what that one occurrence carries of its own, such as the role given, where it came from, the account or machine, and the permissions.
4. **Details.** The subject, linked to its agent or identity page where it is one, the owner, the platform, the group, **Discovered**, **Last seen**, the facts for this kind of alert, and who marked it seen and when. An AI tool seen on a computer is a row of the Shadow AI page, so its subject has no link.
5. **Related issue**, where there is one. See [How an alert relates to an issue](#how-an-alert-relates-to-an-issue).
6. What to do: the action and the steps for this kind of alert. For an AI tool seen on a computer, the action opens the tool on the Shadow AI page.

**Mark as seen** sits in the drawer's footer while the alert is new, and **Mark as new** appears after it is seen. The **More actions** menu holds **Copy link**, which copies a link that opens this alert.

## How an alert relates to an issue

Some alerts are about a change that raised an issue or added to one. The **Related issue** section names the issue and says which:

- "Raised by this alert": the alert told you about a new issue.
- "This alert adds to it": the subject already has this issue, and the event is part of it.

Under that line, the drawer reads the issue's state at the moment you open it: "The issue is open.", "The issue is reopened." (with "Reopened. The issue was resolved and a later scan found it again."), "The issue is resolved.", or "The issue is an exception until [date]." **View issue** opens that one finding on the Issues page, in the tab its state lives in. A shadow AI issue opens the app on the Shadow AI page.

Alerts with no issue to relate to, such as an owner leaving, have no **Related issue** section. An alert whose kind names an issue rule that the subject has no finding under offers **View issue** instead, which opens that rule on the Issues page.

## What happens to the alert when the issue changes

- **The alert's record keeps what happened then.** Its severity and time describe the moment it was raised. Resolving the issue, making an exception, or a scan reopening it leaves the alert as it was, and AI Security never reduces the severity. Only the alert's sentence can change. Who marked it seen, and when, stays.
- **Settling the issue marks the alert seen.** When you mark the issue resolved or make an exception for it, the alert moves to **Seen** on its own. The **Seen** line under **Details** says who did it and when: "[Person] marked the issue as resolved on [date]" or "[Person] marked the issue as an exception on [date]".
- **Seen is for the organization.** One person marking an alert seen marks it for everyone, and the record keeps who and when.
- **The issue keeps its own state.** Marking an alert seen changes nothing on the issue. "Have we read this" and "is this still wrong" are two different questions, answered on two different pages.
