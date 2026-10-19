---
title: "Network Traffic Compression"
description: "Network Traffic Compression"
sidebar_position: 80
---

# Network Traffic Compression

To reduce network traffic in distributed deployments, multi-site networks, and other environments
with remote locations that have limited bandwidth, use network traffic compression. Install special Netwrix utilities in the audited environment for this purpose. These utilities run on the target computers, collect, and pre-filter data, and send it to Netwrix Cloud Agent in a highly compressed format.

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

Network traffic compression is available for the following data sources:

- Active Directory
- Computer
