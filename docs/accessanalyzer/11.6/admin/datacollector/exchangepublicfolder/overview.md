---
title: "ExchangePublicFolder Data Collector"
description: "ExchangePublicFolder Data Collector"
sidebar_position: 200
---

# ExchangePublicFolder Data Collector

The ExchangePublicFolder Data Collector audits an Exchange Public Folder, including contents,
permissions, ownership, and replicas. This is a MAPI-based data collector which requires the
**Settings > Exchange** node to be enabled and configured. See the
[Exchange](/docs/accessanalyzer/11.6/admin/settings/exchange.md)
topic for additional information.

The ExchangePublicFolder Data Collector has been preconfigured within the Exchange Solution. Both
this data collector and the solution are available with a special Enterprise Auditor license. See
the
[Exchange Solution](/docs/accessanalyzer/11.6/solutions/exchange/overview.md)
topic for additional information.

**Protocols**

- MAPI
- RPC

**Ports**

- TCP 135
- Randomly allocated high TCP ports

**Permissions**

- Member of the Exchange Administrator group
- Organization Management

**Sensitive Data Discovery Considerations**

The Sensitive Data Discovery Add-On must be installed on the Enterprise Auditor Console server,
which enables Sensitive Data criteria for scans. If running Sensitive Data Discovery (SDD) scans, it
will be necessary to increase the minimum amount of RAM. Each thread requires a minimum of 2
additional GB of RAM per host. For example, if the job is configured to scan 8 hosts at a time ,
then an extra 16 GB of RAM are required (8x2=16).

## ExchangePublicFolder Query Configuration

The ExchangePublicFolder Data Collector is configured through the Exchange Public Folder Data
Collector Wizard, which contains the following wizard pages:

- Welcome
- [ExchangePublicFolder: Category](/docs/accessanalyzer/11.6/admin/datacollector/exchangepublicfolder/category.md)
- [ExchangePublicFolder: Scope](/docs/accessanalyzer/11.6/admin/datacollector/exchangepublicfolder/scope.md)
- [ExchangePublicFolder: Properties](/docs/accessanalyzer/11.6/admin/datacollector/exchangepublicfolder/properties.md)
- [ExchangePublicFolder: Options](/docs/accessanalyzer/11.6/admin/datacollector/exchangepublicfolder/options.md)
- [ExchangePublicFolder: Probable Owner](/docs/accessanalyzer/11.6/admin/datacollector/exchangepublicfolder/probableowner.md)
- [ExchangePublicFolder: Summary](/docs/accessanalyzer/11.6/admin/datacollector/exchangepublicfolder/summary.md)

The query requires special permissions to connect to target Exchange servers. Configure these
permissions on the Welcome page.

![Exchange Public Folder Data Collector Wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/exchangepublicfolder/welcome.webp)

In the Connection Setting section, choose to either maintain the global inheritance, or configure
query specific settings.

The **Use Global setting** option specifies what setting is being inherited. Clear this option to
break inheritance, and then select one of the following options:

- System Attendant (2003 & 2007)
- Use the maibox associated with the Windows account that Enterprise Auditor is run with
- Exchange Mailbox (2010 and newer) – Enter the Exchange mailbox
- Client Access Server – Enter the CAS

See the
[Exchange](/docs/accessanalyzer/11.6/admin/settings/exchange.md)
topic for additional information.

In the Sampling server section, enter the Exchange server in the textbox to be used to test the
connection settings. Click **Test sampling server** to ensure there is access to the server. The box
at the bottom of the page displays information regarding the test connection in progress.
