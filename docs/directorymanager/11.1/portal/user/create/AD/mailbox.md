---
title: "Create an Active Directory mailbox in Directory Manager"
description: "Create a user with a mailbox in an Active Directory identity store by using the Create Mailbox wizard in the Directory Manager portal."
keywords:
  - Directory Manager
  - Active Directory mailbox
  - Create Mailbox wizard
  - messaging provider
  - Exchange mailbox
sidebar_position: 30
---

# Create an Active Directory mailbox in Directory Manager

You can create a mailbox in the Directory Manager portal when a messaging provider is
configured for the identity store.

A mailbox is a user with a mailbox, such as an Exchange mailbox.

:::note
Pages and fields on the Create Mailbox wizard might differ from those discussed here because the
administrator can customize the wizard by adding or removing pages and fields.
:::

## Create a mailbox in Active Directory

1. In the Directory Manager portal, click the **Create New** button in the left pane and select **Mailbox**. The Create Mailbox wizard opens to the Account page.

2. On the [Account page in the Create User and Create Mailbox wizards](/docs/directorymanager/11.1/portal/user/create/AD/account.md), specify basic account info, such as the object's first name, last name, login ID, and the UPN suffix.

3. On the [Set Password Options for a New AD User](/docs/directorymanager/11.1/portal/user/create/AD/password.md), provide a password for the mailbox account and set other password-specific options.

4. On the [Exchange page in the Create Mailbox wizard](/docs/directorymanager/11.1/portal/user/create/AD/exchange.md), set the alias and Office 365 subscriptions.

5. On the [Review the Summary Page Before Creating an Object](/docs/directorymanager/11.1/portal/user/create/AD/summary.md), review the settings, and then click **Finish** to complete the wizard.

:::note
If the Directory Manager administrator has specified the mailbox creation action for review,
your changes won't take effect until verified by an approver. See the
[Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.1/portal/request/overview.md) topic for additional information.

:::
