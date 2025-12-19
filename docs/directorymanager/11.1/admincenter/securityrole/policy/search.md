---
title: "Search Policy"
description: "Search Policy"
sidebar_position: 40
---

# Search Policy

The Search policy sets the search scope for the Directory Manager portal and Management Shell.

By default, any search performed by role members returns objects from all containers in the identity
store. Use the Search policy to:

- Limit the search scope to one container for role members.
- Designate a criterion to limit the objects that role members can search.

:::note
Microsoft Entra ID supports a single container only, so the search scope cannot be restricted
container-wise in a Microsoft Entra ID identity store.
:::


## How does the Search Policy Work?

Let’s assume you specify a container, localOU, and set the LDAP filter to (Country=United States\*)
for an Active Directory identity store. Now consider these scenarios:

- When a role member performs a search, Directory Manager looks up the localOU container and
  displays objects with the _Country_ attribute set to _United States_.
- If you specify a container only, a search performed by role members returns all matching objects
  residing in that container.
- If you specify an LDAP filter only, a search performed by role members displays objects with the
  _Country_ attribute set to _United States_ from all containers in the identity store.

## Impact of the Search Policy on the Portal

The Search policy has the following impact on the Directory Manager portal:

- It determines the groups to display in all group listings, such as those on the **All Groups** and
  **My Groups** pages.
- It determines the users to display in user listings, namely **My Direct Reports** and **Disabled
  Users**.
- It sets the search scope for the Find dialog box.
- It sets the scope for quick search and advanced search.

## Set the Search Scope to a Specific Container

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Search** tab.
7. Click **Add** next to **Add Container**.
8. On the **Add Container** dialog box, select a container and click **Add**.
   Search performed by role members will display objects from this container and its sub-containers.
9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

:::note
An advanced setting for the Directory Manager portal, _Search Default_, controls the search
scope of the portal. If its value is "Global Catalog", the container specified here is ignored and
the portal shows objects from the entire directory. See the
[Manage Advanced Settings](/docs/directorymanager/11.1/admincenter/applications/portal/server/advanced.md) topic.
:::


## Set the Search Scope to all Containers in the Identity Store

When no container is specified as the search scope for an identity store, search performed by role
members fetches objects from all OUs in the identity store.

**To set the search scope to all containers:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button or an identity store and select
   **Edit.**
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Search** tab.
7. In the **Container** area, click **Remove** for a container to remove it.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

## Designate a Criterion for the Search Scope

When you apply a filter criterion, search performed by role members shows objects that match the
criteria.

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
8. A row is displayed for adding a criterion.

    1. Select a schema attribute in the first drop-down list (for example, _mail_).
    2. Select an operator in the second drop-down list (for example, _Ends with_).
    3. Enter a value for the schema attribute in the third box (for example, _@Netwrix.com_).

    With this filter, search performed by role members will display objects with email addresses
    created on the netwrix.com domain.

**Advanced Filter**

You can also define a query by adding more rows and applying the **AND** or **OR** operator to group
them.

1. After defining two or more filter expressions, select two or more rows and apply one of these
   operators:
   (To select a row, click the down arrow next to it and click **Select Row**.)

    - **AND:** to display the objects having the specified values for all attributes.
    - **OR:** to display objects having the specified value for any one of the attributes.

    ![search_query](/images/directorymanager/11.1/admincenter/securityrole/policy/search_query.webp)

2. Click the ellipsis button for an applied operator to display the context menu, which has the
   following options:

    - **Select Group:** to select all rows that make up the query.
    - **Ungroup:** to remove the operator and ungroup the rows.
    - **Change to OR:** to change the AND operator to OR and vice versa.
    - **Add Clause:** to add a new row for specifying another clause for the query.
    - **Delete:** to delete the operator along with all the rows that the operator joins.

    You can also:

    - Click **Tree View** to view a list of all queries defined.
    - Click **Preview** to preview the search results that will be displayed with this Search
      policy, i.e., with the container and filter settings on the **Search** tab.
    - Click **Clear** to clear the **Filter** area.

3. After defining a filter, click **OK**.
4. On the **Edit Security Role** page, click **Update Security Role**.
5. On the **Security Roles** page, click **Save**.
