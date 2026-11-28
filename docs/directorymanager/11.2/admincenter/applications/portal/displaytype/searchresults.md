---
title: "Customize Search Results in the Directory Manager Portal"
description: "Add, edit, remove, and rearrange the fields that display on the search results pages and column headers in the Directory Manager portal."
keywords:
  - Directory Manager
  - search results
  - column headers
  - search results fields
  - display types
sidebar_position: 20
---

# Customize Search Results in the Directory Manager Portal

You can customize the search result pages for a portal. You can:

- Add new fields
- Edit existing fields
- Remove fields
- Change the arrangement of fields on a page

:::note
You can only customize existing search result pages. You can't add new ones.
:::

## Customizable search results pages

The following table lists the search results pages that you can customize:

| Form name | Description |
| --------- | ----------- |
| Smart Group Preview | Manage the column headers on the preview page, which appears when users click **Preview** in the **Query Designer** dialog box. Users preview the results that the specified query returns for the Smart Group or Dynasty. The **Query Designer** dialog box opens from the Smart Group page when users create a Smart Group or Dynasty, and from the Smart Group tab in group properties. |
| Default | Manage the column headers on the **All** tab of the search results page. This page appears when users search on the **Advanced Search** page in the portal. The **Advanced Search** page opens from the **Advanced Search** link. |
| User | Manage the column headers on the following portal pages: <ul><li>The **My Direct Reports** tab, where users view a list of their direct reports. This tab appears when users click **Users > My Direct Reports** in the portal.</li><li>The **Users** and **Contacts** tabs on the search results page, which appears when users search on the **Advanced Search** page in the portal.</li></ul> |
| Disabled Users | Manage the column headers on the **Disabled Users** tab in the portal, which lists the disabled users in the directory. This tab appears when users click **Users > My Direct Reports** and then the **Disabled Users** tab in the portal. |
| Groups | Manage the column headers on the following portal pages: <ul><li>The **All Groups** page, on all tabs except **Expired Groups** and **Expiring Groups**</li><li>The **My Groups** page, on all tabs except **My Expired Groups** and **My Expiring Groups**</li><li>The **Groups** tab on the search results page, which appears when users search on the **Advanced Search** page in the portal.</li></ul> |
| Expiring Groups | Manage the column headers on the following tabs in the portal: <ul><li>Groups > All Groups and then the **Expiring Groups** tab. It lists the groups in the directory that expire in 30 days or less.</li><li>Groups > My Groups and then the **My Expiring Groups** tab. It lists the groups of the logged-on user that expire in 30 days or less.</li></ul> |
| Expired Groups | Manage the column headers on the following tabs in the portal: <ul><li>Groups > All Groups and then the **Expired Groups** tab. It lists the expired groups in the directory.</li><li>Groups > My Groups and then the **My Expired Groups** tab. It lists the groups of the logged-on user that have expired.</li></ul> |
| Find dialog | Define the attributes to display for objects shown as search results in the **Find** dialog box. Users search for and select objects in this dialog box to designate as owners, managers, additional owners, group members, and more. It has a search area and a search results area. This option controls the column headers (attributes) in the **Search Results** area. The **Find** dialog box opens from various portal pages, for example, from the **Owner**, **Members**, and **Member Of** tabs in group properties. |

## Add a field to a search results page

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Search Forms** in the left pane. Then click the **Search Results** tab.
5. On the **Search Results** tab, the search results pages available in the portal are listed under **Name**. To modify a page, click **Edit** for it.
6. On the **Edit Search Results** pane, the **Fields** area lists the fields that display search results on the selected page. Click **Add Field** to add a new field.
7. On the **Add Field** pane, use the **Field** dropdown list to select a schema attribute to link to the field. The field displays the value of this attribute on the search results page.
8. In the **Display Name** box, enter a display name for the field. This name is the label of the field on the search results page.
9. In the **Tooltip** box, enter the text to appear when a user hovers the mouse over the field.
10. In the **Display Type** dropdown list, select the display type to use to render this field in the portal. The available options are limited to the basic display types textbox, DN, DNs, and Link. See the [Basic Display Types](/docs/directorymanager/11.2/admincenter/applications/portal/categories/categories.md#basic-display-types) topic.
11. Click **OK**. The field appears in the **Fields** area on the **Edit Search Results** pane. To rearrange the fields on the search results page, click the equal sign for a field and drag to change its position.
12. Click **OK**.
13. Click **Save** on the **Search Forms** page.

## Update a field on a search results page

You can change the following for a field on a search results page:

- The name of the field, as displayed in the portal
- The schema attribute linked to the field
- The display type used to render the field in the portal
- The tooltip for the field

**To update a field:**

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Search Forms** in the left pane. Then click the **Search Results** tab.
5. On the **Search Results** tab, click **Edit** for a form to update its fields.
6. On the **Edit Search Results** pane, click **Edit** for a field to update it. The **Edit Field** pane appears.
7. Follow step 7 and onward in the Add a field to a search results page topic to update the field.

## Remove a field from a search results page

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of these.
4. Click **Search Forms** in the left pane. Then click the **Search Results** tab.
5. On the **Search Results** tab, click **Edit** for the form you want to remove a field from.
6. On the **Edit Search Results** pane, click **Remove** for a field to remove it.
7. Click **OK**.
8. Click **Save** on the **Search Forms** page.
