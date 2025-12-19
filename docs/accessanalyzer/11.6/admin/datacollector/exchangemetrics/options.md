---
title: "ExchangeMetrics: Options"
description: "ExchangeMetrics: Options"
sidebar_position: 70
---

# ExchangeMetrics: Options

The Options page provides additional configuration options for the query. Options vary depending on
the category selected. It is a wizard page for the categories of:

- Server Volume
- Internal Traffic Summary
- Internet Traffic Summary
- Delivery Time
- Delivery Time Custom
- User Statistics
- DL Statistics
- Hour Statistics
- Message Size Statistics
- Message Size Statistics Custom
- User’s Message Activity
- User’s Message Activity Per Hour
- Deploy or Change Applet Settings
- Remove Applet Settings

![Exchange Metrics Data Collector Wizard Options page](/images/accessanalyzer/11.6/admin/datacollector/exchangemetrics/options.webp)

Select the checkbox of any of the following options to configure the query:

:::note
Available options vary depending on Category selected.
:::


- Host-side Cleanup

    - Remove applet after task is completed
    - Remove all summary data after task is completed (Not recommended)
    - Remove summary data older than [number] days
    - Remove AD database after task is completed

- Applet Logging

    - Enable Logging – Enables the applet to log
    - Applet log level – Select the desired log level using the dropdown list:

        - None
        - Debug
        - Information
        - Warning
        - Error

    - Set Default – Returns the Applet log level to the default of **Error**

- Applet History

    - Enable Persistent Log State – Search the log from where the previous search left off. A state
      file is created for each host configured in the query. State files can be viewed within
      Enterprise Auditor and are named by the query GUID. State files display the record the
      previous search left off on, the event log, and the date of the last entry.

- AD Database Creation

    - Recreate AD DB if existing DB is older than [number] days
    - Create AD DB locally
