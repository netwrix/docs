---
title: "Customize the Create Object Wizards in a Directory Manager Portal"
description: "Add, rearrange, and remove wizard pages and fields that portal users see when they create users, groups, contacts, and mailboxes."
keywords:
  - Create Object wizard
  - wizard pages and fields
  - visibility level
  - display type
  - portal design
sidebar_position: 100
---

# Customize the Create Object Wizards in a Directory Manager Portal

Using a portal, users can create the following directory objects:

- User
- Mailbox
- Contact
- Static Group
- Smart Group
- Organizational Dynasty
- Geographical Dynasty
- Managerial Dynasty
- Custom Dynasty

The portal provides a separate wizard for creating each of these objects. You can customize a wizard as needed.

:::note
In the portal, the **Create Group** wizard starts with the **Group Type** page, where users can select the type of group they want to create. Options on this page vary, depending on the permissions assigned to the user in the identity store. See the [Security Role Permissions in Directory Manager](/docs/directorymanager/11.2/admincenter/securityrole/permissions.md) topic.
:::

- If a user has the **Create Static Group** permission and is denied the **Create Smart Group** permission, the **Group Type** page displays only the **Static Group** option.
- If a user has the **Create Smart Group** permission and is denied the **Create Static Group** permission, the **Group Type** page displays all options except **Static Group**.

  ![Group Type page of the Create Group wizard showing the available group types](/images/directorymanager/11.2/admincenter/portal/design/group_type.webp)

:::note
You can customize the **Group Type** page individually for static group, Smart Group, and each of the Dynasty types. However:
:::

- If a user has permissions to create both static groups and Smart Groups, the portal displays the **Group Type** page created for **Static Group**.
- If a user doesn't have permission to create static groups, but has permission to create Smart Groups, the portal displays the **Group Type** page created for **Smart Group** for Smart Groups and Dynasties.

## Add a page to a wizard

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal's card displays its info.

2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.

   All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.

4. Click **Create Object** in the left pane. The **Create Object** page opens.
5. In the **Select Directory Object** dropdown list, select a directory object.

   The **Name** list displays the pages on the object's creation wizard.

6. Click **Add**. The **Add Category** pane opens.
7. In the **Name** box, enter a name for the page. The wizard displays the page with this name.
8. In the **Visibility Level** dropdown list, select a security role. The page is visible to users of this role and roles with a priority value higher than this role. See [Priority](/docs/directorymanager/11.2/admincenter/securityrole/manage.md).

   Select **Never** to hide the page from all users.

