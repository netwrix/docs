---
title: "How to create a shortcut under the Public Desktop using Endpoint Policy Scripts Manager"
description: "How to create a shortcut under the Public Desktop using Endpoint Policy Scripts Manager"
sidebar_position: 40
---

# How to create a shortcut under the Public Desktop using Endpoint Policy Scripts Manager

The steps below are performed using WinZip as an example.

**Step 1 –** Create a new GPO and link it to the OU where the computers live that will need to have
the shortcut added.

**Step 2 –** Edit the GPO.

**Step 3 –**  Select "Computer Configuration > Netwrix Endpoint Policy Manager (formerly
PolicyPak) > Scripts Manager".

**Step 4 –** Click the "ADD NEW POLICY" button, then click "Next".

**Step 5 –** At the "Specify policy target" screen be sure to select the 2nd radio button that
states "Apply this policy to all users who log on to the computer (switched mode) then click "Next".

![579_1_image-20190918135807-1](/images/endpointpolicymanager/scriptstriggers/579_1_image-20190918135807-1.webp)

**Step 6 –** At the "On apply action" screen select "PowerShell script" from the dropdown.

**Step 7 –** In the main text window, paste in the script below and then click "Next".

```
#Script starts here
#create WinZip shortcut on Public Desktop
$TargetFile="C:\Program Files (x86)\WinZip\WINZIP32.EXE"
$ShortcutFile="$env:Public\Desktop\WinZip.lnk"
$WScriptShell=New-Object-ComObjectWScript.Shell
$Shortcut=$WScriptShell.CreateShortcut($ShortcutFile)
$Shortcut.TargetPath =$TargetFile
$Shortcut.Save()
 #Script ends here
```

**Step 8 –** Before clicking "Next" make sure that the "Run script as user" option is unchecked.

![579_2_image-20190918135807-2](/images/endpointpolicymanager/scriptstriggers/579_2_image-20190918135807-2.webp)

**Step 9 –** Then click "Next" again on the "On revert action" screen.

**Step 10 –** Select the "Once or when forced" option at the "Specify process mode" screen, then
click "Next" again.

**Step 11 –** Give the policy a descriptive name (i.e. Create WinZip Shortcut on Public Desktop),
then click "Finish.

Lastly, log into a computer that lives in the OU where this GPO is applied and within seconds of
logging in you should see the WinZip shortcut get created on the desktop. If needed you can run
`GPUPDATE /FORCE` from a CMD prompt to speed up the process, or for testing.

:::note
When installing WinZip from MSI, WinZip will remove any desktop icons by default, for this
shortcut policy to work properly you should have it apply after WinZip is already installed, or
upgraded. Alternatively, you can change the "Policy process mode configuration" to run "Always"
instead of "Once or when forced" to always create the shortcut at login or when `GPUPDATE` runs.

:::


