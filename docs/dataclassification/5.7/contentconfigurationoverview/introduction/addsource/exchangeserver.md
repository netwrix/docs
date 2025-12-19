---
title: "Exchange Server"
description: "Exchange Server"
sidebar_position: 40
---

# Exchange Server

The Exchange Server source configuration screen allows you to enable the crawling and classification
of multiple Exchange mailboxes from the same Exchange server.

**IMPORTANT!** Automatic detection, crawling and classification of multiple Exchange mailboxes from
the same Exchange server (and, respectively, _Exchange Server_ content source configuration) is only
supported for Exchange Server 2013 or later due to limitations in the Microsoft APIs. For earlier
versions, consider using _Exchange Mailbox_ content source.

You can use Match Rules to include and exclude the certain mailboxes.

Follow the steps to configure an Exchange Server source.

**Step 1 –** In Netwrix Data Classification management console, open the **Sources** view and click
**Add**.

**Step 2 –** Select **Exchange** source type and in the properties window specify the necessary
settings.

**Step 3 –** Remember to click the "wrench" icon next to **Settings** in the bottom-left corner to
display all settings.

## Authentication type: Modern authentication

:::note
For Email Address / Password, the Administrator account that has been assigned the right
of the Discovery Management role and be given the Mailbox Search and MailboxSearchApplication
permissions.
:::


If you plan to use this authentication type, specify the following:

| Option                 | Description                                                                                                                                                                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authentication type    | Select **Modern (Exchange Online)**                                                                                                                                                                                                                                                                    |
| Admin Username         | Specify the administrative account for the required Exchange Online organization. The user must have a mailbox connected to it in order to crawl Exchange.                                                                                                                                             |
| Tenant ID              | Enter the **Tenant ID** you obtained at [Step 5: Obtain Tenant ID](/docs/dataclassification/5.7/introduction/introduction/exchange/azureappexchangeonlinemfa.md#step-5-obtain-tenant-id).                                                                                                                                  |
| Certificate thumbprint | Enter the certificate thumbprint you prepared at [Step 4: Configure Certificates & secrets](/docs/dataclassification/5.7/introduction/introduction/exchange/azureappexchangeonlinemfa.md).                                                                                                                                 |
| Application ID         | Enter the app ID you got at application registration at [Step 2: Create and Register a new app in Azure AD](/docs/dataclassification/5.7/introduction/introduction/exchange/azureappexchangeonlinemfa.md#step-2-create-and-register-a-new-app-in-azure-ad) (it can be found in the Azure AD app properties >**Overview**). |

![exchangeonline_cfg_modern_auth_thumb_0_0](/images/dataclassification/5.7/admin/sources/exchangemailbox/exchangeonline_cfg_modern_auth_thumb_0_0.webp)

## Authentication type: Basic

If you plan to use this authentication type, you will need to specify the following:

| Option                   | Description                                                                                                                                                                                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Email Address / Password | Administrator account that has been assigned the right of Impersonation as well as the Discovery Management role. See [Configure Microsoft Exchange for Crawling and Classification](/docs/dataclassification/5.7/introduction/introduction/exchange/exchange.md) for details on the rights assignment. |

## Other configuration settings

The following settings are also required in both cases:

| Option           | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exchange API URL | By default, the crawling engine will attempt to locate the necessary URL of Exchange Web Services API by using the _Exchange AutoDiscover_ functionality. So, typically, you can leave this field blank. If, however, the _Exchange AutoDiscover_ is not available, then you should specify the Exchange API URL explicitly as follows: `https://<servername>/EWS/Exchange.asmx`. |
| Crawl Range      | Define what portions of data should be retrieved from the Exchange server: <ul><li>Select **Date Range** to crawl a static set of data within the required interval.</li><li>Select **Since** if you want to periodically re-crawl content from the specified date, taking into account the last crawl date for each artifact.</li></ul>                                          |
| Match Rules      | Define which mailboxes will be crawled as part of an Exchange Server source. Examples: 1. `.*@netwrix.com`— enter the wildcard (\*) and the domain (here `netwrix.com`) to restrict crawling to a set of domain mailboxes 2. `.*`—enter if you want all mailboxes to be crawled                                                                                                   |
| Detection Period | Specify how often the source should be checked for changes. Default period is 1 day.                                                                                                                                                                                                                                                                                              |


Having specified all the necessary settings, click the **Save** button.
