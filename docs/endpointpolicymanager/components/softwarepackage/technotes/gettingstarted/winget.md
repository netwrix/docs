---
title: "How to install WinGet on a server that you are using as a management station (unsupported)?"
description: "How to install WinGet on a server that you are using as a management station (unsupported)?"
sidebar_position: 10
---

# How to install WinGet on a server that you are using as a management station (unsupported)?

The Software Package Manager MMC snap-in requires that your management station has Winget installed
locally. Winget APIs are initiated from the management station to search for software packages
available in the Winget store.

Therefore, if your management station is Windows 10 or 11, Winget is built in and there's nothing to
do. Simply have the latest Netwrix Endpoint Policy Manager (formerly PolicyPak) MMC snap-in and
you're ready to go. You can verify this by opening any command prompt and typing Winget.  If Winget
returns with its help text, you're ready to go.

![820_1_image-20230824192325-1_950x534](/images/endpointpolicymanager/softwarepackage/820_1_image-20230824192325-1_950x534.webp)

However, Winget is not present on Windows Servers, which you may be using as your Group Policy
Object creation / management station. As such you might wish to install Winget on a server to then
create Endpoint Policy Manager Software Package Manager Winget policies.

:::note
We are not encouraging this nor is it supported, but it should work.
:::


See
[Install Winget in Windows Server 2022 – No applicable app licenses error](https://www.virtualizationhowto.com/2021/11/install-winget-in-windows-server-2022-no-applicable-app-licenses-error/)
for a procedure (unsupported) that installs Winget on Server 2022.

There are also other Google-able techniques to get Winget working on servers.

However a faster (and equally unsupported) way to achieve the goal would be:

**Step 1 –** Install Chocolaty on your management station. You can find the up to date instructions
at [https://chocolatey.org/install](https://chocolatey.org/install). The one-line powershell
installs Chocolaty on your server.

**Step 2 –** Run the command  `choco install winget-cli`

![820_2_image-20230824192325-2_950x262](/images/endpointpolicymanager/softwarepackage/820_2_image-20230824192325-2_950x262.webp)

![820_3_image-20230824192325-3_950x265](/images/endpointpolicymanager/softwarepackage/820_3_image-20230824192325-3_950x265.webp)

![820_4_image-20230824192325-4_950x521](/images/endpointpolicymanager/softwarepackage/820_4_image-20230824192325-4_950x521.webp)


