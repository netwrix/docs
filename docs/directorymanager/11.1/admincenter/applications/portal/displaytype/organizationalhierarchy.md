---
title: "Specify Organizational Hierarchy Attributes"
description: "Replace the user attributes that the portal shows on the organizational hierarchy chart."
keywords:
  - organizational hierarchy
  - organogram
  - hierarchy chart attributes
  - portal design settings
  - TreePicture display type
sidebar_position: 120
---

# Specify Organizational Hierarchy Attributes

In the portal, you can view the organizational hierarchy for a user. The portal shows the hierarchy as a chart (an organogram) that presents a 360° view of the organization with the specified user as the focal point.

By default, the chart displays four attributes of a user: _title_, _display name_, _email_, and _picture_. You can replace an attribute with another one, but you can't add or remove attributes. The attribute count always remains four.

**What do you want to do?**

- Replace an attribute on the organizational hierarchy chart

## Replace an attribute on the organizational hierarchy chart

1. In Admin Center, select **Applications** in the left pane. On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it. All identity stores linked with the portal are listed under **Design Settings**. You can design a different portal for each of them.
4. Click **Organizational Hierarchy** in the left pane. The **Organizational Hierarchy** page is displayed. By default, the **Display Name** area displays four attributes. The portal shows the values of these attributes for users on the organizational hierarchy chart. You can only replace an attribute with another attribute. You can't add a fifth attribute or reduce the list to three.
5. Click **Edit** for an attribute to replace it. The **Edit Field** pane is displayed.
6. In the **Field** dropdown list, select a schema attribute to display on the organizational hierarchy chart.
7. In the **Display Name** box, enter a user-friendly name for the attribute. This name is the attribute name on the chart, and the attribute's value is displayed next to it.
8. In the **Display Type** dropdown list, select the display type to render the attribute on the chart. The display type must match the attribute. For example, the 'TreePicture' display type matches the 'thumbnailPhoto' attribute. The list contains basic display types and custom display types defined on the **Custom Display Types** page. See the [Directory Manager Display Type Categories](/docs/directorymanager/11.1/admincenter/applications/portal/categories/categories.md) topic.
9. Click **OK**.
10. Click **Save** on the **Organizational Hierarchy** page.
