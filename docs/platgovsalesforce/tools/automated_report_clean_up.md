---
title: "Automated Report Clean Up"
description: "Automated Report Clean Up"
sidebar_position: 110
---

# Automated Report Clean Up

Reports are powerful tools used throughout Salesforce and interconnected to other customizations. As
user-created Reports proliferate, Salesforce accounts become inefficient and overall performance
degrades. This rules-based tool provides administrators the ability to identify and archive Reports
and keep Salesforce accounts organized, easy to understand, and improve efficiency and performance.
Archived reports can be restored.

The **Automated Report Clean Up** tool has two operating modes:

- **Automatic** - scheduled automated report clean up that runs continuously using all rules marked
  Automatic.
- **Run Now** - starts report clean up that runs once and completes within seven days using current
  clean up rule.

Menu options are available to access the rules and lists:

- Report Clean Up Rules
- Report Clean Up Status
- Archived Reports
- Retained Reports
- Reports To Be Archived

### Report Clean Up Rules

Report Clean Up rules are created by the administrator and used to locate Reports matching the rule
criteria. Report Clean Up rules are used for both Automatic and Run Now.

To create or edit rules, access **Netwrix Dashboard**> **Tools** > **Automated Report Clean Up
Tool**

![automated_report_cleanup](/images/platgovsalesforce/tools/automated_report_cleanup.webp)

- **Name** is the assigned name for the **Report Clean Up Rule Record**.
- **Description** is the purpose of the rule record. An informative description helps administrators
  easily maintain and identify rules.
- **Notify Report Owners Prior to Archive** check to send email to report owners prior to archive.
  Default is checked.
- **Automatic** is used to include the rule in the automated report. This option is not available
  until the **Preview** function has been used.
- **Inactive** check to exclude this Report Clean Up Rule from the automated report.
- **Filter Summary** displays all of the current filters for the rule. If default filters such as
  **Exclude Private Reports** are turned off, they are displayed in red as **Included**.
- **Notes** displays information about the Report Clean Up for this rule.

**Basic Filters**

- **Report Name** filters reports to clean-up by name. Filter operator is _startswith_ and the
  wildcard _%_ may be used. Default is blank.
   Example: _Custom % Report%_ returns all reports with a name starting with '_Custom_ ' followed by
  any character and the name must contain '_Report_' such as _Custom Inventory Detail Report_.
- **Report API Name** filters reports to clean-up by API Name. Filter operator is _startswith_ and
  the wildcard _%_ may be used. Default is blank.
   Example: _%testing_ returns all reports with an API Name containing the word '_testing_' such as
  _customreport_testing_1_.
- **Months Since Date Last Used, Retained/Restored** filters reports by the last run date of the
  report or the restore/retain date, whichever is the most recent. Reports that have been used,
  restored, or retained within the specified timeframe are excluded from the report. Default is
  **6** months.
- **Exclude Private Reports** excludes reports set as **Private** by report owners. Default is
  checked.
- **Exclude Reports Less Than A Month Old** excludes new reports that have not been run. Default is
  checked.

**Advanced Filters**

- **Select/Selected Report Owner(s)** filters reports by matching selected owners for the rule or if
  **Exclude Owner(s)** is checked, to exclude matching owners for the rule. Scroll or use the
  **Search User** box for **Select Report Owners**. Multiple owners can be selected. Click the right
  arrow to add to the **Selected Report Owner(s)**. Remove owners by selecting them in the
  **Selected Report Owner(s)** field and clicking the left arrow. Default is blank.
- **Select/Selected Role(s)** filters reports by matching selected roles for the rule or if
  **Exclude Role(s)** is checked, to exclude matching roles for the rule. Select one or more roles
  in the **Select Roles** field. Click the right arrow to add to the **Selected Role(s)**. Remove
  roles by selecting them in the **Selected Role(s)** field and clicking the left arrow. Default is
  blank.
- **Select/Selected Inactive Owner(s)** filters reports by matching selected owners for the rule or
  if **Exclude Inactive Owner(s)** is checked, to exclude matching owners for the rule.Select one or
  more inactive owners in the **Select Inactive Owners** field. Click the right arrow to add to the
  **Selected Inactive Owner(s)**. Remove owners by selecting them in the **Selected Inactive
  Owner(s)** field and clicking the left arrow. Default is blank.

**Excluded Reports From Preview**

Lists any reports excluded after the **Preview** function is used.

#### Rule Preview

The **Preview** function provides a quick method to mark reports to be retained or to included for
clean up. The Run Now feature begins an immediate run for the rule.

1. Administrators can click **Preview** on an Report Clean Up Rule. **Preview** displays the rule,
   filters and conditions.
