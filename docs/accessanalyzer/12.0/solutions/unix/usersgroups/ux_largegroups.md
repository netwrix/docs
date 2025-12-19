---
title: "UX_LargeGroups Job"
description: "UX_LargeGroups Job"
sidebar_position: 40
---

# UX_LargeGroups Job

The UX_LargeGroups job identifies groups with large member counts. These types of groups may cause
administrative overhead and burden in being able to easily understand who is getting access to
resources, or how much access is being granted to resources through these groups.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/12.0/admin/jobs/job/overview.md#parameter-configuration) topic for
instructions on how to edit parameters on a job overview page.

The UX_LargeGroups job has the following customizable parameter:

- Minimum size for a group to be considered large – Sets the threshold used by the Find large groups
  analysis task to determine if a group is considered to be large. The default is 5.

## Analysis Tasks for the UX_LargeGroups Job

Navigate to the **Unix** > **1.Users and Groups** > **UX_LargeGroups** > **Configure** node and
select Analysis to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.
:::


![Analysis Tasks for the UX_LargeGroups Job](/images/accessanalyzer/12.0/solutions/unix/usersgroups/largegroupsanalysis.webp)

The default analysis task is:

- Finds large groups. The parameter determining the minimum size for a large group can be configured
  in the SQL scripting module. – Creates the UX_LargeGroups_Details table accessible under the job’s
  Results node

    - The threshold value used to determine if a group is considered large can be customized. See
      the [Parameter Configuration](#parameter-configuration) for additional information.

In addition to the table and views created by the analysis tasks, the UX_LargeGroups job produces
the following pre-configured report:

| Report       | Description                                                    | Default Tags | Report Elements                                                                                                                                                 |
| ------------ | -------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Large Groups | This report identifies large groups within the audited domains | None         | This report is comprised of two elements: <ul><li>Bar Chart – Displays Top 5 Large Groups</li><li>Table – Provides information on Large Group Details</li></ul> |
