---
title: "StealthAUDIT MAPI CDO Installation"
description: "StealthAUDIT MAPI CDO Installation"
sidebar_position: 50
---

# StealthAUDIT MAPI CDO Installation

You must install both the Enterprise Auditor MAPI CDO and the Microsoft® Exchange MAPI CDO to
enable the Settings > Exchange node.

![exchangenode](/images/accessanalyzer/11.6/stealthaudit/install_guides/mapi_cdo_install/exchangenode.webp)

The Microsoft Exchange MAPI CDO is only required to run the MAPI-based data collectors. See the
[Exchange Solution](/docs/accessanalyzer/11.6/solutions/exchange/overview.md)
topic for additional information.

You can download the Enterprise Auditor MAPI CDO from the
[Product Downloads](https://www.stealthbits.com/product-downloads) page of the Netwrix website. You
can download the Microsoft Exchange MAPI CDO directly from Microsoft. See the
[Appendix for the StealthAUDIT MAPI CDO Installation Guide](/docs/accessanalyzer/11.6/install/stealthauditmapicdoinstallation/appendix.md)
for requirements and installation steps to install the Microsoft Exchange MAPI CDO.

:::warning
You must install the Enterprise Auditor MAPI CDO first before installing the Microsoft
Exchange MAPI CDO.
:::


Before installing either binary, close the Enterprise Auditor application and ensure you meet the
following requirements:

- Exchange System Manager for Exchange 2003 isn't installed on the Enterprise Auditor Console
  server.
- Microsoft Outlook isn't installed on the Enterprise Auditor Console server.

These programs interfere with MAPI connections if you install them on the Enterprise Auditor
Console server.

To install the Enterprise Auditor MAPI CDO:

**Step 1 –** Run the StealthAuditMapiCDO executable.

![stealthaudit_mapi_cdo_installation_1](/images/accessanalyzer/11.6/stealthaudit/install_guides/mapi_cdo_install/stealthaudit_mapi_cdo_installation_1.webp)

**Step 2 –** Click OK to confirm the path.

The application will install and the wizard will close automatically when it is finished. See the
[Appendix for the StealthAUDIT MAPI CDO Installation Guide](/docs/accessanalyzer/11.6/install/stealthauditmapicdoinstallation/appendix.md)
for information on installing the Microsoft Exchange MAPI CDO.
