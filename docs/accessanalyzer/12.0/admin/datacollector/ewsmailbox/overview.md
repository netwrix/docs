---
title: "EWSMailbox Data Collector"
description: "EWSMailbox Data Collector"
sidebar_position: 150
---

# EWSMailbox Data Collector

The EWSMailbox Data Collector provides configuration options to scan mailbox contents, permissions,
and sensitive data, and is preconfigured within the Exchange Solution. Both this data collector and
the solution are available with a special Access Analyzer license. See the
[Exchange Solution](/docs/accessanalyzer/12.0/solutions/exchange/overview.md) topic for additional information.

**Protocols**

- HTTPS
- ADSI
- LDAP

**Ports**

- TCP 389
- TCP 443

**Permissions**

- Exchange Admin Role
- Discovery Management Role
- Application Impersonation Role
- Exchange Online License

**Sensitive Data Discovery Considerations**

If running Sensitive Data Discovery (SDD) scans, it will be necessary to increase the minimum amount
of RAM. Each thread requires a minimum of 2 additional GB of RAM per host. For example, if the job
is configured to scan 8 hosts at a time , then an extra 16 GB of RAM are required (8x2=16).

## EWSMailbox Query Configuration

The EWSMailbox Data Collector is configured through the Exchange Mailbox Data Collector Wizard,
which contains the following wizard pages:

:::note
The Category selected may alter the subsequent steps displayed by the wizard.
:::


- [EWSMailbox: Category](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/category.md)
- [EWSMailbox: Options](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/options.md)
- [EWSMailbox: Scope](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/scope.md)
- [EWSMailbox: Scope Select](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/scopeselect.md)
- [EWSMailbox: SDD Options](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/sddoptions.md)
- [EWSMailbox: Criteria](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/criteria.md)
- [EWSMailbox: Filter](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/filter.md)
- [EWSMailbox: Search Filter](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/searchfilter/searchfilter.md)
- [EWSMailbox: Results](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/results.md)
- [EWSMailbox: Summary](/docs/accessanalyzer/12.0/admin/datacollector/ewsmailbox/summary.md)
