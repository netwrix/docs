---
title: "Why am I seeing an Endpoint Policy Manager \"advertisement\" tile on my Start Screen (when I only use the TaskBar manager and NOT the Start Screen Manager?)"
description: "Why am I seeing an Endpoint Policy Manager \"advertisement\" tile on my Start Screen (when I only use the TaskBar manager and NOT the Start Screen Manager?)"
sidebar_position: 80
---

# Why am I seeing an Endpoint Policy Manager "advertisement" tile on my Start Screen (when I only use the TaskBar manager and NOT the Start Screen Manager?)

You might have noticed when you try to deliver NOTHING (aka. a blank start screen with or without
using the Taskbar Manager), you will still see a Netwrix Endpoint Policy Manager (formerly
PolicyPak) advertisement tile even you didn't put it there.

![692_1_img-1](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/692_1_img-1.webp)

The Taskbar Manager and Start Screen Manager are actually interlinked, even if you’re only using one
of them.

The advertisement tile is required.

You have to deliver at least ONE thing to the Start Menu, or you’ll get what you see in the previous
screenshot.

This is working as designed; this is a limitation in the “physics” that Microsoft gives us to use to
manage the Start Screen and Taskbar.

## First Workaround

Use the PolicyPak Start Screen PARTIAL/MERGE function which will let you add one single tile.

Here is an example of us setting a URL to a home page in a group called **Company Apps**.

![692_2_img-2_950x669](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/692_2_img-2_950x669.webp)

Alternatively, use the FULL/REPLACE mode to deliver a single tile of your choosing, your users will
still have no ability to change the Start Screen, and the Endpoint Policy Manager tile will go away.

Note that the Advertisement group is still present on the LEFT side.

![692_3_img-3](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/692_3_img-3.webp)

The name of this group is changeable using Endpoint Policy Manager TaskBar manager as seen here.

![692_4_img-4](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/692_4_img-4.webp)

## Second Workaround

:::note
Use this workaround if you no longer use the Starts Screen and Taskbar Manager policies.
:::


**Step 1 –** Disable the Taskbar Manager collection policies.

**Step 2 –** Using the Scripts Manager to deliver a batch script policy.

Rd /s /q "%APPDATA%\Microsoft\Windows\Start Menu\PolicyPak Start Screen Manager\"

It will remove the Endpoint Policy Manager tile from the Start Menu. The example screen shot and
sample script is below.

![819_5_c4b607f18774d1a207d45cbd8a96b426](/images/endpointpolicymanager/troubleshooting/startscreentaskbar/819_5_c4b607f18774d1a207d45cbd8a96b426.webp)


