---
title: "Change your password"
description: "Change your password"
sidebar_position: 50
---

# Change your password

You can change the password of your identity store account provided that the administrator has
granted you the required permissions. After changing it, use the new password to sign into GroupID
and any other application that uses your domain account.

To do this, provide the existing password and then a new password to replace it. The new password
must conform to the password policy the administrator has defined for your role in the connected
identity store.

NOTE: Microsoft Entra ID users with multifactor authentication enabled cannot change their passwords
in GroupID. The following message is displayed:

![Change Password error message for Entra ID user](/images/directorymanager/11.0/portal/user/manage/changepasswordentraiduser.webp)

If the user's account is a master account, password of its child accounts also cannot be changed in
GroupID.

**Follow these steps to change your password:**

1. In GroupID Portal, click your profile info in the top right corner and select **Change Password**
   on the **My Account** panel.
2. In the **Select the accounts to change their password** section, your account and its linked
   accounts, if any, are listed. Your logged in account is selected.
3. In the **Change Password** section, do the following steps:

    1. In the **Current Password** box, type the password of your account you are logged on with on
       the portal.
    2. Type your new password in the **New password** box. On typing the new password, the
       **Password Acceptance** box appears. The new password must meet the password complexity
       requirements and conform to the password complexity rules defined by the GroupID
       administrator for the identity store.

        To meet the password complexity requirements, the password must:

        1. Be at least as per the characters length defined in the password policy of the provider.
        2. Contain uppercase and lowercase characters, digit or special character:

            - English uppercase characters (A through Z)
            - English lowercase characters (a through z)
            - Base 10 digits (0 through 9)
            - Special characters (for example, !, $, #, %)

    3. Type the new password for the selected account(s) in the **Confirm New Password** box.

4. Click **Change Password**.

    If you have reused an old password and it does not meet the **Enforce password history** policy
    of the provider, a message inform you that the password must be different from the old one.

5. On successful change password, the message,"Password has been reset successfully." is displayed.
6. Click **OK**.

**See Also**

- [Access Portal](/docs/directorymanager/11.0/welcome/login.md)
- [Dashboard](/docs/directorymanager/11.0/welcome/dashboard.md)
