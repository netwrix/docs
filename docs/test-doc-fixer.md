---
title: "Configure Alert Notifications"
description: "How to configure alert notifications in Netwrix Auditor"
sidebar_position: 990
---

# Configure Alert Notifications

Alert notifications are sent by the system when a suspicious activity threshold is exceeded. This
article explains how to set up email delivery for those alerts.

## Prerequisites

Before you begin, make sure that the following requirements are met:

- An SMTP server is available on your network
- The Netwrix Auditor service account has permission to relay email through that server
- You do not have firewall rules blocking outbound traffic on the SMTP port

## Configure the SMTP Server

**Step 1 –** Open Netwrix Auditor and navigate to **Settings**.

**Step 2 –** Click **Notifications**.

**Step 3 –** Enter your SMTP server address, port, and credentials.

**Step 4 –** Click **Send Test Email** to verify the connection. If no test email is received,
review the troubleshooting steps below.

For more information about SMTP settings, [click here](https://www.netwrix.com/support.html).

## Configure Alert Rules

**Step 1 –** Navigate to **Alert Rules**.

**Step 2 –** Click **Add Rule** to create a new rule.

**Step 3 –** Select the activity type and set the threshold. Bear in mind that thresholds are
evaluated per monitoring plan, not globally.

**Step 4 –** Under **Notification**, select the recipient group configured in the previous section.

**Step 5 –** Click **Save**. The rule is activated immediately.

## Troubleshoot Notification Failures

If alert emails are not received after the rule is triggered, check the following:

- Verify that the SMTP settings described above are correct
- Confirm that no firewall is blocking port 25 or 587 on the Auditor server
- Open the Netwrix Auditor audit log to confirm the alert was triggered

If the issue cannot be resolved using these steps, contact
[Netwrix Support](https://www.netwrix.com/support.html) for assistance.
