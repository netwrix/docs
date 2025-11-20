---
title: "How to automatically kill explorer at 1st Logon to Bypass needing to logout and back in for Start Screen Manager to apply"
description: "How to automatically kill explorer at 1st Logon to Bypass needing to logout and back in for Start Screen Manager to apply"
sidebar_position: 70
---

# How to automatically kill explorer at 1st Logon to Bypass needing to logout and back in for Start Screen Manager to apply

This KB assumes that you already have a working Netwrix Endpoint Policy Manager (formerly PolicyPak)
Start Screen (PPSSM) policy that works normally after logging out and back in after the PPSSM policy
applies. The purpose of this KB is to provide a possible (and unsupported) workaround for PPSSM
customers who use Non-Persistent VDIs and whose users are unable to logout and back in due to the
nature of Non-Persistent VDIs who would still like to use PPSSM. The idea is that by killing the
explorer.exe process and restarting it at first logon is that we can mimic the logout and log back
in action so that the PPSSM policy will apply successfully.

**Step 1 –** Create a new Endpoint Policy Manager Scripts and Triggers policy on either the computer
side (in Switched mode) or on the user side.

**Step 2 –** Next set the apply action in the policy to run the following BATCH commands.

```
@echo off
IF EXIST C:\Users\%UserName%\AppData\app_init.txt GOTO END
date /t >> C:\Users\%UserName%\AppData\app_init.txt
time /t >> C:\Users\%UserName%\AppData\app_init.txt
taskkill /F /IM explorer.exe & start explorer
REM Put your code here, which will be executed once
:END
```

Your settings should look similar to the screenshot below:

![929_1_image-20221021235430-1](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/929_1_image-20221021235430-1.webp)

**Step 3 –** For the Revert action screen, click Next and do not set a revert action as Triggers do
not support Revert actions.

![929_2_image-20221021235430-2](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/929_2_image-20221021235430-2.webp)

**Step 4 –** For the Trigger type setting choose "Logon"

![929_3_image-20221021235430-3](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/929_3_image-20221021235430-3.webp)

**Step 5 –** Optional: Set the Triger settings wait period for 1 minute after login if desired. 
Note, you can also uncheck this setting here and then programmatically in your BATCH script set a
wait period for seconds if desired, (i.e., to wait 20 seconds before running the next command you
could use "SLEEP 20").

![929_4_image-20221021235430-4](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/929_4_image-20221021235430-4.webp)

**Step 6 –** Lastly, save and apply the policy, then test from an endpoint, the result will be that
Scripts and Triggers will look for the flag file at EVERY login… one minute after login (using the
settings from above). Then, if the flag file is ABSENT… Kill explorer and write the flag file.

:::note
You will see a very brief flash on the end-user computer for new logins.
:::


:::warning
This policy should be set to apply after the PPSSM policy.

:::


