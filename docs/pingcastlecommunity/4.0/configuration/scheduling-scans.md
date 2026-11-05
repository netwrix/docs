---
sidebar_position: 1
sidebar_label: Scheduling scans
description: Schedule recurring PingCastle scans with Windows Task Scheduler.
---
# Scheduling PingCastle Scans

You can automate PingCastle using Windows Task Scheduler to run regular security assessments. The tool supports Managed Service Accounts (available since Windows Server 2008 R2).

## Quick Setup

1. **Create a scheduled task** in Task Scheduler
2. **Configure account settings**:
   - Select "Run whether user is logged on or not"
   - Use a domain service account (not a local account)
3. **Set the schedule** (e.g., daily, weekly)
4. **Configure the action**:
   - Program: `C:\Path\To\PingCastle.exe`
   - Arguments: `--healthcheck --server domain.local --sendAllTo security@company.com`
   - Start in: `C:\Path\To\PingCastle`

## Required Permissions

The service account requires:

- **Read access** to Active Directory (standard domain user is sufficient for basic scans)
- **Write access** to the PingCastle directory for report output
- **"Log on as batch job"** user right

## Troubleshooting: Log on as Batch Job

If the scheduled task fails to run, verify the service account has the "Log on as batch job" right:

1. Open Local Security Policy (`secpol.msc`) or Group Policy Management
2. Navigate to: **Local Policies → User Rights Assignment**
3. Open **"Log on as batch job"** and add the service account

:::note
If "Add User or Group" is grayed out, a Group Policy Object (typically the Default Domain Controllers Policy) controls the setting. Use `rsop.msc` to identify the controlling GPO and modify it accordingly.
:::

## Example Command for Scheduled Scans

```powershell
PingCastle.exe --healthcheck --server * --reachable --sendAllTo security@company.com --encrypt --datefile
```

This scans all reachable domains, encrypts the reports, adds dates to filenames, and emails results to the security team.
