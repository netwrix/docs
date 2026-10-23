---
title: "Scalability and Performance"
description: "Scalability and Performance"
sidebar_position: 30
---

# Scalability and Performance

Testing shows that environments can be categorized as follows based on the number of objects to classify:

| Number of objects to classify | Environment                                 | Comment                                                                                 |
| ----------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------- |
| Up to 1, 000, 000             | Proof-of-concept and small-size environment |                                                                                         |
| Up to 16, 000, 000            | Mid-size environment                        |                                                                                         |
| Up to 64, 000, 000            | Large-size environment                      |                                                                                         |
| More than 64, 000, 000        | Extra-large environment                     | System architect's assistance is required for deployment planning in such environments. |

**IMPORTANT!** For large-size and extra-large environments, Netwrix strongly recommends configuring a cluster of several NDC Servers and applying Distributed Query Server (DQS) mode to these clustered servers. See
[Configuring NDC Servers Cluster and Load Balancing with DQS Mode](/docs/dataclassification/5.7/introduction/deployment/ndcserverandclient/dqsmode.md)
for details.
