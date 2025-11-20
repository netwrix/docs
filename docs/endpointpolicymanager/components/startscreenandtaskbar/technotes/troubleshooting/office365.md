---
title: "Why don't I see Office 2016, Office 2019, or Office 365 icons or tiles using Start Screen Manager?"
description: "Why don't I see Office 2016, Office 2019, or Office 365 icons or tiles using Start Screen Manager?"
sidebar_position: 150
---

# Why don't I see Office 2016, Office 2019, or Office 365 icons or tiles using Start Screen Manager?

If you attempt to deliver Microsoft Office tiles using Netwrix Endpoint Policy Manager (formerly
PolicyPak) Start Screen Manager, you might find blank tiles like what is experienced here.

On LTSC machines, you won't see any tiles at all, because there is no Microsoft Edge installed.

![910_1_image001_950x879](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/910_1_image001_950x879.webp)

When you click on a tile, you should see some indication of the issue like what's seen here.

![910_2_image002_950x308](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/910_2_image002_950x308.webp)

Upon inspection of one of the tiles, you might see the target application shown like this:

![910_3_image003_950x697](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/910_3_image003_950x697.webp)

However, the correct details should be entered as follows:

![910_4_image004_950x690](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/910_4_image004_950x690.webp)

To get this to work, you should use the Endpoint Policy Manager Start Screen Helper Tool on a
machine with the version of Office 2016, 2019, or Office 365 you want to add icons for.

Here's the video on this
tool:[Endpoint Policy Manager Start Screen and Taskbar Manager Helper Utility](/docs/endpointpolicymanager/components/startscreenandtaskbar/videos/gettingstarted/helperutility.md)/

Summary to get Office icons to appear on endpoints:

**Step 1 –** Get the apps installed on an endpoint.

**Step 2 –** Use the Helper tool.

**Step 3 –** Then create the icons from the export the helper tool made.


