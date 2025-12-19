---
title: "Prepare for Windows File Server Monitoring"
description: "Prepare for Windows File Server Monitoring"
sidebar_position: 40
---

# Prepare for Windows File Server Monitoring

This topic provides the requirements, limitations, protocols, and other considerations necessary for
data collection from the computer while working with Netwrix 1Secure.

## Check requirements

Make sure the Windows File Servers you want to monitor meet the requirements listed in the
[Requirements](/docs/1secure/requirements/prerequisitesfordatasources.md) section.

## Decide on audit data to collect

**Step 1 –** Review the list of objects and attributes that can be monitored by Netwrix 1Secure: .

**Step 2 –** Plan for the file servers and shares you want to audit. Consider the following:

- If you have multiple file shares frequently accessed by a significant number of users, it is
  reasonable to audit object changes only. Tracking all events may result in too much data written
  to the audit logs, whereas only some part of it may be of any interest.

    Audit flags must be set on every file share or the whole computer you want to audit.

- If your file shares are stored within one folder (or disk drive), you can configure audit settings
  for this folder only. As a result, you will receive reports on all required access types applied
  to all file shares within this folder.

    It is not recommended to configure audit settings for system disks.

- By default, Netwrix 1Secure will monitor all shares stored in the specified location, except for
  hidden shares (both default and user-defined). If you want to monitor user-defined hidden shares,
  select the related option in the monitored item settings.

Administrative hidden shares like default system root or Windows directory (_ADMIN$_), default drive
shares (_D$, E$_), etc. will not be monitored.

## Review considerations and limitations

The following considerations and limitations refer to data collection:

- To collect data from 32-bit operating systems, network traffic compression must be disabled.
- To collect data from Windows Failover Cluster, network traffic compression must be enabled.
- Scale-Out File Server (SOFS) cluster is not supported.

The following considerations and limitations refer to reporting:

- For Windows File Servers running Windows Server 2008, changes to the file shares will be reported
  without exact initiator's account in the _who_ field— instead, _system_ is reported.
- If a file server is running Windows Server 2008 SP2, Netwrix 1Secure may be unable to retrieve
  workstation name for the failed read attempts.
- In the reports and search results, in some cases, Netwrix 1Secure UI displays not the actual time
  when the event occurred but data collection time.
- Netwrix 1Secure may report on several unexpected changes with _who_ (initiator's account) reported
  as _system_ due to the native Windows File Servers audit peculiarities. If you do not want to see
  these changes, exclude them from the audit. See for more information. For example - mass file
  removals, when target Windows server generates too many events at a time and the product is unable
  to parse their sequences correctly.
- Due to Windows limitations, the _copy/rename/move_ actions on remote file shares may be reported
  as two sequential actions: copying – as adding a new file and reading the initial file;
  renaming/moving – as removing the initial file and adding a new file with the same name.
- To report on _copy_ actions on remote file shares, make sure that audit of successful read
  operations is enabled. See for details.

## Apply required audit settings

Depending on your auditing requirements, you may need to audit your file server objects for:

- Successful read, added, modified, removed, renamed, moved, copied attempts;
- Failed read, added, modified, removed, renamed, moved, copied attempts;

For that, object-level audit settings and appropriate audit policies should be set up. Besides, the
following should be configured for your Windows file servers:

- Windows Event log size and retention settings
- Remote registry service
- Inbound connection rules for Windows firewall

You can apply the required audit settings to your Windows file servers in one of the following ways:

- Automatically - The current audit settings will be applied automatically. They will be
  periodically checked and adjusted if necessary.
  See [Data Collecting Account](/docs/1secure/admin/datacollection/overview.md) for
  additional information.

- Manually - Perform the following action to manually apply audit settings to Windows File Servers:

    - Configure Advanced Audit Policies

## Configure Data Collecting Account

Follow the instructions in the
[Data Collecting Account](/docs/1secure/admin/datacollection/overview.md) section.

## Configure required protocols and ports

Set up protocols and ports as described in the
[Protocols and Ports Required for Monitoring File Servers](/docs/1secure/configuration/computer/protocolsandports.md) section.
