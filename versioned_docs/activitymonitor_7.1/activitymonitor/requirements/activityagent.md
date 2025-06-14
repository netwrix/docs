# Activity Agent Server Requirements

The Activity Agent is installed on Windows servers to monitor Microsoft Entra ID, Network Attached
Storage (NAS) devices, SharePoint farms, SharePoint Online, SQL Server, and Windows file servers.
The server where the agent is deployed can be physical or virtual. The supported operating systems
are:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2

RAM, Processor, and Disk Space

- RAM – 4 GB minimum
- Processor – x64. 4+ cores recommended; 2 cores minimum
- Disk Space – 1 GB minimum plus additional space needed for activity log files
- Network – a fast low-latency connection to the monitored platforms (file servers, SQL Server),
  preferably the same data center

**NOTE:** Disk usage depends on the monitoring scope, user activity, types of client applications,
and the retention settings. Number of events per user per day may vary from tens to millions. A
single file system event is roughly 300 bytes.

Old files are zipped, typical compression ratio is 20. Optionally, old files are moved from the
server to a network share. See the
[Archiving Tab](/versioned_docs/activitymonitor_7.1/activitymonitor/admin/agents/properties/archiving.md)
topic for additional information.

Additional Server Requirements

The following are additional requirements for the agent server:

- .NET Framework 4.7.2 installed, which can be downloaded from the link in the Microsoft
  [.NET Framework 4.7.2 offline installer for Windows](https://support.microsoft.com/en-us/topic/microsoft-net-framework-4-7-2-offline-installer-for-windows-05a72734-2127-a15d-50cf-daf56d5faec2)
  article
- WMI enabled on the machine, which is optional but required for centralized Agent maintenance
- Remote Registry Service enabled
- For monitoring Dell devices, Dell CEE (Common Event Enabler) installed

Permissions for Installation

The following permission is required to install and manage the agent:

- Membership in the local Administrators group
- READ and WRITE access to the archive location for Archiving feature only

Activity Agent Ports

See the
[Activity Agent Ports](/versioned_docs/activitymonitor_7.1/activitymonitor/requirements/activityagentports.md)
topic for firewall port requirements.

## Supported Exchange Online

The Activity Monitor provides the ability to monitor Exchange Online:

**NOTE:** For monitoring Exchange Online, the Activity Agent must be deployed to a Windows server
that acts as a proxy for monitoring the target environment.

- Exchange Online

See the
[Exchange Online Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/exchangeonline/activity.md)
topic for target environment requirements.

## Supported Microsoft Entra ID

The Activity Monitor provides the ability to monitor Microsoft Entra ID:

**NOTE:** For monitoring Microsoft Entra ID, the Activity Agent must be deployed to a Windows server
that acts as a proxy for monitoring the target environment.

- Microsoft Entra ID (formerly Azure AD)

See the
[Microsoft Entra ID Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/entraid/activity.md)
topic for target environment requirements.

## Supported Network Attached Storage Devices

The Activity Monitor provides the ability to monitor NAS file server devices:

**NOTE:** For monitoring NAS devices, the Activity Agent must be deployed to a Windows server that
acts as a proxy for monitoring the target environment.

Dell Celerra® & VNX

- Celerra 6.0+
- VNX 7.1
- VNX 8.1

See the
[Dell Celerra & Dell VNX Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/dellcelerravnx/activity.md)
topic for target environment requirements.

Dell Isilon/PowerScale

- 7.0+

See the
[Dell Isilon/PowerScale Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/dellpowerscale/activity.md)
topic for target environment requirements.

Dell PowerStore®

See the
[Dell PowerStore Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/dellpowerstore/activity.md)
topic for target environment requirements.

Dell Unity

See the
[Dell Unity Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/dellunity/activity.md)
topic for target environment requirements.

Hitachi

- 11.2+

See the
[Hitachi Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/hitachi/activity.md)
topic for target environment requirements.

Nasuni Nasuni Edge Appliances

- 8.0+

See the
[Nasuni Edge Appliance Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/nasuni/activity.md)
topic for target environment requirements.

NetApp Data ONTAP

- 7-Mode 7.3+
- Cluster-Mode 8.2+

    **NOTE:** The Resiliency feature introduced in ONTAP 9.0 is not supported.

See the following topics for target environment requirements:

- [NetApp Data ONTAP 7-Mode Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/netapp7mode/activity.md)
- [NetApp Data ONTAP Cluster-Mode Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/netappcmode/activity.md)

Nutanix

See the
[Nutanix Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/nutanix/activity.md)
topic for target environment requirements.

Panzura

See the [Panzura CloudFS Monitoring](/versioned_docs/activitymonitor_7.1/config/panzura/activity.md)
topic for target environment requirements.

Qumulo

- Qumulo Core 5.0.0.1B+

See the
[Qumulo Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/qumulo/activity.md)
topic for target environment requirements.

## Supported SharePoint Farms Platforms

The Activity Monitor provides the ability to monitor SharePoint farms:

**NOTE:** For monitoring a SharePoint farm, the Activity Agent must be deployed to the SharePoint
Application server that hosts the “Central Administration” component of the SharePoint farm.

- SharePoint® 2019
- SharePoint® 2016
- SharePoint® 2013

- SharePoint® Server Subscription Edition

See the
[SharePoint On-Premise Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/sharepoint/activity.md)
topic for target environment requirements.

## Supported SharePoint Online

The Activity Monitor provides the ability to monitor SharePoint Online:

**NOTE:** For monitoring SharePoint Online, the Activity Agent must be deployed to a Windows server
that acts as a proxy for monitoring the target environment.

- SharePoint Online®

See the
[SharePoint Online Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/sharepointonline/activity.md)
topic for target environment requirements.

## Supported SQL Server Platforms

The Activity Monitor provides the ability to monitor SQL Server:

**NOTE:** For monitoring SQL Server, it is recommended to install the Activity Agent must be
deployed to a Windows server that acts as a proxy for monitoring the target environment.

- SQL Server 2022

- SQL Server 2019
- SQL Server 2017
- SQL Server 2016
- SQL Server 2014
- SQL Server 2012

See the
[SQL Server Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/sqlserver/activity.md)
topic for target environment requirements.

## Supported Windows File Servers Platforms

The Activity Monitor provides the ability to monitor Windows file servers:

**NOTE:** For monitoring a Windows file server, the Activity Agent must be deployed to the server.
It cannot be deployed to a proxy server.

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016
- Windows Server 2012 R2

See the
[Windows File Server Activity Auditing Configuration](/versioned_docs/activitymonitor_7.1/config/windowsfile/activity.md)
topic for target environment requirements.
