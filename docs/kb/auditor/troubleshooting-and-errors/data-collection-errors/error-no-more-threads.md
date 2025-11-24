---
description: >-
  Shows how to resolve the "No more threads..." connection error from NetWrix
  Account Lockout Examiner by restarting the WMI service on the target domain
  controller.
keywords:
  - NetWrix
  - account lockout
  - WMI
  - Windows Management Instrumentation Service
  - services.msc
  - RDP
  - domain controller
  - No more threads
products:
  - auditor
sidebar_label: 'Error: No more threads'
tags: []
title: 'Error: No more threads'
knowledge_article_id: kA00g000000H9T8CAK
---

# Error: No more threads

NetWrix Account Lockout Examiner returns the following error in the connection status of the monitored domain controller: "No more threads..."

To fix the issue, restart the **WMI service** on the **target domain controller**. To do this, perform the following steps:

1. Connect to the target domain controller via **Remote Desktop Connection** (RDP).
2. Start the **Services snap-in** (navigate to Start → Run and type `services.msc`).
3. Locate the **Windows Management Instrumentation Service** in the list.
4. Right-click this service and select **Restart** from the popup menu.

![User-added image]./../0-images/ka04u000000HcMv_0EM700000004wr9.png)

