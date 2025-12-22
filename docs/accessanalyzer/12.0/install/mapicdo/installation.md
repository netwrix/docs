# StealthAUDIT MAPI CDO Installation

Both the Access Analyzer MAPI CDO and the Microsoft® Exchange MAPI CDO must to be installed in
order to enable the Settings > Exchange node.

![exchangenode](/images/accessanalyzer/12.0/stealthaudit/install_guides/mapi_cdo_install/exchangenode.webp)

The Microsoft Exchange MAPI CDO is only required to run the MAPI-based data collectors. See the
[Exchange Solution](/docs/accessanalyzer/12.0/solutions/exchange/overview.md) topic for additional
information.

The Access Analyzer MAPI CDO can be downloaded from the
[Product Downloads](https://www.stealthbits.com/product-downloads) page of the Netwrix website. The
Microsoft Exchange MAPI CDO can be downloaded directly from Microsoft. See the
[Appendix for the StealthAUDIT MAPI CDO Installation Guide](/docs/accessanalyzer/12.0/install/mapicdo/appendix.md) for requirements and
installation steps to install the Microsoft Exchange MAPI CDO.

:::warning
The Access Analyzer MAPI CDO must be installed first before installing the Microsoft
Exchange MAPI CDO.
:::


Before installing either binary, close the Access Analyzer application and ensure the following
requirements have been met:

- Exchange System Manager for Exchange 2003 is not installed on the Access Analyzer Console server.
- Microsoft Outlook is not installed on the Access Analyzer Console server.

These programs interfere with MAPI connections if they are installed on the Access Analyzer Console
server.

Follow the steps to install the Access Analyzer MAPI CDO.

**Step 1 –** Run the StealthAuditMapiCDO executable.

![stealthaudit_mapi_cdo_installation_1](/images/accessanalyzer/12.0/stealthaudit/install_guides/mapi_cdo_install/stealthaudit_mapi_cdo_installation_1.webp)

**Step 2 –** Click OK to confirm the path.

The application will install and the wizard will close automatically when it is finished. See the
[Appendix for the StealthAUDIT MAPI CDO Installation Guide](/docs/accessanalyzer/12.0/install/mapicdo/appendix.md) for information on
installing the Microsoft Exchange MAPI CDO.
