---
title: "Customize Object Properties Pages"
description: "Customize Object Properties Pages"
sidebar_position: 30
---

# Customize Object Properties Pages

Users can view basic information (properties) of the following directory objects in the GroupID app:

- Users/Contacts
- Groups

You can customize the property page for an object by specifying the fields (attributes) to display
for that object in the app.

What do you want to do?

- [Add a Field to the Properties Page](#add-a-field-to-the-properties-page)
- [Edit a Field on the Properties Page](#edit-a-field-on-the-properties-page)
- [Remove a Field from the Properties Page](#remove-a-field-from-the-properties-page)

## Add a Field to the Properties Page

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select an identity store under **Design Settings** to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under **Design Settings**. You
   can design a different app for each of these.
4. Click **Properties** in the left pane. The **Properties** page is displayed.
5. In the **Select Directory Object** drop-down list, select a directory object.  
   The **Name** list displays the tabs currently available on the object’s properties page.
6. Click **Edit** for a form to modify it.
7. On the **Edit Design Category** pane, the **Fields** area displays the fields on the properties
   page. Click **Add Field**.
8. On the **Add Field** pane, provide the following information and click **OK**:

    - **Field** – Select a schema attribute to link to the field. The field will display the value
      of this attribute.
    - **Display Name** – Enter a display name for the field. This name serves as the field’s label
      in the app.
    - **Display Type** – Select a display type to render this field in the app.

9. Click **OK** on the **Edit Design Category** pane.
10. Click **Save**.

## Edit a Field on the Properties Page

You can change the following for a field on a properties page:

- The name of the field, as displayed in the app
- The schema attribute linked to the field
- The display type used to render the field in the app

**To update a field:**

1. In Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select an identity store under **Design Settings** to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under **Design Settings**. You
   can design a different app for each of these.
4. Click **Properties** in the left pane.
5. On the **Properties** page, select a directory object in the **Select Directory Object**
   drop-down list.  
   The **Name** list displays the tabs currently available on the object’s properties page.
6. Click **Edit** for a form to modify it.
7. On the **Edit Design Category** pane click **Edit** for a field to update it.  
   The **Edit Field** pane is displayed. Follow steps 8-10 in the
   [Add a Field to the Properties Page](#add-a-field-to-the-properties-page) topic to update the
   field.

## Remove a Field from the Properties Page

1. n Admin Center, select **Applications** in the left pane.
2. On the **Mobile Service** tab, click the ellipsis button for a service and select **Settings**.
3. Select an identity store under **Design Settings** to customize the app design for it.  
   All identity stores associated with the Mobile service are listed under **Design Settings**. You
   can design a different app for each of these.
4. Click **Properties** in the left pane.
5. On the **Properties** page, select a directory object in the **Select Directory Object**
   drop-down list.  
   The **Name** list displays the tabs currently available on the object’s properties page.
6. Click **Edit** for a form to modify it.
7. On the **Edit Design Category** pane, the **Fields** area displays the fields on the properties
   page. Click **Remove** for a field to remove it from the properties page.
8. Click **OK**.
9. Click **Save**.

**See Also**

- [Mobile Service](/docs/directorymanager/11.0/signin/service/mobileservice/overview.md)
- [Design Settings](/docs/directorymanager/11.0/signin/service/mobileservice/design/overview.md)
