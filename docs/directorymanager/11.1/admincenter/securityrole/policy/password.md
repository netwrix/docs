---
title: "Password Policy"
description: "Directory Manage Password Policy"
sidebar_position: 60
---

# Password Policy

Using Directory Manager, you can implement a Password policy (a) for an identity store, (b) for
security roles in an identity store, or (c) both at the identity store and role levels.

- For an identity store, you can specify rules and restrictions for identity store account
  passwords.
- For a security role, you can specify validation checks for passwords that role members create for
  their identity store accounts using Directory Manager. Hence, password validation checks are
  role-specific

The Password policy also enables you to manage settings related to security questions and account
lockout for security roles in an identity store.

## Set Password Restrictions and Rules for an Identity Store

See the [Configure Password Options](/docs/directorymanager/11.1/admincenter/identitystore/configure/passwordoptions.md)
topic.

## Define Security Question Settings for a Security Role

You can specify certain settings related to security questions for user roles in an identity store.
As a result, different roles in an identity store can have different settings for the following:

- the number of questions role members must select to enroll their account in Directory Manager
- the minimum number of characters an answer should contain

**To specify settings for security questions:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Password** tab.  
   The following settings in the **Password Policies** area relate to security questions:

    | Setting | Description |
    | --- | --- |
    | Number of Questions | The number of security questions role members must select while enrolling their accounts in Directory Manager for multifactor authentication or second factor authentication. The default number is 4. <br />Changing the number of security questions for a role has no impact on already enrolled role members unless they update their security questions information. |
    | Minimum Answer Length | The minimum number of characters that a role member must type when saving the answer to a security question at the time of account enrollment. Answers with less than the specified number of characters will not be saved. |

7. Click **OK**.
8. On the **Edit Security Role** page, click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

## Specify an Authentication Lockout Policy for a Security Role

The authentication lockout policy comes into play when users authenticate for multifactor
authentication and second factor authentication in Directory Manager. The policy controls the
following:

- The consecutive number of times a role member can provide a wrong value for an authentication type
  in Directory Manager, after which authentication is disabled.
- The duration for authentication to remain disabled.

With authentication disabled, role members cannot sign into Directory Manager.

:::note
The authentication lockout policy only disables the user account in Directory Manager. It does
not disable it in the provider, such as Active Directory.
:::


**To specify an authentication lockout policy:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Password** tab.  
   The following settings in the **Password Policies** area control authentication lockout:

    |     | Setting                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | --- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | 1.  | Failed Authentication Attempts Threshold | The number of consecutive attempts to provide a wrong value for an authentication type. Authentication is disabled for a user when the number of consecutive unsuccessful attempts by him or her reach the number given here.                                                                                                                                                                                                 |
    | 2.  | Account Locked out Duration              | The number of minutes to disable authentication in Directory Manager after consecutive unsuccessful attempts to provide the right value for an authentication type. Note the following: - Authentication is automatically enabled after the specified duration. - Else it is enabled when, during the lockout period, the user correctly enters his or her identity store account credentials to sign into Directory Manager. |

7. Click **OK**.
8. On the **Edit Security Role** page, click **Update Security Role**.
9. On the **Security Roles** page, click **Save**.

## Specify Password Validation Checks for a Security Role

Identity providers have password validation and complexity policies defined, and users must follow
them while creating passwords. With Directory Manager, you can extend these policies.

Directory Manager enables you to specify password validation checks for a security role in an
identity store. This extended policy applies when:

- Role members change or reset their identity store account passwords using Directory Manager.
- Administrators or helpdesk members reset the identity store account passwords of role members
  using the Helpdesk section in Admin Center.

The policy does not apply when password is reset using the **Reset Password** option in user
properties in the Directory Manager portal.

**To specify password validation checks:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Password** tab.
7. Password validation settings are listed in the **Password Validation Options** area. Select the
   check box for a setting to apply it.

    |     | Setting                                             | Descriptions                                                                                                                              |
    | --- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
    | 1.  | Reject User Name in Password                        | Prevent role members from creating passwords that contain the user's account name.                                                        |
    | 2.  | Reject Display Name in Password                     | Prevent role members from creating passwords that contain the user's display name.                                                        |
    | 3.  | Reject First Name in Password                       | Prevent role members from creating passwords that contain the user's first name.                                                          |
    | 4.  | Reject Last Name in Password                        | Prevent role members from creating passwords that contain the user's last name.                                                           |
    | 5.  | Reject Number as First Character in Password        | Prevent role members from creating passwords that begin with a number.                                                                    |
    | 6.  | Reject Number as Last Character in Password         | Prevent role members from creating passwords that end with a number.                                                                      |
    | 7.  | Reject Consecutive Identical Characters in Password | Prevent role members from creating passwords that contain the consecutive use of identical characters.                                    |
    | 8.  | Enforce Password History (Domain Policy)            | Prevent role members from creating passwords that do not satisfy the password policy for password age/history, as defined for the domain. |

8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Configure Access Control** page, click **Save**.