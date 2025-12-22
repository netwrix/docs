---
description: >-
  Describes how to reduce high memory usage in Account Lockout Examiner after
  applying the readlog registry key by tuning registry settings and restarting
  the service.
keywords:
  - account lockout
  - memory usage
  - registry
  - LockoutStatusRefreshPeriod
  - InvLogonCleaningPeriod
  - PF_Enabled
  - readlog
  - Netwrix
  - Account Lockout Examiner
products:
  - auditor
sidebar_label: High memory usage even after the 'readlog' registr
tags: []
title: High memory usage even after the 'readlog' registry key is set to 0
knowledge_article_id: kA00g000000PbdbCAC
---

# High memory usage even after the 'readlog' registry key is set to 0

Registry changes have been applied per [KB600](https://kb.netwrix.com/600) but the memory usage is still very high.

---

Account Lockout Examiner tracks events from the security log and then processes them to get information, such as account name, workstation name, ip address, etc.

These types of issues are related to very high activity in the environment - number of events to track is more than the Account Lockout Examiner service can handle and a queue builds up in memory.

In most cases such activity is related to having several accounts (one or two "problem" accounts) that generate too many invalid logons per second.

---

## Resolution

First, try to perform additional tuning of the product via the registry. On the Account Lockout Examiner host machine:

1. Run Registry Editor (`regedit`)
2. Go to `HKEY_LOCAL_MACHINESOFTWARE[Wow6432Node]NetWrixAccount Lockout Examiner` (Wow6432Node only for x64 OS)
3. Make sure `LockoutStatusRefreshPeriod` is `0`.
4. Set `InvLogonCleaningPeriod` value to `10` or lower (decimal)
5. Set `invLogonKeepTime` value to `10` or lower (decimal)
6. *Create DWORD called `PF_Enabled` and set its value to `0` (do this if you are not interested in name of the process causing invalid logons)*
7. Restart the NetWrix Account Lockout Examiner service via **Services.msc**

