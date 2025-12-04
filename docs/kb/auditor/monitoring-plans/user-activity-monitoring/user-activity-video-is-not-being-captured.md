---
description: >-
  If User Activity monitoring shows no errors but you are not receiving video
  recordings, verify that recording is enabled and follow the troubleshooting
  steps to resolve common causes.
keywords:
  - User Activity
  - video recordings
  - monitoring plan
  - Data Collection Account
  - Netwrix Auditor
  - Health Log
  - Local Administrator
  - troubleshooting
products:
  - auditor
sidebar_label: User Activity video is not being captured
tags: []
title: "User Activity video is not being captured"
knowledge_article_id: kA00g000000PbczCAC
---

# User Activity video is not being captured

If there are no errors listed for your User Activity monitoring plan and you are not receiving video recordings for your monitored computers, ensure you have the recording option **enabled**.

## Verify recording is enabled

1. Navigate to your User Activity monitoring plan(s).
2. Select **Edit Data Source**.

![Edit Data Source](https://kb.netwrix.com/wp-content/uploads/2020/04/1-1-1024x328.png)

3. Ensure the **Record video of user activity within sessions** option is enabled.

![Record video of user activity within sessions](https://kb.netwrix.com/wp-content/uploads/2020/04/2-1024x326.png)

## Troubleshooting

If this option is enabled and videos are still not being captured, proceed with the following troubleshooting:

- Ensure the Data Collection Account is a **Local Administrator** on **all** target servers.
- Validate Configuration Settings:
  - See the Configuration Settings documentation: https://helpcenter.netwrix.com/Configure_IT_Infrastructure/User_Activity/UAVR_Data_Collection.html#Configur
- Review the Netwrix Auditor Health Log for any errors related to User Activity.
  - The support team often encounters environmental errors, such as remote services becoming unavailable.
- Add the Netwrix Auditor Host Server as an item under your User Activity Monitoring Plan and attempt to capture video.
  - This may provide more insight on issues related to networking or configuration.
