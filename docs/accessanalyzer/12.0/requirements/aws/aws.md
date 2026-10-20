---
title: "Amazon Web Services (AWS) Solution"
description: "Amazon Web Services (AWS) Solution"
sidebar_position: 30
---

# Amazon Web Services (AWS) Solution

The core components for Netwrix Access Analyzer (formerly Enterprise Auditor) are the Access
Analyzer Console server, SQL Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/12.0/requirements/overview.md) topic for the core requirements.

See the [Target Amazon Web Service Requirements, Permissions, and Ports](/docs/accessanalyzer/12.0/requirements/aws/target.md) topic for
target environment requirements.

## AWS Solution Requirements on the Access Analyzer Console

**RAM, CPU, and Disk Space**

These depend on the size of the target environment:

| Environment | Large          | Medium – Small |
| ----------- | -------------- | -------------- |
| Definition  | > 100 Accounts | < 100 Accounts |
| RAM         | 8+ GB          | 4+ GB          |
| Cores       | 4 CPU          | 2 CPU          |
| Disk Space  | 30 GB          | 30 GB          |

:::note
If you run Sensitive Data Discovery (SDD) scans, increase the minimum amount of RAM. Each
thread requires a minimum of 2 additional GB of RAM per host. For example, if you configure the
job to scan 8 hosts at a time, you need an extra 16 GB of RAM (8x2=16).
:::


**Sensitive Data Discovery Auditing Requirement**

:::note
Access Analyzer installs the appropriate JDK (Java) version for Sensitive Data Discovery on
the server. This JDK comes prepackaged and preconfigured to work with Access Analyzer, requires no
additional configuration, and you should never customize it through Java. It doesn't conflict with
other JDKs or Java Runtimes in the same environment.
:::


## AWS Solution Requirements on the SQL Server

**RAM, CPU, and Disk Space**

These depend on the size of the target environment.

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
