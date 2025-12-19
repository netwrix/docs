---
description: >-
  After you install Account Lockout Examiner (ALE), monitored domain controllers
  may show CPU spikes caused by WMI queries. This article describes two
  registry-based options to reduce CPU usage by changing how ALE communicates
  with domain controllers.
keywords:
  - Account Lockout Examiner
  - ALE
  - CPU spikes
  - domain controllers
  - WMI
  - UseWatcher
  - UseWMI
  - registry
  - Services.msc
products:
  - auditor
sidebar_label: High CPU usage on domain controllers
tags: []
title: "High CPU usage on domain controllers"
knowledge_article_id: kA00g000000H9bjCAC
---

# High CPU usage on domain controllers

After you install Account Lockout Examiner (ALE) you may see CPU spikes on monitored domain controllers. If you stop ALE, these spikes go away.

ALE tracks for lockout events and failed logon events from the Windows security event log of domain controllers. By default it uses WMI calls that may result in high CPU usage of domain controllers.

There are two options to fix the issue:

1. Switch the method of communication with domain controllers. In this case ALE will stop querying domain controllers for new events in the log, but domain controllers will notify about new events themselves (WMI feature). This will reduce the number of WMI calls and, as a result, reduce CPU usage.

   In order to do this perform the following on the machine where ALE is installed:

   1. Run **Registry Editor** (`regedit`),
   2. Go to `HKLM\Software\[Wow6432Node]\NetWrixAccount Lockout Examiner` (Wow6432Node only for x64 OS)
   3. Create a DWORD called `UseWatcher` with value `1`
   4. Restart the **Netwrix Account Lockout Examiner service** via **Services.msc**

   ![User-added image]./../0-images/ka04u000000HcUT_0EM7000000052iw.png)

2. If the above does not help, disable usage of WMI to communicate with domain controllers. (A .Net-based mechanism will be used for it.)

   In order to do this perform the following on the machine where ALE is installed:

   1. Run **Registry Editor** (`regedit`),
   2. Go to `HKLM\Software\[Wow6432Node]\NetWrixAccount Lockout Examiner` (Wow6432Node only for x64 OS)
   3. Change the `UseWMI` value to `0`
   4. Restart the **Netwrix Account Lockout Examiner service** via **Services.msc**

   ![User-added image]./../0-images/ka04u000000HcUT_0EM7000000052jG.png)

