---
title: "Active Directory Permissions Analyzer Solution"
description: "Active Directory Permissions Analyzer Solution"
sidebar_position: 20
---

# Active Directory Permissions Analyzer Solution

The core components for Netwrix Enterprise Auditor are the Enterprise Auditor Console server, SQL
Server, and Access Information Center. See the
[Requirements](/docs/accessanalyzer/11.6/requirements/overview.md)
topic for the core requirements.

See the
[Domain Target Requirements, Permissions, and Ports](/docs/accessanalyzer/11.6/requirements/activedirectorypermissionsanalyzer/target.md)
topic for target environment requirements.

## Active Directory Permissions Analyzer Solution Requirements on the Enterprise Auditor Console

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment:

| Environment | Large                   | Medium – Small         |
| ----------- | ----------------------- | ---------------------- |
| Definition  | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM         | 8+ GB                   | 4+ GB                  |
| Cores       | 4 CPU                   | 2 CPU                  |
| Disk Space  | 30 GB                   | 30 GB                  |

## Active Directory Permissions Analyzer Solution Requirements on the SQL Server

**RAM, CPU, and Disk Space**

These are dependent upon the size of the target environment.

| Environment              | Large                   | Medium – Small         |
| ------------------------ | ----------------------- | ---------------------- |
| Definition               | ~100,000 Users & Groups | ~50,000 Users & Groups |
| RAM                      | 16+ GB                  | 16+ GB                 |
| Cores                    | 8 CPU                   | 4 CPU                  |
| Number of Disks          | 4                       | 4                      |
| Operating System Disk    | 160 GB                  | 160 GB                 |
| SQL Database Disk        | 1 TB                    | 450 GB                 |
| SQL Transaction Log Disk | 240 GB                  | 120 GB                 |
| SQL TEMP DB Disk         | 350 GB                  | 240 GB                 |
