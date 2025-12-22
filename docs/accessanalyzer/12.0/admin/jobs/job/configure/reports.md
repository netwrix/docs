---
title: "Reports Node"
description: "Reports Node"
sidebar_position: 50
---

# Reports Node

The Reports node is for configuring reports to be generated during job execution.

![Reports page](/images/accessanalyzer/12.0/admin/jobs/job/configure/reports.webp)

The Reports view lists any reports that have been configured for the selected job and options
related to configuring reports. The options at the top of the Reports view are:

- Properties – Opens the [Job Properties](/docs/accessanalyzer/12.0/admin/jobs/job/properties/overview.md) page for the job that the
  report is for
- Run Now – Runs the currently selected job that the report is for
- Open Folder – Opens the Report’s folder location with supporting files in the Windows Explorer
- View Log – Opens the log for the job that the report is for

![Options on the Reports table header row](/images/accessanalyzer/12.0/admin/jobs/job/configure/reportstableheaderoptions.webp)

The Reports table contains all of the configured reports for the job. The header row of the table
contains the following options for adding reports to the table:

- Create – Creates a new report for the selected job

    - See the [Creating a Report](/docs/accessanalyzer/12.0/admin/report/create.md) topic for additional information

- Paste – Paste a cut or copied report into the selected job

    - The paste option is accessed from the vertical ellipsis menu of the header row of the Reports
      table

![Reports table row options](/images/accessanalyzer/12.0/admin/jobs/job/configure/reportstablerowoptions.webp)

Clicking on the name of a report opens it in the Results node. Clicking **Configure** next to a
report's name opens the Report Configuration wizard for the report, see the
[Report Configuration Wizard](/docs/accessanalyzer/12.0/admin/report/wizard/overview.md) topic for additional information.
Additional options are available from the vertical ellipsis menu on a reports row:

- Generate – Generates the report
- Copy – Copies the report to the clipboard
- Delete – Deletes the report

Once a report is generated, it can be viewed in several locations depending on the configuration.
Report configurations may also be copied to other reports to generate preferred outputs for
alternate jobs. However, all generated reports can be viewed in the job’s **Results** node.

See the [Reporting](/docs/accessanalyzer/12.0/admin/report/overview.md) topic for additional information.
