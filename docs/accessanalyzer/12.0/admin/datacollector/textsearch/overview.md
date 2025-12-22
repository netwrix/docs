---
title: "TextSearch Data Collector"
description: "TextSearch Data Collector"
sidebar_position: 380
---

# TextSearch Data Collector

The TextSearch Data Collector enables searches through text based log files. The TextSearch Data
Collector is a core component of Access Analyzer, but it has been preconfigured within the Windows
Solution. While the data collector is available with all Access Analyzer license options, the
Windows Solution is only available with a special Access Analyzer license. See the
[Windows Solution](/docs/accessanalyzer/12.0/solutions/windows/overview.md) topic for additional information.

**Protocols**

- RPC

**Ports**

- TCP 135-139
- Randomly allocated high TCP ports

**Permissions**

- Member of the Local Administrators group

## TextSearch Query Configuration

The TextSearch Data Collector is configured through the Text Search Data Collector Wizard, which
contains the following wizard pages:

- Welcome
- [TextSearch: Source Files](/docs/accessanalyzer/12.0/admin/datacollector/textsearch/sourcefiles.md)
- [TextSearch: Search Criteria](/docs/accessanalyzer/12.0/admin/datacollector/textsearch/searchcriteria.md)
- [TextSearch: Advanced Criteria](/docs/accessanalyzer/12.0/admin/datacollector/textsearch/advancedcriteria.md)
- [TextSearch: Results](/docs/accessanalyzer/12.0/admin/datacollector/textsearch/results.md)
- [TextSearch: Summary](/docs/accessanalyzer/12.0/admin/datacollector/textsearch/summary.md)

![Text Search Data Collector Wizard Welcome page](/images/accessanalyzer/12.0/admin/datacollector/textsearch/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
