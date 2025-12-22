---
title: "History"
description: "History"
sidebar_position: 50
---

# History

The History node is where the history retention of job data and job logs are configured. The setting
specified here at the global level applies to all jobs in the Jobs tree unless specifically changed
at the job group or job level. See the
[History Node](/docs/accessanalyzer/11.6/admin/jobs/group/settings/history.md)
and
[History Tab](/docs/accessanalyzer/11.6/admin/jobs/job/properties/history.md)
topics for additional information.

![History Global Settings](/images/accessanalyzer/11.6/admin/settings/history.webp)

The Data Retention Period settings are for configuring the job data history retention within the
database. There are three options:

- Never retain previous job data
- Retain previous job data for [number] [time period]
- Always retain previous job data

Set the Data Retention Period at the global level to **Never retain previous job data**. This allows
for more control over the quantity of data by applying history retention at the job group or job
level. All jobs run with this default setting only keep the most current record set.

:::warning
It is important to understand that some pre-configured jobs require history retention
while others do not support it. Changing the history retention settings at the global level can
cause issues with data analysis and reporting on jobs that don't support it. See the relevant job
group and job descriptions for additional information.
:::


The Diagnostics Retention Period settings determine how long this data is retained for all jobs that
do not have an explicit setting. Setting the retention period for a specific job overrides the
default setting. There are two settings:

- Logs and Messages

    - Retain previous application logs, job logs, and messages for [number] [time period] – Controls
      how long the messages for previous job executions are stored in the SA_Messages table for each
      job. Older job execution messages are cleared.
    - The default value is 7 Times. With this setting, the messages are stored for the previous
      seven job executions.

- Job Statistics

    - Retain job statistics in database for [number] [time period] – Controls how long job
      statistics history is stored within the Enterprise Auditor database in the following two
      tables:

        - SA_JobStatsTbl
        - SA_JobTaskStatsTbl

    - This setting is only available at the global settings level. The default value is 100 days.
      This directly affects each job’s **Status** node. See the
      [Status Node](/docs/accessanalyzer/11.6/admin/jobs/job/status.md)
      topic for additional information.

For both the **Logs and Messages** and **Job Statistics** options above:

- Enter a number in the first textbox and select the desired time period from the drop-down menu in
  the second box. Retention can be set to a specific number of **Days**, **Weeks**, **Months**, or
  **Times** for both.
- All jobs run with this setting add the newly collected data set or job logs on top of the
  previously collected record sets or logs. Any record sets or logs outside the specified historical
  retention limit are dropped.

The **Cancel** and **Save** buttons are in the lower-right corner of the History view. These buttons
become enabled when modifications are made to the History global settings. Whenever changes are made
at the global level, click **Save** and then **OK** to confirm the changes. Otherwise, click
**Cancel** if no changes were intended.

## Job Data History Retention & Database Size Concerns

A major concern around job data history retention is the impact it can have on database size. The
following scenario explains a common concern.

- The **Retain previous application logs, job logs, and message for** or **Retain job statistics in
  database for** setting is set to an extended time period and the database size is unmanageable

    - To reduce data retention periods, navigate to the **Settings** > **History** node. Change the
      time period to a smaller interval, for example 90 days. Click **Save** and rerun the jobs.
    - All of the record sets outside the new retention limit are dropped, and the database size is
      back down where it belongs

## Job Logs

The job logs are stored within the output folder of each job. They can be read in the Enterprise
Auditor Console within the job’s **Status** > **Messages** table. To access the logs within the
job’s directory, right-click on the job’s node in the Navigation pane and select **Explore Folder**.

![Job Logs in the job's Output folder in File Explorer](/images/accessanalyzer/11.6/admin/settings/historyjoblogs.webp)

The most recent log is open. Older jobs are stored as zip files, according to the Log Retention
Period setting. Each log is named in the following format:

- Open/Latest Log Name – `[Jobname]_Log.tsv`
- Older/Zipped Log Name – `[Jobname]_Log_[Date]_[Time].zip`
