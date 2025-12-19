---
title: "Installation Settings Report"
description: "Installation Settings Report"
sidebar_position: 100
---

# Installation Settings Report

Your **Installation Settings** report provides a comprehensive and live view of the Platform
Governance for NetSuite data in your account. This data is useful as you continue to optimize your
account and provides you with a measurable view of your status.

To access the report, open **Strongpoint** > **Strongpoint Support** > **Installation Settings**

- Click **View** to view or print the desired report.
- Click **Edit** to change global settings or add user notes

## Configuration and Stats

The report has the following tabs:

### Spider Status

- **Spider Status Intro** displays the spider status and the values of the fields that control the
  spider.
- **Validation Tools** links to Data Validation tools: Validation Report, Run Data Validation, and
  Run Data Update.
- **Documented Records Overview** lists the total number of customizations created. The **Spider
  Count** column represents the number of objects the spider detected. The **Documented Record
  Count** represents the number of objects that were documented. In most cases, they should match
  when the spider is complete. If you access the report before the scheduled scripts are complete,
  you may see incomplete or duplicate records. These will be cleaned up once the scripts complete
  their work.

### Documentation

Displays the documentation stats, including the number of customizations and critical joins Platform
Governance for NetSuite has created. If **Include All Standard Fields** is checked (default is off),
customization records are created for all standard fields of supported standard record types.
Otherwise, customization records are only created for standard fields used in scripts and/or
workflows. Status is shown on the **Spider** Status tab: **Spider - All Standard Fields**.

### Clean Up

Displays statistics on customizations to be investigated and cleaned up. Cleaning up customizations
provides significant performance gains and makes your system easier to understand and maintain.
Platform Governance for NetSuite identifies different types of clean up activities. Each of these
fields corresponds to one or more views under **Strongpoint** > **Clean Up**.

### Script Management

Displays stats to help you identify gaps for script monitoring. The Script Management Stats and
Script Archive File Folder ID can be edited.

- **Script Management Stats**: editable content box introducing the statistics on this tab.
- **Potentially Unused Scripts**: number of potentially unused scripts, calculated from scripts with
  audit tags but no execution date and/or a date more than six months ago.
- **Scripts with FLOStart Tags**: number of scripts with FLOStart tags inserted to track the
  initiation of the script.
- **Scripts with FLOStart Tags**: number of scripts with FLOEnd tag inserted to calculate execution
  time.
- **Scripts with No Audit Tags**: number of scripts that are not being monitored (no inserted
  FLOStart or FLOEnd tags).
- **Script Archive File Folder ID**: file identifier of the script archive folder. The **Enable Auto
  Archive** and default **Auto Archive Folder** are specified on the Installation tab. If enabled, a
  copy of each script is archived when it is changed, keeping a full version history. The archived
  script versions are saved in the script archive folder, and are also accessible in the
  Customization record for the script. Archiving all script changes does use storage space. It is a
  good practice to occasionally review and clean up old versions.

### Change Management

Accesses change management features:

- **Enable Opportunistic Clearance**: enables automatic clearance of qualifying low risk
  non-compliant changes. Default is off.
- **Enable Case to Change Request Workflow**: enables the workflow
  [Create Change Request from Case](/docs/platgovnetsuite/changemanagement/creating_change_request_from_case.md),
  based on the provided mappings. **Change Request Field Mapping** includes an optional Formula to
  handle complex fields. After the **Enable Case to Change Request Workflow** is enabled, a **Create
  Change Request** button is available on the **Case** record (**Lists** > **Support** >
  **Cases**).
  Here is an example using a **Formula** for the **Case to Change Request Field Mapping**:
  ![Example of a Formula in the Case to Change Request Field Mapping](/images/platgovnetsuite/installing_strongpoint/casetocrformula.webp)
