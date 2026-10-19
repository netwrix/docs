# StealthAUDIT MAPI CDO Installation

You must install both the Access Analyzer MAPI CDO and the Microsoft® Exchange MAPI CDO
to enable the Settings > Exchange node.

![exchangenode](/images/accessanalyzer/12.0/stealthaudit/install_guides/mapi_cdo_install/exchangenode.webp)

You only need the Microsoft Exchange MAPI CDO to run the MAPI-based data collectors. See the
[Exchange Solution](/docs/accessanalyzer/12.0/solutions/exchange/overview.md) topic for additional
information.

You can download the Access Analyzer MAPI CDO from the
[Product Downloads](https://www.stealthbits.com/product-downloads) page of the Netwrix website. You
can download the Microsoft Exchange MAPI CDO directly from Microsoft. See the
[Appendix for the StealthAUDIT MAPI CDO Installation Guide](/docs/accessanalyzer/12.0/install/mapicdo/appendix.md) for requirements and
installation steps to install the Microsoft Exchange MAPI CDO.

:::warning
The Access Analyzer MAPI CDO must be installed first before installing the Microsoft
Exchange MAPI CDO.
:::


Before installing either binary, close the Access Analyzer application and ensure you meet the
following requirements:

- Exchange System Manager for Exchange 2003 isn't installed on the Access Analyzer Console server.
- Microsoft Outlook isn't installed on the Access Analyzer Console server.

These programs interfere with MAPI connections if they are installed on the Access Analyzer Console
server.

Install the Access Analyzer MAPI CDO:

**Step 1 –** Run the StealthAuditMapiCDO executable.

![stealthaudit_mapi_cdo_installation_1](/images/accessanalyzer/12.0/stealthaudit/install_guides/mapi_cdo_install/stealthaudit_mapi_cdo_installation_1.webp)

**Step 2 –** Click OK to confirm the path.

The application will install and the wizard will close automatically when it is finished. See the
[Appendix for the StealthAUDIT MAPI CDO Installation Guide](/docs/accessanalyzer/12.0/install/mapicdo/appendix.md) for information on
installing the Microsoft Exchange MAPI CDO.
