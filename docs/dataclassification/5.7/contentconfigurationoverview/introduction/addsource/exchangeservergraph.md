---
title: "Exchange Server (Graph)"
description: "Exchange Server (Graph)"
sidebar_position: 45
---

# Exchange Server (Graph)

Use the Exchange Server (Graph) source configuration screen to crawl and classify
multiple Exchange mailboxes in the same tenant. The Graph source type connects only to Exchange Online. To crawl mailboxes on an on-premises Exchange server, use Exchange Server (EWS).

You can use Match Rules to include or exclude specific mailboxes.

To configure an Exchange Server (Graph) source, follow these steps.

**Step 1 –** In Netwrix Data Classification management console, open the **Sources** view and click
**Add**.

**Step 2 –** Select **Exchange Server (Graph)** source type and in the properties window specify the necessary
settings.

**Step 3 –** To display all settings, click the "wrench" icon next to Settings in the bottom-left corner.

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

Specify the following settings:

| Option           | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cloud Environment | Select the Azure instance hosting the Exchange Online tenancy. |
| Crawl Range      | Define which portions of data to retrieve from Exchange Online: <ul><li>Select **Date Range** to crawl a static set of data within the required interval.</li><li>Select **Since** if you want to periodically re-crawl content from the specified date, taking into account the last crawl date for each artifact.</li></ul>                                          |
| Match Rules      | Define rules with wildcards to limit which mailboxes the product crawls. Examples: 1. `.*@netwrix.com`— enter the wildcard (\*) and the domain (here `netwrix.com`) to restrict crawling to a set of domain mailboxes 2. `.*`—enter to crawl all mailboxes. You must define at least one match rule.                                                                                                   |
| Detection Period | Specify how often to check the source for changes. Default period is 1 day.                                                                                                                                                                                                                                                                                              |


After specifying all the necessary settings, click **Save**.
