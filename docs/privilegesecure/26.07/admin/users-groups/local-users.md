---
title: "Add and manage local users"
description: "Create local users that are stored in the Privilege Secure database, so people without Active Directory accounts can sign in and run sessions."
sidebar_position: 30
---

# Add and manage local users

A local user exists in the Privilege Secure database. A local user doesn't depend on Active Directory (AD) to sign in. You can assign a local user to roles and access policies the same way you assign a domain user.

## Prerequisites

You have the Administrator role.

## Add a local user

1. Select **Users & Groups** in the left navigation.
2. Click **Add** and select **New Local User**.
3. In **Enter Local User Name**, enter the name for the account, for example `contractor01`.
4. Enter a password in **Password** and again in **Confirm Password**.
5. To make the user choose a new password at the first sign-in, select **Change Password Next Login**. The checkbox is cleared by default, which keeps the password you entered.
6. Click **Save**. The button stays disabled until the entries are valid.

The account appears on the **Users & Groups** page with the type **Local User**. See [Users and groups](/docs/privilegesecure/26.07/admin/users-groups/users-groups.md).

![The New Local User form with the user name, Password, and Confirm Password fields and the Change Password Next Login checkbox.](/images/privilegesecure/26.07/admin/new-local-user-form.webp)

## Password rules

The password you enter must meet the local user password policy. Administrators can change the policy in the local user password settings. The default policy requires:

- At least 8 characters.
- At least one lowercase letter, one uppercase letter, one digit, and one non-alphanumeric character.

{/* TODO verify: the menu path of the local user password settings (System Settings), its ranges (length 8-1024, unique characters 1-12, expiry 10-365 days), default password policy (PasswordOptions: length 8, unique characters 1, all four character classes; the product also seeds a 90-day expiry) and the 90-day password expiry behavior. Taken from code, not confirmed in the lab. */}

## Manage a local user

Select the user's name on the **Users & Groups** page to open the details page. A local user has these tabs: **Sessions**, **Policies**, **History**, **Authentication Connector**, **Properties**, and **User Roles**.

The header has these buttons:

- **Reset Password:** Sets a new password for the user. This button appears on local users only.
- **Lock Account:** Locks the account so the user can't sign in.
- **Reset MFA:** Resets the user's multi-factor authentication (MFA) registration.

{/* TODO verify: what Reset MFA and Lock Account do and how a locked account is unlocked (no Unlock state was seen in the lab) */}

The **Properties** tab holds **Display Name**, **SamAccountName**, **Department**, **User Principal Name**, and **Email**. For details on each tab and on lockout, see [User and group details](/docs/privilegesecure/26.07/admin/users-groups/user-details.md).

## Change your own password

Local users change their own passwords from **User Options** > **Settings** > **Change Password**. Enter **Old Password**, **Password**, and **Confirm Password**, then click **Save**. After a successful change, the console signs the user out.

{/* TODO verify: the sign-out after a change (from code, not seen in the lab) */}
