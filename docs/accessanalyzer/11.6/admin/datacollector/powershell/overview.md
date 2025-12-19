---
title: "PowerShell Data Collector"
description: "PowerShell Data Collector"
sidebar_position: 290
---

# PowerShell Data Collector

The PowerShell Data Collector provides PowerShell script exit from Enterprise Auditor. It has
configuration options for creating and configuring a PowerShell query. This data collector is a core
component of Enterprise Auditor and is available with all Enterprise Auditor licenses.

**Protocols**

- PowerShell

**Ports**

- Randomly allocated high TCP ports

**Permissions**

- Member of the Domain Administrators group (if targeting domain controllers)
- Member of the Local Administrators group

## PowerShell Query Configuration

The PowerShell Data Collector is configured through the PowerShell Data Collector Wizard, which
contains the following pages:

- Welcome
- [PowerShell: Edit Query](/docs/accessanalyzer/11.6/admin/datacollector/powershell/editquery.md)
- [PowerShell: Options](/docs/accessanalyzer/11.6/admin/datacollector/powershell/options.md)
- [PowerShell: Sample Server](/docs/accessanalyzer/11.6/admin/datacollector/powershell/sampleserver.md)
- [PowerShell: Results](/docs/accessanalyzer/11.6/admin/datacollector/powershell/results.md)
- [PowerShell: Summary](/docs/accessanalyzer/11.6/admin/datacollector/powershell/summary.md)

![PowerShell Data Collector Wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/powershell/welcome.webp)

The Welcome page can be hidden by checking the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.
