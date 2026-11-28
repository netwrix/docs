---
title: "Navigate Admin Center in GroupID"
description: "Use Quick Search, the top right options, and the menu pane to move around Admin Center and reach GroupID settings."
keywords:
  - Admin Center navigation
  - Quick Search
  - Admin Center menu pane
  - GroupID Admin Center
sidebar_position: 20
---

# Navigate Admin Center in GroupID

When you sign in to Admin Center, you land on the [Monitor GroupID with the Admin Center Dashboard](/docs/directorymanager/11.0/signin/concepts/dashboard.md).

Use the following to navigate the application:

- [Quick Search](#quick-search)
- [Top Right Options](#top-right-options)
- [Menu Pane](#menu-pane)

## Quick Search

The search box is displayed at the top. Use it to perform a quick search and directly navigate to
different pages of the application. You can search for GroupID settings and configurations, and
directly navigate to your required pages.

When you perform a search, it looks up the following in Admin Center:

- Identity stores - You can use quick links to navigate to different pages in an identity store,
  such as workflows, schedules, and security roles.
- SMS gateway accounts
- GroupID applications - GroupID portals, Data services, Security services, and Mobile services
- Admin Center pages, such as the Replication, Notifications, and Licensing pages
- Admin Center functions, such as restore replication and unlock account. Clicking an action
  redirects you to the relevant page.

**To perform a search:**

1. In Admin Center, enter a search string in the Search box at the top of the page.
   A list of matched items is displayed as you type. For example, as you type 'ta', it shows:

    ![Quick Search results list for the search string ta](/images/directorymanager/11.0/admincenter/general/quick_search.webp)

2. Click **Quick Actions** for an identity store to display the settings available for it.
   Click an option to navigate to it.

## Top Right Options

The top right corner of the application displays the following:

| Icon             | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Help icon        | Click it to launch Admin Center help.                                                                                                                                                                                                                                                                                                          |
| Manage SAML icon | Click it to launch the Authenticate panel, where you can: <ul><li>Set up GroupID as a service provider. GroupID can integrate with several single sign-on (SSO) solutions that support the SAML 2.0 standard.</li><li>Set up GroupID as an identity provider. See the [GroupID Authenticate and SAML Single Sign-On](/docs/directorymanager/11.0/authenticate/overview.md) topic.</li></ul> |
| Profile icon     | Displays your profile picture with your name and the identity store that Admin Center is connected to. <br />Click it to launch a menu that displays the GroupID version and the security role assigned to you in GroupID. The menu also displays options to change your password, access your applications, and sign out of Admin Center.           |

## Menu Pane

Use the menu pane on the left to navigate to different functions in Admin Center.

| Menu Option         | Description                                                                                                                                                                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dashboard           | Displays the latest values for GroupID KPIs.                                                                                                                                                                                                                                |
| Identity Stores     | Displays the identity stores defined in GroupID. You can: <ul><li>Create identity stores</li><li>Manage the security roles and settings for an identity store</li><li>Link identity stores</li></ul>                                                                                                    |
| Data Sources        | Create and manage data sources to be used as source and destination in Synchronize jobs, in query-based searches, and in group membership queries.                                                                                                           |
| Replication         | Controls global replication settings that apply to all identity stores.                                                                                                                                                                                                     |
| Notifications       | Displays the queued notifications for all identity stores. It also provides access to the Notification Editor.                                                                                                                                                              |
| Helpdesk            | Enables helpdesk users to perform password reset, account unlock, and account unenroll operations for identity store users.                                                                                                                                                 |
| Applications        | Create GroupID applications, namely: <ul><li>GroupID portal</li><li>Data service</li><li>Security service</li><li>Mobile service (for the GroupID mobile app)</li></ul> You can also manage the following: <ul><li>Admin Center deployment</li><li>Replication service</li><li>Email service</li><li>Scheduler service</li></ul> |
| History             | Displays history for major actions performed in Admin Center, such as identity store creation, changes to notification templates, and more.                                                                                                                                 |
| SMS Gateways        | Create SMS gateway accounts that GroupID uses to send text messages to the users' mobile numbers.                                                                                                                                                             |
| Notification Editor | Lists templates for GroupID-generated notifications. These templates apply to all identity stores.                                                                                                                                                                          |
| Settings            | Lets you manage the following: <ul><li>GroupID licensing</li><li>Global pool of security questions</li><li>GroupID logs</li></ul>                                                                                                                                                                       |

**See Also**

- [Monitor GroupID with the Admin Center Dashboard](/docs/directorymanager/11.0/signin/concepts/dashboard.md)
- [Change Your Password in GroupID](/docs/directorymanager/11.0/signin/concepts/changepassword.md)
- [Switch Accounts in GroupID](/docs/directorymanager/11.0/signin/concepts/switchaccount.md)
- [Access Your Applications in GroupID](/docs/directorymanager/11.0/signin/concepts/accessapplications.md)
