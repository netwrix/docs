---
title: "Network Traffic Compression"
description: "Network Traffic Compression"
sidebar_position: 80
---

# Network Traffic Compression

To reduce network traffic in distributed deployments, multi-site networks, and other environments
with remote locations that have limited bandwidth, use network traffic compression. When you enable it, Netwrix deploys an additional agent to the source system. The agent run on the target computers, collect, and pre-filter data, and send it to Netwrix Cloud Agent in a highly compressed format.

With network traffic compression, the product collects data from target machines simultaneously, balancing network load and reducing data collection time. Without network traffic compression, the product processes target machines sequentially, one at a time. Network traffic compression increases scalability and optimizes network traffic.

:::warning
If Netwrix Auditor and Netwrix 1Secure audit the same domain, ensure that the
network traffic compression service is enabled for only one of the products or neither product for
any of the audited services. It can't be enabled for both products.
:::


Its key capabilities are as follows:

- Allows Netwrix 1Secure to collect detailed metrics for the servers, log files, hardware, and
  individual processes
- Collects audit data with no recognizable load on the server
- Communicates with Netwrix Cloud Agent at predefined intervals, relaying data back to a central
  repository for storage

Network traffic compression is available on the following connectors:

- Active Directory Activity
- Active Directory Logons
- Group Policy Activity
- File Server Activity
- Windows Server Activity

On the first four connectors, the setting is the **Enable traffic network compression** checkbox. On Windows Server Activity, it is the **Enable network compression** checkbox.

The setting is off by default on connectors that 1Secure creates by default. The File Server State, SQL Server, Entra ID, Exchange Online, and SharePoint Online connectors have no compression setting.

In the scope table, the **Traffic Compression** column shows the setting. The scope edit drawer shows the **Enable traffic network compression** checkbox only for item scopes.
