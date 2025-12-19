---
title: "Network Traffic Compression"
description: "Network Traffic Compression"
sidebar_position: 80
---

# Network Traffic Compression

To reduce network traffic in distributed deployments, multi-site networks and other environments
with remote locations that have limited bandwidth, it is recommended to use network traffic
compression. For that purpose, special Netwrix utilities should be installed in the audited
environment. These utilities will run on the target computers, collect, pre-filter data and send it
to Netwrix Cloud Agent in a highly compressed format.

With network traffic compression, data from the target machines is collected simultaneously,
providing for network load balance and minimizing data collection time. (Unlike that, without
network traffic compression the target machines will be processed sequentially, i.e. one at a time.)
So, network traffic compression helps to increase scalability and optimize network traffic.

:::warning
If Netwrix Auditor and Netwrix 1Secure audit the same domain, make sure that the
network traffic compression service is enabled for only one of the products or neither product for
any of the audited services. It cannot be enabled for both products.
:::


Its key capabilities are as follows:

- Allows Netwrix 1Secure to collect detailed metrics for the servers, log files, hardware and
  individual processes
- Collects audit data with no recognizable load on the server
- Communicates with Netwrix Cloud Agent at predefined intervals, relaying data back to a central
  repository for storage

Network traffic compression is available for the following data sources:

- Active Directory
- Computer
