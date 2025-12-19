---
title: "MongoDB Solution"
description: "MongoDB Solution"
sidebar_position: 20
---

# MongoDB Solution

Data privacy and security is quickly evolving to be on equal footing with traditional security
measures focused on the network, hardware, or software the data is contained within. Organizations
aligning to concepts like Data-Centric Audit and Protection (DCAP) as defined by Gartner, or the
requirements of strict compliance regulations like EU GDPR, are looking to implement processes that
help them understand where sensitive data is stored, who or what is leveraging their privileges to
access the data, and how each database has been configured.

As part of Stealthbits comprehensive Data Access Governance suite for structured and unstructured
data, Access Analyzer for MongoDB automates the process of understanding where MongoDB databases
exist and provides an overview of the MongoDB environment in order to answer questions around data
access:

- Who has access to your data?
- Where is sensitive data being stored?

With visibility into every corner of MongoDB, organizations can proactively highlight and prioritize
risks to sensitive data. Additionally, organizations can automate manual, time-consuming, and
expensive processes associated with compliance, security, and operations to easily adhere to best
practices that keep MongoDB Server safe and operational.

**Supported Platforms**

- MongoDB 5.0
- MongoDB 6.0
- MongoDB 7.0
- Windows and Linux distributions supported by MongoDB

**Requirements, Permissions, and Ports**

See the
[Target MongoDB Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/databases/mongodb.md)
topic for additional information.

**Sensitive Data Discovery Considerations**

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

By default, the job is configured to use 10 threads, which can be adjusted based on available
resources on the Access Analyzer server.

:::note
The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the
server. The JDK deployed is prepackaged and does not require any configuration; it has been
preconfigured to work with Access Analyzer and should never be customized through Java. It will not
conflict with other JDKs or Java Runtimes in the same environment.
:::


**Location**

The Structured Sensitive Data Discovery License is required to run the MongoDB Solution. The MongoDB
Solution can be installed from the Access Analyzer Instant Job Wizard. Once it has been installed
into the Jobs tree, navigate to the solution: Jobs > **Databases** > MongoDB.

The 0.Collection Job Group scans MongoDB instances on the target hosts, and collects
configuration and sensitive data. The other job groups analyze the collected data and generate
reports.

The Database Solution license includes all supported database platforms supported by Access
Analyzer. Additionally, Sensitive Data Discovery enables the solution to search database content for
sensitive data.

## Job Groups

The Access Analyzer MongoDB Solution Set is a set of pre-configured jobs and reports that provides
visibility into MongoDB Sensitive Data.

![MongoDB Overview](/images/accessanalyzer/12.0/solutions/databases/mongodb/mongdbjobgroupoverview.webp)

The following job groups comprise the MongoDB Solution:

- [ 0.Collection Job Group](/docs/accessanalyzer/12.0/solutions/databases/mongodb/collection/overview.md) — Collects high level summary information from
  targeted MongoDB Servers. This information is used by other jobs in the MongoDB Solution Set for
  further analysis and producing respective reports.
- [Analysis Tasks for the MongoDB_Database_Sizing Job](/docs/accessanalyzer/12.0/solutions/databases/mongodb/mongodb_database_sizing.md) — Provides insight
  into MongoDB server configuration settings
- [Sensitive Data > MongoDB_SensitiveData Job](/docs/accessanalyzer/12.0/solutions/databases/mongodb/mongodb_sensitivedata.md) — Provides insight into
  where sensitive data exists and who has access to it across all the targeted MongoDB databases
