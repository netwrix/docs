---
title: "Customize Search Forms in the Directory Manager Portal"
description: "Add, edit, remove, and rearrange the fields on the Advanced Search and Find dialog search forms in the Directory Manager portal."
keywords:
  - Directory Manager
  - search forms
  - Advanced Search
  - Find dialog
  - search form fields
sidebar_position: 10
---

# Customize Search Forms in the Directory Manager Portal

You can customize the search forms for a portal. You can:

- Add new fields
- Edit existing fields
- Remove fields
- Change the arrangement of fields on a page

:::note
You can only customize existing search forms. You can't add new ones.
:::

## Customizable search forms

The following table lists the search forms that you can customize:

| Search form name | Description |
| ---------------- | ----------- |
| Default | Manage the search fields on the **Advanced Search** page, where users search directory objects (user, group, contact) by different attributes. The portal shows this page when users click the **Advanced Search** link. |
| Find Dialog | Manage the search fields on the **Find** dialog box. The **Find** dialog box opens from various portal pages, for example, from the **Owner**, **Members**, and **Member Of** tabs in group properties. Users search with it for objects to designate as owners, managers, additional owners, group members, and more. |

**What do you want to do?**

- Add a field to a search form
- Update a field on a search form
- Remove a field from a search form

## Add a field to a search form

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Search Forms** in the left pane.
5. On the **Search Form** tab, the search forms available in the portal are listed under **Name**. To modify a form, click **Edit** for it.
6. On the **Edit Search Form** pane, the **Fields** area lists the fields available on the search form. Click **Add Field** to add a new field. The **Add Field** pane appears.
7. In the **Field** dropdown list, select a schema attribute to link to the field. Directory Manager matches the search string that portal users enter in the field to the values of this attribute to fetch search results.
8. In the **Display Name** box, enter a display name for the field. This name is the label of the field on the search form.
9. In the **Tooltip** box, enter the text to appear when a user hovers the mouse over the field.
10. In the **Display Type** dropdown list, select the display type to use to render this field in the portal. The list contains basic display types and the custom display types defined on the **Custom Display Types** page. See the [Directory Manager Display Type Categories](/docs/directorymanager/11.2/admincenter/applications/portal/categories/categories.md) topic.
11. Click **OK**. The field appears in the **Fields** area on the **Edit Search Form** pane. To rearrange the fields on the search form, click the plus sign for a field and drag to change its position.
12. Click **OK**.
13. Click **Save** on the **Search Forms** page.

## Update a field on a search form

You can change the following for a field on a search form:

- The name of the field, as displayed in the portal
- The schema attribute linked to the field
- The display type used to render the field in the portal
- The tooltip for the field

**To update a field:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Search Forms** in the left pane.
5. On the **Search Form** tab, the search forms available in the portal are listed under **Name**. Click **Edit** for a form to update its fields.
6. On the **Edit Search Form** pane, click **Edit** for a field to update it.
7. On the **Edit Field** pane, follow step 7 and onward in the Add a field to a search form topic to update the field.

## Remove a field from a search form

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Search Forms** in the left pane.
5. On the **Search Form** tab, click **Edit** for the form you want to remove a field from.
6. On the **Edit Search Form** pane, click **Remove** for a field to remove it.
7. Click **OK**.
8. Click **Save** on the **Search Forms** page.
