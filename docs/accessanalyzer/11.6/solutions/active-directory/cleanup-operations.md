# AD_CleanupProgress Job

The AD_CleanupProgress Job performs checks against Active Directory security best practices in order
to proactively identify critical security configurations that leave Active Directory vulnerable to
attack. The result is a report which provides a listing of findings by severity and category with
corresponding details that can be used to prioritize and remediate security issues.

![AD_CleanupProgress Job in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/cleanupprogressjobstree.webp)

Workflow

**Step 1 –** Ensure the following prerequisites are met:

- The .Active Directory Inventory Job Group needs to be successfully run prior to running this job
- The following jobs from the Active Directory Solution must be run prior to running this job:

  - **Active Directory** > **1.Groups** > **AD_DuplicateGroups**
  - **Active Directory** > **2.Users** > **AD_DirectMembership**
  - **Active Directory** > **3.Computers** > **AD_StaleComputers**

**Step 2 –** Schedule the AD_Cleanup Progress Job to run every day after the prerequisites have been
satisfied.

**Step 3 –** Review the reports generated by the AD_CleanupProgress Job.

## Analysis Tasks for the AD_CleanupProgress Job

Navigate to the **Active Directory** > **Cleanup** > **AD_CleanupProgress** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the AD_CleanupProgress Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/cleanupprogressanalysis.webp)

The default analysis task is:

- Generates daily summary of AD exceptions – Creates the AD_CleanupProgress_DailySummary table
  accessible under the job’s Results node

In addition to the table created by the analysis task, the AD_CleanupProgress Job produces the
following pre-configured reports.

| Report                   | Description                                                        | Default Tags | Report Elements                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computer Cleanup Summary | This report tracks Active Directory computer exceptions over time. | None         | This report is comprised of two elements: - Line Chart – Displays a daily computer exceptions trend - Table – Provides details on daily computer exceptions |
| Group Cleanup Summary    | This report tracks Active Directory group exceptions over time.    | None         | This report is comprised of two elements: - Line Chart – Displays a daily group exceptions trend - Table – Provides details on daily group exceptions       |
| User Cleanup Summary     | This report tracks Active Directory user exceptions over time.     | None         | This report is comprised of two elements: - Line Chart – Displays a daily user exceptions trend - Table – Provides details on daily user exceptions         |

# AD_DeprovisionComputers_Status Job

The AD_DeprovisionComputers_Status Job tracks and reports on the progress of the computer
deprovisioning workflow.

## Analysis Tasks for the AD_DeprovisionComputers_Status Job

Navigate to the **Active Directory** > **Cleanup** > **3.Computers** >
**AD_DeprovisionComputers_Status** > **Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for AD_DeprovisionComputers_Status Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/computers/deprovisioncomputersstatusanalysis.webp)

The default analysis tasks are:

- Track Deletion – Creates the AD_DeprovisionComputers_Log table accessible under the job’s Results
  node

In addition to the tables and views created by the analysis task, the AD_DeprovisionComputers_Status
Job produces the following pre-configured report.

| Report                  | Description                                                                              | Default Tags | Report Elements                                                                                                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computer Deprovisioning | This report tracks actions taken each day of the Stale Computer Deprovisioning campaign. | None         | This report is comprised of three elements: - Line Chart – Displays cleanup progress - Table – Provides details on computer deprovisioning - Table – Provides action details |

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
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The AD_DeprovisionComputers page has the following configurable parameters:

- Days in the Staging OU before Deleting Account

