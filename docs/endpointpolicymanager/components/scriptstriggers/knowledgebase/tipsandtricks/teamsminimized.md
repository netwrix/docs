---
title: "How to run Microsoft Teams minimized to systray using PPScripts and PPAM"
description: "How to run Microsoft Teams minimized to systray using PPScripts and PPAM"
sidebar_position: 110
---

# How to run Microsoft Teams minimized to systray using PPScripts and PPAM

Prerequisites:

- MS Teams needs to have been installed using the Teams Machine-Wide Installer option:
  `msiexec /i Teams_windows_x64.msi OPTIONS="ALLUSERS=1"`
- User needs to have logged in completely at least once to MS Teams, (the status icon will be
  visible).

  ![364_1_image-20210414013029-6](/images/endpointpolicymanager/scriptstriggers/364_1_image-20210414013029-6.webp)

**Step 1 –** Create a new Application Settings Manager policy for MS Teams on either the Computer or
User side, depending on whether the GPO applies to computer or user objects. If the GPO applies to
the OU containing only computer objects, then create the policy on the computer side, if the GPO
applies to the OU containing only User objects, then create the policy on the user side, etc.

**Step 2 –** Enable the three settings (see image below) in the Microsoft Teams policy, then click
Ok to save the settings.

:::note
Only the underlined settings are being reapplied when the policy processes, the other
options are not being changed.
:::


![364_2_image-20210414013029-7](/images/endpointpolicymanager/scriptstriggers/364_2_image-20210414013029-7.webp)

**Step 3 –** Next, create a new Scripts & Triggers policy within the same GPO, under the same
configuration side, user or computer that you used in Step 1.

:::note
If applying the policy on the computer side choose switched mode like in the screenshot
below.
:::


![364_3_image-20210414013029-8](/images/endpointpolicymanager/scriptstriggers/579_1_image-20190918135807-1.webp)

**Step 4 –** At the "On apply action" screen select "PowerShell script" from the dropdown, then in
the main text window, paste in the script below, check the two options "Run script as user" and "Run
interactively", then click "Next".

```
# Hides the blue PowerShell window UI when running PS scripts interactively
Add-Type -Name Window -Namespace Console -MemberDefinition '
[DllImport("Kernel32.dll")]
public static extern IntPtr GetConsoleWindow();
[DllImport("user32.dll")]
public static extern bool ShowWindow(IntPtr hWnd, Int32 nCmdShow);
'
[Console.Window]::ShowWindow([Console.Window]::GetConsoleWindow(), 0)
# Segment of Script below is from https://www.alkanesolutions.co.uk/2021/01/16/launch-microsoft-teams-minimised-in-the-system-tray/
Try
 {
 #Terminate Teams if it is running
 $teamsProcess = Get-Process Teams -ErrorAction SilentlyContinue
If ($teamsProcess)
     {
     #Close Teams Window
       $teamsProcess.CloseMainWindow() | Out-Null
     Start-Sleep -s 5
     #Close Teams 
     Stop-Process -Name "Teams" -Force -ErrorAction SilentlyContinue
     }
#Define Teams Update.exe paths      
$userTeams = [System.IO.Path]::Combine("$env:LOCALAPPDATA", "Microsoft", "Teams", "current", "Teams.exe")
$machineTeamsX86 = [System.IO.Path]::Combine("$env:PROGRAMFILES (X86)", "Microsoft", "Teams", "current", "Teams.exe")
$machineTeamsX64 = [System.IO.Path]::Combine("$env:PROGRAMFILES", "Microsoft", "Teams", "current", "Teams.exe")     
#Define arguments
$args = @("-process-start-args","""--system-initiated""")
#Launch Teams
if (Test-Path -Path $userTeams)
 {Start-Process -FilePath $userTeams -ArgumentList $args}
Elseif (Test-Path -Path $machineTeamsX86)
 {Start-Process -FilePath $machineTeamsX86 -ArgumentList $args}
Elseif (Test-Path -Path $machineTeamsX64)
 {Start-Process -FilePath $machineTeamsX64 -ArgumentList $args}
} catch {
        #do something
        #$_.Exception
}

```

![364_4_image-20210414013029-9](/images/endpointpolicymanager/scriptstriggers/364_4_image-20210414013029-9.webp)

**Step 5 –** Click "Next" at the "On revert action" screen to skip that screen, then at the "specify
process mode" screen choose the "On trigger" option, then choose "Logon" from the drop down before
clicking "Next" to continue.

![364_5_image-20210414013029-10_724x538](/images/endpointpolicymanager/scriptstriggers/364_5_image-20210414013029-10_724x538.webp)

**Step 6 –** At the "Policy settings" screen give the policy a descriptive name then click "Finish."

**Step 7 –** Lastly, test the policy by logging into a computer as a user that should receive the
policy.  If everything works Teams should open minimized and you should see the MS Teams icon in the
systray.

:::note
Users may initially see two MS Teams icons for a few seconds in the Systray at the same
time, however, one of the icons will disappear shortly. Also, if this is the first time logging in
since the policy was applied it may take a 2nd login for the policy to kick in.

:::


