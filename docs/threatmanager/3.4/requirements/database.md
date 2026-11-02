---
title: "Database Server Requirements"
description: "Database Server Requirements"
sidebar_position: 20
---

# Database Server Requirements

:::note
Use this information when the database server is separate from the application server.
:::


The Windows server can be physical or virtual. Threat Manager supports the following Windows server operating systems:

- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

Additionally the server must meet these requirements:

- United States English language installation

**Additional Considerations**

Accommodate the following considerations:

- When you run antivirus scans against the PostgreSQL 18 or PostgreSQL 14 database, exclude the
  PostgreSQL data folder from the scans to prevent database complications.
- For performance reasons, disable Windows File Indexing on the drive containing the Threat Manager
  database.
- Never run Disk Defragmentation jobs on the drive containing Threat Manager
  PostgreSQL database. This can cause operational issues with the PostgreSQL database.
