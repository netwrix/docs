---
title: "Remove Package"
description: "Remove Package"
sidebar_position: 30
---

# Remove Package

It should be noted that there is a distinction between the applications within Windows that are
built-in, and those that come from the Microsoft Store. Built-in applications cannot be removed with
Endpoint Policy Manager. These could include Company Portal, Cortana, Mail, Clock, Weather, and
others. You can use the Endpoint Policy Manager Software Package Manager Helper Tool (see next
section) to determine which items can be removed. In this example, we will remove the Windows Store
Skype app, which is typically pre-installed in all versions of Windows 10. The fastest way to do
this would be to use the **Remove Package** function, then select **Name** and type in \*skype\*
which will match on anything with the word Skype in the name.

![appx_policies_and_settings_8](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_8.webp)

Then on the endpoint run GPUpdate to acquire the policy change. You should see Skype go from present
to removed.

![appx_policies_and_settings_9](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_9.webp)

![appx_policies_and_settings_10](/images/endpointpolicymanager/softwarepackage/appx/appx_policies_and_settings_10.webp)

Get-AppxPackage | Where-Object -Property 'Publisher' -NE -Value 'CN=Microsoft Windows, O=Microsoft
Corporation, L=Redmond, S=Washington, C=US' | Where-Object -Property 'Publisher' -NE -Value
'CN=Microsoft Corporation, O=Microsoft Corporation, L=Redmond, S=Washington, C=US' | Where-Object
-Property 'Publisher' -NE -Value 'CN=PolicyPak Software, Inc.,O=PolicyPak Software,
Inc.,L=Media,S=Pennsylvania,C=US' | Format-Table -Property Name, Publisher -AutoSize


