---
title: "Db2 Solution"
description: "Db2 Solution"
sidebar_position: 10
---

# Db2 Solution

The Access Analyzer Db2 Solution Set is a comprehensive set of pre-configured audit jobs and reports
that provide visibility into various aspects of Db2: Data Collection, Configuration, user
Permissions, and Sensitive Data.

**Supported Platforms**

- DB2LUW 11+

**Requirements, Permissions, and Ports**

See the
[Target Db2 Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/databases/db2.md) topic
for additional information.

**Sensitive Data Discovery Considerations**

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

:::note
The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the
server. The JDK deployed is prepackaged and does not require any configuration; it has been
preconfigured to work with Access Analyzer and should never be customized through Java. It will not
conflict with other JDKs or Java Runtimes in the same environment.
:::


**Location**

The Db2 Solution requires a special Access Analyzer license. It can be installed from the Access
Analyzer Instant Job Wizard. Once it has been installed in the Jobs tree, navigate to the solution:
Jobs > **Databases** > **Db2**.

The 0.Collection Job Group collects the data. The Db2 Solution Set Collection group is designed to
collect high level summary information from targeted Db2 Database Servers. This information is used
by other jobs in the Db2 Solution for further analysis and producing respective reports.

The Database Solution license includes all supported database platforms supported by Access
Analyzer. Additionally, Sensitive Data Discovery enables the solution to search database content for
sensitive data.

## Db2 Job Group Overview

The Access Analyzer Db2 Solution is a comprehensive set of preconfigured audit jobs and reports that
provide visibility into various aspects of a Db2 Databases: Sensitive Data Discovery and Objects
Permissions.

![Db2 Overview](/images/accessanalyzer/12.0/solutions/databases/db2/overview.webp)

The following comprises the Db2 solution:

- [0.Collection Job Group](/docs/accessanalyzer/12.0/solutions/databases/db2/collection/overview.md) — Collects high level summary information from
  targeted Db2 Servers. This information is used by other jobs in the Db2 Solution Set for further
  analysis and producing respective report.

- [Configuration > Db2_DatabaseSizing Job](/docs/accessanalyzer/12.0/solutions/databases/db2/db2_databasesizing.md) — Provides insight into Db2 server
  configuration settings

- [Permissions Job Group](/docs/accessanalyzer/12.0/solutions/databases/db2/permissions/overview.md)— Provides insight into all types of permissions
  at the database and object level across all the targeted Db2 database servers

- [Sensitive Data Job Group](/docs/accessanalyzer/12.0/solutions/databases/db2/sensitivedata/overview.md) — Provides insight into where sensitive data
  exists and who has access to it across all the targeted Db2 databases
