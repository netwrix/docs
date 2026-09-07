---
title: Sources
description: A source is a file system or identity system that Access Analyzer scans; add, edit, label, and delete sources from the Sources page.
---

A source is one system that Access Analyzer connects to and scans: a file server, an Active Directory domain, an Entra ID tenant, or a SharePoint Online tenant. Every source has a type and a connection (where the system is), and usually a service account (how Access Analyzer signs in to it). Scans then run against one or more sources and store what they collect for the dashboards and reports.

Manage sources at **Configuration > Sources**. Users with the Viewer role see a read-only list without the add, import, edit, or delete controls; see [Users and roles](../settings/users.md).

![Sources list showing three File Server sources with service accounts and labels](/images/accessanalyzer/26.1/sources/list.webp)

## Source types

Four source types are available. The first column shows the name you select in the **Source type** list when you add a source.

| Source type | System | What its scans collect | Scan types | Service account type |
|---|---|---|---|---|
| **File Server** | SMB file servers | Shares, folders, and files with their owners and attributes; share and folder permissions, plus file permissions when the scan's file-level permission option is on; file contents matched against sensitive data patterns | Access scan, Sensitive data scan | Username/password |
| **Active Directory** | One Active Directory domain | Users, groups, group memberships, and organizational units | Identity sync | Username/password |
| **Entra ID** | One Microsoft Entra ID tenant | Users, groups, directory roles, and memberships | Identity sync | Client ID/secret |
| **SharePoint Online** | One SharePoint Online tenant | Site collections, lists, libraries, documents, OneDrive personal sites (when the scan's Collect OneDrive option is on, the default), sharing settings, permissions, and SharePoint groups; document contents matched against sensitive data patterns | Access scan, Sensitive data scan | Client ID/certificate |

Each type has its own page with prerequisites, the fields to fill in, and what the scans return: [SMB file servers](smb-file-servers.md), [Active Directory](active-directory.md), [Entra ID](entra-id.md), and [Microsoft 365](microsoft-365.md).

Identity sources do more than feed the identity reports. File Server scans record who has access as security identifiers (SIDs); an Active Directory source for the same domain is what turns those SIDs into account and group names in the reports.

## Add a source

1. Go to **Configuration > Sources**.
2. Click **Add source**.
3. In **Source type**, select the type. The list is alphabetical: Active Directory, Entra ID, File Server, SharePoint Online.

   ![Source type dropdown listing Active Directory, Entra ID, File Server, and SharePoint Online](/images/accessanalyzer/26.1/sources/add-type-menu.webp)

4. In **Details**, enter a **Name** and, if you want, a **Description** and **Labels**.
5. In **Connection**, fill in the fields for the type. Each type's page, linked under [Source types](#source-types), lists them.
6. In **Access**, select a **Service account**.
7. Click **Test connection**.
8. When **Connection successful** appears, click **Add source**.

The **Name** is required, can be up to 128 characters, and must be unique across all sources regardless of case. The form warns with **A source with this name already exists** before you save. **Description** is optional. **Labels** are optional `key=value` pairs; see [Labels](labels.md).

**Service account** lists every service account by name, with **None** first. The list includes accounts of every type, so pick one of the type that the source needs (see [Source types](#source-types)). You can save a source without a service account, but **Test connection** stays disabled until you select one.

**Test connection** becomes available when you've filled every required connection field and selected a service account. A successful test shows the message **Connection successful**. A failed test shows **Connection failed** in the form with the error text from the connection attempt. Changing any connection field or the service account clears the result, so test again after edits.

To add many sources at once, use [Import sources from a CSV file](import-sources.md).

## Edit a source

1. Click **Edit source** in the row. The form opens with the same sections as when adding.

   ![Edit source dialog for a File Server source](/images/accessanalyzer/26.1/sources/edit-file-server.webp)

2. Change the fields you need. **Source type** is locked: to move a system to a different type, add a new source.
3. Click **Test connection** to check the values in the form.
4. Click **Save changes**.

Changing the field that identifies the system, such as **Host**, **Domain** (Active Directory), **Tenant ID**, or **SharePoint domain**, shows the warning **Existing scan data won't follow this change**. Data already collected stays with the old target, and future scans store data under the new one. If you only want a different display name, change **Name** instead.

## Delete a source

1. Click **Delete source** in the row.
2. Click **Delete Source** to confirm. You can't undo a deletion.

Access Analyzer refuses to delete a source in two cases:

- A scan execution is running or pending on the source. The dialog says a scan is running; stop it from [Scan executions](../scans/scan-executions.md) or wait for it to finish, then try again.
- The source has scan history. A source that scans have run against, or that a scan references, stays in place.

## Work with several sources at once

Select rows with the checkboxes to open the bulk action bar. It shows the number of selected rows, a **Clear selection** link, and two actions. The selection survives paging but clears when you change the search, filters, or sort order.

![Sources list with a selected row](/images/accessanalyzer/26.1/sources/list-row-selected.webp)

- **Edit labels** adds labels to, or removes labels from, every selected source in one step. See [Labels](labels.md).
- **Delete** removes the selected sources. The dialog lists each source. After you confirm, a **Deletion results** view shows **Deleted** for each removed source, or the reason it stayed: **Scan in progress**, **Has scan history**, or **Source not found**. Sources that stayed remain selected so you can retry, for example after a running scan finishes.

## The Sources page

The list shows one row per source.

| Column | Contents |
|---|---|
| **Name** | The name you gave the source. Sortable; the default sort. |
| **Type** | The source type. Sortable. |
| **Connection** | The system the source points at: the host (and port, if not the default) for a file server, the domain controller for Active Directory, the tenant ID for Entra ID, or the SharePoint domain for SharePoint Online. |
| **Service account** | The service account the source signs in with, or a dash when none is assigned. |
| **Labels** | The source's labels as `key=value` chips. |
| **Updated** | When the source was last changed. Sortable. |

At the end of each row, the **Edit source** and **Delete source** buttons open the edit form and the delete confirmation.

The toolbar filters the list:

- **Search sources…** matches the source name and the connection target. Searching for `example.com` finds every source whose host or SharePoint domain contains that text.
- **Type** narrows the list to one source type. The default is **All types**.
- **Filter by labels (all must match)** shows only sources that carry every label you pick. Selecting `env=production` and `team=finance` shows the sources that have both.
- **Clear filters** resets the search and both filters.

The list shows 25 rows per page by default; you can switch to 10, 50, or 100.

When no source exists yet, the page shows **No sources yet** with a prompt to add one or import several from a CSV file. When filters hide everything, it shows **No sources match your filters**.
