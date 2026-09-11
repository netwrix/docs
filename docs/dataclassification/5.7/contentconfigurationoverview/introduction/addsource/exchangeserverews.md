---
title: "Exchange Server (EWS)"
description: "Exchange Server (EWS)"
sidebar_position: 40
---

# Exchange Server (EWS)

Use the Exchange Server (EWS) source configuration screen to crawl and classify
multiple Exchange mailboxes from the same Exchange server, using the Exchange Web Services (EWS).

:::note
Automatic detection, crawling, and classification of multiple Exchange mailboxes from
the same Exchange server—and therefore the _Exchange Server (EWS)_ content source—works
only with Exchange Server 2013 or later, due to limitations in the Microsoft APIs. For earlier
versions, consider using the _Exchange Mailbox (EWS)_ content source.
:::

You can use Match Rules to include or exclude specific mailboxes.

To configure an Exchange Server (EWS) source, follow these steps.

**Step 1 –** In Netwrix Data Classification management console, open the **Sources** view and click
**Add**.

**Step 2 –** Select the **Exchange Server (EWS)** source type and in the properties window specify the necessary
settings.

**Step 3 –**  To display all settings, click the "wrench" icon next to Settings in the bottom-left corner.

## Authentication type: Modern authentication



If you plan to use this authentication type, specify the following:

| Option                 | Description                                                                                                                                                                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authentication type    | Select **Modern (O365)**                                                                                                                                                                                                                                                                    |
| Admin Username         | Specify the administrative account for the required Exchange Online organization. The user must have a mailbox connected to it to crawl Exchange.                                                                                                                                             |
| Tenant ID              | Enter the **Tenant ID** you obtained at [Step 5: Obtain Tenant ID](/docs/dataclassification/5.7/introduction/introduction/exchange/azureappexchangeonlinemfa.md#step-5-obtain-tenant-id).                                                                                                                                  |
| Certificate thumbprint | Enter the certificate thumbprint you prepared at [Step 4: Configure Certificates & secrets](/docs/dataclassification/5.7/introduction/introduction/exchange/azureappexchangeonlinemfa.md).                                                                                                                                 |
| Application ID         | Enter the app ID you got at application registration at [Step 2: Create and Register a new app in Azure AD](/docs/dataclassification/5.7/introduction/introduction/exchange/azureappexchangeonlinemfa.md#step-2-create-and-register-a-new-app-in-azure-ad) (you can find it in the Azure AD app properties >**Overview**). |

![exchangeonline_cfg_modern_auth_thumb_0_0](/images/dataclassification/5.7/admin/sources/exchangemailbox/exchangeonline_cfg_modern_auth_thumb_0_0.webp)

## Authentication type: Basic

:::note
For Email Address / Password, use an Administrator account that has the Discovery Management
role and the Mailbox Search and MailboxSearchApplication permissions.
:::

To use this authentication type, specify the following:

| Option                   | Description                                                                                                                                                                                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Email Address / Password | Administrator account with the Impersonation right and the Discovery Management role. See [Configure Microsoft Exchange for Crawling and Classification](/docs/dataclassification/5.7/introduction/introduction/exchange/exchange.md) for details on the rights assignment. |

## Other configuration settings

The following settings are also required in both cases:

| Option           | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exchange API URL | By default, the crawling engine uses the _Exchange AutoDiscover_ functionality to locate the Exchange Web Services API URL, so you can typically leave this field blank. If _Exchange AutoDiscover_ isn't available, specify the Exchange API URL explicitly: `https://<servername>/EWS/Exchange.asmx`. |
| Crawl Range      | Define which portions of data to retrieve from the Exchange server: <ul><li>Select **Date Range** to crawl a static set of data within the required interval.</li><li>Select **Since** if you want to periodically re-crawl content from the specified date, taking into account the last crawl date for each artifact.</li></ul>                                          |
| Match Rules      | Define which mailboxes to crawl as part of an Exchange Server source. Examples: 1. `.*@netwrix.com`— enter the wildcard (\*) and the domain (here `netwrix.com`) to restrict crawling to a set of domain mailboxes 2. `.*`—enter to crawl all mailboxes                                                                                                   |
| Detection Period | Specify how often to check the source for changes. Default period is 1 day.                                                                                                                                                                                                                                                                                              |


After specifying all the necessary settings, click **Save**.
