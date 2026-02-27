# FastScan Feature

## Overview

The FastScan feature is an automated scanning feature that monitors and tracks changes to **Profiles**, **Permission Sets**, and **Permission Set Groups** in your Salesforce org. Unlike the standard scanner that performs full metadata retrieval, the FastScan feature uses the **SetupAuditTrail** to detect changes incrementally, providing faster and more efficient change tracking for security-related metadata.

## What FastScan Does

The FastScan monitors your org for changes to security permissions by:

- Querying the **SetupAuditTrail** object for permission-related changes
- Identifying modified Profiles, Permission Sets, and Permission Set Groups
- Creating Change Log records to document what changed and when
- Triggering targeted rescans only for the modified customizations
- Running on a scheduled basis to keep your documentation up to date

This approach significantly reduces processing time compared to full metadata scans while ensuring you capture all security changes in near real-time.

### Special Profile Settings Detection

The FastScan is the **only method** that detects and documents changes to:

- **ProfilePasswordPolicy**: Password policies and requirements configured at the Profile level
- **ProfileSessionSetting**: Session timeout and security settings for Profiles

When changes are made to these settings, it automatically creates Change Log records at the Profile level, ensuring complete visibility of security configuration changes that are not captured by the standard scanner.

---

## Key Benefits

- **Faster Processing**: Scans only changed items instead of all metadata
- **Incremental Updates**: Tracks changes since the last scan run
- **Automated Monitoring**: Runs on a schedule you define
- **Focused on Security**: Specifically monitors Profiles, Permission Sets, and Permission Set Groups
- **Exclusive Detection**: Only the FastScan detects ProfilePasswordPolicy and ProfileSessionSetting changes, registering them at the Profile level

---

## How The FastScan feature Works

### 1. Scheduled Execution

The FastScan runs automatically based on the schedule you configure in the **Scheduling** section of the Platform Governance Scheduler. You can set it to run daily, weekly, or at custom intervals to continuously monitor permission changes in your org.

### 2. Change Detection

The FastScan monitors changes by:

1. Checking the SetupAuditTrail for permission-related modifications since the last scan (up to 8 days back)
2. Identifying which Profiles, Permission Sets, or Permission Set Groups were modified
3. Creating Change Log records to document the changes

### 3. Change Log Creation

1. **Consolidates Changes**: Groups multiple changes to the same customization on the same day
2. **Creates Change Logs**: Generates Change Log records with detailed change information
3. **Updates Timestamps**: Records when changes were detected
4. **Triggers Rescan**: Initiates a targeted rescan of modified customizations

### 4. Targeted Rescan

After Change Logs are created, the FastScan triggers a rescan process that:

1. Retrieves fresh metadata only for the modified Profiles/Permission Sets/Permission Set Groups
2. Updates the Customization records with current values
3. Creates detailed Change Logs showing what specifically changed
4. Updates junctions and dependencies

---

### Scheduling the FastScan feature

You can schedule the FastScan to run automatically:

1. Go to the **Netwrix Dashboard** page
2. Navigate to the **Scanner** > **Scheduler** menu
3. Locate the **FastScan Profile/Permission Set** scheduler
4. Select your desired frequency (e.g., Daily, Weekly)
5. Choose the time of day to run
6. Click **Enable** to activate

For more information about the scheduler, see the [Scheduler documentation](/docs/platgovsalesforce/scanner/scheduler.md).

**Best Practice**: Schedule the FastScan to run daily during off-peak hours to ensure timely change detection without impacting users.

### Manual Execution

To run the FastScan feature manually:

1. Navigate to the **Netwrix Dashboard** page
2. Locate the **Fast Scan Profile / PermissionSets** section
3. Click **Starth**
4. Monitor the progress in the **Running Jobs** section

---

## Understanding the FastScan Results

### Change Log Records

The FastScan creates Change Log records with the following information:

- **Customization**: The Profile, Permission Set, or Permission Set Group that changed
- **Change Overview**: Description of what changed
- **Actual Change DateTime**: When the change occurred in Salesforce
- **Modified By**: User who made the change
- **Field Name**: Specific field or permission that changed

---

### Troubleshooting

Not change logs detected by the FastScan:

1. **Verify Schedule**: Confirm the FastScan scheduler is active in Setup → Scheduled Jobs
2. **Review Apex Jobs**: Look for failed batch jobs in Setup → Apex Jobs
3. **Check Permissions**: Verify the running user has access to SetupAuditTrail and related objects
4. **Review Time Range**: The FastScan looks back maximum 8 days; older changes won't be detected

---

## Best Practices

1. **Schedule Regularly**: Run the FastScan daily to ensure timely change detection
2. **Monitor Results**: Review Change Logs regularly to stay informed of security changes
3. **Off-Peak Execution**: Schedule during low-usage hours to minimize impact
4. **Review Failed Jobs**: Check Apex Jobs regularly for any processing errors
5. **Maintain Custom Setting**: Keep **Fast_Scan_Params__c** properly configured

---