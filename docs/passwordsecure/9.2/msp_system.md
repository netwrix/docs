---
title: "MSP system"
description: "Minimum hardware requirements for MSP system deployments"
sidebar_position: 30
---

# MSP system

Ensure the following hardware resources are available for optimal MSP system operation.

## Microsoft SQL Server

These are the minimum system requirements for supporting approximately 10 customers with fewer than 20 users each.

- Windows Server 2016 or later
- MSSQL Server 2014 or later
- 4 CPUs
- 16 GB RAM
- 100 GB HDD

:::warning
Using SQL Server Express edition isn't recommended because of its limitations.
:::

Add the following resources for every additional 200 users:

- 2 CPUs
- 8 GB RAM

## Application server

These are the minimum system requirements for supporting approximately 10 customers with 20 users each.

- Windows Server 2016 or later
- 4 CPUs
- 16 GB RAM
- 50 GB HDD
- .NET Framework 4.8

Add the following resources for every additional 200 users:

- 1 CPU
- 4 GB RAM

:::tip
Netwrix recommends limiting each application server to a maximum of approximately 100 customers. If you reach 100 customers, set up a second application server or configure load balancing between your application servers.
:::

:::warning
For every additional 1,000 users, add an additional web endpoint with load balancing.
:::

:::warning
For every additional 100 customers or 1,000 users, add an additional application server with load balancing.
:::

:::note
Individual variables—such as the number of passwords per user—affect performance. For MSP systems, monitor performance continuously and add resources as needed.
:::
