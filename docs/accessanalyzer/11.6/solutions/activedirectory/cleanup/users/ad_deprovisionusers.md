---
title: "AD_DeprovisionUsers Job"
description: "AD_DeprovisionUsers Job"
sidebar_position: 10
---

# AD_DeprovisionUsers Job

The AD_DeprovisionUsers Job provides an automated workflow deprovision stale and unused user
accounts.

**Step 1 –** Move stale users to a staging OU for deletion.

**Step 2 –** Notify the assigned manager by email of the impending deletion.

**Step 3 –** Disable the user accounts.

**Step 4 –** Flag users as **To Be Deleted**.

**Step 5 –** Delete users from the staging OU.

**Step 6 –** Remove stale users from all groups.

## Parameter Configuration

Use the Configuration section on a Job's overview page to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/admin/jobs/job/overview.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The AD_DeprovisionUsers page has the following configurable parameters:

- Days in the Stale Users OU before being deleted

See the
[Customizable Analysis Parameters for the AD_DeprovisionUsers Job](#customizable-analysis-parameters-for-the-addeprovisionusers-job)
topic for additional information.

## Analysis Tasks for the AD_DeprovisionUsers Job

Navigate to the **Active Directory** > **Cleanup** > **2.Users** > **AD_DeprovisionUsers** >
**Configure** node and select **Analysis** to view the analysis tasks.

![Analysis Tasks for the AD_DeprovisionUsers Job](/images/accessanalyzer/11.6/solutions/activedirectory/cleanup/users/deprovisionusersanalysis.webp)

The default analysis tasks are:

- Identify Users to be Deleted – Imports data from stale users
- User Accounts to Delete – Identifies accounts in the Stale Accounts OU that are ready to be
  deleted

    - This analysis task contains a configurable parameter: `@days_before_deleting`. See the
      [Customizable Analysis Parameters for the AD_DeprovisionUsers Job](#customizable-analysis-parameters-for-the-addeprovisionusers-job)
      topic for additional information.

- Identify Group Membership – Identifies stale user membership to remove

### Customizable Analysis Parameters for the AD_DeprovisionUsers Job

With the customizable parameters, you can set the values used to classify user and group objects during
this job’s analysis.

| Analysis Task           | Customizable Parameter Name | Default Value | Value Indicates                                 |
| ----------------------- | --------------------------- | ------------- | ----------------------------------------------- |
| User Accounts to Delete | @days_before_deleting       | 365           | Days in the Stale Users OU before being deleted |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
topic for additional information.

## Action Tasks for the AD_DeprovisionUsers Job

Navigate to the **Active Directory** > **Cleanup** > **2.Users** > **AD_DeprovisionUsers** >
**Configure** node and select **Actions** to view the actions.

:::warning
Don't enable the actions unless it is required. Disable the actions after execution to
prevent making unintended and potentially harmful changes to Active Directory.
:::


![Action Tasks for the AD_DeprovisionUsers Job](/images/accessanalyzer/11.6/solutions/activedirectory/cleanup/users/deprovisionusersaction.webp)

The action tasks are:

:::warning
The action tasks must be executed together and in order.
:::


- Move Users – Move users to staging OU for deletion

    - The target OU must be set in the Move Users Action Task before executing the action tasks.
      See the
      [Configure the Target OU](/docs/accessanalyzer/11.6/solutions/activedirectory/cleanup/configuretargetou.md)
      topic for additional information.

- Notify Manager – Notify assigned manager by email of the impending deletion
- Disable Users – Disable user accounts
- Update Description – Flag users as **To Be Deleted**
- Delete Users – Delete users from staging OU
- Remove Membership – Remove stale users from all groups

After you configure the `@days_before_deleting` analysis parameter and set the target OU in the Move
Users Action Task, select the checkboxes next to all of the action tasks and click
**Execute Action** to execute the action tasks.