2. Review the Report List.
   Click **Include All** or **Exclude All** to mark all the reports. **Include** triggers a final
   notification email to be sent to the report owners. Unchecked retains the report.
3. Click Run Now to begin a Report Clean Up for the rule.
4. After previewing, you can click **Automatic** on the Report Clean Up Rule to include the rule for
   automatic reports.

![automated_report_cleanup_preview](/images/platgovsalesforce/tools/automated_report_cleanup_preview.webp)

#### Run Now

This option immediately begins an Report Clean Up using the current rule.

If a Report matches the Clean Up Rule:

1. Summary notification of all the matching reports is sent to the rule owner.
2. Immediate notice to all report owners with their reports that are about to be archived.
   Notifications include a **Retain this Report** link. A **Preview** link is available for the user
   to view the Report.
3. If the **Retain Report** link is not used and the Report has not been used, final notifications
   are sent to all report owners seven calendar days after the **Run Now** option was used. The
   notification includes the date the report is to be archived.
4. If the **Retain Report** link is not used and the Report has not been used by the archive date:

    - Report is archived.
    - Archive notifications are sent to rule owner and all report owners.
    - Report is added to administrator's Archived Reports list.
    - Summary notification of all auto-archived reports are sent to the rule owner.

### Automated Run Workflow

**Automated Report Clean Up** runs continuously comparing reports to all rules marked **Automatic**.
Administrators receive weekly summary information containing: **identified reports**, **retained
reports**, **scheduled to be archived reports** and **archived reports**.

1. When a Report matches a Clean Up Rule:

    - Notification is emailed to the rule owner. The Report is also included in the summary
      notification to the rule owner.
    - Notifications are sent the first closest Sunday since the rule was marked **Automatic**.
    - Notification is emailed to the report owners unless **Notify Report Owners Prior to Archive**
      is turned off for the rule.
    - All email notifications include a **Retain this Report** link. A **Preview** link is available
      for the user to view the Report.
    - Report is added to the **Automated Report Clean Up** > **Reports To Be Archived (Auto)** list.

2. If the **Retain Report** link is not used and the Report has not been used, second notifications
   are sent the following Sunday after the first notification date. The notification includes the
   date the report is to be archived.
3. If the **Retain Report** link is not used and the Report has not been used by the archive date:

    - Report is archived.
    - Archive notifications are sent to rule owner and all report owners.
    - Report is added to administrator's Archived Reports list.

### Report Clean Up Status

Open **Netwrix Dashboard**> **Tools** > **Automated Report Clean Up Tool** > **Report Clean Up
Status** to view current status.

- **Status**:
  **Pending** - initial status for the run.
  **Pending Notification** - reports have been identified, no notifications sent.
  **In Notice Period** - at least one notification has been sent.
  **Processing** - report is being auto-archived.
  **Completed** - all identified reports have been archived, and email sent to rule owner and
  administrator.
  **Canceled** - **Automatic** checkbox was turned off for the rule.
- **Automatic**: rule is set to **Automatic** if checked.

![automated_report_cleanup_status](/images/platgovsalesforce/tools/automated_report_cleanup_status.webp)

### Retaining a Report

Notification emails contain a link to **Retain this report** for each identified report.

Users can click on **Retain this report** to prevent archiving the report. Use **Preview** link to
view the Report. The Retain process:

- Updates the **Date Last Used, Retained/Restored** to the current date.
- Adds the report to the **Automated Report Clean Up** > **Retained Reports** report.
- Notifies the owners the report will be retained.

### Auto Archiving a Report

If report owners or users do not click on **Retain this report** in the email notifications, the
report is archived. The Archive process:

- Archives the report.
- Adds the report to the **Automated Report Clean Up** > **Archived Reports** report.
- Marks Customization record for the report I**nactive**.
- A **Restore** button is added to the **Clean Up** tab on the customization record for the report.
- Auto Archive notifications are sent to the rule owner and administrators. A **Restore** link is
  included in the email.

![automated_report_cleanup_archive](/images/platgovsalesforce/tools/automated_report_cleanup_archive.webp)

### Restoring an Auto Archived Report

A Salesforce Administrator can restore an auto archived report. Open the **Clean Up** tab of the
Customization record for the report or the report **Automated Report Clean Up** > **Archived
Reports**. Click **Restore**. Or use the **Restore** link in the email sent to the rule owner and
administrators.

- Report is restored. Restored reports have a different internal ID from their original version.
- Updates the **Date Last Used, Retained/Restored** to the current date.
- Adds the report to the **Automated Report Clean Up** > **Retained Reports** list.
