---
title: "Action Modules"
description: "Action Modules"
sidebar_position: 100
---

# Action Modules

This guide describes the **Actions** node and the various action modules available for use in
Enterprise Auditor. This overview topic describes the basic procedure for creating and executing an
action module as well the initial steps to take when configuring an action. Each action module is
described in detail in the relevant topics.

The Enterprise Auditor actions are capable of changing users, permissions, files, and objects from a
variety of environments. Action modules are assigned to a job at the **Configure** > **Actions**
node. See the
[Actions Node](/docs/accessanalyzer/11.6/admin/jobs/job/configure/actions.md)
topic for additional information on the Action Selection view.

![Action Selection page](/images/accessanalyzer/11.6/admin/action/actionselection.webp)

Configure the action through the Action Properties page. Navigate to the job’s **Configure** >
**Actions** node. Select **Create Action** to add a new action task to a job. Select an existing
action and click **Action Properties** to modify its configuration. The Action Properties page opens
for either option. Pre-configured action tasks can be added from the Action Library. See the
[Action Libraries](/docs/accessanalyzer/11.6/admin/action/libraries.md)
topic for additional information.

Most action modules are available with a special Enterprise Auditor License. The following table
provides brief descriptions of the action modules available in Enterprise Auditor.

| Action Module    | Description                                                                                                                                                                                                                                                                       |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Active Directory | Make changes to Active Directory such as deleting objects, creating users, and changing group membership. See the [Active Directory Action Module](/docs/accessanalyzer/11.6/admin/action/activedirectory/overview.md) for additional information. |
| File System      | Change attributes and permissions, as well as copy, delete, move, and rename file system contents. See the [File System Action Module](/docs/accessanalyzer/11.6/admin/action/filesystem/overview.md) for additional information.                  |
| Mailbox          | Add/change permissions, remove permissions, add/remove delegates, remove zombie SIDS, and delete mailbox content. See the [Mailbox Action Module](/docs/accessanalyzer/11.6/admin/action/mailbox/overview.md) for additional information.          |
| PowerShell       | Run PowerShell scripts on the local machine or on remote hosts. See the [PowerShell Action Module](/docs/accessanalyzer/11.6/admin/action/powershell/overview.md) for additional information.                                                      |
| PublicFolder     | Make changes to Exchange Public Folders. See the [PublicFolder Action Module](/docs/accessanalyzer/11.6/admin/action/publicfolder/overview.md) for additional information.                                                                         |
| Registry         | Make changes to the system registry. See the [Registry Action Module](/docs/accessanalyzer/11.6/admin/action/registry/overview.md) for additional information.                                                                                     |
| SendMail         | Communicate with target audiences to supply users with dynamic content from selected audit data. See the [SendMail Action Module](/docs/accessanalyzer/11.6/admin/action/sendmail/overview.md) for additional information.                         |
| ServiceNow       | Creates incidents in ServiceNow. See the [ServiceNow Action Module](/docs/accessanalyzer/11.6/admin/action/servicenow/overview.md) for additional information.                                                                                     |
| SharePoint       | Add/remove trustees from sites, lists, or libraries in SharePoint on-premise, apply sensitivity labels, and move files.                                                                                                                                                           |
| Survey           | Solicit feedback from users to expedite and aid in the decision making process. See the [Survey Action Module](/docs/accessanalyzer/11.6/admin/action/survey/overview.md) for additional information.                                              |
| Web Request      | Sends data to Threat Manager. See the [WebRequest Action Module](/docs/accessanalyzer/11.6/admin/action/webrequest/overview.md) for additional information.                                                                                        |

## Basic Procedure

Actions perform operations on data tables. They reside within a job node and are associated with
that job. Enterprise Auditor provides many action modules and each has its own set of operations
that can be applied to selected columns in a selected data table.

For example, the Active Directory Action Module automates specified Active Directory operations
while the SendMail Action Module can send an email to a dynamic list of users.

