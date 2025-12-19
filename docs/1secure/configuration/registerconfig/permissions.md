---
title: "Microsoft 365 Permissions"
description: "Microsoft 365 Permissions"
sidebar_position: 10
---

# Microsoft 365 Permissions

This page lists the permissions required for an application you registered in Microsoft Entra ID to
audit the following Microsoft 365 data sources:

- Microsoft Entra ID
- SharePoint Online
- Exchange Online

## Permissions to Audit Microsoft Entra ID

:::note
The registered application must be assigned to the Global Administrator or Exchange
Administrator role for Microsoft Entra ID state collection.
:::


| API | Permissions |
| ---| ---|
| Microsoft Graph | Directory <br /><ul><li>Directory.Read.All – Read directory data</li></ul> <br /> AuditLog <br /> <ul><li>AuditLog.Read.All – Read all audit log data</li></ul> <br />Policy <br /><ul><li>Policy.Read.All – Read your organization's policies. This permission is required to collect state-in-time reports.</li></ul> |
| Office 365 Management APIs | ActivityFeed <br /><ul><li>ActivityFeed.Read – Read activity data for your organization</li></ul>                                                                                                                                                            |
| Office 365 Exchange Online | Exchange<ul><li>Exchange.ManageAsApp – Manage Exchange As Application This permission is required to collect state-in-time reports.</li></ul>                                                                                                          |

:::note
To access the Office 365 Exchange Online API, click the **APIs my organization uses** tab
on the Request API Permissions pane and search this API by entering its name in the search box.
:::


## Permissions to Audit SharePoint Online

| API | Permissions |
| ---| --- |
| Microsoft Graph | Sites <br /> <ul><li>Sites.Read.All – Read items in all site collections</li><li>Sites.ReadWrite.All – Read and write items in all site collections</li></ul> <br /> Directory <br /><ul><li>Directory.Read.All – Read directory data</li></ul> |
| SharePoint | Sites <br /><ul><li>Sites.FullControl.All – Have full control of all site collections. This permission is required to collect state-in-time reports.</li></ul>                                              |
| Office 365 Management APIs | ActivityFeed <br /><ul><li>ActivityFeed.Read – Read activity data for your organization</li></ul> |

:::note
The Sites.ReadWrite.All permission is only required for SharePoint Online integration (for
example, when you have to save subscriptions to a SharePoint location).
:::


## Permissions to Audit Exchange Online

| API                        | Permissions                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| Office 365 Management APIs | ActivityFeed <br /> <ul><li>ActivityFeed.Read – Read activity data for your organization</li></ul> |
