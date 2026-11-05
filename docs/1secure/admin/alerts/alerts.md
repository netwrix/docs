---
title: "Alerts"
description: "Alerts"
sidebar_position: 10
---

# Alerts

When you create an alert profile, several alerts are preconfigured for it. You can, however, choose
to enable or disable them as well as add custom alerts to the profile. Specific events trigger these
alerts. This means that when 1Secure detects the defined action (event) within the organization
the alert profile is assigned to, it generates an alert. Alerts notify you of critical actions that
impact your organization's security so that you can respond swiftly to potential risks.

You can access the generated alerts in the following ways:

- View the alerts generated for an organization on the Netwrix 1Secure dashboard. See the
  [1Secure Dashboard](/docs/1secure/admin/dashboard/overview.md) topic for additional information.
  You can also open the Alerts page. See [View the Alerts Page](#view-the-alerts-page).
- Receive alerts as email notifications sent to the specified email address(es). See the
  [Manage Delivery Settings for an Alert Profile](overview.md#manage-delivery-settings-for-an-alert-profile) topic
  for setting up email notifications.

**To view the alerts within an alert profile:**

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** Click an alert profile. The alerts for the profile are displayed in a list.

![Alerts List within an alert profile](/images/1secure/admin/alerts/alertslist.webp)

You can view the following for each alert in the list:

- Source – Indicates the origin or type of data that triggers the alert. For example, Activity
  Records. System health alerts show Health Notification.
- Alert Name – The name of the alert
- Is Active – Indicates whether the alert is activated. You can toggle it ON or OFF as required.
- Grouping On – Indicates whether grouping is applied to the alert. If yes, then it displays the
  criteria, such as What, Who, Where, etc.
- Threshold – The threshold value set for the alert. The threshold is the minimum number of activity
  records that must occur within a specified time frame (threshold period) to trigger an alert.
- Threshold Period – The threshold period set for the alert. The threshold period is the maximum
  duration, starting from the first activity record, within which the specified number of activity
  records (threshold) must occur to trigger an alert.
- Batching Period – The batching period set for the alert. The batching period is the number of
  minutes after which new activity records aren't considered part of an existing alert.

To activate or deactivate several alerts at once, use the **Activate** and **Deactivate** bulk
actions.

## View the Alerts Page

The Alerts page is titled "Alerts" with the subtitle `Time-sensitive activity across identities,
data and AI in your connected tenants.` On this page you can:

- Select a time range: Last 24 hours, Last 7 days, Last 30 days, Last 60 days, Last 90 days, or All
  time.
- Select **All users** or **Filter by user** to filter the alerts by user.
- Click **Configure alerts**.

If the page shows "You don't have access to alerts", you need the Dashboard view permission.

## Add a Custom Alert

**To add a custom alert:**

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** Click an alert profile. The alerts for the profile are displayed in a list.

**Step 3 –** Click **Add**. The New alert pane is displayed.

![New Alert Pane](/images/1secure/admin/alerts/addcustomalert.webp)

**Step 4 –** Select a custom report from the Report dropdown menu (placeholder "Select a report") to trigger the alert when a new
record is generated for the report. A custom alert always uses Activity Records as its source. See the [ Custom Reports](/docs/1secure/admin/searchandreports/customreports.md)
topic for additional information. If the organization has no custom reports, you can't create a
custom alert, and 1Secure shows `There must be at least one custom report in order to create a
custom alert.`

**Step 5 –** Specify a name and description for the alert. The name must be unique among the alerts
in the profile and the built-in alerts, ignoring case. If it isn't, 1Secure shows `There is already
an Alert with this name.  Please ensure the name is unique.`


**Step 6 –** Toggle the **Is Active** switch to ON to activate the alert. Notifications are sent for
active alerts only.

**Step 7 –** Toggle the **Is Grouped** switch to ON, which displays the Grouped On dropdown menu.
When grouping is enabled, alerts are organized based on the criteria you select in the _Grouped On_
dropdown menu.

**Step 8 –** Select one of the following options from the **Grouped On** dropdown menu (placeholder "Select a group"):

- Who – Groups alerts by the user who performed the activity (deleted an account,
  created a record, etc.)
- Where – Groups alerts by the location where the activity is performed. For example,
  SharePoint Online site, file server, etc.
- What – Groups alerts by the object the activity is performed on, such as a computer,
  file, etc.

Example: You have two users, User 1 and User 2, each performing different actions. By setting
"Grouped On" to "Who", alerts are generated per user, resulting in two separate alerts — one for
User 1 and another for User 2. Each alert includes only the activity associated with that
specific user. If grouping isn't enabled, all activities are consolidated into a single alert
based on the specified _threshold_ and _threshold period_.

**Step 9 –** In the Threshold field, specify a threshold for the alert as a whole number from 1 to 999. The threshold is the minimum
number of activity records that must occur within a specified time frame (threshold period) to
trigger an alert. For example, if the threshold is set to 3, an alert is triggered when at
least 3 activity records are generated within the specified time frame. An alert fires when the
matched activity records are greater than or equal to the threshold.

**Step 10 –** In the Threshold Period field, specify a threshold period for the alert as a whole number from 5 to 60 minutes. The threshold
period is the maximum duration, starting from the first activity record, within which the specified
number of activity records (threshold) must occur to trigger an alert. For example, if the threshold
is set to 5 and the threshold period is 10 minutes, at least 5 activity records must be generated
within 10 minutes to trigger an alert.

**Step 11 –** To avoid receiving an email each time activity records match the alert, specify a
batching period as a whole number from 1 to 1440 minutes in the Batching Period field. The batching
period is the number of minutes after which new activity records aren't considered part of an
existing alert. Email is sent only for new alerts, so activity records inside the batching period
don't trigger another email. For example, if the batching period is set to 30 minutes for an alert
such as "Computer removed," activity records that occur within 30 minutes of an existing alert are
part of that alert and don't trigger another email.

**Step 12 –** Click **Save**.

The alert is configured and added to the list.

## Modify an Alert

**To modify a preconfigured or custom alert:**

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** Click an alert profile. The alerts for the profile are displayed in a list.

**Step 3 –** Click the **Edit** icon for an alert. The Edit alert pane is displayed.

**Step 4 –** Modify the required information. See the
[Add a Custom Alert](#add-a-custom-alert) topic, starting from Step 4 for additional information.

**Step 5 –** Click **Save**.

## Delete a Custom Alert

**To delete a custom alert:**

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** Click an alert profile. The alerts for the profile are displayed in a list.

**Step 3 –** Click the **Delete** icon for an alert to delete it. A dialog box is displayed,
prompting you to confirm the deletion of the alert. The dialog box warns that deleting the alert
also removes associated data such as historical triggers of the alert.

**Step 4 –** Click **Yes**. The alert is deleted from the system.
