---
title: "Linked Accounts"
description: "Linked Accounts"
sidebar_position: 40
---

# Linked Accounts

A user can have accounts in multiple identity stores in Directory Manager. They have to enroll each
of these accounts separately in Directory Manager before they can reset an account's password or
unlock it (in case it gets locked).

To eliminate the necessity of separate enrollment, a user can simply enroll one of these accounts in
Directory Manager and then link other accounts with it. Once it's done, the enrolled account becomes
the master account.

A user can then unlock or reset the password of any linked account through the authentication policy
associated with the master account.

Any account linked with the master account can neither be enrolled nor used to sign into Directory
Manager. Users must use their master account credentials to sign in.

When two accounts are linked, notification emails are sent to the master account as well as to the
linked account, provided that notifications are configured for the respective identity stores in
Admin Center. Un-linking an account also initiates notifications.

## Link an account

Enroll an identity store account in Directory Manager. This account becomes the master account, with
which you can link other identity store accounts that you may have.

Step 1 – In the Directory Manager portal, click **Users** in the left pane and select **Linked
Account**.

**OR**

In the SSPR portal, click the **Linked Accounts** tile on the main portal page.

Step 2 – On the My Linked Accounts page, select the account you want to link and click **Link
Account**.

Step 3 – On the **Directory Manager Authenticate** window, provide the credentials for the account
to link to the master account. A message, _Account has been successfully linked_, is displayed.

If the master account is not enrolled yet, it automatically gets enrolled when an account is linked
to it.

:::note
An already enrolled or linked account cannot be linked to a master account.
:::


Step 4 – Select the **Allow Authentication** option for the account(s) you want to use to
authenticate with, while unlocking any linked accounts or resetting passwords of linked accounts.

If you do not enable it for the master or child account(s), then the Link Account authentication
type cannot be used for enrollment and authentication in Directory Manager.

If in the multifactor authentication policy for your role:

- Only Link Account authentication is defined, then a message appears that Link Account
  authentication is disabled.
- Other authentication type(s) are defined along with the Link Account authentication, then you can
  use those authentication type(s) to unlock your account and reset the password of your identity
  store account.

Step 5 – To link another account, click **Link Account** again and repeat steps 3-4.

## Link a Microsoft Entra ID account

The Microsoft Entra ID account that you want to link with must be logged into the Microsoft Entra ID
portal in the same browser. Use the Sign in with a different account option in the Microsoft Entra
ID portal for logging into multiple accounts.

![Entra ID Sign In with a different account option](/images/directorymanager/11.1/portal/user/linkntraidacc.webp)

Step 1 – In the Directory Manager portal, click **Users** in the left pane and select **Linked
Account**.

**OR**

In the SSPR portal, click the **Linked Accounts** tile on the main portal page

Step 2 – On the My Linked Accounts page, select the account you want to link to the master account
and click **Link Account**.

Step 3 – On the Directory Manager Authenticate window, click the SAML button or image for the
configured SAML provider in Directory Manager. The following window is displayed:

![Multiple Signed in users in Entra ID portal](/images/directorymanager/11.1/portal/user/entraidsigninusers.webp)

Step 4 – Select the account you want to link to. You will be redirected back to the Directory
Manager portal’s My Linked Account page and a message **Account has been successfully linked** is
displayed.

If the master account is not enrolled yet, it automatically gets enrolled when an account is linked
to it.

:::note
An already enrolled or linked account cannot be linked to a master account.
:::


Step 5 – Turn on the **Allow Authentication** button against the account(s) you want to use to
authenticate with, while unlocking any linked accounts or resetting passwords of linked accounts.

If you do not enable it either for master or child account(s), then the Link Account authentication
type cannot be used both for master account and child account(s).

If in the Multifactor Authentication policy for your role:

- Only Link Account authentication is defined, then a message appears that Link Account
  authentication is disabled.
- Other authentication type(s) are defined along with the Link Account authentication, then you can
  use those authentication type(s) to unlock your account and reset password of your identity store
  account.

Step 6 – To link another account, click **Link Account** again and repeat steps 2-4.

## View your linked accounts

On the Directory Manager Authenticate page, sign in with your master account.

- In the Directory Manager portal, click **Users** in the left pane and select **Linked Account** to
  view your linked accounts.

**OR**

- In the SSPR portal, click the **Linked Accounts** tile on the main portal page.

## Un-link a linked account

Step 1 – In the Directory Manager portal, click **Users** in the left pane and select **Linked
Account**.

**OR**

In the SSPR portal, click the **Linked Accounts** tile on the main portal page.

Step 2 – On the My Linked Account page, select the check box for the account you want to unlink.

Step 3 – Click **Un-link Account**. A message is displayed, asking if you want to unlink. Click
**Yes**.
