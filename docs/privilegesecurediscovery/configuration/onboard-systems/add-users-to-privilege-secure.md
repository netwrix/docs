---
title: "Add users to Privilege Secure for Discovery"
description: "Add an Active Directory group of users and administrators to the product before you enable protect mode."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm what each role can do at 26.09.1. Evidence: the interface shows the Action menu, EDR, offline access, and directory bridging settings on Grant Access only to administrators (accessCtrl.js, AdminDatatableData.js), and shows a user their systems. No page describes the two roles.
:::

Privilege Secure for Discovery has two levels of user accounts: **User** and **Administrator**. Add the people who need privileged access before you roll out protect mode, so that they can request just-in-time access (JITA) as soon as the product removes their standing access. Add them by Active Directory (AD) group instead of one user at a time.

For the difference between adding an AD account to the product and adding it to the account inventory of a system, see [Add a user or group to an account inventory](../../admin/systems/add-a-user-or-group-to-an-account-inventory.md).

## Add a group

1. Select **Configure** > **Users and Groups**.
1. In **Add Username or Group**, enter the name of the AD group that contains the users who need privileged access, and select the group from the list.
1. Select **Add User/Group**.

   ![The Users and Groups page with an Active Directory group entered in Add Username or Group](/images/privilegesecurediscovery/onboard-systems/onboard-users-add.webp)

The product adds the group at the **User** level, and shows a confirmation message. The group appears in the table, which you can search and filter by domain, users, and groups.

## Change the level of a group or user

1. In the row of the group or user, select **Modify**.
1. Select **Change to Admin** to give the **Administrator** level, or **Change to User** to return to the **User** level.

   ![The Modify menu of a group, with the options Change to Admin and Remove Group](/images/privilegesecurediscovery/onboard-systems/onboard-users-modify.webp)

The **Type** column shows the current level.

## Remove a group or user

In the **Modify** menu, select **Remove Group** or **Remove User**. For a user, the menu also has **Reset 2-Factor Token**. See [Reset a user's MFA token](../authentication-and-sso/reset-mfa-tokens.md).
