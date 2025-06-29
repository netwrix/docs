# SQLViewCreation Analysis Module

The SQLViewCreation analysis module provides the ability to create new views or tables that are used
in Access Analyzer actions and reports. These views or tables are re-created during job execution.

**CAUTION:** Consider the impact on storage and performance when choosing to create views versus
tables. Tables require more storage space in the database.

## Configuration

This analysis module provides the View and Table Creation Analysis Module wizard to assist in
configuring the module. Before the wizard, collect the desired data for manipulation.

The wizard contains the following pages:

- Welcome
- [SQLViewCreation: Input Scope](/docs/accessanalyzer/12.0/analysis/sql-view-creation/input-scope.md)
- [SQLViewCreation: Input Source](/docs/accessanalyzer/12.0/analysis/sql-view-creation/input.md)
- [SQLViewCreations: Join Columns](/docs/accessanalyzer/12.0/analysis/sql-view-creation/join-columns.md)
- [SQLViewCreations: Columns](/docs/accessanalyzer/12.0/analysis/sql-view-creation/columns.md)
- [SQLViewCreation: Filter](/docs/accessanalyzer/12.0/analysis/sql-view-creation/filter.md)
- [SQLViewCreation: Time Window](/docs/accessanalyzer/12.0/analysis/sql-view-creation/time-window.md)
- [SQLViewCreation: Result Constraints](/docs/accessanalyzer/12.0/analysis/sql-view-creation/result-constraints.md)
- [SQLViewCreation: Result Type](/docs/accessanalyzer/12.0/analysis/sql-view-creation/result.md)
- [SQLViewCreation: Result Sample](/docs/accessanalyzer/12.0/analysis/sql-view-creation/result-sample.md)
- [SQLViewCreation: Export](/docs/accessanalyzer/12.0/analysis/sql-view-creation/export.md)
- [SQLViewCreation: Summary](/docs/accessanalyzer/12.0/analysis/sql-view-creation/summary.md)

The Welcome page provides an overview of the analysis module.

![View and Table Creation Analysis Module wizard Welcome page](/img/product_docs/activitymonitor/activitymonitor/install/welcome.webp)

There are no configurable settings on the Welcome page. Click **Next** to begin configuring a custom
table or view using two formatted data sources, or use the Steps navigation pane to open another
page in the wizard.
