---
title: "AzureADInventory Data Collector"
description: "AzureADInventory Data Collector"
sidebar_position: 70
---

# AzureADInventory Data Collector

The AzureADInventory Data Collector catalogs user and group object information from Microsoft Entra
ID, formerly Azure Active Directory. This data collector is a core component of Enterprise Auditor
and is preconfigured in the .Entra ID Inventory Solution.

Both this data collector and the solution are available with all Enterprise Auditor license options.
See the
[.Entra ID Inventory Solution](/docs/accessanalyzer/11.6/solutions/entraidinventory/overview.md)
topic for additional information.

**Protocols**

- HTTP
- HTTPS
- REST

**Ports**

- TCP 80 and 443

**Permissions**

- Microsoft Graph API

    - Application Permissions:

        - AuditLog.Read.All – Read all audit log data
        - Directory.Read.All – Read directory data

    - Delegated Permissions:

        - Group.Read.All – Read all groups
        - User.Read.All – Read all users' full profiles

- Access URLs

    - https://login.windows.net
    - https://graph.windows.net
    - https://login.microsoftonline.com
    - https://graph.microsoft.com

        - All sub-directories of the access URLs listed

## AzureADInventory Query Configuration

The AzureADInventory Data Collector is configured through the Entra ID Inventory DC Wizard, which
contains the following wizard pages:

- Welcome
- [AzureADInventory: Category](/docs/accessanalyzer/11.6/admin/datacollector/azureadinventory/category.md)
- [AzureADInventory: Options](/docs/accessanalyzer/11.6/admin/datacollector/azureadinventory/options.md)
- [AzureADInventory: Custom Attributes](/docs/accessanalyzer/11.6/admin/datacollector/azureadinventory/customattributes.md)
- [AzureADInventory: Results](/docs/accessanalyzer/11.6/admin/datacollector/azureadinventory/results.md)
- [AzureADInventory: Summary](/docs/accessanalyzer/11.6/admin/datacollector/azureadinventory/summary.md)

![Entra ID Inventory Data Collector Wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/azureadinventory/welcome.webp)

Hide the Welcome page the next time this data collected is accessed by selecting the **Do not
display this page the next time** checkbox.
