---
title: "Microsoft Entra ID Identity Store"
description: "Microsoft Entra ID Identity Store"
sidebar_position: 20
---

# Microsoft Entra ID Identity Store

Once you have registered Directory Manager and created a user with required directory role in
Microsoft Entra ID, you can now create an Microsoft Entra ID identity store in GroupID. This topic
walks you through the steps to create an Microsoft Entra ID identity store and assign a role to the
Microsoft Entra ID user in Directory Manager.

## To create a Microsoft Entra ID Identity Store

See the
[Create an Identity Store for Microsoft Entra ID](/docs/directorymanager/11.1/admincenter/identitystore/create.md#create-an-identity-store-for-microsoft-entra-id)
topic for creating an Microsoft Entra ID identity store.

:::note
If you intend to use a service account user with Global Administrator directory role, then no
change is required in the default Directory Manager security roles settings of Microsoft Entra ID
identity store. And if you intend to use a service account user with any role, other than Global
administrator directory role (i.e. User Administrator + Exchange Administrator), then the Directory
Manager Administrator security role criteria group must be changed to User Account Administrator.
:::


## Directory Manager Security Role Setting

If you want to use a service account user with a role other than Global administrator role for
Microsoft Entra ID identity store, you have to assign it _User Account Administrator_ role in
Directory Manager.

Step 1 – In Admin Center, click **Identity Stores** in the left pane.

Step 2 – On the Identity Stores page, click the ellipsis button for Microsoft Entra ID identity
store and select **Edit**.

Step 3 – Click **Security Roles** under Settings in the left pane.

Step 4 – On the Security Roles page, click **Edit** for the administrator security role.

Step 5 – On the Edit Security Role page, the Criteria area displays the role criteria. Click **Add
Criteria** to change it. On the Add Criteria dialog box, delete the existing criteria and search for
User account administrator. Click **Save**.

Step 6 – Click **Update Security Role**.

Step 7 – On the Security Roles page, click **Save**.

## Limitations of Minimum Service Account Permissions

If you are using a service account with minimum directory role assignments, the following
limitations apply:

- Only the User role can be assigned to newly created users and mailboxes objects from GroupID. The
  same applies to existing users and mailboxes, as Directory Roles cannot be changed, using a
  service account with minimum directory role assignments.

- The password reset functionality would be limited to objects falling in the User role, User
  Administrator role, and Helpdesk role.
