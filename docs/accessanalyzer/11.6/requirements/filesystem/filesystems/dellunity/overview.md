---
title: "Dell Unity Target Requirements"
description: "Dell Unity Target Requirements"
sidebar_position: 40
---

# Dell Unity Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (FSAA) and/or Sensitive Data Discovery
Auditing scans on Dell Unity devices. The Netwrix Activity Monitor can be configured to monitor
activity on Dell Unity devices and make the event data available for Enterprise Auditor Activity
Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Enterprise Auditor scans must have the following permissions on the
target host:

- Group membership in both of the following groups:

    - Power Users
    - Backup Operators

These permissions grant the credential the ability to enumerate shares, access the remote registry,
and bypass NTFS security on folders. The credential used within the assigned Connection Profile for
these target hosts requires these permissions. See the
[Dell Unity Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/dellunity/access.md)
topic for instructions.

:::note
These permissions are in addition to those needed to either deploy applet scans for
running scans in proxy mode with applet or installing the File System Proxy Service Permissions for
running scans in proxy mode as a service. See the
[File System Scan Options](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md)
topic for additional information.
:::


**Troubleshooting Dell Unity Denied Access Errors**

If there are folders to which the credential is denied access, it is likely that the Backup
Operators group does not have the “Back up files and directories” right. In that case, it is
necessary to assign additional the “Back up files and directories” right to those groups or to
create a new local group, using Computer Management from a Windows server. Then assign rights to it
using the CelerraManagementTool.msc plugin, which is available to Dell customers. For further
information, see the Celerra guide Using Windows Administrative Tools on VNX found on the Celerra
website.

## Access & Sensitive Data Auditing Port Requirements

The firewall ports required by Enterprise Auditor for Access Auditing (FSAA) and/or Sensitive Data
Discovery Auditing scans are based on the File System scan mode to be used. See the
[File System Scan Options](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md)
topic for additional information.

## Activity Auditing Permissions

Windows Proxy Server for Activity Agent Monitoring of Dell Unity

The Netwrix Activity Monitor must have an Activity Agent deployed on a Windows proxy server. While
actively monitoring, the Activity Agent generates activity log files stored on the proxy server. The
credential used to deploy the Activity Agent must have the following permissions on the proxy
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

**Dell Unity Requirements**

Additionally, the EMC Common Event Enabler (CEE) should be installed on the Windows proxy server,
where the activity agent is deployed.

:::info
Use the latest available CEE version from the Dell Support website.
:::


EMC CEE requires .NET Framework 3.5 to be installed on the Windows proxy server in order for the EMC
CEE service to start.

See the
[Dell Unity Activity Auditing Configuration](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/dellunity/activity/activity.md)
topic for instructions.

**Activity Monitor Archive Location**

If the activity log files are being archived, configurable within the Netwrix Activity Monitor
Console, then the credential used by Enterprise Auditor to read the activity log files must also
have READ and WRITE permissions on the archive location.

## Activity Auditing Port Requirements

Firewall settings depend on the type of environment being targeted. The following firewall settings
are required for communication between the Agent server and the Netwrix Activity Monitor Console:

| Communication Direction          | Protocol | Ports | Description         |
| -------------------------------- | -------- | ----- | ------------------- |
| Activity Monitor to Agent Server | TCP      | 4498  | Agent Communication |

The Windows firewall rules need to be configured on the Windows server, which require certain
inbound rules be created if the scans are running in applet mode. These scans operate over a default
port range, which cannot be specified via an inbound rule. For more information, see the Microsoft
[Connecting to WMI on a Remote Computer](https://msdn.microsoft.com/en-us/library/windows/desktop/aa389290(v=vs.85).aspx)
article.

**Additional Firewall Rules for Dell Unity Devices**

The following firewall settings are required for communication between the CEE server/ Activity
Monitor Activity Agent server and the target Dell device:

| Communication Direction                                    | Protocol | Ports             | Description       |
| ---------------------------------------------------------- | -------- | ----------------- | ----------------- |
| Dell Device CEE Server                                     | TCP      | RPC Dynamic Range | CEE Communication |
| CEE Server to Activity Agent Server (when not same server) | TCP      | RPC Dynamic Range | CEE Event Data    |

Additional Firewall Rules for Integration between Enterprise Auditor and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Enterprise Auditor Console:

| Communication Direction            | Protocol | Ports      | Description                    |
| ---------------------------------- | -------- | ---------- | ------------------------------ |
| Enterprise Auditor to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Enterprise Auditor to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