See the
[Customizable Analysis Parameters for the AD_DeprovisionComputers Job](#customizable-analysis-parameters-for-the-ad_deprovisioncomputers-job)
topic for additional information.

## Analysis Tasks for the AD_DeprovisionComputers Job

Navigate to the **Active Directory** > **Cleanup** > **3.Computers** > **AD_Deprovision
Computers** > **Configure** node and select **Analysis** to view the analysis tasks.

![Analysis Tasks for the AD_DeprovisionComputers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/computers/deprovisioncomputersanalysis.webp)

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
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for additional information.

## Action Tasks for the AD_DeprovisionComputers Job

Navigate to the **Active Directory** > **Cleanup** > **3.Computers** > **AD_DeprovisionComputers** >
**Configure** node and select **Actions** to view the actions.

**CAUTION:** Do not enable the actions unless it is required. Disable the actions after execution to
prevent making unintended and potentially harmful changes to Active Directory.

![Action Tasks for the AD_DeprovisionComputers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/computers/deprovisioncomputersaction.webp)

The action tasks are:

**CAUTION:** The action tasks must be executed together and in order.

- Move Computers – Move computers to staging OU for deletion

  - The target staging OU must be set in the Move Computers Action Task prior to executing the
    action tasks. See the
    [Configure the Target OU](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
    topic for additional information.

- Notify Manager – Notify assigned manager by email of the impending deletion
- Disable Computers – Disable computer accounts
- Delete Computers – Delete computers from staging OU

After the `@days_before_deleting` analysis parameter has been configured and the target OU has been
set in the Move Computers Action Task, select the checkboxes next to all of the action tasks and
click **Execute Action** to execute the action tasks.

# 3.Computers Job Group

The 3.Computers Job Group identifies stale computer accounts, providing a workflow to safely
deprovision identified accounts.

![3.Computers Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/computers/computersjobtree.webp)

The jobs in the 3.Computers Job Group are:

- [AD_DeprovisionComputers Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – Provides a simple, automated workflow to deprovision stale and unused user accounts
- [AD_DeprovisionComputers_Status Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – Tracks all actions taken by the included deprovisioning workflow

Workflow

**Step 1 –** Ensure the following prerequisites are met:

- The .Active Directory Inventory Job Group needs to be successfully run
- For the AD_DeprovisionComputers Job, the target OU needs to be manually set in the Move Computers
  Action Task prior to executing the actions. See the
  [Action Tasks for the AD_DeprovisionComputers Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md#action-tasks-for-the-ad_deprovisioncomputers-job)
  topic for additional information.
- The AD_DeprovisionComputers Job needs to be run prior to running the
  AD_DeprovisionComputers_Status Job

**Step 2 –** Schedule the 3.Computers Job Group to run as desired after the prerequisites have been
satisfied.

**Step 3 –** Review the reports generated by the 3.Computers Job Group.

# Configure the Target OU

Follow the steps to configure the target staging OU.

**Step 1 –** Navigate to the **[Job]** > **Configure** > **Actions** node.

![Action Properties button on Action Selection page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/configuretargetouactionproperties.webp)

**Step 2 –** On the Action Selection page, select the desired action task and click **Action
Properties**.

**Step 3 –** In the Action Properties window, select **Configure Action**. The Active Directory
Action Module Wizard opens.

![Move Objects page of the Active Directory Action Module Wizard](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/configuretargetouactionmodulewizard.webp)

**Step 4 –** Navigate to the Move Objects page of the Active Directory Action Module Wizard. In the
OU field, enter or browse to the desired target OU. To create the target OU location, select the
**Create target OU location if it does not already exist** checkbox.

**Step 5 –** Navigate to the Summary page and click **Finish**.

The target OU is now set for the action task.

# AD_DeprovisionGroups_Status Job

The AD_DeprovisionGroups_Status Job tracks all actions taken by the Deprovisioning workflow.

## Analysis Task for the AD_DeprovisionGroups_Status Job

Navigate to the **Active Directory** > **Cleanup** > **1.Groups** > **1. Deprovision Groups** >
**AD_Deprovision Groups_Status** > **Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis tasks is
preconfigured for this job.

![Analysis Task for the AD_DeprovisionGroups_Status Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/groups/deprovision/deprovisiongroupsstatusanalysis.webp)

The default analysis task is:

- Track Actions – Creates the AD_DeprovisionGroups_Log and AD_DeprovisionGroups_Notes tables
  accessible under the job’s Results node

In addition to the table created by the analysis task, the AD_DeprovisionGroups_Status Job produces
the following pre-configured report.

| Report               | Description                                                                           | Default Tags | Report Elements                                                                                                                                                       |
| -------------------- | ------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Deprovisioning | This report tracks actions taken each day of the Stale Group Deprovisioning campaign. | None         | This report is comprised of three elements: - Line Chart – Displays cleanup progress - Table – Provides details on cleanup progress - Table – Provides action details |

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
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The AD_DeprovisionGroups page has the following configurable parameters:

- Days in the Staging OU before deletion

See the
[Customizable Analysis Parameters for the AD_DeprovisionGroups Job](#customizable-analysis-parameters-for-the-ad_deprovisiongroups-job)
topic for additional information.

## Analysis Tasks for the AD_DeprovisionGroups Job

Navigate to the **Active Directory** > **Cleanup** > **1.Groups** > **1. Deprovision Groups** >
**AD_Deprovision Groups** > **Configure** node and select **Analysis** to view the analysis tasks.

![Analysis Tasks for the AD_DeprovisionGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/groups/deprovision/deprovisiongroupsanalysis.webp)

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
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for additional information.

## Action Tasks for the AD_DepvisionGroups Job

Navigate to the **Active Directory** > **Cleanup** > **1.Groups** > **1. Deprovision Groups** >
**AD_DeprovisonGroups** > **Configure** node and select **Actions** to view the action tasks.

**CAUTION:** Do not enable the actions unless it is required. Disable the actions after execution to
prevent making unintended and potentially harmful changes to Active Directory.

![Action Tasks for the AD_DepvisionGroups Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/groups/deprovision/deprovisiongroupsaction.webp)

The action tasks are:

**CAUTION:** The action tasks must be executed together and in order.

- Move Groups – Move groups to staging OU

  - The target staging OU must be set in the Move Groups Action Task prior to executing the action
    tasks. See the
    [Configure the Target OU](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
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

# 1.Deprovision Job Group

The 1. Deprovision Groups Job Group provides a simple, automated workflow to deprovision stale
groups. The action tasks in this job group provide an automated workflow.

![1.Deprovision Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/groups/deprovision/groupsdeprovisionjobtree.webp)

The jobs in the 1. Deprovision Groups Job Group are:

- [AD_DeprovisionGroups Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – This job provides an automated workflow to deprovision stale groups
- [AD_DeprovisionGroups_Status Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – This job tracks and reports on the progress of all actions taken by the included Deprovisioning
  workflow

# 1.Groups Job Group

The 1.Groups Job Group provides a workflow to safely deprovision groups, as well as the ability to
stamp security groups with what resources they are given access to.

![1.Groups Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/groups/groupsjobtree.webp)

The jobs in the 1.Groups Job Group are:

- [1.Deprovision Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – This job group provides a simple, automated workflow to deprovision stale groups

  - [AD_DeprovisionGroups Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
    – This job provides a simple automated workflow to deprovision stale groups
  - [AD_DeprovisionGroups_Status Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
    – This job tracks and reports on the progress of the deprovisioning workflow

- [2.Group Stamping Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – This job group updates the Notes attribute for all security groups to show where the group is
  provisioned inside the environment.

  - [AD_GroupCleanup_Permissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
    – This job reports on where security groups are being used to assign permissions. This can be
    used to prioritize remediation for groups that are rarely used.
  - [AD_GroupStamping Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
    – This job replaces the Notes attribute for all security groups to show where the group is
    provisioned inside the environment. This overwrites the Notes field with data from Enterprise
    Auditor.

Workflow

**Step 1 –** Ensure the following prerequisites are met:

- The .Active Directory Inventory Job Group needs to be successfully run
- For the AD_DeprovisionGroups Job, the target OU needs to be manually set in the Move Groups Action
  Task prior to executing the actions. See the
  [Action Tasks for the AD_DepvisionGroups Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md#action-tasks-for-the-ad_depvisiongroups-job)
  topic for additional information.
- The AD_DeprovisionGroups Job needs to be run prior to running the AD_DeprovisionGroups_Status Job

**Step 2 –** Schedule the 1.Groups Job Group to run as desired after the prerequisites have been
satisfied.

**Step 3 –** Review the reports generated by the 1.Groups Job Group.

# AD_GroupCleanup_Permissions Job

The AD_GroupCleanup_Permissions Job reports on where security groups are being used to assign
permissions. This can be used to prioritize remediation for groups that are rarely used.

## Analysis Tasks for the AD_GroupCleanup_Permissions Job

Navigate to the **Active Directory** > **Cleanup** > **1.Groups** > **2. Group Stamping** >
**AD_GroupCleanup_Permissions** > **Configure** node and select **Analysis** to view the analysis
tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupCleanup_Permissions Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/groups/stamping/groupcleanuppermissionsanalysis.webp)

The default analysis tasks are:

- Summarize Group Type/Scope – Creates the SA_AD_GroupCleanup_GroupTypes table accessible under the
  job’s Results node
- Direct Permission Details – Creates the SA_AD_GroupCleanup_PermissionsImport table accessible
  under the job’s Results node
- Expanded Perms Details – Creates the SA_GroupCleanup_ExpandedPermissions table accessible under
  the job’s Results node
- Expanded Perms Summary – Creates the SA_GroupCleanup_ExpandedPermissionsSummary table accessible
  under the job’s Results node
- Access Counts by Group – Creates the SA_GroupCleanup_GroupAccessSprawl table accessible under the
  job’s Results node
- Permission and Access Counts by Group Scope – Creates the SA_AD_GroupCleanup_PermissionsByScope
  table accessible under the job’s Results node
- Permission and Access Counts by Toxic Condition – Creates the
  SA_AD_GroupCleanup_PermissionsByCondition table accessible under the job’s Results node
- Permission and Access Counts by Scan Type – Creates the SA_AD_GroupCleanup_ScanOverview table
  accessible under the job’s Results node
- Group Summary – Creates the SA_GroupCleanup_GroupSummary table accessible under the job’s Results
  node

In addition to the tables and views created by the analysis tasks, the AD_GroupCleanup_Permissions
Job produces the following pre-configured reports.

| Report                          | Description                                                                                                                                                  | Default Tags | Report Elements                                                                                                                                                                                                         |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Direct Permission Details | This report shows all direct permissions found by DAG for FileSystem, DAG for SharePoint, or imported into the Access Information Center from other sources. | None         | This report is comprised of one element: - Table – Provides group direct permission details                                                                                                                             |
| Group Permission Summary        | This report identifies what types of resources each security group is being used to apply permissions.                                                       | None         | This report is comprised of four elements: - Table – Provides details on permission scans - Table – Provides details on group access - Table – Provides details on toxic conditions - Table – Provides a group overview |

# AD_GroupStamping Job

The AD_GroupStamping Job updates the Notes attribute for all security groups to show where the group
is provisioned inside the environment. This overwrites the notes field with data from Enterprise
Auditor.

## Analysis Tasks for the AD_GroupStamping Job

Navigate to the **Active Directory** > **Cleanup** > **1.Groups** > **2. Group Stamping
AD_GroupStamping** > **Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_GroupStamping Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/groups/stamping/groupstampinganalysis.webp)

The default analysis tasks are:

- Identify Stale Groups – Creates the AD_DeprovisionGroups_Details table accessible under the job’s
  Results node
- Groups to Delete – Identifies groups in the Stale Groups OU ready to be deleted

In addition to the tables and views created by the analysis tasks, the AD_GroupStamping Job produces
the following pre-configured reports.

| Report         | Description                                                                     | Default Tags | Report Elements                                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Group Stamping | This report tracks all actions taken with the included group stamping workflow. | None         | This report is comprised of three elements: - Line Chart – Displays daily actions - Table – Provides details on daily actions - Table – Provides action details |

## Action Tasks for the AD_GroupStamping Job

View the action tasks by navigating to the **Active Directory** > **Cleanup** > **1.Groups** > **2.
Group Stamping AD_GroupStamping** > **Configure** node and select **Actions**.

![Action Tasks for the AD_GroupStamping Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/groups/stamping/groupstampingaction.webp)

- Stamp Groups – Update Notes field with Permissions

Select the checkbox next to The Stamp Groups Action Task and click **Execute Action** to execute the
action task.

# 2.Group Stamping Job Group

The 2. Group Stamping Job Group updates the Notes attribute for all security groups to show where
the group is provisioned inside the environment.

![2.Group Stamping Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/groups/stamping/groupsstampingjobtree.webp)

The jobs in the 2. Group Stamping Job Group are:

- [AD_GroupCleanup_Permissions Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – Reports on where security groups are being used to assign permissions
- [AD_GroupStamping Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – Updates the Note attribute for all security groups to show where the group is provisioned inside
  of the environment

# Cleanup Job Group

The **Active Directory** > **Cleanup** Job Group identifies potential stale and unused users,
computers, and groups as well as issues with group membership. Remediation workflows are included to
deprovision unnecessary objects.

**CAUTION:** Apply changes only to intended target Active Directory objects, and ensure only the
changes required are enabled. Enabling and executing action modules without consideration can
negatively impact Active Directory.

**_RECOMMENDED:_** Run the actions in a test environment before making changes to a production
environment.

![Cleanup Job Group Overview page](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/runninginstances/overviewpage.webp)

The job groups in the Cleanup Job Group are:

- [1.Groups Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – Provides an automated workflow to safely deprovision groups, as well as the ability to stamp
  security groups with what resources they are given access to
- [2.Users Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – Provides an automated workflow to deprovision stale and unused user accounts
- [3.Computers Job Group](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – Provides an automated workflow to deprovision stale computer accounts
- [AD_CleanupProgress Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – Tracks Active Directory computer, group, and user exceptions over time. This information can be
  used to provide a high-level picture of an organization's Active Directory cleanup effort.

# Recommended Configurations for AD Cleanup Job Group

The recommended configurations for the Cleanup Job Group are:

Dependencies

The Cleanup job group has the following prerequisites:

- The Active Directory Actions license feature is required
- The Active Directory Actions Module must be installed
- The .Active Directory Inventory Job Group needs to be successfully run prior to running this job
  group
- The following job groups from the Activity Directory job group need to be successfully run prior
  to running this job group:

  - 1.Groups
  - 2.Users
  - 3.Computers

Individual jobs and job groups within the Cleanup Job Group may have their own prerequisites and
dependencies. See the relevant job or job group topic for additional information.

Target Hosts

None

Schedule Frequency

Most of the jobs in this job group can be scheduled to run as desired. The AD_Cleanup Progress Job
should be scheduled to run every day.

History Retention

Not supported

Multi-console Support

Not supported

# AD_DeprovisionUsers_Status Job

The AD_DeprovisionUsers_Status Job tracks all actions taken by the included deprovisioning workflow.

## Analysis Tasks for the AD_DeprovisionUsers_Status Job

Navigate to the **Active Directory** > **Cleanup** > **2.Users** > **AD_DeprovisionUsers_Status** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis task. The analysis task is
preconfigured for this job.

![Analysis Tasks for the AD_DeprovisionUsers_Status Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/users/deprovisionusersstatusanalysis.webp)

The default analysis task is:

- Track History – Tracks all actions taken. Creates the SA_AD_DeprovisionUsers_Log accessible under
  the job’s Results node.

In addition to the tables and views created by the analysis task, the AD_DeprovisionUsers_Status Job
produces the following pre-configured report.

| Report              | Description                                                                          | Default Tags | Report Elements                                                                                                                                                          |
| ------------------- | ------------------------------------------------------------------------------------ | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| User Deprovisioning | This report tracks actions taken each day of the Stale User Deprovisioning campaign. | None         | This report is comprised of three elements: - Line Chart – Displays cleanup progress - Table – Provides details on user deprovisioning - Table – Provides action details |

# AD_DeprovisionUsers Job

The AD_DeprovisionUsers Job provides an automated workflow deprovision stale and unused user
accounts.

**Step 1 –** Move stale users to a staging OU for deletion.

**Step 2 –** The assigned manager is alerted by email of the impending deletion.

**Step 3 –** User accounts are disabled.

**Step 4 –** Users are flagged as **To Be Deleted**.

**Step 5 –** Delete users from the staging OU.

**Step 6 –** Remove stale users from all groups.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The AD_DeprovisionUsers page has the following configurable parameters:

- Days in the Stale Users OU before being deleted

See the
[Customizable Analysis Parameters for the AD_DeprovisionUsers Job](#customizable-analysis-parameters-for-the-ad_deprovisionusers-job)
topic for additional information.

## Analysis Tasks for the AD_DeprovisionUsers Job

Navigate to the **Active Directory** > **Cleanup** > **2.Users** > **AD_DeprovisionUsers** >
**Configure** node and select **Analysis** to view the analysis tasks.

![Analysis Tasks for the AD_DeprovisionUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/users/deprovisionusersanalysis.webp)

The default analysis tasks are:

- Identify Users to be Deleted – Imports data from stale users
- User Accounts to Delete – Identifies accounts in the Stale Accounts OU that are ready to be
  deleted

  - This analysis task contains a configurable parameter: `@days_before_deleting`. See the
    [Customizable Analysis Parameters for the AD_DeprovisionUsers Job](#customizable-analysis-parameters-for-the-ad_deprovisionusers-job)
    topic for additional information.

- Identify Group Membership – Identifies stale user membership to remove

### Customizable Analysis Parameters for the AD_DeprovisionUsers Job

Customizable parameters enable you to set the values used to classify user and group objects during
this job’s analysis.

| Analysis Task           | Customizable Parameter Name | Default Value | Value Indicates                                 |
| ----------------------- | --------------------------- | ------------- | ----------------------------------------------- |
| User Accounts to Delete | @days_before_deleting       | 365           | Days in the Stale Users OU before being deleted |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/administration/jobs-and-scheduling/job-management.md)
topic for additional information.

## Action Tasks for the AD_DeprovisionUsers Job

Navigate to the **Active Directory** > **Cleanup** > **2.Users** > **AD_DeprovisionUsers** >
**Configure** node and select **Actions** to view the actions.

**CAUTION:** Do not enable the actions unless it is required. Disable the actions after execution to
prevent making unintended and potentially harmful changes to Active Directory.

![Action Tasks for the AD_DeprovisionUsers Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/users/deprovisionusersaction.webp)

The action tasks are:

**CAUTION:** The action tasks must be executed together and in order.

- Move Users – Move users to staging OU for deletion

  - The target OU must be set in the Move Users Action Task prior to executing the action tasks.
    See the
    [Configure the Target OU](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
    topic for additional information.

- Notify Manager – Notify assigned manager by email of the impending deletion
- Disable Users – Disable user accounts
- Update Description – Flag users as **To Be Deleted**
- Delete Users – Delete users from staging OU
- Remove Membership – Remove stale users from all groups

After the `@days_before_deleting` analysis parameter has been configured and the target OU has been
set in the Move Users Action Task, select the checkboxes next to all of the action tasks and click
**Execute Action** to execute the action tasks.

# 2.Users Job Group

The 2.Users Job Group provides a workflow to deprovision stale and unused user accounts.

![2.Users Job Group in the Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/cleanup/users/usersjobtree.webp)

The jobs in the 2.Users Job Group are:

- [AD_DeprovisionUsers Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – Provides a simple and automated workflow to deprovisions stale and unused user accounts
- [AD_DeprovisionUsers_Status Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md)
  – Tracks and reports all actions taken by the included Deprovisioning workflow

Workflow

**Step 1 –** Ensure the following prerequisites are met:

- The .Active Directory Inventory Job Group needs to be successfully run
- For the AD_DeprovisionUsers Job, the target OU needs to be manually set in the Move Users Action
  Task prior to executing the actions. See the
  [Action Tasks for the AD_DeprovisionUsers Job](/docs/accessanalyzer/11.6/solutions/active-directory/cleanup-operations.md#action-tasks-for-the-ad_deprovisionusers-job)
  topic for additional information.
- The AD_DeprovisionUsers Job needs to be run prior to running the AD_DeprovisionUsers_Status Job

**Step 2 –** Schedule the 2.Users Job Group to run as desired after the prerequisites have been
satisfied.

**Step 3 –** Review the reports generated by the 2.Users Job Group.
