---
title: "Configure the Product to Crawl an Entire SharePoint Online Tenancy"
description: "Configure the Product to Crawl an Entire SharePoint Online Tenancy"
sidebar_position: 80
---

# Configure the Product to Crawl an Entire SharePoint Online Tenancy

Typically SharePoint environments are crawled on a per-site-collection basis. Sometimes you need to crawl an entire SharePoint Online tenancy. The following guide details how to configure a tenancy for collection.

1. Add SharePoint Online source as described in the
   [SharePoint Online](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/sharepointonline.md) section.

    :::note
    If this option isn't available within the source type selection then it would suggest
    that the source type isn't licensed, contact support for more details.
    :::


2. The Source is configured to the tenancy level, therefore specify the URL as the
   root site collection URL. This is however not a requirement if you don't have a root site
   collection.
3. Specify an account with tenancy administration rights. Accounts can be specified in either the
   default AD format _DOMAIN\USERNAME_, or in the format of the user's email address
   _USERNAME@DOMAIN_.
4. The Match Rules are an important configuration option, defining which site collections will be
   crawled. Here are some example match rules that may be required:

    - `.*\/Personal\/.*`—Identifying "/personal/" within the URL (as in the following example) - this
      would be the correct configuration to crawl end-user's OneDrive site collections (OneDrive for
      Business)
    - `.*`— Identifies any site collections, ensuring that all collections will be crawled

5. Define the required Classification Template, as well as the Detection Period which defines how
   often new site collections are detected
6. Select Save.
