---
description: >-
  Explains causes and resolutions for "Message size exceeds fixed maximum
  message size" errors in the Health Log when Netwrix Auditor cannot send email
  reports. Provides steps to compress attachments, change subscription file
  format, and verify the Exchange server.
keywords:
  - message size
  - SMTP
  - Exchange
  - Health Log
  - subscription
  - activity summary
  - compress attachment
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Message Size Exceeds Fixed Maximum Message Size Er
tags: []
title: "Message Size Exceeds Fixed Maximum Message Size Error in Health Log"
knowledge_article_id: kA00g000000H9WZCA0
---

# Message Size Exceeds Fixed Maximum Message Size Error in Health Log

## Symptoms

You've encountered one of the following errors in your Health Log:

```text
Netwrix Auditor was unable to send Activity Summary to %email_address%. 
Error: SMTP Exception: The server rejected the message: %message%
Message size exceeds fixed maximum message size.  
Check your SMTP settings. Make sure the Exchange server is up and running and recipient's mailbox is accessible.
```

```text
Netwrix Auditor was unable to deliver the subscription %subscription_name% due to the following error: 
The following subscriptions could not be sent to the recipient %email_address%: 
Error: Exceeded storage allocation. The server response was: %message%
Message size exceeds fixed maximum message size.
```

## Causes

- Size of the attached report exceeds the maximum message size.
- Your Exchange server is affected by a connectivity issue.

## Resolutions

- Activity Summaries in large environments may exceed the maximum message size.

  1. In the main Netwrix Auditor menu, select **Monitoring plans**, select the affected monitoring plan in the left pane, and click **Edit**.
  2. In the right pane, click **Edit settings** under the **Monitoring plan** section.
  3. In the left pane, select **Notifications**.
  4. Check the **Compress attachment before sending** checkbox, and click **Save**.

- Subscription reports in large environments may exceed the maximum message size.

  1. In the main Netwrix Auditor menu, select **Subscriptions**, select the affected subscription, and click **Edit**.
  2. In the left pane, select the **General** tab.
  3. Under the **Specify delivery options**, select **CSV** in the drop-down **File format** list.
  4. Click **Save** to save changes.

- Restart your Exchange server to verify the issue is not related to the server.
