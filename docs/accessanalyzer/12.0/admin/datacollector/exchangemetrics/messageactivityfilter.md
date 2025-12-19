---
title: "ExchangeMetrics: Message Activity Filter"
description: "ExchangeMetrics: Message Activity Filter"
sidebar_position: 80
---

# ExchangeMetrics: Message Activity Filter

The Message Activity Filter page configures which domains the data collector should return mail flow
from specific senders and to specific recipients. For example, if `@netwrix.com` is entered in the
Senders list and `@netwrix.com` in the Recipients list, message activity will be returned only for
mail sent to and received from an `@netwrix.com` address. It is a wizard page for the categories of:

- User’s Message Activity
- User’s Message Activity Per Hour

![Exchange Metrics Data Collector Wizard Message Activity Filter page](/images/accessanalyzer/12.0/admin/datacollector/exchangemetrics/messageactivityfilter.webp)

Configure the Message Activity Filter using the following options:

- Add – To add a filter to the desired category, click **Add** in the desired category to add an
  entry to that category
- Select **Exact Match** in the added filter to reveal a drop-down list with the following condition
  options:

    - Exact matches
    - Contains
    - Begins with
    - Ends with

- Kind – Select **(Custom…)** to open the Custom Filter menu. The Custom Filter menu provides
  options to create and configure other filters.
- Value – Type the filter to be applied

The columns in the entry tables can be sorted and or filtered, using the same sorting and filtering
methods of Access Analyzer data grids. The **Remove** option will delete a selected filter.
