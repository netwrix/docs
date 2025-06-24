---
title: "Microsoft 365 Permissions In Netwrix 1Secure"
sidebar_label: "Microsoft 365 Permissions"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# Microsoft 365 Permissions

This page lists the permissions required for an application you registered in Microsoft Entra ID to
audit the following Microsoft 365 data sources:

- Microsoft Entra ID
- SharePoint Online
- Exchange Online

## Permissions to Audit Microsoft Entra ID

**NOTE:** The registered application must be assigned to the Global Administrator or Exchange
Administrator role for Microsoft Entra ID state collection.

| API                        | Permissions                                                                                                                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft Graph            | Directory - Directory.Read.All – Read directory data AuditLog - AuditLog.Read.All – Read all audit log data Policy - Policy.Read.All – Read your organization's policies. This permission is required to collect state-in-time reports. |
| Office 365 Management APIs | ActivityFeed - ActivityFeed.Read – Read activity data for your organization                                                                                                                                                             |
| Office 365 Exchange Online | Exchange - Exchange.ManageAsApp – Manage Exchange As Application This permission is required to collect state-in-time reports.                                                                                                          |

**NOTE:** To access the Office 365 Exchange Online API, click the **APIs my organization uses** tab
on the Request API Permissions pane and search this API by entering its name in the search box.

## Permissions to Audit SharePoint Online

| API                        | Permissions                                                                                                                                                                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microsoft Graph            | Sites - Sites.Read.All – Read items in all site collections - Sites.ReadWrite.All – Read and write items in all site collections Directory - Directory.Read.All – Read directory data |
| SharePoint                 | Sites - Sites.FullControl.All – Have full control of all site collections. This permission is required to collect state-in-time reports.                                              |
| Office 365 Management APIs | ActivityFeed - ActivityFeed.Read – Read activity data for your organization                                                                                                           |

**NOTE:** The Sites.ReadWrite.All permission is only required for SharePoint Online integration (for
example, when you have to save subscriptions to a SharePoint location).

## Permissions to Audit Exchange Online

| API                        | Permissions                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| Office 365 Management APIs | ActivityFeed - ActivityFeed.Read – Read activity data for your organization |
