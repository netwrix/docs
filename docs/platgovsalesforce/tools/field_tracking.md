# Field Tracking

## Overview
Field Tracking is a specialized configuration tool designed to monitor and detect changes in field permissions across Permission Sets and Profiles in your Salesforce environment. Each time the Field Tracking Scanner runs, it reads active monitoring rules, determines the monitored fields, and checks for permission changes.

Monitoring Rules are a specialized configuration tool designed to track and detect changes in field permissions across Permission Sets and Profiles in your Salesforce environment.

Changes in field access for Profiles and Permission Sets will no longer be documented by the autoscanner. This new tool replaces the previous feature for Fields, so it is crucial to add all sensitive fields to the Monitored Rules.

## Accessing Field Tracking
Navigate to the Netwrix Dashboard:
- Tools > Access > Field Tracking

## Key Sections
The left-hand panel contains three main sections:
1. Settings
2. Monitoring Rules
3. Monitored Fields

![Field Tracking](/images/platgovsalesforce/tools/field_tracking_1.webp)

## Settings

### Monitoring Settings
- Manually run the batch process by clicking "Run Now"
- Automate the process with a Scheduler (daily, weekly, or monthly)
- The process takes a snapshot of field permissions and creates a Change Log for detected modifications

![Monitoring Settings](/images/platgovsalesforce/tools/field_tracking_2.webp)

### Notification Settings
You can enable Email Notifications to subscribe to reports showing field changes. Select the notification frequency — daily, weekly, or monthly — and define the list of recipients.
As a user, you don’t need to manually subscribe to the report — the system automatically handles that for you. Simply enable notifications and add the users who should receive the emails.
Please note that any user receiving email notifications must have the "Netwrix Grant Permissions" PermissionSet assigned, as this permission set grants access to the related objects and features within the application.

- Enable Email Notifications
  - Choose notification frequency: daily, weekly, or monthly
  - Define recipient list

  ![Email Notifications](/images/platgovsalesforce/tools/field_tracking_3.webp)

- Enable In-App Notifications
If In-App Notifications are enabled, each batch execution creates a record in the Download Files component on the Netwrix Dashboard. This component provides links to daily reports showing all field permission changes detected for each day.

Additionally, an Export Attachment record is created for each report. This tab is visible within the application and contains the export file associated with the report. However, users don’t need to access it directly, as all relevant information is already available through the Dashboard’s Downloaded Files bar.

![In-App Notifications](/images/platgovsalesforce/tools/field_tracking_4.webp)

![In-App Notifications](/images/platgovsalesforce/tools/field_tracking_5.webp)

To save all configuration changes, click Save Settings.

## Monitoring Rules
This screen displays all existing monitoring rules. You can create, edit, or deactivate rules, and you can also search for rules by name or status.

![Monitoring Rules](/images/platgovsalesforce/tools/field_tracking_6.webp)

![Monitoring Rules](/images/platgovsalesforce/tools/field_tracking_7.webp)

### Creating a New Rule
Use the three-step wizard:

1. **General Information**
   - Enter rule name
   - Add description
   - Set activation status

![New Rule Step 1](/images/platgovsalesforce/tools/field_tracking_8.webp)

2. **Criteria Selection**
   You can filter fields by:
   - **Objects**
     - Maximum of 5 different objects per criterion
     - Error message if more than 5 objects are selected
     - If you first select the “individual fields” criterion, the “objects” criterion will display only the objects of the fields selected under “individual fields.”

![New Rule Step 2 Objects](/images/platgovsalesforce/tools/field_tracking_9.webp)

   - **Individual Fields**
     - Maximum of 25 fields total
     - Automatic removal of associated fields when an object is deselected
     - If you first select the “objects” criterion, the “individual fields” criterion will display only the fields of the objects selected under “objects"

![New Rule Step 2 Objects](/images/platgovsalesforce/tools/field_tracking_10.webp)

   - **Compliance Categories**
     - Compliance Categories are classifications used to group data, records, or processes according to regulatory or compliance requirements, helping organizations manage and track adherence to laws, standards, and internal policies.
     - No maximum limit
     - Based on "Compliance Group" field in custom field customizations

![New Rule Step 2 Compliance Categories](/images/platgovsalesforce/tools/field_tracking_11.webp)

   - **Data Types**
     - Free selection
     - Requires prior object selection

![New Rule Step 2 Data Types](/images/platgovsalesforce/tools/field_tracking_12.webp)

:::note
The tracked fields must match all selected criteria.
:::

3. **Summary**
   - Review selections
   - Click Create to finalize the rule

![New Rule Step 2 Summary](/images/platgovsalesforce/tools/field_tracking_13.webp)

After creation, a confirmation message appears, and the list of rules updates automatically.

![New Rule Step 2 Summary](/images/platgovsalesforce/tools/field_tracking_14.webp)

### Rule Management
- Edit or deactivate rules directly from the list
- Deleting a rule sets it to Inactive

![Deactivate Rule 1](/images/platgovsalesforce/tools/field_tracking_15.webp)

![Deactivate Rule 2](/images/platgovsalesforce/tools/field_tracking_16.webp)

## Monitored Fields
After running the batch process, view:
- All monitored fields
- Last monitoring date
- Current tracking status

![Monitored Fields](/images/platgovsalesforce/tools/field_tracking_17.webp)

## Change Logs
Change logs are automatically generated by the Field Tracking tool when the batch process is run. These logs provide a detailed record of field permission changes detected during the monitoring process.

### Example Change Log
![Change Log Example](/images/platgovsalesforce/tools/field_tracking_change_log_example.webp)

The change log provides a comprehensive record of field permission modifications, typically including:
- Timestamp of the change
- Object name
- Field name
- Change Type
- Monitoring Rule
- Profile or Permission Set
- Old Access and New Access

## Available Reports

### Monitored Fields Tracking Changes Report
This report can be accessed through:
- Menu: Reports > Access Reports > Monitored Fields Tracking Changes

![Monitored Fields Tracking Changes Report](/images/platgovsalesforce/tools/monitored_fields_tracking_changes_report.webp)

### Field Permission Changes By Date Report
This report can be accessed through:
- Component: Download Field on the Home page

![Field Permission Changes By Date Report](/images/platgovsalesforce/tools/field_permission_changes_by_date_report_1.webp)

![Field Permission Changes By Date Report](/images/platgovsalesforce/tools/field_permission_changes_by_date_report_2.webp)

## Best Practices
- Carefully select fields to track
- Use compliance categories for better organization
- Regularly review monitoring rules
- Set up notifications to stay informed about field changes
- Every time you create a new field, evaluate if the new field needs to be added to any existing Monitored Rule or if you need to create a new one.
- Make sure the Field Tracking scanner is scheduled on a regular basis.

## Limitations
- Object selection limited to 5 per criterion
- Field selection limited to 25 total
- Requires careful configuration to avoid performance impacts

## Troubleshooting
- Check notification settings if reports are not received
- Verify object and field selection criteria
- Ensure proper permissions for tracking
- Missing field access change log: Review if the field is part of a monitoring rule and/or if the rule is active.
