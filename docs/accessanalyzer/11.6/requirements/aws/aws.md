---
title: "Amazon Web Services (AWS) Solution"
description: "Amazon Web Services (AWS) Solution"
sidebar_position: 30
---

# Amazon Web Services (AWS) Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/requirements/overview.md)
topic for the core requirements.

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans.

See the
[Target Amazon Web Service Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/aws/target.md)
topic for target environment requirements.

## AWS Solution Requirements on the Enterprise Auditor Console

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment:

| Environment | Large          | Medium – Small |
| ----------- | -------------- | -------------- |
| Definition  | > 100 Accounts | < 100 Accounts |
| RAM         | 8+ GB          | 4+ GB          |
| Cores       | 4 CPU          | 2 CPU          |
| Disk Space  | 30 GB          | 30 GB          |

:::note
If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the
minimum amount of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For
example, if the job is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are
required (8x2=16).
:::


**Sensitive Data Discovery Auditing Requirement**

The following is required to run Sensitive Data Discovery scans:

- Sensitive Data Discovery Add-On installed on the Enterprise Auditor Console server

:::note
The Sensitive Data Discovery Add-on installation package installs the appropriate JDK
(Java) version on the server. The JDK deployed is prepackaged and does not require any
configuration; it has been preconfigured to work with Enterprise Auditor and should never be
customized through Java. It will not conflict with other JDKs or Java Runtimes in the same
environment.
:::


## AWS Solution Requirements on the SQL Server

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment.

| Environment              | Large          | Medium – Small |
| ------------------------ | -------------- | -------------- |
| Definition               | > 100 Accounts | < 100 Accounts |
| RAM                      | 16+ GB         | 16+ GB         |
| Cores                    | 8 CPU          | 4 CPU          |
| Number of Disks          | 4              | 4              |
| Operating System Disk    | 160 GB         | 160 GB         |
| SQL Database Disk        | 300 GB         | 70-120 GB      |
| SQL Transaction Log Disk | 80 GB          | 50 GB          |
| SQL TEMP DB Disk         | 160 GB         | 100 GB         |
