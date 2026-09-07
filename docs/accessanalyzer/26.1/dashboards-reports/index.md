---
title: Dashboards and reports
description: Dashboards summarize what your scans have found, reports answer one question in depth, and both open in the same viewer with filters, drill-down, and a Refresh button.
---

Everything a scan collects ends up in one of two places. Dashboards give you the wide view: a page of counts, charts, and a detail table for a whole area of your environment. Reports answer one question at a time, with filters tuned to that question. Both open in the same viewer and behave the same way once they're on screen.

## Dashboards and reports compared

There are two dashboards, listed under **Dashboards** in the sidebar:

- [Data security dashboard](dashboards/data-security.md) covers File Server and SharePoint Online sources: what your scans have covered, where they found sensitive data, how many permissions they analyzed, and, on its **Activity** tab, which users did what.
- [Active Directory dashboard](dashboards/active-directory.md) covers your domains: users, groups, memberships, privileged accounts, and a catalog of detected risks.

Reports live under **Reports**, on three pages. **Data** lists 11 reports on file servers and SharePoint Online, **Identity** lists three on Active Directory and Entra ID users and groups, and **Compliance** shows eight of the Data reports again, grouped by regulatory framework. Two of the Data entries, both named Share Audit, open the same report. Each report has a description under its name in the list, and all but the two Entra ID reports have filters of their own once open.

Use a dashboard when you want totals and trends for a whole area. Use a report when you want the reason behind a number, or the specific folders, links, or accounts involved. [Data reports](reports/data.md), [Identity reports](reports/identity.md), and [Compliance reports](reports/compliance.md) describe every report and its cards.

## Role access

Users with the Admin or Viewer role see the **Dashboards** section and can open any report. Users with the User admin role don't see **Dashboards**, and although they can open the **Reports** pages, report content doesn't load for their account. [Users and roles](../settings/users.md) explains the three roles.

## The viewer

A dashboard or report page has breadcrumbs, a heading, a **Refresh** button at the top right, and the content itself below. Reports also show the report's description under the heading and a **Back to Data reports** or **Back to Identity reports** link that returns you to the list you came from, with the tab and category you had selected.

Filters sit at the top of the content, inside the dashboard or report rather than in the page header. They apply the moment you change them; there's no Apply button. Where a filter accepts more than one value, you can pick several. Filters go back to their defaults when you click **Refresh** or reload the page. Some content also has tabs of its own: the Data security dashboard has **Scan Overview** and **Activity**, and the Share Audit report has four.

Drill-down works on any tile, chart segment, bar, or table cell. Click one, and a menu offers ways to break the value down or see the records behind it. Choosing an option opens a detail view with a back button on the left, a title, and controls on the right for filtering, changing the chart type, adjusting settings, opening the query editor, and resetting your changes. You can explore freely but can't save what you build. The back button returns you to the dashboard, which reloads with its filters reset.

If the content fails to load, the page shows **Dashboard error** and **Unable to load** followed by the dashboard or report name, sometimes with an **Error details** box. Click **Reload dashboard** to reload the page.

## Data freshness

Nothing on these pages updates on its own, and Access Analyzer caches dashboard results, so a scan that finished a moment ago may not appear on a dashboard yet. After a scan completes, click **Refresh** to reload the page's data. If a dashboard's figures haven't changed after a refresh, the cached results may not have expired yet; wait and refresh again later.

## What each dashboard and report needs

Every dashboard and report appears in the interface from the first sign-in, even when there's no data behind it. Until the right scan has run, tiles show zero or **No results!**, and charts and tables show **No results!**. The table shows which scan, or which event feed, populates each dashboard and group of reports. [Scan types](../scans/scan-types.md) explains the Access scan, Sensitive data scan, and Identity sync; [Sources](../sources/index.md) explains which source types each applies to.

| To populate | You need |
|---|---|
| Data security dashboard, **Scan Overview** tab | An Access scan on your File Server or SharePoint Online sources, plus a Sensitive data scan for the sensitive data tiles and charts |
| Data security dashboard, **Activity** tab | Netwrix Activity Monitor sending events to Access Analyzer |
| Active Directory dashboard | An Identity sync on an Active Directory source |
| File system permission reports: Broken Inheritance, High Risk ACLs, Open Access, Share Audit | An Access scan on a File Server source, plus a Sensitive data scan for the Open Access cards that show sensitive files and exposed patterns |
| File system sensitive data reports: Sensitive Data Overview, the Share Audit **Sensitive Data** tab | A Sensitive data scan on a File Server source |
| File system activity: Activity Investigation, the Share Audit **Activity** tab | Netwrix Activity Monitor sending events to Access Analyzer |
| SharePoint permission and sharing reports: Shared Links, High-Risk ACLs, Open Access | An Access scan on a SharePoint Online source, plus a Sensitive data scan for the cards that count links or files with sensitive data |
| SharePoint Sensitive Data Overview | A Sensitive data scan on a SharePoint Online source |
| AD Users | An Identity sync on an Active Directory source |
| Entra Users, Entra Groups | An Identity sync on an Entra ID source |

For the file system permission reports, an Identity sync on the matching Active Directory source turns identifiers into names and expands group membership. The Share Audit **Overview** tab also draws on two other feeds: its Matches card needs a Sensitive data scan, and its Probable Owner card needs Netwrix Activity Monitor events. On the Share Audit **Sensitive Data** tab, the Users by Activity on Sensitive Files card also needs Netwrix Activity Monitor events.

Activity data doesn't come from a scan. It arrives from Netwrix Activity Monitor, which watches file servers, SharePoint Online, and Microsoft 365 Copilot and streams events to Access Analyzer. [Netwrix Activity Monitor](../integrations/netwrix-activity-monitor.md) covers the connection.
