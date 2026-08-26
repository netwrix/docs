---
title: "Crawling SharePoint Online Tenancy"
description: "Configure the Product to Crawl an Entire SharePoint Online Tenancy"
sidebar_position: 80
---

# Configure the Product to Crawl an Entire SharePoint Online Tenancy

Typically SharePoint environments are crawled per site collection. Sometimes you need to crawl an entire SharePoint Online tenancy. The following guide details step-by-step instructions for configuring a tenancy for crawling.

1. Add SharePoint Online source as described in the
   [SharePoint Online](/docs/dataclassification/5.6.2/contentconfigurationoverview/sourcesintro/addingsource/sharepoint_online.md)
   section.

    **NOTE:** If this option isn't available within the source type selection, it suggests
    that the source type isn't licensed. Contact support for details.

2. Configure the Source at the tenancy level. Specify the URL as the root site collection URL if available,
   though this isn't required if you don't have a root site collection.
3. Specify an account with tenancy administration rights. Accounts can be specified in either the
   default AD format _DOMAIN\USERNAME_, or in the format of the user's email address
   _USERNAME@DOMAIN_.
4. The Match Rules are an important configuration option, defining which site collections will be
   crawled. Here are some example match rules that may be required:

    - `.*\/Personal\/.*`—Identifying "/personal/" within the URL (as per the below example) - this
      would be the correct configuration to crawl end-user's OneDrive site collections (OneDrive for
      Business)
    - `.*`— Identifies any site collections, ensuring that all collections will be crawled

5. Define the required Classification Template and Detection Period, which sets how
   often new site collections are detected
6. Select Save.
