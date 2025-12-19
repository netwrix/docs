---
title: "Target Exchange Online Requirements, Permissions, and Ports"
description: "Target Exchange Online Requirements, Permissions, and Ports"
sidebar_position: 30
---

# Target Exchange Online Requirements, Permissions, and Ports

The Enterprise Auditor for Exchange Solution provides the ability to audit Exchange Online. It
scans:

- Exchange Online (Limited)

See the
[Exchange Support and Permissions Explained](/docs/accessanalyzer/11.6/requirements/exchange/support/support.md)
topic for details on the type of auditing supported by data collector and by job group.

**Data Collectors**

This solution employs the following data collectors to scan the target environment:

- [AzureADInventory Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/azureadinventory/overview.md)
- [EWSMailbox Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/ewsmailbox/overview.md)
- [EWSPublicFolder Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/ewspublicfolder/overview.md)
- [ExchangePS Data Collector](/docs/accessanalyzer/11.6/admin/datacollector/exchangeps/overview.md)

## Permissions

For .Entra ID Inventory Prerequisite with the AzureADInventory Data Collector

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

See the
[Microsoft Entra ID Auditing Configuration](/docs/accessanalyzer/11.6/requirements/entraid/entraid/access.md)
topic for additional information.

Permissions for the Registered Microsoft Entra ID Application: Office 365 Exchange Online

- Application Permissions:

    - Exchange.ManageAsApp – Manage Exchange As Application
    - full_access_as_app – Use Exchange Web Services with full access to all mailboxes

- Exchange Administrator role assigned to the registered application's service principal

See the
[Exchange Online Auditing Configuration](/docs/accessanalyzer/11.6/requirements/exchange/exchangeonline/access.md)
topic for additional information.

For Exchange Web Services API Permissions with the EWSMailbox Data Collector

- Exchange Admin Role
- Discovery Management Role
- Exchange Online License

See the
[Exchange Web Services API Permissions](/docs/accessanalyzer/11.6/requirements/exchange/support/webservicesapi.md)
topic for additional information.

For Exchange Web Services API Permissions with the EWSPublicFolder Data Collector

- Exchange Admin Role
- Discovery Management Role
- Exchange Online License with a mailbox

See the
[Exchange Web Services API Permissions](/docs/accessanalyzer/11.6/requirements/exchange/support/webservicesapi.md)
topic for additional information.

**For Exchange PowerShell with ExchangePS Data Collector**

- Discovery Management Role
- Organization Management Role

See the
[Exchange PowerShell Permissions](/docs/accessanalyzer/11.6/requirements/exchange/support/powershell.md)
topic for additional information.

## Ports

The following firewall ports are needed:

**For AzureADInventory Data Collector**

- TCP 80 and 443

**For EWSMailbox Data Collector**

- TCP 389
- TCP 443

**For EWSPublicFolder Data Collector**

- TCP 389
- TCP 443

**For ExchangePS Data Collector**

- TCP 135
- Randomly allocated high TCP ports
