---
title: "Activity Agent Server Requirements"
description: "Activity Agent Server Requirements"
sidebar_position: 10
---

# Activity Agent Server Requirements

The Activity Agent is installed on Windows servers to monitor Microsoft Entra ID, Network Attached
Storage (NAS) devices, SharePoint farms, SharePoint Online, SQL Server, and Windows file servers.
The server where the agent is deployed can be physical or virtual. The supported operating systems
are:

- Windows Server 2025
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2

**RAM, Processor, and Disk Space**

- RAM – 4 GB minimum
- Processor – x64. 4+ cores recommended; 2 cores minimum
- Disk Space – 1 GB minimum plus additional space needed for activity log files
- Network – a fast low-latency connection to the monitored platforms (file servers, SQL Server),
  preferably the same data center

:::note
Disk usage depends on the monitoring scope, user activity, types of client applications,
and the retention settings. Number of events per user per day may vary from tens to millions. A
single file system event is roughly 300 bytes.
:::


Old files are zipped, typical compression ratio is 20. Optionally, old files are moved from the
server to a network share. See the [Archiving Tab](/docs/activitymonitor/9.0/admin/agents/properties/archiving.md) topic
for additional information.

**Additional Server Requirements**

The following are additional requirements for the agent server:

- .NET Framework 4.7.2 installed, which can be downloaded from the link in the Microsoft
  [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
  article
- WMI enabled on the machine, which is optional but required for centralized Agent maintenance
- Remote Registry Service enabled
- For monitoring Dell devices, Dell CEE (Common Event Enabler) installed

**Permissions for Installation**

The following permission is required to install and manage the agent:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

**Activity Agent Ports**

See the [Activity Agent Ports](/docs/activitymonitor/9.0/requirements/activityagent/activityagentports.md) topic for firewall port requirements.

## Supported File Storage Platforms

The Activity Monitor provides the ability to monitor Windows and various NAS file servers.

:::note
For monitoring NAS devices, the Activity Agent must be deployed to a Windows server that acts as a proxy for monitoring the target environment.
:::


**Supported Windows File Servers Platforms**

The Activity Monitor provides the ability to monitor Windows file servers:

:::note
To monitor a Windows file server, the Activity Agent must be deployed on the server being monitored.
:::


- Windows Server 2025
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

See the [Windows File Server Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/windowsfs-activity.md)
topic for target environment requirements.



**Azure Files**


See [Azure Files Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/azure-files/azurefiles-activity.md) topic for target
environment requirements.



**CTERA Edge Filter**

- CTERA Portal 7.5.x+
- CTERA Edge Filer 7.5.x+

See the [CTERA Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/ctera-activity.md) topic for target
environment requirements.

**Dell Celerra® & VNX**

- Celerra 6.0+
- VNX 7.1
- VNX 8.1

See the
[Dell Celerra & Dell VNX Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/celerra-vnx-aac/celerra-vnx-activity.md)
topic for target environment requirements.

**Dell Isilon/PowerScale**

- 7.0+

See the
[Dell Isilon/PowerScale Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/isilon-powerscale-aac/isilon-activity.md)
topic for target environment requirements.

**Dell PowerStore®**

See the [Dell PowerStore Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/powerstore-aac/powerstore-activity.md)
topic for target environment requirements.

**Dell Unity**

See the [Dell Unity Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/unity-aac/unity-activity.md) topic for
target environment requirements.

**Hitachi**

- 11.2+

See the [Hitachi Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/hitachi-aac/hitachi-activity.md) topic for target
environment requirements.

**Nasuni Nasuni Edge Appliances**

- 8.0+

See the [Nasuni Edge Appliance Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/nasuni-activity.md)
topic for target environment requirements.

**NetApp Data ONTAP**

- Data ONTAP 8.2+
- 7-Mode Data ONTAP 7.3+

See the following topics for target environment requirements:

- [NetApp Data ONTAP Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/ontap-cluster-aac/ontap-cluster-activity.md)
- [NetApp Data ONTAP 7-Mode Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/ontap7-aac/ontap7-activity.md)

**Nutanix**

See the [Nutanix Files Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/nutanix-activity.md) topic for
target environment requirements.

**Panzura**

See the [Panzura CloudFS Monitoring](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/panzura-activity.md) topic for target environment
requirements.

**Qumulo**

- Qumulo Core 5.0.0.1B+

See the [Qumulo Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/nas-device-configuration/qumulo-activity.md) topic for target
environment requirements.

## Supported Microsoft Entra ID

The Activity Monitor provides the ability to monitor Microsoft Entra ID:

See the [Microsoft Entra ID Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/entraid-activity.md) topic
for target environment requirements.


## Supported Exchange Online

The Activity Monitor provides the ability to monitor Exchange Online:

See the [Exchange Online Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/exchange-activity.md)
topic for target environment requirements.


## Supported SharePoint Online

The Activity Monitor provides the ability to monitor SharePoint Online:

See the
[SharePoint Online Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/sharepoint-online-activity.md) topic
for target environment requirements.

## Supported SharePoint On-Premise Platforms

The Activity Monitor provides the ability to monitor SharePoint On-Premise farms:

:::note
For monitoring a SharePoint farm, the Activity Agent must be deployed to the SharePoint
Application server that hosts the "Central Administration" component of the SharePoint farm.
:::

- SharePoint® Server Subscription Edition
- SharePoint® 2019
- SharePoint® 2016
- SharePoint® 2013

See the [SharePoint On-Premise Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/sharepoint-onprem-activity.md)
topic for target environment requirements.


## Supported SQL Server Platforms

The Activity Monitor provides the ability to monitor SQL Server:

:::note
For monitoring SQL Server, it is recommended to install the Activity Agent must be
deployed to a Windows server that acts as a proxy for monitoring the target environment.
:::


- SQL Server 2022
- SQL Server 2019
- SQL Server 2017
- SQL Server 2016

See the [SQL Server Activity Auditing Configuration](/docs/activitymonitor/9.0/requirements/activityagent/sqlserver-activity.md) topic for
target environment requirements.

