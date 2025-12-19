---
title: "SharePoint Online Target Requirements"
description: "SharePoint Online Target Requirements"
sidebar_position: 20
---

# SharePoint Online Target Requirements

Netwrix Access Analyzer (formerly Enterprise Auditor) can execute Access Auditing (SPAA) and
Sensitive Data Discovery Auditing scans on SharePoint Online. The Netwrix Activity Monitor can be
configured to monitor activity on SharePoint Online and make the event data available for Access
Analyzer Activity Auditing (SPAC) scans.

## Access & Sensitive Data Auditing Permissions

- Permissions vary based on the Scan Mode selected and target environment. See the
  [SharePoint Support](/docs/accessanalyzer/12.0/requirements/sharepoint/sharepoint/sharepoint.md) topic for
  additional information.

See the [SharePoint Online Access & Sensitive Data Auditing Configuration](/docs/accessanalyzer/12.0/requirements/sharepoint/sharepoint/sharepointonline/access.md) topic for
instructions.

:::note
You can use the **SP_RegisterAzureAppAuth** instant job to make the configuration for
SharePoint Online easier. This job registers the necessary Microsoft Entra ID application and
provisions it with the required permissions. See the
[SP_RegisterAzureAppAuth Job](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/sp_registerazureappauth.md)
topic for additional information.
:::


## Access & Sensitive Data Auditing Port Requirements

- Ports vary based on the Scan Mode selected and target environment. See the
  [SharePoint Scan Options](/docs/accessanalyzer/12.0/requirements/sharepoint/scanoptions/scanoptions.md)
  topic for additional information.

## Activity Auditing Permissions

Windows Proxy Server for Activity Agent Monitoring of SharePoint Online

The Netwrix Activity Monitor must have an Activity Agent deployed on a Windows proxy server. While
actively monitoring, the Activity Agent generates activity log files stored on the proxy server. The
credential used to deploy the Activity Agent must have the following permissions on the proxy
server:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

It is also necessary to enable the Remote Registry Service on the Activity Agent server.

For integration between the Activity Monitor and Access Analyzer, the credential used by Access
Analyzer to read the activity log files must have also have this permission.

**SharePoint Requirements**

See the [SharePoint Online Activity Auditing Configuration](/docs/accessanalyzer/12.0/requirements/sharepoint/sharepoint/sharepointonline/activity.md) topic for instructions.

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
