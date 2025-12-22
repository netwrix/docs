---
title: "Change your password"
description: "Change your password"
sidebar_position: 50
---

# Change your password

You can change the password of your identity store account. After changing it, use the new password
to sign into Directory Manager and any other application that uses your domain account.

To do this, provide the existing password and then a new password to replace it. The new password
must conform to the password policy the administrator has defined for the identity store.
Administrator can either enable
[Directory Manage Password Policy ](/docs/directorymanager/11.1/admincenter/securityrole/policy/password.md) or Netwrix
Password Policy Enforcer policies for the identity store.

:::note
MFA enabled Microsoft Entra ID users cannot change their passwords in Directory Manager. If
they try to do so, the following message is displayed:
:::


![Change Password error message for Entra ID user](/images/directorymanager/11.1/portal/user/manage/changepasswordentraiduser.webp)

If the user's account is a master account, password of its child accounts also cannot be changed in
Directory Manager.

Follow these steps to change your password.

Step 1 – In the portal, click your profile info in the top right corner and select **Change
password**.

Step 2 – The Select your account section lists your account and its linked accounts, if any. Your
logged in account is selected.

Notice the following in the blue bar:

- Password Policy: Minimum Length – Displays the minimum number of characters the new password must
  contain
- Password Complexity – Displays whether password complexity rules apply. Hover the mouse over
  _Enabled_ to view the rules.

Step 3 – In the Change Password section, do the following:

- Type the password of your selected account in the **Current Password** box.
- Type your new password in the **New Password** box. The new password must conform to the rules of
  the applied password policy for the identity store.
- Type the new password in the **Confirm New Password** box.

Step 4 – Click **Change Password**.

If you have reused an old password that does not meet the Enforce password history policy of the
provider, a message informs you that the password must be different from the old one.

Step 5 – On successful change password, the message,"Password has been reset successfully." is
displayed. Click **OK**.
