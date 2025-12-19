---
title: "Linked Accounts"
description: "Linked Accounts"
sidebar_position: 40
---

# Linked Accounts

The GroupID portal allows users to reset their accounts' passwords and unlock their accounts through
their linked accounts.

A user can have accounts in multiple identity stores configured in Admin Center. They have to enroll
each of these accounts separately on the GroupID Portal before they can reset its password or unlock
it.

To eliminate the necessity of separate enrollment, a user can simply enroll one of these accounts on
the portal and then link other accounts with it. Once it's done, the enrolled account becomes the
master account.

A user can then unlock or reset the password of any linked account through the authentication policy
associated with the master account.

Any account linked with the master account can neither be enrolled, nor used to log on to the
portal. Users must use their master account credentials to log into the portal.

When two accounts are linked, notification emails are sent to the master account as well as to the
linked account, provided that notifications are configured for the respective identity stores in
GroupID Admin Center. Un-linking an account also initiates notifications.

What do you want to do?

- [Link an account](#link-an-account)
- [View your linked accounts](#view-your-linked-accounts)
- [Un-link a linked account](#un-link-a-linked-account)

## Link an account

Enroll any one of your identity store accounts on the GroupID Portal. This account becomes the
master account, with which you can link other identity store accounts that you may have.

1. In GroupID portal, click **Users** in the left pane and select **Linked Account**.
2. On the **My Linked Accounts** page, select the account you want to link and click **Link
   Account**.
3. On the **GroupID Authenticate** window, provide the sign in information for the account to link
   to the master account.
4. A message **Account has been successfully linked** is displayed.

    If the master account is not enrolled yet, it automatically gets enrolled when an account is
    linked to it.

    NOTE: An already enrolled or linked account cannot be linked to a master account.

5. Turn on the **Allow Authentication** button against the account(s) you want to use to
   authenticate with, while unlocking any linked accounts or resetting passwords of linked accounts.

    If you do not enable it either for master or child account(s), then the Link Account
    authentication type cannot be used both for master account and child account(s).

    If in the Multifactor Authentication policy for your role:

    - Only Link Account authentication is defined, then a message appears that Link Account
      authentication is disabled.
    - Other authentication type(s) are defined along with the Link Account authentication, then you
      can use those authentication type(s) to unlock your account and reset password of your
      identity store account.

6. To link another account, click **Link Account** again and repeat steps 3-4.

## Link MicroSoft Entra ID account(s)

The Entra ID account(s) that you want to link with must be logged into the Entra ID portal in the
same browser. Use the Sign in with a different account option in the Entra ID portal for logging
into multiple accounts.

![Entra ID Sign In with a different account option](/images/directorymanager/11.0/portal/user/linkntraidacc.webp)

1. In GroupID portal, click **Users** in the left pane and select **Linked Account**.
2. On the **My Linked Accounts** page, select the account you want to link and click **Link
   Account**.
3. On the **GroupID Authenticate** window, click the SAML button or image for the configured SAML
   provider in GroupID. The following window is displayed:

    ![Multiple Signed in users in Entra ID portal](/images/directorymanager/11.0/portal/user/entraidsigninusers.webp)

4. Select the account you want to link to. You will be redirected back to the GroupID portal’s My
   Linked Account page and a message **Account has been successfully linked** is displayed.

    If the master account is not enrolled yet, it automatically gets enrolled when an account is
    linked to it.

    NOTE: An already enrolled or linked account cannot be linked to a master account.

5. Turn on the **Allow Authentication** button against the account(s) you want to use to
   authenticate with, while unlocking any linked accounts or resetting passwords of linked accounts.

    If you do not enable it either for master or child account(s), then the Link Account
    authentication type cannot be used both for master account and child account(s).

    If in the Multifactor Authentication policy for your role:

    - Only Link Account authentication is defined, then a message appears that Link Account
      authentication is disabled.
    - Other authentication type(s) are defined along with the Link Account authentication, then you
      can use those authentication type(s) to unlock your account and reset password of your
      identity store account.

6. To link another account, click **Link Account** again and repeat steps 3-4.

## View your linked accounts

If you are not logged on to the portal, the **GroupID Authenticate** window appears. Provide the
information of your master account. In GroupID portal, click **Users** in the left pane and select
**Linked Account** to view your linked account.

## Un-link a linked account

1. In GroupID portal, click **Users** in the left pane and select **Linked Account**.

    If you are not logged on to the portal, the **GroupID Authenticate** window appears. Provide the
    logon information of your master account.

2. On the **My Linked Account** page, select the check box for the account you want to un-link.
3. Click **Un-link Account**.

**See Also**

- [Enroll Your Identity Store Account](/docs/directorymanager/11.0/welcome/secondfactorauthentication/enrollaccount.md)
- [Second Factor Authentication](/docs/directorymanager/11.0/welcome/secondfactorauthentication/secondfactorauthentication.md)
