---
title: "PostgreSQL"
description: "PostgreSQL"
sidebar_position: 40
---

# PostgreSQL

:::note
Netwrix Password Secure supports PostgreSQL starting with version 26.9.100.
:::

#### Required Version

| Attribute          | Minimum | Recommended |
| ------------------ | ------- | ----------- |
| PostgreSQL Version | 13      | 18          |

#### Required Configuration

1. Service User: a role with the `CREATEDB` privilege (required only when Netwrix Password Secure creates the database), or the owner role of an existing database (when connecting to a database that already exists)
2. Extensions: `citext`, `plpgsql`, `uuid-ossp`
3. Encoding: `UTF8`
5. Port/firewall rule: user-configurable port for communication with the application server (incoming)
