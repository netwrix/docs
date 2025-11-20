---
title: "Windows default applications are not showing in Start Menu"
description: "Windows default applications are not showing in Start Menu"
sidebar_position: 90
---

# Windows default applications are not showing in Start Menu

Some Windows default applications are not showing in Start Menu when setting it via Netwrix Endpoint
Policy Manager (formerly PolicyPak) Start Screens Manager GPO.

The problem we observe is with the following two Windows Applications:

- QuickAssist.exe
- Psr.exe

Your start menu has missing icons of the above programs, as shown in the following screenshot.

![678_1_image-20191219082753-5](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/678_1_image-20191219082753-5.webp)

The icons should come back after you apply the following workaround.

Workaround for One/few computers:

- Manually remove the folders from the following location:

`%appdata%\Microsoft\Windows\Start Menu\PolicyPak Start Screen Manager\`

Workaround for many computers using GPPref Item:

- Use Group Policy Preferences Item to remove those folders from the location.

![678_2_image-20191219082753-6](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/678_2_image-20191219082753-6.webp)


