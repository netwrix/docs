---
title: "High Availability (HA) and Disaster Recovery (DR) Options"
description: "High Availability (HA) and Disaster Recovery (DR) Options"
sidebar_position: 20
---

# High Availability (HA) and Disaster Recovery (DR) Options

High Availability (HA) and Disaster Recovery (DR) Options

# High Availability (HA) and Disaster Recovery (DR) Options

## High Availability (HA)

Privilege Secure utilizes a docker swarm for high availability. In a three node cluster, also know
as a swarm, (clusters have an odd number of nodes) any one node can fail and Privilege Secure will
continue to run uninterrupted. More information on the need for odd nodes in a HA setup can be
viewed [here](https://docs.docker.com/engine/swarm/admin_guide/#here). The nodes of a cluster should
be collocated as best practices for communication efficiency between the nodes in a single swarm.
This is important as there is a lot of traffic between nodes to ensure synchronization. Nodes on
differing sites can introduce latency and be susceptible to network problems.

### Load Balancing

The docker environment handles the balancing of the Privilege Secure containers/services and will
move these from node to node as it determines, based on load and availability. Privilege Secure
should be fronted with a single DNS entry. This should be set to round robin load balancing for each
to the nodes. This load balancer that the Privilege Secure nodes are behind is provided for best
practice in management of traffic to the nodes in an environment and is not a requirement to get
Privilege Secure up and running.

Three nodes for a HA cluster have been found to work for a wide range of environment sizes. These
can be virtual or physical appliances. The VM requirements are listed in this
article: [Virtual Machines](/docs/privilegesecurediscovery/requirements/virtualmachines.md)

## Disaster Recovery (DR)

The disaster recovery environment should match the architecture of the primary production
environment. This reduces the time to failover to the DR environment and reduces the chance of
problems arising. The DR environment and associated switch over processes should be tested at least
yearly. This will ensure a smooth move to the DR environment when required.

**CAUTION**: One item to be aware of with the DR Privilege Secure environment is to ensure that the
following Privilege Secure services are not running at the same time as production if they both
include the same target machines:

```
API, Worker, Expire, Ldapsync and scanner
```

If these are left running the DR environment will be overwriting the policies determined by the
 production environment.

Typically, an extract of the Mongo DB is taken nightly and copied to the DR site via script. This
can also be set to automatically or manually do a daily rehydration of the DR database. The
automatic rehydration does allows for a fast recovery in the event of a DR event.

The Customer Success Team are available to discuss HA and DR approaches. More information is
available in the attached document.

Official Attachment:
