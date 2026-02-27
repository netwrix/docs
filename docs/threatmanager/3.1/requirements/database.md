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

- US English language installation

**Additional Server Requirements**

The following are additional requirements for the database server:

- .NET 8.0.11
- .NET Desktop Runtime 8.0.11
- ASP.NET Core 8.0.11
- VC++ redist v14.28.29914

**Additional Considerations**

The following considerations must be accommodated for:

- When running antivirus scans against the PostgreSQL v14 database, the PostgreSQL data folder must
  be excluded from the scans in order to prevent database complications.
- For performance reasons, disable Windows File Indexing on the drive containing the Threat Manager
  database.
- Disk Defragmentation jobs should never be performed on the drive containing Threat Manager
  PostgreSQL database. This can cause operational issues with the PostgreSQL database.
