---
title: "Configure Microsoft Exchange for Crawling and Classification"
description: "Configure Microsoft Exchange for Crawling and Classification"
sidebar_position: 30
---

# Configure Microsoft Exchange for Crawling and Classification

When preparing your Exchange Server for data classification:

:::note
On-premise Exchange servers support Basic authentication for crawling accounts, while Exchange Online requires Modern authentication. The following sections describe both scenarios.
:::

## Basic Authentication

On-premise Exchange servers support this method. Configure sufficient permissions that allow the
crawling account to impersonate the mailboxes that you want to crawl. This requires two
permissions:

- ApplicationImpersonation—Allows the crawling account to impersonate each of the mailboxes / users
  configured for collection
- Mailbox Search—Allows the crawling account to enumerate mailboxes (automatic discovery of
  mailboxes)


### Exchange Online

**Step 1 –** Log in to the
[Office 365 Exchange Admin Portal](https://admin.microsoft.com/Adminportal/Home?source=applauncher#office-365-exchange-admin-portal)[.](https://admin.microsoft.com/Adminportal/Home?source=applauncher#)

**Step 2 –** Go to Roles > **Role Assignments** > **Exchange**.

**Step 3 –** Select **Add new role**.

**Step 4 –** In the Set up basics step, enter the Name and Description
'_NetwrixCrawlerImpersonation_'. Click **Next**.

**Step 5 –** On the **Add Permission** step, select the Microsoft.Graph Mail.Read, Mail.ReadWrite, and User.Read.All
permissions. Click **Next**.

**Step 6 –** Select the users to assign to this role group. They will have permissions to manage the
roles that you assigned in the previous step.

**Step 7 –** Finish adding the permissions by selecting \_**\_Add role group\_\_**.

**Step 8 –** Go to the **DiscoveryManagement** Role.

**Step 9 –** Add your user as a member and/or assign your user for Modern Authentication set up to
this Role as well.

## Exchange Server (On-Premise)

1. Log in to one of the Exchange servers (RDP).
2. Open a Powershell window.
3. Run the following commands (replacing ADMINUSERNAME with the username of your crawling account):

    New-ManagementRoleAssignment –Name "NetwrixCrawlerImpersonation" –Role
    "ApplicationImpersonation" –User ADMINUSERNAME

    New-ManagementRoleAssignment –Name "NetwrixCrawlerSearch" –Role "Mailbox Search" –User
    ADMINUSERNAME

:::note
If you crawl Microsoft Office 365 for Small Business or many hosted Exchange systems, you can't
set up Application Impersonation.
:::


## Modern Authentication

Starting with version 5.5.3, Netwrix Data Classification allows for crawling Microsoft Exchange
Online organization mailboxes using Modern authentication. For that, it uses an Azure AD application
that connects to the Exchange Online organization through the Microsoft API.

:::note
To access Exchange using Modern Authentication, you need to use an admin username.
:::

Configure sufficient permissions that allow the crawling account to access and read the
mailboxes that you want to crawl. The permissions required differ between the EWS and Graph implementations.

To use the Graph implementation, you must grant the following permissions:

- Mail.Read-Allows the application to read the full contents of all mailboxes
- Mail.ReadWrite—Allows the application to move and delete mail in all mailboxes - necessary for the Exchange workflow actions
- User.Read.All—Allows the application to discover all users associated with an Exchange Online server

To use the EWS implementation, you must grant the following permissions:

- ApplicationImpersonation—Allows the crawling account to impersonate each of the mailboxes / users
  configured for collection
- Mailbox Search—Allows the crawling account to enumerate mailboxes (automatic discovery of
  mailboxes)

If you plan to use modern authentication, do the following:

1. [Create Azure AD app for Modern Authentication](/docs/dataclassification/5.7/introduction/introduction/exchange/azureappexchangeonlinemfa.md)
2. Configure [Exchange Server (Graph)](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/exchangeservergraph.md) 
 or [Exchange Server (EWS)](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/exchangeserverews.md) source settings.
