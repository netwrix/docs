---
title: "MSP System"
description: "MSP System"
sidebar_position: 30
---

# MSP System

To ensure optimal operation, provide the following hardware resources:

## Microsoft SQL Server

The following minimum system requirements should manage around 10
customers with less than 20 users each.

- Windows Server 2019 (or newer)
- MSSQL Server 2019 (or newer)
- 4 CPU’s
- 16 GB RAM
- min. 100 GB HDD

**CAUTION:** Don't use SQL Server Express edition because of its limitations.

If your customer count grows, for every additional 200 users add at least:

- 2 CPU’s
- 8 GB RAM

## Application Server

The following minimum system requirements should manage around 10
customers with 20 users each.

- Windows Server 2019 (or newer)
- 4 CPU’s
- 16 GB RAM
- min. 50 GB HDD
- .NET Framework 4.8

If your customer count grows, for every additional 200 users add at least:

- 1 CPU
- 4 GB RAM

RECOMMENDED:, you should use an application server to handle a max of about 100
customers. If you reach 100 customers, you should set up a second Application Server or use load balancing between the application servers.

**CAUTION:** Add a Web-Endpoint (including load balancing) for every additional 1000 users.

**CAUTION:** Add an Application Server (including load balancing) for every additional 100 customers or 1000 users.

:::note
Individual variables - like the number of passwords per user - will affect
performance. Especially for Managed Service Provider (MSP) systems, you must monitor performance continuously and add
resources on demand.
:::
