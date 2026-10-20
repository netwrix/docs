---
title: "Remove a system"
description: "Remove Privilege Secure for Discovery protection and Offline Access Management from a Windows or Linux system in the correct order."
sidebar_position: 30
---

This page covers the sequence for removing Netwrix Privilege Secure for Discovery protection and Offline Access Management (OAM) from a system. Follow the steps in order so that the system keeps the administrator access you intend.

## Remove a Windows system

1. Sign in to the Privilege Secure for Discovery interface.
1. Find the system on the **Grant Access** page.
1. Persist any accounts that you want to remain in the local Administrators group.
1. If OAM is enabled:
   1. Set OAM to **Unmanaged**.
   1. Rescan the system.
   1. Copy the last known password for the built-in Administrator account.
1. Disable **Protect Mode** and **Scan Mode**. You don't need to rescan.
1. Sign in to the system by using Remote Desktop Protocol (RDP) or locally.
1. Remove the Privilege Secure for Discovery service account from the local Administrators group.

Privilege Secure for Discovery now has no access to change the local Administrators group.

:::note
If you remove only the Privilege Secure for Discovery service account from the system, any of the following can result:

- The OAM alternate administrator account remains on the system.
- The built-in Administrator account remains disabled.
- No accounts are added back to the local Administrators group.
:::

## Remove a Linux system

1. Sign in to the Privilege Secure for Discovery interface.
1. Find the system on the **Grant Access** page.
1. Persist any accounts that you want to keep sudo privileges.
1. Rescan the system.
1. Disable **Protect Mode** and **Scan Mode**. You don't need to rescan.
1. Sign in to the system by using SSH or locally.
1. Remove the sudo privileges of the Privilege Secure for Discovery service account.
1. Remove the Privilege Secure for Discovery software from the system.

Privilege Secure for Discovery now has no access to the system.
