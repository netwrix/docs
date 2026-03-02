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

- **Automatic** - scheduled automated report clean up that runs based on the configured schedule for
  rules marked **Automatic**.
- **Run Now** - starts report clean up immediately using the current clean up rule.

Menu options are available to access the rules and lists:

- New Rule
- Report Clean Up Rules
- Report Clean Up Status
- Archived Reports
- Retained Reports
- Reports to be Archived
- Reports to Restore

## Report Clean Up Rules

Report Clean Up rules are created by the administrator and used to locate Reports matching the rule
criteria. Report Clean Up rules are used for both **Automatic** and **Run Now**.

To create or edit rules, access **Netwrix Dashboard** > **Tools** > **Automated Report Clean Up Tool**
and select **New Rule** or **Report Clean Up Rules**.

![automated_report_cleanup](/images/platgovsalesforce/tools/automated_report_cleanup.webp)

![automated_report_cleanup](/images/platgovsalesforce/tools/automated_report_cleanup_2.webp)

### Rule Details

- **Name** is the assigned name for the **Report Clean Up Rule**.
- **Description** is the purpose of the rule record. An informative description helps administrators
  easily maintain and identify rules.
- **Notify Report Owners Prior to Archive** check to send email to report owners prior to archive.
  Default is checked.
- **Automatic** check to include the rule in the automated report clean up.
- **Inactive** check to disable this Report Clean Up Rule.

**Please Note:** The following reports are excluded from clean up:

- Reports in private folders
- Reports with Change/Approval Policy that requires a Change Record
- Managed Package Reports

### Schedule

When **Automatic** is enabled, configure the schedule for the rule.

- **Weekly Event**
- **Monthly Event**
- **Yearly Event**
- **Repeat Every "N" Week(s)** (weekly schedule)
- **End By**:
  - **Date**
  - **Time**
  - **No End Date**
- **Next Run Date** displays the next scheduled execution date/time (system calculated).

### Filters

#### Basic Filters

- **Report Name** filters reports to clean-up by name. Filter operator is _startswith_ and the
  wildcard _%_ may be used. Default is blank.
  Example: _Custom % Report%_ returns all reports with a name starting with '_Custom_' followed by
  any character and containing '_Report_'.
- **Report API Name** filters reports to clean-up by API Name. Filter operator is _startswith_ and
  the wildcard _%_ may be used. Default is blank.
  Example: _%testing_ returns all reports with an API Name containing '_testing_'.
- **Months Since Date Last Used, Retained** filters reports by the most recent activity date (last
  run date, retained, or restored). Reports used within the specified timeframe are excluded.
  Default is **6** months.
- **Exclude Reports Less Than A Month Old** excludes new reports that have not been run. Default is
  checked.

#### Advanced Filters

- **Select/Selected Report Owner(s)** filters reports by matching selected owners for the rule or if
  **Exclude Owner(s)** is checked, to exclude matching owners.
- **Select/Selected Inactive Owner(s)** filters reports by matching selected inactive owners.
  **All Inactive Owner(s)** includes all inactive owners.

### Rule Preview

The **Preview** function provides a quick method to validate the rule and review the list of
matching reports.

1. Administrators can click **Preview** on a Report Clean Up Rule.
2. Review the rule summary including **Rule Name**, **Number of Reports to Clean Up**, and
   **Rule Filters**.
3. Review the **Report List**, which includes:
   - **Name**
   - **API Name**
   - **Owner**
   - **Date Created**
   - **Date Last Used**
4. Available actions:
   - **Back**
   - **Save**
   - **Save & Run**
   - **Delete**

![automated_report_cleanup_preview](/images/platgovsalesforce/tools/automated_report_cleanup_preview.webp)

### Run Now

The **Save & Run** option immediately begins a Report Clean Up using the current rule.

If a Report matches the Clean Up Rule:

1. Summary notification of all matching reports is sent to the rule owner.
2. Immediate notice is sent to all report owners. Notifications include a **Retain this Report**
   link and a **Preview** link.
