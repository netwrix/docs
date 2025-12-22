---
title: "Redshift Solution"
description: "Redshift Solution"
sidebar_position: 60
---

# Redshift Solution

The Access Analyzer Redshift Solution Set is a comprehensive set of pre-configured audit jobs and
reports that provide visibility into various aspects of Redshift: Data Collection, Configuration,
and Sensitive Data.

The Redshift Solution requires a special Access Analyzer license. Additionally, Sensitive Data
Discovery enables the solution to search Redshift and AWS content for sensitive data.

**Supported Platforms**

- Amazon AWS Redshift
- AWS Redshift Cluster

**Requirements, Permissions, and Ports**

See the
[Target Redshift Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/databases/redshift.md)
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

The Redshift Solution requires a special Access Analyzer license. It can be installed from the
Access Analyzer Instant Job Wizard. Once it has been installed in the **Jobs** tree, navigate to the
solution: **Jobs** > **Databases** > **Redshift Solution**.

The 0.Collection Job Group discovers SQL instances on the target hosts, and collects the data. The
other job groups analyze the collected data and generate reports.

The Database Solution license includes all supported database platforms supported by Access
Analyzer. Additionally, Sensitive Data Discovery enables the solution to search database content for
sensitive data.

## Redshift Job Group

The Access Analyzer Redshift  Solution Set is a set of preconfigured audit jobs and reports that
provides visibility into Redshift Sensitive Data.

![redshiftjobgrpoverview](/images/accessanalyzer/12.0/solutions/databases/redshift/redshiftjobgrpoverview.webp)

The following job groups comprise the Redshift Job Group:

- [0.Collection Job Group](/docs/accessanalyzer/12.0/solutions/databases/redshift/collection/overview.md) — Collects high level summary information from
  targeted Redshift Servers. Other jobs in the Redshift Solution Set use this information for
  further analysis and producing respective report. This Job Group is comprised of the following
  jobs(s)

    - [Redshift_Configuration Job](/docs/accessanalyzer/12.0/solutions/databases/redshift/collection/redshift_configuration.md)
    - [Redshift_SensitiveDataScan Job](/docs/accessanalyzer/12.0/solutions/databases/redshift/collection/redshift_sensitivedatascan.md)
    - [Redshift_TablePrivileges Job](/docs/accessanalyzer/12.0/solutions/databases/redshift/collection/redshift_tableprivileges.md)

- [Configuration > Redshift_DatabaseSizing Job](/docs/accessanalyzer/12.0/solutions/databases/redshift/redshift_databasesizing.md) — Provides insight into
  details about the Redshift environment and potential vulnerabilities relating to instance
  configuration settings.

- [Sensitive Data Job Group](/docs/accessanalyzer/12.0/solutions/databases/redshift/sensitive_data/overview.md) — Provides insight into where sensitive
  data exists and who has access to it across all the targeted Redshift databases.This Job Group is
  comprised of the following job(s):

    - [Redshift_SensitiveData Job](/docs/accessanalyzer/12.0/solutions/databases/redshift/sensitive_data/redshift_sensitivedata.md)
    - [Redshift_SensitiveDataPermissions Job](/docs/accessanalyzer/12.0/solutions/databases/redshift/sensitive_data/redshift_sensitivedatapermissions.md)
