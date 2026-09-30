---
title: "Data Storages and Sizing"
description: "Data Storages and Sizing"
sidebar_position: 40
---

# Data Storages and Sizing

Netwrix Data Classification uses two forms of data storage:

- NDC SQL database — SQL Server or PostgreSQL database that stores product configuration and metadata for the data
  sources.
- NDC Index — a full-text search index that comprises a set of files in the proprietary format
  (.CSE).

### NDC SQL database

Deploy the NDC Server and the **NDC SQL database** on different machines.

For all databases:

- Estimate required disk space assuming _10 - 12 KB_ per indexed object. For example, for _5, 000,
  000_ objects, the database size will be approximately _50 GB_.
  Due to built-in limitations of size and capacity, SQL Server Express edition is only suitable for evaluation and proof-of-concept (PoC) environments
  (processing up to 1,000,000 documents).

    **TIP:** Netwrix strongly recommends using SSD storage for both the database and Netwrix Data Classification
    servers.

Netwrix recommends hosting the NDC SQL database on a dedicated SQL Server instance. You can also host it on a PostgreSQL instance. 

- The minimum required version of SQL Server is SQL Server 2008 R2 Standard Edition.
- The minimum required version of PostgreSQL is PostgreSQL 18. 
 
See [Configure NDC SQL database](/docs/dataclassification/5.7/introduction/install/ndcsqldatabase.md) for full configuration details.

### NDC Index

Required disk space for the NDC Index file storage depends on the data
processing mode you plan to use (_No Index_, _Keyword_ or _Compound Term_).

As a general estimate, calculate required space as 35% of the total data size you
plan to index. For example, if you have 45 GB of files, they will require up to 15 GB for
the NDC Index files.

## Scalability and Performance

Scalability and performance testing groups environments by the number of objects to classify, as
follows:

| Number of objects to classify | Environment                                 | Comment                                                                    |
| ----------------------------- | ------------------------------------------- | -------------------------------------------------------------------------- |
| Up to 1, 000, 000             | Proof-of-concept and small-size environment |                                                                            |
| Up to 16, 000, 000            | Mid-size environment                        |                                                                            |
| Up to 64, 000, 000            | Large-size environment                      |                                                                            |
| More than 64, 000, 000        | Extra-large environment                     | Deployment planning requires a system architect's assistance.              |

For large-size and extra-large environments, Netwrix recommends
configuring a cluster of several NDC Servers and applying Distributed Query Server (DQS) mode. See
[Configuring NDC Servers Cluster and Load Balancing with DQS Mode](/docs/dataclassification/5.7/introduction/deployment/ndcserverandclient/dqsmode.md)
for details.
