---
title: "Customize Search Results"
description: "Customize Search Results"
sidebar_position: 20
---

# Customize Search Results

You can customize the search result pages for a portal. You can:

- Add new fields
- Edit existing fields
- Remove fields
- Change the arrangement of fields on a page

:::note
You can only customize existing search result pages; you cannot add new ones.
:::


### Customizable Search Results Pages

The following table lists the search results pages that you can customize:

| Form Name           | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Smart Group Preview | Manage the column headers on the preview page, which is displayed when users click the **Preview** button on the **Query Designer** dialog box. It enables users to preview the results returned with the specified query for the Smart Group/Dynasty. The **Query Designer** dialog box can be launched from the Smart Group page when creating a new Smart Group or Dynasty, and from the Smart Group tab in group properties.                                                                                                                             |
| Default             | Manage the column headers on the **All** tab of the search results page, which is displayed when users perform a search on the **Advanced Search** page in the portal. The **Advanced Search** page can be launched using the **Advanced Search** link.                                                                                                                                                                                                                                                                                                      |
| User                | Manage the column headers on the following portal pages: <ul><li>The **My Direct Reports** tab, where users can view a list of their direct reports. This tab is displayed when users click **Users > My Direct Reports** in the portal.</li><li>The **Users** and **Contacts** tabs on the search results page, which is displayed when users perform a search on the **Advanced Search** page in the portal.</li></ul>                                                                                                                                     |
| Disabled Users      | Manage the column headers on the **Disabled Users** tab in the portal, which displays a list of disabled users in the directory. This tab is displayed when users click **Users > My Direct Reports** and then the **Disabled Users** tab in the portal.                                                                                                                                                                                                                                                                                                     |
| Groups              | Manage the column headers on the following portal pages: <ul><li>The **All Groups** page – all except the **Expired Groups** and **Expiring Groups** tabs</li><li>The **My Groups** page – all except the **My Expired Groups** and **My Expiring Groups** tabs</li><li>The **Groups** tab on the search results page, which is displayed when users perform a search on the **Advanced Search** page in the portal.</li></ul>                                                                                                                               |
| Expiring Groups     | Manage the column headers on the following tabs in the portal: <ul><li>Groups > All Groups and then the **Expiring Groups** tab . It displays the groups in the directory that will expire in 30 days or less.</li><li>Groups > My Groups and then the **My Expiring Groups** tab. It displays the logged-on user’s groups that will expire in 30 days or less.</li></ul>                                                                                                                                                                                    |
| Expired Groups      | Manage the column headers on the following tabs in the portal: <ul><li>Groups > All Groups and then the **Expired Groups** tab. It displays the expired groups in the directory.</li><li>Groups > My Groups and then the **My Expired Groups** tab. It displays the logged-on user’s groups that have expired.</li></ul>                                                                                                                                                                                                                                     |
| Find dialog         | Define the attributes to display for objects shown as search results on the _Find_ dialog box. The _Find_ dialog box is used to search and select objects to designate as owners, managers, additional owners, group members, and more. It has a _search_ area and a _search results_ area. This option controls the column headers (attributes) displayed in the **Search Results** area. The _Find_ dialog box can be launched from various portal pages, for example, from the **Owner** tab, **Members** tab, and **Member Of** tab in group properties. |


## Add a Field to a Search Results Page

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Search Forms** in the left pane. Then click the **Search Results** tab.
5. On the **Search Results** tab, the search results pages available in the portal are listed under
   **Name**. To modify a page, click **Edit** for it.
6. On the **Edit Search Results** pane, the **Fields** area lists the fields that display search
   results on the selected page.  
   Click **Add Field** to add a new field.
7. On the **Add Field** pane, use the **Field** drop-down list to select a schema attribute to link
   to the field. The field will display the value of this attribute on the search results page.
8. In the **Display Name** box, enter a display name for the field. This name is the field’s label
   on the search results page.
9. In the **Tooltip** box, enter the text to appear when a user hovers the mouse over the field.
10. In the **Display Type** drop-down list, select the display type to use to render this field in
    the portal. Available options are limited to textbox, DN, DNs, and Link, which are basic display
    Types. See the [Basic Display Types](/docs/directorymanager/11.1/admincenter/applications/portal/categories/categories.md#basic-display-types) topic.
11. Click **OK.** The field is displayed in the **Fields** area on the **Edit Search Results**
    pane.  
    To rearrange the fields on the search form, click the equal sign for a field and drag to change
    its position.
12. Click **OK**.
13. Click **Save** on the **Search Forms** page.

## Update a Field on a Search Results Page

You can change the following for a field on a search results page:

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
4. Click **Search Forms** in the left pane; then click the **Search Results** tab.
5. On the **Search Results** tab, click **Edit** for a form to update its fields.
6. On the **Edit Search Results** pane, click **Edit** for a field to update it.  
   The **Edit Field** pane is displayed. Follow step 7 and onwards in the Add a Field to a Search
   Results Page topic to update the field.

## Remove a Field from a Search Results Page

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Search Forms** in the left pane; then click the **Search Results** tab.
5. On the **Search Results** tab, click **Edit** for the form you want to remove a field from.
6. On the **Edit Search Results** pane, click **Remove** for a field to remove it.
7. Click **OK**.
8. Click **Save** on the **Search Forms** page.