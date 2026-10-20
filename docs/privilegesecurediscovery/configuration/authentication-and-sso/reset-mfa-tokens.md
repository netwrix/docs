---
title: "Reset a user's MFA token"
description: "Reset the multifactor authentication token for a single user, including a user who inherits access from an Active Directory group."
sidebar_position: 60
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the **Modify** menu option label "Reset 2-Factor Token" at 26.09.1. Evidence: none.

TODO: The screenshots are from 2019 and need re-capture. Evidence: none.
:::

When a user loses the device that stores their multifactor authentication (MFA) token, an administrator resets the token. At the next sign-in, the user sets up a new token.

## Reset the token for a user

1. Sign in as a Privilege Secure for Discovery administrator.
2. Go to **Configure** > **Users and Groups**.
3. In the right-hand column for the user, select **Modify**.
4. Select **Reset 2-Factor Token**.

   ![Modify menu for a user with the Reset 2-Factor Token option](/images/privilegesecure/4.2/discovery/admin/configuration/360021670893_screen_shot_2019-04-15_at_10.25.04_am.webp)

The user is prompted to set up a new MFA token at the next sign-in. For the user steps, see [First sign-in](../../user-guide/first-sign-in.md).

## Reset the token for a user who inherits access from a group

Organizations often grant access through an Active Directory (AD) group. If you reset the token on the group, every user who inherits access from it must reset their token. To reset one user's token, add the user individually first.

1. Go to **Configure** > **Users and Groups**.
2. In the **Add Username or Group** pane, search for the user, select the account, and select **Add**.

   ![Add Username or Group pane with a user selected](/images/privilegesecure/4.2/discovery/admin/configuration/360021670893_screen_shot_2019-04-15_at_10.33.53_am.webp)

3. In the list of configured accounts, locate the user and select **Modify** in the right-hand column.
4. Select **Reset 2-Factor Token**.

   ![Modify menu for the added user with the Reset 2-Factor Token option](/images/privilegesecure/4.2/discovery/admin/configuration/360021670893_screen_shot_2019-04-15_at_10.25.04_am.webp)

5. Remove the individual account from the list. This returns the list to its previous state and keeps the token reset.

The user is prompted to set up a new MFA token at the next sign-in. For the user steps, see [First sign-in](../../user-guide/first-sign-in.md).
