---
description: >-
  Shows how to modify the Activity Summary delivery schedule in Netwrix Auditor,
  and explains considerations when increasing delivery frequency for plans with
  State in Time enabled.
keywords:
  - Activity Summary
  - delivery schedule
  - Monitoring Plans
  - Notifications Tab
  - State in Time
  - Netwrix Auditor
  - delivery frequency
products:
  - auditor
sidebar_label: How to modify the Activity Summary delivery schedu
tags: []
title: "How to modify the Activity Summary delivery schedule"
knowledge_article_id: kA00g000000PbdJCAS
---

# How to modify the Activity Summary delivery schedule

How do I modify the Change Summary delivery schedule?

---

To modify the Activity Summary delivery schedule, perform the following:

1. In **Netwrix Auditor** navigate to **Monitoring Plans** and double click the desired plan
2. Click **Edit Settings**
3. Choose to **Notifications Tab**
4. Here, you can change the delivery time and frequency of delivery, up to every hour.

**NOTE:** Increasing delivery frequency on a plan with State in Time enabled will require you to consider the following:

- State in Time collection is tied to delivery frequency
- Collecting State in Time more than once a day could potentially affect performance of target systems and the Netwrix Auditor server.
- Storage consumption on the Netwrix Auditor server will increase significantly
