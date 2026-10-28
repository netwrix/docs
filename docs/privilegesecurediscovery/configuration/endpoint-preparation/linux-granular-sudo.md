---
title: "Edit sudoers with granular sudo control"
description: "View and edit the sudoers content that Privilege Secure for Discovery stores for a Linux system, and see the sudo permissions of one account."
sidebar_position: 70
---

Granular sudo control lets an administrator view and edit the sudoers content of a Linux system from the Netwrix Privilege Secure for Discovery UI. The product stores the content in its database, and you can apply the same content to many systems. This page doesn't cover sudoers syntax. For the syntax, see the [sudoers manual](https://www.sudo.ws/man/1.8.13/sudoers.man.html).

Back up `/etc/sudoers` before you scan a system. See [Linux systems overview](./linux-registration-modes.md).

## Two kinds of sudoers content

The product keeps two versions of the sudoers content for a system:

- The content that the last scan found on the system.
- The staged content, which you save in the editor. The product uses it as the target state when **Protect Mode** is **New Accounts: JITA** or **New Accounts: Deny**, and writes it to the system at the next scan.

When **Protect Mode** is **Disabled**, the staged content has no effect on the system. The next scan reads the file on the system and writes it back with the rules from all included files merged into `/etc/sudoers`.

## Edit the sudoers content of a system

1. Go to **Access** > **Grant Access** and find the Linux system.
2. Click **Sudoers**.

   The editor shows the content in a read-only box. The title shows the mode of the system, for example `Sudoers for ZZ-LNX-01 - Currently in Protect: JITA mode`.

   ![The Sudoers editor showing the sudoers content of a system in Protect mode](/images/privilegesecurediscovery/endpoint-preparation/linux-sudoers-editor.webp)

3. Click **Edit**.
4. Change the content in the text box.
5. Click **Save**.

The product saves the content, adds new accounts that it finds in the content to the inventory, and shows the change as `modified <time> by <user>`. It doesn't check the syntax when you save. It checks the file with `visudo` when it writes the file to the system. If the check fails, the product keeps the old file on the system and records an error that includes text such as `write_sudoers: BadReturnCodeError: Command "visudo -c -f ..." returned non-zero exit status 1`.

If the system changed after your last save and **Protect Mode** is **Disabled**, the editor shows `Sudoers on <system> were different on <date>. Click to view.` Select the link to see the file as the last scan found it. Click **Discard Edits**, and then confirm, to drop your staged content and use the content from the system.

## Apply the content to other systems

Each version of the content has an ID. Click the information icon next to the line `The Sudoers below will be used as the desired state for Protect Mode` to copy the ID. To apply it to many systems, see [Replicate sudo permissions to many systems](./linux-replicate-sudo-permissions.md).

## View the sudo permissions of one account

1. On the **Grant Access** screen, find the account in **Administrator Accounts**.
2. Select **Action** > **Sudo Permissions**.

   ![The Sudo permissions view of one account, with its direct rules](/images/privilegesecurediscovery/endpoint-preparation/linux-admin-sudo-permissions.webp)

The view lists the rules that apply to the account directly, through user aliases, and through user lists. It doesn't show permissions that come from local group membership. Click **Sudoers** to open the full editor.
