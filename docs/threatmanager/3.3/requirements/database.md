---
title: "Database Server Requirements"
description: "Database Server Requirements"
sidebar_position: 20
---

# Database Server Requirements

:::note
Use this information when the database server is separate from the application server.
:::


The Windows server can be physical or virtual. The following Windows server operating systems are
supported:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

Additionally the server must meet these requirements:

- United States English language installation

**Additional Server Requirements**

The following are additional requirements for the database server:

- .NET 10.0
- .NET Desktop Runtime 10.0
- ASP.NET Core 10.0
- VC++ redist v14.50.35719

**Additional Considerations**

Address the following considerations:

- When running antivirus scans against the PostgreSQL database, exclude the PostgreSQL data folder
  from the scans to prevent database complications.
- For performance reasons, disable Windows File Indexing on the drive containing the Threat Manager
  database.
- Never run Disk Defragmentation jobs on the drive containing the Threat Manager
  PostgreSQL database. Defragmentation can cause operational issues with the PostgreSQL database.
