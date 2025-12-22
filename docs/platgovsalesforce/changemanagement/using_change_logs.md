---
title: "Using Change Logs"
description: "Using Change Logs"
sidebar_position: 70
---

# Using Change Logs

Change Logs allow you to see the type of change, who made the change and view the system notes of
the Salesforce record. Change Logs are accessed from the **Change Logs** tab or through
[Change Enablement Reports](/docs/platgovsalesforce/changemanagement/change_management_reports.md).

1. Expand the **Change Logs** tab.
2. Change the **Recently Viewed** pinned list to show the types of Change Logs to view. For
   example**, Data tracking Changes** or **Profile and PermissionSet** changes. The **Details** and
   **Diff Summary** differ slightly depending on the selected **Metadata Type**.
3. Click a **Change Log Name** to open it.

You can also open Change Logs from **Netwrix Dashboard** > **Reports** > **Change Enablement**.
Select a report, such as **What Changed** to see a list of Change Logs.

![changelog-1](/images/platgovnetsuite/change_management/changelog-1.webp)

Here is an example change log for a **Profile** Metadata type.

![changelog_details](/images/platgovsalesforce/change_management/changelog_details.webp)

## Details Tab

- **Actual Change Date**: Date the Customization was last modified.
- **Customization Created By**: User who created the customization.
- **Customization Modified By**: User who last modified the customization.
- **Customization**: Linked Customization(s) that have changed.
- **Metadata Type**: Salesforce metadata type of the Customization.
- **Field Name**: Name of the changed field.
- **Active**: Checked if the Customization is active.
- **New Customization**: Checked if new customization.
- **Package**: Name of the Managed Package if the customizations belong to a managed package.
- **Operation**: Flag this field if a change or a new record is created.
- **Change Overview**: Overview of the change.
- **Data Record Id**: ID of the data record changed. This field is not in all Metadata Types.
- **Data Record Name**: Name of the data record changed. This field is not in all Metadata Types.
- **Data Record SObject API**: API name of the parent SObject of the data record changed. This field is not in all Metadata Types.
- **Related Change Request**: Change request related to the change or used to perform regression analysis of a non-compliant change.
- **Compliant Indicator**: Green flag indicates compliant, red flag indicates non-compliant.
- **Non-Compliant**: Checked if the change is non-compliant.
- **Compliance**: The change status: **Compliant** or **Non-compliant**.
- **Policy**: Policies associated with the Change Log.
- **Reason**: Name of the policy violated by the change.
- **Filters**: List of filters satisfied for the data record change. If blank, no filters specified. This field is not in all Metadata Types.
- **Parent Change Log**: Name of the parent change log if applicable.
- **Resolution Description**: Description of any steps taken to bring the change back into compliance. This field is not in all Metadata Types.
- **Short Resolution Description**: Summary description of any steps taken to bring the change back into compliance.
- **Status**: Current state of the Change Log. This field is manually set.

### Diff Summary

The **Diff Summary** section displays the differences in the objects that occurred in the change.
There is an **Export to PDF** option.

Example Diff Summary for a Data tracking Change Log:

![Diff Summary for data tracking](/images/platgovsalesforce/change_management/diffsummary_data.webp)

Example Diff Summary for a Profile metadata type Change Log:

![Change Log Diff Summary](/images/platgovsalesforce/change_management/changelog_diff.webp)

### Values

The **Values** section displays the **New Value** and **Old Value** of each field after the update.
The **Created By** and **Last Modified By** users and dates are displayed at the end of the list.

![changelog_values](/images/platgovsalesforce/change_management/changelog_values.webp)

### Audit

The **Audit** section displays all fields related to an audit. Click the edit icon to edit the
record.

- **Sampled For Audit**: Select **None**, **Internal** or **External**.
- **Audited By**: Auditor selects their user name from the list.
- **Internal Audit Comments**: Internal notes added by the Auditor.
- **Internal Audit Status**: Select **None**, **Approved**, **Rejected** or **Under Investigation**.
- **Last Internal Audit**: User who made the last change in the Internal Audit fields.
- **External Audit Comments**: External notes added by the Auditor.
- **External Audit Status**: Select **None**, **Approved**, **Rejected** or **Under Investigation**.
- **Last External Audit**: User who made the last change in the External Audit fields.

## Related Tab

### Change Log History

**Change Log History** displays the latest history entries by **Date**. The changed **Field**,
**User** making the change, **Original Value** and **New Value** are displayed. If there is a **+**
sign by the number in **Change Log History** header, click **View All** to see the complete history.

### Notes & Attachments

**Notes & Attachments** contains uploaded files. Click on a file name to open it. Click **Upload
Files** to add additional files. If there is a **+** sign by the number in the **Notes &
Attachments** header, click **View All** to see the complete file list.
