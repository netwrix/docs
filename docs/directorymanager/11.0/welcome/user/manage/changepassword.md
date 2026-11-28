---
title: "Change Your Password in GroupID"
description: "Change your identity store password in the GroupID portal by providing your current password and a new one that meets the password policy."
keywords:
  - change password
  - GroupID portal
  - password policy
  - linked accounts
  - Microsoft Entra ID MFA
sidebar_position: 50
---

# Change Your Password in GroupID

You can change the password of your identity store account provided that the administrator has
granted you the required permissions. After you change it, use the new password to sign in to
GroupID and any other application that uses your domain account.

To do this, provide the existing password and then a new password to replace it. The new password
must conform to the password policy the administrator has defined for your role in the connected
identity store.

:::note
Microsoft Entra ID users with multifactor authentication enabled can't change their passwords in
GroupID. If they try, the following message appears:
:::

![Error message shown when a Microsoft Entra ID user with MFA tries to change a password](/images/directorymanager/11.0/portal/user/manage/changepasswordentraiduser.webp)

If the user's account is a master account, the passwords of its child accounts also can't be
changed in GroupID.

**Follow these steps to change your password:**

1. In the GroupID portal, click your profile info in the top right corner and select **Change Password**
   on the **My Account** panel.
2. In the **Select the accounts to change their password** section, your account and its linked
   accounts, if any, are listed. Your signed-in account is selected.
3. In the **Change Password** section, do the following:

    1. Enter the password of the account you're signed in with on the portal in the **Current
       Password** box.
    2. Enter your new password in the **New password** box. When you enter the new password, the
       **Password Acceptance** box appears. The new password must meet the password complexity
       requirements and conform to the password complexity rules defined by the GroupID
       administrator for the identity store.

        To meet the password complexity requirements, the password must:

        1. Be at least as long as the length defined in the password policy of the provider.
        2. Contain uppercase and lowercase characters, a digit, or a special character:

            - English uppercase characters (A through Z)
            - English lowercase characters (a through z)
            - Base 10 digits (0 through 9)
            - Special characters (for example, !, $, #, %)

    3. Enter the new password for the selected accounts in the **Confirm New Password** box.

4. Click **Change Password**.

    If you reuse an old password that doesn't meet the **Enforce password history** policy
    of the provider, a message informs you that the password must be different from the old one.

5. When the password change succeeds, the message "Password has been reset successfully." appears.
6. Click **OK**.

**See Also**

- [Sign In to the GroupID Portal](/docs/directorymanager/11.0/welcome/login.md)
- [GroupID Portal Dashboard](/docs/directorymanager/11.0/welcome/dashboard.md)
