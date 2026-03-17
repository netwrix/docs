---
title: "Starting and Managing JITA Sessions for Another User"
description: "Starting and Managing JITA Sessions for Another User"
sidebar_position: 150
---

# Starting and Managing JITA Sessions for Another User

Starting and Managing JITA Sessions for Another User

# Starting and Managing JITA Sessions for Another User

The Privilege Secure Administrator role can start, extend and expire JITA sessions on behalf of
another user. This can be especially useful for vendors and contractors to avoid having to provide
them access to Privilege Secure. It can also be very useful in conjunction with an EDR solution to
elevate access for a user who is not connected to the corporate network or VPN, but has internet
access.

To delegate access to another user the following steps should be taken:

- Open the grant access screen for the required machined click the JITA Session button above the
  inventory

![Screen_Shot_2022-03-07_at_7.01.L28_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4623118195479_screen_shot_2022-03-07_at_7.01.28_pm.webp)

- Search for the required user and select the amount of elevated time desired (slide bar, radio
  button or minute entry), then click the start button. Note: access is only available to users that
  already have access via the inventory

![Screen_Shot_2022-03-07_at_7.02.L26_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4623118195479_screen_shot_2022-03-07_at_7.02.26_pm.webp)

- The person requesting the access, as well as the person the access is delegated to is captured:

![Screen_Shot_2022-03-07_at_7.05.L22_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4623118195479_screen_shot_2022-03-07_at_7.05.22_pm.webp)

![Screen_Shot_2022-03-07_at_7.05.L48_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4623118195479_screen_shot_2022-03-07_at_7.05.48_pm.webp)

## Extended Details

If the target machine is off of the network the EDR solution (if enabled) will be used to provide
the elevated access for the user that access is being delegated for. This is very useful if a user
doesn't have access to the corporate network or VPN but still needs local admin access. Only
administrators of Privilege Secure are able to delegate access.

## Appendix

Version Requirements

2.15 or greater

The "JITA Session" button will not be available on Linux systems where Directory Bridging is set to
Privilege Secure. This is intentional.

![Screenshot_2022-12-08_at_1.14.L16_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4623118195479_screenshot_2022-12-08_at_1.14.16_pm.webp)
