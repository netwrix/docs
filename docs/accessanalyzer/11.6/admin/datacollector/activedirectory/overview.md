---
title: "ActiveDirectory Data Collector"
description: "ActiveDirectory Data Collector"
sidebar_position: 20
---

# ActiveDirectory Data Collector

The ActiveDirectory Data Collector audits objects published in Active Directory. Netwrix
preconfigures it within the Active Directory Solution. Both this data collector and the solution are
available with a special Enterprise Auditor license. See the
[Active Directory Solution](/docs/accessanalyzer/11.6/solutions/activedirectory/overview.md)
topic for additional information.

**Protocols**

- ADSI
- LDAP
- RPC

**Ports**

- TCP 389/636
- TCP 135-139
- Randomly allocated high TCP ports

**Permissions**

- Member of the Domain Administrators group

## ActiveDirectory Query Configuration

Configure the ActiveDirectory Data Collector through the Active Directory Data Collector Wizard,
which contains the following wizard pages:

- Welcome
- [ActiveDirectory: Category](/docs/accessanalyzer/11.6/admin/datacollector/activedirectory/category.md)
- [ActiveDirectory: Directory Scope](/docs/accessanalyzer/11.6/admin/datacollector/activedirectory/directoryscope.md)
- [ActiveDirectory: Results](/docs/accessanalyzer/11.6/admin/datacollector/activedirectory/results.md)
- [ActiveDirectory: Options](/docs/accessanalyzer/11.6/admin/datacollector/activedirectory/options.md)
- [ActiveDirectory: Summary](/docs/accessanalyzer/11.6/admin/datacollector/activedirectory/summary.md)

![Active Directory Data Collector Wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/activedirectory/welcome.webp)

To hide the Welcome page, select the **Don't display this page the next time** checkbox while the
wizard is open, and save the configuration settings.