9. To add fields to the page, see the [Add a field to a wizard page](#add-a-field-to-a-wizard-page) topic.
10. Click **OK**.
11. Click **Save** on the **Create Object** page.

## Update a wizard page

You can update the following for a page:

- Name
- Visibility level

**To update a wizard page:**

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal's card displays its info.

2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.

   All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.

4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object** dropdown list.

   The **Name** list displays the pages on the object's creation wizard.

6. In the **Name** list, click **Edit** for a page.
7. On the **Edit Category** pane, update the name and visibility level for the page. For details, follow steps 7-11 in the [Add a page to a wizard](#add-a-page-to-a-wizard) topic.

## Rearrange the pages on a wizard

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal's card displays its info.

2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.

   All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.

4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object** dropdown list.

   The **Name** list displays the pages on the object's creation wizard.

6. To change the order that pages appear on the wizard, click the equal sign for a page and drag to change its position.
7. Click **Save**.

## Remove a page from a wizard

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal's card displays its info.

2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.

   All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.

4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object** dropdown list.

   The **Name** list displays the pages on the object's creation wizard.

6. Click **Remove** for a page to remove it.
7. Click **Save**.

## Add a field to a wizard page

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal's card displays its info.

2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.

   All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.

4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object** dropdown list.

   The **Name** list displays the pages on the object's creation wizard.

6. Click **Edit** for the page you want to add a field to.
7. On the **Edit Category** pane, click **Add Field**. The **Add Field** pane opens.
8. In the **Field** dropdown list, select a schema attribute to link to this field.
9. In the **Display Name** box, enter a display name for the field. This name is the field's label on the wizard.
10. In the **Display Type** dropdown list, select a display type to use for rendering this field on the wizard.

    The list contains basic display types and custom display types defined on the **Custom Display Types** page. See the [Directory Manager Display Type Categories](/docs/directorymanager/11.2/admincenter/applications/portal/categories/categories.md) topic.

11. In the **Visibility Level** dropdown list, select a security role. The field is visible to users of the selected role and roles with a priority value higher than the selected role. See [Priority](/docs/directorymanager/11.2/admincenter/securityrole/manage.md).

    Select **Never** to hide the field from all users.

12. In the **Exclude Roles** area, select the checkboxes for the higher priority roles you want to hide the field from.

    As the visibility level describes, the field is visible to members of the selected role and roles with a priority value higher than the selected role.

13. In the **Tooltip Text** box, enter the text to display when a user hovers the mouse over the field.
14. In the **Max Length** box, enter a number that represents the maximum number of characters that users can enter as value for this field.

    Entering **0** indicates that users can enter an unlimited number of characters as value.

15. Use the **Search Object Types** area to specify the object types (one or more of User, Contact, and Group) that can be searched on the portal's **Find** dialog box, to set as value for the field.

    The following display types support the **Find** dialog box:

    - DN
    - DNs
    - Custom display types created with the Grid type

    When you select any of these display types, Directory Manager identifies that the value for the field has to be searched using the **Find** dialog box. The **Search Object Types** area is displayed, where you can select the required object types. For example, if you select **Group**, only groups can be searched and selected as value for the field.

    You can launch the **Find** dialog box from multiple portal pages to search for objects to designate as owners, managers, additional owners, members, and more. While specifying the searchable object types, you must be aware of the kind of value the field requires.

16. In the **Default Value** box, enter the default value that is displayed in the field on the portal.

    Users can update this value, provided that the **Is Read Only** checkbox isn't selected.

17. Select the **Is Required** checkbox to make it mandatory for users to provide a value for the field.
18. Select the **Is Read Only** checkbox to make the field read-only.
19. Select the **Filter Bad Words** checkbox to ensure that users don't enter any bad word in this field.

    Directory Manager checks a value entered for the field against the words listed on the **Bad Words List** page. Matched values can't be saved. See the [Manage the Bad Words List in a Directory Manager Portal](/docs/directorymanager/11.2/admincenter/applications/portal/displaytype/badwords.md) topic.

20. Click **OK**. The field is displayed in the **Fields** area on the **Edit Category** pane. You can rearrange the fields, update field properties, and even remove a field from the wizard page.
21. Click **OK**.
22. Click **Save** on the **Create Object** page.

## Update a field

You can change the following for a field:

- The name of the field (this is the field label in the portal)
- The schema attribute linked with the field
- The display type used to render the field in the portal
- Visibility level
- Tooltip

The following field properties vary from field to field. You can:

- Set a default value for the field
- Specify the maximum characters that a user can enter as value for the field
- Make the field editable or read-only
- Prevent users from using certain words as value for the field
- Make it optional or mandatory for users to provide a value for the field
- For search fields, specify the object types (groups, users, contacts) that can be searched and set as field value

**To update field properties:**

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal's card displays its info.

2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.

   All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.

4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object** dropdown list.

   The **Name** list displays the pages on the object's creation wizard.

6. Click **Edit** for the page you want to edit a field for.
7. On the **Edit Category** pane, click **Edit** for a field to update its properties.
8. The **Edit Field** pane opens. To update and save the information, follow steps 8-22 in the [Add a field to a wizard page](#add-a-field-to-a-wizard-page) topic.

## Rearrange the fields on a wizard page

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal's card displays its info.

2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.

   All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.

4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object** dropdown list.

   The **Name** list displays the pages on the object's creation wizard.

6. Click **Edit** for the page you want to rearrange the fields for.
7. On the **Edit Category** pane, the **Fields** area lists the fields on the wizard page. To rearrange the fields on the page, click the equal sign for a field and drag to change its position.
8. Click **OK**.
9. Click **Save** on the **Create Object** page.

## Remove a field from a wizard page

1. In Admin Center, select **Applications** in the left pane.

   On the **GroupID Portal** tab, a portal's card displays its info.

2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.

   All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.

4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object** dropdown list.

   The **Name** list displays the pages on the object's creation wizard.

6. Click **Edit** for the page you want to remove a field from.
7. On the **Edit Category** pane, the **Fields** area lists the fields on the wizard page. Click **Remove** for a field to remove it.
8. Click **OK**.
9. Click **Save** on the **Create Object** page.
