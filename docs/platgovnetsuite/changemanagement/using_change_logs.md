---
title: "Using Change Logs"
description: "Using Change Logs"
sidebar_position: 140
---

# Using Change Logs

Change Logs allow you to see the type of change, who made the change and view the system notes of
the NetSuite record. Change Logs are accessed from the
[Change Management Reports](/docs/platgovnetsuite/change_management_reports.md).

:::note
Once a change request is complete, best practice is to change the status to **Completed**. If there
are multiple open change requests referencing the same object, any changes to the object result in
the change log being associated with the oldest of the approved change requests.
:::

To open a Change Log:

1. Open **Strongpoint** > **Change Management Reports** and select a report.
2. Click **View** beside the Change Log to open.

![changelog-1](/images/platgovnetsuite/change_management/changelog-1.webp)

If the **Actual Change Date** is empty or **Change By** is set to **Could Not Be Determined** or
**Pending Autospider**, a **Refresh Changed By** button is available. When clicked, it populates
**Actual Change Date** and **Change By** fields.

The button is only available for Object types where the **Actual Change Date** and **Change By**
fields can be retrieved.

:::info

Some Object types do not produce Sytem Notes or History Notes for changes.  In this case the **Actual Change Date** is empty and the **Change By** is set to **Could Not Be Determined**.

:::

![Refresh Changed By](/images/platgovnetsuite/change_management/change_log_refresh.webp)

## Change Log Header

Change Logs are different based on the type of change. These are the major fields.

**Change Log Created**: Date the Change Log was created.

**Deletion Date**: Date a customization was deleted. Used with deleted Script Deployments.

**Actual Change Date**: Date of the system note entry reflecting the change date. There must be an
available system note to display the date.

**Customization**: Linked customization(s) that have changed.

**Deleted Customization**: Name of the deleted customization. Used with deleted Script Deployments.

**Managed Bundle/App Customization**: Checked when customizations belong to a managed bundle.

**Changed By**: User who made the change. There must be an available system note to display the
user.

**Deleted By**: User who made the change. Used with deleted Script Deployments.

**Field Name**: Name of the changed field.

**Field Script ID**: Script ID of the changed field .

**Non-Compliance**: Checked if the change is non-compliant.

**Policy**: Policies associated with the Change Log.

**Change Level**: Change level required by the policy.

**Change Type**: Type of change based on the policy.

**Change Overview**: Overview of the change.

- When **Systemnotes.Type** is included as result column and one of the system note lines is
  **Created**, the Change Overview displays: _`<incident employee>`**\_created** _`<record>`\_.
- When there are no system notes columns, **Change Overview** displays
  _`<incident employee>`**\_changed** _`<record>`\_.
- Deleted records display _`<incident employee>`\*\*\_deleted_\*\*`<record>`\_
- For grouped results with multiple records, **Change Overview** displays **See Change Data Table
  for details.**

**Related Change Request**: Change request related to the change or used to perform regression
analysis of a non-compliant change.

**Related Process Issue**: Process issue related to the change or used to resolve it.

**Resolution Description**: Description of any steps taken to bring the change back into compliance.

**Non-Material Clearance Reason**: Used when a change is evaluated as non-material. **Non-Material
Object Changes** are changes detected in the object definition not caused by human intervention and
do not have any functional impact. Examples include NetSuite internal IDs, object XML structure or
JSON representation or reordering values in a list.

**Non-Material Checked**: Indicates if the change log has been evaluated as non-material.

**Status**: Current state of the Change Log. This field is manually set, except it is automatically
set to complete when a compliant change is complete.

**Operation**:The reason for the Change Log. For example, **edit** or **delete**.

**System Note Available**: Indicates a system note was found.

**Jira Ticket Link**: Link to the Jira ticket if used to create the Change Log.

## Values Tab

The **Values** tab displays the changes that occurred in the Change Log.

**Diff. View**: Highlights the changes that occurred within specific fields.

**Diff. Summary**: Displays the difference between the old value and the new value.

**Data Error**: Checked if a data error occurred.

![values_tab](/images/platgovnetsuite/change_management/values_tab.webp)

## Finding Users Who Have Made Changes

When you want to find out who has made changes, you can run any of the Change Reports and view who
made a change in the **Change By** column.

The **Change By** and **Actual Date** of the change logs are retrieved using System Notes Search for
supported record types. If a System Note is not available, **Change By** displays **Could Not Be
Determined** in the Report List.

Recorded types that are not supported can be retrieved from the AutoSpider.

| Supported Records for System Notes Search                                                                                                                                                                                                                                                                                                                                                                                                       | Change By retrieved from the AutoSpider                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Body Field<br />Bundle Installation Script<br />Client Script<br />Column Field<br />CRM Field<br />Custom Record Field<br />Entity Field<br />Item Field<br />Item Number Field<br />Item Option Field<br />Library Script File<br />List<br />Map/Reduce Script<br />Mass Update Script<br />Other Field<br />Plug-in Script<br />Portlet Script<br />Record RESTlet Script<br />Scheduled Script<br />Script Deployments<br />Setup Preference<sup>\*</sup><br />Suitelet Script<br />User Event Script<br />User Role<br />Workflow<br />Workflow Action Script<br />Deleted Objects<sup>\*\*</sup> | Bundle<br />Custom Report<br />Entry Form<br />Mass Update<br />Search<br />Transaction Form<br />User Role / Global Permission Changes<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> |

<sup>\*</sup> System notes can be retrieved for: Company Preferences, Company Information, Enable Features,
Account, Foreign Currency Variance Posting Rule, Nexus, Tax Code, Taxation Type, Fair Value Formula,
Fair Value Price List, Project Expense Type, and Item Revenue Category.

<sup>\*\*</sup> Deleted by and actual delete date are available for: Workflow, Custom Record, List, Script
Deployment, and Script.

## Viewing System Notes

In an open Change Log:

1. Click on a linked **Customization** to open the Customization Record. **Strongpoint Return Jira
   Ticket Info (Suitelet Script)** in this example.

    ![Change Log Customization link](/images/platgovnetsuite/change_management/change_log_customization_link.webp)

2. Click **Go to Record**
3. Open **System Notes**

![systemsnotes](/images/platgovnetsuite/change_management/systemsnotes.webp)
