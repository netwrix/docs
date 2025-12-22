---
title: "Helper Tool"
description: "Helper Tool"
sidebar_position: 40
---

# Helper Tool

It is not possible to remove built-in AppX applications within Windows 10 with Endpoint Policy
Manager, and it can be quite difficult to know which applications are built-in, versus which ones
were added from the Microsoft Store. For this reason, you can use our Software Package Manager
Helper tool to determine which packages on a machine could be removed by Endpoint Policy Manager
Software Package Manager (AppX) policies. The tool is found in the Endpoint Policy Manager Extras
folder within the download.

![appx_policies_and_settings_11](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_11.webp)

When you run the Helper tool, you can see all available packages for removal and the publisher
names.

![appx_policies_and_settings_12](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_12.webp)

:::note
You can generate this same list via PowerShell by using the following command.:
:::


Get-AppxPackage | Where-Object -Property 'Publisher' -NE -Value 'CN=Microsoft Windows, O=Microsoft
Corporation, L=Redmond, S=Washington, C=US' | Where-Object -Property 'Publisher' -NE -Value
'CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US' | Where-Object
-Property 'Publisher' -NE -Value 'CN=PolicyPak Software, Inc.,O=PolicyPak Software,
Inc.,L=Media,S=Pennsylvania,C=US' | Format-Table -Property Name, Publisher -AutoSize

You can see the list in PowerShell is the same as the list from the Helper tool, as shown below.

![appx_policies_and_settings_13](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_13.webp)

You can right-click on the Publisher ID and copy it to the clipboard. Then, you can paste the value
into the publisher field after selecting **Remove Package**.

![appx_policies_and_settings_14](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_14.webp)

The Helper tool also enables you to export one or more applications' details to XML. Once you've
done this, you can then use the Import button in the Remove Package Policy Mode.

![appx_policies_and_settings_15](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_15.webp)

Next, select an application from the list to be populated into the policy.

![appx_policies_and_settings_16](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_16.webp)


