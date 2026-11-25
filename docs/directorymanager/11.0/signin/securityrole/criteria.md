---
title: "Set Security Role Criteria in Directory Manager"
description: "Define which users belong to a security role by selecting a group or container, and optionally limit the role to specific Directory Manager clients."
keywords:
  - security role criteria
  - group criteria
  - container criteria
  - client-based access
  - role members
sidebar_position: 30
---

# Set Security Role Criteria in Directory Manager

Specify a criterion that determines which users belong to the security role.

On the **Create Security Role/Copy Security Role/Update Security Role** page, click **Add Criteria**
in the **Criteria** area. You can select a group or a container as criteria.

**Designate a group as criteria:**

1. On the **Add Criteria** dialog box, select the **Group** tile.
2. Enter a search string in the search field to search for your required group in the directory. You
   can also click **Advanced** to search the group by display name or email.  
   When you select a group, its members and nested group members become members of this role.
3. Click **Preview** to view a list of role members.
4. Click **Save**.

**Designate a container as criteria:**

1. On the **Add Criteria** dialog box, select the **Container** tile.
2. Click the down arrow head in the box below and select an OU.  
   All users residing in this OU and its nested OUs become members of this role.
3. Click **Preview** to view a list of role members.
4. Click **Save**.

**Allow client-based access**

You can specify the Directory Manager clients that this role can access or restrict this role to
access a specific client, such as one Directory Manager portal rather than all portals. This can be
useful, for example, when you create portals with specific purposes, such as Portal A for creating
groups, Portal B for approving workflow requests, and Portal C for managing user profiles. In that
case, you might want role members to access Portal A only.

1. On the **Add Criteria** dialog box, click **Show Advanced**.
2. Click **Add Expression**. A row with three dropdown lists is displayed. Use these to restrict
   role members to one or more Directory Manager clients (such as Admin Center and a Directory Manager portal).
3. Select an option in the first dropdown list.

    - _Client Name:_ selecting this option populates the names of all Directory Manager clients in the
      third dropdown list. Clients are:

        - GroupID Management Shell
        - GroupID Admin Center
        - GroupID Mobile app
        - Each GroupID portal (all portals are listed individually)

        This lets you select a specific Directory Manager client, such as a specific portal, to restrict
        role members to access this client only, or to allow them to access all except this client.

    - _Client Type:_ selecting this option populates the different types of Directory Manager clients in
      the third dropdown list. Client types are:

        - GroupID Management Shell
        - GroupID Admin Center
        - GroupID Mobile app
        - GroupID portal (portals aren't listed individually, so this option represents all
          portals)

        This lets you allow role members to access all clients of the same type, such as all
        Directory Manager portals, or access all clients except this client type.

4. In the second dropdown list, select:

    - _is exactly:_ indicates that role members can only access the client/client type you select in
      the third dropdown list.
    - _is not:_ indicates that role members can access all Directory Manager clients/client types except the
      one you select in the third dropdown list.

5. Values displayed in the third dropdown list depend on your selection in the first dropdown
   list.

    - For client name, this list displays the names of all Directory Manager clients. Select a client. Based
      on your selection in the second dropdown list, role members can either access this client
      only or access all clients except this client.
    - For client type, this list displays the Directory Manager client types. Select an option. Based on your
      selection in the second dropdown list, role members can either access all clients of the
      selected type or are denied access to all clients of the selected type.

6. The **And** or **Or** operator applies when two or more expressions have been defined. Select:

    - _And:_ to apply all expressions to role members.
    - _Or:_ to apply one of the expressions to role members.

    Click an operator to apply it. The tile changes to blue, indicating that it has been applied.

7. Click **Save**.

See Also

- [Security Roles in Directory Manager](/docs/directorymanager/11.0/signin/securityrole/overview.md)
- [Create a Security Role in Directory Manager](/docs/directorymanager/11.0/signin/securityrole/create.md)
- [Manage Security Roles in Directory Manager](/docs/directorymanager/11.0/signin/securityrole/manage.md)
