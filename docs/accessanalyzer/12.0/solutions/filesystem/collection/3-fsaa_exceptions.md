---
title: "3-FSAA Exceptions Job"
description: "3-FSAA Exceptions Job"
sidebar_position: 100
---

# 3-FSAA Exceptions Job

The 3-FSAA Exceptions job doesn't use the FSAA Data Collector. Instead it runs analysis on the data
returned by the Access Auditing collection jobs to identify potential security concerns.

## Parameter Configuration

Use the Configuration section on a Job's overview page to modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/12.0/admin/jobs/job/overview.md#parameter-configuration) topic for
instructions on how to edit parameters on a job overview page.

The 3-FSAA Exceptions job has the following customizable parameter:

- Well Known high risk SIDS – Add any additional custom SIDS, but don't remove the default SIDS.

See the
[Analysis Tasks for the 3-FSAA Exceptions Job](#analysis-tasks-for-the-3-fsaa-exceptions-job) topic
for additional information.

## Analysis Tasks for the 3-FSAA Exceptions Job

View the analysis tasks by navigating to the **FileSystem** > **0.Collection** > **3-FSAA
Exceptions** > **Configure** node and select **Analysis**.

:::warning
Most of these analysis tasks are preconfigured and shouldn't be modified and or
deselected. You can deselect particular tasks as specified, but it isn't recommended.
:::


![Analysis Tasks for the 3-FSAA Exceptions Job](/images/accessanalyzer/12.0/solutions/filesystem/collection/fsaaexceptionsanalysis.webp)

The following analysis tasks are selected by default:

- Open resources – Any folders that are openly accessible through file shares. Can be deselected if
  open resource information isn't desired.

    - Well known high risk SIDS have been set in the `#SIDS` parameter. Don't remove these, but you
      can add additional custom SIDS. See the
      [Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/12.0/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
      topic for additional information.

- Disabled users – Any folders where disabled users have been granted access

    - Can be deselected if disabled user information isn't desired

- Stale users – Any folders where stale users have been granted access. Stale users are users who
  have not logged in for more than 120 days.

    - Can be deselected if stale user information isn't desired

- Reindex Exception IDs – Displays views within the **Results** node of the Access Analyzer Console
