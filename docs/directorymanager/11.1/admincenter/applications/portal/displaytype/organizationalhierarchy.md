---
title: "Specify Attributes for Organizational Hierarchy"
description: "Specify Attributes for Organizational Hierarchy"
sidebar_position: 120
---

# Specify Attributes for Organizational Hierarchy

Using the portal, you can view the organizational hierarchy for a user in the organization. This
hierarchy is displayed in graphical form, creating a kind of an organogram. It presents a 360° view
of the organization with the specified user as the focal point.

By default, the organizational hierarchy chart displays four attributes of a user: _title_, _display
name_, _email_, and _picture_. You can replace an attribute with another one but you cannot add or
remove attributes. Hence the attribute count remains ‘four’.

**What do you want to do?**

- Replace an Attribute on the Organizational Hierarchy Tree

## Replace an Attribute on the Organizational Hierarchy Tree

1. In Admin Center, select **Applications** in the left pane.  
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.  
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Organizational Hierarchy** in the left pane. The **Organizational Hierarchy** page is
   displayed.  
   By default, the **Display Name** area displays four attributes. The values of these attributes
   are displayed for users on the organizational hierarchy chart in the portal. You can only replace
   an attribute with another attribute; you cannot add a fifth attribute or reduce the list to
   three.
5. Click **Edit** for an attribute to replace it. The **Edit Field** pane is displayed.
6. In the **Field** drop-down list, select a schema attribute to display on the organizational
   hierarchy chart.
7. In the **Display Name** box, enter a user-friendly name for the attribute, that would serve as
   the attribute name on the chart. The attribute’s value will be displayed next to this name.
8. In the **Display Type** drop-down list, select the display type to use for rendering the
   attribute on the organizational hierarchy chart. The display type must match the attribute. For
   example, the ‘TreePicture’ display type matches the ‘thumbnailPhoto’ attribute.  
   This list contains basic display types and custom display types defined on the **Custom Display
   Types** page. See the [Display Type Categories](/docs/directorymanager/11.1/admincenter/applications/portal/categories/categories.md) topic.
9. Click **OK**.
10. Click **Save** on the **Organizational Hierarchy** page.