- **Do Not ReSpider Automatically**: sets the default condition for the **Do Not ReSpider
  Automatically** setting on the
  [ITGC Change Request](/docs/platgovnetsuite/changemanagement/creating_change_request.md). The default is
  unchecked.
  When enabled, an automatic ReSpider occurs when a Change Request status is changed to
  **Completed**. This starts the ReSpider and ensures that all change logs are complete prior to
  changing the status. If automatic ReSpidering is turned off, there is a risk of changes being
  marked as non-compliant if the change logs are not complete when the user changes the status to
  **Completed**.
- **Enhanced User Provisioning**: enables access management for onboarding/offboarding and access
  change using the **[User Access Change Request](/docs/platgovnetsuite/changemanagement/user_provisioning.md)**.
- **Enable Auto-Provisioning**: automatically implement the onboarding changes approved though the
  **User Provisioning Change Request** when **Enhanced User Provisioning** is enabled.
- **Enable Auto-Role Removal**: automatically implement the offboarding changes approved though the
  **User Provisioning Change Request** when **Enhanced User Provisioning** is enabled.
- **Notification Sender**: select an email address from the drop down to use when sending
  notification emails. This sender is used when sending alerts for the following:
    - **User Access** (Onboarding, Offboarding, Temporary Access)
    - **ITGC**
    - **Policy Change Approval**
    - **Financial Controls** (Agent)
    - **SoD Approval**
    - **SoD Rule Change**
- **CR Email Template**: if you customize your **SoD Exemption Approval** or **SoD Rule Change
  Approval** CR Templates, add them here so they are not overwritten when the next bundle is
  installed. Refer to [Advanced PDF / HTML Templates](/docs/platgovnetsuite/customization/pdf_html_templates.md).
  ![CR Email Template section on the Installation Settings Change Management tab](/images/platgovnetsuite/installing_strongpoint/change_management_cr_email_template.webp)

### Installation

Accesses the global parameters. Select **Edit** to change them.

- **Start time/ End time**: restricts the time window for scheduled scripts.
- **Enable Auto Archive**: enables automatically archiving script files when Platform Governance for
  NetSuite detects that they have changed. Default is off. If enabled, a copy of each script is
  archived when it is changed, keeping a full version history. The archived script versions are
  saved in the script archive folder, and it also accessible in the Customization record for the
  script. Archiving all script changes does use storage space. It is a good practice to occasionally
  review and clean up old versions.
- **Auto Archive Folder** : specifies the location to store the backups when **Enable Auto Archive**
  is enabled.
- Script Error Actions: These fields are used for managing script errors detected by the Script
  Management Module.
    - **Enable Auto Process Issue**: creates a Process Issue for each script error to enable issue
      management and tracking of resolutions. Default is off.
    - **Process Issue Assigned**: identifies who should be assigned to the process issue.
    - **Process Issue Approved**: identifies who should be assigned to be an approver of the process
      issue.
- **Disable Spider Last Use Report**: disables last use report. Default is off.
- **Saved Searches Spider Time Limit**: specifies the number of years Saved Searches are documented.
- **Enable Remote Status Report**: enables Netwrix to remotely read the status report. Default is
  on.
- **Total Change Requests**: displays the number of change requests for the installation.
- **Total Process Issues**: displays the number of process issues for the installation.
- **Total Policies**: displays the number of policies for the installation.

### Notes

Displays **User Notes** and **System Notes**. Use **New Note** or the **Create New** > **Note** from
the page drop down icon to create a new User Note.

### Jira Integration

Specifies the Jira credentials to use when Jira and Platform Governance for NetSuite are integrated.
Refer to [Jira Integration](/docs/platgovnetsuite/ticketingintegrations/jiraintegration/jira_integration.md) for more information.

### ServiceNow Integration

Specifies the ServiceNow credentials to use when ServiceNow and Platform Governance for NetSuite are
integrated. Refer to [ServiceNow Integration](/docs/platgovnetsuite/ticketingintegrations/servicenowintegration/servicenow_integration.md) for more
information.

### Menu Management

Enables hiding menu items you do not use, to improve navigation. Refer to
[Managing Menus](/docs/platgovnetsuite/installation/managing_menus.md) for more information.
