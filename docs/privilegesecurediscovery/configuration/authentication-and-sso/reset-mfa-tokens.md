---
title: "Reset a user's MFA token"
description: "Reset the authenticator token of a user in Privilege Secure for Discovery, including a user who gets access through an Active Directory group."
sidebar_position: 60
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm that adding a user individually and then removing the user clears the token of a user who gets access through a group. Evidence: the add action in lib-api-common/route-handlers/config/secureone/index.js sets `access.ga_secret` to an empty value, and the remove action unsets `access`. Not tested against a user who signed in through a group.
:::

By default, the product asks each user who signs in with a user name and password for a six-digit code from an authenticator app, such as Google Authenticator. When a user loses the device that holds the token, an administrator resets it. At the next sign-in, the user sets up a new token.

This applies only to the built-in authenticator code. Users who sign in with single sign-on (SSO) don't use it, and RADIUS replaces it when you enable RADIUS. See [SAML SSO configuration reference](./saml-sso-reference.md) and [Configure RADIUS authentication](./radius.md).

## Reset the token for a user

1. Sign in to Privilege Secure for Discovery as an administrator.
2. Select **Configure** > **Users and Groups**.
3. In the row of the user, select **Modify**, and then select **Reset 2-Factor Token**.

   ![The Modify menu of a user, with the options Change to Admin, Reset 2-Factor Token, and Remove User](/images/privilegesecurediscovery/authentication-and-sso/sso-users-modify-user.webp)

The product shows a message that the token is reset. At the next sign-in, the user sets up a new token.

## Reset the token for a user who gets access through a group

The **Modify** menu of a group has no **Reset 2-Factor Token** option, because each person has an individual token. A user who gets access only through a group doesn't appear in the list. To reset the token of one such user, add the user individually, and then remove the user.

1. Select **Configure** > **Users and Groups**.
2. In **Add Username or Group**, enter the name of the user, select the account, and select **Add User/Group**. Adding the user clears the token.
3. In the row of the user, select **Modify** > **Remove User**.

After you remove the user, the access of the user comes from the group again. At the next sign-in, the user sets up a new token.
