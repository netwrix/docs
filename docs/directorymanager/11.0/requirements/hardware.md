---
title: "GroupID Hardware Requirements"
description: "Check the minimum processor, memory, and disk space a server needs to run GroupID, including extra RAM when you host SQL Server on it."
keywords:
  - GroupID hardware requirements
  - minimum RAM
  - Elasticsearch memory
  - disk space
  - server sizing
sidebar_position: 10
---

# GroupID Hardware Requirements

The minimum hardware requirements for GroupID are:

- 1.4 GHz or faster with four or more cores on a 64-bit processor
- 8 GB of RAM if GroupID manages Elasticsearch

    6 GB of RAM if you manage Elasticsearch yourself

    :::info
    A dedicated server is recommended for GroupID. If you install any other
    application on the GroupID server, adjust RAM requirements accordingly. For
    example, if you install SQL Server, you may need to add 2-4 GB of RAM, depending on the edition of
    SQL Server.
    :::

    Different editions of SQL Server have varying resource requirements. For example:

    - SQL Server Express – Minimal resource usage; 2 GB of additional RAM may suffice.
    - SQL Server Standard or Enterprise – These require more resources; allocate 4 GB or more
      of additional RAM for optimal performance.

- 6 GB or more disk space (for installation only)

    Space requirements depend on how much the provider's Elasticsearch data grows.

See Also

- [GroupID 11.0 System Requirements](/docs/directorymanager/11.0/requirements/requirements.md)
