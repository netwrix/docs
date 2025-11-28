---
description: >-
  Explains the recommended number of endpoints for enabling File Tracing and
  File Shadowing and how to avoid appliance performance issues caused by
  excessive log data.
keywords:
  - File Tracing
  - File Shadowing
  - endpoints
  - appliance performance
  - endpoint capacity
  - logs
  - Netwrix Help Center
products:
  - endpoint-protector
sidebar_label: "Determine the Recommended Number of Endpoints for File Tracing and File Shadowing"
tags:
  - enforced-encryption-and-easylock
title: "Determine the Recommended Number of Endpoints for File Tracing and File Shadowing"
knowledge_article_id: kA0Qk0000002BCVKA2
---

# Determine the Recommended Number of Endpoints for File Tracing and File Shadowing

## Question
How many computers can you enable File Tracing and File Shadowing for?

## Answer
The maximum number of endpoints for which you can enable File Tracing and File Shadowing is not limited in the Administration Interface. However, enabling this feature for too many endpoints can significantly impact appliance performance due to the volume of logs generated.

- You should enable File Tracing and File Shadowing for up to `15%` of your appliance’s total endpoint capacity to maintain optimal performance.
- Enabling these features for more than `15%` of endpoints, or for all endpoints, may cause your appliance to slow down or become unresponsive due to excessive log data.
- You can further optimize performance by adjusting settings such as the maximum file size for File Tracing and File Shadowing.

If you have questions about optimizing this feature or experience performance issues, contact Netwrix Technical Support by opening a support ticket on the [Netwrix Help Center](https://www.netwrix.com/support.html).
