---
title: "Configure a Query Designer Policy for a Security Role"
description: "Restrict the containers, object types, tabs, attributes, and operators that security role members can use in the Directory Manager Query Designer."
keywords:
  - Directory Manager
  - Query Designer
  - Smart Group query
  - security role policy
  - allowed attributes
sidebar_position: 90
---

# Configure a Query Designer Policy for a Security Role

Define a role-based access policy for the Query Designer to control what role members can use when they build queries. Users create queries in the Query Designer for various purposes, as described in the [Specify Smart Group Query Attributes in Directory Manager](/docs/directorymanager/11.1/admincenter/applications/portal/displaytype/queryattributes.md) topic.

Use the Query Designer policy to restrict these features for a security role:

- Policy application on new groups, or on existing groups as well.
- The Start In container. Specify the containers that the Query Designer displays to role members. Queries that role members create can't run beyond the specified containers. You can also enforce the allowed containers so that role members can't change them.
- Object types. Limit the object types that role members can include in queries. You can also enforce the allowed object types so that role members can't exclude any of them from queries.
- Tabs on the Query Designer. All tabs are available to users by default. You can hide any of them from role members.
- Attributes and their operators. Specify the attributes that role members can use to build queries for Smart Groups and Dynasties. For each attribute, you can also specify the operators that role members can apply to it.

![Query Designer dialog box with callouts for object types, start-in container, tabs, filter criteria, attributes, and operators](/images/directorymanager/11.1/admincenter/securityrole/policy/querydesigner.webp)

You can also specify a default filter criterion, made up of an attribute, an operator, and a value. It appears on the **Filter Criteria** tab of the Query Designer. Role members can change this criterion as required.

If you already restricted some schema attributes for the Query Designer pages in the portal, the schema attribute settings you specify here override those settings.

## Apply the policy to groups

You can apply the role-based access policy for the Query Designer to newly created groups (Smart Groups and Dynasties) in Directory Manager 11.1 only, or to all existing groups as well.

**To apply the policy on groups:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. On the **Query Designer** tab:

    - Enable the **Apply policy only to newly created groups** toggle button to apply the policy to new groups created in Directory Manager 11.1.

        For example, say the following policy is defined for a user role:

        - **Start In Container: Users**
        - Enforce Start In Containers: Enabled
        - **Objects: Users with Mailboxes**
        - Users with External Email-Address
        - **Objects: Users**
        - Enforce Objects: Enabled
        - **Default filter Criteria: Department is exactly HR**

        When a user of this role creates a new group, the policy applies to it.

    - Disable the **Apply policy only to newly created groups** toggle button to apply the policy to existing groups as well.

    If you later enable the option again for the user role, the policy (with or without any modification) no longer applies to existing groups. All the Query Designer configurations are available to the user for existing groups.

## Limit the search scope of the query to specific containers

By default, the **Start In** field on the Query Designer displays all containers in the directory and all their sub-containers. The query then runs on the entire directory to fetch matching objects. However, users can exclude any container or sub-container.

You can restrict the search scope of the query for role members to one or more containers and sub-containers. Specify the containers and sub-containers to display in the **Start In** field on the **Query Designer** dialog box. You can also enforce the containers so that role members can't remove a container or sub-container.

**To specify containers:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. On the **Query Designer** tab, the **Start In Container** area lists each container and sub-container in the directory individually. This means the entire directory is set as the Start In container.

    - To remove a container or sub-container, click **Remove** for it.
    - To modify the list of allowed containers, click **Modify Container**. On the **Modify
      Container** dialog box, select the required containers and sub-containers, and click **OK**.
      The selected containers are displayed in the **Start In Container** area.

    You can allow a sub-container even if you don't allow its parent container. In this case, the query runs in the sub-container but not in the parent container.

8. Use the **Enforce Start In Containers** toggle button to enforce the start-in containers.

    - When you enforce the allowed containers, they appear as disabled in the **Start In** field on the Query Designer. Role members can't change this setting.
    - When you don't enforce them, role members can remove any of the allowed containers, but they can't add a container beyond the allowed ones.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Limit the objects for use in a query

By default, several object types are available to users on the Query Designer for including in queries. Users select an object type from the **Find** dropdown list and then select its sub-types on the **General** tab of the Query Designer. The query returns the specified object types to include in group membership. For more information about the object types and their sub-types, see the [Query Designer - General tab](/docs/directorymanager/11.1/portal/group/querydesigner/general.md) topic.

You can limit the object types available to role members for use in queries. You can also enforce the object types so that role members can't exclude an allowed object type from queries.

**To limit object types:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. The **Objects** area lists the object types with their sub-types. The following list maps the object types displayed here to the options in the **Find** list on the Query Designer:

    - Exchange = Messaging System Recipients. The sub-types displayed under **Exchange** are the same as those displayed on the **General** tab when you select Messaging System Recipients in the **Find** dropdown list.
    - Computer = Computers
    - All = Users, Contacts, and Groups

    Select the checkboxes for the object sub-types that you want to display to role members in the Query Designer.

8. Use the **Enforce Objects** toggle button to enforce the allowed objects.

    - When you enforce the allowed object types, they appear as disabled in the Query Designer. Role members can't exclude any object type, so the query includes all the allowed object types.
    - When you don't enforce them, role members can exclude any of the allowed object types, but they can't include an object type beyond the allowed ones.

