---
title: "Export Reports"
description: "Export Reports"
sidebar_position: 20
---

# Export Reports

To export filtered events, use the **Report/Export** button and menu. The following sections
explain the fields and settings that need more explanation.

![ReportsExportDisplayOptions](/images/changetracker/admin/tabs/reportsexportdisplayoptions.webp)

These options control the report display. If you need a condensed, simplified report, you can
uncheck these options. Generally, the tables and analysis charts are useful for identifying
sources of change noise.

![ReportsExportScheduleAndEmail](/images/changetracker/admin/tabs/reportsexportscheduleandemail.webp)

Set the start and end time for the reporting schedule, along with the frequency for repeating
report delivery.

**Results Delivery** options include:

- List of recipient emails
- Two different report formats, for example PDF and CSV
- No email if there are no results; otherwise, Change Tracker always sends a confirmation email,
  even if there's nothing to report
- Maximum attachment size, a safety measure that prevents sending an excessively large report, for
  example a 5 TB report

Click **OK** at the bottom of the window when done.

## Permission and storage settings

![ReportsExportPermissionsAndStorage](/images/changetracker/admin/tabs/reportsexportpermissionsandstorage.webp)

Netwrix Change Tracker gives you greater control over storage usage. By default, Change Tracker
retains generated reports for a finite period, then removes them. Change Tracker typically
delivers reports by email and stores them outside the database, so it doesn't need to also retain
the reports in the database. Change Tracker retains the events within the reports, but removes the
duplicate set of events it created for the report.

By default, the report's originator can view their own reports. If required, you can make reports
visible or editable by others.

Click **OK** at the bottom of the window when done.

You can view and edit report settings, schedules, and results on the **Reports** tab. See the
[Report Options](/docs/changetracker/admin/reportstab/reportsquerysettingstab.md) topic for additional information.
