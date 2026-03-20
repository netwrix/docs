---
title: "Configuring a Scan"
description: "Set up scanning options and schedule in the Connect Source wizard"
sidebar_position: 30
---

# Configuring a Scan

Step 3 of the Connect Source wizard configures what to scan and when. The available options depend on the source type selected in Step 1.

## Available Scanning Options

Select which scan types to enable for the source group. Available options vary by source type:

### File Server Scan Types

| Scan Type | Description |
| --- | --- |
| **Access** | Scan file server permissions and access controls |
| **Sensitive Data** | Scan file contents for sensitive data patterns (PII, credentials, PHI, financial data) |

At least one scan type must be enabled to proceed.

:::info
When the **Access** scan is enabled, a **Local Users and Groups** scan is also created automatically to collect local account data from each file server. This happens behind the scenes and does not require additional configuration.
:::

### Entra ID Scan Types

| Scan Type | Description |
| --- | --- |
| **Users, Groups and Roles** | Synchronize users, groups, and directory roles from the Azure AD tenant |

This scan type is always enabled and cannot be disabled. Additional sync options (such as **Sync Sensitivity Labels**) may appear below the toggle.

### Active Directory Scan Types

| Scan Type | Description |
| --- | --- |
| **Active Directory Inventory** | Synchronize users, groups, OUs, and permissions from domain controllers |

## Access Scan Options (File Server)

When the **Access** scan type is enabled for a File Server source, additional configuration options appear:

### Share Selection

- **Include Shares** — Choose **All shares** (default) or **Custom selection** to specify specific share names
- **Exclude Shares** — Optionally list shares to skip (for example, `admin$, ipc$`)

### Scan Depth

- Maximum folder depth to scan (default: **50**)
- Controls how many levels of subdirectories the connector traverses

### File-Level Permissions

- Check **Include file-level permission data in scan results** to collect NTFS ACLs on individual files
- Disabled by default — increases scan duration on large file servers

### Hidden Shares

- Check **Automatically enumerate and scan hidden shares** to discover shares ending with `$`
- When enabled, an **Exclude Hidden Shares** field appears to specify hidden shares to skip (for example, `ADMIN$, C$, IPC$`)

### Worker Threads

- Number of concurrent workers for parallel directory enumeration (default: **3**)
- Higher values scan faster but increase load on the file server

For detailed information about each option, see the [CIFS connector documentation](/docs/accessanalyzer/1_0/connectors/source/cifs/connectionconfig).

## Scan Start Time

Choose when to run the first scan:

| Option | Description |
| --- | --- |
| **Run scan now** | Execute immediately after setup completes (default) |
| **Run scan at** | Schedule for a specific date and time — must be in the future |
| **Advanced scheduling** | Configure a recurring schedule using a cron expression |

## Complete Setup

Click **Complete Setup** to create the source group with all configured sources and scans. On success:

1. The source group and all sources are created
2. Scans are created according to your configuration
3. The wizard closes and the sources list refreshes
4. Scans execute according to the selected schedule

## Next Step

[Running and Monitoring a Scan](/docs/accessanalyzer/1_0/gettingstarted/firstscan/runningscan) — Track scan progress and review results.
