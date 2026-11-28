---
title: "Change Your Password in GroupID"
description: "Change your identity store account password in Admin Center, including limits for MFA-enabled Microsoft Entra ID users and master accounts."
keywords:
  - change password
  - Admin Center password
  - Microsoft Entra ID MFA
  - master account
sidebar_position: 50
---

# Change Your Password in GroupID

You can change the password of your identity store account. After changing it, use the new password
to sign in to GroupID and other applications that use your domain account.

What do you want to do?

- [Change Your Password](#change-your-password)

## Change Your Password

Step 1 – In Admin Center, click your name in the top right corner and select **Change Password**.

Step 2 – On the Change Password page, enter your current password in the **Current Password** box.
By default, password characters are represented by dots. Use the toggle button in the box to show or
hide characters.

Step 3 – Enter a new password in the **New Password** and **Confirm Password** boxes.

Step 4 – Click **Change Password**.

:::note
MFA-enabled Microsoft Entra ID users can't change their passwords in GroupID. If they try
to use the option, the following message is displayed.
:::

![Message shown when an MFA-enabled Microsoft Entra ID user tries to change a password in Admin Center](/images/directorymanager/11.0/admincenter/general/admincenterchangepassword.webp)

If the user's account is a master account, the passwords of its child accounts also can't be changed
in GroupID.

**See Also**

- [Monitor GroupID with the Admin Center Dashboard](/docs/directorymanager/11.0/signin/concepts/dashboard.md)
- [Navigate Admin Center in GroupID](/docs/directorymanager/11.0/signin/concepts/navigation.md)
