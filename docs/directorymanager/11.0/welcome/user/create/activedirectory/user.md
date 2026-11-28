---
title: "Create an AD user in GroupID"
description: "Create a mail-enabled or non-mail-enabled Active Directory user in the GroupID portal by using the Create User wizard."
keywords:
  - GroupID
  - create AD user
  - mail-enabled user
  - Create User wizard
sidebar_position: 10
---

# Create an AD user in GroupID

In the GroupID portal, you can create mail-enabled and non-mail-enabled users.

:::note
In a Microsoft Entra ID-based identity store, users can only be created as non-mail-enabled. Create a
mailbox as an alternative to a mail-enabled user.
:::

:::note
Pages and fields on the Create User wizard might differ from those discussed here because the
administrator can customize the wizard by adding or removing pages and fields.
:::

What do you want to do?

- [Create a mail-enabled user in Active Directory](#create-a-mail-enabled-user-in-active-directory)
- [Create a non-mail-enabled user in Active Directory](#create-a-non-mail-enabled-user-in-active-directory)

## Create a mail-enabled user in Active Directory

1. In the GroupID portal, click the **Create New** button in the left pane and select
   **User**.

    The **Create User** wizard opens to the Account page.

2. On the
   [Account page in the Create User and Create Mailbox wizards](/docs/directorymanager/11.0/welcome/user/create/activedirectory/account.md),
   specify basic account info, such as the user's first name, last name, sign-in ID, and the UPN
   suffix.
3. On the
   [Set password options for a new AD user](/docs/directorymanager/11.0/welcome/user/create/activedirectory/password.md),
   provide a password for the user account and set other password-specific options.
4. Use the
   [Mail-enable a user on the Exchange page](/docs/directorymanager/11.0/welcome/user/create/activedirectory/messaging.md)
   to create the user as mail-enabled.
5. On the
   [Review the Summary page before creating an object](/docs/directorymanager/11.0/welcome/user/create/activedirectory/summary.md),
   review the settings, and then click **Finish** to complete the wizard.

:::note
If the GroupID administrator has specified the user creation action for review, your
changes won't take effect until verified by an approver. See the
[Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md) topic.
:::

## Create a non-mail-enabled user in Active Directory

1. In the GroupID portal, click the **Create New** button in the left pane and select
   **User**.

    The **Create User** wizard opens to the Account page.

2. On the
   [Account page in the Create User and Create Mailbox wizards](/docs/directorymanager/11.0/welcome/user/create/activedirectory/account.md),
   specify basic account info, such as the user's first name, last name, sign-in ID, and the UPN
   suffix.
3. On the
   [Set password options for a new AD user](/docs/directorymanager/11.0/welcome/user/create/activedirectory/password.md),
   provide a password for the user account and set other password-specific options.
4. On the
   [Mail-enable a user on the Exchange page](/docs/directorymanager/11.0/welcome/user/create/activedirectory/messaging.md),
   clear the **Mail-Enabled** checkbox to create the user as non-mail-enabled. This disables the
   remaining fields on the page.

    A non-mail-enabled user doesn't have an email address.

5. On the
   [Review the Summary page before creating an object](/docs/directorymanager/11.0/welcome/user/create/activedirectory/summary.md),
   review the settings, and then click **Finish** to complete the wizard.

:::note
If the GroupID administrator has specified the user creation action for review, your
changes won't take effect until verified by an approver. See the
[Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md) topic.
:::

**See Also**

- [Search Directory Objects in the GroupID Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
- [GroupID User, Mailbox, and Contact Properties](/docs/directorymanager/11.0/welcome/user/properties/overview.md)
