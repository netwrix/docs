# File System Supported Platforms

Netwrix Enterprise Auditor audits Microsoft® Windows® file servers, Network Attached Storage (NAS)
devices, and Unix platforms.

Enterprise Auditor employs the File System Solution to execute Access Auditing (FSAA), Activity
Monitoring (FSAC), and Sensitive Data Discovery Auditing scans. The Activity Monitoring (FSAC) scans
also require an additional application, either Netwrix Activity Monitor or Netwrix Threat
Prevention, to monitor the target environment.

**NOTE:** Access Auditing and Sensitive Data Discovery Auditing support CIFS and NFSv3.

Ports and permissions vary based on the scan mode option selected as well as the target environment.

Data Collectors

This solution employs the following data collector to scan the target environment:

- [ADInventory Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/adinventory/overview.md)
- [FileSystemAccess Data Collector](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/fsaa/overview.md)

Permissions and Ports for ADInventory Data Collector Prerequisite

The following permissions are needed:

- Read access to directory tree
- List Contents & Read Property on the Deleted Objects Container

    **NOTE:** See the Microsoft
    [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx)
    article and the Microsoft
    [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx) article for
    additional information.

The following firewall ports are needed:

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

Permissions and Ports for FileSystemAccess Data Collector

- Permissions vary based on the Scan Mode Option selected. See the File System Supported Platforms
  topic for additional information.

## Supported Windows Platforms

The following are supported Microsoft® Windows® operating systems:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

See the
[Windows File Server Target Requirements](/docs/accessanalyzer/11.6/config/windowsfile/overview.md)
topic for target environment requirements.

Windows File System Clusters

See the topic for target environment requirements.

Windows File System DFS Namespaces

See the topic for target environment requirements.

## Supported Network Attached Storage Devices

The following are supported Network Attached Storage (NAS) devices.

Dell Celerra® & VNX

- Celerra 6.0+
- VNX 7.1
- VNX 8.1

See the
[Dell Celerra & Dell VNX Target Requirements](/docs/accessanalyzer/11.6/config/dellcelerravnx/overview.md)
topic for target environment requirements.

Dell Isilon/PowerScale

- 7.0+

See the
[Dell Isilon/PowerScale Target Requirements](/docs/accessanalyzer/11.6/config/dellpowerscale/overview.md)
topic for target environment requirements.

Dell Unity

See the
[Dell Unity Target Requirements](/docs/accessanalyzer/11.6/config/dellunity/overview.md)
topic for target environment requirements.

Hitachi

- 11.2+

See the
[Hitachi Target Requirements](/docs/accessanalyzer/11.6/config/hitachi/overview.md)
topic for target environment requirements.

Nasuni Nasuni Edge Appliances

- 8.0+

See the
[Nasuni Target Requirements](/docs/accessanalyzer/11.6/config/nasuni/overview.md) topic
for target environment requirements.

NetApp Data ONTAP

- 7-Mode 7.3+
- Cluster-Mode 8.2+

    **NOTE:** The Resiliency feature introduced in ONTAP 9.0 is not supported.

See the following topics for target environment requirements:

- [NetApp Data ONTAP Cluster-Mode Target Requirements](/docs/accessanalyzer/11.6/config/netappcmode/overview.md)
- [NetApp Data ONTAP 7-Mode Target Requirements](/docs/accessanalyzer/11.6/config/netapp7mode/overview.md)

Nutanix

See the
[Nutanix Target Requirements](/docs/accessanalyzer/11.6/config/nutanix/overview.md)
topic for target environment requirements.

Qumulo

- Qumulo Core 5.0.0.1B+

See the
[Qumulo Target Requirements](/docs/accessanalyzer/11.6/config/qumulo/overview.md) topic
for target environment requirements.

## Supported Unix Platforms

The following are supported Unix operating systems for Access Auditing (FSAA) and Sensitive Data
Discovery Auditing only:

- AIX® 4+
- Solaris™ 8+
- Red Hat® Enterprise Linux® 4+
- Red Hat® Linux® 5.2+
- HP-UX® 11+
- SUSE® 10+
