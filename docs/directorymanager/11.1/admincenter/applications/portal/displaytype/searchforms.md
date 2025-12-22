---
title: "Customize Search Forms"
description: "Customize Search Forms"
sidebar_position: 10
---

# Customize Search Forms

You can customize the search forms for a portal. You can:

- Add new fields
- Edit existing fields
- Remove fields
- Change the arrangement of fields on a page

:::note
You can only customize existing search forms; you cannot add new ones.
:::


### Customizable Search Forms

The following table lists the search forms that you can customize:

| Search Form Name | Description                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Default          | Manage the search fields on the _Advanced Search_ page, where users can search directory objects (user, group, contact) by different attributes. This page is displayed when users click the _Advanced Search_ link.                                                                                                                |
| Find Dialog      | Manage the search fields on the _Find_ dialog box. The _Find_ dialog box can be launched from various portal pages, for example, from the **Owner** tab, **Members** tab, and **Member Of** tab in group properties. It is used to search for objects to designate as owners, managers, additional owners, group members, and more. |

**What do you want to do?**

- Add a Field to a Search Form
- Update a Field on a Search Form
- Remove a Field from a Search Form

## Add a Field to a Search Form

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Search Forms** in the left pane.
5. On the **Search Form** tab, the search forms available in the portal are listed under **Name**.  
   To modify a form, click **Edit** for it.
6. On the **Edit Search Form** pane, the **Fields** area lists the fields available on the search
   form for performing a search.  
   Click **Add Field** to add a new field. The **Add Field** pane is displayed.
7. In the **Field** drop-down list, select a schema attribute to link to the field.  
   The search string that portal users enter in the field will be matched to this attribute’s values
   to fetch search results.
8. In the **Display Name** box, enter a display name for the field. This name is the field’s label
   on the search form.
9. In the **Tooltip** box, enter the text to appear when a user hovers the mouse over the field.
10. In the **Display Type** drop-down list, select the display type to use to render this field in
    the portal. The list contains basic display types and custom display types defined on the
    **Custom Display Types** page. See the
    [Display Type Categories](/docs/directorymanager/11.1/admincenter/applications/portal/categories/categories.md) topic.
11. Click **OK.** The field is displayed in the **Fields** area on the **Edit Search Form** pane.  
    To rearrange the fields on the search form, click the plus sign for a field and drag to change
    its position.
12. Click **OK**.
13. Click **Save** on the **Search Forms** page.

## Update a Field on a Search Form

You can change the following for a field on a search form:

- The name of the field, as displayed in the portal
- The schema attribute linked to the field
- The display type used to render the field in the portal
- The tooltip for the field

**To update a field:**

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Search Forms** in the left pane.
5. On the **Search Form** tab, the search forms available in the portal are listed under
   **Name**.Click **Edit** for a form to update its fields.
6. On the **Edit Search Form** pane, click **Edit** for a field to update it.
7. The **Edit Field** pane is displayed. Refer to step 7 and onwards in the Add a Field to a Search
   Form topic to update the field.

## Remove a Field from a Search Form

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Search Forms** in the left pane.
5. On the **Search Form** tab, click **Edit** for the form you want to remove a field from.
6. On the **Edit Search Form** pane, click **Remove** for a field to remove it.
7. Click **OK**.
8. Click **Save** on the **Search Forms** page.