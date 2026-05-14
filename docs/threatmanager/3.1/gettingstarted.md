---
title: "Getting Started with Threat Manager"
description: "Getting Started with Threat Manager"
sidebar_position: 2
---

# Getting Started with Threat Manager

After installing Threat Manager, complete the configuration described below so users can view
threat analytics for their environment. Many additional capabilities — including sensitive data
from Netwrix Access Analyzer (formerly Enterprise Auditor), Active Directory data collection,
email notifications, and SIEM service integration — also require configuration. Enable each one
from its respective configuration page.

## Send Data to Threat Manager

Threat detection requires either the Activity Monitor or Threat Prevention to monitor file system,
Active Directory, or Microsoft Entra ID activity. For each source you want to monitor, deploy an
agent to the appropriate server and configure the product to stream data to Threat Manager. For
an overview of the available integrations, see
[Integration with Other Netwrix Products](/docs/threatmanager/3.1/install/integration/overview.md).

### File System Activity

The Activity Monitor or the Threat Prevention file system policy monitors file system activity.
Deploy an activity agent to each Windows file server you want to monitor, or to a Windows proxy
server for each NAS device. Then configure the monitored host to send events to Threat Manager.
For details, see
[Netwrix Activity Monitor Integration](/docs/threatmanager/3.1/install/integration/activitymonitor.md).

### Active Directory Activity

Either the Activity Monitor or Threat Prevention can monitor Active Directory activity. Deploy an
Active Directory agent to your domain controllers, then configure your chosen product to stream
events to Threat Manager:

- Activity Monitor – Configure the monitored domain to stream data from the domain
  properties > Threat Manager tab. For details, see
  [Netwrix Activity Monitor Integration](/docs/threatmanager/3.1/install/integration/activitymonitor.md).
- Threat Prevention – Configure the Threat Prevention Admin Console to stream data through the
  Threat Manager Event Sink feature. For details, see
  [Netwrix Threat Prevention Integration](/docs/threatmanager/3.1/install/integration/threatprevention/threatprevention.md).

### Microsoft Entra ID Activity

Activity Monitor can monitor Microsoft Entra ID activity. Deploy an Activity Monitor agent to a
Windows server, then configure both the agent and the monitored tenant to send events to Threat
Manager. For details, see
[Netwrix Activity Monitor Integration](/docs/threatmanager/3.1/install/integration/activitymonitor.md).

### Sensitive Data Discovery

Access Analyzer collects sensitive data and forwards it to Threat Manager. This integration
requires a license for the Access Analyzer File System Solution with the Sensitive Data Discovery
Add-on. Add the Access Analyzer custom job to the FileSystem > 0.Collection Job Group so it
streams data after the collection tasks complete. For details, see
[Netwrix Access Analyzer (formerly Enterprise Auditor) Integration](/docs/threatmanager/3.1/install/integration/accessanalyzer.md).

## Enable Features in the Threat Manager Console

Some Threat Manager Console features require initial configuration before you can use them.
Configure these features from pages under the
[Configuration Menu](/docs/threatmanager/3.1/administration/configuration/overview.md):

- The [Integrations Interface](/docs/threatmanager/3.1/administration/configuration/integrations/overview.md) lets you
  add and configure external integrations for Threat Manager including:
    - [Active Directory Sync Page](/docs/threatmanager/3.1/administration/configuration/integrations/activedirectorysync.md)
    - [Entra ID Sync Page](/docs/threatmanager/3.1/administration/configuration/integrations/entraidsync.md)
    - [App Tokens Page](/docs/threatmanager/3.1/administration/configuration/integrations/apptoken.md)
    - [Authentication Provider Page](/docs/threatmanager/3.1/administration/configuration/integrations/page/page.md)
    - [Credential Profile Page](/docs/threatmanager/3.1/administration/configuration/integrations/credentialprofile.md)
    - [Email Page](/docs/threatmanager/3.1/administration/configuration/integrations/email.md)
    - [Folder Settings Page](/docs/threatmanager/3.1/administration/configuration/integrations/foldersettings.md)
    - [SIEM Page](/docs/threatmanager/3.1/administration/configuration/integrations/siem.md)
    - [Netwrix Integrations Page](/docs/threatmanager/3.1/administration/configuration/integrations/netwrixintegrations.md)
    - [Tag Management Page](/docs/threatmanager/3.1/administration/configuration/integrations/tagmanagement.md)
- The [Policies Page](/docs/threatmanager/3.1/administration/configuration/policies/overview.md) lets you add
  and configure policies used for threat detection including Honeytoken threats
