---
title: "Active Directory Domain Target Requirements"
description: "Active Directory Domain Target Requirements"
sidebar_position: 10
---

# Active Directory Domain Target Requirements

Netwrix Access Analyzer (formerly Enterprise Auditor) can execute scans on Active Directory domains.
The Netwrix Activity Monitor can be configured to monitor activity on Active Directory domains and
make the event data available for Access Analyzer Active Directory Activity scans.

## Auditing Permissions

The following permission is needed:

- Member of the Domain Administrators group

Some collection jobs do allow for a least privilege model. See the
[Active Directory Auditing Configuration](/docs/accessanalyzer/12.0/requirements/activedirectory/target/access.md) topic for additional information.

## Auditing Port Requirements

Ports vary based on the data collector being used. See the
[Active Directory Auditing Configuration](/docs/accessanalyzer/12.0/requirements/activedirectory/target/access.md) topic for additional information.

## Activity Auditing Permissions

:::note
Active Directory domain activity events can also be monitored through Netwrix Threat
Prevention. This requires integration between it and Netwrix Activity Monitor to enable access to
the data for Access Analyzer Active Directory Activity scans. See the
[Send Active Directory Event Data from Netwrix Threat Prevention to Netwrix Access Analyzer](/docs/accessanalyzer/12.0/requirements/activedirectory/target/activity/threatprevention.md)
topic for additional information.
:::


Requirements to Deploy the AD Agent on the Domain Controller

The Netwrix Activity Monitor must have an AD Agent deployed on the domain controller to be
monitored. While actively monitoring, the AD Agent generates activity log files stored on the
server. The credential used to deploy the AD Agent must have the following permissions on the
server:

- Membership in the Domain Administrators group
- READ and WRITE access to the archive location for Archiving feature only

:::note
For monitoring an Active Directory domain, the AD Agent must be installed on all domain
controllers within the domain to be monitored.
:::


For integration between the Activity Monitor and Access Analyzer, the credential used by Access
Analyzer to read the activity log files must have also have this permission.

**Activity Monitor Archive Location**

If the activity log files are being archived, configurable within the Netwrix Activity Monitor
Console, then the credential used by Access Analyzer to read the activity log files must also have
READ and WRITE permissions on the archive location.

**Integration with Access Analyzer**

See the [Active Directory Activity Auditing Configuration](/docs/accessanalyzer/12.0/requirements/activedirectory/target/activity/activity.md) topic for target environment
requirements.

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
