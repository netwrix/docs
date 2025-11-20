---
title: "How to Create a Local Scheduled Task to Reboot a PC every day at 9 AM"
description: "How to Create a Local Scheduled Task to Reboot a PC every day at 9 AM"
sidebar_position: 190
---

# How to Create a Local Scheduled Task to Reboot a PC every day at 9 AM

**Step 1 –** Create a Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts policy on the
computer side.

![879_1_image-20220916231626-1](/images/endpointpolicymanager/scriptstriggers/879_1_image-20220916231626-1.webp)

**Step 2 –** When creating the Policy choose the option to Apply this policy to computer (default).

![879_2_image-20220916231626-2](/images/endpointpolicymanager/scriptstriggers/879_2_image-20220916231626-2.webp)

**Step 3 –** Choose PowerShell from the dropdown.

![879_3_image-20220916231626-3](/images/endpointpolicymanager/scriptstriggers/879_3_image-20220916231626-3.webp)

**Step 4 –** Then paste in the following script to the text field.

```
# Create task action
$taskAction = New-ScheduledTaskAction -Execute 'powershell.exe' -Argument 'Restart-Computer -Force'
# Create a trigger (Daily at 9 AM)
$taskTrigger = New-ScheduledTaskTrigger -Daily -At 9am
# The user to run the task
$taskUser = New-ScheduledTaskPrincipal -UserID "NT AUTHORITY\SYSTEM" -LogonType ServiceAccount -RunLevel Highest
$settings = New-ScheduledTaskSettingsSet -MultipleInstances Parallel
# The name of the scheduled task.
$taskName = "Daily 9AM Reboot"
# Describe the scheduled task.
$description = "Forcibly reboot the computer at 9 AM Daily"
# Register the scheduled task
Register-ScheduledTask -TaskName $taskName -Action $taskAction -Trigger $taskTrigger -Settings $settings -Principal $taskUser -Description $description
```

Your policy should look similar to the one below:

![879_4_image-20220916231626-4_950x517](/images/endpointpolicymanager/scriptstriggers/879_4_image-20220916231626-4_950x517.webp)

**Step 5 –** Skip the on revert action screen by clicking next.

![879_5_image-20220916231626-5](/images/endpointpolicymanager/scriptstriggers/879_5_image-20220916231626-5.webp)

**Step 6 –** At the Specify process mode screen choose "Once or when forced" and then click next to
continue.

![879_6_image-20220916231626-6](/images/endpointpolicymanager/scriptstriggers/879_6_image-20220916231626-6.webp)

**Step 7 –** You're done, lastly, test your policy to ensure it runs as expected.

:::note
This policy will create a local scheduled task that will reboot the PC daily at 9 AM even
if no one is logged into the PC.

:::


