---
title: "Schedule Database Maintenance"
description: "Schedule Database Maintenance"
sidebar_position: 30
---

# Schedule Database Maintenance

You must schedule the database maintenance job, which runs the specified operation on each of the
enabled event type data, analytic data, and/or policy data older than a specific period. This job
can be run once now; it can be scheduled to run once at a later time; or it can be scheduled to run
on a regular rotation.

Follow the steps to configure a schedule.

![Database Maintenance window - Schedule tab](/images/threatprevention/8.0/admin/configuration/databasemaintenance/schedule.webp)

**Step 1 –** Click **Configuration** > **Database** > **Maintenance** on the menu. The Database
Maintenance window is displayed.

**Step 1 –** Click the **Schedule** tab.

**Step 1 –** Check the **Enabled** box.

**Step 2 –** Select a frequency to run the database maintenance job:

- One Time: Run now – Runs the database maintenance job once when the configurations on the Database
  Maintenance window are saved
- One Time: Run later – Runs the database maintenance job once according to the Start Date and Start
  Time set
- Daily – Runs the database maintenance job once a day according to the Start Date and Start Time
  set
- Weekly – Runs the database maintenance job once a week according to the Day Of Week, Start Date,
  and Start Time set
- Monthly – Runs the database maintenance job once a month according to the Day of Month, Start
  Date, and Start Time set

**Step 3 –** Set the options under When for the selected frequency.

- Start Date
- Start Time
- Day of Week (if applicable)
- Day of Month (if applicable)

**Step 4 –** Click **Save** to save the settings.

The database maintenance job is now scheduled to run at the configured time and day. All enabled
tasks at the time when the job runs are executed.

This scheduled job can be viewed through the Microsoft SQL Server Management Studio within the **SQL
Server Agent** > **Jobs** folder (SiDbMainJob).

![Database Maintenance job in Microsoft SQL Server Management Studio](/images/threatprevention/8.0/admin/configuration/databasemaintenance/dbmaintenancejob.webp)
