---
title: "General Tab"
description: "General Tab"
sidebar_position: 10
---

# General Tab

The General tab is for changing the job name and description.

![General tab of Job Properties](/images/accessanalyzer/11.6/admin/jobs/job/properties/general.webp)

The following options are available:

- Job Name
- Description
- Log Level – Indicates the job log level, which can be inherited from the global **Settings** >
  **Application** log level or customized here. See below for additional information.
- Write CSV Files To Job Output Directory – Exports the native data table created by a query to a
  CSV file in the job’s output directory. If there are multiple tables in the job, this option
  creates one file per table.
- Timeout [value] minutes – Job’s thread timeout value
- Command – Provides the ability to enter a command that will be executed from the command line upon
  job completion

## Log Level

The log level feature includes the following options:

- Use global setting – use the Application log level feature, configured at the global level.

    :::note
    By selecting the another option from the drop-down list, you break inheritance for
    this job.
    :::


- Debug – Records everything that happens during job execution, most verbose level of logging
    - Records all Info level information
    - Records everything else that happens
    - Creates the largest file
- Info – Records information about what stage of the job is being performed when errors or warnings
  occurred
    - Records all Warning level information
    - Records job progress information
- Warning – Records all warnings which occur during job execution
    - Records all Error level information
    - Records all warnings and the time of occurrence
- Error – Records all errors which occur during job execution
    - Records job start time
    - Records errors and the time of occurrence
    - Records job completion time

:::note
You can switch between log levels. All the levels, including the one that you choose,
shall be set for messaging in the application.
:::


![Log Level Options](/images/accessanalyzer/11.6/admin/jobs/job/properties/generalloglevel.webp)

For example, this is where you set the messaging for Info, Warning, or Error at a job level.
