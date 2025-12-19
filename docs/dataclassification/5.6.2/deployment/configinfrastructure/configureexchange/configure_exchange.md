---
title: "Microsoft Exchange"
description: "Configure Microsoft Exchange for Crawling and Classification"
sidebar_position: 30
---

# Configure Microsoft Exchange for Crawling and Classification

When preparing your Exchange Server for data classification, consider that for on-premise Exchange
Server, Basic authentication is supported for crawling account, and for Exchange Online you can use
either Modern authentication or Basic authentication. Both scenarios are described in the sections
below.

## Basic Authentication

This method is supported for Exchange Online and on-premise Exchange organizations. You should
configure sufficient permissions that will allow the crawling account to impersonate the mailboxes
that you wish to crawl. This requires the setup of two permissions:

- ApplicationImpersonation—Allows the crawling account to impersonate each of the mailboxes / users
  configured for collection
- Mailbox Search—Allows the crawling account to enumerate mailboxes (automatic discovery of
  mailboxes)

Review the related procedure that corresponds to your Exchange deployment:

- [Exchange Online](#exchange-online)
- [Exchange Server (On-Premise)](#exchange-server-on-premise)

### Exchange Online

1. Log in to the [Office 365 Exchange Admin Portal.](https://outlook.office365.com/ecp/)
2. Go to Roles > **Role Assignments** > **Exchange**.
3. Select **Add new role**.
4. In the Set up basics step, enter the Name and Description '_NetwrixCrawlerImpersonation_' .
   Select **Next**.
5. On the **Add Permission** step, select ApplicationImpersonation and Mailbox Search permissions.
   Select **Next**.

    ![exchange_assign_roles](/images/dataclassification/5.6.2/config_infrastructure/exchange_assign_roles.webp)

6. Select the users to assign to this role group. They will have permissions to manage the roles
   that you assigned in the previous step.
7. Finish adding the permissions by selecting _**_Add role group__**.

## Exchange Server (On-Premise)

1. Log in to one of the Exchange servers (RDP).
2. Open a Powershell window.
3. Run the following commands (replacing ADMINUSERNAME with the username of your crawling account):

    New-ManagementRoleAssignment –Name "NetwrixCrawlerImpersonation" –Role
    "ApplicationImpersonation" –User ADMINUSERNAME

    New-ManagementRoleAssignment –Name "NetwrixCrawlerSearch" –Role "Mailbox Search" –User
    ADMINUSERNAME

**NOTE:** If crawling Microsoft Office 365 for Small Business or many hosted Exchange systems, then
it is not possible to setup Application Impersonation.

## Modern Authentication

Starting with version 5.5.3, Netwrix Data Classification allows for crawling Microsoft Exchange
Online organization mailboxes using Modern authentication. For that, it uses an Azure AD application
which can leverage Microsoft API to connect to Exchange Online organization.

**NOTE:** You need to use an admin user name with Modern Authentication.

You should configure sufficient permissions that will allow the crawling account to impersonate the
mailboxes that you wish to crawl. This requires the setup of two permissions:

- ApplicationImpersonation—Allows the crawling account to impersonate each of the mailboxes / users
  configured for collection
- Mailbox Search—Allows the crawling account to enumerate mailboxes (automatic discovery of
  mailboxes)

If you plan to implement the scenario that involves modern authentication, you should do the
following:

1. [Create Azure AD app for Modern Authentication](/docs/dataclassification/5.6.2/deployment/configinfrastructure/configureexchange/create_azureapp_exchangeonline_mfa.md)
2. Configure
   [Exchange Server](/docs/dataclassification/5.6.2/contentconfigurationoverview/sourcesintro/addingsource/exchange_server.md)
   source settings.
