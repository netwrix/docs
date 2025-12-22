---
title: "Installation & Configuration Overview"
description: "Installation & Configuration Overview"
sidebar_position: 10
---

# Installation & Configuration Overview

This section provides instructions for installing Enterprise Auditor and the initial configuration
required when first launching the Enterprise Auditor Console. It also includes additional
information, such as how to secure the Enterprise Auditor Database, and configuring the Web Console
for viewing reports outside of the Enterprise Auditor Console.

Prior to installing Enterprise Auditor, please ensure that all of the prerequisites have been met.
See the
[Requirements](/docs/accessanalyzer/11.6/requirements/overview.md)
topic for more information.

## Binaries

There are a variety of Enterprise Auditor binaries based on the organizational auditing objectives.
Your Netwrix Representative will provide the appropriate binaries.

- Enterprise Auditor binary – Core installation package

    - Includes data collectors, analysis modules, and action modules
    - An organization’s license key, needed during installation, controls which components are laid
      down during installation
    - Installs the Web Console

- File System Proxy binary – Installation package for the File System Proxy Scanning option

    - See the
      [File System Proxy Service Installation](/docs/accessanalyzer/11.6/install/filesystemproxy/wizard.md)
      topic for additional information.

- Activity Monitor binary – Installation package for monitoring Windows and NAS device file system
  activity

    - See the Installation topic of the
      [Netwrix Activity Monitor Documentation](https://helpcenter.netwrix.com/category/activitymonitor)
      for additional information.

- Sensitive Data Discovery Add-on binary – Installation package for File System and/or SharePoint
  Sensitive Data Discovery Add-on

    - See the
      [Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)
      topic for additional information.

- SharePoint Agent binary – Installation package for the SharePoint Agent (optional for Access
  Auditing of SharePoint farms)

    - See the
      [SharePoint Agent Installation](/docs/accessanalyzer/11.6/install/sharepointagent/overview.md)
      topic for additional information.

- Enterprise Auditor MAPI CDO binary – One of two installation package needed to enable the Exchange
  Solution

    - See the
      [StealthAUDIT MAPI CDO Installation](/docs/accessanalyzer/11.6/install/stealthauditmapicdoinstallation/stealthaudit_mapi_cdo_installation.md)
      topic for additional information.

- Enterprise Auditor Reporting Services binary – Installation package for Survey Action Module
  Reporting Service
- Netwrix Access Information Center binary – Installation package for the Netwrix Access Information
  Center

    - Customers who are logged in to the Netwrix Customer Portal can download the latest version of
      their software products from the My Products page:
      [https://www.netwrix.com/my_products.html](https://www.netwrix.com/my_products.html). See the
      [Customer Portal Access](https://helpcenter.netwrix.com/bundle/NetwrixCustomerPortalAccess/page/Customer_Portal_Access.html)
      topic for information on how to register for a Customer Portal account.
    - See the
      [Netwrix Access Information Center Documentation](https://helpcenter.netwrix.com/category/accessinformationcenter)
      for additional information.

## License Key

Your Netwrix Representative will provide the necessary license key. The Enterprise Auditor license
key (`StealthAUDIT.lic`) is needed for the Enterprise Auditor Core Installation. See the
[Enterprise Auditor Core Installation](/docs/accessanalyzer/11.6/install/application/wizard.md)
topic for additional information.

To grant access to additional Solution sets in an existing Enterprise Auditor installation, a new
license key is required. To update the Enterprise Auditor license key without installing a new
version of the Enterprise Auditor Console, see the
[Update License Key](/docs/accessanalyzer/11.6/install/application/updatelicense.md)
topic for instructions.
