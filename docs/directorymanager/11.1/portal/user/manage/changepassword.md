---
title: "Change Your Password in Directory Manager"
description: "Change your identity store password in the Directory Manager portal by providing your current password and a new one that meets the password policy."
keywords:
  - change password
  - Directory Manager portal
  - password policy
  - linked accounts
  - Microsoft Entra ID MFA
sidebar_position: 50
---

# Change Your Password in Directory Manager

You can change the password of your identity store account. After you change it, use the new password to sign in to Directory Manager and any other application that uses your domain account.

To do this, provide the existing password and then a new password to replace it. The new password
must conform to the password policy the administrator has defined for the identity store.
The administrator can enable either the [Directory Manager Password Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/password.md) or Netwrix
Password Policy Enforcer policies for the identity store.

:::note
Microsoft Entra ID users with MFA enabled can't change their passwords in Directory Manager. If they try, the following message appears:
:::


![Error message shown when a Microsoft Entra ID user with MFA tries to change a password](/images/directorymanager/11.1/portal/user/manage/changepasswordentraiduser.webp)

If the user's account is a master account, the passwords of its child accounts also can't be changed in Directory Manager.

To change your password:

Step 1 – In the portal, click your profile info in the top right corner and select **Change
password**.

Step 2 – The Select your account section lists your account and its linked accounts, if any. Your logged-in account is selected.

Notice the following in the blue bar:

- Password Policy: Minimum Length – Displays the minimum number of characters the new password must
  contain
- Password Complexity – Displays whether password complexity rules apply. Hover the mouse over
  _Enabled_ to view the rules.

Step 3 – In the Change Password section, do the following:

- Enter the password of your selected account in the **Current Password** box.
- Enter your new password in the **New Password** box. The new password must conform to the rules of
  the applied password policy for the identity store.
- Enter the new password in the **Confirm New Password** box.

Step 4 – Click **Change Password**.

If you reuse an old password that doesn't meet the Enforce password history policy of the
provider, a message informs you that the password must be different from the old one.

Step 5 – When the password change succeeds, the message "Password has been reset successfully." appears. Click **OK**.
