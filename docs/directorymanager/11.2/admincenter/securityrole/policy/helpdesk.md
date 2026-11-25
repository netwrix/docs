---
title: "Helpdesk Policy for Security Roles in Directory Manager"
description: "Set restricted or unrestricted mode and password reset options for helpdesk role members who reset passwords, unlock accounts, and unenroll users."
keywords:
  - Helpdesk policy
  - restricted mode
  - unrestricted mode
  - password reset
  - account unlock
  - security questions
sidebar_position: 70
---

# Helpdesk Policy for Security Roles in Directory Manager

The Helpdesk policy is for the helpdesk role in an identity store.

Helpdesk role members use the Helpdesk node in Admin Center to reset the domain account passwords
and unlock accounts of identity store users. They can also unenroll identity store accounts of users
in Directory Manager. They can also view the actions that users perform in the identity store,
such as password change or reset, account enrollment or unenrollment, and the date and time they signed
in to Directory Manager.

:::note
Grant the helpdesk role the following permissions in an identity store to enable
them to perform their job:
:::


- Reset Any Password
- Unlock Any Account
- Unenroll

If these permissions are denied, the Helpdesk policy has no impact, because role members aren't
authorized to perform the respective operations. See
[Password Management](/docs/directorymanager/11.2/admincenter/securityrole/permissions.md#password-management) in the
[Security Role Permissions in Directory Manager](/docs/directorymanager/11.2/admincenter/securityrole/permissions.md) topic.

The Helpdesk policy defines:

- Whether helpdesk role members operate under the restricted or unrestricted mode when
  performing the account unlock, account unenroll, and password reset functions.
- The password reset options available to helpdesk role members.

## Set Restricted Mode

You can apply all or any of the following restrictions to a helpdesk role under the restricted mode:

- Limit helpdesk users to resetting passwords, unlocking user accounts, and unenrolling accounts that reside
  in a specific OU.
- Require helpdesk users to authenticate end users before resetting their passwords or unlocking
  their identity store accounts.
- Specify the minimum number of security questions helpdesk users must use to authenticate
  end users.

Under this mode, helpdesk role members can't perform password reset and account unlock for
unenrolled users.

### Limit Helpdesk to Manage Users in a Specific OU

You can specify a container to limit helpdesk users to resetting passwords, unenrolling users, and unlocking
accounts of users that reside in that container.


1. In Admin Center, click **Identity Stores** in the left pane.

2. On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

3. Click **Security Roles** under Settings in the left pane.

4. On the Security Roles page, click **Edit** for a security role. This can be the built-in
Helpdesk role or any role that you want to define the Helpdesk policy for.

5. On the Edit Security Role page, click **Specify policies for the members** in the Policies
area.

6. On the Add Policies pane, click the **Helpdesk** tab.

7. Select the **Restricted Mode** tile.

8. Click **Add** next to Add Container. Then select a container on the Add Container dialog
box and click **Add**. The container name is displayed on the Helpdesk tab.  
Helpdesk users can reset passwords, unenroll users, and unlock the accounts of users residing in the
specified container only. When no container is selected, helpdesk users can perform these operations
for all users in the identity store.

- To change the container – Click **Modify Container** and use the **Add Container** dialog box to
  select another container.
- To remove the container – Click **Remove** for a container to remove it.

9. Click **OK**.

Step 10 – On the Edit Security Role page, click **Update Security Role**.

Step 11 – On the Security Roles page, click **Save**.

### Enforce Helpdesk to Authenticate Users

Under the restricted mode, you can require helpdesk users to authenticate users before resetting
their passwords and unlocking their accounts.

When a helpdesk user receives an account unlock or password reset request from an end user, the helpdesk user must
authenticate the user over the phone before carrying out the requested operation. This authentication is
done through all or some of the authentication types the user's account is enrolled with.


1. In Admin Center, click **Identity Stores** in the left pane.

2. On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

3. Click **Security Roles** under Settings in the left pane.

4. On the Security Roles page, click **Edit** for a security role. This can be the built-in
Helpdesk role or any role that you want to define the Helpdesk policy for.

5. On the Edit Security Role page, click **Specify policies for the members** in the Policies
area.

6. On the Add Policies pane, click the **Helpdesk** tab.

7. Select the **Restricted Mode** tile.

<!-- vale Netwrix.Contractions = NO -->

8. Select the **Do not allow Helpdesk to reset password or unlock account without User’s
interaction** checkbox, and then select one of the following options:

<!-- vale Netwrix.Contractions = YES -->

- **Enforce multifactor authentication as applies to end user:** to force helpdesk role members to
  authenticate an end user according to the authentication policy defined for the security role of that
  user. See the
  [Enforce Authentication Types for Multifactor Authentication](authentication.md#enforce-authentication-types-for-multifactor-authentication)
  topic.

**Or**

- **Enforce at least selected level of multifactor authentication:** to force helpdesk role members
  to authenticate end users with a minimum number of authentication types. Specify the number of
  authentication types in the box (for example, 2). Suppose an end user is enrolled with 4 authentication
  types. A helpdesk user can choose any 2 of these types to authenticate that user.

:::note
Helpdesk users can't authenticate end users with the Linked account, Windows Hello, and
YubiKey authentication types.
:::


9. Click **OK**.

Step 10 – On the Edit Security Role page, click **Update Security Role**.

Step 11 – On the Security Roles page, click **Save**.

### Enforce Helpdesk to Use Security Questions for Authentication

You can specify the minimum number of security questions helpdesk role members must use to
authenticate end users before unlocking their identity store accounts or resetting their passwords.

:::info
Before you apply this setting, ensure that the Security Questions
authentication type is enabled and configured for the identity store, as well as enforced as an
account enrollment method for security roles. See the
[Set Up Security Question Authentication in Directory Manager](/docs/directorymanager/11.2/admincenter/authpolicy/setupauth/securityquestions.md) topic.
:::



1. In Admin Center, click **Identity Stores** in the left pane.

2. On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

3. Click **Security Roles** under Settings in the left pane.

4. On the Security Roles page, click **Edit** for a security role. This can be the built-in
Helpdesk role or any role that you want to define the Helpdesk policy for.

5. On the Edit Security Role page, click **Specify policies for the members** in the Policies
area.

6. On the Add Policies pane, click the **Helpdesk** tab.

7. Select the **Restricted Mode** tile.

8. Select the **Helpdesk must verify answers of at least x Questions** checkbox and specify a
number that indicates the number of questions to be answered.  
For security and privacy reasons, answers to security questions aren't visible to helpdesk users.
Helpdesk users must type in the answers that end users provide over the phone for verification.

:::note
If a user hasn't enrolled their account using security questions, the helpdesk user
gets an error message when they attempt to authenticate this user for password reset or account
unlock.
:::


9. Click **OK**.

Step 10 – On the Edit Security Role page, click **Update Security Role**.

Step 11 – On the Security Roles page, click **Save**.

## Set Unrestricted Mode

The unrestricted mode enables helpdesk users to reset passwords and unlock accounts of identity
store users without authenticating them through the authentication types they enrolled their
accounts with.

- When a helpdesk user operating under the unrestricted mode receives an account unlock request from an end user, the helpdesk user
  can directly unlock the account of the requester.
- When a helpdesk user operating under this mode receives a password reset request from an end user, the helpdesk user
  can directly reset the password or send a secure password reset link to the requester. See the
  Specify a Password Reset Method topic.


1. In Admin Center, click **Identity Stores** in the left pane.

2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
**Edit**.

3. Click **Security Roles** under **Settings** in the left pane.

4. On the **Security Roles** page, click **Edit** for a security role. This can be the
built-in Helpdesk role or any role that you want to define the Helpdesk policy for.

5. On the **Edit Security Role** page, click **Specify policies for the members** in the
**Policies** area.

6. On the **Add Policies** pane, click the **Helpdesk** tab.

7. Click the **Unrestricted Mode** tile.

8. Click **OK**.

9. On the **Edit Security Role** page, click **Update Security Role**.

Step 10 – On the **Security Roles** page, click **Save**.

## Specify Password Reset Options

As part of the Helpdesk policy, you can:

- Enable helpdesk role members to generate a new password or a secure password reset link, or both,
  and communicate it to the end users.
- Force end users to change the password the next time they sign in to their workstations.

:::tip
These settings are available if the _Reset Any Password_ permission is granted to the
Helpdesk role in the identity store.
:::

### Specify a Password Reset Method

You can enable helpdesk role members to reset user account passwords by any of the following
methods, or limit them to use one of these methods:

- Generate a new password and communicate it to the end user by SMS, email, or both.
- Generate a secure password reset link and send it to the end user by SMS, email, or both. The
  user must click the secure password reset link to reset their password.


1. In Admin Center, click **Identity Stores** in the left pane.

2. On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

3. Click **Security Roles** under Settings in the left pane.

4. On the Security Roles page, click **Edit** for a security role. This can be the built-in
Helpdesk role or any role that you want to define the Helpdesk policy for.

5. On the **Edit Security Role** page, click **Specify policies for the members** in the
**Policies** area.

6. On the Add Policies pane, click the **Helpdesk** tab.

7. Select one or both of the following options to specify the password reset method:

- Allow Helpdesk to Reset Password – Select this checkbox to enable helpdesk users to generate new
  passwords and communicate them to end users by SMS or email. Clear this checkbox to prevent
  helpdesk role members from generating new passwords.
- Allow Helpdesk to Send Secure Password Link to End User – Select this checkbox to enable helpdesk
  users to generate a secure password reset link and send it to end users by SMS, email, or both.
  End users must click the secure password reset link to reset their identity store passwords.

When you select both the **Allow Helpdesk to Reset Password** and **Allow Helpdesk to Send Secure
Password Link to End User** checkboxes, helpdesk role members can use any method to reset an end
user's password.

8. Click **OK**.

9. On the Edit Security Role page, click **Update Security Role**.

Step 10 – On the Security Roles page, click **Save**.

:::note
(1) You must link an SMS gateway account with the identity store for an SMS to be sent to the
end users' mobile phones. See the
[Link an SMS Gateway Account to an Identity Store](/docs/directorymanager/11.2/admincenter/identitystore/configure/smsauthentication.md#link-an-sms-gateway-account-to-an-identity-store)
topic.  
(2) You must configure an SMTP server for the identity store for email to be sent to end users. See
the [Configure an SMTP Server in Directory Manager](/docs/directorymanager/11.2/admincenter/identitystore/configure/smtpserver.md) topic.
:::


### Force Users to Change Password on Next Logon

When a helpdesk user resets the password of an end user, it's always safe to force the end user to
change the password the next time they sign in to their workstations.


1. In Admin Center, click **Identity Stores** in the left pane.

2. On the Identity Stores page, click the ellipsis button for an identity store and select
**Edit**.

3. Click **Security Roles** under Settings in the left pane.

4. On the Security Roles page, click **Edit** for a security role. This can be the built-in
Helpdesk role or any role that you want to define the Helpdesk policy for.

5. On the Edit Security Role page, click **Specify policies for the members** in the
**Policies** area.

6. On the Add Policies pane, click the **Helpdesk** tab.

7. Select the **User must change password at next logon** checkbox to force users to change
their passwords when they sign in to their workstations for the first time after password reset.

8. Click **OK**.

9. On the Edit Security Role page, click **Update Security Role**.

Step 10 – On the Security Roles page, click **Save**.