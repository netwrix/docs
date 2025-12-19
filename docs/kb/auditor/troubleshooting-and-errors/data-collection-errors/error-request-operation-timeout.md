---
description: >-
  If you receive a "request timeout" error when launching or using Netwrix
  Account Lockout Examiner, follow these steps to change log collection, disable
  workstation invalid-logon searches, or limit monitoring to the PDC to resolve
  the issue.
keywords:
  - request timeout
  - timeout error
  - Account Lockout Examiner
  - Netwrix
  - registry
  - UseWatcher
  - PF_Enabled
  - PDC
  - invalid logon
products:
  - auditor
sidebar_label: 'Error: Request operation timeout'
tags: []
title: 'Error: Request operation timeout'
knowledge_article_id: kA00g000000H9bxCAC
---

# Error: Request operation timeout

You receive the "request timeout" error message when you launch the Netwrix Account Lockout Examiner console or some time after.

![User-added image]./../0-images/ka04u000000HcUi_0EM700000004xfn.png)

---

The issue occurs when the Account Lockout Examiner service is busy and is not able to respond to any requests. It might happen if Account Lockout Examiner is set to monitor all domain controllers and there are a lot of failed logon events to process tracked from every domain controller, or when domain controllers and workstations have a slow connection to the Account Lockout Examiner server (for example located in a remote office).

---

In order to resolve the issue perform the following steps on the Account Lockout Examiner machine:

1. Change the method of collecting logs:
   a. Run Registry Editor (`Start - Run - regedit`)  
   b. Navigate to `HKLMSoftware[Wow6432Node]NetWrixAccount Lockout Examiner (Wow6432Node only for x64 OS)`  
   c. Set `readlog` to `0`  
   d. Create a DWORD called `UseWatcher` with the value of `1`  
   e. Set `invLogonKeepTime` to `10 decimal`  
   f. Set `invLogonCleaningPeriod` to `10 decimal`  
   g. Restart the NetWrix Account Lockout Examiner service

   ![User-added image]./../0-images/ka04u000000HcUi_0EM700000004xfx.png)

2. If the above does not help, disable searching of invalid logons on workstations. This will reduce the service load.
   a. Run Registry Editor (`Start - Run - regedit`)  
   b. Navigate to `HKLMSoftware[Wow6432Node]NetWrixAccount Lockout Examiner (Wow6432Node only for x64 OS)`  
   c. Create a DWORD called `PF_Enabled` with the value of `0`  
   d. Restart the NetWrix Account Lockout Examiner service

   ![User-added image]./../0-images/ka04u000000HcUi_0EM700000004xg2.png)

3. If all of the registry settings did not address the issue set Account Lockout Examiner to monitor the PDC only:
   a. In Netwrix Account Lockout Examiner navigate to **File > Settings > Managed Objects**.  
   b. Select your domain and click **Edit**.  
   c. Select the **Only PDC emulator** radio button and click **OK** to save the changes.

   ![User-added image]./../0-images/ka04u000000HcUi_0EM700000004xg7.png)

