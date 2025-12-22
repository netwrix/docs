---
title: "ExchangeMetrics: Time Frames"
description: "ExchangeMetrics: Time Frames"
sidebar_position: 50
---

# ExchangeMetrics: Time Frames

The Time Frames page is used to configure message delivery time frames for which to return summary
metrics by server. It is a wizard page for the category of:

- Delivery Time Custom.

![Exchange Metrics Data Collector Wizard Time Frames page](/images/accessanalyzer/11.6/admin/datacollector/exchangemetrics/timeframes.webp)

Configure the desired time frames using the following options:

- Frame name – Name the configured time frame. Can either be entered manually or a default will
  populate when frame limits are set.
- Start – Specify the lower limit of the delivery time frame
- End – Specify the upper limit of the delivery time frame
- Select the time unit of the time frame:

    - Seconds
    - Minutes
    - Hours

For example, a **Start** value of **1** and an **End** value of **2** with the **Minutes** unit
selected returns messages delivered in 1 to 2 minutes.

- Infinite – Select the checkbox to eliminate the **End** value from the scan. For example, a
  **Start** value of **2** with the **Infinite** checkbox selected retrieves all messages that took
  2 seconds/minutes/hours or longer to deliver.

Once the frame is configured, click **Add**. The configured message time frame will appear in the
list. Multiple time frames can be configured. Select a frame and click **Replace** to modify an
existing frame. Use **Remove** to delete an existing frame.
