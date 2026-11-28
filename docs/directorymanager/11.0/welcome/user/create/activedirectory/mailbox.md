---
title: "Create an Active Directory mailbox in GroupID"
description: "Create a user with a mailbox in an Active Directory identity store by using the Create Mailbox wizard in the GroupID portal."
keywords:
  - GroupID
  - Active Directory mailbox
  - Create Mailbox wizard
  - messaging provider
  - Exchange mailbox
sidebar_position: 30
---

# Create an Active Directory mailbox in GroupID

You can create a mailbox in the GroupID portal when a messaging provider is configured for
the identity store.

A mailbox is a user with a mailbox, such as an Exchange mailbox.

:::note
Pages and fields on the Create Mailbox wizard might differ from those discussed here because the
administrator can customize the wizard by adding or removing pages and fields.
:::

What do you want to do?

- [Create a mailbox in Active Directory](#create-a-mailbox-in-active-directory)

## Create a mailbox in Active Directory

1. In the GroupID portal, click the **Create New** button in the left pane and select
   **Mailbox**.

    The **Create Mailbox** wizard opens to the Account page.

2. On the
   [Account page in the Create User and Create Mailbox wizards](/docs/directorymanager/11.0/welcome/user/create/activedirectory/account.md),
   specify basic account info, such as the object's first name, last name, sign-in ID, and the UPN
   suffix.
3. On the
   [Set password options for a new AD user](/docs/directorymanager/11.0/welcome/user/create/activedirectory/password.md),
   provide a password for the mailbox account and set other password-specific options.
4. On the
   [Exchange page in the Create Mailbox wizard](/docs/directorymanager/11.0/welcome/user/create/activedirectory/exchange.md),
   set the alias and Office 365 subscriptions.
5. On the
   [Review the Summary page before creating an object](/docs/directorymanager/11.0/welcome/user/create/activedirectory/summary.md),
   review the settings, and then click **Finish** to complete the wizard.

:::note
If the GroupID administrator has specified the mailbox creation action for review, your
changes won't take effect until verified by an approver. See the
[Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md) topic.
:::

**See Also**

- [Search Directory Objects in the GroupID Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
- [GroupID User, Mailbox, and Contact Properties](/docs/directorymanager/11.0/welcome/user/properties/overview.md)
