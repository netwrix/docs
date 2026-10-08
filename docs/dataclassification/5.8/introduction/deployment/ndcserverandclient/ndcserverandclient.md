---
title: "NDC Server"
description: "NDC Server"
sidebar_position: 10
---

# NDC Server

You can deploy Netwrix Data Classification **Server** on a physical server or on a virtual machine via software such as
VMware or the Microsoft Hyper-V platform.

Netwrix doesn't recommend installing NDC Server on a highly-loaded production machine - NDC data
processing is highly resource intensive, and sharing resources with other programs and
processes decreases the performance of both NDC and the other processes. See
[Hardware Requirements](/docs/dataclassification/5.8/introduction/requirements/hardwarerequirements.md) for the recommended NDC Server specifications.

The installer always installs a **web-based client** (management console) together with the NDC
Server, so you must enable the IIS server role on the target machine. See
[Software Requirements](/docs/dataclassification/5.8/introduction/requirements/softwarerequirements.md) for supported operating systems and prerequisites.

:::note
For evaluation and PoC purposes, Netwrix provides a _virtual appliance_ — a virtual
machine image with pre-installed Netwrix Data Classification on Generalized Windows Server 2016
(180-day evaluation version) and Microsoft SQL Server 2017 Express. For details, see
[Requirements to Deploy Virtual Appliance](/docs/dataclassification/5.8/introduction/virtualappliance/systemrequirements.md).
:::

Remember that for production environments, your NDC Server and database server must meet the
[Requirements to Install Netwrix Data Classification](/docs/dataclassification/5.8/introduction/requirements/overview.md). 
The virtual appliance configuration is insufficient for production; Netwrix doesn't recommend it for that purpose.

To balance processing load in large-size and extra-large environments (16m+ objects), Netwrix strongly recommends deploying
multiple NDC Servers in **Distributed Query Server** mode.
See [Configuring NDC Server Cluster and Load Balancing with DQS Mode](/docs/dataclassification/5.8/introduction/deployment/ndcserverandclient/dqsmode.md) for instructions on setting up a multi-server cluster.
