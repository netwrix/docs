---
title: "New Object Policy"
description: "New Object Policy"
sidebar_position: 30
---

# New Object Policy

The New Object policy applies when role members create directory objects using the GroupID portal or
GroupID Management Shell. Use this policy to:

- Limit role members to create new directory objects in the OUs they reside in respectively.

    OR

- Specify one or more OUs to limit object creation to those. Separate OUs can be specified for
  different object types.

You can specify one or more OUs for an object type. For example, you can specify OUA and OUB for
Group objects and OUC for Mailbox objects, so that role members can create groups in OUA and OUB,
and mailboxes in OUC.

By default, or when no OU is set for an object type, role members can select any OU in the identity
store to create objects of that type. For example, when no OU is specified for the User object, role
members can create user objects in any OU in the identity store.

NOTE: (1) When a user has multiple roles in an identity store with a different New Object policy for
each role, then the policies configured for all roles apply to the user. Hence, a user with three
roles - where a different OU for the Group object is specified for each role - can create groups in
any of the three OUs.  
(2( The New Object policy does not apply to a Microsoft Entra ID identity store.

What do you want to do?

- [Limit Object Creation to the OU the User Resides in](#limit-object-creation-to-the-ou-the-user-resides-in)
- [Restrict Role Members to Create Objects in Specific OUs](#restrict-role-members-to-create-objects-in-specific-ous)
- [Remove an OU](#remove-an-ou)

## Limit Object Creation to the OU the User Resides in

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **New Object** tab.
7. Select the **Users can create objects only in their own container** check box to limit role
   members to create directory objects in the organizational unit they reside in respectively.  
   Selecting this option disables the remaining options on the tab.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

NOTE: When role members create a new object, the _Container_ option shows the distinguished name of
the OU the logged-in user resides in as read-only.

## Restrict Role Members to Create Objects in Specific OUs

You can specify one or more containers for an object type (say Group) to restrict role members to
create group objects in those container(s) only.

**To specify OU(s) for object creation:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **New Object** tab.
7. Click **Add** and select an object type to specify the container(s) for.
8. On the **Add Container** dialog box, select one or more containers where role members can create
   the particular objects. Then click **Add**. The container(s) are displayed with the name of the
   respective object type.
9. You can choose to set a container for all object types. Click the **Copy** button for a container
   and then click **Yes** on the **Copy Container** message box. The container is displayed with all
   object types.
10. Click **OK**.
11. On the **Edit Security Role** page, click **Update Security Role**.
12. On the **Security Roles** page, click **Save**.

NOTE: When role members create a new object, the _Container_ option shows the containers specified
for the respective object type. The user can select the desired container to create the object
there. When one container is specified, the _Container_ option displays its distinguished name as
read-only.

## Remove an OU

You can remove a container to prevent role members from creating objects in it. When you remove all
containers for an object type, role members can create the particular objects in any container in
the directory.

**To remove a container:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **New Object** tab.
7. For each object type, the allowed containers are listed with it.

    - Click **Remove** for a container to remove it.
    - Click **Remove All** for an object type to remove all containers for it.

8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

**See Also**

- [Security Roles](/docs/directorymanager/11.0/signin/securityrole/overview.md)
- [Security Role Policies](/docs/directorymanager/11.0/signin/securityrole/policy/overview.md)
