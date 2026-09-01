---
title: "DNS Data Collector"
description: "DNS Data Collector"
sidebar_position: 110
---

# DNS Data Collector

The DNS Data Collector provides information about DNS configuration and records. It is available
with the Active Directory Solution. Both this data collector and the solution are available with a
special Access Analyzer license.

**Protocols**

- RPC

**Ports**

- TCP 135
- Randomly allocated high TCP ports

**Permissions**

- Member of the Domain Administrators group

## DNS Query Configuration

You configure the DNS Data Collector through the Domain Name System Data Collector Wizard, which
contains the following wizard pages:

- Welcome
- [DNS: Category](/docs/accessanalyzer/12.0/admin/datacollector/dns/category.md)
- [DNS: Results](/docs/accessanalyzer/12.0/admin/datacollector/dns/results.md)
- [DNS: Summary](/docs/accessanalyzer/12.0/admin/datacollector/dns/summary.md)

![Domain Name System Data Collector Wizard Welcome page](/images/accessanalyzer/12.0/admin/datacollector/dns/welcome.webp)

To hide the Welcome page, select the Don't display this page the next time checkbox while the
wizard is open, then save the configuration settings.
