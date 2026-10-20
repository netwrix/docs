---
title: "Add users to Privilege Secure for Discovery"
description: "Add an Active Directory group of users and administrators to the product before you enable protect mode."
sidebar_position: 20
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the user and administrator roles and what each can do at 26.09.1. Evidence: none; the earlier documentation referred to the account inventory page for the two levels.

TODO: Confirm the steps to add a group on Config > Users and Groups (button and field labels). Evidence: docker/web/common/config/views/usersView.html shows the page title Manage Users and Groups and a search that the code names Add Username or Group; exact button labels not verified.
:::

:::warning[Screenshot needs attention: remove before publishing]
TODO: /images/privilegesecure/4.2/discovery/360048268793_blobid1.webp comes from an earlier release and can show old branding and real user or group names. Re-capture on the current release with example names.
:::

Privilege Secure for Discovery has two levels of user accounts: User and Administrator. Add the people who need privileged access before you roll out protect mode, so that they can request just-in-time access (JITA) as soon as their standing access is removed. Add them by Active Directory (AD) group instead of one user at a time.

For the difference between adding an AD account to the product and adding it to the account inventory of a system, see [Add a user or group to an account inventory](../../admin/systems/add-a-user-or-group-to-an-account-inventory.md).

## Add a group

1. Select **Config** > **Users and Groups**.
1. Search for the AD group that contains the users who need privileged access.
1. Add the group and set its level to **User** or **Administrator**.

   ![Users and Groups page with an Active Directory group added](/images/privilegesecure/4.2/discovery/360048268793_blobid1.webp)

1. Save the change.
