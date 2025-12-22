---
title: "Navigation"
description: "Navigation"
sidebar_position: 20
---

# Navigation

On signing into Admin Center, you land on the dashboard.

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
- Admin Center pages, such as the Replication, Notifications and Licensing pages
- Admin Center functions, such as restore replication, unlock account, etc. Clicking an action
  redirects you to the relevant page.

**To perform a search:**

1. In Admin Center, enter a search string in the Search box at the top of the page.
   A list of matched items is displayed as you type. For example, as you type ‘ta’, it shows:

    ![quick_search](/images/directorymanager/11.0/admincenter/general/quick_search.webp)

2. On clicking **Quick Actions** for an identity store, it displays the settings available for the
   identity store. Click an option to navigate to it.

## Top Right Options

The top right corner of the application displays the following:

| Icon             | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Help icon        | Click it to launch Admin Center help.                                                                                                                                                                                                                                                                                                          |
| Manage SAML icon | Click it to launch the Authenticate panel, where you can: - Set up GroupID as a service provider. GroupID can integrate with several single sign-on (SSO) solutions that support the SAML 2.0 standard. - Set up GroupID as an identity provider. See the [Authenticate](/docs/directorymanager/11.0/authenticate/overview.md) topic. |
| Profile icon     | Displays your profile picture with your name and the identity store that Admin Center is connected to. Click it to launch a menu that displays the GroupID version and the security role assigned to you in GroupID. The menu also displays options to change your password, access your applications, and sign out of Admin Center.           |

## Menu Pane

The menu pane in the left enables you to navigate to different functions in Admin Center.

| Menu Option         | Description                                                                                                                                                                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dashboard           | Displays the latest values for GroupID KPIs.                                                                                                                                                                                                                                |
| Identity Stores     | Displays the identity stores defined in GroupID. You can: - Create identity stores - Manage the security roles and settings for an identity store - Link identity stores                                                                                                    |
| Data Sources        | Enables you to create and manage data sources to be used as source and destination in Synchronize jobs, in query-based searches, and in group membership queries.                                                                                                           |
| Replication         | Controls global replication settings that apply to all identity stores.                                                                                                                                                                                                     |
| Notifications       | Displays the queued notifications for all identity stores. It also provides access to the Notification Editor.                                                                                                                                                              |
| Helpdesk            | Enables helpdesk users to perform password reset, account unlock, and account unenroll operations for identity store users.                                                                                                                                                 |
| Applications        | Enables you to create GroupID applications, namely: - GroupID portal - Data service - Security service - Mobile service (for the GroupID mobile app) You can also manage the following: - Admin Center deployment - Replication service - Email service - Scheduler service |
| History             | Displays history for major actions performed in Admin Center, such as identity store creation, changes to notification templates, and more.                                                                                                                                 |
| SMS Gateways        | Allows you to create SMS gateway accounts that GroupID uses to send text messages to the users’ mobile numbers.                                                                                                                                                             |
| Notification Editor | Lists templates for GroupID-generated notifications. These templates apply to all identity stores.                                                                                                                                                                          |
| Settings            | Lets you manage the following: - GroupID licensing - Global pool of security questions - GroupID logs                                                                                                                                                                       |

**See Also**

- [Dashboard](/docs/directorymanager/11.0/signin/concepts/dashboard.md)
- [Change your Password](/docs/directorymanager/11.0/signin/concepts/changepassword.md)
- [Switch Accounts](/docs/directorymanager/11.0/signin/concepts/switchaccount.md)
- [Access your Applications](/docs/directorymanager/11.0/signin/concepts/accessapplications.md)
