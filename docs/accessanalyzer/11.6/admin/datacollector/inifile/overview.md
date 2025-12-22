---
title: "INIFile Data Collector"
description: "INIFile Data Collector"
sidebar_position: 240
---

# INIFile Data Collector

The INIFile Data Collector provides options to configure a task to collect information about log
entries on target hosts. This data collector is a core component of Enterprise Auditor and is
available with all Enterprise Auditor licenses.

**Protocols**

- RPC

**Ports**

- TCP 135-139
- Randomly allocated high TCP ports
- Optional TCP 445

**Permissions**

- Member of the Local Administrators group

## INIFile Query Configuration

The INIFile Data Collector is configured through the INI File Data Collector Wizard. It contains the
following wizard pages:

- Welcome
- [INIFile: Target Files](/docs/accessanalyzer/11.6/admin/datacollector/inifile/targetfiles.md)
- [INIFile: Properties](/docs/accessanalyzer/11.6/admin/datacollector/inifile/properties.md)
- [INIFile: Summary](/docs/accessanalyzer/11.6/admin/datacollector/inifile/summary.md)

![INI File Data Collector Wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/inifile/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.
