---
title: "Exchange Server (Graph)"
description: "Exchange Server (Graph)"
sidebar_position: 40
---

# Exchange Server (Graph)

Use the Exchange Server (Graph) source configuration screen to crawl and classify
multiple Exchange mailboxes from the same Exchange server.

You can use Match Rules to include or exclude specific mailboxes.

To configure an Exchange Server (Graph) source:

**Step 1 –** In Netwrix Data Classification management console, open the **Sources** view and click
**Add**.

**Step 2 –** Select **Exchange (Graph)** source type and in the properties window specify the necessary
settings.

**Step 3 –** Remember to click the "wrench" icon next to **Settings** in the bottom-left corner to
display all settings.

## Authentication 

You must specify the following:

| Option                 | Description                                                                                                                                                                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Admin Username         | Specify the administrative account for the required Exchange Online organization. The user must have a mailbox connected to it to crawl Exchange.                                                                                                                                             |
| Tenant ID              | Enter the **Tenant ID** you obtained at [Step 5: Obtain Tenant ID](/docs/dataclassification/5.7/introduction/introduction/exchange/azureappexchangeonlinemfa.md#step-5-obtain-tenant-id).                                                                                                                                  |
| Certificate thumbprint | Enter the certificate thumbprint you prepared at [Step 4: Configure Certificates & secrets](/docs/dataclassification/5.7/introduction/introduction/exchange/azureappexchangeonlinemfa.md).                                                                                                                                 |
| Application ID         | Enter the app ID you got at application registration at [Step 2: Create and Register a new app in Azure AD](/docs/dataclassification/5.7/introduction/introduction/exchange/azureappexchangeonlinemfa.md#step-2-create-and-register-a-new-app-in-azure-ad) (you can find it in the Azure AD app properties >**Overview**). |

![exchangeonline_cfg_modern_auth_thumb_0_0](/images/dataclassification/5.7/admin/sources/exchangemailbox/exchangeonline_cfg_modern_auth_thumb_0_0.webp)

## Other configuration settings

The following settings are also required:

| Option           | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cloud Environment | Select the Azure instance hosting the Exchange Online server. |
| Crawl Range      | Define which portions of data to retrieve from the Exchange server: <ul><li>Select **Date Range** to crawl a static set of data within the required interval.</li><li>Select **Since** if you want to periodically re-crawl content from the specified date, taking into account the last crawl date for each artifact.</li></ul>                                          |
| Match Rules      | Define which mailboxes to crawl as part of an Exchange Server source. Examples: 1. `.*@netwrix.com`— enter the wildcard (\*) and the domain (here `netwrix.com`) to restrict crawling to a set of domain mailboxes 2. `.*`—enter to crawl all mailboxes                                                                                                   |
| Detection Period | Specify how often to check the source for changes. Default period is 1 day.                                                                                                                                                                                                                                                                                              |


After specifying all the necessary settings, click **Save**.
