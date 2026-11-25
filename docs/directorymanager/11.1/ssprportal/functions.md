---
title: "Manage Your Identity Store Accounts in the SSPR Portal"
description: "Enroll, unlock, reset, change, and link identity store accounts using the functions in the Directory Manager SSPR portal."
keywords:
  - SSPR portal functions
  - account enrollment
  - unlock account
  - reset password
  - linked accounts
sidebar_position: 20
---

# Manage Your Identity Store Accounts in the SSPR Portal

When you launch the SSPR portal, the Welcome to the Directory Manager page lists the following functions:

- Enroll
- Change Password
- Reset Password
- Unlock

You can either click a function and then sign in to perform that function or first sign in and then
select a function. See the [Launch the Portal](overview.md#launch-the-portal) topic for additional
information.

When you sign in (without selecting any function), the main portal page is displayed. It lists the
following functions:

- Enroll
- Change Password
- Linked Accounts

Remember:

- The account enrollment and password change functions can be accessed from both the Welcome to the
  Directory Manager page and the portal's main page.
- The password reset and account unlock functions can only be accessed from the Welcome to the Directory Manager
  page.
- The linked account function can only be accessed from the portal's main page.

## Enroll your Account

Click the **Enroll** tile to enroll an unenrolled account. Then sign in to the portal, if not signed
in.

The Your Enrollments page opens, where you can enroll the identity store account you used to sign
in to the portal. Tabs on this page represent the different authentication types the administrator
has enabled for enrollment. See the [Enroll Your Account in Directory Manager](/docs/directorymanager/11.1/admincenter/general/enroll.md)
topic for enrollment details, starting at step 3.

## Unlock your Account

Click the **Unlock** tile to unlock your account. See the
[Unlock your Directory Manager account](/docs/directorymanager/11.1/portal/user/manage/unlockaccount.md) topic for additional information.

## Reset your Account Password

Click the **Reset Password** tile to reset your identity store account password. See the
[Reset Your Account Password in Directory Manager](/docs/directorymanager/11.1/portal/secondfactorauthentication/passwordreset.md) topic for additional information.

## Change your Account Password

You can change the password of any of your identity store accounts. Click the **Change Password**
tile. Then sign in to the portal, if not signed in. See
the [Change Your Password in Directory Manager](/docs/directorymanager/11.1/portal/user/manage/changepassword.md) topic for additional
information.

## Link your Identity Store Accounts

A user can link the accounts that they have in different identity stores, such as one account in
Active Directory and another in Microsoft Entra ID. This has several benefits:

- The user can enroll one account. When the user links another account to the enrolled account, the linked
  account is auto-enrolled. The enrolled account becomes the master account.
- A user can then unlock or reset the password of any linked account through the master account.

After signing in to the portal, click the **Linked Accounts** tile. See the
[Link Accounts Across Identity Stores in Directory Manager](/docs/directorymanager/11.1/portal/user/linkedaccounts.md) topic for additional information.
