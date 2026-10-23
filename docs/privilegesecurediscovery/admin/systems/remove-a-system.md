---
title: "Remove a system"
description: "Remove Privilege Secure for Discovery protection and Offline Access Management from a Windows or Linux system in the correct order."
sidebar_position: 30
---

This page covers the order of steps to stop managing a system with Netwrix Privilege Secure for Discovery. It covers Protect Mode, Scan Mode, and Offline Access Management (OAM). Follow the steps in order so that the system keeps the administrator access you intend.

To make the product forget a system that you decommissioned, finish with [Archive the system](#archive-the-system).

## Remove a Windows system

1. Sign in to the Privilege Secure for Discovery interface as an administrator.
1. Select **Access** > **Grant Access**, and open the system.
1. In the **Administrator Accounts** table, select **Action** > **Set Persistent** for each account that must stay in the local Administrators group.
1. If **Offline Access** shows a managed policy:
   1. In the **Action** menu of the built-in Administrator account, select **Access Password**, and copy the password.
   1. Set **Offline Access** to **Unmanaged**.
   1. Select **Rescan**. The scan turns the built-in Administrator account back on and removes the alternate administrator account.
1. Set **Protect Mode** to **Disabled**.
1. Set **Scan Mode** to **Disabled**. You don't need to rescan.
1. Sign in to the system by using Remote Desktop Protocol (RDP) or locally.
1. Remove the Privilege Secure for Discovery service account from the local Administrators group.

Privilege Secure for Discovery now has no access to change the local Administrators group.

:::note
If you remove only the service account from the system, any of the following can result:

- The OAM alternate administrator account remains on the system.
- The built-in Administrator account remains disabled.
- Nothing adds accounts back to the local Administrators group.
:::

:::warning
You can't disable **Scan Mode** while OAM is enabled. The product rejects the change with `Cannot disable scan mode on a system while OAM is enabled.` Set **Offline Access** to **Unmanaged** first.
:::

## Remove a Linux system

Privilege Secure for Discovery has no agent on Linux systems. It connects with a service account that has SSH access and sudo permissions, so removal means withdrawing those permissions.

1. Sign in to the Privilege Secure for Discovery interface as an administrator.
1. Select **Access** > **Grant Access**, and open the system.
1. In the **Administrator Accounts** table, select **Action** > **Set Persistent** for each account that must keep sudo privileges. On a system whose **Directory Bridging** is **Privilege Secure for Discovery**, domain accounts can't be persistent.
1. Select **Rescan**.
1. Set **Protect Mode** to **Disabled**.
1. Set **Scan Mode** to **Disabled**. You don't need to rescan.
1. Sign in to the system by using SSH or locally.
1. Remove the sudo permissions of the Privilege Secure for Discovery service account.

Privilege Secure for Discovery now has no access to the system. The local accounts that the product created from domain accounts stay in `/etc/passwd` with their passwords scrambled. Delete them if you no longer need them.

## Archive the system

Archive a system that you decommissioned, or that you no longer want in the **Systems** list. Archiving moves the system to the **Retired Systems** view. The system stays archived, even if it still exists in Active Directory, until you restore it.

1. Select **Management** > **Systems**, and select the system.
1. Select **Bulk Actions**.
1. Select **Select Action** > **Archive Systems**.
1. Select **Execute Bulk Action**.

This action skips domain controllers. For the full bulk action procedure, see [Run bulk actions on systems](./bulk-actions.md). To bring a system back, see [Restore a system](./restore-a-system.md).
