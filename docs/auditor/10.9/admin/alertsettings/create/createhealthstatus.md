---
title: "Create Alerts on Health Status"
description: "Create Alerts on Health Status"
sidebar_position: 30
---

# Create Alerts on Health Status

You can configure alerts to be triggered by important events in the Netwrix Auditor System Health
log.

To create alerts to be notified on Auditor Health Status, follow the basic steps for creating the
monitoring plan used to collect data on Auditor health status events. See the topic for additional
information.

**Step 1 –** Start Netwrix Auditor Event Log Manager and create the new monitoring plan.

**Step 2 –** Ensure that the Enable event log collection checkbox is selected. Specify the name
for the new plan, for example, _"\_Netwrix Auditor \_Health Status"_.

**Step 3 –** Navigate to the Monitored computers list and add a server where the Auditor server
resides.

**Step 4 –** On the General tab, click Configure next to Alerts. Ensure the predefined alerts are
disabled. Click Add to create a new alert.

**Step 5 –** In the Alert Properties wizard, specify the alert name and enter alert description
(optional). Specify the number alerts per email. Auditor delivers grouped alerts for different
computers in separate email messages. This value is set to 1 by default, so Auditor delivers each
alert as a separate email message.

**Step 6 –** Specify alert recipient if you want the alert to be delivered to a non-default email.

**Step 7 –** Navigate to Event Filters and click Add to specify an event that will trigger the
alert.

**Step 8 –** Complete the Event Filter dialog.

- In the Event tab, specify the filter name and description. In the Event Log field select the
  Netwrix Auditor System Health log.
- In the Event Fields tab, select event levels that will trigger the alert.

**Step 9 –** Click OK to save the changes and close the Event Filters dialog.

**Step 10 –** In the Netwrix Auditor Event Log Manager wizard, navigate to the Notifications section
and specify the email address to receive notifications.

**_RECOMMENDED:_** click **Send Test Email**. The system will send a test message to the specified
email address and inform you if any problems are detected.

**Step 11 –** In the Audit Archiving filters, select the Netwrix Auditor System Health as the
inclusive filter.

**Step 12 –** Click Save to save your changes.

![emailhealthstatusevent](/images/auditor/10.9/admin/alertsettings/emailhealthstatusevent.webp)

If an event occurs that triggers an alert, Auditor immediately sends an email notification to the
specified recipients.
