---
title: "Start and manage JITA sessions for another user"
description: "Start, extend, and expire just-in-time administration sessions on behalf of another user as a Privilege Secure administrator."
sidebar_position: 50
---

An administrator can start, extend, and expire just-in-time administration (JITA) sessions on behalf of another user. This is useful for vendors and contractors, because they don't need access to Netwrix Privilege Secure for Discovery. It is also useful with an endpoint detection and response (EDR) solution, to grant administrator access to a user who isn't connected to the corporate network or VPN but has internet access.

Only users with the Privilege Secure for Discovery administrator role can delegate access.

## Start a session for another user

1. Open the **Grant Access** screen for the system.
1. Select **JITA Session** above the inventory.

   ![The JITA Session button above the inventory](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4623118195479_screen_shot_2022-03-07_at_7.01.28_pm.webp)

1. Search for the user.

   The user must already have access to the system through the inventory.

1. Set the length of the session by using the slider, the radio buttons, or by entering minutes.
1. Select **Start**.

   ![The JITA session dialog with the user and the elevated time](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4623118195479_screen_shot_2022-03-07_at_7.02.26_pm.webp)

The product records both the person who requested the access and the person the access was delegated to.

![The session record showing the requester](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4623118195479_screen_shot_2022-03-07_at_7.05.22_pm.webp)

![The session record showing the user the access was delegated to](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4623118195479_screen_shot_2022-03-07_at_7.05.48_pm.webp)

## Grant access to a user who is off the network

If the target machine is off the network and an EDR integration is enabled, the product uses the EDR solution to provide the administrator access for the delegated user. This lets a user who has no access to the corporate network or VPN get local administrator access.

## Limits

The **JITA Session** button isn't available on Linux systems where Directory Bridging is set to Privilege Secure for Discovery. This is intentional.

![The Grant Access screen for a Linux system without the JITA Session button](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4623118195479_screenshot_2022-12-08_at_1.14.16_pm.webp)
