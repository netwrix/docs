---
title: "Hardware Requirements"
description: "Hardware Requirements"
sidebar_position: 10
---

# Hardware Requirements

Minimum hardware requirements for Directory Manager are:

- 1.4 GHz or faster with four or more cores on a 64-bit processor
- 8 GB of RAM in case of Directory Manager-managed Elasticsearch

    6 GB of RAM in case of self-managed Elasticsearch

    :::info
    We recommend a dedicated server for Directory Manager. If you install any other
    application on the Directory Manager server, then adjust RAM requirements accordingly. For
    example, if you install SQL Server, you may need to add 2-4 GB RAM depending on the edition of
    the SQL Server.
    :::


    Different editions of SQL Server have varying resource requirements. For example:

    - SQL Server Express – Minimal resource usage; 2 GB additional RAM may suffice.
    - SQL Server Standard or Enterprise – These require more resources; allocate 4 GB or more
      additional RAM for optimal performance.

- 6 GB or more disk space (for installation only)

    Space requirements are relative to the provider's data size growth for Elasticsearch data.
