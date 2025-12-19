---
title: "Create an AD User"
description: "Create an AD User"
sidebar_position: 10
---

# Create an AD User

In Directory Manager portal, you can create mail-enabled and non mail-enabled users.

:::note
In a Microsoft Entra ID based identity store, users can only be created as non mail-enabled.
Create a mailbox as an alternative to a mail-enabled user.
:::


:::note
Pages and fields on the Create User wizard may vary from those discussed here, since the
administrator can customize the wizard by adding or removing pages and fields.
:::


## Create a mail-enabled user in Active Directory

Step 1 – In the Directory Manager portal, click the **Create New** button in the left pane and
select **User**.

The Create User wizard opens to the Account page.

Step 2 – On the [Account page](/docs/directorymanager/11.1/portal/user/create/AD/account.md), specify basic account info, such as the user's first
name, last name, login ID and the UPN suffix.

Step 3 – On the [Password page](/docs/directorymanager/11.1/portal/user/create/AD/password.md), provide a password for the user account and set other
password-specific options.

Step 4 – Use the [Exchange page](/docs/directorymanager/11.1/portal/user/create/AD/messaging.md), to create the user as mail-enabled.

Step 5 – On the [Summary Page](/docs/directorymanager/11.1/portal/user/create/AD/summary.md), review the settings and then click Finish to complete
the wizard.

:::note
If the Directory Manager administrator has specified the user creation action for review, your
changes will not take effect until verified by an approver. See the
[Requests](/docs/directorymanager/11.1/portal/request/overview.md) topic for additional information.
:::


## Create a non mail-enabled user in Active Directory

Step 1 – In the Directory Manager portal, click the **Create New** button in the left pane and
select **User**.

The Create User wizard opens to the Account page.

Step 2 – On the [Account page](/docs/directorymanager/11.1/portal/user/create/AD/account.md), specify basic account info, such as the user's first
name, last name, login ID and the UPN suffix.

Step 3 – On the [Password page](/docs/directorymanager/11.1/portal/user/create/AD/password.md), provide a password for the user account and set other
password-specific options.

Step 4 – On the [Exchange page](/docs/directorymanager/11.1/portal/user/create/AD/messaging.md), clear the **Mail-Enabled** check box to create the
user as non mail-enabled. This disables the remaining fields on the page.

A non mail-enabled user does not have an email address.

Step 5 – On the [Summary Page](/docs/directorymanager/11.1/portal/user/create/AD/summary.md), review the settings and then click Finish to complete
the wizard.

:::note
If the Directory Manager administrator has specified the user creation action for review, your
changes will not take effect until verified by an approver. See the
[Requests](/docs/directorymanager/11.1/portal/request/overview.md) topic for additional information.

:::
