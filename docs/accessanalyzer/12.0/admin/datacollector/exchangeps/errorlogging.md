---
title: "ExchangePS: Error Logging"
description: "ExchangePS: Error Logging"
sidebar_position: 120
---

# ExchangePS: Error Logging

The Error Logging page is used to configure how long to keep the PowerShell logs. It is a wizard
page for all of the categories.

![ExchangePS Data Collector Wizard Error Logging page](/images/accessanalyzer/12.0/admin/datacollector/exchangeps/errorlogging.webp)

Select from the following options:

- Remove all log files – Removes the PowerShell logs when data collection completes
- Keep log files newer than [number] days – Removes PowerShell logs older than the specified age
  when data collection completes

These log files are stored in the following location on the target host:

**…\STEALTHbits\StealthAUDIT\ExchangePS**
