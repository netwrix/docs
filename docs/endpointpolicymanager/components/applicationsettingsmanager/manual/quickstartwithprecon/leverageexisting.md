---
title: "Leveraging an Existing Preconfigured AppSet"
description: "Leveraging an Existing Preconfigured AppSet"
sidebar_position: 10
---

# Leveraging an Existing Preconfigured AppSet

For this first Quickstart test and example, we urge you to use the preconfigured Endpoint Policy
Manager DLL named `pp-WinZip.DLL`, which is supplied in the download from the Endpoint Policy
Manager Customer Portal.

**Step 1 –** In order to locate the `pp-WinZip.DLL`, pull up the directory named Production-PAKS.
Inside, you will find the WinZip International LLC WinZip 14 to 17 folder. You should see a file
named `Winzip 14 to 17.XML` and` pp-WinZip 14 to 17.dll`.

`Winzip 14 to 17.XML` is the source file and can be opened and manipulated within the Endpoint
Policy Manager DesignStudio. You won't be using this file right now.

The compiled file is` pp-WinZip 14 to 17.dll`, and it can be utilized within the Group Policy Editor
using the GPMC.

The compiled DLL needs to be placed onto your Group Policy management machine—the one you use to
manage Group Policy with the GPMC.

**Step 2 –** To get started immediately, all you need to do is copy the` pp-WinZip 14 to 17.dll`
file to the `C:\Program` Files `(x86)\PolicyPak\Extensions` folder (on 64-bit machines) or
`C:\Program Files\PolicyPak\Extensions (on 32-bit machines)`. You can see how this is done in
The figure shown.

![policypak_application_settings](/images/endpointpolicymanager/applicationsettings/preconfigured/quickstart/endpointpolicymanager_application_settings.webp)

The figure shown. Copying the `DLL` file to the C: drive.

:::note
If you don't see the `PolicyPak\Extensions` folder, you may not have installed the
Endpoint Policy Manager Admin Console.MSI (32-bit or 64-bit). This must be done on the machine where
you manage Group Policy, and you must have the GPMC installed.

:::



