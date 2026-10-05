---
title: Reporting
description: Reporting is where Access Analyzer shows what your scans found. Open the Netwrix reports, build your own questions, keep them in collections, download results, and get dashboards by email.
---

Reporting is where you see what your scans found. Click **Reporting** in the sidebar to open it. It opens on the **Netwrix reports** collection, which holds the dashboards that ship with Access Analyzer, such as Open Access, Share Audit, and AD Users. From there you can also build your own questions, save them where your team can find them, download results, and get dashboards by email on a schedule.

Reporting runs inside Access Analyzer and signs you in with your Access Analyzer account. There's no second account or password, and Reporting doesn't need internet access. When you sign out of Access Analyzer, or your session ends, Reporting signs you out too.

## Who Can Use Reporting

Admins and Viewers can open Reporting, and inside it they can do the same things. User admins can't open it: Reporting doesn't appear in their sidebar, and a link to it takes them to **Settings > Users**. Give anyone who needs reports the Viewer or Admin role. [Access and administration](administration.md) covers roles, what Admins can change, and what stays locked.

## Pages in This Section

| Page | What it covers |
|---|---|
| [Netwrix reports](netwrix-reports.md) | The dashboards that ship with Access Analyzer, the scans that feed them, and where the old dashboard and report pages went |
| [Build questions](build-questions.md) | Building your own tables and charts with the query builder |
| [Collections](collections.md) | Your personal collection, shared collections, and the read-only collections |
| [Downloads, subscriptions, and alerts](downloads-subscriptions-alerts.md) | Saving results as files, and getting dashboards and alerts by email |
| [Access and administration](administration.md) | Roles, what Admins can do, what stays locked, and where to get help |

Links to dashboards elsewhere in Access Analyzer open them in Reporting. So do old bookmarks to the **Dashboards** and **Reports** pages, which open the matching dashboard.

In a browser window narrower than 1,200 pixels, Reporting fills the window. Click **Back to Access Analyzer** at the top to return.

## How Fresh the Data Is

Reporting shows what your scans have collected. A dashboard shows zeros or **No results!** until the scan that feeds it has run. [What each collection needs](netwrix-reports.md#what-each-collection-needs) lists the scans.

Saved questions and dashboards reuse a result for up to 15 minutes. After a scan completes, a dashboard can take up to 15 minutes to show the new data.

## What's Turned Off

Some features are off for everyone, Admins included:

- **SQL.** Reporting has no SQL editor. Build questions with the query builder instead.
- **Drill-through on Netwrix dashboards.** Clicking a chart, bar, or table cell on a Netwrix dashboard doesn't open a breakdown or the records behind it. Filters still work. To see the records behind a number, [build a question](build-questions.md) on the same data.
- **Changes to the Netwrix reports.** The Netwrix collections are read-only. Save your own questions and dashboards in your personal collection or a shared one.
- **The Compliance reports page.** It's gone, with no replacement. The reports it listed are still in Netwrix reports; [Where the old pages went](netwrix-reports.md#where-the-old-pages-went) shows where.
- **Public links and embedding.** You can't share a dashboard through a public link or embed it in another site. Share through a [shared collection](collections.md) or an [email subscription](downloads-subscriptions-alerts.md#email-a-dashboard-on-a-schedule) instead.
- **File uploads.** You can't upload a spreadsheet or a comma-separated values (CSV) file to query it.
- **Slack.** Subscriptions and alerts go by email only, and only to approved email domains.
- **X-rays and AI features.** Automatic explorations (X-rays) and the AI assistant are off.
- **Background maps.** Map charts show their points on a blank background, because Reporting doesn't download map images from the internet.
- **Administration pages.** [What stays locked](administration.md#what-stays-locked) lists them.

## Get Help

Reporting runs on Metabase, and some screens show the Metabase name. Netwrix supports Reporting as part of Access Analyzer, so contact Netwrix support with any question or problem, not Metabase. Metabase's own documentation describes features that Access Analyzer turns off, so use these pages instead.
