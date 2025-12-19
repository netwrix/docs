---
title: "ExchangeMetrics: Message Sizes"
description: "ExchangeMetrics: Message Sizes"
sidebar_position: 60
---

# ExchangeMetrics: Message Sizes

The Message Sizes page is used to configure message size frames for which to return summary metrics
by server. It is a wizard page for the category of:

- Message Size Statistics Custom.

![Exchange Metrics Data Collector Wizard Message Sizes page](/images/accessanalyzer/12.0/admin/datacollector/exchangemetrics/messagesizes.webp)

Configure the desired message size frames using the following options:

- Frame name – Name the configured message size parameters. Can either be entered manually or a
  default will populate when query limits are set.
- Start – Specify the lower limit of the message sizes (in MB)
- End – Specify the upper limit of the message sizes (in MB)

For example, a **Start** value of **1** and an **End** value of **2** returns messages between 1 and
2 megabytes.

- Infinite – Select the checkbox to remove the **End** value from the scan. For example, a **Start**
  value of **5** with the **Infinite** checkbox selected retrieves all messages which are 5
  megabytes or larger.

Once the frame is configured, click **Add**. The configured message size frame will appear in the
list. Multiple frames can be configured. Select a frame and click **Replace** to modify an existing
frame. Use **Remove** to delete an existing frame.
