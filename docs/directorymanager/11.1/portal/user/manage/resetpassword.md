---
title: "Reset a Password in Directory Manager"
description: "Reset your own identity store password or, with the right permissions, another user's password from the Directory Manager portal."
keywords:
  - reset password
  - Directory Manager portal
  - identity store password
  - password policy
  - Password Policy Enforcer
sidebar_position: 30
---

# Reset a Password in Directory Manager

Use the Directory Manager portal to reset passwords for user accounts. You can reset your identity store password and, if you have the rights, the passwords of other users in the connected identity store.

The new password must conform to the password policy the administrator has defined for the identity store. The administrator can enable either the [Directory Manager Password Policy](/docs/directorymanager/11.1/admincenter/securityrole/policy/password.md) or Netwrix Password Policy Enforcer policies for the identity store.

To reset a password:

1. On the My Dashboard page of the Directory Manager portal, search for the user whose password you need to reset. See the [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.1/portal/generalfeatures/search.md) topic for more information.
2. Select the account from the list whose password you want to reset.
3. Select the identity store where the account exists from the identity store dropdown list. Your logged-in account is selected by default.
4. Enter the identity store account name in the **User name** box.
5. Select **Reset Password** on the toolbar.
6. Enter the information for the following fields:

   - Identity Store: shows the name of the identity store the portal is connected to.
   - User name: shows your logged-on user name. If you have the rights to reset the passwords for other user accounts, enter the login name of a user.
   - New password and Confirm New password: enter a new password for the specified user. The new password must conform to the rules of the applied password policy for the identity store.

7. Click **Save**.
