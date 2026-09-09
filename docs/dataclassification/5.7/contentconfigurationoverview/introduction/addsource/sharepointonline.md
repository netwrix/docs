---
title: "SharePoint Online"
description: "SharePoint Online"
sidebar_position: 100
---

# SharePoint Online

Office 365 customers can configure the collector service to automatically detect and queue their
employees SharePoint Online sites hosted in Office 365. You must supply an account with Tenant
administration rights and set how often the service detects new SharePoint Online sites. You can
also provide a filter expression to include certain SharePoint Online paths and exclude others as
required.

Optionally, you can set up the resources needed to enable and configure Netwrix Data
Classification on the detected SharePoint Online sites. Templating allows
an administrator to preconfigure classification settings for site collections. For more
information, review the associated templating guide.

To crawl the data within SharePoint Online, you need to enable Multi-Factor Authentication:

- [Accessing SharePoint Online Using Modern Authentication](/docs/dataclassification/5.7/introduction/introduction/spomodernauth.md)

![addsharepointonline_thumb_0_0](/images/dataclassification/5.7/admin/sources/sharepoint/addsharepointonline_thumb_0_0.webp)

Complete the following fields:

| Option                  | Description                                                                                                                                                                                                                                                 |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Cloud Environment | Select the Azure instance hosting the Exchange Online server. |
| Username                | Enter username in the following formats: DOMAIN\USERNAME and USERNAME@DOMAIN.                                                                                                                                                                               |
| Password                | Enter your password for SharePoint Online.                                                                                                                                                                                                                   |
| Match Rules             | Enter the site collections' path for crawling the documents. You must include at least one match rule. Match rules are regular expressions, for example, https:\/\/example.sharepoint.com\/sites\/.                                                         |
| Classification template | Specify the required Classification template for writing classifications. See the [Enable Write Classifications](/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/enablewriteclassifications.md) and [Working with SharePoint templates](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/manage/introduction/workwithtemplates.md) topics for more information. |
| Detection Period        | Specify how often you will detect new site collections. Default period is 1 day.                                                                                                                                                              |

After configuring the settings, click the **Save** button.
