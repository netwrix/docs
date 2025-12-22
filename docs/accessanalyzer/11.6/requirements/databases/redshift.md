---
title: "Target Redshift Requirements, Permissions, and Ports"
description: "Target Redshift Requirements, Permissions, and Ports"
sidebar_position: 60
---

# Target Redshift Requirements, Permissions, and Ports

The Enterprise Auditor for Databases Solution provides the ability to audit and monitor Redshift
database environments to collect permissions and sensitive data. It scans:

- Amazon AWS Redshift
- AWS Redshift Cluster

**Target Redshift Requirements**

- Creation of a user name and password through the AWS portal.
- Successful retrieval of the following items from the AWS website:

    - Database Name – Unique identifier for a specific database
    - Port Number – String of unique numbers used by networks to identify specific incoming
      processes
    - Endpoint name – Publicly accessible elastic IP address specific to the database

- Retrieval of the information from the Enterprise Auditor console.

Additional requirements for Sensitive Data Discovery:

- Windows Only – Domain Administrator or Local Administrator privilege

**Data Collectors**

This solution employs the following data collector to scan the target environment:

- [ADInventory Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/adinventory/overview.md)
- [SQL Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/sql/overview.md)

## Permissions

**For .Active Directory Inventory Prerequisite**

- Read access to directory tree
- List Contents & Read Property on the Deleted Objects Container

    :::note
    See the Microsoft
    [Searching for Deleted Objects](https://technet.microsoft.com/en-us/library/cc978013.aspx)
    article and the Microsoft
    [Dsacls](https://technet.microsoft.com/en-us/library/cc771151(v=ws.11).aspx) article for
    additional information.
    :::


**For Redshift Data Collection**

- Read-access to the following tables:

    - pg_tables
    - pg_user

## Ports

The following firewall ports are needed:

**For ADInventory Data Collector**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports
