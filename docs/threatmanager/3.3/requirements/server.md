---
title: "Application Server Requirements"
description: "Application Server Requirements"
sidebar_position: 10
---

# Application Server Requirements

:::warning
Don't install Netwrix Threat Manager on the same server as the Netwrix Threat Manager
Reporting Module.
:::


The Windows server can be physical or virtual. Threat Manager supports the following Windows server
operating systems:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

Additionally the server must meet these requirements:

- United States English language installation

**RAM, CPU, and Disk Space**

These depend upon the total number of daily events sent to Threat Manager. Use the total
events for a peak day of the week, by activity.

| Environment      | Enterprise | Extra Large | Large  | Medium | Small | Extra Small |
| ---------------- | ---------- | ----------- | ------ | ------ | ----- | ----------- |
| Daily Events     | 130 M      | 90 M        | 45 M   | 21 M   | 4.5 M | 875 K       |
| RAM              | 64 GB      | 64 GB       | 32 GB  | 32 GB  | 32 GB | 16 GB       |
| Cores            | 24         | 12          | 8      | 8      | 4     | 4           |
| Daily Disk Usage | 300 GB     | 170 GB      | 120 GB | 40 GB  | 10 GB | 5 GB        |
| Total Disk Space | 4 TB       | 3 TB        | 2 TB   | 1 TB   | 1 TB  | 1 TB        |
| IOPS             | 8,000      | 5,000       | 3,000  | 2,000  | 1,000 | 500         |

:::note
These values assume a seven-day event retention period in Threat Manager.
:::


You can typically discover the daily events Threat Manager monitors by using Netwrix Threat
Prevention or Netwrix Activity Monitor. When planning a deployment with no Netwrix agent deployed,
it can be more difficult to plan for scale. However, you can use the following estimations based on
organization size:

- For fewer than 1,000 active users

    - Generally assume 21 million daily events (Medium environment)

- For 1,000-10,000 active users

    - Generally assume 45 million daily events (Large environment)

- For more than 10,000 active users

    - Generally assume at minimum 100 million daily events (Extra Large-Enterprise environment)

**Minimum hardware requirements**

- 8 GB RAM
- 4 CPU Cores

- 150 GB Disk Space

**Additional Server Requirements**

The following are additional requirements for the application server:

- .NET 8.0.11
- .NET Desktop Runtime 8.0.11
- ASP.NET Core 8.0.11
- VC++ redist v14.28.29914
- Python v3.10.8x64

**Additional Considerations when Database is on the Application Server**

Accommodate the following considerations:

- When running antivirus scans against the PostgreSQL v14 database, exclude the PostgreSQL data
  folder from the scans to prevent database complications.
- For performance reasons, disable Windows File Indexing on the drive containing the Threat Manager
  database.
- Never perform Disk Defragmentation jobs on the drive containing the Threat Manager
  PostgreSQL database. This can cause operational issues with the PostgreSQL database.

**Permissions for Installation and Application Use**

Installing and using the application requires the following permissions:

- Membership in the local Administrators group

## Virtual Environment Recommendations

While Netwrix always prefers physical machines, it fully supports the use of virtual machines. This
section contains special considerations when using virtualization.

- VMWare® ESX® – If using ESX, Netwrix recommends the following specifications:

    - ESX 4.0 / ESXi™ 4.1 or higher
    - Virtual Hardware 7 or higher
    - All Virtual Machines installed on the same datacenter / rack

- Virtual Storage Consideration

    - In the server requirements, when the servers require separate disks, that should
      translate to separate data stores on the VM host machine.
