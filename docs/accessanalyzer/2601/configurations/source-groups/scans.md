---
title: "Scans"
description: "Scan types, configuration, scheduling, and scan location in Access Analyzer source groups"
sidebar_position: 2
---

# Scans

A scan defines what Access Analyzer collects from a source and how often it runs. Each source in a group can have one or more scans, one per scan type. Scans are persistent configurations — each run of a scan produces a [scan execution](scan-executions.md).

## Scan types

The scan types available depend on the source type:

| Source Type | Available Scan Types |
| --- | --- |
| **File Server** | Access Scan, Sensitive Data Scan |
| **SharePoint Online** | Access Scan, Sensitive Data Scan |
| **Active Directory** | Active Directory Inventory |
| **Entra ID** | Users, Groups and Roles |

### Access Scan

Enumerates permissions, folder-level ACLs, sharing links, and access rights across File Server and SharePoint Online sources. Identifies who has access to what across your data sources.

Access scans include a **concurrent** option that allows multiple file paths or objects within a single source to be scanned in parallel. Enable this when scanning large file servers or SharePoint sites to reduce total scan time.

### Sensitive Data Scan

Classifies file and document content against the detection patterns configured under **Configuration** > **Sensitive Data**. Identifies files containing PII, PHI, credentials, financial records, and other sensitive data across File Server and SharePoint Online sources.

Sensitive Data Scans include a **concurrent** option that allows classification to run against multiple files simultaneously within a single source. Enable this on sources with large file counts to improve throughput.

### Active Directory Inventory

Synchronizes users, groups, group memberships, and security-relevant attributes from Active Directory domains. The inventory is used to resolve identity information across all other scan types and to populate the Active Directory dashboard.

### Users, Groups and Roles

Synchronizes users, groups, and role assignments from your Microsoft Entra ID (Azure AD) tenant. This scan type also collects Microsoft Information Protection (MIP) sensitivity labels applied across the tenant.

## Scan configuration

When you create a source group, the setup wizard collects scan parameters on page 3 and creates scan configurations that apply to all sources added to the group. Each scan configuration includes:

- **Scan type** — the type of scan to run (see [Scan types](#scan-types) above)
- **Concurrent** — whether to parallelize scanning within a single source (Access Scan and Sensitive Data Scan only)
- **Scan location** — which scanner handles the scan (see [Scan location](#scan-location) below)
- **Schedule** — when and how often the scan runs automatically (see [Schedule](#schedule) below)
- **Scan parameters** — source-type-specific settings such as scope, depth, and included paths. These vary by connector.

Individual sources can override the group-level scan configuration if their requirements differ from the group default.

## Scan location

The **Scan location** setting determines which scanner component executes the scan. It is configured per scan type during source group creation.

| Location | Description | Applicable Source Types |
| --- | --- | --- |
| **System scanner** | The Access Analyzer service connects directly to the source. This is the default and requires no additional configuration. | Entra ID, SharePoint Online |
| **Scanner label** | Routes the scan to a registered edge scanner pool that matches the specified label. The edge scanner connects to the source on behalf of Access Analyzer. | Active Directory, File Server |

For Active Directory and File Server source groups, selecting a scanner label routes all scans in that group to the matching edge scanner pool. If no edge scanners are registered with that label, the scan cannot run. See [Scanners](scanners/overview.md) for setup and label management.

:::note
Entra ID and SharePoint Online source groups always use the system scanner. The scan location setting is not configurable for those source types.
:::

## Schedule

The schedule determines when a scan runs automatically. You configure the schedule on page 3 of the source group creation wizard. The same scheduling options are available for all source types and scan types.

### Scheduling options

| Option | Description |
| --- | --- |
| **Run scan now** | Starts the scan immediately when the source group is saved. No recurring schedule is set. |
| **Run scan at** | Schedules a single one-time run at a specific date and time. The scan does not repeat after that run. |
| **Advanced** | Sets a recurring schedule using a cron expression. Use this for daily, weekly, or custom interval schedules. |

### Cron schedule format

Advanced scheduling uses standard 5-field cron syntax:

```
┌───── minute (0–59)
│ ┌───── hour (0–23)
│ │ ┌───── day of month (1–31)
│ │ │ ┌───── month (1–12)
│ │ │ │ ┌───── day of week (0–6, Sunday = 0)
│ │ │ │ │
* * * * *
```

**Examples:**

| Expression | Schedule |
| --- | --- |
| `0 2 * * *` | Daily at 2:00 AM |
| `0 2 * * 0` | Weekly on Sunday at 2:00 AM |
| `0 2 1 * *` | Monthly on the 1st at 2:00 AM |
| `0 */6 * * *` | Every 6 hours |

Schedule times are evaluated in the server's local timezone.

:::note
If no schedule is configured, the scan does not run automatically. Run it manually from the source groups list using the **Run** action.
:::
