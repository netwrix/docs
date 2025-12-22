---
title: "Box: Activity Timeframe Scope"
description: "Box: Activity Timeframe Scope"
sidebar_position: 60
---

# Box: Activity Timeframe Scope

The Activity Timespan Scope page (ActivityTimeframeScope) is where Box activity data collection is
configured. It is a wizard page for the Scan Box Activity category.

![Box DC Wizard Activity Timespan Scope page](/images/accessanalyzer/12.0/admin/datacollector/box/activitytimeframe.webp)

Select one of the following options to configure the timeframe for Box data collection:

- Relative Timespan – Collects activity from a set number of days relative to the present

    - Collect activity from the last [number] Days – Enter the number of days for which activity
      data collection is required. The default is 180. The maximum timespan is 365 days.
    - Data retention settings – Select a preferred retention setting

        - Within timespan – Deletes all data outside of the selected timespan
        - Retain all data – Retains all data collected inside or outside of the selected timespan

- Absolute Timespan – Enter the interval of days for which activity data collection is required. The
  default End Date is the current day.

    :::note
    Choosing an absolute timespan will not affect activity data during relative timespan
    scans.

    :::
