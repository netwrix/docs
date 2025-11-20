---
title: "AppX Policies and Settings"
description: "AppX Policies and Settings"
sidebar_position: 10
---

# AppX Policies and Settings

In the example below, we're going to deliver a AppX (Microsoft Store app) to a selection of users.
The shortcut will appear when the policy applies, and it will disappear when the policy no longer
applies (i.e., when it falls out of scope).

**Step 1 –** Start out on your GPMC management station to create a group policy object (GPO) and
link it to your users. In this example, we have a GPO created and linked it to the East Sales Users
organizational unit (OU).

**Step 2 –** Next, within the GPO Editor, go to User Configuration > Endpoint Policy Manager > App
Delivery & Patching Pak > Software Package Manager. Right-click on New Windows Store (AppX) Policy.

![appx_policies_and_settings](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings.webp)

**Step 3 –** Next, you will need to choose if you want to install a package or remove a package.
These options will be explained further in the "AppX: Install Package" and "AppX: Remove Package"
sections.

![appx_policies_and_settings_1](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_1.webp)

Get-AppxPackage | Where-Object -Property 'Publisher' -NE -Value 'CN=Microsoft Windows, O=Microsoft
Corporation, L=Redmond, S=Washington, C=US' | Where-Object -Property 'Publisher' -NE -Value
'CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US' | Where-Object
-Property 'Publisher' -NE -Value 'CN=PolicyPak Software, Inc.,O=PolicyPak Software,
Inc.,L=Media,S=Pennsylvania,C=US' | Format-Table -Property Name, Publisher -AutoSize


