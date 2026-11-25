---
title: "Exchange Page in the Entra ID Create Mailbox Wizard"
description: "Set the alias, usage location, mailbox store, directory roles and Office 365 subscriptions for a new Microsoft Entra ID mailbox."
keywords:
  - Directory Manager
  - Entra ID mailbox
  - Office 365 subscriptions
  - usage location
sidebar_position: 60
---

# Exchange Page in the Entra ID Create Mailbox Wizard

1. In the **Alias** box, enter an alias for the mailbox.
2. From the **Usage Location** list, select a geographical location for the mailbox.

    The usage location determines what Office 365 licenses and associated features can be assigned
    to a mailbox based on geographic availability and laws. This attribute is mandatory when you
    assign subscriptions and licenses to Office 365 mailboxes.

3. In the **Mailbox Store** list, select a mailbox store to create the user's mailbox on.
4. The **Directory Roles** dropdown list displays the roles that can be assigned to mailboxes on
   the Microsoft Entra Admin Center portal. These are: Global Administrator, Limited Administrator,
   and User.

    Click the down arrow next to a role and select the checkboxes for the privileges within that
    role for assignment.

5. The **Subscription List** provides the subscriptions offered by Office 365 to a mailbox user.
   Select the checkboxes for the subscriptions you want to assign to this mailbox.

    The subscription list is displayed when Office 365 is configured as the messaging provider for
    the identity store.

6. Click **Next**.

**See Also**

- [Create a Microsoft Entra ID Mailbox in Directory Manager](/docs/directorymanager/11.0/welcome/user/create/azure/mailbox.md)
