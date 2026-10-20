---
title: "Edit sudoers with granular sudo control"
description: "Edit the sudoers file for a Linux system in the Privilege Secure for Discovery UI, and view the sudo permissions of a user or group."
sidebar_position: 70
---

Granular sudo control lets an administrator view and change the sudoers file of a Linux system from the Netwrix Privilege Secure for Discovery UI. The product saves the sudoers file in its database and pushes it to the system. You can also apply a saved sudoers file to many systems with the Quickstart tool, which keeps the Linux environment consistent across your organization.

:::caution
Always back up the `/etc/sudoers` file before you scan a Linux system or enable Scan mode on it. Scanning a Linux system flattens the `/etc/sudoers` file, regardless of the Protect mode setting. Flattening pulls all permissions from other sources, such as files in `/etc/sudoers.d`, into `/etc/sudoers` and disables sudo permissions from those sources.
:::

This page doesn't cover sudoers syntax. For the syntax, see the [sudoers manual](https://www.sudo.ws/man/1.8.13/sudoers.man.html) on the sudo website.

## Edit the sudoers file for a system

1. Open the Linux system on the **Grant Access** screen.
2. Click **Sudoers**.

   ![The Sudoers button on the Grant Access screen for a Linux system](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-04-19_at_8.08.37_am.webp)

   The sudo edit screen for the system opens.

   ![The sudo edit screen showing the sudoers file for the system](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-04-19_at_8.09.48_am.webp)

3. Update the sudoers file for the system. Privilege Secure for Discovery stores the file and pushes it to the system, and it verifies the file when it pushes it.

If the file fails the format check, an error appears on the edit screen.

![An error message that the sudoers file failed the format check](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-04-19_at_8.16.48_am.webp)

The error also appears in the access history list.

![The access history list showing the sudoers format error](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-04-19_at_8.18.04_am.webp)

## Copy the ID of a sudoers file

To push a configured sudoers file to multiple machines, use the ID of that version of the sudoers file. Copy the ID from the top of the sudoers edit screen by clicking it.

![The ID of the sudoers file at the top of the sudoers edit screen](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-04-19_at_8.21.18_am.webp)

Paste the ID in the **Set Sudoers Representation** column of the Quickstart report. For the procedure, see [Replicate sudo permissions to many systems](./linux-replicate-sudo-permissions.md).

## View sudo permissions of a user or group

An administrator can view the sudo permissions of a group or user directly from the UI inventory.

![The inventory entry for a user with the sudo permissions option](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-05-31_at_12.30.01_pm.webp)

![The sudo permissions of the selected user on the system](/images/privilegesecure/4.2/discovery/admin/systemmanagement/1500007539482_screen_shot_2021-05-31_at_12.30.36_pm.webp)

From there, you can go directly to the granular sudo edit screen.
