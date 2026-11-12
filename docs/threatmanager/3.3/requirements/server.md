---
title: "Application Server Requirements"
description: "Application Server Requirements"
sidebar_position: 10
---

# Application Server Requirements

:::warning
You can't install Netwrix Threat Manager on the same server as Netwrix Threat Manager
Reporting Module.
:::


The Windows server can be physical or virtual. The following Windows server operating systems are
supported:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

Additionally the server must meet these requirements:

- United States English language installation

**RAM, CPU, and Disk Space**

These depend on the total number of daily events sent to Threat Manager. Use the total
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
All values are based on a seven-day event retention period in Threat Manager.
:::


You can typically discover the daily events for Threat Manager to monitor by using Netwrix Threat
Prevention or Netwrix Activity Monitor. When you plan a deployment where no Netwrix agent is
deployed, scaling is harder to plan. Use the following estimations based on organization size:

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

- .NET 10.0
- .NET Desktop Runtime 10.0
- ASP.NET Core 10.0
- VC++ redist v14.50.35719
- Python v3.10.8x64

**Additional Considerations when Database is on the Application Server**

Address the following considerations:

- When running antivirus scans against the PostgreSQL database, exclude the PostgreSQL data folder
  from the scans to prevent database complications.
- For performance reasons, disable Windows File Indexing on the drive containing the Threat Manager
  database.
- Never run Disk Defragmentation jobs on the drive containing the Threat Manager
  PostgreSQL database. Defragmentation can cause operational issues with the PostgreSQL database.

**Permissions for Installation and Application Use**

The following permissions are required to install and use the application:

- Membership in the local Administrators group

## Virtual Environment Recommendations

Although physical machines are always preferred, Netwrix fully supports virtual machines. This
section contains special considerations for virtualization.

- VMWare® ESX® – If using ESX, the following specifications are recommended:

    - ESX 4.0 / ESXi™ 4.1 or higher
    - Virtual Hardware 7 or higher
    - All Virtual Machines installed on the same datacenter / rack

- Virtual Storage Consideration

    - In the server requirements, when separate disks are required for the servers, that should
      translate to separate data stores on the VM host machine.
