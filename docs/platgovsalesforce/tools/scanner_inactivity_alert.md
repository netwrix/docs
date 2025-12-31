---
title: "Scanner Inactivity Alert"
description: "Scanner Inactivity Alert User Guide"
sidebar_position: 111
---

# Scanner Inactivity Alert

## Automated Notifications for Auto Scanner Monitoring

### Overview

The Scanner Inactivity Alert feature provides automated email notifications to designated administrators when the Auto Scanner fails to run according to its configured schedule. This proactive monitoring ensures that your Salesforce environment remains continuously protected.

#### Key Benefits:

- **Proactive Monitoring**: Receive immediate alerts when the scanner stops running
- **Reduced Risk**: Minimize gaps in compliance and security monitoring
- **Flexible Configuration**: Select specific admin users to receive notifications
- **Automated Detection**: System automatically monitors scanner execution

## Accessing Scanner Inactivity Alert

1. Navigate to **Netwrix Dashboard**
2. Go to **Settings** → **Configuration and Stats**

    ![Configuration and Stats Menu](/images/platgovsalesforce/scanner_inactivity_alert/Config_Stats_Menu.webp)

3. Locate the **Scanner Inactivity Alert** section

    ![Scanner Inactivity Alert Section](/images/platgovsalesforce/scanner_inactivity_alert/Scanner_Inactivity_Alert.webp)

## Configuration Steps

### Step 1: Enable Scanner Inactivity Alert

1. **Locate the Enable Checkbox**
   - Find the checkbox labeled "Enable Scanner Inactivity Alert"

2. **Enable the Feature**
   - Select the checkbox to enable scanner inactivity alerts
   - Once enabled, the Admin Users Selection panel appears below

### Step 2: Select Admin Users

After enabling the alert, configure the recipients.

#### Admin Users Selection Panel

**Title**: Admin Users Selection

**Description**: Select which Salesforce Admin users should receive inactivity alerts.

A multi-select list displays available administrator users.

#### Select Recipients

The system lists all Salesforce users with the System Administrator profile.

![Admin Users Selection](/images/platgovsalesforce/scanner_inactivity_alert/Scanner_Inactivity_Alert_Select.webp)

Use the multi-select panel to manage recipients:

- **Search**: Type to filter admin users by name
- **Select**: Click a user to add them to the recipient list
- **Remove**: Click a selected user again to remove them
- Multiple users can be selected

#### Review Selection

- Confirm all intended recipients are selected
- For redundancy, consider selecting more than one admin

### Step 3: Save Configuration

#### Save Settings

1. Click **Save Configuration** at the bottom of the page
2. A loading spinner appears while the configuration is saved
3. Wait for the confirmation message

#### Confirmation

- Success message: "Scanner Inactivity Alert configuration saved successfully."
- The configuration becomes active immediately
- Selected admins will receive alerts when scanner inactivity is detected

## How It Works

### Alert Trigger Conditions

The system continuously monitors the Auto Scanner and sends alerts when any of the following conditions occur:

#### Scheduled Execution Missed

- The Auto Scanner does not run at its scheduled time
- Multiple consecutive missed executions may result in repeated alerts

### Email Notification Content

When an alert is triggered, recipients receive an email containing:

- **Alert Type**: Scanner Inactivity Detected
- **Timestamp**: When the issue was detected
- **Scanner Name**: Auto Scanner
- **Expected Schedule**: The configured execution schedule
- **Last Successful Run**: Timestamp of the last successful scanner execution
- **Action Required**: Recommendations for investigating and resolving the issue

### Alert Frequency

- Alerts are sent each time a scheduled execution is missed
- No duplicate alerts are sent for the same missed execution
- Once the scanner resumes normal operation, no further alerts are sent until the next issue

## Best Practices

### Configuration Recommendations

1. **Multiple Recipients**: Configure at least two admin users to ensure redundancy
2. **Active Monitoring**: Regularly review alert emails and take prompt action
3. **Test Configuration**: After initial setup, verify alerts are working by temporarily disabling the scanner
4. **Documentation**: Keep a record of who receives alerts and their contact information

### Troubleshooting Scanner Issues

When you receive an inactivity alert:

1. **Check Scanner Status**: Navigate to Scanner > Scheduler and verify the scanner configuration
2. **Review System Logs**: Check for any error messages or system issues
3. **Verify Credentials**: Ensure Salesforce connection credentials are valid
4. **Check System Resources**: Verify sufficient system resources are available
5. **Contact Support**: If issues persist, contact Netwrix support with alert details

## Troubleshooting

### Alerts Not Being Received

**Issue**: Configured admins are not receiving inactivity alerts

**Solutions**:
- Verify the feature is enabled in Configuration and Stats
- Confirm at least one admin user is selected
- Check that selected users have valid email addresses in Salesforce
- Verify email deliverability settings in your organization
- Check spam/junk folders for alert emails

### False Positive Alerts

**Issue**: Receiving alerts when the scanner is running normally

**Solutions**:
- Verify the scanner schedule is correctly configured
- Check for system time zone discrepancies
- Review scanner execution logs for any failures
- Contact Netwrix support if the issue persists

### Cannot Select Admin Users

**Issue**: Admin users are not appearing in the selection list

**Solutions**:
- Verify users have the System Administrator profile
- Ensure users are active in Salesforce
- Refresh the page and try again
- Check user permissions and profile assignments

## Limitations

- Only users with the System Administrator profile can be selected as recipients
- Alerts are sent only for the Auto Scanner, not manual scanner executions
- Email delivery depends on your organization's email configuration
- Alert history is not stored within the application

## Related Topics

- [Scanner Overview](/docs/platgovsalesforce/scanner/scanner_overview.md)
- [Running Scanner](/docs/platgovsalesforce/scanner/running_scanner.md)
- [Scheduler](/docs/platgovsalesforce/scanner/scheduler.md)
- [Settings Overview](/docs/platgovsalesforce/settings/settings_overview.md)