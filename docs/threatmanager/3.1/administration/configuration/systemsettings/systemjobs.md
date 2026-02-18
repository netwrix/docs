---
title: "System Jobs Page"
description: "System Jobs Page"
sidebar_position: 40
---

# System Jobs Page

The System Jobs page within the System Settings interface contains information and configuration
options for the application system jobs.

![System Settings interface on the System Jobs page](/images/threatmanager/3.0/administration/configuration/systemsettings/page_1.webp)

The table lists the system maintenance jobs:

- Report Maintenance – Clears old reports
- Database Maintenance – Clears no longer needed or irrelevant data from the database

The details for a system job can be viewed by selecting it from the table or the navigation pane.
The information available varies based on the type of job selected.

## Report Maintenance Job Details Page

The Report Maintenance job details page has two tabs that provide configuration options and job
health details.

![System Settings interface on the System Jobs page showing the Report Maintenance job Settings tab](/images/threatmanager/3.0/administration/configuration/systemsettings/reportsettings.webp)

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

## Database Maintenance Job Details Page

The Database Maintenance job details page has two tabs that provide configuration options and job
health details.

![System Settings interface on the System Jobs page showing the Database Maintenance job Settings tab](/images/threatmanager/3.0/administration/configuration/systemsettings/databasesettings.webp)

**Settings Tab**

The settings tab has the following configurable settings:

- Time to Retain Events – Time period to retain events not related to any threats. Threats with the
  "False Positive" status will be removed at this interval. By default, this is set to 1 Week. Use
  the drop-down menu to select another interval, which includes 1 Week, 1 Month, 3 Months, and 6
  Months as options.
- Time to Retain Threat Events – Time period to retain events related to any threats. The primary
  event for each threat will still be retained. By default, this is set to 1 Month. Use the
  drop-down menu to select another interval, which includes 1 Week, 1 Month, 3 Months, 6 Months, and
  1 Year as options.
- Time to Retain Open Threats – Time period to retain threats with the "Open" status. By default,
  this is set to 6 Months. Use the drop-down menu to select another interval, which includes 1
  Month, 3 Months, 6 Months, 1 Year, 5 Years, and Forever as options.
- Time to Retain Closed Threats – Time period to retain threats with the "Closed" status. By
  default, this is set to 6 Months. Use the drop-down menu to select another interval, which
  includes 1 Month, 3 Months, 6 Months, 1 Year, 5 Years, and Forever as options.
- Time to Retain Audit Logs – Time period to retain audit log data. By default, this is set to 6
  Months. Use the drop-down menu to select another interval, which includes 1 Month, 3 Months, 6
  Months, 1 Year, 5 Years, and Forever as options.
- Time to Retain Policy Data – Time period to retain expired policy data. By default, this is set to
  6 Months. Use the drop-down menu to select another interval, which includes 1 Month, 3 Months, 6
  Months, 1 Year, 5 Years, and Forever as options.

This job is essential for maintaining a healthy and efficient Threat Manager database. You can
choose to store certain data types for longer periods of time. Longer periods will require larger
disk storage space and disk access speeds.

**Health Tab**

The Health tab displays the following information:

![Health tab of the Database Maintenance job details page](/images/threatmanager/3.0/administration/configuration/systemsettings/databasehealth.webp)

- Database Size – Displays the size of the database file
- Events in queue – Displays the number of events in queue for potential threat detection purposes
- Last Heartbeat – Date timestamp for the last time the agent connection was checked
- Next Run Time – Date timestamp for the next time the job will run
