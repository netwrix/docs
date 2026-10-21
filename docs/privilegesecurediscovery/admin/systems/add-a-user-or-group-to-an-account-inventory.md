---
title: "Add a user or group to an account inventory"
description: "Add an Active Directory user or group, or a local account, to the administrator account inventory of a Windows or Linux system."
sidebar_position: 20
---

The administrator account inventory of a system lists the accounts that can receive administrator access on it. In Netwrix Privilege Secure for Discovery, an administrator adds a user or group to the inventory so that the account can request just-in-time administration (JITA) sessions or keep persistent access.

:::note
Add a local administrator account to a protected system only for use cases that require the account to persist, such as service accounts.
:::

## Add a directory user or group

You need the administrator role for this procedure. The search covers Active Directory (AD) and Microsoft Entra ID users and groups.

1. Select **Access** > **Grant Access**.
1. Enter the system name in the search box, and select the system.
1. Select **Add Account** next to the **Administrator Accounts** table.

   ![The JITA Session and Add Account buttons for the Administrator Accounts table](/images/privilegesecurediscovery/admin/grant-access-inventory-buttons.webp)

1. In **User or Group**, enter at least two characters, and then select the account. The list labels each result as **User**, **Group**, or **System**, and it hides accounts that the inventory already holds.
1. For **Access Permission**, select **Just-In-Time** or **Persistent**.
1. For a Linux system, set **Sudo Permissions** as described in the next section.
1. Select **Save**, or select **Save and add another** to keep the form open for the next account.

![The Add User or Group form for a Windows system](/images/privilegesecurediscovery/admin/grant-access-add-account.webp)

On a Windows system, the search also returns computer accounts (**System**), which you can add as administrators.

### Set sudo permissions on a Linux system

The **Sudo Permissions** options appear for Linux systems only:

- **All Sudo permissions allowed** gives the account unrestricted sudo.
- **Specify Sudo permissions** shows a text box. Enter the permissions in sudoers file syntax. The box shows an example before you edit it:

  ```text
  ALL = (ALL) /sbin/ifconfig
  ALL = (ALL) /bin/ping
  ```

If you add a group, every user who gets JITA permission on the system through that group inherits the group's sudo permissions.

Two rules apply to Linux systems:

- When **Directory Bridging** is **Privilege Secure for Discovery**, domain accounts can only have **Just-In-Time** access. The **Access Permission** options are unavailable, and the form explains why.
- A domain account that you add to a Linux system needs a unique `sAMAccountName`. If another inventory entry has the same name, the form warns you.

## Add a local user or group

You need the administrator role for this procedure. The **Add Account** form searches the directory, so a local account has to appear through a scan.

1. If the system is in Protect Mode **New Accounts: Deny**, change it to **New Accounts: JITA**.
1. On the system, add the local user or group:
   - Windows: add it to the local Administrators group.
   - Linux: add it by running `sudo visudo`.
1. On the **Grant Access** page, select **Rescan**.

   The local user or group now appears in the administrator account inventory.

1. In the **Action** column of the new entry, select **Set Persistent**.
1. Select **Rescan** again.

## Manage an entry in the inventory

The **Action** menu of each entry offers **Remove Admin**, **Set Persistent** or **Remove Persistent**, and, for an active session, **Extend Session** and **Expire Session**. An entry that has access only through a group has no **Remove Admin** option. Remove the group instead.

## Add accounts to many systems

The **Add/Update Account** bulk action adds an account to many Windows systems at once. See [Run bulk actions on systems](./bulk-actions.md).

You can also use Quickstart to provision users and groups to one or more systems with the **Provision Account** column of the **Computer Data** sheet. For more information, see the following topics:

- [Install the Quickstart tools](../../configuration/bulk-onboarding/install-the-quickstart-tools.md)
- [Quickstart report field reference](../../configuration/bulk-onboarding/report-field-reference.md)
- [Replicate sudo permissions to many Linux systems](../../configuration/endpoint-preparation/linux-replicate-sudo-permissions.md)
