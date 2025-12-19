---
title: "Security Role – Criteria"
description: "Security Role – Criteria"
sidebar_position: 30
---

# Security Role – Criteria

You can specify a criterion that determines which users fall in the security role.

On the **Create Security Role/Copy Security Role/Update Security Role** page, click **Add Criteria**
in the **Criteria** area. You can select a group or a container as criteria.

**Designate a group as criteria:**

1. On the **Add Criteria** dialog box, select the **Group** tile.
2. Enter a search string in the search field to search for your required group in the directory. You
   can also click **Advanced** to search the group by display name or email.  
   On selecting a group, its members and nested become members of this role.
3. Click **Preview** to view a list of role members.
4. Click **Save**.

**Designate a container as criteria:**

1. On the **Add Criteria** dialog box, select the **Container** tile.
2. Click the down arrow head in the box below and select an OU.  
   All users residing in this OU and its nested OUs become members of this role.
3. Click **Preview** to view a list of role members.
4. Click **Save**.

**Allow client-based access**

You can specify the GroupID clients that this role can access or restrict this role to access a
specific client, such as one GroupID portal rather than all portals. This may be required, for
example, when you create portals with specific purposes – say, Portal A for creating groups, Portal
B for approving workflow requests, and Portal C for managing user profiles. Hence, you may want role
members to access Portal A only.

1. On the **Add Criteria** dialog box, click **Show Advanced**.
2. Click **Add Expression**. A row with three drop-down lists is displayed. Use these to restrict
   role members to one or more GroupID clients (such as Admin Center and a GroupID portal).
3. Select an option in the first drop-down list.

    - _Client Name:_ selecting this option would populate the names of all GroupID clients in the
      third drop-down list. Clients are:

        - GroupID Management Shell
        - GroupID Admin Center
        - GroupID Mobile app
        - Each GroupID portal (all portals are listed individually)

        This enables you to select a specific GroupID client, such as a specific portal, to restrict
        role members to access this client only, or to allow them to access all except this client.

    - _Client Type:_ selecting this option would populate the different types of GroupID clients in
      the third drop-down list. Client types are:

        - GroupID Management Shell
        - GroupID Admin Center
        - GroupID Mobile app
        - GroupID portal (portals are not listed individually, so this option represents all GroupID
          portals)

        This enables you to allow role members to access all clients of the same type, such as all
        GroupID portals, or access all clients except this client type.

4. In the second drop-down list, select:

    - _is exactly:_ indicates that role members can only access the client/client type you select in
      the third drop-down list.
    - _is not:_ indicates that role members can access all GroupID clients/client types except the
      one you select in the third drop-down list.

5. Values displayed in the third drop-down list depend on your selection in the first drop-down
   list.

    - For client name, this list displays the names of all GroupID clients. Select a client. Based
      on your selection in the second drop-down list, role members can either access this client
      only or access all clients except this client.
    - For client type, this list displays the GroupID client types. Select an option. Based on your
      selection in the second drop-down list, role members can either access all clients of the
      selected type or are denied access to all clients of the selected type.

6. The ‘And’ or ‘Or’ operator applies when two or more expressions have been defined. Select:

    - _And:_ to apply all expressions to role members.
    - _Or:_ to apply one of the expressions to role members.

    Click an operator to apply it. The tile changes to blue, indicating that it has been applied.

7. Click **Save**.

See Also

- [Security Roles](/docs/directorymanager/11.0/signin/securityrole/overview.md)
- [Create a Security Role](/docs/directorymanager/11.0/signin/securityrole/create.md)
- [Manage Security Roles](/docs/directorymanager/11.0/signin/securityrole/manage.md)
