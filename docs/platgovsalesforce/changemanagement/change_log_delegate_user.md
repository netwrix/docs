# Delegate User

## Overview
Delegate User allows you to identify when configuration changes are performed by a delegated user rather than the original administrator.

When a configuration change is detected, the system checks the corresponding Audit Trail entry and automatically associates the **Delegate User** with the generated Change Log. This helps you understand who actually executed the change when delegated access is used.

This feature improves traceability and accountability by providing visibility into delegated administrative activity.

## How Delegate User Works
When the scanner detects a configuration change:

1. The system reads the corresponding **Audit Trail** entry.
2. It identifies whether the action was performed using delegated access.
3. If a delegated user is detected, the system records that user in the **Delegate User** field of the Change Log.

This information is then visible in Change Logs and reports.

## Viewing Delegate User Information

You can view Delegate User information directly in the Change Log records.

To access Change Logs:

1. Go to the **Netwrix Dashboard**.
2. Navigate to **Access Reports** or the relevant Change Log view.
3. Open a Change Log record.

If the change was executed using delegated access, the **Delegate User** field displays the user who performed the action.

## Example
When an administrator grants access to another user through delegated administration and that user modifies field permissions:

- The change is detected by the scanner.
- A Change Log record is created.
- The **Delegate User** field shows the delegated user who executed the modification.

### Setup Audit Trail entry
![Setup Audit Trail entry for delegate user](/images/platgovsalesforce/change_management/changelog_delegate_user_1.webp)

### Customization record
![Customization record showing owner](/images/platgovsalesforce/change_management/changelog_delegate_user_2.webp)

### Change Log showing Delegate User
![Delegate User in Change Log](/images/platgovsalesforce/change_management/changelog_delegate_user_3.webp)

This allows you to differentiate between:

- The original administrator
- The user who actually performed the change

## Where Delegate User Information Appears
Delegate User information may appear in:

- Change Log records
- Monitoring reports
- Exported change tracking reports

This allows you to audit delegated administrative actions across the system.

## Best Practices
- Regularly review Change Logs to monitor delegated administrative activity.
- Ensure delegated administration is granted only to trusted users.
- Periodically audit delegated users to maintain proper governance.

## Limitations
- Delegate User information is available only when the change is recorded in the Salesforce Setup Audit Trail.
- If the Audit Trail entry does not include delegated user information, the Delegate User field remains empty.

## Troubleshooting
- If Delegate User information is missing, verify that the change appears in the Salesforce **Setup Audit Trail**.
- Ensure the scanner runs regularly so changes are detected and logged.

## References
- For additional information, see [Using Change Logs](/docs/platgovsalesforce/changemanagement/using_change_logs.md).