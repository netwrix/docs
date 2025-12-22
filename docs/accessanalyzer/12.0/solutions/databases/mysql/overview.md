---
title: "MySQL Solution"
description: "MySQL Solution"
sidebar_position: 30
---

# MySQL Solution

Data privacy and security is quickly evolving to be on equal footing with traditional security
measures focused on the network, hardware, or software the data is contained within. Organizations
aligning to concepts like Data-Centric Audit and Protection (DCAP) as defined by Gartner, or the
requirements of strict compliance regulations like EU GDPR, are looking to implement processes that
help them understand where sensitive data is stored, who or what is leveraging their privileges to
access the data, and how each database has been configured.

As part of Stealthbits comprehensive Data Access Governance suite for structured and unstructured
data, Access Analyzer for MySQL automates the process of understanding where MySQL databases exist
and provides an overview of the MySQL environment in order to answer questions around data access:

- Who has access to your data?
- Where is sensitive data being stored?

With visibility into every corner of MySQL, organizations can proactively highlight and prioritize
risks to sensitive data. Additionally, organizations can automate manual, time-consuming, and
expensive processes associated with compliance, security, and operations to easily adhere to best
practices that keep MySQL Server safe and operational.

The MySQL Solution requires a special Access Analyzer license. The Database Solution license
includes all supported database platforms supported by Access Analyzer. Additionally, Sensitive Data
Discovery enables the solution to search database content for sensitive data.

By default, the job is configured to use 10 threads, which can be adjusted based on available
resources on the Access Analyzer server.

**Supported Platforms**

- MySQL 5.x
- MySQL 8.x
- Amazon MySQL RDS
- Amazon Aurora MySQL Engine
- MariaDB 10.x

**Requirements, Permissions, and Ports**

See the
[Target MySQL Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/databases/mysql.md)
topic for additional information.

**Sensitive Data Discovery Considerations**

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host.For example, if the job is
configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

:::note
The appropriate JDK (Java) version for Sensitive Data Discovery is installed on the
server. The JDK deployed is prepackaged and does not require any configuration; it has been
preconfigured to work with Access Analyzer and should never be customized through Java. It will not
conflict with other JDKs or Java Runtimes in the same environment.
:::


**Location**

The Structured Sensitive Data Discovery License is required to run the MySQL Solution. It can be
installed from the Access Analyzer Instant Job Wizard. Once it has been installed into the Jobs
tree, navigate to the solution: Jobs > **Databases** > MySQL.

The 0.Collection Job Group discovers configuration settings and Sensitive Data in MySQL Instances on
the target hosts. The other job groups analyze and report on the data collected by the 0.Collection
Job Group.

The Database Solution license includes all supported database platforms supported by Access
Analyzer. Additionally, Sensitive Data Discovery enables the solution to search database content for
sensitive data.

## Job Groups

The Access Analyzer MySQL Solution Set is a set of pre-configured audit jobs and reports that
provides visibility into MySQL Sensitive Data.

![MySQL Job Group Overview](/images/accessanalyzer/12.0/solutions/databases/mysql/mysqljobgroupoverview.webp)

The job groups in the MySQL Solution are:

- [0.Collection Job Group](/docs/accessanalyzer/12.0/solutions/databases/mysql/collection/overview.md) – Designed to collect high level summary
  information from targeted MySQL Servers. This information is used by other jobs in the
  MySQL Solution Set for further analysis and producing respective reports.
- [Configuration > MySQL_DatabaseSizing Job](/docs/accessanalyzer/12.0/solutions/databases/mysql/mysql_databasesizing.md) – Designed to provide insight
  into MySQL server configuration settings
- [MySQL_SensitiveData Job](/docs/accessanalyzer/12.0/solutions/databases/mysql/sensitivedata/mysql_sensitivedata.md) – Designed to provide insight into
  where sensitive data exists and who has access to it across all the targeted MySQL databases.
