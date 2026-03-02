---
title: "MSP System"
description: "MSP System"
sidebar_position: 30
---

# MSP System

For optimal operation, make the following hardware resources available.

## Microsoft SQL Server

These are the minimum system requirements for managing approximately 10 customers with fewer than 20 users each.

- Windows Server 2016 or newer
- MSSQL Server 2014 or newer
- 4 CPUs
- 16 GB RAM
- 100 GB HDD minimum

:::warning
SQL Server Express edition is not recommended due to its limitations.
:::

As your customer count grows, add the following resources for every 200 additional users:

- 2 CPUs
- 8 GB RAM

## Application Server

These are the minimum system requirements for managing approximately 10 customers with 20 users each.

- Windows Server 2016 or newer
- 4 CPUs
- 16 GB RAM
- 50 GB HDD minimum
- .NET Framework 4.8

As your customer count grows, add the following resources for every 200 additional users:

- 1 CPU
- 4 GB RAM

:::tip
Configure each application server to handle a maximum of 100 customers. When you reach that limit, set up a second application server or implement load balancing across your application servers.
:::

:::warning
Add an additional Web Endpoint — including load balancing — for every 1,000 additional users.
:::

:::warning
Add an additional application server — including load balancing — for every 100 additional customers or 1,000 additional users.
:::

:::note
Individual variables, such as the number of passwords per user, affect performance. For MSP systems, monitor performance continuously and add resources as needed.
:::
