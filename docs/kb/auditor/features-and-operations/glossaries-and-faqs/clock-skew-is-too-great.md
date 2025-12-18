---
description: >-
  Failed Kerberos logons reported as 'Clock skew is too great' occur when a
  workstation's clock differs from the domain controller by five or more
  minutes. This article explains how to verify and resynchronize time on the
  workstation and domain controller.
keywords:
  - clock skew
  - Kerberos
  - time sync
  - w32tm
  - domain controller
  - time zone
  - failed logon
  - Netwrix Auditor
products:
  - auditor
sidebar_label: Clock Skew Is Too Great
tags: []
title: "Clock Skew Is Too Great"
knowledge_article_id: kA0Qk0000000LdxKAE
---

# Clock Skew Is Too Great

## Symptom

Failed logons are reported in Netwrix Auditor with the following **Cause** specified:

```
Clock skew is too great:
The workstation's clock too far out of sync with the DC's
```

## Cause

The reported workstation and the DC processing the Kerberos request have a time difference of 5 of more minutes.

## Resolution

In both the DC and affected workstation, perform the following steps in elevated Command Prompt:

1. Run the following line to get the current system time:

   ```bat
   time /T
   ```

2. Run the following line to establish the time zone set up:

   ```bat
   systeminfo | findstr /C:"Time Zone"
   ```

3. Run the following line to confirm the source for the machine:

   ```bat
   w32tm /query /status
   ```

4. Run the following line to force sync the time:

   ```bat
   w32tm /resync
   ```

5. **Optional:** Run the following line again to verify the time was synced:

   ```bat
   time /T
   ```

> **IMPORTANT:** You may encounter the following error when attempting to sync your server to the domain controller time:
> 
> ```
> Sending resync command to local computer
> The computer did not resync because no time data was available.
> ```
> 
> Verify the time source specified in the output of the `w32tm /query /status` line. In case the **Source** line states either **Local CMOS Clock** or **Free-running System Clock**, enable time synchronization with your DC. Run the following lines in elevated Command Prompt:
> 
> ```bat
> w32tm /config /syncfromflags:domhier /update
> 
> net stop w32time && net start w32time
> ```
