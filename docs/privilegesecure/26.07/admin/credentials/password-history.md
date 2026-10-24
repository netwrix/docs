---
title: "View passwords and password history"
description: "Copy or view the current password of a managed account and review its previous passwords from the Credentials page."
sidebar_position: 60
---

# View passwords and password history

Privilege Secure stores the current password and a history of previous passwords for each managed account. You can copy or view the current password, and you can open the history to see earlier ones.

Passwords stay hidden until you reveal them. Reveal a password only when you need it.

## Prerequisites

You're an Administrator, or you hold a custom role with the **[C] View Password** permission. See [Create a custom role](/docs/privilegesecure/26_07/admin/roles/custom-roles).

## View the current password

On the **Credentials** page, each managed account shows two icons beside its name:

- **Copy Password to Clipboard**: Copies the current password.
- **View Password**: Opens the View Password dialog.

The same icons appear in credential groups and policy overrides.

To view the current password:

1. In the left navigation, click **Credentials**.
2. Find the managed account and click the **View Password** icon.
3. Reveal the password with the eye icon, or copy it with **Copy to Clipboard**.

The dialog closes automatically after a countdown. Click **Cancel** to close it sooner.

For example, view the password of `<local-admin>` to sign in to `<server-name>` during an outage.

{/* TODO verify: the 26.03 page says the View Password dialog stays open for 20 seconds. The lab didn't open it because it reveals a secret. */}

{/* TODO screenshot: the View Password dialog with the password hidden */}

## View password history

1. In the left navigation, click **Credentials**.
2. Select the checkbox for a managed account.
3. Click **View History**.

The **Password History** dialog opens. {/* TODO screenshot: the Password History dialog with values hidden */}

The dialog has these controls:

| Control | Description |
|---|---|
| **Show Password(s)** | Reveals the passwords in the table. |
| **Hide Password(s)** | Hides them again. It is disabled until you select an entry. |
| **Refresh** | Reloads the list. |

{/* TODO verify: whether the Show Password button reveals all rows or only the selected rows */}

The table has these columns:

| Column | Description |
|---|---|
| **Creation Date** | When the password was created. |
| **Password (click to view)** | The password, shown as `<hidden>`. Click a value to reveal that password. |

You can resize and sort the columns.

For example, an account whose password rotated three times shows one row for each stored password, each with its own creation date.

{/* TODO verify: the default sort order of the history table. */}

## History limits

By default, Privilege Secure keeps up to 7 passwords for each account and keeps each one for 30 days. To change these limits, edit **Historical Password Limit** (1 to 50) and **Days Of Password Retention** (1 to 365) in **System Settings**. See [System settings reference](/docs/privilegesecure/26_07/configuration/system-settings#password-history).

{/* TODO verify: which limit applies first when both apply */}

## Related topics

- [Manage, rotate, and verify credentials](/docs/privilegesecure/26_07/admin/credentials/manage-credentials)
