---
title: "Alert Profiles"
description: "Alert Profiles"
sidebar_position: 70
---

# Alert Profiles

Alert profiles provide a way to easily group alert configurations and delivery notification settings
together. You can create an alert profile, enable relevant alerts for the profile, and assign it to
organization(s). Additionally, you can customize delivery settings and specify which user(s) will
receive notifications when alerts in the profile are triggered.

To view the alert profiles, navigate to Configuration > Alerts.

![Alert Profiles List](/images/1secure/admin/alerts/alertsprofiles.webp)

Alert profiles are displayed in the list with the following information:

- Alert profile – The name of the alert profile
- Alerts enabled – The number of alerts enabled for the profile
- Used in organizations – The number of organizations the alert profile is applied to
- Notification delivery – Indicates whether email notifications are configured for the profile

:::note
The alert profile named _Netwrix Profile (Default)_ is available by default and is
automatically applied to all managed organizations.
:::


## Add an Alert Profile

Follow the steps to add an alert profile.

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** Click **Add profile**. The New alert profile pane is displayed.

![New Alert Profile pane](/images/1secure/admin/alerts/addalertprofile.webp)

**Step 3 –** Enter a name for the alert profile in the Name field and click **Save**.

The alert profile is added to the list. You can:

- Assign this profile to an organization. You can do this when creating a new organization or
  editing an organization. See the [Add Organizations](/docs/1secure/admin/organizations/addorganizations.md) topic
  for additional information.
- Click the profile to review the list of alerts, enable the desired alerts, make necessary edits
  for alerts, and set delivery settings for the alert profile. See [Alerts](/docs/1secure/admin/alerts/alerts.md) topic for
  additional information.

## Modify the Name of an Alert Profile

Follow the steps to modify the name of an alert profile.

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** Click the Edit icon for an alert profile. The Edit alert profile pane is displayed.

**Step 3 –** Modify the name of the profile.

**Step 4 –** Click **Save**.

## Delete an Alert Profile

:::note
(1) The alert profile named _Netwrix Profile (Default)_ cannot be deleted.
(2) When an alert profile is deleted, the _Netwrix Profile (Default)_ is automatically assigned to
the organizations that were previously assigned the deleted profile.
:::


Follow the steps to delete an alert profile.

**Step 1 –** Navigate to Configuration > Alerts.

**Step 2 –** Click the Delete icon for an alert profile to delete it. A dialog box is displayed,
prompting you to confirm the deletion of the profile.

**Step 3 –** Click **Yes**. The alert profile is deleted from the system.

## Manage Delivery Settings for an Alert Profile

You can receive alerts by email or through the third-party ticket service, as used by the Managed
Service Providers.

Follow the steps to configure alerts by email.

**Step 1 –** . Navigate to Configuration > Alerts.

**Step 2 –** Click an alert profile. The alerts for the profile are displayed in a list.

**Step 3 –** Click the Email icon under Delivery Settings. The Email Delivery Settings pane is
displayed.

![Email Delivery Settings pane](/images/1secure/admin/alerts/alertsemaildelivery.webp)

**Step 4 –** . Toggle the Enabled switch to ON to enable email notifications for the alert profile.

**Step 5 –** In the Email Addresses field, enter the email address of a recipient for alert
notifications and click the Add icon. To specify multiple email addresses, add them one by one.

**Step 6 –** Check the **Email Organization Admins** check box to send the alerts to all the
organization admins by email.

**Step 7 –** Click Save.

You may also link to a third-party ticketing system. See the
[Third-party systems](/docs/1secure/integration/overview.md) topic for additional information.
