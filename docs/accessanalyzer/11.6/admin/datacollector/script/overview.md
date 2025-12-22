---
title: "Script Data Collector"
description: "Script Data Collector"
sidebar_position: 310
---

# Script Data Collector

The Script Data Collector provides VB Script exit from Enterprise Auditor. Static queries are
sometimes inadequate for demanding auditing tasks. The Script Data Collector provides a means to add
a custom script to a query. Enterprise Auditor implements Microsoft Visual Basic Script (VB Script)
with extensions that provide script writers the ability to interface directly with Enterprise
Auditor.

The following examples describe situations where using a script may be useful:

- Conversions – One of the most frequent uses of a scriptis for converting a value from one thing to
  another, for example `build1230` to `at risk`. See the
  [Script Example 1: Conversion of Data](/docs/accessanalyzer/11.6/admin/datacollector/script/example1.md)
  topic for additional information.
- Compound Queries – This is a query that cannot be performed using a single query. See the
  [Script Example 2: Command Query](/docs/accessanalyzer/11.6/admin/datacollector/script/example2.md)
  topic for additional information.
- Interfacing with External Systems – This is a query that requires access to external data. For
  example, the query needs to access a corporate database to obtain a location code.

The Script Data Collector is a core component of Enterprise Auditor, but it has been preconfigured
within the Windows Solution. While the data collector is available with all Enterprise Auditor
license options, the Windows Solution is only available with a special Enterprise Auditor license.
See the
[Windows Solution](/docs/accessanalyzer/11.6/solutions/windows/overview.md)
topic for additional information.

**Protocols**

- VB Script

**Ports**

- Randomly allocated high TCP ports

**Permissions**

- Member of the Local Administrators group
- Member of the Domain Administrators group (if targeting domain controllers)
