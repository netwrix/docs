---
title: "Customize the Create Object Wizards"
description: "Customize the Create Object Wizards"
sidebar_position: 100
---

# Customize the Create Object Wizards

Using a portal, users can create different directory objects, namely:

- User
- Mailbox
- Contact
- Static Group
- Smart Group
- Organizational Dynasty
- Geographical Dynasty
- Managerial Dynasty
- Custom Dynasty

The portal provides a separate wizard for creating each of these objects. You can customize a wizard
as needed.

NOTE: In the portal, the _Create Group_ wizard starts with the _Group Type_ page, where users can
select the type of group they want to create. Options on this page vary, depending on the
permissions assigned to the user in the identity store. (See the
[Security Role – Permissions](/docs/directorymanager/11.0/signin/securityrole/permissions.md)
topic.)

- If a user has the _Create Static Group_ permission and is denied the _Create Smart Group_
  permission, only the _Static Group_ option is displayed on the _Group Type_ page.
- If a user has the _Create Smart Group_ permission and is denied the _Create Static Group_
  permission, all options except _Static Group_ are displayed on the _Group Type_ page.
  ![group_type](/images/directorymanager/11.0/admincenter/portal/design/group_type.webp)

NOTE: You can customize the _Group Type_ page individually for static group, Smart Group, and each
of the Dynasty types. However:

- If a user has permissions to create both static groups and Smart Groups, the _Group Type_ page
  created for _Static Group_ would be displayed to the user in the portal.
- If a user does not have permission to create static groups, but has permission to create Smart
  Groups, the _Group Type_ page created for _Smart Group_ would be displayed to the user in the
  portal for Smart Groups and Dynasties.

What do you want to do?

