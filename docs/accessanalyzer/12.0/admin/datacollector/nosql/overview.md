---
title: "NoSQL Data Collector"
description: "NoSQL Data Collector"
sidebar_position: 280
---

# NoSQL Data Collector

The NoSQL Data Collector for MongoDB provides information on MongoDB Cluster configuration, limited
user permissions, scans collections for sensitive data, and identifies who has access to sensitive
data. It also supports executing custom queries against all targeted MongoDB cluster nodes.

The NoSQL Data Collector has been preconfigured within the MongoDB Solution. Both this data
collector and the solution are available with a special Access Analyzer license. See the
[MongoDB Solution](/docs/accessanalyzer/12.0/solutions/databases/mongodb/overview.md) topic for additional
information.

**Protocols**

- TCP/IP

**Ports**

- MongoDB Cluster
- Default port is 27017 (you can configure a custom port)

**Permissions**

- Read Only access to ALL databases in the MongoDB Cluster including:

    - Admin databases
    - Config databases
    - Local databases

- Read Only access to any user databases is required for sensitive data discovery
- Read access to NOSQL instance
- Read access to MongoDB instance
- Requires installing the NOSQL Full-Text and Semantic Extractions for Search feature on the target
  NOSQL instances when using the Scans full rows for sensitive data option on the Options wizard
  page

**Sensitive Data Discovery Considerations**

If you run Sensitive Data Discovery (SDD) scans, increase the minimum amount of RAM. Each thread
requires a minimum of 2 additional GB of RAM per host. For example, if you configure the job to scan
8 hosts at a time, you need an extra 16 GB of RAM (8x2=16).

## NoSQL Query Configuration

The NoSQL Data Collector is configured through the NoSQL Data Collector Wizard. The wizard contains
the following pages, which change based upon the query category selected:

- [NoSQL: Category](/docs/accessanalyzer/12.0/admin/datacollector/nosql/category.md)
- [NoSQL: Options](/docs/accessanalyzer/12.0/admin/datacollector/nosql/options.md)
- [NoSQL: Criteria](/docs/accessanalyzer/12.0/admin/datacollector/nosql/criteria.md)
- [NoSQL: Filter](/docs/accessanalyzer/12.0/admin/datacollector/nosql/filter.md)
- [NoSQL: Results](/docs/accessanalyzer/12.0/admin/datacollector/nosql/results.md)
- [NoSQL: Summary](/docs/accessanalyzer/12.0/admin/datacollector/nosql/summary.md)
