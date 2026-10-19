---
title: Scan Types
description: Learn what Access scans, Sensitive data scans, and Identity sync collect, which sources each supports, their prerequisites and Configure settings, and the reports they feed.
sidebar_position: 1
---

Every scan has exactly one type. You choose it on the first step of [Create a scan](index.md#create-a-scan), and it stays fixed from then on. The type decides what the scan collects, which sources it can target, and which settings the **Configure** step offers.

| Scan type | What it collects | Source types |
|---|---|---|
| **Access** | Shares, folders, files, sites, and the permissions on them | File Server, SharePoint Online |
| **Sensitive data** | Sensitive data patterns found inside file content | File Server, SharePoint Online |
| **Identity sync** | Users, groups, and group memberships from a directory | Active Directory, Entra ID |

On the **Configure** step, each source type in the target starts on **Use default configuration**. To change the values in the following tables for every source of that type, select **Customize for all File Server sources**; the label names the source type, and it reads **Customize this source** when the target is a single source. To change them for one source only, add a **Source overrides** entry. Settings you don't touch keep their defaults.

## Access Scan

An Access scan builds the inventory of what exists and who can reach it. On a File Server source that means the shares, the folders and files beneath them, and the permissions on shares and folders, with file-level permissions as an option. On a SharePoint Online source it means site collections, sites, lists, folders, and documents, plus the users and groups that hold permissions on them. When **Collect OneDrive** is on, it also covers users' OneDrive personal drives.

The inventory is also what a Sensitive data scan works from, so run an Access scan before you schedule a Sensitive data scan on the same source.

### File Server Settings

| Setting | Default | Meaning |
|---|---|---|
| **Workers** | 3 | Concurrent workers, from 1 to 20. More workers finish sooner but use more network bandwidth and can overload the file server. |
| **Exclude system shares** | On | Skips administrative shares such as `C$` and `ADMIN$`. |
| **Include shares** | All shares | Switch to **Custom selection** and list share names to scan only those. Leave on **All shares** to scan every accessible share. |
| **Exclude shares** | Empty | Share names to skip. Ignored when **Include shares** lists specific shares. |
| **Maximum scan depth** | 50 | How many folder levels deep to go, up to 1000. This guards against endless recursion. |
| **Enable File-Level Permission Scanning** | Off | Collects permissions on individual files as well as folders. |
| **Exclude Hidden Shares** | Empty | Hidden share names to leave out of share enumeration. |

Share names can contain letters, digits, hyphens, and underscores, and hidden shares end with `$`, as in `backup$`. Spaces, dots, and wildcards don't work, and you can list each share only once. The share settings take share names only; there is no setting for individual folder paths.

### SharePoint Online Settings

| Setting | Default | Meaning |
|---|---|---|
| **Workers** | 4 | Concurrent workers, from 1 to 256. Higher values shorten the scan but put more load on the tenant. Raise it only when the tenant has SharePoint Online prioritization (adaptive throttling) enabled, and treat 32 as the practical ceiling; beyond that, throttling tends to cancel out the gain. |
| **Include site collections** | Scan all URLs | Switch to **Include specific site collections** and enter exact site collection URLs, such as `https://contoso.sharepoint.com/sites/marketing`, to scan only those. This field doesn't support wildcards. |
| **Exclude site collections** | Empty | Site collections to skip. Supports the `*` wildcard, for example `*.sharepoint.com/sites/archive`. |
| **Exclude object URLs** | Empty | URL patterns for documents, folders, and lists to skip inside the scanned site collections. Supports the `*` wildcard. |
| **Collect OneDrive** | On | Includes users' OneDrive personal drives in the scan. |

Exclude rules always win over include rules. A bare URL in **Exclude object URLs** doesn't match any documents; to exclude a whole site, end the pattern with `/*`, as in `*.sharepoint.com/sites/archive/*`.

### Reports Fed by Access Scans

Access scans feed the reports in the **Permissions** category on **Reports > Data**: for File Server, **Broken Inheritance**, **High Risk ACLs**, **Open Access**, and **Share Audit**; for SharePoint Online, **Shared Links**, **High-Risk ACLs**, and **Open Access**. Both feed the [Data security dashboard](../dashboards-reports/dashboards/data-security.md), and [Data reports](../dashboards-reports/reports/data.md) describes each report.

## Sensitive Data Scan

A Sensitive data scan opens files, reads their content, and matches it against [sensitive data patterns](../sensitive-data-patterns/index.md). For each file it records which pattern groups and patterns matched and how many times; it doesn't store the matched text itself.

### Prerequisites

The scan needs a completed Access scan on the same source, because it picks its files from the inventory that scan built. A Sensitive data scan on a source that has never had an Access scan finds nothing to classify.

The scan doesn't read every inventoried file. Two settings per source type on **Settings > Application**, described in [Application settings](../settings/application.md), decide which files qualify:

| Setting | Default | Meaning |
|---|---|---|
| `file_server_file_size_max_mb` | 10 | Largest file, in MB, to classify on File Server sources. Range 1 to 100. |
| `file_server_excluded_extensions` | 74 extensions | File extensions skipped on File Server sources: media, images, fonts, disk images, and executables such as `.mp4`, `.jpg`, `.iso`, and `.exe`. |
| `sharepoint_file_size_max_mb` | 10 | Largest file, in MB, to classify on SharePoint Online sources. Range 1 to 100. |
| `sharepoint_excluded_extensions` | 81 extensions | The File Server list plus web files such as `.html`, `.aspx`, and `.css`. |

Changes to these settings reach the scanning service within five minutes and apply to scans that start after that. Scans already running keep the values they started with.

### File Server Settings for Sensitive Data Scans

| Setting | Default | Meaning |
|---|---|---|
| **Workers** | 3 | Concurrent workers reading file content, from 1 to 20. Leave it at 3 and the scan uses `classification_workers_default` on **Settings > Application** (default 15). Set any other value to use that number for this scan. |
| **Include shares** | All shares | Switch to **Custom selection** and list share names to classify only those. |
| **Exclude shares** | Empty | Share names to skip. |
| **Differential scan** | Off | Reads only files that are new or changed since the last Sensitive data scan of this source. |
| **Exclude System Shares** | On | Skips administrative shares such as `ADMIN$`, `IPC$`, and `C$`. |
| **Exclude Hidden Shares** | Empty | Hidden share names to leave out of share enumeration. |

Turn on **Differential scan** for a recurring scan after the first full pass finishes. The first run still reads everything, because the scan hasn't classified anything yet; later runs then touch only what changed.

![Create scan step 3 with customized File Server settings](/images/accessanalyzer/26.1/scans/create-scan-3-configure-customize.webp)

SharePoint Online has no per-type Sensitive data settings. Its sources run with the global classification settings in [Prerequisites](#prerequisites).

### Pattern Groups

Under **Sensitive data classification**, the **Configuration source** card holds the **Inherit from global configuration** switch, which is on by default. While it's on, the scan classifies against the pattern groups marked **Scanned by default** on the Sensitive data patterns page, and the card reports how many groups that is. Changing the global set later changes what this scan looks for on its next run.

Turn the switch off to select groups for this scan alone. **Sensitive Data Pattern Groups to Classify** lists the pattern groups and marks built-in ones with a **Built-in** badge. Type in **Search pattern groups** to filter the list, or click **Select All** to choose every group. [Pattern groups](../sensitive-data-patterns/pattern-groups.md) describes the groups themselves.

![Sensitive data scan settings with selectable pattern groups](/images/accessanalyzer/26.1/scans/create-scan-sensitive-3-configure-custom-groups.webp)

:::warning

An empty selection doesn't mean "classify nothing". If the scan inherits the global configuration and no group carries **Scanned by default**, or if you turn inheritance off and select no groups, the scan classifies against every pattern group, built-in and custom alike. To narrow a scan, select the groups you want.

:::

### Reports Fed by Sensitive Data Scans

Sensitive data scans feed both **Sensitive Data Overview** reports, one for file systems and one for SharePoint, and the sensitive-data variant of **Share Audit**, all listed in [Data reports](../dashboards-reports/reports/data.md). Findings also appear on the [Data security dashboard](../dashboards-reports/dashboards/data-security.md).

## Identity Sync

An Identity sync collects the accounts and groups of a directory. From Active Directory it collects users, groups, group memberships, and custom user attributes. From Entra ID it collects users, groups, and memberships.

### Active Directory Settings

| Setting | Default | Meaning |
|---|---|---|
| **Enable differential scan** | On | Collects only objects that changed since the last sync. Turn it off to force a full collection. |

### Entra ID Settings

Entra ID has no per-type settings. The **Configure** step tells you so and the source runs with the defaults.

### Reports Fed by Identity Sync

Active Directory syncs feed the **AD Users** report and the [Active Directory dashboard](../dashboards-reports/dashboards/active-directory.md). Entra ID syncs feed the **Entra Users** and **Entra Groups** reports. [Identity reports](../dashboards-reports/reports/identity.md) describes all three.
