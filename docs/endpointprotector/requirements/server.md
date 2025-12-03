---
title: "Server"
description: "Server"
sidebar_position: 20
---


# Server Sizing

These guidelines define the minimal server requirements according to Netwrix best practices. Assigning higher resources than the minimum is recommended for improved performance and stability. When configuring storage, use SSD drives whenever possible. The following sections detail server sizing best practices based on the number of modules and connected clients.

| **Number of endpoints** | **Modules**  | **CPU Cores** | **RAM** | **HDD** |
|-------------------------|--------------|---------------|---------|---------|
| 300                     | DC+CAP       | 2             | 4       | 320     |
| 300                     | DC+CAP+eD+EE | 4             | 4       | 320     |
| 600                     | DC+CAP       | 4             | 6       | 750 GB  |
| 600                     | DC+CAP+eD+EE | 4             | 8       | 750 GB  |
| 1000                    | DC+CAP       | 8             | 8       | 1 TB    |
| 1000                    | DC+CAP+eD+EE | 8             | 12      | 1 TB    |
| 1500                    | DC+CAP       | 8             | 12      | 1 TB    |
| 1500                    | DC+CAP+eD+EE | 8             | 16      | 1 TB    |
| 2000                    | DC+CAP       | 8             | 16      | 1 TB    |
| 2000                    | DC+CAP+eD+EE | 8             | 16      | 1 TB    |
| 2500                    | DC+CAP       | 8             | 16      | 2 TB    |
| 2500                    | DC+CAP+eD+EE | 12            | 16      | 2 TB    |
| 3000                    | DC+CAP       | 12            | 16      | 3 TB    |
| 3000                    | DC+CAP+eD+EE | 12            | 20      | 3 TB    |
| 5000                    | DC+CAP       | 12            | 24      | 3 TB    |
| 5000                    | DC+CAP+eD+EE | 12            | 32      | 3 TB    |
| 7000                    | DC+CAP       | 12            | 32      | 4 TB    |
| 7000                    | DC+CAP+eD+EE | 16            | 48      | 4 TB    |
| 10000                   | DC+CAP       | 16            | 48      | 4 TB    |
| 10000                   | DC+CAP+eD+EE | 16            | 48      | 4 TB    |
| 13000                   | DC+CAP       | 16            | 56      | 4 TB    |
| 13000                   | DC+CAP+eD+EE | 16            | 64      | 4 TB    |
| 15000                   | DC+CAP       | 16            | 64      | 4 TB    |
| 15000                   | DC+CAP+eD+EE | 16            | 72      | 4 TB    |
| 18000                   | DC+CAP       | 16            | 72      | 4 TB    |
| 18000                   | DC+CAP+eD+EE | 16            | 80      | 4 TB    |
| 20000                   | DC+CAP       | 16            | 80      | 4 TB    |
| 20000                   | DC+CAP+eD+EE | 16            | 96      | 4 TB    |


**Key Terms / EPP Modules** <br />
DC = Device Control <br />
CAP = Content Aware Protection <br />
eD = eDiscovery <br />
EE = Enforced Encryption <br />

:::note
If your deployment exceeds 20,000 endpoints, please consult Netwrix Support to determine the appropriate server sizing for your environment.
:::
