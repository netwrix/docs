---
title: Access and Administration
description: How Access Analyzer roles control Reporting, what Admins can and can't change, what stays locked for everyone, and where to get help with Reporting.
sidebar_position: 5
---

Reporting has no user list or settings of its own to manage. Access Analyzer roles decide who can use it, and Access Analyzer sets up everything else.

## Roles and Reporting

You manage access to Reporting by giving people roles on **Settings > Users**, as described in [Users and roles](../settings/users.md).

| Role | In Reporting |
|---|---|
| **Admin** | Full use of Reporting. Admins belong to the **Netwrix Users** and **Netwrix Admins** groups. |
| **Viewer** | Full use of Reporting, the same as Admins. Viewers belong to the **Netwrix Users** group. |
| **User admin** | No access. Reporting doesn't appear in the sidebar. |

The group names matter mainly when you talk to Netwrix support. Admins and Viewers can do the same things inside Reporting.

Changes to accounts reach Reporting on their own:

- A new Admin or Viewer can open Reporting right away, with no extra setup.
- A role change takes effect in Reporting right away. Changing someone to User admin removes that person's Reporting access.
- Deactivating a user ends that user's Reporting session.
- If Reporting is unavailable when you make a change, Access Analyzer applies it during its nightly check.

While Reporting is unavailable, Access Analyzer won't delete a user or change a user's email address, so the two stay matched. Try again once Reporting is back.

## What Admins Can Do

Admins manage Reporting from Access Analyzer, not from inside Reporting:

- Decide who can use Reporting, by giving people the Admin or Viewer role.
- Remove someone's access, by changing the person's role to User admin or deactivating the account.
- Ask Netwrix support to set up email for subscriptions and alerts, or to change the approved email domains.

Inside Reporting, Admins have the same features as Viewers: they open the Netwrix dashboards, build questions, organize shared collections, download results, and set up subscriptions and alerts.

## What Stays Locked

Nobody can do the following in Reporting, Admins included:

- Write SQL.
- Change, move, or delete anything in **Netwrix reports**, **Home**, or **Deprecated**.
- Open the administration pages, where data connections, permissions, groups, people, sign-in, email, caching, and appearance would be set. If you open one, it shows an error.
- Open another person's personal collection.
- Create public links, embed a dashboard in another site, or upload files.
- Connect Slack.

Access Analyzer sets these up when it installs Reporting and applies them again on every upgrade. [What's turned off](index.md#whats-turned-off) lists the features that are off for everyone.

## Get Help With Reporting

Reporting runs on Metabase, and some screens show the Metabase name. Contact Netwrix support with every Reporting question or problem, such as a dashboard that doesn't load, email that doesn't arrive, or a change you need. Don't contact Metabase: Netwrix supports Reporting as part of Access Analyzer. Metabase's own documentation describes features that Access Analyzer turns off, so use these pages instead.

If the Reporting page shows **Reporting didn't load**, click **Retry**. If it still doesn't load, an Admin can contact Netwrix support.
