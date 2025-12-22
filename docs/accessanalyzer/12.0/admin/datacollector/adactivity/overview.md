---
title: "ADActivity Data Collector"
description: "ADActivity Data Collector"
sidebar_position: 30
---

# ADActivity Data Collector

The ADActivity Data Collector integrates with the Netwrix Activity Monitor by reading the Active
Directory activity log files. It has been preconfigured within the Active Directory Solution. Both
this data collector and the solution are available with a special Access Analyzer license. See the
[Active Directory Solution](/docs/accessanalyzer/12.0/solutions/activedirectory/overview.md) topic for additional
information.

**Protocols**

- HTTP
- RPC

**Ports**

- TCP 4494 (configurable within the Netwrix Activity Monitor)

**Permissions**

- Netwrix Activity Monitor API Access activity data
- Netwrix Activity Monitor API Read
- Read access to the Netwrix Activity Monitor Log Archive location

## ADActivity Query Configuration

The ADActivity Data Collector is configured through the Active Directory Activity DC wizard, which
contains the following wizard pages, which change based up on the query category selected:

- [ADActivity: Category](/docs/accessanalyzer/12.0/admin/datacollector/adactivity/category.md)
- [ADActivity: SAM Connection](/docs/accessanalyzer/12.0/admin/datacollector/adactivity/connection.md)
- [ADActivity: Share](/docs/accessanalyzer/12.0/admin/datacollector/adactivity/share.md)
- [ADActivity: Scope](/docs/accessanalyzer/12.0/admin/datacollector/adactivity/scope.md)
- [ADActivity: Results](/docs/accessanalyzer/12.0/admin/datacollector/adactivity/results.md)
- [ADActivity: Summary](/docs/accessanalyzer/12.0/admin/datacollector/adactivity/summary.md)
