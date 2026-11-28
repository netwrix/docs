---
title: "Link Accounts Across Identity Stores in GroupID"
description: "Link a user's accounts from multiple identity stores to one enrolled master account so they can reset passwords and unlock accounts from a single profile."
keywords:
  - linked accounts
  - master account
  - link Entra ID account
  - unlink account
  - Allow Authentication
sidebar_position: 40
---

# Link Accounts Across Identity Stores in GroupID

In the GroupID portal, users can reset their accounts' passwords and unlock their
accounts through their linked accounts.

A user can have accounts in multiple identity stores configured in Admin Center. They must enroll
each of these accounts separately on the GroupID portal before they can reset its password
or unlock it.

To eliminate the need for separate enrollment, a user can enroll one of these accounts on the portal
and then link other accounts with it. Once that's done, the enrolled account becomes the master
account.

A user can then unlock or reset the password of any linked account through the authentication policy
associated with the master account.

Any account linked with the master account can neither be enrolled nor used to sign in to the
portal. Users must use their master account credentials to sign in to the portal.

When two accounts are linked, notification emails are sent to the master account as well as to the
linked account, provided that notifications are configured for the respective identity stores in
GroupID Admin Center. Unlinking an account also initiates notifications.

What do you want to do?

- [Link an account](#link-an-account)
- [View your linked accounts](#view-your-linked-accounts)
- [Unlink a linked account](#unlink-a-linked-account)

## Link an account

Enroll any one of your identity store accounts on the GroupID portal. This account becomes the
master account, with which you can link other identity store accounts that you may have.

1. In the GroupID portal, click **Users** in the left pane and select **Linked Account**.
2. On the **My Linked Accounts** page, select the account you want to link and click **Link
   Account**.
3. On the **GroupID Authenticate** window, provide the sign-in information for the account to link
   to the master account.
4. A message **Account has been successfully linked** appears.

    If the master account isn't enrolled yet, it automatically gets enrolled when an account is
    linked to it.

    :::note
    An already enrolled or linked account can't be linked to a master account.
    :::

5. Turn on the **Allow Authentication** button against the accounts you want to use to
   authenticate with, while unlocking any linked accounts or resetting passwords of linked accounts.

    If you don't enable it for either the master or child accounts, then the Link Account
    authentication type can't be used for the master account or the child accounts.

    If in the Multifactor Authentication policy for your role:

    - Only Link Account authentication is defined, then a message appears that Link Account
      authentication is disabled.
    - Other authentication types are defined along with the Link Account authentication, then you
      can use those authentication types to unlock your account and reset the password of your
      identity store account.

6. To link another account, click **Link Account** again and repeat steps 3 and 4.

## Link a Microsoft Entra ID account

The Entra ID accounts that you want to link with must be signed in to the Entra ID portal in the
same browser. Use the Sign in with a different account option in the Entra ID portal to sign in to
multiple accounts.

![Entra ID portal showing the Sign in with a different account option](/images/directorymanager/11.0/portal/user/linkntraidacc.webp)

1. In the GroupID portal, click **Users** in the left pane and select **Linked Account**.
2. On the **My Linked Accounts** page, select the account you want to link and click **Link
   Account**.
3. On the **GroupID Authenticate** window, click the SAML button or image for the
   configured SAML provider in GroupID. The following window appears:

    ![Entra ID portal listing multiple signed-in accounts to choose from](/images/directorymanager/11.0/portal/user/entraidsigninusers.webp)

4. Select the account you want to link to. You're redirected back to the GroupID
   portal’s My Linked Accounts page, and a message **Account has been successfully linked**
   appears.

    If the master account isn't enrolled yet, it automatically gets enrolled when an account is
    linked to it.

    :::note
    An already enrolled or linked account can't be linked to a master account.
    :::

5. Turn on the **Allow Authentication** button against the accounts you want to use to
   authenticate with, while unlocking any linked accounts or resetting passwords of linked accounts.

    If you don't enable it for either the master or child accounts, then the Link Account
    authentication type can't be used for the master account or the child accounts.

    If in the Multifactor Authentication policy for your role:

    - Only Link Account authentication is defined, then a message appears that Link Account
      authentication is disabled.
    - Other authentication types are defined along with the Link Account authentication, then you
      can use those authentication types to unlock your account and reset the password of your
      identity store account.

6. To link another account, click **Link Account** again and repeat steps 3 and 4.

## View your linked accounts

If you aren't signed in to the portal, the **GroupID Authenticate** window appears.
Provide the information of your master account. In the GroupID portal, click **Users** in
the left pane and select **Linked Account** to view your linked accounts.

## Unlink a linked account

1. In the GroupID portal, click **Users** in the left pane and select **Linked Account**.

    If you aren't signed in to the portal, the **GroupID Authenticate** window appears.
    Provide the sign-in information of your master account.

2. On the **My Linked Account** page, select the checkbox for the account you want to unlink.
3. Click **Un-link Account**.

**See Also**

- [Enroll Your Identity Store Account in GroupID](/docs/directorymanager/11.0/welcome/secondfactorauthentication/enrollaccount.md)
- [Second Factor Authentication in GroupID](/docs/directorymanager/11.0/welcome/secondfactorauthentication/secondfactorauthentication.md)
