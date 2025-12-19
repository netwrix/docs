---
title: "Create a Microsoft Entra ID User"
description: "Create a Microsoft Entra ID User"
sidebar_position: 10
---

# Create a Microsoft Entra ID User

In Directory Manager portal, you can create mail-enabled and non mail-enabled users.

:::note
In a Microsoft Entra ID based identity store, users can only be created as non mail-enabled.
Create a mailbox as an alternative to a mail-enabled user.
:::


:::note
Pages and fields on the Create User wizard may vary from those discussed here, since the
administrator can customize the wizard by adding or removing pages and fields.
:::


## Create a user in Microsoft Entra ID

Step 1 – In the Directory Manager portal, click the **Create New** button in the left pane and
select **User**.

The Create User wizard opens to the Account page.

Step 2 – On the Account page, specify basic account info, such as the user's first name, last name,
login ID and the UPN suffix. See the [Account page ](/docs/directorymanager/11.1/portal/user/create/EntraID/account.md)topic for additional information.

Step 3 – On the Password page, provide a password for the user account and set other
password-specific options. See the [Password page ](/docs/directorymanager/11.1/portal/user/create/EntraID/password.md)topic for additional information.

Step 4 – Use the Directory Roles page to assign a role and role privileges to the user on the
Microsoft Entra Admin Center portal. See the [Directory Roles page](/docs/directorymanager/11.1/portal/user/create/EntraID/directoryrole.md) for additional
information.

Step 5 – On the Summary page, review the settings and then click **Finish** to complete the wizard.

:::note
If the Directory Manager administrator has specified the user creation action for review, your
changes will not take effect until verified by an approver. See the
[Requests](/docs/directorymanager/11.1/portal/request/overview.md) topic for additional information.

:::
