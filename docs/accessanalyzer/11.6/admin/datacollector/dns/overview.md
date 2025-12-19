---
title: "DNS Data Collector"
description: "DNS Data Collector"
sidebar_position: 110
---

# DNS Data Collector

The DNS Data Collector provides information regarding DNS configuration and records. It is available
with the Active Directory Solution. Both this data collector and the solution are available with a
special Enterprise Auditor license.

**Protocols**

- RPC

**Ports**

- TCP 135
- Randomly allocated high TCP ports

**Permissions**

- Member of the Domain Administrators group

## DNS Query Configuration

The DNS Data Collector is configured through the Domain Name System Data Collector Wizard, which
contains the following wizard pages:

- Welcome
- [DNS: Category](/docs/accessanalyzer/11.6/admin/datacollector/dns/category.md)
- [DNS: Results](/docs/accessanalyzer/11.6/admin/datacollector/dns/results.md)
- [DNS: Summary](/docs/accessanalyzer/11.6/admin/datacollector/dns/summary.md)

![Domain Name System Data Collector Wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/dns/welcome.webp)

The Welcome page can be hidden by selecting the Do not display this page the next time checkbox when
the wizard is open and configuration settings are saved.
