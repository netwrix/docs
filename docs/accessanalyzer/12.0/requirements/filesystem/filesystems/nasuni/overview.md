---
title: "Nasuni Target Requirements"
description: "Nasuni Target Requirements"
sidebar_position: 70
---

# Nasuni Target Requirements

Netwrix Access Analyzer (formerly Enterprise Auditor) can execute Access Auditing (FSAA) and/or
Sensitive Data Discovery Auditing scans on on-premise Nasuni Edge Appliances. The Netwrix Activity
Monitor can be configured to monitor activity on on-premise Nasuni Edge Appliances and make the
event data available for Access Analyzer Activity Auditing (FSAC) scans.

## Access & Sensitive Data Auditing Permissions

The credentials used by the Access Analyzer scans must have the following permissions on the target
host:

- Group membership in the local Administrators group

This is in addition to the API Key Name and Passcode which must be generated for each on-premise
Nasuni Edge Appliance and cloud filer. The credential used within the assigned Connection Profile
for these target hosts requires these permissions. See the
[Nasuni Edge Appliance Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/nasuni/access.md) topic for
instructions.

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

Windows Proxy Server for Activity Agent Monitoring of Nasuni Edge Appliance

The Netwrix Activity Monitor must have an Activity Agent deployed on a Windows proxy server. While
actively monitoring, the Activity Agent generates activity log files stored on the proxy server. The
credential used to deploy the Activity Agent must have the following permissions on the proxy
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Access Analyzer, the credential used by Access
Analyzer to read the activity log files must have also have this permission.

**Nasuni Edge Appliance Requirements**

Additionally, it is necessary to generate an API Access Key for Nasuni activity monitoring. See the
[Nasuni Edge Appliance Activity Auditing Configuration](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/nasuni/activity.md) topic for instructions.

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

**Additional Firewall Rules for Nasuni Edge Appliance**

The following firewall settings are required for communication between the Activity Monitor Activity
Agent server and the target Nasuni Edge Appliance:

| Communication Direction         | Protocol      | Ports | Description            |
| ------------------------------- | ------------- | ----- | ---------------------- |
| Agent Server to Nasuni          | HTTPS         | 8443  | Nasuni API calls       |
| Nasuni to Activity Agent Server | AMQP over TCP | 5671  | Nasuni event reporting |

Additional Firewall Rules for Integration between Access Analyzer and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Access Analyzer Console:

| Communication Direction         | Protocol | Ports      | Description                    |
| ------------------------------- | -------- | ---------- | ------------------------------ |
| Access Analyzer to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Access Analyzer to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
