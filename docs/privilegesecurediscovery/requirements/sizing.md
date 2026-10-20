---
title: "Sizing"
description: "Size the CPU, memory, storage, and bandwidth for each Privilege Secure for Discovery node based on the number of endpoints."
sidebar_position: 70
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the storage size for environments with fewer than 500 endpoints (250 GB) and the memory for fewer than 1,000 endpoints (16 GB). The legacy overview page listed a conflicting small-environment table (">500: 250 GB, 16 GB RAM; 500 - 1000: 100 GB"). This page uses the legacy storage sizing page. Evidence: none in code.

TODO: Confirm that the 1 TB disk figure for the compute tables is still correct next to the storage tiers in the storage table. Evidence: none.
:::

Size each node by the number of endpoints that Netwrix Privilege Secure for Discovery manages. A cluster uses the same sizing for each node.

## Compute

Use a physical host, a virtual machine, or a cloud instance that meets the following requirements. The cloud examples use Amazon Web Services (AWS) instance types. For Google Cloud Platform (GCP) and Microsoft Azure, use instance types with equivalent resources.

| Managed endpoints | CPU | Memory | Disk | Network | AWS example |
| --- | --- | --- | --- | --- | --- |
| Up to 10,000 | 8 cores | 32 GB | 1 TB | 1 Gbps | `m5.2xlarge` |
| More than 10,000 | 16 cores | 64 GB | 1 TB | 1 Gbps | `m5.4xlarge` |

An `m5.2xlarge` or `m5.4xlarge` instance provides 4,750 Mbps of Amazon Elastic Block Store (EBS) bandwidth. Environments with fewer than 1,000 endpoints can use 16 GB of memory.

Allocate most of the storage to the root (`/`) partition.

## Storage

Allocate the following space to each node. A Docker cluster uses the same sizing for each node.

| Endpoints | Recommended node size |
| --- | --- |
| Fewer than 500 | 250 GB |
| 500 to 5,000 | 500 GB |
| More than 5,000 | 1 TB |

## Bandwidth

Estimate 0.3 to 0.5 Mbps for each endpoint. For example, 30,000 endpoints use 50 to 100 GB each month. This is a general guideline and not a fixed value. Actual use varies with the activity in the environment.
