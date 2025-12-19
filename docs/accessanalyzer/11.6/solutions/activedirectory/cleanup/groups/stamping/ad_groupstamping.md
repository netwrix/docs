---
title: "AD_GroupStamping Job"
description: "AD_GroupStamping Job"
sidebar_position: 20
---

# AD_GroupStamping Job

The AD_GroupStamping Job updates the Notes attribute for all security groups to show where the group
is provisioned inside the environment. This overwrites the notes field with data from Enterprise
Auditor.

## Analysis Tasks for the AD_GroupStamping Job

Navigate to the **Active Directory** > **Cleanup** > **1.Groups** > **2. Group Stamping
AD_GroupStamping** > **Configure** node and select **Analysis** to view the analysis tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_GroupStamping Job](/images/accessanalyzer/11.6/solutions/activedirectory/cleanup/groups/stamping/groupstampinganalysis.webp)

The default analysis tasks are:

- Identify Stale Groups – Creates the AD_DeprovisionGroups_Details table accessible under the job’s
  Results node
- Groups to Delete – Identifies groups in the Stale Groups OU ready to be deleted

In addition to the tables and views created by the analysis tasks, the AD_GroupStamping Job produces
the following pre-configured reports.

| Report         | Description                                                                     | Default Tags | Report Elements                                                                                                                                                                             |
| -------------- | ------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Stamping | This report tracks all actions taken with the included group stamping workflow. | None         | This report is comprised of three elements: <ul><li>Line Chart – Displays daily actions</li><li>Table – Provides details on daily actions</li><li>Table – Provides action details</li></ul> |


## Action Tasks for the AD_GroupStamping Job

View the action tasks by navigating to the **Active Directory** > **Cleanup** > **1.Groups** > **2.
Group Stamping AD_GroupStamping** > **Configure** node and select **Actions**.

![Action Tasks for the AD_GroupStamping Job](/images/accessanalyzer/11.6/solutions/activedirectory/cleanup/groups/stamping/groupstampingaction.webp)

- Stamp Groups – Update Notes field with Permissions

Select the checkbox next to The Stamp Groups Action Task and click **Execute Action** to execute the
action task.
