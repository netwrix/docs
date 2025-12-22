---
title: "Account Inventory Colors"
description: "Account Inventory Colors"
sidebar_position: 230
---

# Account Inventory Colors

Account Inventory Colors

# Account Inventory Colors

### Purpose of this article

This article will help you to understand the color scheme used within the Privilege Secure machine
inventory

### Details

Various colors are used to differentiate the administrator accounts on a machine as shown in the
Administrator Accounts frame in Privilege Secure:

![Screen_Shot_2020-06-16_at_11.51.L53_AM.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360050514593_screen_shot_2020-06-16_at_11.51.53_am.webp)

In this list pane on the right-hand side of the “Access” menu, you can see the inventory of users
and groups with the ability to get Administrator rights to the selected system. Note that a User or
Group in the ‘Account’ column may not **currently have** Local Administrator rights. This is further
described in the section that follows.

Users and Group are shown in varying colors:

- Light Grey – Persistent Accounts. These accounts will **not** be removed from the system’s Local
  Administrators group by Privilege Secure in Protect Mode during a scan. How an account becomes
  persistent is discussed further in the “Action” section below.
- Dark Grey – Offline Access and Privilege Secure service account. The key symbol denotes that
  Privilege Secure is managing the rotation of the password.
- Black – Windows RID500 local account. The circle with a line through it, “Ghost Busters”, symbol
  denotes that the account is disabled. The key symbol denotes that Privilege Secure is managing the
  rotation of the password as part of the Offline Access Management (OAM) functionality.
- Blue – Groups which were assigned to the inventory directly:
- Dark Green – Users which are assigned to the inventory directly and not part of a group.
- The following applies to both Blue and Dark Green:

    - Members of the system’s Local Administrator group **at the time** a system was put into
      Privilege Secure “Protect Mode”. They were removed at that time, but will continue to appear
      in the inventory list
    - Added to the Administrator Account/Group Inventory via the Privilege Secure API.
    - Added to the Local Administrators group on the system itself. Depending on the configuration
      of Privilege Secure, Privilege Secure **may** remove this entry from the Local Administrators
      group during the next scan and/or it **may** remain in the Administrator Account/Group
      Inventory.

- Light Green – Users which currently have an open ‘Administrative Access Session’ to the system. A
  session which was provisioned by clicking the “Access System” button in the “System Search” pane
  in the Privilege Secure application.
- Red – Local administrator account that is not a domain account or a special account (RID 500 or
  Privilege Secure specific account).
