---
title: "CommandLineUtility Data Collector"
description: "CommandLineUtility Data Collector"
sidebar_position: 90
---

# CommandLineUtility Data Collector

The CommandLineUtility Data Collector provides the ability to remotely spawn, execute, and extract
data provided by a Microsoft native or third-party command line utility. It allows users to easily
execute a command line utility and capture its output as Enterprise Auditor data. This data
collector is a core component of Enterprise Auditor and is available with all Enterprise Auditor
licenses.

**Protocols**

- Remote Registry
- RPC

**Ports**

- TCP 135-139
- Randomly allocated high TCP ports

**Permissions**

- Member of the local Administrators group

## CommandLineUtility Query Configuration

The CommandLineUtility Data Collector executes a command line utility and captures the output. It is
configured through the Command Line Utility Data Collector Wizard, which contains the following
pages:

- Welcome
- [CLU: Profile Type](/docs/accessanalyzer/11.6/admin/datacollector/commandlineutility/profiletype.md)
- [CLU: Profile Parameters](/docs/accessanalyzer/11.6/admin/datacollector/commandlineutility/profileparameters.md)
- [CLU: Execution Options](/docs/accessanalyzer/11.6/admin/datacollector/commandlineutility/executionoptions.md)
- [CLU: Define Fields](/docs/accessanalyzer/11.6/admin/datacollector/commandlineutility/definefields.md)
- [CLU: Script Editor](/docs/accessanalyzer/11.6/admin/datacollector/commandlineutility/scripteditor.md)
- [CLU: Results](/docs/accessanalyzer/11.6/admin/datacollector/commandlineutility/results.md)
- [CLU: Summary](/docs/accessanalyzer/11.6/admin/datacollector/commandlineutility/summary.md)

![Command Line Utility Data Collector Wizard Welcome page](/images/accessanalyzer/11.6/admin/datacollector/commandlineutility/welcome.webp)

The Welcome page can be hidden by selecting the **Do not display this page the next time** checkbox
when the wizard is open and configuration settings are saved.
