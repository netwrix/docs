---
title: "Users"
description: "Managing users in the Configuration node"
sidebar_position: 70
---

# Users

The Users page lets you create and manage the accounts that have access to Netwrix Access Analyzer. Navigate to **Configuration** > **Users** to view and manage all users.

:::note
This page is available to users with the **User Admin** or **Administrator** role. Users with the Viewer role cannot access this page.
:::

## Users list

The users list displays all accounts in the system. Each row shows:

| Column | Description |
| --- | --- |
| **Username** | The display name for the account. |
| **Email** | The email address used to sign in. |
| **Role** | The account's role: **Administrator**, **User Admin**, or **Viewer**. |
| **Status** | Whether the account is **Active** or **Inactive**. |
| **Last Login** | The date of the most recent successful sign-in, or **Never** if the user hasn't signed in yet. |

Use the search field to filter by name or email. You can sort by any column.

## Roles

Access Analyzer has three roles:

| Role | Description |
| --- | --- |
| **Administrator** | Full access: system configuration (sources, scans, connectors, application settings) and user management (create, edit, activate, deactivate, and delete users; assign roles; pre-provision federated users). |
| **User Admin** | User and role management rights only: create, edit, activate, deactivate, and delete users; assign roles; pre-provision federated users. Does **not** have system configuration rights. |
| **Viewer** | Read-only access to data and reports. No configuration or user management rights. |

A user can only hold one role at a time.

## Bootstrap admin account

Access Analyzer seeds a built-in account, `admin@dspm.local`, during installation. This account is assigned the **User Admin** role and is intended for first-time user provisioning only.

To retrieve the bootstrap admin password:

```bash
sudo kubectl get secret -n access-analyzer dspm-bootstrap-admin \
  -o jsonpath='{.data.password}' | base64 -d; echo
```

On first login, you will be prompted to enroll an authenticator app for MFA and set a display name. Do not change the email address.

:::note
Keep the bootstrap account active as an emergency recovery account, but do not use it for routine user management. Create at least one named User Admin account during initial setup and use that account for ongoing administration.
:::

For the full first-login walkthrough, see [Quick Install — Step 5](/docs/accessanalyzer/2601/install/quickinstall#step-6-sign-in).

## Recommended initial setup

After installation, complete the following steps in order before handing the product to your team.

| Step | Action | Notes |
| --- | --- | --- |
| **1** | Sign in as `admin@dspm.local` | Uses the bootstrap User Admin account. Retrieve the password using the kubectl command above. |
| **2** | Create at least one named **User Admin** | Provides a dedicated account for user management with no system configuration access. Use this account for ongoing user administration so that Administrator accounts are not required for routine user changes. |
| **3** | Create at least one **Administrator** | Grants full access — system configuration and user management. This is typically the person responsible for setting up and maintaining the product. |
| **4** | Create **Viewer** accounts as needed | Optional. Add Viewer accounts for stakeholders who need read-only access to dashboards and reports. |
| **5** | Sign out of the bootstrap account | Day-to-day work should be done from named accounts. |

## Add a user

The form for adding a user differs depending on whether your deployment uses an external Identity Provider (IdP) for authentication.

### Add a user (local authentication)

Use this procedure when Access Analyzer manages passwords directly.

1. Click **Add User**.
2. Enter a **Name**. Names must be between 2 and 100 characters.
3. Enter an **Email** address. Email addresses must be unique across all users (case-insensitive).
4. Select a **Role**: **Administrator**, **User Admin**, or **Viewer**. The default is **Viewer** — the intentionally conservative default. Only assign Administrator or User Admin after confirming the user's responsibilities.
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
3. Enter an **Email** address. The email must match the address the user has in your IdP exactly, including case.
4. Select a **Role**: **Administrator**, **User Admin**, or **Viewer**. The default is **Viewer** — the intentionally conservative default. Only assign Administrator or User Admin after confirming the user's responsibilities.
5. Click **Create User**.

No password is required. The account is ready for the user to sign in through your IdP.

:::note
If a user authenticates through your IdP without a pre-provisioned account in Access Analyzer, their sign-in is blocked and they see an access error. Pre-provision the account first, then the user can sign in successfully.
:::

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
You can't deactivate your own account or the last active User Admin account.
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

You can't delete your own account or the last active User Admin account.

## Constraints

| Setting | Constraint |
| --- | --- |
| **Name** | 2–100 characters |
| **Email** | Must be unique across all users (case-insensitive); must be a valid email address |
| **Role** | Administrator, User Admin, or Viewer; defaults to Viewer |
| **Password** | Minimum 18 characters; must include uppercase, lowercase, number, and special character; can't match the user's email; can't be a commonly used password |
| **Deactivate** | Blocked for your own account and the last active User Admin |
| **Delete** | Blocked for your own account and the last active User Admin |
| **Reset Password** | Local accounts only; tokens expire after 2 hours |
