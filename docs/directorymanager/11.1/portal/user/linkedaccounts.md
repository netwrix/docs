---
title: "Link Accounts Across Identity Stores in Directory Manager"
description: "Link a user's accounts from multiple identity stores to one enrolled master account so they can reset passwords and unlock accounts from a single profile."
keywords:
  - linked accounts
  - master account
  - link Entra ID account
  - unlink account
  - Allow Authentication
sidebar_position: 40
---

# Link Accounts Across Identity Stores in Directory Manager

A user can have accounts in multiple identity stores in Directory Manager. Without linking, the user must enroll each account separately before they can reset its password or unlock it.

To avoid separate enrollment, the user enrolls one account in Directory Manager and links the other accounts to it. After linking, the enrolled account becomes the master account.

A user can then unlock or reset the password of any linked account through the authentication policy associated with the master account.

A linked account can't be enrolled or used to sign in to Directory Manager. Users must sign in with their master account credentials.

When two accounts are linked, notification emails go to both the master account and the linked account, provided that notifications are configured for the respective identity stores in Admin Center. Unlinking an account also sends notifications.

## Link an account

Enroll an identity store account in Directory Manager. This account becomes the master account, and you can link other identity store accounts to it.

To link an account:

1. Open the Linked Account page:

   - In the Directory Manager portal, click **Users** in the left pane and select **Linked Account**.

   **OR**

   - In the SSPR portal, click the **Linked Accounts** tile on the main portal page.

2. On the My Linked Accounts page, select the account you want to link and click **Link Account**.

3. On the **Directory Manager Authenticate** window, provide the credentials for the account to link to the master account. A message, _Account has been successfully linked_, is displayed.

   If the master account isn't enrolled yet, it automatically gets enrolled when an account is linked to it.

   :::note
   An already enrolled or linked account can't be linked to a master account.
   :::

4. Select the **Allow Authentication** option for the accounts you want to use to authenticate with, while unlocking any linked accounts or resetting passwords of linked accounts.

   If you don't enable it for the master or child accounts, the Link Account authentication type can't be used for enrollment and authentication in Directory Manager.

   If in the multifactor authentication policy for your role:

   - Only Link Account authentication is defined, then a message appears that Link Account authentication is disabled.
   - Other authentication types are defined along with the Link Account authentication, then you can use those authentication types to unlock your account and reset the password of your identity store account.

5. To link another account, click **Link Account** again and repeat steps 3 and 4.

## Link a Microsoft Entra ID account

The Microsoft Entra ID account that you want to link with must be signed in to the Microsoft Entra ID portal in the same browser. Use the Sign in with a different account option in the Microsoft Entra ID portal to sign in to multiple accounts.

![Microsoft Entra ID portal showing the Sign in with a different account option](/images/directorymanager/11.1/portal/user/linkntraidacc.webp)

To link a Microsoft Entra ID account:

1. Open the Linked Account page:

   - In the Directory Manager portal, click **Users** in the left pane and select **Linked Account**.

   **OR**

   - In the SSPR portal, click the **Linked Accounts** tile on the main portal page.

2. On the My Linked Accounts page, select the account you want to link to the master account and click **Link Account**.

3. On the Directory Manager Authenticate window, click the SAML button or image for the configured SAML provider in Directory Manager. The following window is displayed:

   ![Microsoft Entra ID portal listing multiple signed-in accounts to choose from](/images/directorymanager/11.1/portal/user/entraidsigninusers.webp)

4. Select the account you want to link to. You are redirected back to the My Linked Account page of the Directory Manager portal, and a message **Account has been successfully linked** is displayed.

   If the master account isn't enrolled yet, it automatically gets enrolled when an account is linked to it.

   :::note
   An already enrolled or linked account can't be linked to a master account.
   :::

5. Turn on the **Allow Authentication** button against the accounts you want to use to authenticate with, while unlocking any linked accounts or resetting passwords of linked accounts.

   If you don't enable it for either the master or child accounts, the Link Account authentication type can't be used for the master account or the child accounts.

   If in the multifactor authentication policy for your role:

   - Only Link Account authentication is defined, then a message appears that Link Account authentication is disabled.
   - Other authentication types are defined along with the Link Account authentication, then you can use those authentication types to unlock your account and reset the password of your identity store account.

6. To link another account, click **Link Account** again and repeat steps 2 through 4.

## View your linked accounts

On the Directory Manager Authenticate page, sign in with your master account. Then do one of the following:

- In the Directory Manager portal, click **Users** in the left pane and select **Linked Account** to view your linked accounts.

**OR**

- In the SSPR portal, click the **Linked Accounts** tile on the main portal page.

## Unlink a linked account

To unlink a linked account:

1. Open the Linked Account page:

   - In the Directory Manager portal, click **Users** in the left pane and select **Linked Account**.

   **OR**

   - In the SSPR portal, click the **Linked Accounts** tile on the main portal page.

2. On the My Linked Account page, select the checkbox for the account you want to unlink.

3. Click **Un-Link Account**. A message asks if you want to unlink. Click **Yes**.
