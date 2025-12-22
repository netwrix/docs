---
title: "Target MongoDB Requirements, Permissions, and Ports"
description: "Target MongoDB Requirements, Permissions, and Ports"
sidebar_position: 20
---

# Target MongoDB Requirements, Permissions, and Ports

The Enterprise Auditor for Databases Solution provides the ability to audit and monitor MongoDB
database environments to collect permissions and sensitive data. It scans:

- MongoDB 5.0
- MongoDB 6.0
- MongoDB 7.0
- Windows and Linux distributions supported by MongoDB

**Target MongoDB Requirements for Sensitive Data Discovery Scans**

- .NET Framework 4.8 is required to run the MongoDB_SensitiveDataScan Job
- MongoDB Cluster on Windows Only – Domain Administrator or Local Administrator privilege

**Data Collectors**

This solution employs the following data collector to scan the target environment:

- [NoSQL Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/nosql/overview.md)

## Permissions

**For MongoDB Prerequisite**

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

## Ports

The following firewall ports are needed:

**For NoSQL Data Collector**

- MongoDB Cluster
- Default port is 27017 (A custom port can be configured)
