---
title: "Helpdesk Policy"
description: "Helpdesk Policy"
sidebar_position: 70
---

# Helpdesk Policy

The Helpdesk policy is meant for the helpdesk role in an identity store.

Helpdesk role members use the Helpdesk node in Admin Center to reset the domain account passwords
and unlock accounts of identity store users. They can also unenroll identity store accounts of users
in GroupID. Moreover, they can view the actions that users perform in the identity store, such as
password change/reset, account enrollment/unenrollment, and the date and time they logged into
GroupID.

NOTE: The helpdesk role must be granted the following permissions in an identity store to enable
them to perform their job:

- Reset Any Password
- Unlock Any Account
- Unenroll

If these permissions are denied, the Helpdesk policy would have no impact, as role members would not
be authorized to perform the respective operations. See
[Password Management](/docs/directorymanager/11.0/signin/securityrole/permissions.md#password-management)
in the
[Security Role – Permissions](/docs/directorymanager/11.0/signin/securityrole/permissions.md)
topic.

The Helpdesk policy defines:

- Whether helpdesk role members should operate under the restricted or unrestricted mode when
  performing the account unlock, account unenroll, and password reset functions.
- The password reset options available to helpdesk role members.

NOTE: Account unlock is not supported in a Microsoft Entra ID identity store.

What do you want to do?

- [Set Restricted Mode](#set-restricted-mode)
    - [Limit Helpdesk to Manage Users in a Specific OU](#limit-helpdesk-to-manage-users-in-a-specific-ou)
    - [Enforce Helpdesk to Authenticate Users](#enforce-helpdesk-to-authenticate-users)
    - [Enforce Helpdesk to Use Security Questions for Authentication](#enforce-helpdesk-to-use-security-questions-for-authentication)
- [Set Unrestricted Mode](#set-unrestricted-mode)
- [Specify Password Reset Options](#specify-password-reset-options)
    - [Specify a Password Reset Method](#specify-a-password-reset-method)
    - [Force Users to Change Password on Next Logon](#force-users-to-change-password-on-next-logon)

## Set Restricted Mode

You can apply all or any of the following restrictions to a helpdesk role under the restricted mode:

- Limit helpdesk users to reset passwords, unlock user accounts, and unenroll accounts that reside
  in a specific OU.
- Enforce helpdesk users to authenticate end-users before resetting their passwords or unlocking
  their identity store accounts.
- Specify the minimum number of security questions helpdesk users must use to authenticate
  end-users.

Under this mode, helpdesk role members cannot perform password reset and account unlock for
unenrolled users.

### Limit Helpdesk to Manage Users in a Specific OU

You can specify a container to limit helpdesk users to reset passwords, unenroll users, and unlock
accounts of users that reside in that container.

**To specify a container:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Select the **Restricted Mode** tile.
8. Click **Add** next to **Add Container**. Then select a container on the **Add Container** dialog
   box and click **Add**. The container name is displayed on the **Helpdesk** tab.  
   Helpdesk users can reset passwords, unenroll users, and unlock the accounts of users residing in
   the specified container only. When no container is selected, helpdesk users can perform these
   operations for all users in the identity store.

    - **To change the container:** Click **Modify Container** and use the **Add Container** dialog
      box to select another container.
    - **To remove the container:** Click **Remove** for a container to remove it.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

### Enforce Helpdesk to Authenticate Users

Under the restricted mode, you can enforce helpdesk users to authenticate users before resetting
their passwords and unlocking their accounts.

On receiving an account unlock or password reset request from an end-user, the helpdesk user must
authenticate the user over phone before carrying out the requested operation. This authentication is
done through all or some of the authentication types the user's account is enrolled with.

**To enforce authentication:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Select the **Restricted Mode** tile.
8. Select the **Do not allow Helpdesk to reset password or unlock account without User's
   interaction** check box, and then select one of the following options:

    - **Enforce multifactor authentication as applies to end user:** to force helpdesk role members
      to authenticate an end-user as per the authentication policy defined for the security role of
      that user. See
      the[Enforce Authentication Types for Multifactor Authentication](/docs/directorymanager/11.0/signin/securityrole/policy/authentication.md#enforce-authentication-types-for-multifactor-authentication)
      topic.

        Or

    - **Enforce at least selected level of multifactor authentication:** to force helpdesk role
      members to authenticate end-users with x number of authentication types. Specify the number of
      authentication types in the box (say, 2). Suppose an end-user is enrolled with 4
      authentication types. A helpdesk user can choose any 2 of these types to authenticate that
      user.

    NOTE: Helpdesk users cannot authenticate end-users with the Linked account, Windows Hello, and
    YubiKey authentication types.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

### Enforce Helpdesk to Use Security Questions for Authentication

You can specify the minimum number of security questions helpdesk role members must use to
authenticate end-users before unlocking their identity store accounts or resetting their passwords.

RECOMMENDED: As a prerequisite to applying this setting, make sure that the Security Questions
authentication type is enabled and configured for the identity store, as well as enforced as an
account enrollment method for security roles. See the
[Set up Authentication via Security Questions](/docs/directorymanager/11.0/signin/authpolicy/setupauth/securityquestions.md)
topic.

**To enforce security questions for authentication:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Select the **Restricted Mode** tile.
8. Select the **Helpdesk must verify answers of at least x Questions** check box and specify a
   number that indicates the number of questions to be answered.  
   For security and privacy concerns, answers to security questions are not visible to helpdesk
   users. Helpdesk users have to type in the answers that end-users provide over phone for
   verification.

    NOTE: If a user has not enrolled his or her account using security questions, the helpdesk user
    will get an error message when he or she attempts to authenticate this user for password
    reset/account unlock.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Set Unrestricted Mode

The unrestricted mode enables helpdesk users to reset passwords and unlock accounts of identity
store users without authenticating them through the authentication types(s) they enrolled their
accounts with.

- On receiving an account unlock request from an end-user, a helpdesk user operating under the
  unrestricted mode can directly unlock the account of the requester.
- On receiving a password reset request from an end-user, a helpdesk user operating under this mode
  can directly reset the password or send a secure password reset link to the requester. See the
  [Specify a Password Reset Method](#specify-a-password-reset-method) topic.

**To set the unrestricted mode:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Click the **Unrestricted Mode** tile.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

## Specify Password Reset Options

As part of the Helpdesk policy, you can:

- Enable helpdesk role members to generate a new password or a secure password reset link, or both,
  and communicate it to the end-users.
- Force end-users to change the password the next time they sign to their workstations.

Remember, These settings are available if the _Reset Any Password_ permission is granted to the
Helpdesk role in the identity store.

### Specify a Password Reset Method

You can enable helpdesk role members to reset user account passwords by any of the following
methods, or limit them to use one of these methods:

- Generate a new password and communicate it to the end-user by SMS, email, or both mediums.
- Generate a secure password reset link and send it to the end-user by SMS or email or both. The
  user must click this link to reset his or her password.

**To specify a password reset method:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Select one or both of the following options to specify the password reset method:

    - **Allow Helpdesk to Reset Password** - Select this check box to enable helpdesk users to
      generate new passwords and communicate them to end-users by SMS or email. Clear this check box
      to prevent helpdesk role members from generating new passwords.
    - **Allow Helpdesk to Send Secure Password Link to End User** - Select this check box to enable
      helpdesk users to generate a secure password reset link and send it to end-users by SMS or
      email or both. End-users must click this link to reset their identity store passwords.

    When you select both the **Allow Helpdesk to Reset Password** and **Allow Helpdesk to Send
    Secure Password Link to End User** check boxes, helpdesk role members can use any method to
    reset an end user's password.

8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

NOTE: (1) An SMS gateway account must be linked with the identity store for an SMS to be sent on the
end-users' mobile phones. See the
[Link an SMS Gateway Account to an Identity Store](/docs/directorymanager/11.0/signin/identitystore/configure/smsauthentication.md#link-an-sms-gateway-account-to-an-identity-store)
topic.  
 (2) An SMTP server must be configured for the identity store for email to be sent to end-users. See
the
[Configure an SMTP Server](/docs/directorymanager/11.0/signin/identitystore/configure/smtpserver.md)
topic.

### Force Users to Change Password on Next Logon

When a helpdesk user resets the password of an end-user, it's always safe to force the end-user to
change the password the next time they login to their workstations.

**To force password change:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role. This can be the built-in
   Helpdesk role or any role that you want to define the Helpdesk policy for.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Helpdesk** tab.
7. Select the **Users must change password at next logon** check box to force users to change their
   passwords when they login to their workstations for the first time after password reset.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/signin/securityrole/overview.md)
- [Security Role Policies](/docs/directorymanager/11.0/signin/securityrole/policy/overview.md)
- [Authentication Policy](/docs/directorymanager/11.0/signin/authpolicy/authpolicy.md)
