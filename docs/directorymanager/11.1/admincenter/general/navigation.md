---
title: "Navigate Admin Center in Directory Manager"
description: "Use Quick Search, the top right options, and the menu pane to move around Admin Center and reach Directory Manager settings."
keywords:
  - Admin Center navigation
  - Quick Search
  - Admin Center menu pane
  - Directory Manager Admin Center
sidebar_position: 40
---

# Navigate Admin Center in Directory Manager

When you sign in to Admin Center, you land on the [Monitor Directory Manager with the Admin Center Dashboard](/docs/directorymanager/11.1/admincenter/general/dashboard.md).

Three options help you navigate the application:

- Quick Search
- Top right options
- Menu pane

## Quick Search

The search box is at the top of the page. Use it to go directly to different pages of the application. You can search for Directory Manager settings and configurations.

Quick Search looks up the following in Admin Center:

- Identity stores. Use quick links to go to pages in an identity store, such as workflows, schedules, and security roles.
- SMS gateway accounts
- Directory Manager applications: Directory Manager portals, Data services, and Security services
- Admin Center pages, such as the Replication, Notifications, and Licensing pages
- Admin Center functions, such as restore replication and unlock account. Clicking an action opens the relevant page.

**To perform a search:**

1. In Admin Center, enter a search string in the Search box at the top of the page. A list of matched items appears as you type. For example, as you type 'ta', it shows:

   ![Quick Search results list for the search string ta](/images/directorymanager/11.1/admincenter/general/quick_search.webp)

2. Click **Quick Actions** for an identity store to display the settings available for it. Click an option to go to it.

## Top right options

The top right corner of the application displays the following:

| Icon             | Description                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Help icon        | Click it to launch Admin Center help.                                                                                                                                                                                                                                                                                                                                                     |
| Manage SAML icon | Click it to launch the Authenticate panel, where you can: <ul><li>Set up Directory Manager as a service provider. Directory Manager can integrate with several single sign-on (SSO) solutions that support the SAML 2.0 standard.</li><li>Set up Directory Manager as an identity provider. See the [Directory Manager Authenticate and SAML Single Sign-On](/docs/directorymanager/11.1/authenticate/overview.md) topic.</li></ul> |
| Profile icon     | Displays your profile picture with your name and the identity store that Admin Center is connected to. <br />Click it to launch a menu that displays the Directory Manager version and the security role assigned to you in Directory Manager. The menu also displays options to change your password, access your applications, and sign out of Admin Center.                                  |

## Menu pane

Use the menu pane on the left to go to different functions in Admin Center.

| Menu Option         | Description                                                                                                                                                                                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dashboard           | Displays the latest values for Directory Manager KPIs                                                                                                                                                                                                                                                 |
| Identity Stores     | Displays the identity stores defined in Directory Manager. You can: <ul><li>Create identity stores</li><li>Manage the security roles and settings for an identity store</li><li>Link identity stores</li></ul>                                                                                        |
| Data Sources        | Create and manage data sources to be used as source and destination in Synchronize jobs, in query-based searches, and in group membership queries                                                                                                                                      |
| Replication         | Controls global replication settings that apply to all identity stores                                                                                                                                                                                                                                |
| Notifications       | Displays the queued notifications for all identity stores. It also provides access to the Notification Editor                                                                                                                                                                                         |
| Helpdesk            | Enables helpdesk users to perform password reset, account unlock, and account unenroll operations for identity store users                                                                                                                                                                            |
| Applications        | Create Directory Manager applications, namely: <ul><li>Directory Manager portal</li><li>Data service</li><li>Security service</li></ul> You can also manage the following: <ul><li>Admin Center deployment</li><li>Replication service</li><li>Email service</li><li>Scheduler service</li></ul> |
| History             | Displays history for major actions performed in Admin Center, such as identity store creation, changes to notification templates, and more                                                                                                                                                            |
| SMS Gateways        | Create SMS gateway accounts that Directory Manager uses to send text messages to the users' mobile numbers                                                                                                                                                                              |
| Notification Editor | Lists templates for Directory Manager-generated notifications. These templates apply to all identity stores                                                                                                                                                                                           |
| Settings            | Lets you manage the following: <ul><li>Directory Manager licensing</li><li>Global pool of security questions</li><li>Directory Manager logs</li></ul>                                                                                                                                                 |

**See Also**

- [Change Your Password in Directory Manager](/docs/directorymanager/11.1/admincenter/general/changepassword.md)
- [Switch Accounts in Directory Manager](/docs/directorymanager/11.1/admincenter/general/switchaccount.md)
- [Access Your Applications in Directory Manager](/docs/directorymanager/11.1/admincenter/general/accessapplications.md)
