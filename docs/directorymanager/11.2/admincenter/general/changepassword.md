---
title: "Change Your Password in Directory Manager"
description: "Change your identity store account password in Admin Center according to the password policy that applies to the identity store."
keywords:
  - change password
  - password policy
  - Password Policy Enforcer
  - Microsoft Entra ID MFA
  - master account
sidebar_position: 70
---

# Change Your Password in Directory Manager

You can change the password of your identity store account. After you change it, use the new password to sign in to Directory Manager and other applications that use your domain account.

You can change your password according to the password policy the administrator has enabled for the identity store. The administrator can enable either [Directory Manager Password Policy](/docs/directorymanager/11.2/admincenter/securityrole/policy/password.md) or Netwrix Password Policy Enforcer policies for the identity store.

## Change your password

1. In Admin Center, click your name in the top right corner and select **Change Password**.
2. On the Change Password page, enter your current password in the **Current Password** box. By default, dots represent password characters. Use the toggle button in the box to show or hide characters.
3. Enter a new password in the **New Password** and **Confirm Password** boxes. The new password must conform to the rules of the password policy applied to the identity store.
4. Click **Change Password**.

:::note
MFA enabled Microsoft Entra ID users can't change their passwords in Directory Manager. If they try to use the option, the following message appears.
:::

![Message shown when an MFA-enabled Microsoft Entra ID user tries to change a password in Admin Center](/images/directorymanager/11.2/admincenter/general/changepassword.webp)

If the user's account is a master account, Directory Manager also can't change the passwords of its child accounts.
