---
sidebar_position: 3897
title: Windows default applications are not showing in Start Menu
---

# Windows default applications are not showing in Start Menu

Some Windows default applications are not showing in Start Menu when setting it via Netwrix Endpoint Policy Manager (formerly PolicyPak) Start Screens Manager GPO.

The problem we observe is with the following two Windows Applications:

* QuickAssist.exe
* Psr.exe

Your start menu has missing icons of the above programs, as shown in the following screenshot.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/StartScreenTaskBar/678_1_image-20191219082753-5.png)

The icons should come back after you apply the following workaround.

Workaround for One/few computers:

* Manually remove the folders from the following location:

`%appdata%\Microsoft\Windows\Start Menu\PolicyPak Start Screen Manager\`

Workaround for many computers using GPPref Item:

* Use Group Policy Preferences Item to remove those folders from the location.

![](../../../../../../static/images/PolicyPak/Content/Resources/Images/Troubleshooting/StartScreenTaskBar/678_2_image-20191219082753-6.png)