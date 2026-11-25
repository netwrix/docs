---
title: "Create a Microsoft Entra ID Mailbox in Directory Manager"
description: "Create a mailbox for a user in a Microsoft Entra ID identity store by using the Create Mailbox wizard in the Directory Manager portal."
keywords:
  - Entra ID mailbox
  - Create Mailbox wizard
  - Exchange alias
  - Office 365 subscriptions
  - messaging provider
sidebar_position: 20
---

# Create a Microsoft Entra ID Mailbox in Directory Manager

You can create a mailbox in the Directory Manager portal when a messaging provider is configured for
the identity store.

A mailbox is a user with a mailbox, such as an Exchange mailbox.

:::note
Pages and fields on the Create Mailbox wizard may vary from those discussed here, since the
administrator can customize the wizard by adding or removing pages and fields.
:::

What do you want to do?

- [Create a mailbox in a Microsoft Entra ID identity store](#create-a-mailbox-in-a-microsoft-entra-id-identity-store)

## Create a mailbox in a Microsoft Entra ID identity store

1. In the Directory Manager portal, click the **Create New** button and select **Mailbox**.

    The **Create Mailbox** wizard opens to the Account page.

2. On the **Account** page, specify basic account info, such as the object's first name, last name,
   login ID, and the UPN suffix.
3. On the **Password** page, provide a password for the mailbox account and set other
   password-specific options.
4. On the **Exchange** page, set the alias and Office 365 subscriptions for the mailbox.
5. On the **Summary** page, review the settings and then click **Finish** to complete the wizard.

:::note
If the Directory Manager administrator has specified the mailbox creation action for review,
your changes don't take effect until an approver verifies them. See the
[Workflow Requests in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/request/overview.md) topic.
:::

See Also

- [Search Directory Objects in the Directory Manager Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
- [Directory Manager User, Mailbox, and Contact Properties](/docs/directorymanager/11.0/welcome/user/properties/overview.md)
