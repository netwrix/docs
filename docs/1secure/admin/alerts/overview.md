---
title: "Alert Profiles"
description: "Alert Profiles"
sidebar_position: 70
---

# Alert Profiles

Alert profiles group alert configurations and delivery notification settings together. You can create an alert profile, enable relevant alerts for the profile, and assign it to
organizations. Additionally, you can customize delivery settings and specify which users will
receive notifications when alerts in the profile are triggered.

To view the alert profiles, navigate to Configuration > Alerts. Managing alert profiles requires the
Manage Alerts permission, and viewing alert configuration requires the View Alerts permission. The
Manage Alerts permission lets users manage alerts, and the View Alerts permission lets users view
alerts.

![Alert Profiles List](/images/1secure/admin/alerts/alertsprofiles.webp)

Alert profiles are displayed in the list with the following information:

- Alert profile – The name of the alert profile
- Alerts enabled – The number of alerts enabled for the profile
- Used in organizations – The number of organizations the alert profile is applied to
- Notification delivery – Indicates whether email notifications are configured for the profile

:::note
The alert profile named _Default Alert Profile_ is available by default.
:::


## Add an Alert Profile

**To add an alert profile:**

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** Click **Add profile**. The New alert profile pane is displayed.

![New Alert Profile pane](/images/1secure/admin/alerts/addalertprofile.webp)

**Step 3 –** Enter a name for the alert profile in the Name field and click **Save**.

The alert profile is added to the list with the built-in system health alerts added and enabled.
You can:

- Assign this profile to an organization. See the [Add Organizations](/docs/1secure/admin/organizations/addorganizations.md) topic
  for additional information.
- Click the profile to review the list of alerts, enable the alerts you want, make necessary edits
  for alerts, and set delivery settings for the alert profile. See [Alerts](/docs/1secure/admin/alerts/alerts.md) topic for
  additional information.

## Modify the Name of an Alert Profile

**To modify the name of an alert profile:**

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** Click the Edit icon for an alert profile. The Edit alert profile pane is displayed.

**Step 3 –** Modify the name of the profile.

**Step 4 –** Click **Save**.

## Delete an Alert Profile

:::note
(1) You can't delete the alert profile that is active for your own tenant.
(2) When an alert profile is deleted, the _Default Alert Profile_ is automatically assigned to
the organizations that were previously assigned the deleted profile.
:::


**To delete an alert profile:**

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** Click the Delete icon for an alert profile to delete it. A dialog box is displayed,
prompting you to confirm the deletion of the profile. If no organization uses the profile, the
dialog box asks "Are you sure you want to delete this alert profile?" If one or more child
organizations use the profile, the dialog box says the profile will be replaced with the default
in those organizations and asks whether to delete it anyway.

**Step 3 –** Click **Yes**. The alert profile is deleted from the system.

## Manage Delivery Settings for an Alert Profile

You can receive alerts by email or through a third-party ticketing system.

**To configure alerts by email:**

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** Click an alert profile. The alerts for the profile are displayed in a list.

**Step 3 –** Click the Email icon under Delivery Settings. The Email Delivery Settings pane is
displayed.

![Email Delivery Settings pane](/images/1secure/admin/alerts/alertsemaildelivery.webp)

**Step 4 –** . Toggle the Enabled switch to ON to enable email notifications for the alert profile.

**Step 5 –** In the Email Addresses field, enter the email address of a recipient for alert
notifications and press Enter, or move out of the field, to add it. To specify multiple email
addresses, add them one by one. 1Secure validates each address and shows "Invalid email format"
for an invalid one. Duplicate addresses are ignored.

**Step 6 –** Check the **Email Organization Admins** checkbox to send the alerts to all the
organization admins by email. An enabled email action needs at least one email address or the
**Email Organization Admins** checkbox. Otherwise, **Save** is disabled and 1Secure shows "Add at
least one email address or select Email Organization Admins."

**Step 7 –** Click Save.

Emails are sent only for new alerts. Alerts that already existed in the batching period don't
trigger another email. The email subject is "Netwrix 1Secure Alert: <alert name>". Activity alert
emails contain a "Click here to investigate" button that opens the report for the alert's time
range. When grouping is on, the email lists a table with the columns Item, Num of occurrences,
First Activity, Last Activity, and View Activity.

You can also link to a third-party ticketing system. See the
[Third-party systems](/docs/1secure/integration/overview.md) topic for additional information.
