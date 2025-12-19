---
title: "Hitachi Target Requirements"
description: "Hitachi Target Requirements"
sidebar_position: 60
---

# Hitachi Target Requirements

Netwrix Access Analyzer (formerly Enterprise Auditor) can execute Access Auditing (FSAA) and/or
Sensitive Data Discovery Auditing scans on Hitachi devices. The Netwrix Activity Monitor can be
configured to monitor activity on Hitachi devices and make the event data available for Access
Analyzer Activity Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Access Analyzer scans must have the following permissions on the target
host:

- Group membership in the Backup Operators local group

This permission grants the credential read access to all target folders and files. The credential
used within the assigned Connection Profile for these target hosts requires these permissions.

:::note
These permissions are in addition to those needed to either deploy applet scans for
running scans in proxy mode with applet or installing the File System Proxy Service Permissions for
running scans in proxy mode as a service. See the
[File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md)
topic for additional information.
:::


## Access & Sensitive Data Auditing Port Requirements

The firewall ports required by Access Analyzer for Access Auditing (FSAA) and/or Sensitive Data
Discovery Auditing scans are based on the File System scan mode to be used. See the
[File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md)
topic for additional information.

## Activity Auditing Permissions

Windows Proxy Server for Activity Agent Monitoring of Hitachi

The Netwrix Activity Monitor must have an Activity Agent deployed on a Windows proxy server. While
actively monitoring, the Activity Agent generates activity log files stored on the proxy server. The
credential used to deploy the Activity Agent must have the following permissions on the proxy
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Access Analyzer, the credential used by Access
Analyzer to read the activity log files must have also have this permission.

**Hitachi Requirements**

A Hitachi device can host multiple Enterprise Virtual Servers (EVS). Each EVS has multiple file
systems. Auditing is enabled and configured per file system. HNAS generates the audit log files in
[EVT format](https://technet.microsoft.com/en-us/sysinternals/bb309026) (a standard event log format
in Windows XP/2003 and earlier). Hitachi stores the generated audit logs in a user specified
location on the file system. The activity agent deployed on the Windows proxy server accesses this
location to collect the audit log files as they are generated. The credential used to monitor
activity must be provisioned with:

- Capability of enabling a File System Audit Policy on the Hitachi device
- Audit rights to the Hitachi log directory

See the [Hitachi Activity Auditing Configuration](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/hitachi/activity/activity.md) topic for instructions.

**Activity Monitor Archive Location**

If the activity log files are being archived, configurable within the Netwrix Activity Monitor
Console, then the credential used by Access Analyzer to read the activity log files must also have
READ and WRITE permissions on the archive location.

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

Additional Firewall Rules for Integration between Access Analyzer and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Access Analyzer Console:

| Communication Direction         | Protocol | Ports      | Description                    |
| ------------------------------- | -------- | ---------- | ------------------------------ |
| Access Analyzer to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Access Analyzer to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