9. Click **OK**.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.

## Hide the tabs on the Query Designer

The Query Designer has multiple tabs, and each tab groups similar settings. The tabs are:

- General: select the object types to include in the query.
- Storage: filter mailboxes.
- Filter Criteria: specify a filter criterion to add objects to group membership.
- Include/Exclude: specify objects to include or exclude in group membership, regardless of the query.
- Database: combine an external data source with the directory to determine a group's membership.
- Script: write scripts to manipulate group membership.
- Password Expiry Options: available for Smart Groups with a password expiry condition.

You can hide any of these tabs from role members.

:::note
The **General** tab appears for all users and can't be hidden. However, you can hide the objects it displays, as described in the Limit the objects for use in a query section.
:::

**To hide a tab:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. The **Tabs** area lists the tabs available on the Query Designer, except the **General** tab. By default, all tabs are selected, so role members see all of them. Clear the checkbox for a tab to hide it from role members.
8. Click **OK**.
9. On the **Edit Security Role** page, click **Update Security Role**.
10. On the **Security Roles** page, click **Save**.

## Restrict the attributes and operators for building a query

By default, role members can use all schema attributes to create a filter criterion for the query (see the **Filter Criteria** tab of the Query Designer). You can:

- Limit the list of attributes that role members see.
- Limit the operators that role members can apply to an attribute.

**To allow specific attributes and operators:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. Click **Edit Allowed Attributes** in the **Attributes** area. The **Allowed Attributes** dialog box opens. By default, all attributes are selected. This means all attributes are available to role members on the **Filter Criteria** tab of the Query Designer for creating queries.

    - Clear the checkboxes for the attributes that you don't want to display to role members. Use the search box to find the attributes you need.
    - You can also clear the **Allow all attributes** checkbox to deny all attributes, then select the checkboxes for the required attributes. You must select at least one attribute.

8. For each attribute, specify the operators that role members can apply to it on the **Filter Criteria** tab. On the **Allowed Attributes** dialog box, click the plus sign next to an attribute and select the checkbox for each operator you want to provide. When role members select an attribute, only its operators appear. For example, if you allow the "Contains" and "Equals" operators for the "cn" attribute, role members see only these operators when they select "cn".

    :::note
    This schema attribute setting overrides the schema attribute setting specified on the Smart Group Attribute page in the portal's design settings. See the [Specify Smart Group Query Attributes in Directory Manager](/docs/directorymanager/11.1/admincenter/applications/portal/displaytype/queryattributes.md) topic.
    :::

9. Click **Save Selection** on the **Allowed Attributes** dialog box. The **Attributes** area displays the count of allowed attributes. To view or update the allowed attributes, click **Edit Allowed Attributes**. On the **Allowed
Attributes** dialog box, select the **Show only selected** checkbox to list the allowed attributes. Make your changes and close the dialog box.
10. Click **OK**.
11. On the **Edit Security Role** page, click **Update Security Role**.
12. On the **Security Roles** page, click **Save**.

## Specify a default filter criteria

Role members can specify a filter criterion on the **Filter Criteria** tab of the Query Designer to determine a group's membership. The criterion uses an attribute, an operator, and a value. For example, the following criterion adds the users in the Human Resources department to the membership of the group:

- Attribute: department
- Operator: Equals
- Value: Human Resources

You can specify a default criterion that appears to role members on the **Filter Criteria** tab. They can change it as required.

:::note
If you limited the attributes and operators for role members, only the allowed attributes and operators are available for creating a default filter criterion.
:::

**To specify a default filter criterion:**

1. In Admin Center, click **Identity Stores** in the left pane.
2. On the **Identity Stores** page, click the ellipsis button for an identity store and select
   **Edit**.
3. Click **Security Roles** under **Settings** in the left pane.
4. On the **Security Roles** page, click **Edit** for a security role.
5. On the **Edit Security Role** page, click **Specify policies for the members** in the
   **Policies** area.
6. On the **Add Policies** pane, click the **Query Designer** tab.
7. Click **Add Filter** in the **Default Filter Criteria** area. A row appears for adding a default criterion.

    - Select a schema attribute in the first dropdown list (for example, title).
    - Select an operator in the second dropdown list (for example, Equals).
    - Enter a value for the attribute in the third box (for example, Manager).

    With this filter, the query fetches users whose job titles are set to Manager. Role members can change it as required.

8. To create an advanced query, add more rows and apply the **AND** or **OR** operator to group them. See steps 1-2 in the [Advanced Filter](/docs/directorymanager/11.1/admincenter/securityrole/policy/search.md) section of the [Designate a Criterion for the Search Scope](search.md#designate-a-criterion-for-the-search-scope) topic. After you create a query, you can:

    - Click **Preview** to list the objects that the query fetches with the current settings on the **Query Designer** tab, namely the start-in container, objects, and default filter criterion.
    - Click **Clear** to delete the default filter criterion.

9. Click **OK** on the **Query Designer** tab.
10. On the **Edit Security Role** page, click **Update Security Role**.
11. On the **Security Roles** page, click **Save**.
