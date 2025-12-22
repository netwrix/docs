---
title: "AD_DeprovisionGroups Job"
description: "AD_DeprovisionGroups Job"
sidebar_position: 10
---

# AD_DeprovisionGroups Job

The AD_DeprovisionGroups Job provides an automated workflow to deprovision stale groups. This
workflow is completed by the action tasks.

**Step 1 –** Move stale groups to a staging OU for deletion.

**Step 2 –** The group is changed to a distribution list.

**Step 3 –** The assigned manager is alerted by email of the impending deletion.

**Step 4 –** The group is flagged as **To Be Deleted**.

**Step 5 –** After a configurable amount of days in the staging OU, the group is deleted from the
staging OU. The default is 365 days.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/admin/jobs/job/overview.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The AD_DeprovisionGroups page has the following configurable parameters:

- Days in the Staging OU before deletion

See the
[Customizable Analysis Parameters for the AD_DeprovisionGroups Job](#customizable-analysis-parameters-for-the-ad_deprovisiongroups-job)
topic for additional information.

## Analysis Tasks for the AD_DeprovisionGroups Job

Navigate to the **Active Directory** > **Cleanup** > **1.Groups** > **1. Deprovision Groups** >
**AD_Deprovision Groups** > **Configure** node and select **Analysis** to view the analysis tasks.

![Analysis Tasks for the AD_DeprovisionGroups Job](/images/accessanalyzer/11.6/solutions/activedirectory/cleanup/groups/deprovision/deprovisiongroupsanalysis.webp)

The default analysis tasks are:

- Identify Stale Groups – Creates the AD_DeprovisionGroups_Details table accessible under the job’s
  Results node
- Groups to Delete – Identifies groups in the Stale Groups OU that are ready to be deleted

    - This analysis task contains a configurable parameter: `@days_before_deleting`. See the
      [Customizable Analysis Parameters for the AD_DeprovisionGroups Job](#customizable-analysis-parameters-for-the-ad_deprovisiongroups-job)
      topic for additional information.

### Customizable Analysis Parameters for the AD_DeprovisionGroups Job

Customizable parameters enable you to set the values used to classify user and group objects during
this job’s analysis.

| Analysis Task    | Customizable Parameter Name | Default Value | Value Indicates                        |
| ---------------- | --------------------------- | ------------- | -------------------------------------- |
| Groups to Delete | @days_before_deleting       | 365           | Days in the staging OU before deletion |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
topic for additional information.

## Action Tasks for the AD_DepvisionGroups Job

Navigate to the **Active Directory** > **Cleanup** > **1.Groups** > **1. Deprovision Groups** >
**AD_DeprovisonGroups** > **Configure** node and select **Actions** to view the action tasks.

:::warning
Do not enable the actions unless it is required. Disable the actions after execution to
prevent making unintended and potentially harmful changes to Active Directory.
:::


![Action Tasks for the AD_DepvisionGroups Job](/images/accessanalyzer/11.6/solutions/activedirectory/cleanup/groups/deprovision/deprovisiongroupsaction.webp)

The action tasks are:

:::warning
The action tasks must be executed together and in order.
:::


- Move Groups – Move groups to staging OU

    - The target staging OU must be set in the Move Groups Action Task prior to executing the action
      tasks. See the
      [Configure the Target OU](/docs/accessanalyzer/11.6/solutions/activedirectory/cleanup/configuretargetou.md)
      topic for additional information.

- Disable Groups – The group is changed to a distribution list
- Notify Manager – Notify assigned manager by email of the impending deletion
- Update Description – The group is changed to a distribution list to prevent its use for
  authentication and flagged as **To Be Deleted**
- Delete Groups – After a configurable amount of days in the staging OU, the group is deleted. The
  default is 365 days.

After the `@days_before_deleting` analysis parameter has been configured and the target OU has been
set in the Move Groups Action Task, select the checkboxes next to all of the action tasks and click
**Execute Action** to execute the action tasks.