The basic procedure consists of the following steps.

**Step 1 –** Create a data table containing the target objects to be modified and exclude any
extraneous columns.

**Step 2 –** Configure an action task using the configuration wizard for the selected action module.
Target the selected objects and apply selected operations to the data.

**Step 3 –** Execute the action.

### Executing Actions

Actions with the checkbox next to their name selected in the Action Selection view are executed
automatically as part of the job’s execution. The actions are executed in the order in which they
appear in the Selection table. You can also manually execute selected actions without running the
job by clicking on the **Action Execute** link on the Action Selection view.

## Caution on Action Modules

:::warning
Enterprise Auditor action modules apply bulk changes to targeted objects within the
target environment. Actions perform operations on selected objects listed in each row of the source
table. Exercise caution to ensure the action applies only the desired changes and only to the
desired target objects.
:::


:::info
Prior to configuring the action module, scope the source data table to include
only the desired data. It is also recommended to run the action in a test environment before making
changes to a production environment.
:::


## Action Properties Page

Use this page to view or specify properties for a selected action, including the name, description,
action module, and source table. Access this page via the Action Selection view.

![Action Properties page for new action](/images/accessanalyzer/11.6/admin/action/actionproperties.webp)

:::info
Provide unique and descriptive names and action task descriptions to all user
created action tasks.
:::


- Name – Action task name. For new actions, an editable default name displays.
- Description – Action task description. For new actions, this editable field is blank.
- Action Module – Drop-down menu of available action modules

    - Configure Action – Opens the configuration wizard for the selected action module

- Source Table – Table with objects the action task acts upon. For new actions, this field is blank.
  Specify a source table on which to perform the action.
- Show tables from current job only – Restricts the list of source tables available to only those
  tables generated by the job where the action task resides. Deselect the checkbox to list all
  available data tables.
- ID – Unique identifier, or GUID, of the action task generated by the application. With this ID,
  the database can distinguish actions, even those with identical configurations.
- Data Grid – Displays a sample of the selected Source table. This data grid functions the same as
  all data grids within Enterprise Auditor. Data can be filtered, and columns can be regrouped. See
  the
  [Data Grid Functionality](/docs/accessanalyzer/11.6/admin/navigate/datagrid.md)
  topic for additional information.

### Source Table Configuration

All Enterprise Auditor actions require a source data table. The source table must contain, at a
minimum, the following columns. Include these columns in addition to any other columns required by
the action module being used. Otherwise, errors may occur upon execution of the action and with
analysis and reports downstream.

| Required Columns | Description                                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Host             | Name of the target server                                                                                                                                           |
| SA_HOST          | This column determines the Enterprise Auditor server to which the data belongs in the event multiple Enterprise Auditor consoles are connected to a single database |
| JobRunTimeKey    | Contains the run time and date for the job. If history is active, Enterprise Auditor can identify data collected during a specific collection execution.            |
| rowGUID          | Identifies each data row as unique. The datatype in the table is uniqueidentifier (GUID).                                                                           |
| RowKey           | Identifies each data row as unique. Sometimes the value is a GUID, but the datatype in the table is a varchar (text string).                                        |

:::tip
Remember, the individual action modules may have their own column requirements in addition to the
above.
:::


#### Data Tables

Enterprise Auditor native data tables generally contain all of the above columns. However, if all
required columns are not present by default, add them manually.

:::warning
Do not use native data tables in action modules. Source data tables in actions should
include only the data desired for the operation. Scope the data tables to include only the required
columns prior to configuring the action.
:::


#### Module-Specific Source Table Requirements

Enterprise Auditor action modules contain one or more selectable operations, many of which have
their own column requirements. Thus, in addition to excluding extraneous columns from the data
tables, include in the tables any columns required by the selected operation. The columns can have
any name, but they must contain the data required by the operation.

For example, in the Active Directory Action Module, the Create Groups operation requires a column
containing the group name.
