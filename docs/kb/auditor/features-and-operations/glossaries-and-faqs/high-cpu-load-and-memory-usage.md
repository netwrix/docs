---
description: >-
  Provides steps to reduce CPU and memory usage caused by the Account Lockout
  Examiner service by modifying registry keys and restarting the service.
keywords:
  - Account Lockout Examiner
  - high CPU
  - memory usage
  - registry
  - Readlog
  - UseWatcher
  - LockoutStatusRefreshPeriod
  - Services.msc
  - regedit
  - Active Directory
products:
  - auditor
sidebar_label: High CPU load and memory usage
tags: []
title: "High CPU load and memory usage"
knowledge_article_id: kA00g000000H9TDCA0
---

# High CPU load and memory usage

Account Lockout Examiner Service causes high CPU spikes and uses up a large percent of memory. What can I do?

## Resolution

In order to reduce CPU load and memory usage, perform the following steps:

1. Open the **Registry Editor** (navigate to **Start** → **Run** and type `regedit`).
2. Navigate to `HKEY_LOCAL_MACHINESOFTWARE[Wow6432Node]NetWrixAccount Lockout Examiner` (Wow6432Node only for x64 OS)
3. Locate the `Readlog` key and set its value to `0`.
4. Create a new key called `UseWatcher`, set its type to `DWORD` and value to `1`.
5. Restart the **NetWrix Account Lockout Examiner** service via **Services.msc**.

If this does not help, set the `LockoutStatusRefreshPeriod` key value to `0`, but in this case the Account Lockout Examiner will not verify accounts status via Active Directory, so account lockouts will not be reported if a corresponding event is not found in the event log.

![User-added image]./../0-images/ka04u000000HcN0_0EM700000004wxW.png)

