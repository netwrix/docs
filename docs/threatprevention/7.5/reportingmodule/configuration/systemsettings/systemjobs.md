---
title: "System Jobs"
description: "System Jobs Page"
sidebar_position: 40
---

# System Jobs Page

The System Jobs page within the System Settings interface contains information and configuration
options for the application system jobs.

Use the gear icon in the upper right corner of the console to open the Configuration menu. Then
select **System Settings** to open the System Settings interface.

Click **System Jobs** in the navigation pane.

![System Settings interface on the System Jobs page](/images/threatprevention/7.5/reportingmodule/configuration/systemsettings/page.webp)

The table lists the system maintenance jobs:

- Report Maintenance – Clears old reports

## Report Maintenance Job Details

The Report Maintenance job details page has two tabs that provide configuration options and job
health details.

![System Settings interface on the System Jobs page showing the Report Maintenance job Settings tab](/images/threatprevention/7.5/reportingmodule/configuration/systemsettings/reportsettings.webp)

**Settings Tab**

The Settings tab has the following configurable settings:

- Time to Retain Reports – Time period to retain reports. Reports with a created date older than the
  retain time will be removed at this interval. By default, this is set to 1 Month. Use the
  drop-down menu to select another interval, which includes 1 Day, 1 Week, 1 Month, 3 Months, and 6
  Months as options.
- Time Interval to Run Report Cleanup – The interval to run the Report Cleanup job. At the interval
  specified, any reports older than the retention period will be cleaned up. By default, this is set
  to 1 Day. Use the drop-down menu to select another interval, which includes 1 Day, 1 Week, and 1
  Month as options.
- Time During the day to run the Cleanup – The time during the day to run the Cleanup script,
  happening at the currently configured interval. By default, this is set to midnight, 12:00 AM. Use
  the clock menu to select the desired time.

**Health Tab**

The Health tab displays the following information:

![Health tab of the Report Maintenance job details page](/images/threatprevention/7.5/reportingmodule/configuration/systemsettings/reporthealth.webp)

- Size of Reports Directory – Displays the size of the directory where reports are stored
- Next Run Time – Date timestamp for the next time the job will run
