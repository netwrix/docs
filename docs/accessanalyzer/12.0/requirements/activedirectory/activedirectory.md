---
title: "Active Directory Solution"
description: "Active Directory Solution"
sidebar_position: 10
---

# Active Directory Solution

The core components for Netwrix Access Analyzer (formerly Enterprise Auditor) are the Access
Analyzer Console server, SQL Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/12.0/requirements/overview.md) topic for the core requirements.

In addition to these, integration with either the Netwrix Activity Monitor or the Netwrix Threat
Prevention is required for event activity data to be scanned. See the
[Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor) or
the
[Netwrix Threat Prevention Documentation](https://helpcenter.netwrix.com/category/threatprevention)
for installation requirements and information on collecting activity data.

See the [Active Directory Domain Target Requirements](/docs/accessanalyzer/12.0/requirements/activedirectory/target/overview.md)
topic for target environment requirements.

## Active Directory Solution Requirements on the Access Analyzer Console

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment:

| Environment | Large                   | Medium – Small         |
| ----------- | ----------------------- | ---------------------- |
| Definition  | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM         | 8+ GB                   | 4+ GB                  |
| Cores       | 4 CPU                   | 2 CPU                  |
| Disk Space  | 30 GB                   | 30 GB                  |

## Active Directory Solution Requirements on the SQL Server

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment.

| Environment              | Large                   | Medium – Small         |
| ------------------------ | ----------------------- | ---------------------- |
| Definition               | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM                      | 16+ GB                  | 16+ GB                 |
| Cores                    | 8 CPU                   | 4 CPU                  |
| Number of Disks          | 4                       | 4                      |
| Operating System Disk    | 160 GB                  | 160 GB                 |
| SQL Database Disk        | 300 GB                  | 70-120 GB              |
| SQL Transaction Log Disk | 80 GB                   | 50 GB                  |
| SQL TEMP DB Disk         | 160 GB                  | 100 GB                 |
