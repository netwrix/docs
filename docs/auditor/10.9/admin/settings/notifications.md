---
title: "Notifications"
description: "Notifications"
sidebar_position: 50
---

# Notifications

Notification settings are configured when you create the first monitoring plan in the New
monitoring plan wizard.

You can update notification settings at any time in **Settings > Notifications**. To disable
notifications, go to **Settings > Notifications > Modify** and select the **No notifications**
option.

Netwrix Auditor can deliver email notifications, reports, and activity summaries using either of
two delivery methods, selected in the **Method** column:

- [Enable Notifications via Exchange Online](/docs/auditor/10.9/admin/settings/notifications-exchangeonline.md) —
  modern (OAuth 2.0) authentication against Exchange Online / Microsoft 365, including national
  cloud (GCC, GCC High, DoD, China) support.
- [Enable Notifications via SMTP](/docs/auditor/10.9/admin/settings/notifications-smtp.md) —
  traditional SMTP delivery to any SMTP server, on-premises Exchange, or public mail provider.

## Activity and Health Summary Email

Follow the steps to send summary emails and notifications about critical events.

**Step 1 –** Navigate to the Summary email recipient and click **Modify**.

**Step 2 –** Specify the recipient address:

- To send to a single recipient, enter a personal mailbox address.
- To send to multiple recipients, make sure they are added to a distribution group, and enter the
  group address. Entering multiple individual addresses is not supported.

To learn more about product health, you can also navigate to the Health status tile in the main
window. It will take you to the Health Status dashboard, which contains information on product
activity and system health state. See the
[Health Status Dashboard](/docs/auditor/10.9/admin/healthstatus/dashboard/overview.md) topic for
additional information.
