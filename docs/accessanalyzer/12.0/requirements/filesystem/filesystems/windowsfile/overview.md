---
title: "Windows File Server Target Requirements"
description: "Windows File Server Target Requirements"
sidebar_position: 120
---

# Windows File Server Target Requirements

Netwrix Access Analyzer (formerly Enterprise Auditor) can execute Access Auditing (FSAA) and/or
Sensitive Data Discovery Auditing (SEEK) scans on Windows file servers. The Netwrix Activity Monitor can be
configured to monitor activity on Windows file servers and make the event data available for Access
Analyzer Activity Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

Permissions vary based on the Scan Mode Option selected. See the
  [File System Supported Platforms](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/filesystems.md)
  topic for additional information on the various scan modes available and [Windows File Server Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/windowsfile/access.md).

**Windows File System Cluster Requirements**

See the [Windows File Server Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/windowsfile/access.md) topic for
instructions.

**Windows File System DFS Namespaces Requirements**

See the [Windows File Server Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/windowsfile/access.md) topic for
instructions.

### Access & Sensitive Data Auditing Port Requirements

The firewall ports required by Access Analyzer for Access Auditing (FSAA) and/or Sensitive Data
Discovery Auditing scans are based on the File System scan mode to be used. See the
[File System Scan Options](/docs/accessanalyzer/12.0/requirements/filesystem/scanoptions/scanoptions.md)
topic for additional information.

## Activity Auditing Permissions

Permissions vary based on the Scan Mode Option selected. See the
  [File System Supported Platforms](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/filesystems.md)
  topic for additional information on the various scan modes available and [Windows File Server Activity Auditing Configuration](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/windowsfile/activity.md).

**Windows File System Cluster Requirements**

See the [Windows File Server Activity Auditing Configuration](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/windowsfile/activity.md) topic for instructions.

**Activity Monitor Archive Location**

If the activity log files are being archived, configurable within the Netwrix Activity Monitor
Console, then the credential used by Access Analyzer to read the activity log files must also have
READ and WRITE permissions on the archive location.

### Activity Auditing Port Requirements

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

**Additional Firewall Rules for Integration between Access Analyzer and Activity Monitor**

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Access Analyzer Console:

| Communication Direction         | Protocol | Ports      | Description                    |
| ------------------------------- | -------- | ---------- | ------------------------------ |
| Access Analyzer to Agent Server | TCP      | 445        | SMB |
| Access Analyzer to Agent Server | TCP      | Predefined | WMI |
