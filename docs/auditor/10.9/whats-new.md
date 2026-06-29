---
title: "What's New in Netwrix Auditor v10.9"
description: "New features and enhancements in Netwrix Auditor v10.9"
sidebar_position: 2
---

# What's New in Netwrix Auditor v10.9

## New Features

### State-in-Time for Azure Files

Netwrix Auditor delivers a full suite of State-in-Time permission reports for Azure file shares mounted via Server Message Block (SMB), using the same layout as on-premises file server reports. See [State-in-Time Reports for Azure Files](/docs/auditor/10.9/admin/reports/types/stateintime/azurefiles.md) for additional information.

The available reports include:

- Account Permissions
- Folder and File Permission Details
- Folder Tree View
- Excessive Access Permissions
- Duplicate Files
- Largest Files
- Stale Data by Folder

### Risk Assessment for Azure Files

Netwrix Auditor extends Risk Assessment coverage to Azure Files alongside on-premises file shares. See [Risk Assessment Overview](/docs/auditor/10.9/admin/riskassessment/overview.md) for additional information.

Risk calculations cover:

- Files and folders accessible by Everyone
- Potentially harmful files
- Direct permissions
- File and folder names containing sensitive data

### Hybrid Inactive User Risk: Active Directory and Entra ID Combined

The Inactive Users risk calculation now correlates logon activity from both on-premises Active Directory and Microsoft Entra ID simultaneously. This eliminates false positives where cloud-only authentication didn't register as user activity. See [Hybrid Accounts](/docs/auditor/10.9/admin/riskassessment/hybrid-accounts.md) for additional information.

## Major Enhancements

### Per-Host Visibility in Windows Server Monitoring Plans

The new Monitored Computers tab in Windows Server monitoring plans lists each resolved host individually. See [Monitored Computers](/docs/auditor/10.9/admin/monitoringplans/windows/monitoredcomputers.md) for additional information.

- **Health status**: Per-host status covering Activity Records collection and State-in-Time
- **Filter and search**: Search by name, source item, or status (Healthy or Take action)
- **Drill-down**: Error messages and agent version for each host

### User Activity Monitoring: Computer Exclusion within Organizational Units

User Activity Monitoring plans support item-level exclusion within monitored Organizational Units. See [User Activity Data Collection](/docs/auditor/10.9/configuration/useractivity/datacollection.md) for additional information.

- **Selective exclusion**: Exclude specific computer objects from monitored Organizational Units
- **Consistent interface**: Uses the same exclusion workflow as in Windows Server Auditing

### Workstation Field for Isilon Activity Records

Netwrix Auditor for File Servers (Isilon) extracts and displays the Workstation field from native Isilon/OneFS audit events. See [Dell Isilon/PowerScale Configuration](/docs/auditor/10.9/configuration/fileservers/dellisilon/overview.md) for additional information.

The field appears in:

- Search
- Reports
- Subscriptions
- Exports

### gMSA Support for Inactive Users Tracker

Inactive Users Tracker supports group Managed Service Accounts (gMSA) as the data collection account. See [Inactive Users Tracker with gMSA](/docs/auditor/10.9/tools/inactiveusertracker/gmsa.md) for additional information.

- **No manual rotation**: Eliminates manual password rotation
- **Least privilege**: Aligns with least-privilege security practices
