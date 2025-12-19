---
title: "Installation & Configuration Overview"
description: "Installation & Configuration Overview"
sidebar_position: 10
---

# Installation & Configuration Overview

This section provides instructions for installing Access Analyzer and the initial configuration
required when first launching the Access Analyzer Console. It also includes additional information,
such as how to secure the Access Analyzer Database, and configuring the Web Console for viewing
reports outside of the Access Analyzer Console.

Prior to installing Access Analyzer, please ensure that all of the prerequisites have been met. See
the [Requirements](/docs/accessanalyzer/12.0/requirements/overview.md) topic for more information.

## Binaries

There are a variety of Access Analyzer binaries based on the organizational auditing objectives.
Your Netwrix Representative will provide the appropriate binaries.

- Access Analyzer binary – Core installation package

    - Includes data collectors, analysis modules, and action modules
    - An organization’s license key, needed during installation, controls which components are laid
      down during installation
    - If your license includes Sensitive Data Discovery (SDD), the necessary SDD components are
      installed
    - Installs the Web Console

- File System Proxy binary – Installation package for the File System Proxy Scanning option

    - If your license includes Sensitive Data Discovery (SDD), the necessary SDD components are
      installed
    - See the [File System Proxy Service Installation](/docs/accessanalyzer/12.0/install/filesystemproxy/wizard.md) topic for
      additional information.

- Activity Monitor binary – Installation package for monitoring Windows and NAS device file system
  activity

    - See the Installation topic of the
      [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
      for additional information.

- SharePoint Agent binary – Installation package for the SharePoint Agent (optional for Access
  Auditing of SharePoint farms)

    - If your license includes Sensitive Data Discovery (SDD), the necessary SDD components are
      installed
    - See the [SharePoint Agent Installation](/docs/accessanalyzer/12.0/install/sharepointagent/overview.md) topic for additional
      information.

- Access Analyzer MAPI CDO binary – One of two installation package needed to enable the Exchange
  Solution

    - See the
      [StealthAUDIT MAPI CDO Installation](/docs/accessanalyzer/12.0/install/mapicdo/installation.md)
      topic for additional information.

- Access Analyzer Reporting Services binary – Installation package for Survey Action Module
  Reporting Service
- Netwrix Access Information Center binary – Installation package for the Netwrix Access Information
  Center

    - Customers who are logged in to the Netwrix Customer Portal can download the latest version of
      their software products from the My Products page:
      [https://www.netwrix.com/my_products.html](https://www.netwrix.com/my_products.html). See the
      [Customer Portal Access](https://helpcenter.netwrix.com/bundle/NetwrixCustomerPortalAccess/page/Customer_Portal_Access.html)
      topic for information on how to register for a Customer Portal account.Partners and MSPs who
      are logged into the Netwrix Partner Portal can download the latest version of their software
      products from the My Product page:
      [https://www.netwrix.com/par/site/products](https://www.netwrix.com/my_products.html). To
      receive an invitation to the Partner Portal, please contact
      [netwrix.msp@netwrix.com](http://netwrix.msp@netwrix.com/).
    - See the
      [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
      for additional information.

## License Key

Your Netwrix Representative will provide the necessary license key. The Access Analyzer license key
(`StealthAUDIT.lic`) is needed for the Access Analyzer Core Installation. See the
[Access Analyzer Core Installation](/docs/accessanalyzer/12.0/install/application/wizard.md) topic for additional information.

To grant access to additional Solution sets or enable Sensitive Data Discovery in an existing Access
Analyzer installation, a new license key is required. To update the Access Analyzer license key
without installing a new version of the Access Analyzer Console, see the
[Update License Key](/docs/accessanalyzer/12.0/install/application/updatelicense.md) topic for instructions.
