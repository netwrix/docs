---
title: "Oracle Solution"
description: "Oracle Solution"
sidebar_position: 40
---

# Oracle Solution

Data privacy and security is quickly evolving to be on equal footing with traditional security
measures focused on the network, hardware, or software the data is contained within. Organizations
aligning to concepts like Data-Centric Audit and Protection (DCAP) as defined by Gartner, or the
requirements of strict compliance regulations like EU GDPR, are looking to implement processes that
help them understand where sensitive data is stored, who or what is leveraging their privileges to
access the data, and how each database has been configured.

This solution is a comprehensive part of the Data Access Governance suite for structured and
unstructured data. Access Analyzer for Oracle automates the process of understanding where Oracle
databases exist and provides an overview of the Oracle environment in order to answer questions
around data access:

- Who HAS access to your data?
- Who IS accessing your data?
- What sensitive data IS being stored and accessed?

With visibility into every corner of Oracle® server and the Windows® operating system it relies
upon, organizations can proactively highlight and prioritize risks to sensitive data. Additionally,
organizations can automate manual, time-consuming, and expensive processes associated with
compliance, security, and operations to easily adhere to best practices that keep Oracle Server safe
and operational.

The Oracle Solution requires a special Access Analyzer license. The Database Solution license
includes all supported database platforms supported by Access Analyzer. Additionally, Sensitive Data
Discovery enables the solution to search database content for sensitive data.

**Supported Platforms**

- Oracle Database 12c
- Oracle Database 18c
- Oracle Database 19c

**Requirements, Permissions, and Ports**

See the
[Target Oracle Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/databases/oracle/oracle.md)
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

The Oracle Solution requires a special Access Analyzer license. It can be installed from the Access
Analyzer Instant Job Wizard. Once it has been installed into the Jobs tree, navigate to the
solution: **Jobs** > **Databases** > **0.Collection** > **Oracle** for the 0.Collection job group
for Oracle.

The 0.Collection Job Group discovers Oracle Instances on the target hosts. The other job groups at
**Jobs** > **Databases** > **Oracle** analyze and report on the data collected by the 0.Collection
Job Group.

The Database Solution license includes all supported database platforms supported by Access
Analyzer. Additionally, Sensitive Data Discovery enables the solution to search database content for
sensitive data.

## Job Groups

The Oracle Solution is a comprehensive set of pre-configured audit jobs and reports that provide
visibility into various aspects of an Oracle Database Server, including information on Users and
Roles, Sensitive Data Discovery, Object Permissions, Configuration, User Activity, and overall
Security Assessment.

![Oracle Job Group](/images/accessanalyzer/12.0/solutions/databases/oracle/oraclejobgroup.webp)

The job groups/jobs in the Oracle Solution are:

- [0.Collection Job Group](/docs/accessanalyzer/12.0/solutions/databases/oracle/collection/overview.md) – This job group is designed to collect high
  level summary information from targeted Oracle Database Servers. This information is used by other
  jobs in the Oracle solution set for further analysis and for producing respective reports. The
  O.Collection job group is located at **Jobs** > **Databases** > **0.Collection** > **Oracle**.
- [1.Users and Roles Job Group](/docs/accessanalyzer/12.0/solutions/databases/oracle/usersroles/overview.md) – This job group is designed to provide
  insight into user security, roles, and object permissions on all the Oracle database objects
- [2.Activity Job Group](/docs/accessanalyzer/12.0/solutions/databases/oracle/activity/overview.md) – This job group is designed to provide insight into
  user login activity, object permission changes, any unusual database activity, SQL activity
  against sensitive data, and SQL activity against selective or all database objects
- [3.Permissions Job Group](/docs/accessanalyzer/12.0/solutions/databases/oracle/permissions/overview.md) – This job group is designed to provide insight
  into all types of permissions at the instance, database, and object level across all the targeted
  Oracle database servers
- [4.Configuration Job Group](/docs/accessanalyzer/12.0/solutions/databases/oracle/configuration/overview.md) – This job group is designed to provide
  insight into potential vulnerabilities related to Oracle Database Instance configuration settings
- [5.Sensitive Data Job Group](/docs/accessanalyzer/12.0/solutions/databases/oracle/sensitivedata/overview.md) – This job is designed to provide insight
  into where sensitive data exists, and who has access to it across all the targeted Oracle database
  servers
- [Oracle_SecurityAssessment Job](/docs/accessanalyzer/12.0/solutions/databases/oracle/oracle_securityassessment.md) – This job is designed to summarize
  and categorize the security findings into HIGH, MEDIUM, LOW, and NO FINDING categories based on
  their severity