- [Add a Page to a Wizard](#add-a-page-to-a-wizard)
- [Update a Wizard Page](#update-a-wizard-page)
- [Rearrange the Pages on a Wizard](#rearrange-the-pages-on-a-wizard)
- [Remove a Page from a Wizard](#remove-a-page-from-a-wizard)
- [Add a Field to a Wizard Page](#add-a-field-to-a-wizard-page)
- [Update a Field](#update-a-field)
- [Rearrange the Fields on a Wizard Page](#rearrange-the-fields-on-a-wizard-page)
- [Remove a Field from a Wizard Page](#remove-a-field-from-a-wizard-page)

## Add a Page to a Wizard

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Create Object** in the left pane. The **Create Object** page is displayed.
5. In the **Select Directory Object** drop-down list, select a directory object.
   The **Name** list displays the pages on the object’s creation wizard.
6. Click **Add**. The **Add Category** pane is displayed.
7. In the **Name** box, enter a name for the page. The page will be displayed in the wizard with
   this name.
8. In the **Visibility Level** drop-down list, select a security role. The page would be visible to
   users of this role and roles with a priority value higher than this role. See
   [Priority](/docs/directorymanager/11.0/signin/securityrole/manage.md).
   Select _Never_ to hide the page from all users.
9. To add fields to the page, see the [Add a Field to a Wizard Page](#add-a-field-to-a-wizard-page)
   topic.
10. Click **OK**.
11. Click **Save** on the **Create Object** page.

## Update a Wizard Page

You can update the following for a page:

- Name
- Visibility level

**To update a wizard page:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object**
   drop-down list.
6. In the **Name** list, click **Edit** for a page.
7. On the **Edit Category** pane, update the name and visibility level for the page. Follow steps
   7-11 in the [Add a Page to a Wizard](#add-a-page-to-a-wizard) topic for details.

## Rearrange the Pages on a Wizard

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Setting**s. You can design a
   different portal for each of these.
4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object**
   drop-down list.
   The **Name** list displays the pages on the object’s creation wizard.
6. To change the order that pages are displayed on the wizard, click the equal sign for a page and
   drag to change its position.
7. Click **Save**.

## Remove a Page from a Wizard

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object**
   drop-down list.
   The **Name** list displays the pages on the object’s creation wizard.
6. Click **Remove** for a page to remove it.
7. Click **Save**.

## Add a Field to a Wizard Page

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object**
   drop-down list.
   The **Name** list displays the pages on the object’s creation wizard.
6. Click **Edit** for the page you want to add a field to.
7. On the **Edit Category** pane, click **Add Field.**The **Add Field** pane is displayed.
8. In the **Field** drop-down list, select a schema attribute to link to this field.
9. In the **Display Name** box, enter a display name for the field. This name is the field’s label
   on the wizard.
10. In the **Display Type** drop-down list, select a display type to use for rendering this field on
    the wizard.
    The list contains basic display types and custom display types defined on the **Custom Display
    Types** page. See the
    [Display Type Categories](/docs/directorymanager/11.0/signin/applications/portal/categories/categories.md)
    topic.
11. In the **Visibility Level** drop-down list, select a security role. The field would be visible
    to users of the selected role and roles with a priority value higher than the selected role. See
    [Priority](/docs/directorymanager/11.0/signin/securityrole/manage.md).
    Select _Never_ to hide the field from all users.
12. As mentioned for visibility level, the field is visible to members of the selected role and
    roles with a priority value higher than the selected role.
    In the **Exclude Roles** area, select the check boxes for the higher priority role(s) you want
    to hide the field from.
13. In the **Tooltip Text** box, enter the text to display when a user hovers the mouse over the
    field.
14. In the **Max Length** box, enter a number that represents the maximum number of characters that
    users can enter as value for this field.
    Entering _0_ indicates that users can enter an unlimited number of characters as value.
15. Use the **Search Object Types** area to specify the object types (User, Contact, and/or Group)
    that can be searched on the portal’s _Find_ dialog box, to set as value for the field.
    The following display types support the _Find_ dialog box:

    - DN
    - DNs
    - Custom display types created with the Grid type

    When you select any of these display types, GroupID identifies that the value for the field has
    to be searched using the _Find_ dialog box. The **Search Object Types** area is displayed, where
    you can select the required object type(s). For example, if you select _Group_, only groups can
    be searched and selected as value for the field.
    You can launch the _Find_ dialog box from multiple portal pages to search for objects to
    designate as owners, managers, additional owners, members, and more. While specifying the
    searchable object type(s), you must be aware of the kind of value the field requires.

16. In the **Default Value** box, enter the default value that would be displayed in the field on
    the portal.
    Users can update this value, provided that the **Is Read Only** check box is not selected.
17. Select the **Is Required** check box to make it mandatory for users to provide a value for the
    field.
18. Select the **Is Read Only** check box to make the field read-only.
19. Select the **Filter Bad Words** check box to ensure that users do not enter any bad word in this
    field.
    A value entered for the field is checked against the words listed on the **Bad Words List**
    page. Matched values cannot be saved. See the
    [Manage the Bad Words List](/docs/directorymanager/11.0/signin/applications/portal/displaytype/badwords.md)
    topic.
20. Click **OK**. The field is displayed in the **Fields** area on the **Edit Category** pane. You
    can rearrange the fields, update field properties, and even remove a field from the wizard page.
21. Click **OK**.
22. Click **Save** on the **Create Object** page.

## Update a Field

You can change the following for a field:

- The name of the field (this is the field label in the portal)
- The schema attribute linked with the field
- The display type used to render the field in the portal
- Visibility level
- Tooltip

The following field properties vary from field to field. You can:

- Set a default value for the field
- Specify the maximum characters that a user can enter as value for the field
- Make the field editable or read–only
- Prevent users from using certain words as value for the field
- Make it optional or mandatory for users to provide a value for the field
- For search fields, you can specify the object types (groups, users, contacts) that can be searched
  and set as field value

**To update field properties:**

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object**
   drop-down list.
   The **Name** list displays the pages on the object’s creation wizard.
6. Click **Edit** for the page you want to edit a field for.
7. On the **Edit Category** pane, click **Edit** for a field to update its properties.
8. The **Edit Field** pane is displayed. Follow steps 8-22 in the
   [Add a Field to a Wizard Page](#add-a-field-to-a-wizard-page) topic to update and save the
   information.

## Rearrange the Fields on a Wizard Page

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object**
   drop-down list.
   The **Name** list displays the pages on the object’s creation wizard.
6. Click **Edit** for the page you want to rearrange the fields for.
7. On the **Edit Category** pane, the fields on the wizard page are listed in the **Fields** area.
   To rearrange the fields on the page, click the equal sign for a field and drag to change its
   position.
8. Click **OK**.
9. Click **Save** on the **Create Object** page.

## Remove a Field from a Wizard Page

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Create Object** in the left pane.
5. On the **Create Object** page, select a directory object in the **Select Directory Object**
   drop-down list.
   The **Name** list displays the pages on the object’s creation wizard.
6. Click **Edit** for the page you want to remove a field from.
7. On the **Edit Category** pane, the fields on the wizard page are listed in the **Fields** area.
   Click **Remove** for a field to remove it.
8. Click **OK**.
9. Click **Save** on the **Create Object** page.

See Also

- [Design a Portal with Display Types](/docs/directorymanager/11.0/signin/applications/portal/displaytype/overview.md)
