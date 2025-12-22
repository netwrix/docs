---
title: ".NIS Inventory Solution"
description: ".NIS Inventory Solution"
sidebar_position: 30
---

# .NIS Inventory Solution

Network Information Service (NIS) for Unix provides a central repository for user, group, and other
information Unix systems need for authentication and authorization. The .NIS Inventory Solution is
designed to provide essential user and group membership information from a NIS domain, mapping these
principals to Windows-style SIDs. This provides valuable information to the File Systems Solution
when auditing NFS shares. This information can also be used in the Unix Solution Set.

**Supported Platforms**

- NIS domains

**Permissions**

- No special permissions are needed aside from access to a NIS server

**Ports**

- TCP 111 or UDP 111
- Randomly allocated high TCP ports

**Location**

The .NIS Inventory Solution is a core component of all Enterprise Auditor installations. It can be
installed from the Enterprise Auditor Instant Job Wizard..

![.NIS Inventory Solution in the Jobs Tree](/images/accessanalyzer/11.6/solutions/nisinventory/jobstree.webp)

Once it has been installed into the Jobs tree, navigate to the solution: **Jobs** > **.NIS
Inventory**. This group has been named in such a way to keep it at the top of the Jobs tree.

## NIS Scan Job

The .NIS Inventory Solution contains a single job. This job is configured to use the NIS Data
Collector and then runs analysis on the collected data.

![.NIS Inventory Solution Overview page](/images/accessanalyzer/11.6/solutions/nisinventory/overviewpage.webp)

The following job comprises the .NIS Inventory job group:

- [NIS Scan Job](/docs/accessanalyzer/11.6/solutions/nisinventory/nis_scan.md)
  – Provides essential user and group membership details to built-in solution sets
