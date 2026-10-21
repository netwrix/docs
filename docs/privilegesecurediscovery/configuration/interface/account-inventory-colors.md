---
title: "Account inventory colors"
description: "Learn what each label color, icon, and type in the Administrator Accounts list means for a system's administrator accounts."
sidebar_position: 30
---

The **Administrator Accounts** pane in Netwrix Privilege Secure for Discovery lists the accounts that have, or can get, local administrator rights on the selected system. Each account has a colored label so you can tell its role at a glance. This page explains the colors, icons, and columns.

To see the pane, select **Access** > **Grant Access** and search for a system. The pane appears to the right of the system details.

![The Administrator Accounts pane showing accounts with different label colors, types, and persistence](/images/privilegesecurediscovery/configuration/ifc-admin-accounts.webp)

## Label colors

The **Type** column names the account type, and the label color follows the type. Persistent and active states override the type color. The built-in administrator, the Privilege Secure for Discovery service account, and the offline access account keep their own colors in every state.

| Color | Type or state | Meaning |
| --- | --- | --- |
| Light gray | Persistent | The account has permanent administrator rights. A scan in Protect Mode doesn't remove it from the local Administrators group. |
| Green | Active session | The user has an open just-in-time access (JITA) session on the system. The **Expiration** column shows when the session ends. |
| Indigo | Domain user | A domain user account that the product manages. |
| Blue | Domain group | A domain group. Members get access through the group. |
| Rust red | Local user | A local account on the system. |
| Amber | Local group | A local group on the system. |
| Black | Built-in admin | The built-in local administrator account (RID 500). |
| Dark gray | SecureONE or Offline Access | The Privilege Secure for Discovery service account, or the offline access account. |

Accounts of an unknown type use a plain label with dark text.

## Icons

Icons appear at the start of a label.

| Icon | Meaning |
| --- | --- |
| Circle with a diagonal line | The account is disabled. |
| Key | The product manages the account password. Only users who can retrieve passwords see this icon. |
| User with an x | The account has no matching user account in the directory. |

If an account has access through a group, the label shows **Access via group** and the group name beneath it.

## Columns

- **Persistent** shows **Yes** when the account has permanent administrator rights. Select **Action** > **Set Persistent** or **Remove Persistent** to change it. For details, see [Remove persistence on machines](../domains-and-ad/remove-persistence.md).
- **On System** shows **Yes** when the account is a member of the local Administrators group on the system at the last scan, and **No** when it isn't.
- **Expiration** shows the end of an active JITA session.

The list sorts persistent accounts first, then active sessions, then groups, users, the built-in administrator, offline access accounts, and the service account.
