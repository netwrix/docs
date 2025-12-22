---
title: "Enable Database Maintenance"
description: "Enable Database Maintenance"
sidebar_position: 10
---

# Enable Database Maintenance

Database maintenance can be enabled for all or specific event types, analytics, and/or policies. It
can be enabled for any combination of event type data, analytic data, and policy data.

:::tip
Remember, the Event Type maintenance settings take precedence over Policy maintenance settings
where the selected policy employs that event type.
:::


Follow the steps to enable database maintenance.

**Step 1 –** Click **Configuration** > **Database** > **Maintenance** on the menu. The Database
Maintenance window is displayed.

**Step 1 –** Select the desired tab (Event Type, Analytics, or Policy) and check the **Enabled** box
at the top of the tab.

![Database Maintenance window - Event Type tab](/images/threatprevention/7.4/admin/configuration/databasemaintenance/enablesettings.webp)

**Step 2 –** Select a maintenance task (Event Type, Analytic, or Policy). To set the same operation
and retention period for multiple tasks, use the **ctrl-left click** command.

**Step 3 –** Select either **Move** or **Delete** from the Operation drop-down menu.

- The Move operation requires the Archive DB tab to be configured. See the
  [Archive Data](/docs/threatprevention/7.4/admin/configuration/databasemaintenance/archive.md)
  topic for additional information.

**Step 4 –** Set the Retention Period value and unit (Day, Week, or Month). This value indicates the
age of the data to be kept when the database maintenance job is run. Older data is deleted or
moved/archived as indicated by the selected Operation.

**Step 5 –** Click **Set**.

**Step 6 –** Check the **Enable** box to include the tasks in the next database maintenance job.
Only those event types, analytics, and/or policies with the Enabled checkbox selected are included
in the job execution.

**Step 7 –** Click **Save**.

The configured maintenance options are displayed in the Operation and Retention Period columns of
the table.

Disabling a previously enabled database maintenance task does not remove the configured settings,
only prevents that task from being executed in the next run of the database maintenance job.
