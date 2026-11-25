---
title: "Directory Manager Hardware Requirements"
description: "Check the minimum processor, memory, and disk space a server needs to run Directory Manager, including extra RAM when you host SQL Server on it."
keywords:
  - Directory Manager hardware requirements
  - minimum RAM
  - Elasticsearch memory
  - disk space
  - server sizing
sidebar_position: 10
---

# Directory Manager Hardware Requirements

The minimum hardware requirements for Directory Manager are:

- A 64-bit processor running at 1.4 GHz or faster, with four or more cores.
- 8 GB of RAM if Directory Manager manages Elasticsearch, or 6 GB of RAM if you manage Elasticsearch yourself.
- 6 GB or more of disk space, for installation only. Space requirements depend on how much the provider's Elasticsearch data grows.

## Sharing the server with other applications

:::info
A dedicated server is recommended for Directory Manager. If you install any other application on the Directory Manager server, adjust RAM requirements accordingly. For example, if you install SQL Server, you may need to add 2-4 GB of RAM, depending on the edition of SQL Server.
:::

Different editions of SQL Server have varying resource requirements. For example:

- SQL Server Express uses minimal resources. 2 GB of additional RAM may suffice.
- SQL Server Standard or Enterprise requires more resources. Allocate 4 GB or more of additional RAM for optimal performance.