3. If the report is not retained and not used, a final notification is sent prior to the archive
   date.
4. If the report is not retained and not used by the archive date:
   - Report is archived.
   - Archive notifications are sent to rule owner and report owners.
   - Report is added to **Archived Reports**.
   - Summary notification is sent to the rule owner.

## Automated Run Workflow

**Automated Report Clean Up** runs based on the schedule of rules marked **Automatic**.

1. When a Report matches a Clean Up Rule:
   - Notification is emailed to the rule owner.
   - Notification is emailed to report owners unless disabled.
   - All notifications include a **Retain this Report** link.
   - Report is added to **Reports to be Archived**.
2. If the report is not retained and not used:
   - Final notifications are sent.
3. If the report is not retained and not used by the archive date:
   - Report is archived.
   - Notifications are sent.
   - Report is added to **Archived Reports**.

## Report Clean Up Status

Open **Netwrix Dashboard** > **Tools** > **Automated Report Clean Up Tool** > **Report Clean Up Status**
to view current status.

- **Status**:
  - **Pending**
  - **Pending Notification**
  - **In Notice Period**
  - **Processing**
  - **Completed**
  - **Canceled**
- **Automatic** indicates whether the rule is scheduled.

## Retaining a Report

Notification emails contain a **Retain this Report** link.

- Updates **Date Last Used, Retained/Restored**.
- Adds the report to **Retained Reports**.
- Prevents archiving.

## Auto Archiving a Report

If a report is not retained:

- Report is archived.
- Customization record is marked **Inactive**.
- Report is added to **Archived Reports**.
- A **Restore** option becomes available.
- Notifications are sent to rule owner and administrators.

![automated_report_cleanup_archive](/images/platgovsalesforce/tools/automated_report_cleanup_archive.webp)

## Restoring an Auto Archived Report

A Salesforce Administrator can restore an archived report from **Archived Reports**,
**Reports to Restore**, or using the **Restore** link in notification emails.

- Report is restored with a new internal ID.
- **Date Last Used, Retained/Restored** is updated.
- Report is added to **Retained Reports**.

## Report Clean Up Reports

The Automated Report Clean Up tool includes Salesforce reports that allow administrators to monitor
the clean up process.

### Reports to Restore

**Filters used:**

- **Archive** equals **True**
- **Clean-up Status** not equal to **Restored**

**Visible Columns:**

- **Customization: ID**
- **Customization: Customization Name**
- **API Name**
- **Archive**
- **Clean Up Rule Name**
- **Clean Up Archived Date**
- **Restore Url**

### Reports to be Archived

**Filters used:**

- **To be Archived** equals **True**

**Visible Columns:**

- **Customization: ID**
- **Customization: Customization Name**
- **Archive**

### Retained Reports

**Filters used:**

- **Retain** equals **True**

**Visible Columns:**

- **Customization: Created By**
- **Customization: Customization Name**
- **API Name**
- **Date Last Used**
- **Active**
- **Archive**

### Archived Reports

**Filters used:**

- **Archive** equals **True**
- **Clean-up Status** equals **Archived**

**Visible Columns:**

- **Customization: ID**
- **Customization: Customization Name**
- **Clean-up Status**

### Report Clean Up Status (Report)

**Filters used:**

- **Automated** equals **True**

**Visible Columns:**

- **Search Clean-up Rule: ID**
- **Status**
- **Search Clean-up Rule: Name**
- **Description**
- **Report API Name**
- **Report Name**
- **Months Since Last Used, Retained/Restored**
- **Automatic**

### Report Clean Up Rules (Report)

**Visible Columns:**

- **Search Clean-up Rule: Name**
- **Description**
- **Archive Date**
- **Search Clean-up Rule: Created Date**
- **Report API Name**
- **Report Name**
- **Months Since Last Used, Retained/Restored**
- **Automatic**
