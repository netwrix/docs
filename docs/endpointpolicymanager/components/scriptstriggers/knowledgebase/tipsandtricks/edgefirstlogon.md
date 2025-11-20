---
title: "How to Run Microsoft Edge Once at a User's 1st Logon using Scripts and Triggers Manager"
description: "How to Run Microsoft Edge Once at a User's 1st Logon using Scripts and Triggers Manager"
sidebar_position: 180
---

# How to Run Microsoft Edge Once at a User's 1st Logon using Scripts and Triggers Manager

**Step 1 –** Create a new Scripts and Triggers Policy on the Computer side that runs in Switched
Mode or on the User side.

**Step 2 –** Use the script below and be sure to check the option to run the script interactively
and as the user.

![868_1_image-20220225024809-1_950x457](/images/endpointpolicymanager/scriptstriggers/868_1_image-20220225024809-1_950x457.webp)

```
$path = "$env:LOCALAPPDATA\temp\1stlogon.flg"
$logfile = "$env:LOCALAPPDATA\temp\1stlogon.log"
# TIMESTAMP FUNCTION: Usage: Write-Output "$(Get-TimeStamp) Text goes here" | Out-file C:\log.txt -append
function Get-TimeStamp {
  return "[{0:MM/dd/yyyy} {0:HH:mm:ss}]" -f (Get-Date)
}
if(!(Test-Path -Path $path))
{
    New-Item -Path "$env:LOCALAPPDATA\temp\1stlogon.flg"
    Write-Output "$(Get-TimeStamp) Going to run Edge since this is the 1st logon."| Out-file $logfile -append
    start msedge
}
else
{
 Write-Output "$(Get-TimeStamp) Script has been already applied. Skipping." | Out-file $logfile -append
}
```

**Step 3 –** At the "Specify process mode" screen select "On trigger" and choose "Logon" from the
drop-down, then click "Next".

![868_2_image-20220225024809-2](/images/endpointpolicymanager/scriptstriggers/868_2_image-20220225024809-2.webp)

**Step 4 –** At the Trigger settings" screen set a delay if desired otherwise click "Next" the skip
this option.

**Step 5 –** At the "Policy settings" screen give the policy a descriptive name then click "Finish".

**Step 6 –** Lastly, apply the policy, and test with a new user logon, if all goes well you will see
the screen below after a successful 1st logon.

![868_3_image-20220225024809-3_900x490](/images/endpointpolicymanager/scriptstriggers/868_3_image-20220225024809-3_900x490.webp)


