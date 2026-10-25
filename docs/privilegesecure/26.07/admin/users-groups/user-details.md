---
title: "User and group details"
description: "See the tabs, header buttons, and sign-in lockout behavior on the details page for a user, group, or application in Netwrix Privilege Secure."
sidebar_position: 50
---

# User and group details

The details page for a user or group shows its sessions, access policies, roles, and sign-in settings in one place. Use it to review what an account can do, lock the account, reset multi-factor authentication (MFA), and assign roles.

To open the page, click a name on the **Users & Groups** page, on a role's member list, or in another list that links to the account. See [Users and groups](/docs/privilegesecure/26.07/admin/users-groups/users-groups.md).

{/* TODO screenshot: the details page for a domain user, showing the header and the tab row */}

## Header

The header shows the display name, the sign-in name in `DOMAIN\sam` form, and the number of active sessions. Domain users and groups also show the number of scheduled sessions.

| Button | What it does | Shown for |
|---|---|---|
| **Lock Account** | Blocks the account from signing in and creating sessions. See [Sign-in lockout and unlocking](#sign-in-lockout-and-unlocking). | Domain, local, and application users |
| **Reset MFA** | Forces the user to register a new authenticator at the next sign-in. See [Reset a user's MFA](#reset-a-users-mfa). | Domain and local users that use Internal MFA |
| **Reset Password** | Sets a new password for the account. | Local users only |

A group's details page doesn't show **Lock Account** or **Reset MFA**.

## Tabs

The tabs depend on the type of account.

| Account type | Tabs |
|---|---|
| Domain user | **Sessions**, **Policies**, **Local Rights**, **History**, **Authentication Connector**, **User Roles** |
| Local user | **Sessions**, **Policies**, **History**, **Authentication Connector**, **Properties**, **User Roles** |
| Group | **Sessions**, **Members**, **Policies**, **History**, **Authentication Connector**, **Group Roles** |
| Application user | **Sessions**, **Policies**, **History**, **Authentication**, **Properties** |

Every list on the tabs has a search box and can be resized and sorted by column.

### Sessions

The **Sessions** tab lists the sessions of the account. Group sessions include a **LOCAL GROUP** column.

| Column | Description |
|---|---|
| **REQUESTED** | When the session was requested. |
| **USER** | The account that logs on to the resource. |
| **HOST** | The resource where the activity runs. |
| **START** | When the actions of the activity started. |
| **END** | When the session is scheduled to end. |
| **STATUS** | The state of the session, such as Failed or Completed. |
| **ACTIVITY** | The activity. Click the link to open it. |

Select a session and click **End Session** to cancel it, or **View Logs** to open its log. **View Logs** stays disabled until you select a row. For the session states and the log viewer, see [Manage active and scheduled sessions](/docs/privilegesecure/26.07/admin/sessions/active-sessions.md) and [View session logs](/docs/privilegesecure/26.07/admin/sessions/session-logs.md).

### Policies

The **Policies** tab lists the access policies that include the account. The columns are **NAME**, **ACTIVITY**, and **LAST SESSION**. **LAST SESSION** shows `<never>` when the account hasn't used the policy and activity.

Click **Add** to open the **Add Account to Policies** window. Move one or more policies from **Available Policies** to **Policies to Add**, then click **Okay**. Select a policy and click **Remove** to take the account out of it.

To create or change policies, see [Access policies](/docs/privilegesecure/26.07/configuration/access-policies/overview.md).

### Local Rights

The **Local Rights** tab appears for domain users. It lists the local groups on resources where the user is a member. The columns are **NAME** (the group) and **HOST** (the resource). The tab shows **None** when the user has no local rights.

### Members

The **Members** tab appears for groups. It lists the members of the group with their type, name, user principal name (UPN), security identifier (SID), email address, and last sign-in. Use **Search Group Members...** to find a member.

### History

The **History** tab lists events for the account: successful and failed sign-ins, one-time token creation, and invalid MFA codes. The columns are **STATUS**, **TIME**, **USER**, **ACCESS POLICY**, **EVENT MESSAGE**, and **SESSION ID**. Select an event and click **View Logs** to open the session log for it.

Check this tab first when a user reports that they can't sign in.

### Authentication Connector

The **Authentication Connector** tab sets how the account proves its identity at sign-in. It lists **Internal MFA**, then the built-in **Not Required** option and every connector in alphabetical order, with a check mark on the active one. The built-in Duo entry and any RADIUS, OpenID Connect, or SAML connectors that an administrator adds also appear.

| Choice | Behavior |
|---|---|
| **Internal MFA** | The user registers an authenticator app and enters a one-time code at sign-in. |
| A connector you added | The user signs in through that connector, for example Duo. |
| **Not Required** | The user signs in with a user name and password only. |

:::warning
**Not Required** removes the second factor for the account. Use it only for users who already pass MFA before they reach the console, such as users on a protected VPN.
:::

When a user belongs to groups that use different connectors, a precedence order decides which connector applies. See [Authentication](/docs/privilegesecure/26.07/configuration/authentication/overview.md).

### Properties

The **Properties** tab appears for local users. It holds **Display Name**, **SamAccountName**, **Department**, **User Principal Name**, and **Email**.

### User Roles and Group Roles

The **User Roles** and **Group Roles** tabs list the roles assigned to the account. The columns are **ROLE**, **DESCRIPTION**, and **CREATED**. The tab shows **None** when the account has no role.

Click **Add** to open the **Add Roles** window, or select a role and click **Remove** to take it away. To assign roles, see [Assign administrators, reviewers, and auditors](/docs/privilegesecure/26.07/admin/roles/assign-roles.md).

## Reset a user's MFA

Reset MFA when a user loses their authenticator device. The **Reset MFA** button appears only when the account uses **Internal MFA**. It is hidden when the account uses any other connector, such as Duo, or **Not Required**.

1. In the left navigation, click **Users & Groups**.
2. Click the name of the user to open the details page.
3. Click **Reset MFA**.
4. Click **Reset MFA** in the confirmation window.

The user registers a new authenticator the next time they sign in.

### Example

A user replaces their phone and can't produce a one-time code. An administrator opens the user's details page, clicks **Reset MFA**, and confirms. At the next sign-in, the user scans the new QR code with the authenticator app on the new phone.

After the user enters the password, the **Register Authenticator** page shows the QR code and the shared key. The user adds the key to the authenticator app, enters the code it shows in **Verification Code**, and continues. The page then shows recovery codes.

## Sign-in lockout and unlocking

An account can be blocked from signing in through two routes. The two blocks clear in different ways.

| Block | How it happens | How it clears |
|---|---|---|
| Administrator lock | An administrator clicks **Lock Account** on the details page, or locks the account from the active sessions view. | An administrator unlocks the account. |
| Failed-sign-in lockout | The account enters a wrong password too many times in a row. | The lockout expires, or an administrator unlocks the account. |

The **LOCKED** column on the **Users & Groups** page shows whether the account is blocked. A blocked user can't sign in or create a session.

From version 26.07.3, Privilege Secure refuses sign-in for a locked account. A locked account that tries to create a session gets the message "This account is locked and cannot create a new session."

### Failed-sign-in lockout rules

After 5 failed sign-in attempts in a row, the account is locked out for 5 minutes. The lockout time is the same each time. A successful sign-in resets the count of failed attempts. While the lockout lasts, the sign-in is refused even with the correct password. You can't change the number of attempts or the lockout time.

Privilege Secure counts the failed attempts itself, so the lockout applies to domain users and to local users alike.

The lockout applies to every account, including the administrator created during setup.

### Unlock an account

1. In the left navigation, click **Users & Groups**.
2. Click the name of the locked user to open the details page.
3. Click **Unlock Account** in the header. It replaces **Lock Account** while the account is locked.

**Unlock Account** clears both blocks: an administrator lock and a failed-sign-in lockout.

To clear a failed-sign-in lockout without an administrator, the user waits for the lockout time to pass.

### Example

A user mistypes a password five times. The **LOCKED** column shows the account as locked. The user can try again after 5 minutes, or an administrator can open the details page and unlock the account at once.

### Keep a second administrator

If the only administrator is locked out, no one can unlock the account from the console. Keep at least two accounts in the Administrator role, and keep one of them as a local account that uses a different sign-in path from your domain. See [Assign administrators, reviewers, and auditors](/docs/privilegesecure/26.07/admin/roles/assign-roles.md).

Local users and the built-in administrator account check their passwords in Privilege Secure, so they stay usable when domain sign-in is unavailable. Domain users are checked against the domain.

{/* TODO verify: the supported recovery steps when every administrator is locked out. The console has no path for it, and the code and public sources don't describe a supported procedure. */}

### Locked accounts in Active Directory

The lockout described here applies to signing in to the Netwrix Privilege Secure console. It is separate from Active Directory (AD) account lockout on managed accounts. See [Active Directory sync and scan problems](/docs/privilegesecure/26.07/troubleshooting/ad-sync-and-scans.md).
