---
title: "Linux: Granular Sudo"
description: "Linux: Granular Sudo"
sidebar_position: 130
---

# Linux: Granular Sudo

Linux: Granular Sudo

# Linux: Granular Sudo

**CAUTION:** Always back up the /etc/sudoers file prior to scanning or enabling Scan Mode on any
system in NPS-D. Scanning, regardless of Protect Mode setting, a Liunx system will result in a
flattening of the /etc/sudoers file. This will pull in all permissions from other sources (e.g:
files locate in /etc/sudoers.d) into the /etc/sudoers file, and disable sudo permissions being
acquired from those sources.

Privilege Secure has granular sudo control. This lets a Privilege Secure Admin manipulate and
control the sudoers file on Linux machines directly from in the Privilege Secure UI. This sudoers
file is saved within the Privilege Secure database and can be pushed to other Linux machines in bulk
via Quickstart. This enables a consistent and secure Linux environment across the organization.

NOTE: The specifics of sudo format are not covered in this article. Details of this can be found on
the sudo website at the following link:

https://www.sudo.ws/man/1.8.13/sudoers.man.html

Sudo changes can be made using the sudoers button in Privilege Secure for a linux server.

![Screen_Shot_2021-04-19_at_8.08.L37_AM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-04-19_at_8.08.37_am.webp)

This opens up the sudo edit screen for that server

![Screen_Shot_2021-04-19_at_8.09.L48_AM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-04-19_at_8.09.48_am.webp)

Updates can then be made to the sudoers file for the specific server. This is stored in Privilege
Secure and then pushed out to the server. It is verified when it is pushed to the Linux machine. If
it fails the format review when pushing to the machine you will see an error like below:

![Screen_Shot_2021-04-19_at_8.16.L48_AM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-04-19_at_8.16.48_am.webp)

Also shown in the access history list:

![Screen_Shot_2021-04-19_at_8.18.L04_AM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-04-19_at_8.18.04_am.webp)

Once a sudoers file has been configured, it can be pushed out to multiple machines using Quickstart.
In order to do this use the ID for the specific version of the sudoers file. This can be copied from
the top of the sudoers edit screen:

![Screen_Shot_2021-04-19_at_8.21.L18_AM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-04-19_at_8.21.18_am.webp)

Click to copy the ID. This can then be paste in to the necessary field in the Quickstart upload
field.

## Granular Sudo Permissions

As of version 2.10 a Privilege Secure admin can view the sudo permissions of a group or user
directly from the UI inventory:

![Screen_Shot_2021-05-31_at_12.30.L01_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-05-31_at_12.30.01_pm.webp)

![Screen_Shot_2021-05-31_at_12.30.L36_PM.webp](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-05-31_at_12.30.36_pm.webp)

From there it is possible to go directly into the granular sudo edit screen.
