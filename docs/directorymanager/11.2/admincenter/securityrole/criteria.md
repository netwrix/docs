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

Role criteria determine which users belong to a security role. You can select a group or a container as criteria.

On the **Create Security Role/Copy Security Role/Update Security Role** page, click **Add Criteria** in the **Criteria** area.

**Designate a group as criteria:**

1. On the **Add Criteria** dialog box, select the **Group** tile.
2. Enter a search string in the search field to find the group in the directory. You can also click **Advanced** to search for the group by display name or email. When you select a group, its members and nested group members become members of this role.
3. Click **Preview** to view a list of role members.
4. Click **Save**.

**Designate a container as criteria:**

1. On the **Add Criteria** dialog box, select the **Container** tile.
2. Click the down arrow in the box below and select an OU. All users in this OU and its nested OUs become members of this role.
3. Click **Preview** to view a list of role members.
4. Click **Save**.

**Allow client-based access**

You can specify the Directory Manager clients that this role can access. You can also restrict the role to a specific client, such as one Directory Manager portal rather than all portals.

This is useful when you create portals with specific purposes. For example, Portal A creates groups, Portal B approves workflow requests, and Portal C manages user profiles. In that case, you might want role members to access Portal A only.

1. On the **Add Criteria** dialog box, click **Show Advanced**.
2. Click **Add Expression**. A row with three dropdown lists appears. Use these to restrict role members to one or more Directory Manager clients (such as Admin Center and a Directory Manager portal).
3. Select an option in the first dropdown list.

    - **Client Name:** Populates the third dropdown list with the names of all Directory Manager clients. Clients are:

        - Management Shell
        - Admin Center
        - Each Directory Manager portal (all portals are listed individually)

        Use this option to select a specific client, such as one portal. You can then restrict role members to that client only, or allow them to access all clients except that one.

    - **Client Type:** Populates the third dropdown list with the types of Directory Manager clients. Client types are:

        - Management Shell
        - Admin Center
        - Directory Manager portal (portals aren't listed individually, so this option represents all Directory Manager portals)

        Use this option to allow role members to access all clients of the same type, such as all Directory Manager portals, or all clients except that client type.

4. In the second dropdown list, select one of the following:

    - **is exactly:** Role members can access only the client or client type you select in the third dropdown list.
    - **isn't:** Role members can access all Directory Manager clients or client types except the one you select in the third dropdown list.

5. The values in the third dropdown list depend on your selection in the first dropdown list.

    - For client name, the list displays the names of all Directory Manager clients. Select a client. Based on your selection in the second dropdown list, role members can access this client only or all clients except this client.
    - For client type, the list displays the Directory Manager client types. Select an option. Based on your selection in the second dropdown list, role members can access all clients of the selected type, or are denied access to all clients of the selected type.

6. When you define two or more expressions, the **And** or **Or** operator applies. Select one of the following:

    - **And:** Applies all expressions to role members.
    - **Or:** Applies one of the expressions to role members.

    Click an operator to apply it. The tile changes to blue when applied.

7. Click **Save**.
