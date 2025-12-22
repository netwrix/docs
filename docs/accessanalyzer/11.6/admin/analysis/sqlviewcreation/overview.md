---
title: "SQLViewCreation Analysis Module"
description: "SQLViewCreation Analysis Module"
sidebar_position: 60
---

# SQLViewCreation Analysis Module

The SQLViewCreation analysis module provides the ability to create new views or tables that are used
in Enterprise Auditor actions and reports. These views or tables are re-created during job
execution.

:::warning
Consider the impact on storage and performance when choosing to create views versus
tables. Tables require more storage space in the database.
:::


## Configuration

This analysis module provides the View and Table Creation Analysis Module wizard to assist in
configuring the module. Before the wizard, collect the desired data for manipulation.

The wizard contains the following pages:

- Welcome
- [SQLViewCreation: Input Scope](/docs/accessanalyzer/11.6/admin/analysis/sqlviewcreation/inputscope.md)
- [SQLViewCreation: Input Source](/docs/accessanalyzer/11.6/admin/analysis/sqlviewcreation/input.md)
- [SQLViewCreations: Join Columns](/docs/accessanalyzer/11.6/admin/analysis/sqlviewcreation/joincolumns.md)
- [SQLViewCreations: Columns](/docs/accessanalyzer/11.6/admin/analysis/sqlviewcreation/columns.md)
- [SQLViewCreation: Filter](/docs/accessanalyzer/11.6/admin/analysis/sqlviewcreation/filter.md)
- [SQLViewCreation: Time Window](/docs/accessanalyzer/11.6/admin/analysis/sqlviewcreation/timewindow.md)
- [SQLViewCreation: Result Constraints](/docs/accessanalyzer/11.6/admin/analysis/sqlviewcreation/resultconstraints.md)
- [SQLViewCreation: Result Type](/docs/accessanalyzer/11.6/admin/analysis/sqlviewcreation/result.md)
- [SQLViewCreation: Result Sample](/docs/accessanalyzer/11.6/admin/analysis/sqlviewcreation/resultsample.md)
- [SQLViewCreation: Export](/docs/accessanalyzer/11.6/admin/analysis/sqlviewcreation/export.md)
- [SQLViewCreation: Summary](/docs/accessanalyzer/11.6/admin/analysis/sqlviewcreation/summary.md)

The Welcome page provides an overview of the analysis module.

![View and Table Creation Analysis Module wizard Welcome page](/images/accessanalyzer/11.6/admin/analysis/sqlviewcreation/welcome.webp)

There are no configurable settings on the Welcome page. Click **Next** to begin configuring a custom
table or view using two formatted data sources, or use the Steps navigation pane to open another
page in the wizard.
