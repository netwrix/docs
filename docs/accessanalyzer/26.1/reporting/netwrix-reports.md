---
title: Netwrix Reports
description: The Netwrix reports collection holds the dashboards that ship with Access Analyzer, in one collection per platform. See what each dashboard covers, which scan feeds it, and where the old dashboard and report pages went.
sidebar_position: 1
---

**Netwrix reports** is the collection Reporting opens on. It holds the dashboards that ship with Access Analyzer, in five collections, one per platform. They carry an **Official** badge and are read-only for everyone, Admins included. Access Analyzer updates them when you upgrade.

## The Five Collections

| Collection | Dashboards | Reads data from |
|---|---|---|
| **Top File System Reports** | **DSPM Scan Overview**, **Broken Inheritance**, **High Risk ACLs**, **Open Access**, **Share Audit**, **Sensitive Data Overview**, and **Activity Investigation** | File Server sources. **DSPM Scan Overview** also covers SharePoint Online. |
| **Top File Server (Discover) Reports** | The same seven dashboards, with the same names | File Server (Discover) sources. **DSPM Scan Overview** also covers SharePoint Online. |
| **Top SharePoint Reports** | **Shared Links Report**, **SharePoint High-Risk ACLs**, **SharePoint Open Access**, and **SharePoint Sensitive Data Overview** | SharePoint Online sources |
| **Top AD Reports** | **AD Scan Summary** and **AD Users** | Active Directory sources |
| **Top Entra ID Reports** | **Entra Users** and **Entra Groups** | Entra ID sources |

Each dashboard has a short description. For example, the description of **Open Access** is "Shares accessible by Everyone or Domain Users without restrictions."

## Two File Server Collections

Access Analyzer can collect file server data in two ways, and it stores each kind separately. **File Server** sources, described in [SMB file servers](../sources/smb-file-servers.md), store their data where **Top File System Reports** reads it. **File Server (Discover)** sources store theirs where **Top File Server (Discover) Reports** reads it. Each collection has the same seven dashboards, built for its own data, so the names match. In the Discover collection, each description ends with "This is the File Server (Discover) version."

Reporting shows both collections on every installation, whichever source type you use. Open the one that matches your sources. If all your file servers are **File Server** sources, use **Top File System Reports**. In the Discover collection, the cards about file server shares, folders, permissions, and sensitive data then stay empty. Activity from Netwrix Activity Monitor and SharePoint Online data look the same in both collections.

## What Each Collection Needs

Every dashboard is there from the first sign-in, even before any scan has run. Until the right scan completes, its cards show zeros or **No results!**. [Scan types](../scans/scan-types.md) explains each scan.

| Dashboards | You need |
|---|---|
| **DSPM Scan Overview**, **Scan Overview** tab | An Access scan on your File Server or SharePoint Online sources, plus a Sensitive data scan for the sensitive data cards |
| **DSPM Scan Overview**, **Activity** tab | Netwrix Activity Monitor sending events to Access Analyzer |
| **Broken Inheritance**, **High Risk ACLs**, **Open Access**, and **Share Audit** | An Access scan on a File Server source, plus a Sensitive data scan for the cards about sensitive files |
| **Sensitive Data Overview** | A Sensitive data scan on a File Server source |
| **Activity Investigation** and the **Activity** tab of **Share Audit** | Netwrix Activity Monitor sending file server events |
| **Shared Links Report**, **SharePoint High-Risk ACLs**, and **SharePoint Open Access** | An Access scan on a SharePoint Online source, plus a Sensitive data scan for the cards about sensitive files |
| **SharePoint Sensitive Data Overview** | A Sensitive data scan on a SharePoint Online source |
| **AD Scan Summary** and **AD Users** | An Identity sync on an Active Directory source |
| **Entra Users** and **Entra Groups** | An Identity sync on an Entra ID source |

The file server permission dashboards show account and group names, and follow nested group membership, only after an Identity sync has run on the matching Active Directory source. Without it, they show security identifiers (SIDs). Activity data doesn't come from a scan; [Netwrix Activity Monitor](../integrations/netwrix-activity-monitor.md) covers the connection.

## Work With a Dashboard

Filters sit at the top of a dashboard and narrow every card that responds to them. Some dashboards have tabs: **DSPM Scan Overview** has **Scan Overview** and **Activity**, and **Share Audit** has **Overview**, **Permissions**, **Sensitive Data**, and **Activity**. **Share Audit** looks at one share at a time, so pick a share in its **Share** filter first.

Clicking a card on a Netwrix dashboard doesn't drill into it. To see the records behind a number, [build a question](build-questions.md) on the same data.

You can download any card or a whole dashboard, and get a dashboard by email on a schedule. [Downloads, subscriptions, and alerts](downloads-subscriptions-alerts.md) explains how.

## Where the Old Pages Went

Earlier versions of Access Analyzer had **Dashboards** and **Reports** in the sidebar. Reporting replaces both. An old bookmark opens the matching dashboard, or the **Netwrix reports** collection when nothing matches.

| Old page | Where it is now |
|---|---|
| **Dashboards > Data security** | **DSPM Scan Overview** in **Top File System Reports** |
| **Dashboards > Active Directory** | **AD Scan Summary** in **Top AD Reports** |
| **Reports > Data**, **File system** tab | The dashboard of the same name in **Top File System Reports**. Both Share Audit entries open **Share Audit**. |
| **Reports > Data**, **SharePoint** tab | **Top SharePoint Reports**: Shared Links is **Shared Links Report**, and the other three carry a SharePoint prefix, such as **SharePoint Open Access** |
| **Reports > Identity** | **AD Users** in **Top AD Reports**, and **Entra Users** and **Entra Groups** in **Top Entra ID Reports** |
| **Reports > Compliance** | Removed, with no replacement. The reports it listed are still here: **Broken Inheritance**, **High Risk ACLs**, **Open Access**, **Share Audit**, **Activity Investigation**, and **Sensitive Data Overview** in **Top File System Reports**, and **Shared Links Report** in **Top SharePoint Reports**. |
