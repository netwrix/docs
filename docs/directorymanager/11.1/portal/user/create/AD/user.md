---
title: "Create an AD User in Directory Manager"
description: "Create a mail-enabled or non-mail-enabled Active Directory user in the Directory Manager portal by using the Create User wizard."
keywords:
  - Directory Manager
  - create AD user
  - mail-enabled user
  - Create User wizard
sidebar_position: 10
---

# Create an AD User in Directory Manager

In the Directory Manager portal, you can create mail-enabled and non-mail-enabled users.

:::note
In a Microsoft Entra ID-based identity store, users can only be created as non-mail-enabled.
Create a mailbox as an alternative to a mail-enabled user.
:::

:::note
Pages and fields on the Create User wizard may vary from those discussed here because the
administrator can customize the wizard by adding or removing pages and fields.
:::

## Create a mail-enabled user in Active Directory

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **User**.

   The Create User wizard opens to the Account page.

2. On the [Account page in the Create User and Create Mailbox wizards](/docs/directorymanager/11.1/portal/user/create/AD/account.md), specify basic account info, such as the user's first name, last name, sign-in ID, and the UPN suffix.

3. On the [Set Password Options for a New AD User](/docs/directorymanager/11.1/portal/user/create/AD/password.md), provide a password for the user account and set other password-specific options.

4. Use the [Exchange page](/docs/directorymanager/11.1/portal/user/create/AD/messaging.md) to create the user as mail-enabled.

5. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.1/portal/user/create/AD/summary.md), review the settings and then click **Finish** to complete the wizard.

:::note
If the Directory Manager administrator has specified the user creation action for review, your
changes won't take effect until verified by an approver. See the
[Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.1/portal/request/overview.md) topic for more information.
:::

## Create a non-mail-enabled user in Active Directory

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **User**.

   The Create User wizard opens to the Account page.

2. On the [Account page in the Create User and Create Mailbox wizards](/docs/directorymanager/11.1/portal/user/create/AD/account.md), specify basic account info, such as the user's first name, last name, sign-in ID, and the UPN suffix.

3. On the [Set Password Options for a New AD User](/docs/directorymanager/11.1/portal/user/create/AD/password.md), provide a password for the user account and set other password-specific options.

4. On the [Exchange page](/docs/directorymanager/11.1/portal/user/create/AD/messaging.md), clear the **Mail-Enabled** checkbox to create the user as non-mail-enabled. This disables the remaining fields on the page.

   A non-mail-enabled user doesn't have an email address.

5. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.1/portal/user/create/AD/summary.md), review the settings and then click **Finish** to complete the wizard.

:::note
If the Directory Manager administrator has specified the user creation action for review, your
changes won't take effect until verified by an approver. See the
[Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.1/portal/request/overview.md) topic for more information.
:::
