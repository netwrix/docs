---
title: "ExchangeMetrics: Collect Mode"
description: "ExchangeMetrics: Collect Mode"
sidebar_position: 40
---

# ExchangeMetrics: Collect Mode

The Collect Mode page is where to set the collection mode. It is a wizard page for the categories
of:

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

![Exchange Metrics Data Collector Wizard Collect Mode page](/images/accessanalyzer/12.0/admin/datacollector/exchangemetrics/collectmode.webp)

There are two types of collection modes:

- Query Summary Data Only – In this mode, the applet gathers only existing summary data and returns
  it to the Access Analyzer Console. In order to process Exchange tracking log files, another
  instance of the applet must be configured.
- Process Exchange Tracking Logs and Query Summary Data – In this mode, the applet processes missing
  summary data and returns it to the Access Analyzer Console. This mode includes an additional
  setting for **Summary data path**. Choose between:

    - Default location
    - Specific location – Specify the folder location
