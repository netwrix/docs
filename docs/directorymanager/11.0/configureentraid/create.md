---
title: "Create a Microsoft Entra ID Identity Store in GroupID"
description: "Create a Microsoft Entra ID identity store and assign the User Account Administrator role when the service account isn't a Global Administrator."
keywords:
  - Microsoft Entra ID identity store
  - Entra ID service account role
  - User Account Administrator security role
  - minimum service account permissions
sidebar_position: 20
---

# Create a Microsoft Entra ID Identity Store in GroupID

After you register GroupID and create a user with the required directory role in Microsoft
Entra ID, you can create a Microsoft Entra ID identity store in GroupID. This topic walks
you through the steps to create a Microsoft Entra ID identity store and assign a role to the
Microsoft Entra ID user in GroupID.

## Create a Microsoft Entra ID Identity Store

To create a Microsoft Entra ID identity store, see the
[Create an Identity Store for Microsoft Entra ID](/docs/directorymanager/11.0/signin/identitystore/create.md#create-an-identity-store-for-microsoft-entra-id)
topic.

:::note
If you intend to use a service account user with the Global Administrator directory role, no change
is required in the default GroupID security role settings of the Microsoft Entra ID
identity store. If you intend to use a service account user with any role other than the Global
Administrator directory role (that is, User Administrator + Exchange Administrator), change the
GroupID Administrator security role criteria group to User Account Administrator.
:::

## GroupID Security Role Setting

If you want to use a service account user with a role other than the Global Administrator role for
the Microsoft Entra ID identity store, assign it the _User Account Administrator_ role in
GroupID.

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for the Microsoft Entra ID identity
   store and select **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for the administrator security role.
5. On the **Edit Security Role** page, the **Criteria** area displays the role criteria. Click **Add
   Criteria** to change it. On the **Add Criteria** dialog box, delete the existing criteria and
   search for _User account administrator_. Click **Save**.
6. Click **Update Security Role**.
7. On the **Security Roles** page, click **Save**.

## Limitations of Minimum Service Account Permissions

If you use a service account with minimum directory role assignments, the following limitations
apply:

- You can assign only the User role to newly created users and mailbox objects from GroupID.
  The same applies to existing users and mailboxes, because you can't change directory
  roles using a service account with minimum directory role assignments.
- Password reset functionality is limited to objects in the User role, User Administrator role, and
  Helpdesk role.

See Also

- [Register GroupID in Microsoft Entra ID](/docs/directorymanager/11.0/configureentraid/register/appregister.md)
