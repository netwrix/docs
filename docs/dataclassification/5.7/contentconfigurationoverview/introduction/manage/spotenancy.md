---
title: "Configure the Product to Crawl an Entire SharePoint Online Tenancy"
description: "Configure the Product to Crawl an Entire SharePoint Online Tenancy"
sidebar_position: 80
---

# Configure the Product to Crawl an Entire SharePoint Online Tenancy

Typically SharePoint environments are crawled on a per site collection basis. Sometimes however
there is a need to crawl an entire SharePoint Online tenancy. The following guide details the
step-by-step instructions in order to configure a whole tenancy for collection.

1. Add SharePoint Online source as described in the
   [SharePoint Online](/docs/dataclassification/5.7/contentconfigurationoverview/introduction/addsource/sharepointonline.md) section.

    :::note
    If this option is not available within the source type selection then it would suggest
    that the source type is not currently licensed, please contact support for more details.
    :::


2. The Source is configured to the tenancy level, therefore we recommend specifying the URL as the
   root site collection URL. This is however not a requirement if you do not have a root site
   collection.
3. Specify an account with tenancy administration rights. Accounts can be specified in either the
   default AD format _DOMAIN\USERNAME_, or in the format of the user's email address
   _USERNAME@DOMAIN_.
4. The Match Rules are an important configuration option, defining which site collections will be
   crawled. Here are some example match rules that may be required:

    - `.*\/Personal\/.*`—Identifying "/personal/" within the URL (as per the below example) - this
      would be the correct configuration to crawl end-user's OneDrive site collections (OneDrive for
      Business)
    - `.*`— Identifies any site collections, ensuring that all collections will be crawled

5. Define the required Classification Template, as well as the Detection Period which defines how
   often we will detect new site collections
6. Select Save.
