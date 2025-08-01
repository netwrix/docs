---
title: "SQLViewCreation: Time Window"
description: "SQLViewCreation: Time Window"
sidebar_position: 60
---

# SQLViewCreation: Time Window

Use the Source and Time Window page to specify which data to access if using multiple Access
Analyzer Consoles or history is enabled.

![View and Table Creation Analysis Module wizard Source and Time Window page](/images/accessanalyzer/12.0/admin/analysis/sqlviewcreation/timewindow.webp)

Use the following options to select which sources of data to permit and the time frame in which the
data was collected:

- Source Data Details – Choose a data source. This option is for when the selected tables are from
  two separate Access Analyzer Consoles using tables generated by the same job.

    :::note
    This section is enabled after selecting **All Access Analyzer Tables** or **All tables
    in the database** on the Input Scope page.
    :::


    - All data – Uses all data available from the selected option on the Input Scope page and merges
      the data
    - Data from this Access Analyzer Console only – Uses only data from the Access Analyzer Console
      generating the current analysis module

- Time Window – Select a time window for each table in the analysis. The drop-down menu selections
  vary based on each table's history settings.
