---
title: "Network Traffic Compression"
description: "Network Traffic Compression"
sidebar_position: 40
---

# Network Traffic Compression

To reduce network traffic in distributed deployments, multi-site networks and other environments
with remote locations that have limited bandwidth, it is recommended to use network traffic
compression. For that purpose, special Netwrix utilities should be installed in the audited
environment. These utilities will run on the target computers (depending on your monitoring plan),
collect, pre-filter data and send it to Auditor Server in a highly compressed format.

With network traffic compression, data from the target machines is collected simultaneously,
providing for network load balance and minimizing data collection time. (Unlike that, without
network traffic compression the target machines will be processed sequentially, i.e. one at a time.)
So, network traffic compression helps to increase scalability and optimize network traffic.

Its key capabilities are as follows:

- Allows Auditor to collect detailed metrics for the servers, log files, hardware and individual
  processes
- Collects audit data with no recognizable load on the server
- Communicates with Netwrix Auditor Server at predefined intervals, relaying data back to a central
  repository for storage

Network traffic compression is available for the following data sources:

- Active Directory
- Exchange
- File Servers
- Dell
- NetApp
- Windows Server
- Event Logs
- Group Policy
- Logon Activity
- SharePoint
- User Activity

To learn how to enable this feature, refer to the
[Create a New Monitoring Plan](/docs/auditor/10.8/admin/monitoringplans/create.md) topic for additional information.
