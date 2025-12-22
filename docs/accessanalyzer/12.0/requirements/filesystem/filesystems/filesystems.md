---
title: "File System Supported Platforms"
description: "File System Supported Platforms"
sidebar_position: 20
---

# File System Supported Platforms

Netwrix Access Analyzer (formerly Enterprise Auditor) audits Microsoft® Windows® file servers,
Azure Files storage accounts, Network Attached Storage (NAS) devices, and Unix platforms.

Access Analyzer employs the File System Solution to execute Access Auditing (FSAA), Activity
Monitoring (FSAC), and Sensitive Data Discovery Auditing scans. The Activity Monitoring (FSAC) scans
also require an additional application, either Netwrix Activity Monitor or Netwrix Threat
Prevention, to monitor the target environment.

:::note
Access Auditing and Sensitive Data Discovery Auditing support CIFS and NFSv3.
:::


Ports and permissions vary based on the scan mode option selected as well as the target environment.

**Data Collectors**

This solution employs the following data collector to scan the target environment:

- [ADInventory Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/adinventory/overview.md)
- [FileSystemAccess Data Collector](/docs/accessanalyzer/12.0/admin/datacollector/fsaa/overview.md)

**Permissions and Ports for ADInventory Data Collector Prerequisite**

The following permissions are needed:

- Read access to directory tree
- List Contents & Read Property on the Deleted Objects Container

    :::note
    See the Microsoft
    [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx)
    article and the Microsoft
    [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx) article for
    additional information.
    :::


The following firewall ports are needed:

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**Permissions and Ports for FileSystemAccess Data Collector**

- Permissions vary based on the Scan Mode Option selected. See the File System Supported Platforms
  topic for additional information.

## Supported Windows Platforms

The following are supported Microsoft® Windows® operating systems:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

See the [Windows File Server Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/windowsfile/overview.md) topic for
target environment requirements.

**Windows File System Clusters**

See the topic for target environment requirements.

**Windows File System DFS Namespaces**

See the topic for target environment requirements.

## Azure Files Support

Azure Files is a fully managed, cloud-based file sharing service from Microsoft that allows users to
access file shares from anywhere as a virtual network drive. Access Analyzer supports Access
Auditing (FSAA) and Sensitive Data Discovery Auditing scans of Azure Files.

See the [Azure Files Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/azurefiles.md) topic for additional information.

## Supported Network Attached Storage Devices

The following are supported Network Attached Storage (NAS) devices.

**Dell Celerra® & VNX**

- Celerra 6.0+
- VNX 7.1
- VNX 8.1

See the [Dell Celerra & Dell VNX Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/dellcelerravnx/overview.md)
topic for target environment requirements.

**Dell Isilon/PowerScale**

- 7.0+

See the [Dell Isilon/PowerScale Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/dellpowerscale/overview.md)
topic for target environment requirements.

**Dell Unity**

See the [Dell Unity Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/dellunity/overview.md) topic for target
environment requirements.

**Hitachi**

- 11.2+

See the [Hitachi Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/hitachi/overview.md) topic for target
environment requirements.

**Nasuni Nasuni Edge Appliances**

- 8.0+

See the [Nasuni Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/nasuni/overview.md) topic for target
environment requirements.

**NetApp Data ONTAP**

- 7-Mode 7.3+
- Cluster-Mode 8.2+

See the following topics for target environment requirements:

- [NetApp Data ONTAP Cluster-Mode Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/netappcmode/overview.md)
- [NetApp Data ONTAP 7-Mode Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/netapp7mode/overview.md)

**Nutanix**

See the [Nutanix Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/nutanix/overview.md) topic for target
environment requirements.

**Qumulo**

- Qumulo Core 5.0.0.1B+

See the [Qumulo Target Requirements](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/qumulo/overview.md) topic for target
environment requirements.

## Supported Unix Platforms

The following are supported Unix operating systems for Access Auditing (FSAA) and Sensitive Data
Discovery Auditing only:

- AIX® 4+
- Solaris™ 8+
- Red Hat® Enterprise Linux® 4+
- Red Hat® Linux® 5.2+
- HP-UX® 11+
- SUSE® 10+
