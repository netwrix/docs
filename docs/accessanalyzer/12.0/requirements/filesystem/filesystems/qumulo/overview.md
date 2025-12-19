---
title: "Qumulo Target Requirements"
description: "Qumulo Target Requirements"
sidebar_position: 110
---

# Qumulo Target Requirements

Netwrix Access Analyzer (formerly Enterprise Auditor) can execute Access Auditing (FSAA) and/or
Sensitive Data Discovery Auditing scans on Qumulo devices. The Netwrix Activity Monitor can be
configured to monitor activity on Qumulo devices and make the event data available for Access
Analyzer Activity Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Access Analyzer scans must have the following permissions on the target
host:

- Group membership in the Data-Administrators role

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

Netwrix Activity Monitor requires an account with the Observers role to monitor a Qumulo cluster.
See the [Qumulo Activity Auditing Configuration](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/qumulo/activity.md) topic for instructions.

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

**Additional Firewall Rules for Qumulo Devices**

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target Qumulo device:

| Communication Direction         | Protocol | Ports | Description            |
| ------------------------------- | -------- | ----- | ---------------------- |
| Activity Agent Server to Qumulo | TCP      | 8000  | Qumulo API             |
| Qumulo to Activity Agent Server | TCP      | 4496  | Qumulo Event Reporting |

Protect the port with a username and password. The credentials will be configured in Qumulo.

Additional Firewall Rules for Integration between Access Analyzer and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Access Analyzer Console:

| Communication Direction         | Protocol | Ports      | Description                    |
| ------------------------------- | -------- | ---------- | ------------------------------ |
| Access Analyzer to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Access Analyzer to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
