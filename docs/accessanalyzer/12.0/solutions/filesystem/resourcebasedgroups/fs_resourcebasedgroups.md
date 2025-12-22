---
title: "FS_ResourceBasedGroups Job"
description: "FS_ResourceBasedGroups Job"
sidebar_position: 10
---

# FS_ResourceBasedGroups Job

The FS_ResourceBasedGroups Job is designed to report on and take action against resources from
targeted file servers that can have their permissions structure transformed to a resource-based
group implementation.

## Workflow

**Step 1 –** Ensure that there is up-to-date **.Active Directory Inventory** Job Group data.

**Step 2 –** Ensure that there is up-to-date **FileSystem** > **0.Collection** Job Group data.

**Step 3 –** (Optional) Configure a Host List for the job at the job level.

:::note
If a host list is not configured, this job will analyze and commit actions on every File
System server known to Access Analyzer. To scope the actions to target specific servers, configure a
host list at the job level to target only those servers.
:::


**Step 4 –** Model the intended changes:

- Configure the Analyze Group Permissions analysis task
- Verify that all actions are disabled

    :::warning
    Do not make configuration changes to the analysis tasks after reviewing and
    approving the Change Modeling report
    :::


- Execute the analysis tasks to generate the Change Modeling report and review the proposed changes
- See the [Model Intended Changes](#model-intended-changes) topic for additional information

**Step 5 –** Configure and execute Active Directory actions:

- Configure and enable the Create Groups action task
- Configure and enable the Update Members action task
- Execute the Active Directory actions
- See the
  [Configure & Execute Active Directory Action Tasks](#configure--execute-active-directory-action-tasks)
  topic for additional information

**Step 6 –** Execute File System actions:

- Allow an appropriate grace period for token refresh prior to executing File System action tasks,
  for example one week
- Disable the Active Directory action tasks
- Enable the File System action tasks
- Execute the File System action tasks
- See the [Execute File System Action Tasks](#execute-file-system-action-tasks) topic for additional
  information

**Step 7 –** Analyze and report on action history:

- Disable all action tasks.
- Generate the Action History report and review it.
- See the [Analyze and Report on Action History](#analyze-and-report-on-action-history) topic for
  additional information

**Additional Options**

**Step 8 –** (Optional) Create and apply permissions for traverse groups based on previous resource
based groups. See the [FS_TraverseGroups Job](/docs/accessanalyzer/12.0/solutions/filesystem/resourcebasedgroups/fs_traversegroups.md) topic for additional
information.

**Step 9 –** (Optional) Import resources and access groups from the FS_ResoureBasedGroup Job into
the Netwrix Access Information Center. See the
[FS_ResourceBasedGroupAICImport Job](/docs/accessanalyzer/12.0/solutions/filesystem/resourcebasedgroups/fs_resourcebasedgroupaicimport.md) topic for additional
information.

## Model Intended Changes

Prior to executing the actions to apply changes, the proposed changes can be modeled and reviewed to
determine if the parameters are configured as desired.

### Configure the Analyze Group Permissions Analysis Task

The Analyze Group Permissions analysis task in the FS_ResourceBasedGroups Job contains parameters
for group permissions that should be configured and then reviewed in the Change Modeling report.
View the analysis tasks by navigating to the **Jobs** > **FileSystem** > **ResourceBasedGroups** >
**FS_ResourceBasedGroups** > **Configure** node and select **Analysis**.

![Analyze Group Permissions analysis task in the FS_ResourceBasedGroups Job](/images/accessanalyzer/12.0/solutions/filesystem/resourcebasedgroups/rbganalysis.webp)

- Analyze Group Permissions – Creates the FS_ResourceBasedGroups_NewACLs table accessible under the
  job’s Results node.

    - This analysis task contains configurable parameters: #SA_Job_Hosts, @levels_down,
      @naming_convention, @add_admin_groups, #folders, @activity_filter.

Configure the following parameters. See the
[SQLscripting Analysis Module](/docs/accessanalyzer/12.0/admin/analysis/sqlscripting.md) topic for additional
information.

| Analysis Task             | Customizable Parameter Name | Default Value                                        | Value Indicates                                                                                                                                                                                                                                                           |
| ------------------------- | --------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Analyze Group Permissions | #SA_Job_Hosts               |                                                      | List of hosts that are associated with the job. The job acts against these hosts. Review the host list. If the host list requires updating, update the host list at the job level                                                                                         |
| Analyze Group Permissions | @levels_down                | 0                                                    | Number of levels down from share to root to assign permissions                                                                                                                                                                                                            |
| Analyze Group Permissions | @naming_convention          | FS*[HostName]*[ShareName]_[FolderName]_[Permissions] | Naming convention for resource based groups                                                                                                                                                                                                                               |
| Analyze Group Permissions | @add_admin_groups           | 1                                                    | Add full control admin groups. 1=true. 0=false.                                                                                                                                                                                                                           |
| Analyze Group Permissions | @admin_groups               |                                                      | ObjectSIDs of admin groups to add to every share if @add_admin_groups = 1                                                                                                                                                                                                 |
| Analyze Group Permissions | #folders                    |                                                      | List of folders to assign RBG to. Overrides @levels_down.                                                                                                                                                                                                                 |
| Analyze Group Permissions | @activity_filter            | 1000                                                 | Filter out users with last activity older than X days ago. Will filter out users who have not accessed the folder within the specified threshold. If activity records show the user has never accessed the folder, users will still be included in resource based groups. |

### Execute the Analysis Tasks

Execute the analysis tasks to generate the Change Modeling report and review the proposed changed
prior to executing the actions to apply the changes.

| Report          | Description                                                            | Default Tags | Report Elements                                                                                                                                                                                                                                   |
| --------------- | ---------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Change Modeling | This report shows proposed changes of access for the targeted folders. | None         | This report is comprised of three elements: <ul><li>Pie Chart – Displays a proposed access changes summary</li><li>Table – Provides details on proposed access changes by share</li><li>Table – Provides details on access modification</li></ul> |


The Change Modeling report should be used to gain acceptance on the following areas before
implementing the changes:

- Group Naming Conventions
- Cases of Changed Access

Access changes occur in the following cases:

- The user is granted full access, but is not a member of the administrator group specified in the
  analysis parameters
- The user is granted less access, but is a member of the administrator group specified in the
  analysis parameters
- The user has not used access within the timeframe configured in the analysis parameters

Follow the steps to model the proposed changes.

**Step 1 –** Make sure all of the analysis tasks are enabled.

:::warning
Prior to executing the analysis tasks, make sure that all action tasks are disabled.
The purpose at this point is only to model the intended changes.
:::


**Step 2 –** In the Configure node, select **Actions** and make sure that all of the action tasks
are disabled.

**Step 3 –** Right click on the **Resource Based Groups** folder and select **Run Group**. This will
generate the Change Modeling report.

- Wait for the queued jobs to execute.

**Step 4 –** In the **FS_ResourceBasedGroups** node, navigate to **Results** > **Change Modeling**
to review the proposed changes prior to executing the actions to apply the changes.

The Change Modeling report has been created for review. Ensure the modeled changes are approved
before continuing with implementing them.

## Configure & Execute Active Directory Action Tasks

:::warning
Do not modify the analysis tasks after the Change Modeling report has been reviewed and
approved. The approved modeled changes are implemented through the execution of the action tasks.
:::


The Active Directory action tasks create and populate resource based groups. The Create Groups and
Update Members action tasks must be updated to specify a Target OU for group creation prior to
enabling and executing the actions. It should also be verified that these action tasks are targeting
the same domain controller.

View the action tasks by navigating to the **Jobs** > **FileSystem** > **Resourced Based Groups** >
**FS_ResourceBasedGroups** > **Configure** node and select **Actions**.

![Active Directory Action Tasks](/images/accessanalyzer/12.0/solutions/filesystem/resourcebasedgroups/rbgactivedirectoryactions.webp)

There are the following two Active Directory action tasks:

- Create Groups – Creates resource based groups
- Update Members – Adds members to the resource based groups based on permissions

It is recommended to review the tables used by the actions prior to executing the actions. The
actions act upon the data within the following tables:

- FS_ResourceBasedGroups_GroupsToCreate
- FS_ResourceBasedGroups_NewACLs

The actions populate the Create Groups and Update Members tables, which can be viewed under the
job’s Results node. The FS_ResourceBasedGroups Job will run analysis tasks against these tables.

### Configure & Enable the Create Groups Action Task

Follow the steps to configure the Create Groups action task.

**Step 1 –** Select the action and click **Action Properties**.

**Step 2 –** On the Action Properties page, click **Configure Action**.

**Step 3 –** In the Active Directory Action Module Wizard, navigate to the Create Groups page.

![AD Action Module Wizard Create Groups page](/images/accessanalyzer/12.0/solutions/filesystem/resourcebasedgroups/creategroups.webp)

**Step 4 –** In the OU box, select the OU where the groups will be created.

**Step 5 –** Navigate to the Options page and verify that the domain controller used to create
groups is the same domain controller used in the Update Members action task. It is a best practice
to identify the domain controller that is closest to the file server and use that domain controller.

**Step 6 –** Navigate to the Summary page and click **Finish**.

**Step 7 –** On the Action Selection page, select the Create Groups action's checkbox to enable it.

The Create Groups action is configured.

### Configure & Enable the Update Members Action Task

Follow the steps to configure the Create Groups action task.

**Step 1 –** Select the action task and click **Action Properties**.

**Step 2 –** On the Action Properties page, click **Configure Action**.

**Step 3 –** In the Active Directory Action Module Wizard, navigate to the Group Membership page.

![AD Action Module Wizard Groups Membership page](/images/accessanalyzer/12.0/solutions/filesystem/resourcebasedgroups/rbggroupsmembership.webp)

**Step 4 –** On the Create Groups page, **Target Group by OU** is selected by default. In the OU
box, select the target OU.

**Step 5 –** Navigate to the Options page and verify that the domain controller used to create
groups is the same domain controller used in the Create Groups action task. It is a best practice to
identify the domain controller that is closest to the file server and use that domain controller.

**Step 6 –** Navigate to the Summary page and click **Finish**.

**Step 7 –** On the Action Selection page, select the Update Members action's checkbox to enable it.

The Update Members action is configured.

### Execute Active Directory Action Tasks

Make sure that the File System actions are deselected and execute the Active Directory action tasks.
The Create Groups action creates the resource based groups. The Update Members action populates
those groups.

Enabled action tasks can be manually executed at the Actions node. Action tasks can be scheduled
only at the job level.

Follow the steps to execute the AD actions.

:::warning
Do not modify the analysis tasks after the Change Modeling report has been reviewed and
approved. The approved modeled changes are implemented through the execution of the action tasks.
:::


:::info
Disable the analysis tasks. It is not necessary to collect the data again.
:::


**Step 1 –** On the Action Selection page, enable the **Create Groups** and **Update Members**
actions.

**Step 2 –** Right-click on the **Resource Based Groups** folder and select **Run Group**.

- Wait for the queued jobs to execute.

The resource based groups are created and populated.

## Execute File System Action Tasks

:::warning
Prior to executing the File System action tasks, allow a grace period, for example one
week. This is important for token refresh to occur as users log off and log on again.
:::


The File System actions modify folder permissions and break inheritance. The Modify Permissions and
Break Inheritance actions modules do not require any configuration.

View the action tasks by navigating to the **Jobs** > **FileSystem** > **Resourced Based Groups** >
**FS_ResourceBasedGroups** > **Configure** node and select **Actions**.

![File System action tasks](/images/accessanalyzer/12.0/solutions/filesystem/resourcebasedgroups/rbgfilesystemactions.webp)

There are the following two File System action tasks:

- Modify Permissions – Modifies folder permissions
- Break Inheritance – Breaks inheritance and remove all previous permissions

It is recommended to review the tables used by the actions prior to executing the actions. The
actions act upon the data within the following table:

- FS_ResourceBasedGroups_GroupsToCreate

The actions populate the Modify Permissions and Break Inheritance tables, which can viewed under the
job’s Results node. The FS_ResourceBasedGroups Job will run analysis tasks against these tables.

Follow the steps to execute the FS actions.

:::warning
Do not modify the analysis tasks after the Change Modeling report has been reviewed and
approved. The approved modeled changes are implemented through the execution of the action tasks.
:::


**Step 1 –** On the Action Selection page, disable the **Create Groups** and **Update Members**
actions.

**Step 2 –** Enable the **Modify Permissions** and **Break Inheritance** actions.

**Step 3 –** Right-click on the **Resource Based Groups** folder and select **Run Group**.

- Wait for the queued jobs to execute.

The File System action tasks assign all of the newly-created groups to File System resources with
the configured permissions. All other permissions will have been removed from the resources.

## Analyze and Report on Action History

The Action History report generated by the job shows all actions taken on each share for audit trail
purposes.

| Report         | Description                                                                 | Default Tags | Report Elements                                                                                                                   |
| -------------- | --------------------------------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| Action History | This report shows all actions taken on each share for audit trail purposes. | None         | This report is comprised of one element: <ul><li>Table – This table provides details on the actions taken on each share</li></ul> |


Follow the steps to analyze and report on action history.

:::warning
Disable all of the action tasks prior to generating the Action History report.
:::


**Step 1 –** On the Action Selection page, disable the **Modify Permissions** and **Break
Inheritance** actions. Make sure all of the action tasks are disabled.

**Step 2 –** On the Analysis Selection page, enable the **Create view for action status** and
**Summarize Access Changes** analysis tasks.

**Step 3 –** Run the job to generate the Action History report and review the actions taken on each
share.

The organization of the users and their permissions now follows a least privileged access (resource
based groups) model.
