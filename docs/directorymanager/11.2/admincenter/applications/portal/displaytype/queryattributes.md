---
title: "Specify Smart Group Query Attributes in Directory Manager"
description: "Choose which schema attributes, operators, and display types the portal offers in Query Designers and the Group Items By field."
keywords:
  - Smart Group query attributes
  - Query Designer
  - Dynasty query
  - schema attributes
  - Smart Group Attributes
  - query operators
sidebar_position: 90
---

# Specify Smart Group Query Attributes in Directory Manager

For an identity store, you can choose whether all schema attributes or only specific ones are available in the following places in the portal:

- The Query Designer for Smart Groups and Dynasties. Portal users specify queries here to update membership. The Query Designer opens from:

  - The Create Object wizard for Smart Groups and Dynasties
  - The properties page for Smart Groups and Dynasties
  - The upgrade of a static group to a Smart Group or Dynasty

  The schema attributes you specify are available on the Filter Criteria tab of the Query Designer, where users build Smart Group and Dynasty queries.

  ![Filter Criteria tab of the Query Designer listing the available schema attributes](/images/directorymanager/11.2/admincenter/portal/design/filter_criteria_tab.webp)

- The Sub-Manager Query Designer for a Recursive Managerial Dynasty. Users specify a query for sub-manager selection here.

  ![Sub-Manager Query Designer for a Recursive Managerial Dynasty](/images/directorymanager/11.2/admincenter/portal/design/submanagerquery.webp)

- The **Add Attributes** dialog box for Dynasties. The schema attributes you specify are available in the **Group Items By** field, which divides the query results into groups. Directory Manager creates a new child group for each unique value of the attribute that users select in the **Group Items By** field.

  ![Add Attributes dialog box with the Group Items By field](/images/directorymanager/11.2/admincenter/portal/design/addattributes.webp)

- The Query Designer for importing members to a group from an external data source. The specified schema attributes are available on the Filter Criteria tab, where users build membership import queries. To open this Query Designer, click **Import** on the **Members** tab in group properties. This works for static groups, Smart Groups, and Dynasties.

  ![Query Designer for importing members to a group from an external data source](/images/directorymanager/11.2/admincenter/portal/design/importmembers.webp)

- The Query Designer for query-based search. Users define a query here to search the directory. The schema attributes you specify are available on the Filter Criteria tab, where users build search queries. Users open this Query Designer from the portal's Advanced Search page.

You can also specify the following for an attribute:

- The operators that users can apply to the attribute in the Query Designer dialog boxes. For example, if you allow the 'Contains' and 'Equals' operators for the 'cn' attribute, only these operators appear when users select the 'cn' attribute in any Query Designer.
- The display type for entering the attribute's value. For example, it can be a simple text box, a dropdown list, or a button that opens the Find dialog box for searching and selecting an object.
- The maximum number of characters that users can enter as the value of an attribute.

## Allow all schema attributes

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Smart Group Attributes** in the left pane.
5. On the **Smart Group Attributes** page, click the **All Attributes** tile under **Select Smart Group Attributes**. All schema attributes in the identity store (directory) are available to portal users in the Query Designers and the Add Attributes dialog box.
6. Click **Save**.

## Allow specific attributes

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Smart Group Attributes** in the left pane.
5. On the **Smart Group Attributes** page, click the **Selected Attributes** tile under **Select
   Smart Group Attributes**. The **Name** column lists any attributes that you already specified.
6. To add an attribute, click **Add**. The **Add Smart Group Attribute** pane appears.
7. Use the **Fields** box to select one or more schema attributes. These attributes are available in the portal, where users can use them to build Smart Group queries and for other purposes.
8. Use the **Display Name** box to specify a user-friendly name for the attribute. The portal shows the attribute with this name. This box isn't available when you select multiple attributes.
9. Select a security role in the **Visibility Level** dropdown list. The attributes are visible to users of the selected role and to roles with a higher priority value. See [Priority](/docs/directorymanager/11.2/admincenter/securityrole/manage.md). Select **Never** to hide the attributes from all users.
10. Use the **Display Type** dropdown list to specify how users provide a value for the attributes in the portal. For example, you can select a text box, dropdown list, or DN. For DN, users can search for and select a directory object as the value of the attribute.

    The list contains basic display types and the custom display types defined on the **Custom Display Types** page. See the [Directory Manager Display Type Categories](/docs/directorymanager/11.2/admincenter/applications/portal/categories/categories.md) topic.

    When you select multiple attributes in the **Fields** box, this display type applies to each of them. You can edit an attribute later to apply a different display type.

11. In the **ToolTip Text** box, enter the text to display when a user hovers the mouse over the attribute. This box isn't available when you select multiple attributes.
12. In the **Max Length** box, enter the maximum number of characters that users can enter as the value of an attribute. Enter **0** to let the attributes accept an unlimited number of characters.
13. In the **Selected Operators** area, which lists the operators that users can apply to attributes in the Query Designers, select the checkbox for each operator you want to provide for the selected attributes.
14. Click **OK**.
15. Click **Save** on the **Smart Group Attributes** page.

## Update the properties of a query attribute

You can change the following for an attribute:

- The display name. The Query Designers and the Add Attributes dialog box show the attribute with this name.
- The operators that users can apply to the attribute in the Query Designers
- The display type used to provide a value for the attribute in the Query Designers
- The maximum number of characters that users can enter as the value of the attribute in the Query Designers
- The visibility level
- The tooltip

**To update attribute properties:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Smart Group Attributes** in the left pane.
5. On the **Smart Group Attributes** page, click the **Selected Attributes** tile under **Select Smart Group Attributes**. The **Name** column lists any attributes that you already specified.
6. Click **Edit** for an attribute to update its properties.
7. On the **Edit Smart Group Attribute** pane, the attribute name is read-only. To update all other details, follow steps 8 - 15 in the Allow specific attributes topic.

## Remove a query attribute

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Smart Group Attributes** in the left pane.
5. On the **Smart Group Attributes** page, click the **Selected Attributes** tile under **Select Smart Group Attributes**. The **Name** column lists any attributes that you already specified.
6. Click **Remove** for an attribute to remove it. Removed attributes aren't available in the portal for building Smart Group queries and for other purposes. Smart Groups and Dynasties that were created with those attributes are unaffected.
7. Click **Save**.
