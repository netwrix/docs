---
title: "Install Package"
description: "Install Package"
sidebar_position: 20
---

# Install Package

To install an AppX package from the Microsoft Store, you need to know the store link. In this
example, we will install WinZip Microsoft Store Edition, but you're welcome to use anything you like
from the Windows 10 Microsoft Store instead. To get the store link you need to first go to an
example machine and open the Windows 10 Microsoft Store to look for the application.

![appx_policies_and_settings_4](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_4.webp)

Select the application, and find the Share section. Then click on **Copy link**

![appx_policies_and_settings_5](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_5.webp)

When you paste the link into the Netwrix Endpoint Policy Manager (formerly PolicyPak) Software
Package Manager AppX policy to install an application, the link will be verified before allowing you
to continue. You can then also verify that the App Store ID, name, and publisher all look correct.

![appx_policies_and_settings_6](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_6.webp)

On the client machine, login as a user who would get the GPO and run GPUpdate. While the AppX
packages that are queued might not be available for immediate download, very often they download
nearly instantly.

![appx_policies_and_settings_7](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_7.webp)

You can now run your newly deployed Microsoft Store application.

Get-AppxPackage | Where-Object -Property 'Publisher' -NE -Value 'CN=Microsoft Windows, O=Microsoft
Corporation, L=Redmond, S=Washington, C=US' | Where-Object -Property 'Publisher' -NE -Value
'CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US' | Where-Object
-Property 'Publisher' -NE -Value 'CN=PolicyPak Software, Inc.,O=PolicyPak Software,
Inc.,L=Media,S=Pennsylvania,C=US' | Format-Table -Property Name, Publisher -AutoSize


