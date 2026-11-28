---
title: "Create a Microsoft Entra ID User in GroupID"
description: "Create a non mail-enabled user in a Microsoft Entra ID identity store by using the Create User wizard in the GroupID portal."
keywords:
  - Entra ID user
  - Create User wizard
  - non mail-enabled user
  - directory roles
  - UPN suffix
sidebar_position: 10
---

# Create a Microsoft Entra ID User in GroupID

In the GroupID portal, you can create mail-enabled and non mail-enabled users.

:::note
In a Microsoft Entra ID based identity store, users can only be created as non mail-enabled.
Create a mailbox as an alternative to a mail-enabled user.
:::

:::note
Pages and fields on the Create User wizard may vary from those discussed here, since the
administrator can customize the wizard by adding or removing pages and fields.
:::

What do you want to do?

- [Create a user in Microsoft Entra ID](#create-a-user-in-microsoft-entra-id)

## Create a user in Microsoft Entra ID

1. In the GroupID portal, click the **Create New** button in the left pane and select **User**.

    The **Create User** wizard opens to the Account page.

2. On the **Account** page, specify basic account info, such as the user's first name, last name,
   login ID, and the UPN suffix.
3. On the **Password** page, provide a password for the user account and set other password-specific
   options.
4. Use the **Directory Roles** page to assign a role and role privileges to the user on the
   Microsoft Entra Admin Center portal.
5. On the **Summary** page, review the settings and then click **Finish** to complete the wizard.

:::note
If the GroupID administrator has specified the user creation action for review, your
changes don't take effect until an approver verifies them. See the
[Workflow Requests in the GroupID Portal](/docs/directorymanager/11.0/welcome/request/overview.md) topic.
:::

**See Also**

- [Search Directory Objects in the GroupID Portal](/docs/directorymanager/11.0/welcome/generalfeatures/search.md)
- [GroupID User, Mailbox, and Contact Properties](/docs/directorymanager/11.0/welcome/user/properties/overview.md)
