---
title: "Status Node"
description: "Status Node"
sidebar_position: 10
---

# Status Node

After a job runs, tables containing information on host connection status, job statistics, job task
statistics, and error and warning messages appear under the job’s Status node:

![Status Node](/images/accessanalyzer/11.6/admin/jobs/job/statusnode.webp)

The Status node tables are:

- ConnectStatus table – Lists all hosts queried during job execution and the access status of the
  scan, unless you're using the System Default
- Job Stats table – Provides information on the selected job’s runtime details, according to the
  global configuration set in the **Settings** > **Application** node. By default, this is set to
  not filter the data.
- Task Stats table – Provides information for each task run during job execution, according to the
  global configuration set in the **Settings** > **Application** node. By default, this is set to
  filter to the most recent data.

    :::note
    The Job Statistics Retention settings in the **Settings** > **Application** node
    control how long the database keeps the job statistics history and displays it in the Job Stats
    and Task Stats tables. See the
    [Application](/docs/accessanalyzer/11.6/admin/settings/application/overview.md)
    topic for additional information.
    :::


- Messages table – Provides a list of any warning or error messages that occurred during the
  execution of the job. For example, a frequently generated message is
  `WARNING: No Host found for processing`.

    - If an analysis or reporting job generates this message, there is no problem as that
      type of job doesn't need a host list assigned
    - However, if a job running a data collection query generates this message, this warning
      explains why the native data table is empty
