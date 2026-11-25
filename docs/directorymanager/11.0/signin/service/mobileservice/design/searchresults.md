---
title: "Customize Search Results Pages in the Directory Manager Mobile App"
description: "Add, edit, or remove the fields on the Groups and Default search results pages in the Directory Manager mobile app."
keywords:
  - mobile app search results
  - mobile app search results fields
  - groups search results page
  - default search results page
  - edit search results pane
sidebar_position: 20
---

# Customize Search Results Pages in the Directory Manager Mobile App

When a user searches for objects in the Directory Manager app, matched items appear on the following
search results pages:

- Groups: displays search results for group objects.
- Default: displays search results for user and contact objects.

You can customize these pages by adding, updating, and removing fields.

What do you want to do?

- [Add a Field to a Search Results Page](#add-a-field-to-a-search-results-page)
- [Edit a Field on a Search Results Page](#edit-a-field-on-a-search-results-page)
- [Remove a Field from a Search Results Page](#remove-a-field-from-a-search-results-page)

## Add a Field to a Search Results Page

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select an identity store under **Design Settings** to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under **Design Settings**. You
   can design a different app for each of these.
4. Click **Search Forms** in the left pane.  
   The **Search Results** tab of the **Search Forms** page lists the search result forms in the
   Directory Manager mobile app.
5. Click **Edit** for a form to modify it.
6. On the **Edit Search Results** pane, the **Fields** area lists the fields available on the search
   results page. Click **Add Field** to add a new field.
7. On the **Add Field** pane, provide the following information and click **OK**:

    - **Field** – Select a schema attribute to link to this field. The field displays the value
      of this attribute on the search results page.
    - **Display Name** – Enter a display name for the field. This name is the field's label on the
      search results page.
    - **ToolTip** – Enter the text to appear when a user hovers the mouse over the field.
    - **Display Type** – Select a display type to render this field in the app.

8. Click **OK** on the **Edit Search Results** pane.
9. Click **Save**.

## Edit a Field on a Search Results Page

You can change the following for a field on a search results page:

- The name of the field, as displayed in the app
- The schema attribute linked to the field
- The display type used to render the field in the app
- The tooltip for the field

To update a field:

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select an identity store under **Design Settings** to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under **Design Settings**. You
   can design a different app for each of these.
4. Click **Search Forms** in the left pane.  
   The **Search Results** tab of the **Search Forms** page lists the search result forms in the
   Directory Manager mobile app.
5. Click **Edit** for a form to modify it.
6. On the **Edit Search Results** pane, click **Edit** for a field to update it.  
   The **Edit Field** pane opens. Follow step 7 onward in the
   [Add a Field to a Search Results Page](#add-a-field-to-a-search-results-page) topic to update the
   field.

## Remove a Field from a Search Results Page

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select an identity store under **Design Settings** to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under **Design Settings**. You
   can design a different app for each of these.
4. Click **Search Forms** in the left pane.  
   The **Search Results** tab of the **Search Forms** page lists the search result forms in the
   Directory Manager mobile app.
5. Click **Edit** for a form to modify it.
6. On the **Edit Search Results** pane, click **Remove** for a field to remove it from the search
   results page.
7. Click **OK**.
8. Click **Save**.

**See Also**

- [Directory Manager Mobile Service Overview](/docs/directorymanager/11.0/signin/service/mobileservice/overview.md)
- [Design Settings for the Mobile Service](/docs/directorymanager/11.0/signin/service/mobileservice/design/overview.md)
