---
title: "How to Disable the \"How do you want to open this? Keep using this app\" Notification in Windows 10"
description: "How to Disable the \"How do you want to open this? Keep using this app\" Notification in Windows 10"
sidebar_position: 120
---

# How to Disable the "How do you want to open this? Keep using this app" Notification in Windows 10

When you install a new app in Windows 10 you may see a notification letting you know that you have a
new app that can open an application that already has a default file association defined. Below are
some examples of how the notifications appear and also two ways to disable these "New App Installed"
notifications.

Notification Examples:

![76_1_image-20200728223133-1](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/76_1_image-20200728223133-1.webp)

![76_3_image-20200728223133-2](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/76_3_image-20200728223133-2.webp)

![76_5_image-20200728223134-3](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/76_5_image-20200728223134-3.webp)

## OPTION1: Using Group Policy Preferences > Registry

**Step 1 –** Create a new GPO for Group Policy Preferences and give it a descriptive name.

**Step 2 –** Select Computer Configuration > Preferences > Windows Settings > Registry

**Step 3 –** Right-click on Registry and choose New > Registry Item

**Step 4 –** Create the Registry policy item using the values below as a guide.

Hive: HKEY_LOCAL_MACHINE
Key Path: SOFTWARE\Policies\Microsoft\Windows\Explorer
Value name: NoNewAppAlert
Value type: REG_DWORD
Value data: 00000001

![76_7_image-20200728223134-4](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/76_7_image-20200728223134-4.webp)

Policy should look like below when created:

![76_9_image-20200728223134-5_950x59](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/76_9_image-20200728223134-5_950x59.webp)

**Step 5 –** Lastly, apply policy to computer OU or domain where you want New App notifications to
be disabled.

## OPTION2: Using Endpoint Policy Scripts Manager

**Step 1 –** Create a new GPO for Netwrix Endpoint Policy Manager (formerly PolicyPak) Scripts
Manager and give it a descriptive name.

**Step 2 –** Select Computer Configuration > PolicyPak > Scripts Manager

**Step 3 –** Right-click on Scripts Manager and select "Add Policy…"

![76_11_image-20200728223134-6](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/76_11_image-20200728223134-6.webp)

**Step 4 –** At the "Specify policy target" screen stick with the default "Apply this policy to the
computer (default)" then click "Next".

![76_13_image-20200728223134-7](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/76_13_image-20200728223134-7.webp)

**Step 5 –** At the "On apply action" screen select "PowerShell script" from the dropdown and then
copy in the text below then click "Next".

```
# Disable New app Alerts    if((Test-Path -LiteralPath
                        "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer") -ne $true)
                        { New-Item "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer"
                        -force -ea SilentlyContinue };    New-ItemProperty -LiteralPath
                        'HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer'
                        -Name 'NoNewAppAlert' -Value 1 -PropertyType DWord -Force
                -ea SilentlyContinue;
```

![76_15_image-20200728223134-8](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/76_15_image-20200728223134-8.webp)

**Step 6 –** OPTIONAL: At the "On revert action" screen select "PowerShell script" from the dropdown
and then copy in the text below then click "Next".

```
#Enable new app alerts    if((Test-Path -LiteralPath "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer") -ne $true) 
{ New-Item "HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer" -force -ea SilentlyContinue }
;    New-ItemProperty -LiteralPath 'HKLM:\SOFTWARE\Policies\Microsoft\Windows\Explorer'
                        -Name 'NoNewAppAlert' -Value 0 -PropertyType DWord -Force -ea
                SilentlyContinue;
```

![76_17_image-20200728223134-9](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/76_17_image-20200728223134-9.webp)

**Step 7 –** At the "Specify process mode" screen select the "Once or when forced" option then click
next.

![76_19_image-20200728223134-10](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/76_19_image-20200728223134-10.webp)

**Step 8 –** Give the policy a descriptive name and then click finish.

**Step 9 –** Lastly, apply policy to computer OU or domain where you want New App notifications to
be disabled.


