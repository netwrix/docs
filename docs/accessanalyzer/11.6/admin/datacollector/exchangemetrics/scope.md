---
title: "ExchangeMetrics: Scope"
description: "ExchangeMetrics: Scope"
sidebar_position: 20
---

# ExchangeMetrics: Scope

Use the Scope page to define where to search. It is a wizard page for the categories of:

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

![Exchange Metrics Data Collector Wizard Scope page](/images/accessanalyzer/11.6/admin/datacollector/exchangemetrics/scope.webp)

Define the scope of the query using the following options:

- Return data for section – Select the time period to collect data for. Exchange Metrics uses GMT
  time to calculate the result.

    - Today
    - Yesterday
    - This Week (from last Sunday till today)
    - Last Week (from Sunday till Saturday)
    - This Month
    - Last Month
    - Last [number] days
    - Within time frame:
    - From [calendar date] to [calendar date] – Use the dropdown arrows to select calendar dates.

- Return results section – Select the table design for the collected data

    - One row for – Use the dropdown list to select one of the following options:

        - All period
        - Day
        - Week
        - Month

    - Add summary values as last row – Select this checkbox to add summary values as the last row.
      This option is enabled when **Day**, **Week**, or **Month** are selected.
