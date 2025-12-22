---
title: "Scalability and Performance"
description: "Scalability and Performance"
sidebar_position: 30
---

# Scalability and Performance

Scalability and performance testing revealed that based on the number of objects to classify, the
environments can be ranged as follows:

| Number of objects to classify | Environment                                 | Comment                                                                                 |
| ----------------------------- | ------------------------------------------- | --------------------------------------------------------------------------------------- |
| Up to 1, 000, 000             | Proof-of-concept and small-size environment |                                                                                         |
| Up to 16, 000, 000            | Mid-size environment                        |                                                                                         |
| Up to 64, 000, 000            | Large-size environment                      |                                                                                         |
| More than 64, 000, 000        | Extra-large environment                     | System architect's assistance is required for deployment planning in such environments. |

**IMPORTANT!** For the large-size and extra-large environments, it is strongly recommended to
configure a cluster of several NDC Servers and apply DQS mode to these clustered servers. See
[Configuring NDC Servers Cluster and Load Balancing with DQS Mode](/docs/dataclassification/5.7/introduction/deployment/ndcserverandclient/dqsmode.md)
for details.
