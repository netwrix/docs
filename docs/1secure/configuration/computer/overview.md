---
title: "Prepare for Windows File Server Monitoring"
description: "Prepare for Windows File Server Monitoring"
sidebar_position: 40
---

# Prepare for Windows File Server Monitoring

This topic covers the requirements, limitations, protocols, and other considerations for data
collection from the computer when using Netwrix 1Secure.

## Check requirements

Ensure the Windows File Servers you want to monitor meet the requirements listed in the
[Requirements](/docs/1secure/requirements/prerequisitesfordatasources.md) section.

## Decide on audit data to collect

**Step 1 –** Review the list of objects and attributes that can be monitored by Netwrix 1Secure: .

**Step 2 –** Plan for the file servers and shares you want to audit. Consider the following:

- If you have multiple file shares frequently accessed by a significant number of users, audit
  object changes only. Tracking all events can result in too much data written to the audit logs,
  only a portion of which is relevant.

    Audit flags must be set on every file share or the whole computer you want to audit.

- If your file shares are stored within one folder (or disk drive), you can configure audit settings
  for this folder only. As a result, reports cover all required access types applied to all file
  shares within this folder.

    Configuring audit settings for system disks isn't recommended.

- By default, Netwrix 1Secure monitors all shares stored in the specified location, except for
  hidden shares (both default and user-defined). If you want to monitor user-defined hidden shares,
  select the related option in the monitored item settings.

Administrative hidden shares like default system root or Windows directory (_ADMIN$_), default drive
shares (_D$, E$_), and similar shares aren't monitored.

## Review considerations and limitations

The following considerations and limitations refer to data collection:

- To collect data from 32-bit operating systems, network traffic compression must be disabled.
- To collect data from Windows Failover Cluster, network traffic compression must be enabled.
- Scale-Out File Server (SOFS) cluster isn't supported.

The following considerations and limitations refer to reporting:

- For Windows File Servers running Windows Server 2008, changes to the file shares are reported
  without the exact initiator's account in the _who_ field—instead, _system_ is reported.
- If a file server is running Windows Server 2008 SP2, Netwrix 1Secure can't retrieve the
  workstation name for failed read attempts.
- In the reports and search results, in some cases, Netwrix 1Secure UI displays not the actual time
  when the event occurred but data collection time.
- Netwrix 1Secure can report unexpected changes with _who_ (initiator's account) shown as _system_
  due to native Windows File Servers audit behavior. For example, mass file removals occur when the
  target Windows server generates too many events at a time and the product is unable to parse their
  sequences correctly. To hide these changes, exclude them from the audit.
- Due to Windows limitations, the _copy/rename/move_ actions on remote file shares are reported
  as two sequential actions: copying – as adding a new file and reading the initial file;
  renaming/moving – as removing the initial file and adding a new file with the same name.
- To report on _copy_ actions on remote file shares, ensure that audit of successful read
  operations is enabled.

## Apply required audit settings

Depending on your auditing requirements, audit your file server objects for:

- Successful read, added, modified, removed, renamed, moved, copied attempts;
- Failed read, added, modified, removed, renamed, moved, copied attempts;

Configure object-level audit settings, appropriate audit policies, and the following for your
Windows file servers:

- Windows Event log size and retention settings
- Remote registry service
- Inbound connection rules for Windows firewall

You can apply the required audit settings to your Windows file servers in one of the following ways:

- Automatically - 1Secure applies the current audit settings automatically, periodically checking
  and adjusting them if necessary.
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
