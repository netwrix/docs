---
title: "High availability"
description: "High availability"
sidebar_position: 30
---

# High availability

## What is high availability?

High availability is designed to guarantee the further operation of Netwrix Password Secure in the
event of damage. A series of requirements need to be met in advance in order to use this feature

**CAUTION:** As the configuration of high availability is complex, it is (generally) implemented
during a consultation. If you are interested in this feature, please contact us directly or contact
your responsible partner.

#### Requirements

The following points should be observed during the configuration.

- It is essential that MSSQL Enterprise Version is used for replicating the database (even in the
  case of a replication across multiple locations)
- To achieve a better level of protection, we recommend operating the Netwrix Password Secure
  database on its own cluster
- A Netwrix Password Secure application server needs to be licensed for each location. Every
  application server has its own configuration database.

Load balancer

- To reduce the load on the server, a load balancer can be installed upstream of the application
  server
- If no load balancer is used, the distribution of the database profiles for the users is generally
  carried out via the registry

If a database is set up at ”location A” including an AD profile, the certificate needs to exported
there and then imported onto the server at “location B”. The database is replicated using MSSQL
technology and can be integrated as an existing database into Netwrix Password Secure at “location
B”. If the application server at “location A” fails, the server in the registry needs to be replaced
(location B) and rolled out again to users using group rules (GPO).

NOTE: Only peer-to-peer transaction replication is tested. If a different type of replication is
used, it should be tested in advance.
