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

To change it, provide your existing password and then a new one. The new password must meet the password policy the administrator defined for the identity store. The administrator can enable either the [Directory Manager Password Policy](/docs/directorymanager/11.2/admincenter/securityrole/policy/password.md) or Netwrix Password Policy Enforcer policies for the identity store.

:::note
Microsoft Entra ID users with MFA enabled can't change their passwords in Directory Manager. If they try, the following message appears:
:::

![Error message shown when a Microsoft Entra ID user with MFA tries to change a password](/images/directorymanager/11.2/portal/user/manage/changepasswordentraiduser.webp)

If the user's account is a master account, you also can't change the passwords of its child accounts in Directory Manager.

To change your password:

1. In the portal, click your profile info in the top right corner and select **Change password**.

2. In the Select your account section, review your account and its linked accounts, if any. Your logged-in account is selected.

   The blue bar shows the following:

   - Password Policy: Minimum Length – The minimum number of characters the new password must contain.
   - Password Complexity – Whether password complexity rules apply. Hover the mouse over **Enabled** to view the rules.

3. In the Change Password section, do the following:

   - Enter the password of your selected account in the **Current Password** box.
   - Enter your new password in the **New Password** box. It must meet the rules of the password policy applied to the identity store.
   - Enter the new password again in the **Confirm New Password** box.

4. Click **Change Password**.

   If you reuse an old password that doesn't meet the Enforce password history policy of the provider, a message informs you that the password must be different from the old one.

5. When the password change succeeds, the message "Password has been reset successfully." appears. Click **OK**.
