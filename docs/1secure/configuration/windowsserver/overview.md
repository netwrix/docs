---
title: "Configure Windows Server for Monitoring"
description: "Configure audit settings on a Windows Server so the Windows Server Activity connector can collect activity data, and choose what it monitors."
sidebar_position: 10
---

# Configure Windows Server for Monitoring

The Windows Server Activity connector collects activity data from a Windows Server. In the add-source
wizard, it appears as **Windows Device** with the sub-text **Windows Activity**. You can configure
your Windows Server for monitoring in one of the following ways:

- Automatically when adding a new Windows Server Activity connector
- Manually

## Configure Windows Server Automatically

The **Adjust audit settings automatically** option and the **Let 1Secure manage audit policy** toggle
are on by default for Windows Server Activity. Turn the toggle off if you manage audit policy
yourself, for example with Netwrix Auditor.

If any conflicts are
detected with your current audit settings, automatic audit configuration isn't performed. For a full list of audit settings required for Netwrix 1Secure to collect
complete audit data and instructions on how to configure them, refer to
[Configure IT Infrastructure for Auditing and Monitoring](/docs/1secure/configuration/configureitinfrastructure.md).

If you select to automatically configure audit in the target environment, 1Secure checks your current audit settings on each data collection and adjusts them if necessary.

## Choose What to Monitor

The **Collect activity for** list on the Windows Server Activity connector has 12 categories. All of
them are selected by default:

- Hardware
- Add/Remove programs
- General computer settings
- Audit policies
- Scheduled tasks
- DNS configuration
- Local users and groups
- Services
- DHCP configuration
- Removable media
- DNS resource records
- File Shares

A category added later is monitored by default. The Windows registry isn't a selectable category.

The Windows Server State connector has one category, **Local users and groups**, selected by default.

### Exclude Activity

Use the **Exclusions** list to leave activity out of Windows Server Activity data. Each exclusion
has three required fields:

- **User** – Enter the user in the format shown in the **Who** field of reports.
- **Windows Server** – Enter the server in the format shown in the **Where** field of reports.
- **Setting Changed** – Enter the setting in the format shown in the **What** field of reports.

To remove an exclusion, use **Delete Exclusion** on its row and confirm.

## Configure Windows Server Manually

Adjust native audit settings manually to collect complete and
reliable audit data. You can enable connector to continually enforce the relevant audit policies or
configure them manually:

- The Remote Registry and the Windows Management Instrumentation (WMI) service must be started.
  See the
  [Enable Remote Registry and Windows Management Instrumentation Services](/docs/1secure/configuration/windowsserver/remoteregistry.md)
  topic and the [Configure Windows Registry Audit Settings](/docs/1secure/configuration/windowsserver/windowsregistry.md) topic for
  additional information.
- The following advanced audit policy settings must be configured:
  - The Audit: Force audit policy subcategory settings (Windows 7 or later) security option
    must be enabled.
  - For Windows Server 2008—The Object Access, Account Management, and Policy Change
    categories must be disabled while the Security Group Management, User Account Management,
    Handle Manipulation, Other Object Access Events, Registry, File Share, and Audit Policy
    Change subcategories must be enabled for _"Success"_.
  - For Windows Server 2008 R2 / Windows 7 and above—Audit Security Group Management, Audit
    User Account Management, Audit Handle Manipulation, Audit Other Object Access Events,
    Audit Registry, Audit File Share, and Audit Policy Change advanced audit policies
    must be set to _"Success"_.
  - See the [Configure Local Audit Policies](/docs/1secure/configuration/windowsserver/localpolicy.md) topic and the
    [Configure Advanced Audit Policies](/docs/1secure/configuration/windowsserver/advancedpolicy.md) topic for additional information.
- The following legacy audit policies can be configured instead of advanced: Audit object
  access, Audit policy change, and **Audit account management** must be set to _"Success"_.
- The Enable Persistent Time Stamp local group policy must be enabled. Configure this policy manually; the connector doesn't enable it automatically. See the
  [Configure Enable Persistent Time Stamp Policy](/docs/1secure/configuration/windowsserver/persistenttimestamp.md) topic for additional
  information.
- The Application, Security, and System event log maximum size must be set to 4 GB. The
  retention method must be set to _“Overwrite events as needed”_. See the
  [Adjusting Event Log Size and Retention Settings](/docs/1secure/configuration/windowsserver/eventlog.md) topic for additional
  information.
- For auditing scheduled tasks, the Microsoft-Windows-TaskScheduler/Operational event log must
  be enabled and its maximum size must be set to 4 GB. The retention method of the log must be
  set to _“Overwrite events as needed”_.
- For auditing DHCP, the Microsoft-Windows-Dhcp-Server/Operational event log must be enabled and
  its maximum size must be set to 4 GB. The retention method of the log must be set to
  _“Overwrite events as needed”_. See the [Adjust DHCP Server Operational Log Settings](/docs/1secure/configuration/windowsserver/dhcp.md)
  topic for additional information.
- For auditing DNS, the Microsoft-Windows-DNS-Server/Audit event log must be enabled and its
  maximum size must be set to 4 GB. The retention method of the log must be set to _“Overwrite
  events as needed”_.
- The following inbound Firewall rules must be enabled:
  - Remote Event Log Management (NP-In)
  - Remote Event Log Management (RPC)
  - Remote Event Log Management (RPC-EPMAP)
  - Windows Management Instrumentation (ASync-In)
  - Windows Management Instrumentation (DCOM-In)
  - Windows Management Instrumentation (WMI-In)
  - Network Discovery (NB-Name-In)
  - File and Printer Sharing (NB-Name-In)
  - Remote Service Management (NP-In)
  - Remote Service Management (RPC)
  - Remote Service Management (RPC-EPMAP)
  - Performance Logs and Alerts (DCOM-In)
  - Performance Logs and Alerts (TCP-In)
