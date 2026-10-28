---
title: "Sizing"
description: "Size the CPU, memory, storage, and bandwidth for each Privilege Secure for Discovery node based on the number of endpoints."
sidebar_position: 70
---

Size each node by the number of endpoints that Netwrix Privilege Secure for Discovery manages. A cluster uses the same sizing for each node.

## Compute

Use a physical host, a virtual machine, or a cloud instance that meets the following requirements.

| Managed endpoints | CPU | Memory | Network |
| --- | --- | --- | --- |
| Up to 10,000 | 8 cores | 32 GB | 1 Gbps |
| More than 10,000 | 16 cores | 64 GB | 1 Gbps |

Environments with fewer than 1,000 endpoints can use 16 GB of memory. For the disk size, see [Storage](#storage).

Allocate most of the storage to the root (`/`) partition.

The host also needs an x86-64 processor that supports AVX, which MongoDB 8.0 requires. See [Install host prerequisites](./host-prerequisites.md).

MongoDB uses about half of the memory that remains after the first 1 GB for its database cache, so the memory figures matter for the performance of the database. The other containers share the rest.

## Storage

Allocate the following space to each node. A Docker cluster uses the same sizing for each node.

| Endpoints | Recommended node size |
| --- | --- |
| Fewer than 500 | 250 GB |
| 500 to 5,000 | 500 GB |
| More than 5,000 | 1 TB |

Docker caps the container logs of the database at 1.5 GB, the message queue at 100 MB, and the log forwarder at 3 GB. Include them in the node size.

### Data retention

The database grows as the product keeps history. Retention differs by type of data:

| Data | Retention |
| --- | --- |
| Policy history and privileged account history | Kept for 400 days by default. The product prunes them daily. |
| Health reports | Capped at 100 MB. |
| Bulk action job data | Deleted after 30 days. |
| Access risk history (user history, group history, and the history summary) | Never pruned. This data grows without limit. |

The database has no time-to-live (TTL) indexes. Include the growth of the access risk history in your storage planning, and monitor the disk use of each node.

## Bandwidth

Estimate 0.3 to 0.5 Mbps for each endpoint. For example, 30,000 endpoints use 50 to 100 GB each month. This is a general guideline and not a fixed value. Actual use varies with the activity in the environment.
