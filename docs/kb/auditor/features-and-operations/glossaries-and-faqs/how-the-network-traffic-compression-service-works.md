---
description: >-
  Explains how the Network Traffic Compression Service works on Domain
  Controllers and how to enable or override it using the agent.ini file to
  optimize data transfer to Netwrix Auditor.
keywords:
  - network traffic compression
  - domain controller
  - Netwrix Auditor
  - agent.ini
  - traffic optimization
  - DC agents
  - bandwidth
  - data collection
  - skip setting
products:
  - auditor
sidebar_label: How the Network Traffic Compression Service Works
tags: []
title: "How the Network Traffic Compression Service Works"
knowledge_article_id: kA00g000000H9SLCA0
---

# How the Network Traffic Compression Service Works

## Overview

The Network Traffic Compression Service is implemented by a tiny executable that runs on Domain Controllers, pre-filters data and then sends it to Netwrix Auditor in a highly compressed format.

> IMPORTANT: if you do not want any extra services running on the Domain Controllers, you can configure Netwrix Auditor to work without the service (**not recommended**)

The Traffic Compression Service helps increase scalability and optimize traffic. It is a recommended option and is especially useful in poorly connected environments — for example, when you have multiple Domain Controllers distributed across geographic locations.

The Network Traffic Compression creates a service on the DC and copies a folder of 6KB in size to the machine. The service only runs when the Netwrix Auditor server calls it. In congested systems with high latency, the service can substantially improve data transfer while minimizing the impact on bandwidth. Using the service results in an approximately 100x reduction in the amount of data transferred and has a negligible impact on the performance of the target computer.

## Instructions

> TIP: network traffic compression can be enabled for all DCs in the domain by selecting a corresponding option in the **Active Directory data source**

To override the default value for specific DCs you specify:

1. Navigate to the Netwrix Auditor installation directory. For example, `C:\Program Files (x86)\Netwrix Auditor\Active Directory Auditing`
2. Open `agent.ini`
3. Update it using the syntax below:

```
dcname={remote|agent|skip|skipSilent}
```

### Parameters

- `dcname` – name of a domain controller for which you want to customize the Network Traffic Compression Service usage
- `remote` – means that the service will NOT be used on this particular domain controller
- `agent` – means that the service will be used to collect data from this particular domain controller, even if it is disabled in the Netwrix Auditor UI
- `skip` – means that the data will not be collected from this particular domain controller (this option can be used, for example, if the domain controller goes down and should be temporarily excluded from data collection)

> NOTE: Using the `skip` setting can produce incomplete reports: incorrect values in **Who Changed** / **When Changed** fields

- `skipsilent` – same as skip but should only be used for completely decommissioned DCs

### Examples

You have six domain controllers. Five of them are located in New York and one in Seattle. You do not need to use agents on the New York domain controllers since they have fast network connections, while the one located in Seattle is slow due to its distance from the main office.

In this way, you can specify the agent monitoring as follows:

```
NY1.acme.com=remote
NY2.acme.com=remote
NY3.acme.com=remote
NY4.acme.com=remote
NY5.acme.com=remote
Seattle.acme.com=agent
```

## Related Articles

- Network Traffic Compression ⸱ v 10.6 — https://docs.netwrix.com/docs/auditor/10_8
