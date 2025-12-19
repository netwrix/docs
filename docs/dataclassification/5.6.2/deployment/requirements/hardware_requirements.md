---
title: "Hardware Requirements"
description: "Hardware Requirements"
sidebar_position: 10
---

# Hardware Requirements

Review the hardware requirements for the computer where Netwrix Data Classification will be
installed.

You can deploy Netwrix Data Classification on a virtual machine running Microsoft Windows guest OS
on the corresponding virtualization platform, in particular:

- VMware vSphere
- Microsoft Hyper-V
- Nutanix AHV

Note that Netwrix Data Classification supports only Windows OS versions listed in the
[Software Requirements](/docs/dataclassification/5.6.2/deployment/requirements/software_requirements.md)
section.

## Netwrix Data Classification Server

The requirements in this section apply to a single Netwrix Data Classification server.

To deploy a server cluster, make sure all planned cluster nodes meet the requirements listed below.
Consider deploying 1 Netwrix Data Classification Server per approx. 16, 000, 000 objects to process.

See
[Deployment Planning](/docs/dataclassification/5.6.2/deployment/deploymentplan/overview.md)
and
[Configuring NDC Servers Cluster and Load Balancing with DQS Mode](/docs/dataclassification/5.6.2/deployment/deploymentplan/ndcserverclient/distributed_query_server_mode.md)
for more information.

| Hardware Component | 1 Server per 16 M objects      |
| ------------------ | ------------------------------ |
| Cores              | 8 Cores                        |
| RAM                | 32 GB                          |
| Hard disk          | UP TO 35% of all data in scope |
| Hard drive type    | SSD storage (recommended)      |

## SQL Server

Review the hardware requirements for the computer where Netwrix Data Classification SQL Database
will be deployed.

| Hardware Component | Up to 16 M objects                                                                                                                                                                                                                                                                   | Up to 32 M objects and up to 8 M objects for SharePoint | Up to 64 M objects and up to 16 M objects for SharePoint |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | -------------------------------------------------------- |
| Processor          | 8 cores                                                                                                                                                                                                                                                                              | 8 cores                                                 | 8 cores                                                  |
| RAM                | 32 GB                                                                                                                                                                                                                                                                                | 64 GB                                                   | 128 GB                                                   |
| Hard disk          | Estimate required disk space assuming _10 - 12 KB_ per indexed object. For example, for _5, 000, 000_ objects, the database size will be approximately _50 GB_. See also [Deployment Planning](/docs/dataclassification/5.6.2/deployment/deploymentplan/overview.md). |                                                         |                                                          |
| Hard disk type     | SSD storage (recommended)                                                                                                                                                                                                                                                            |                                                         |                                                          |

## Network Access

| Specification  | Requirement                                                                                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Network access | Ensure that your Netwrix Data Classification servers are available over the network on a HTTP compliant port from all machines where the client interface (management console) will run. |
