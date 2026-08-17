---
title: "Getting Started with Threat Manager"
description: "Getting Started with Threat Manager"
sidebar_position: 2
---

# Getting Started with Threat Manager

After you install Threat Manager, complete the following configuration so users can begin
viewing threat analytics in an organization's environment.

After installation, many of Threat Manager's additional capabilities require configuration.
This includes the option to configure sensitive data from Netwrix Access Analyzer (formerly
Enterprise Auditor). You can enable features such as Active Directory data collection, email
notifications, and SIEM service integration on their respective configuration pages.

## Send Data to Threat Manager

Threat Manager threat detection requires file system and/or Active Directory and/or Microsoft Entra
ID activity monitoring by either the Activity Monitor or Threat Prevention. You must deploy an agent
to the monitored server and configure the products to stream data to Threat Manager.

See the [Integration with Other Netwrix Products](/docs/threatmanager/3.3/install/integration/overview.md) topic for additional
information.

### File System Activity

The Activity Monitor or the Threat Prevention file system policy monitors file system activity.
Deploy an activity agent to every Windows file server you monitor and/or to Windows
proxy servers for every NAS device you monitor. You must configure the monitored host to send
events to Threat Manager. See the
[Netwrix Activity Monitor Integration](/docs/threatmanager/3.3/install/integration/activitymonitor.md) topic for additional
information.

### Active Directory Activity

Either the Activity Monitor or Threat Prevention can monitor Active Directory activity.
Deploy an Active Directory agent to domain controllers so that Threat Manager can receive Active
Directory events:

- Activity Monitor – You must configure the monitored domain to stream data through the domain
  properties > Threat Manager tab
    - See the [Netwrix Activity Monitor Integration](/docs/threatmanager/3.3/install/integration/activitymonitor.md) topic for
      additional information.
- Threat Prevention – You must configure the Threat Prevention Admin Console to stream data through
  the Threat Manager Event Sink feature
    - See the [Netwrix Threat Prevention Integration](/docs/threatmanager/3.3/install/integration/threatprevention/threatprevention.md) topic
      for additional information.

### Microsoft Entra ID Activity

Activity Monitor can monitor Microsoft Entra ID activity. Deploy an Activity Monitor agent
to a Windows server and configure it to monitor an Microsoft Entra ID tenant to send events to
Threat Manager. You must configure the monitored tenant to send events to Threat Manager. See the
[Netwrix Activity Monitor Integration](/docs/threatmanager/3.3/install/integration/activitymonitor.md) topic for additional
information.

### Sensitive Data Discovery

Access Analyzer collects sensitive data. It requires a license for the Access Analyzer File
System Solution with the Sensitive Data Discovery Add-on. Access Analyzer has a custom job that you
can add to the FileSystem > 0.Collection Job Group to stream data after the collection tasks
complete. See the
[Netwrix Access Analyzer (formerly Enterprise Auditor) Integration](/docs/threatmanager/3.3/install/integration/accessanalyzer.md) topic
for additional information.

## Enable Features in the Threat Manager Console

The Threat Manager Console has features that require initial configuration to turn them on. These
pages are located under the [Configuration Menu](/docs/threatmanager/3.3/administration/configuration/overview.md):

- The [Integrations Interface](/docs/threatmanager/3.3/administration/configuration/integrations/overview.md) lets you add and
  configure external integrations for Threat Manager including:
    - [Active Directory Sync Page](/docs/threatmanager/3.3/administration/configuration/integrations/activedirectorysync.md)
    - [Entra ID Sync Page](/docs/threatmanager/3.3/administration/configuration/integrations/entraidsync.md)
    - [App Tokens Page](/docs/threatmanager/3.3/administration/configuration/integrations/apptoken.md)
    - [Authentication Provider Page](/docs/threatmanager/3.3/administration/configuration/integrations/page/page.md)
    - [Credential Profile Page](/docs/threatmanager/3.3/administration/configuration/integrations/credentialprofile.md)
    - [Email Page](/docs/threatmanager/3.3/administration/configuration/integrations/email.md)
    - [Folder Settings Page](/docs/threatmanager/3.3/administration/configuration/integrations/foldersettings.md)
    - [SIEM Page](/docs/threatmanager/3.3/administration/configuration/integrations/siem.md)
    - [Netwrix Integrations Page](/docs/threatmanager/3.3/administration/configuration/integrations/netwrixintegrations.md)
    - [Tag Management Page](/docs/threatmanager/3.3/administration/configuration/integrations/tagmanagement.md)
- The [Policies Page](/docs/threatmanager/3.3/administration/configuration/policies/overview.md) lets you add
  and configure policies used for threat detection including Honeytoken threats
