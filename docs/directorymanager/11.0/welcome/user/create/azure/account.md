---
title: "Account Page in the Entra ID User and Mailbox Wizards"
description: "Specify the container, name, logon name and UPN suffix for a new Microsoft Entra ID user or mailbox."
keywords:
  - Directory Manager
  - Microsoft Entra ID user
  - UPN suffix
  - user logon name
sidebar_position: 30
---

# Account Page in the Entra ID User and Mailbox Wizards

Use this page to specify basic account info, such as the user's first name, last name, sign-in ID and
the UPN suffix.

1. Click **Browse** next to the **Container** box to select a container to create the user in.
2. Enter the user's first name and last name in the respective boxes.
3. The wizard uses the provided information to populate the **Display Name** and **User logon name**
   boxes. You can modify this information, if required.

    The logon name is the user ID the user uses to sign in to the identity store.

4. The **UPN Suffix** box displays the UPN suffix for the user account. This is the name of the
   domain the identity store is running on. An example of a UPN suffix is 'mydomain.com'.

    When a domain user account is created, the complete domain account comprises a user logon
    name followed by '@' and then the domain name.

5. Click **Next**.

**See Also**

- [Create a Microsoft Entra ID User in Directory Manager](/docs/directorymanager/11.0/welcome/user/create/azure/user.md)
- [Create a Microsoft Entra ID Mailbox in Directory Manager](/docs/directorymanager/11.0/welcome/user/create/azure/mailbox.md)
