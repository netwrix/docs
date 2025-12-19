---
title: "NoSQL Data Collector"
description: "NoSQL Data Collector"
sidebar_position: 270
---

# NoSQL Data Collector

The NoSQL Data Collector for MongoDB provides information on MongoDB Cluster configuration, limited
user permissions, scans collections for sensitive data, and identifies who has access to sensitive
data. It also supports the execution of custom queries against all targeted MongoDB cluster nodes.

The NoSQL Data Collector has been preconfigured within the MongoDB Solution. Both this data
collector and the solution are available with a special Enterprise Auditor license. See the
[MongoDB Solution](/docs/accessanalyzer/11.6/solutions/databases/mongodb/overview.md)
topic for additional information.

**Protocols**

- TCP/IP

**Ports**

- MongoDB Cluster
- Default port is 27017 (A custom port can be configured)

**Permissions**

- Read Only access to ALL databases in the MongoDB Cluster including:

    - Admin databases
    - Config databases
    - Local databases

- Read Only access to any user databases is required for sensitive data discovery
- Read access to NOSQL instance
- Read access to MongoDB instance
- Requires NOSQL Full-Text and Semantic Extractions for Search feature to be installed on the target
  NOSQL instances when using the Scans full rows for sensitive data option on the Options wizard
  page

**Sensitive Data Discovery Considerations**

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

## NoSQL Query Configuration

The NoSQL Data Collector is configured through the NoSQL Data Collector Wizard. The wizard contains
the following pages, which change based upon the query category selected:

- [NoSQL: Category](/docs/accessanalyzer/11.6/admin/datacollector/nosql/category.md)
- [NoSQL: Options](/docs/accessanalyzer/11.6/admin/datacollector/nosql/options.md)
- [NoSQL: Criteria](/docs/accessanalyzer/11.6/admin/datacollector/nosql/criteria.md)
- [NoSQL: Filter](/docs/accessanalyzer/11.6/admin/datacollector/nosql/filter.md)
- [NoSQL: Results](/docs/accessanalyzer/11.6/admin/datacollector/nosql/results.md)
- [NoSQL: Summary](/docs/accessanalyzer/11.6/admin/datacollector/nosql/summary.md)
