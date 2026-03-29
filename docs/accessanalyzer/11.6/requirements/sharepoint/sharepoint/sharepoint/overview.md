---
title: "SharePoint Target Requirements"
description: "SharePoint Target Requirements"
sidebar_position: 10
---

# SharePoint Target Requirements

Netwrix Enterprise Auditor can execute Access Auditing (SPAA) and/or Sensitive Data Discovery
Auditing scans on SharePoint farms. The Netwrix Activity Monitor can be configured to monitor
activity on SharePoint farms and make the event data available for Enterprise Auditor Activity
Auditing (SPAC) scans.

## Access & Sensitive Data Auditing Permissions

- Permissions vary based on the Scan Mode selected and target environment. See the
  [SharePoint Support](/docs/accessanalyzer/11.6/requirements/sharepoint/sharepoint/sharepoint.md)
  topic for additional information.

See the
[SharePoint required permissions for Access Analyzer](/docs/accessanalyzer/11.6/requirements/sharepoint/sharepoint/sharepoint/access.md)
topic for instructions.

## Access & Sensitive Data Auditing Port Requirements

- Ports vary based on the Scan Mode selected and target environment. See the
  [SharePoint Scan Options](/docs/accessanalyzer/11.6/requirements/sharepoint/scanoptions/scanoptions.md)
  topic for additional information.

## Activity Auditing Permissions

Requirements to Deploy the Activity Agent on the “Central Administration” SharePoint Server

The Netwrix Activity Monitor must have an Activity Agent deployed on one instance of a SharePoint
Application server that hosts the “Central Administration” component. While actively monitoring, the
Activity Agent generates activity log files stored on the server. The credential used to deploy the
Activity Agent must have the following permissions on the proxy server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Enterprise Auditor, the credential used by
Enterprise Auditor to read the activity log files must have also have this permission.

**SharePoint Requirements**

See the
[SharePoint On-Premise Activity Auditing Configuration](/docs/accessanalyzer/11.6/requirements/sharepoint/sharepoint/sharepoint/activity.md)
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

Additional Firewall Rules for Integration between Enterprise Auditor and Activity Monitor

Firewall settings are dependent upon the type of environment being targeted. The following firewall
settings are required for communication between the agent server and the Enterprise Auditor Console:

| Communication Direction            | Protocol | Ports      | Description                    |
| ---------------------------------- | -------- | ---------- | ------------------------------ |
| Enterprise Auditor to Agent Server | TCP      | 445        | SMB, used for Agent Deployment |
| Enterprise Auditor to Agent Server | TCP      | Predefined | WMI, used for Agent Deployment |
