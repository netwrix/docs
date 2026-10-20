---
title: "Sizing"
description: "Size the CPU, memory, storage, and bandwidth for each Privilege Secure for Discovery node based on the number of endpoints."
sidebar_position: 70
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the sizing tiers. In a 26.09.1 test stack with no endpoints, each service container used about 40 MB of memory at idle, and the whole stack, with the database, used about 300 MB with seven of the twelve services running. The container images take about 4 to 6 GB of disk for each release, and a MongoDB 4 to 8 migration holds a second copy of the database during the cutover. MongoDB 8.0's default cache is the larger of 50% of (RAM minus 1 GB) and 0.256 GB, so 16 GB leaves about 7.5 GB and 32 GB leaves about 15.5 GB. The history collections average between about 370 bytes and 1.3 KB for each record, and no migration sets a retention limit on them, so the data grows with the number of days kept. These figures suggest that the tiers have headroom, but they do not prove it. Evidence: none from a production-sized environment; the stack files set no memory limits; a test stack on Docker with 16 GB of memory.

TODO: Confirm the CPU figures (8 cores up to 10,000 endpoints, and 16 cores above that). Evidence: none. MongoDB needs at least 2 cores, and the scanner and worker code has no setting that scales with the number of cores.

TODO: Confirm the storage tiers (250 GB, 500 GB, 1 TB), the memory for fewer than 1,000 endpoints (16 GB), and the network figures. The legacy overview page listed a conflicting small-environment table (">500: 250 GB, 16 GB RAM; 500 - 1000: 100 GB"). Evidence: none in code. The page now gives the disk size only in the Storage table, because the earlier compute table said 1 TB for every environment of up to 10,000 endpoints.

TODO: Confirm whether the product keeps access risk and policy history without a retention limit, and how fast it grows for a large environment. Evidence: no TTL or retention setting in the migrations or services.
:::

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

## Bandwidth

Estimate 0.3 to 0.5 Mbps for each endpoint. For example, 30,000 endpoints use 50 to 100 GB each month. This is a general guideline and not a fixed value. Actual use varies with the activity in the environment.
