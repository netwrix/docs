---
title: "Nutanix Target Requirements"
description: "Nutanix Target Requirements"
sidebar_position: 90
---

# Nutanix Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (FSAA) and/or Sensitive Data Discovery
Auditing scans on Nutanix Appliances. The Netwrix Activity Monitor can be configured to monitor
activity on Nutanix Appliances and make the event data available for Enterprise Auditor Activity
Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Enterprise Auditor scans must have the following permissions on the
target host:

- Group membership in the role **Backup Admin: Backup Access Only**

See the
[Nutanix Appliance Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/nutanix/access.md)
topic for additional information.

:::note
These permissions are in addition to those needed to either deploy applet scans for
running scans in proxy mode with applet or installing the File System Proxy Service Permissions for
running scans in proxy mode as a service. See the
[File System Scan Options](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md)
topic for additional information.
:::


## Access & Sensitive Data Auditing Port Requirements

The firewall ports required by Enterprise Auditor for Access Auditing (FSAA) and/or Sensitive Data
Discovery Auditing scans are based on the File System scan mode to be used. See the
[File System Scan Options](/docs/accessanalyzer/11.6/requirements/filesystem/scanoptions/scanoptions.md)
topic for additional information.

## Activity Auditing Permissions

The Netwrix Activity Monitor can be configured to monitor activity on Nutanix devices. See the
[Nutanix Activity Auditing Configuration](/docs/accessanalyzer/11.6/requirements/filesystem/filesystems/nutanix/activity.md)
topic for instructions.

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

**Additional Firewall Rules for Nutanix Appliances**

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target Nutanix device:

| Communication Direction          | Protocol | Ports | Description             |
| -------------------------------- | -------- | ----- | ----------------------- |
| Activity Agent Server to Nutanix | TCP      | 9440  | Nutanix API             |
| Nutanix to Activity Agent Server | TCP      | 4501  | Nutanix Event Reporting |

Protect the port with a username and password. The credentials will be configured in Nutanix.

Additional Firewall Rules for Integration between Enterprise Auditor and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Enterprise Auditor Console:

| Communication Direction            | Protocol | Ports      | Description                    |
| ---------------------------------- | -------- | ---------- | ------------------------------ |
| Enterprise Auditor to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Enterprise Auditor to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
