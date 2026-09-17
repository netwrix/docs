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

### Exchange Server (On-Premise)

1. Log in to one of the Exchange servers (RDP).
2. Open a Powershell window.
3. Run the following commands (replacing ADMINUSERNAME with the username of your crawling account):

    New-ManagementRoleAssignment –Name "NetwrixCrawlerImpersonation" –Role
    "ApplicationImpersonation" –User ADMINUSERNAME

    New-ManagementRoleAssignment –Name "NetwrixCrawlerSearch" –Role "Mailbox Search" –User
    ADMINUSERNAME

## Modern Authentication

Starting with version 5.5.3, Netwrix Data Classification can crawl Microsoft Exchange
Online organization mailboxes using Modern authentication. For that, it uses an Azure AD application
that connects to the Exchange Online organization through the Microsoft API.

:::note
To access Exchange using Modern Authentication, you need to use an admin username.
:::

Configure sufficient permissions that allow the crawling account to access and read the
mailboxes that you want to crawl. The permissions required depend on whether you are using the Exchange Web Services (EWS) or Graph source types.

To use the Graph source types, you must grant the following permissions:

- Mail.Read—Allows the application to read the full contents of all mailboxes
- Mail.ReadWrite—Allows the application to move and delete mail in all mailboxes - necessary for the Exchange workflow actions
- User.Read.All—Allows the application to discover all users associated with an Exchange Online server

To use the EWS source types, you must grant the following permissions:

- ApplicationImpersonation—Allows the crawling account to impersonate each of the mailboxes / users
  configured for collection
- Mailbox Search—Allows the crawling account to enumerate mailboxes (automatic discovery of
  mailboxes)

If you plan to use modern authentication, do the following:

1. [Create Azure AD app for Modern Authentication](/docs/dataclassification/5.7/introduction/introduction/exchange/azureappexchangeonlinemfa.md)
2. Configure source settings for one or more of the following:
  - [Exchange Server (Graph)](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/exchangeservergraph.md) 
  - [Exchange Server (EWS)](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/exchangeserverews.md)
  - [Exchange Mailbox (Graph)](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/exchangemailboxgraph.md) 
  - [Exchange Mailbox (EWS)](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/exchangemailboxews.md)
