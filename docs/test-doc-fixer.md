---
title: "Configure Alert Notifications"
description: "How to configure alert notifications in Netwrix Auditor"
sidebar_position: 990
---

# Configure Alert Notifications

The system sends alert notifications when suspicious activity exceeds the configured threshold. This
article explains how to set up email delivery for those alerts.

## Prerequisites

Before you begin, ensure you meet the following requirements:

- An SMTP server is available on your network
- The Netwrix Auditor service account has permission to relay email through that server
- You don't have firewall rules blocking outbound traffic on port 25 or 587 (SMTP)

## Configure the SMTP Server

**Step 1 –** Open Netwrix Auditor and navigate to **Settings**.

**Step 2 –** Click **Notifications**.

**Step 3 –** Enter your SMTP server address, port, and credentials.

**Step 4 –** Click **Send Test Email** to verify the connection. If you don't receive a test email,
see [Troubleshoot Notification Failures](#troubleshoot-notification-failures).

See [Netwrix Support](https://www.netwrix.com/support.html) for SMTP configuration assistance.

## Configure Alert Rules

**Step 1 –** Navigate to **Alert Rules**.

**Step 2 –** Click **Add Rule** to create a new rule.

**Step 3 –** Select the activity type and set the threshold.

:::note
Netwrix Auditor evaluates thresholds per monitoring plan, not globally.
:::

**Step 4 –** Under **Notification**, select the recipient group for this alert.

**Step 5 –** Click **Save**. The rule activates immediately.

## Troubleshoot Notification Failures

### Test email failures

If you didn't receive the test email in [Configure the SMTP Server](#configure-the-smtp-server), verify
the server address, port, and credentials you entered in Step 3.

### Alert email failures

If you don't receive alert emails after the rule triggers, check the following:

- Verify that the SMTP settings in the [Configure the SMTP Server](#configure-the-smtp-server) section are correct
- Confirm that no firewall is blocking port 25 or 587 on the Auditor server
- Open the Netwrix Auditor audit log to confirm the alert triggered

If you can't resolve the issue using these steps, contact
[Netwrix Support](https://www.netwrix.com/support.html) for assistance.
