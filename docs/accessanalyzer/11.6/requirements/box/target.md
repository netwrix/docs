---
title: "Target Box Requirements, Permissions, and Ports"
description: "Target Box Requirements, Permissions, and Ports"
sidebar_position: 10
---

# Target Box Requirements, Permissions, and Ports

The Enterprise Auditor for Box scans:

- Box for Business

**Box Requirements**

The following are requirements from the target environment:

- Enterprise_ID of the target Box environment

**Data Collectors**

This solution employs the following data collector to scan the target environment:

- [ADInventory Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/adinventory/overview.md)
- [Box Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/box/overview.md)

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


**For Box Data Collection**

Box scans require the Enterprise Admin or Co-Admin account credentials to generate an authorization
code. The following can be used as a least privilege model:

- Enterprise Admin account
- Co-Admin account with the permission to **Run new reports and access existing reports** enabled

    - See the Box
      [Co-Admin Permissions Required to Run Reports](https://support.box.com/hc/en-us/articles/15518640907283-Co-Admin-Permissions-Required-to-Run-Reports)
      article for details on enabling this permission

:::note
Scans run with Co-Admin account credentials will complete. However, the data returned from
the scan might not include content owned by the Enterprise Admin account.
:::


See the
[Recommended Configurations for the Box Solution](/docs/accessanalyzer/11.6/solutions/box/recommended.md)
topic for additional information.

## Ports

The following firewall ports are needed:

**For ADInventory Data Collector**

- TCP 389
- TCP 135-139
- Randomly allocated high TCP ports

**For Box Data Collector**

- TCP 80
- TCP 443
