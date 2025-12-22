---
title: "Linked Field Drop-down List Display Type"
description: "Linked Field Drop-down List Display Type"
sidebar_position: 40
---

# Linked Field Drop-down List Display Type

A linked field drop-down list is displayed in the portal as a drop-down list with multiple values.
When a user selects a value, all fields linked to that value are auto populated. Since these fields
remain isolated, they are not displayed to the user.

Use a linked field drop-down list, for example, when you want the _Office Address, Business Phone
Number, Fax Number_ and _Email_ fields to be auto populated when a user selects his or her office
name from a drop-down list. Here, `<office name>` is the key value while Office Address, Business
Phone Number, Fax Number and Email are its linked (isolated) fields.

To define a linked field drop-down list:

- Specify a value, called a key value.
- Link schema attributes (fields) with this key value. For each attribute that you link, you must
  also provide a value.

## Define a Linked Field Drop-down List Display Type

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to define a custom display type for it.
   All identity stores associated with the portal are listed under **Design Settings**. You can
   design a different portal for each of these.
4. Click **Custom Display Types** in the left pane.
5. On the **Custom Display Types** page, click **Add** on the **Custom Display Types** tab.
6. On the **New Display Type** pane, enter a name for the display type and select _Linked Field
   Dropdown List_ in the **Type** drop-down list.
   You cannot change the name of a custom display type once you have created it.
7. Use the **Values** area to specify the key values to appear in the drop-down list.

    1. To add a key value, click **Add Value**. The **Key Value** pane is displayed.
    2. In the **Key Value** box, enter a key value. A key value is one that is displayed in the
       drop-down list in the portal. Selecting it auto populates the isolated linked fields.
    3. The **Linked Fields** area is for specifying the fields to link with this key value. Click
       **Add Linked Field**. The **Linked Field** pane is displayed.

        1. In the **Field** drop-down list, select a schema attribute that you want to create as a
           linked field for the key value.
        2. In the **Value** box, enter a value for the attribute.
        3. Click **OK**. The linked field gets listed in the **Linked Fields** area on the **Key
           Value** pane.

    4. Repeat step 7c to add as many linked fields as required.
    5. After defining the linked fields, click **OK** on the **Key Value** pane.
       With that, the key value is displayed in the **Values** area on the **New Display Type**
       pane.

8. Repeat step 7 to define more values in the list.

    - To edit a key value, click **Edit** for it.
    - To remove a key value from the list, click **Delete** for it.

9. Select a key value in the **Default Selection** list to set it as the default value to be
   displayed in the drop-down list in the portal.
   The **Default Selection** list contains all key values defined in the **Values** area.
10. Click **OK**.
11. Click **Save** on the **Custom Display Types** page.

A linked field drop-down list is displayed in the portal as a drop-down list. When a portal user
selects a value and saves it, the isolated linked fields are auto populated with the predefined
values and a message, similar to the following, is displayed.

![linked_field_message](/images/directorymanager/11.1/admincenter/portal/displaytype/linked_field_message.webp)

Here, **Department** is the key value. Selecting it in the drop-down list populates the **Company**
field with the predefined value.
