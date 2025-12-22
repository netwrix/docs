---
title: "Alerts"
description: "Alerts"
sidebar_position: 70
---

# Alerts

If you want to be notified about suspicious activity, you can configure alerts that will be
triggered by specific events. Alerts are sent after the specified action has been detected. Alerts
are helpful if you want to be notified about actions critical to your organization security and have
to mitigate risks once the suspicious action occurs.

Review the following to take advantage of the Alerts functionality:

- See the[Manage Alerts](/docs/auditor/10.7/admin/alertsettings/manage.md) topic for additional information on how to edit and enable
  existing predefined alerts, and create new alerts based on the predefined ones.
- See the [Create Alerts](/docs/auditor/10.7/admin/alertsettings/create/create.md) topic for additional information on how to create custom alerts
  with your personal filters.
- If you need to be alerted on specific events in your Event Logs or non-owner mailbox access
  attempts, see the [Create Alerts for Event Log](/docs/auditor/10.7/admin/alertsettings/create/createeventlog.md) and
  [Create Alerts for Non-Owner Mailbox Access Events](/docs/auditor/10.7/admin/alertsettings/create/createmailboxaccess.md) topics for additional
  information.

The example alert is triggered when a new user is created in the monitored domain.

![ad_alert](/images/auditor/10.7/admin/alertsettings/ad_alert.webp)

## Tags

Netwrix Auditor allows you to apply tags when creating an alert. Applying tags to alerts allows you
to distinguish one alert from another or create groups of similar alerts.

![Manage tags list](/images/auditor/10.7/admin/alertsettings/managetags.webp)

The Tags page contains a complete list of alerts that were created in the product. Currently, you
cannot assign or create tags on this page.

To apply tags to an alert, navigate to alert settings and locate the Apply tags section on the
General tab. See the [Create Alerts](/docs/auditor/10.7/admin/alertsettings/create/create.md) topic to receive information about tags applying.
