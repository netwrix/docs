---
title: "Exchange2K Data Collector"
description: "Exchange2K Data Collector"
sidebar_position: 160
---

# Exchange2K Data Collector

The Exchange2K Data Collector extracts configuration details from Exchange organizations for
versions 2003 and later. This is a MAPI-based data collector which requires the **Settings** >
**Exchange** node to be enabled and configured. See the
[Exchange](/docs/accessanalyzer/11.6/admin/settings/exchange.md)
topic for additional information.

The Exchange2K Data Collector has been preconfigured within the Exchange Solution. Both this data
collector and the solution are available with a special Enterprise Auditor license. See the
[Exchange Solution](/docs/accessanalyzer/11.6/solutions/exchange/overview.md)
topic for additional information.

**Protocols**

- LDAP
- MAPI
- PowerShell
- RPC
- WMI

**Ports**

- TCP 135-139
- Randomly allocated high TCP ports
- TCP 389
- Optional TCP 445

**Permissions**

- Member of the Exchange Administrator group
- Domain Admin for AD property collection
- Public Folder Management

## Exchange2K Query Configuration

The Exchange2K Data Collector is configured through the Exchange 2K+ Data Collector Wizard, which
contains the following wizard pages:

- Welcome
- [Exchange2K: Category](/docs/accessanalyzer/11.6/admin/datacollector/exchange2k/category.md)
- [Exchange2K: Scope](/docs/accessanalyzer/11.6/admin/datacollector/exchange2k/scope.md)
- [Exchange2K: Results](/docs/accessanalyzer/11.6/admin/datacollector/exchange2k/results.md)
- [Exchange2K: MAPI Settings](/docs/accessanalyzer/11.6/admin/datacollector/exchange2k/mapisettings.md)
- [Exchange2K: Options](/docs/accessanalyzer/11.6/admin/datacollector/exchange2k/options.md)
- [Exchange2K: Summary](/docs/accessanalyzer/11.6/admin/datacollector/exchange2k/summary.md)

![Exchange 2K+ Data Collector Wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/exchange2k/welcome.webp)

The Welcome page can be hidden by selecting the **Do not show this page the next time** checkbox
when the wizard is open and configuration settings are saved.
