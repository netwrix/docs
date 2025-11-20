---
title: "What are the Endpoint Policy Manager Build and Version numbers?"
description: "What are the Endpoint Policy Manager Build and Version numbers?"
sidebar_position: 20
---

# What are the Endpoint Policy Manager Build and Version numbers?

Endpoint Policy Manager on-premise suite doesn't have traditional "1.0", "2.0" product versions.

We simply have "the latest" and if you're a customer in good standing, you get to utilize that build
and upgrade anytime.

There are various places you'll see the version number of the build, the CSE, and Paks (for Endpoint
Policy Manager Application Manager).

In the Customer Portal, you'll see the BUILD number demonstrated like this … in this example the
build is 834..

![217_1_image002](/images/endpointpolicymanager/troubleshooting/217_1_image002.webp)

Here's how to read it:

- So the NUMBER represents the Endpoint Policy Manager CSE version. The CSE is the part that's
  installed on the endpoint / client machine.
- The LETTER represents how many times the download had been updated with MINOR updates.

Perhaps there was a bugfix update to the Endpoint Policy Manager Admin Console MSI, after the CSE
was shipped. In that case the build number stays the same, but the letter is increased by one (a to
b) to show that something new is inside the download.

When the CSE is installed on a client machine, you can see the version by running the PPupdate tool
and see the version number:

:::note
At no time will you see a, b, c, etc in the actual CSE (See picture below.)
:::


You'll only see the CSE ID which should match the build number.

Older builds, like 761 will show it like this:

![217_2_image0011](/images/endpointpolicymanager/troubleshooting/217_2_image0011.webp)

Newer builds, like 834 will show it like this:

![217_3_image004](/images/endpointpolicymanager/troubleshooting/217_3_image004.webp)

You can also see the same number in Programs / Features in Windows like this:

![217_4_image005](/images/endpointpolicymanager/troubleshooting/217_4_image005.webp)

What do the numbers BEFORE the build mean?

- 15 is 2015.
- 12 is December.
- 834 is the build number.
- Anything after that is the minor increment number.

For Endpoint Policy Manager Application Manager Paks, you might see Paks represented with the build
number of the Endpoint Policy Manager DesignStudio version that compiled the Pak.

In this screenshot, you can see the original style and the new style:

- Original style (4.2.785.1) means build 785 of the DesignStudio compiled the Pak.
- New Style (15.12.827.19) means build 827 of the DesignStudio compiled the Pak.

![217_5_image006](/images/endpointpolicymanager/troubleshooting/217_5_image006.webp)

