---
title: "MSP System"
description: "MSP System"
sidebar_position: 30
---

# MSP System

To ensure optimal operation, we recommend that the following hardware resources are made available:

## Microsoft SQL Server

The following system requirements are the minimum system requirements and should manage around 10
customers with less than 20 users each.

- Windows Server 2016 (or newer)
- MSSQL Server 2014 (or newer)
- 4 CPU’s
- 16 GB RAM
- min. 100 GB HDD

:::warning
Please note, that using a SQL Server with Express edition is not recommended because of
diverse limitations there.
:::


If your customer's count is growing over time, you should add every 200 users a minimum of at least:

- 2 CPU’s
- 8 GB RAM

## Application Server

The following system requirements are the minimum system requirements and should manage around 10
customers with 20 users each.

- Windows Server 2016 (or newer)
- 4 CPU’s
- 16 GB RAM
- min. 50 GB HDD
- .NET Framework 4.8

If your customer's count is growing over time, you should add every 200 users a minimum of at least:

- 1 CPU
- 4 GB RAM

RECOMMENDED: Currently, we suggest you use an application server to handle a max of about 100
customers. So if you reach 100 customers, you should set up a second Application Server or use some
sort of load balancing between the application servers.

:::warning
Every additional 1000 users an additional Web-Endpoint - incl. loadbalancing - is
recommended
:::


:::warning
Every additional 100 customers/1000 users an additional Application Server - incl.
loadbalancing - is recommended.
:::


NOTE: Please note that individual variables - like the number of passwords per user - will affect
performance. Especially for MSP-Systems it is required to monitor performance continuously, and add
additional resources on demand.
