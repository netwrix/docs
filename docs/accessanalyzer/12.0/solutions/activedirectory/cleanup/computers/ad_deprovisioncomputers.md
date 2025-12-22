---
title: "AD_DeprovisionComputers Job"
description: "AD_DeprovisionComputers Job"
sidebar_position: 10
---

# AD_DeprovisionComputers Job

The AD_DeprovisionComputers Job provides a simple automated workflow deprovision stale computers.

**Step 1 –** Move stale computers to a staging OU for deletion.

**Step 2 –** The assigned manager is alerted by email of the impending deletion.

**Step 3 –** Disables computer accounts.

**Step 4 –** After a configurable amount of days in the staging OU, deletes computers from the
staging OU. The default is 365 days.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/12.0/admin/jobs/job/overview.md#parameter-configuration) topic for
instructions on how to edit parameters on a job overview page.

The AD_DeprovisionComputers page has the following configurable parameters:

- Days in the Staging OU before Deleting Account

See the
[Customizable Analysis Parameters for the AD_DeprovisionComputers Job](#customizable-analysis-parameters-for-the-ad_deprovisioncomputers-job)
topic for additional information.

## Analysis Tasks for the AD_DeprovisionComputers Job

Navigate to the **Active Directory** > **Cleanup** > **3.Computers** > **AD_Deprovision
Computers** > **Configure** node and select **Analysis** to view the analysis tasks.

![Analysis Tasks for the AD_DeprovisionComputers Job](/images/accessanalyzer/12.0/solutions/activedirectory/cleanup/computers/deprovisioncomputersanalysis.webp)

The default analysis tasks are:

- Identify Stale Computers – Creates the AD_DeprovisionComputers_Details table accessible under the
  job’s Results node
- Computer Accounts to Delete – Creates the AD_DeprovisionComputers_ToBeDeleted table accessible
  under the job’s Results node

    - This analysis task contains a configurable parameter: `@days_before_deleting`. See the
      [Customizable Analysis Parameters for the AD_DeprovisionComputers Job](#customizable-analysis-parameters-for-the-ad_deprovisioncomputers-job)
      topic for additional information.

### Customizable Analysis Parameters for the AD_DeprovisionComputers Job

Customizable parameters enable you to set the values used to classify user and group objects during
this job’s analysis.

| Analysis Task               | Customizable Parameter Name | Default Value | Value Indicates                                |
| --------------------------- | --------------------------- | ------------- | ---------------------------------------------- |
| Computer Accounts to Delete | @days_before_deleting       | 365           | Days in the staging OU before deleting account |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/12.0/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
topic for additional information.

## Action Tasks for the AD_DeprovisionComputers Job

Navigate to the **Active Directory** > **Cleanup** > **3.Computers** > **AD_DeprovisionComputers** >
**Configure** node and select **Actions** to view the actions.

:::warning
Do not enable the actions unless it is required. Disable the actions after execution to
prevent making unintended and potentially harmful changes to Active Directory.
:::


![Action Tasks for the AD_DeprovisionComputers Job](/images/accessanalyzer/12.0/solutions/activedirectory/cleanup/computers/deprovisioncomputersaction.webp)

The action tasks are:

:::warning
The action tasks must be executed together and in order.
:::


- Move Computers – Move computers to staging OU for deletion

    - The target staging OU must be set in the Move Computers Action Task prior to executing the
      action tasks. See the [Configure the Target OU](/docs/accessanalyzer/12.0/solutions/activedirectory/cleanup/configuretargetou.md) topic for additional
      information.

- Notify Manager – Notify assigned manager by email of the impending deletion
- Disable Computers – Disable computer accounts
- Delete Computers – Delete computers from staging OU

After the `@days_before_deleting` analysis parameter has been configured and the target OU has been
set in the Move Computers Action Task, select the checkboxes next to all of the action tasks and
click **Execute Action** to execute the action tasks.
