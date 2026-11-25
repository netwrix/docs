---
title: "Configure a Search Policy for a Security Role"
description: "Limit the containers and objects that security role members can search in the Directory Manager portal and Management Shell."
keywords:
  - Directory Manager
  - search policy
  - search scope
  - LDAP filter
  - security role
sidebar_position: 40
---

# Configure a Search Policy for a Security Role

The Search policy sets the search scope for the Directory Manager portal and Management Shell. By default, a search by role members returns objects from all containers in the identity store.

Use the Search policy to:

- Limit the search scope to one container for role members.
- Designate a criterion to limit the objects that role members can search.

:::note
Microsoft Entra ID supports a single container only, so you can't restrict the search scope by container in a Microsoft Entra ID identity store.
:::

## Search policy behavior

Assume you specify a container, localOU, and set the LDAP filter to (Country=United States\*) for an Active Directory identity store. Consider these scenarios:

- When a role member searches, Directory Manager looks up the localOU container. It displays objects with the Country attribute set to United States.
- If you specify a container only, a search by role members returns all matching objects in that container.
- If you specify an LDAP filter only, a search by role members displays objects with the Country attribute set to United States from all containers in the identity store.

## Impact of the Search policy on the portal

The Search policy affects the Directory Manager portal in these ways:

- It determines the groups to display in all group listings, such as those on the **All Groups** and **My Groups** pages.
- It determines the users to display in user listings, namely **My Direct Reports** and **Disabled Users**.
- It sets the search scope for the Find dialog box.
- It sets the scope for quick search and advanced search.

## Set the search scope to a specific container

To set the search scope to a specific container:

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Search** tab.
7. Click **Add** next to **Add Container**.
8. On the **Add Container** dialog box, select a container and click **Add**. Searches by role members display objects from this container and its sub-containers.
9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

:::note
An advanced setting for the Directory Manager portal, Search Default, controls the search scope of the portal. If its value is "Global Catalog", the portal ignores the container you specify here and shows objects from the entire directory. See the [Manage Advanced Portal Settings in Directory Manager](/docs/directorymanager/11.1/admincenter/applications/portal/server/advanced.md) topic.
:::

## Set the search scope to all containers in the identity store

When no container is specified as the search scope for an identity store, searches by role members fetch objects from all OUs in the identity store.

**To set the search scope to all containers:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Search** tab.
7. In the **Container** area, click **Remove** for a container to remove it.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

## Designate a criterion for the search scope

When you apply a filter criterion, searches by role members show objects that match the criteria.

**To designate a criterion:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Search** tab.
7. In the **Filters** area, click **Add Filter**.
8. In the row that appears, add a criterion:

    1. Select a schema attribute in the first dropdown list (for example, mail).
    2. Select an operator in the second dropdown list (for example, Ends with).
    3. Enter a value for the schema attribute in the third box (for example, @Netwrix.com).

    With this filter, searches by role members display objects with email addresses on the netwrix.com domain.

**Advanced Filter**

You can also define a query by adding more rows and applying the **AND** or **OR** operator to group them.

1. Define two or more filter expressions. To select a row, click the down arrow next to it and click **Select Row**. Select two or more rows and apply one of these operators:

    - **AND:** to display the objects having the specified values for all attributes.
    - **OR:** to display objects having the specified value for any one of the attributes.

    ![Filter area showing two rows joined by an AND operator](/images/directorymanager/11.1/admincenter/securityrole/policy/search_query.webp)

2. Click the ellipsis button for an applied operator to display the context menu. It has these options:

    - **Select Group:** to select all rows that make up the query.
    - **Ungroup:** to remove the operator and ungroup the rows.
    - **Change to OR:** to change the AND operator to OR and vice versa.
    - **Add Clause:** to add a new row for specifying another clause for the query.
    - **Delete:** to delete the operator along with all the rows that the operator joins.

    You can also:

    - Click **Tree View** to view a list of all queries defined.
    - Click **Preview** to preview the search results that this Search policy displays, based on the container and filter settings on the **Search** tab.
    - Click **Clear** to clear the **Filter** area.

3. After defining a filter, click **OK**.
4. On the **Edit Security Role** page, click **Update Security Role**.
5. On the **Security Roles** page, click **Save**.
