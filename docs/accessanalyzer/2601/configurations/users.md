---
title: "Users"
description: "Managing users in the Configuration node"
sidebar_position: 70
---

# Users

The Users page lets you create and manage the accounts that have access to Netwrix Access Analyzer. Navigate to **Configuration** > **Users** to view and manage all users.

:::note
This page is available to administrators only.
:::

## Users list

The users list displays all accounts in the system. Each row shows:

| Column | Description |
| --- | --- |
| **Username** | The display name for the account. |
| **Email** | The email address used to sign in. |
| **Role** | The account's role: **Administrator** or **Viewer**. |
| **Status** | Whether the account is **Active** or **Inactive**. |
| **Last Login** | The date of the most recent successful sign-in, or **Never** if the user hasn't signed in yet. |

Use the search field to filter by name or email. You can sort by any column.

## Roles

Access Analyzer has two roles:

| Role | Access |
| --- | --- |
| **Administrator** | Full access to all features, including user management. |
| **Viewer** | Read-only access. |

## Add a user

The form for adding a user differs depending on whether your deployment uses an external Identity Provider (IdP) for authentication.

### Add a user (local authentication)

Use this procedure when Access Analyzer manages passwords directly.

1. Click **Add User**.
2. Enter a **Name**. Names must be between 2 and 100 characters.
3. Enter an **Email** address. Email addresses must be unique across all users (case-insensitive).
4. Select a **Role**: **Administrator** or **Viewer**. The default is **Viewer**.
5. Enter a **Password** and confirm it.
6. Click **Create User**.

Password requirements for local accounts:

- Minimum 18 characters
- At least one uppercase letter (A–Z)
- At least one lowercase letter (a–z)
- At least one number (0–9)
- At least one special character (`!@#$%^&*(),.?":{}|<>`)
- Can't contain the user's email address
- Can't be a commonly used password

### Add a user (Identity Provider)

When your deployment is configured to use an external Identity Provider, you can pre-provision an account before the user's first sign-in. Access Analyzer creates the account record and links it to the user's IdP identity when they sign in for the first time.

1. Click **Add User**.
2. Enter a **Name**. Names must be between 2 and 100 characters.
3. Enter an **Email** address. The email must match the address the user has in your IdP.
4. Select a **Role**: **Administrator** or **Viewer**. The default is **Viewer**.
5. Click **Create User**.

No password is required. The account is ready for the user to sign in through your IdP.

## Edit a user

1. In the users list, click the actions menu for a user and select **Edit**.
2. Modify the fields as needed.
3. Click **Update User**.

What you can change depends on the account type:

| Account type | Editable fields |
| --- | --- |
| Local (password-based) | Name, Email, Role |
| Identity Provider — pre-provisioned (hasn't signed in yet) | Name, Email, Role |
| Identity Provider — provisioned (has signed in at least once) | Role only |

Name and email are locked for provisioned IdP accounts because those values come from the IdP token. To change them, update the user's profile in your IdP.

## Activate a user

1. In the users list, click the actions menu for an inactive user and select **Activate**.

The account becomes active immediately. The user can sign in and use the application according to their assigned role.

## Deactivate a user

1. In the users list, click the actions menu for an active user and select **Deactivate**.

Deactivating a user revokes all of their active sessions immediately. The account record is preserved and can be reactivated later.

:::note
You can't deactivate your own account or the last active administrator account.
:::

## Reset a user's password

:::note
The **Reset Password** action is available for local accounts only. It doesn't appear for accounts that authenticate through an Identity Provider.
:::

1. In the users list, click the actions menu for a user and select **Reset Password**.

Access Analyzer generates a password reset token for the user. The user must set a new password before they can sign in again. Reset tokens expire after 2 hours.

## Delete a user

1. In the users list, click the actions menu for a user and select **Delete**.
2. Confirm the deletion.

:::warning
Deleting a user is permanent and can't be undone.
:::

You can't delete your own account or the last active administrator account.

## Constraints

| Setting | Constraint |
| --- | --- |
| **Name** | 2–100 characters |
| **Email** | Must be unique across all users (case-insensitive); must be a valid email address |
| **Role** | Administrator or Viewer; defaults to Viewer |
| **Password** | Minimum 18 characters; must include uppercase, lowercase, number, and special character; can't match the user's email; can't be a commonly used password |
| **Deactivate** | Blocked for your own account and the last active administrator |
| **Delete** | Blocked for your own account and the last active administrator |
| **Reset Password** | Local accounts only; tokens expire after 2 hours |
