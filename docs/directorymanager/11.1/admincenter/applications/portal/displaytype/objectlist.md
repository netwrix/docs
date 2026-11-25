---
title: "Specify Attributes for the Directory Manager Object List View"
description: "Choose which attributes the portal shows for each group on the Similar Groups tab."
keywords:
  - object list view
  - similar groups
  - portal design settings
  - Card View
  - display attributes
sidebar_position: 140
---

# Specify Attributes for the Directory Manager Object List View

In the portal, the object list is a listing of groups that are similar to another group. Group
similarity is measured on the basis of group type and membership.

Suppose you want to view the groups that are similar to Group A. The **Similar Groups** tab in
Group A’s properties displays the six groups that bear the most similarity to Group A, with the
strongest match at the top. For example:

![Similar Groups tab in group properties listing six groups similar to the selected group](/images/directorymanager/11.1/admincenter/portal/design/similar_groups.webp)

For a similar group, three attributes are displayed:

- Attribute 1 - The group’s display name. This attribute can’t be changed.
- Attribute 2 - You can specify any attribute. The default attribute is _mail_.
- Attribute 3 - You can specify any attribute. The default attribute is _expiration policy_.

## Change the Attributes on the Object List

1. In Admin Center, select **Applications** in the left pane.
   On the **GroupID Portal** tab, a portal's card displays its info.
2. Click the ellipsis button for a portal and select **Settings**.
3. Select an identity store under **Design Settings** to customize the portal for it.
   All identity stores linked with the portal are listed under **Design Settings**. You can design a
   different portal for each of these.
4. Click **Card View** in the left pane.
5. On the **Card View** page, select _Object List_ in the **Select Directory Object** dropdown
   list.
   The **Name** list shows the _Header_ option only.
6. Click **Edit** for _Header_.
   On the **Card View Header/Footer** pane, you can view the attributes displayed for a
   similar group in the portal.
7. The **Title** box displays the displayName attribute. The value of this attribute is
   displayed as the name of a similar group.
8. The **Image** box displays the thumbnailPhoto attribute, which can store images for directory
   objects.
9. Use the **Attribute 1** and **Attribute 2** boxes to display any other object attributes for
   similar groups. By default, the _mail_ and _expiration policy_ attributes are selected.
10. Click **OK**.
11. Click **Save** on the **Card View** page.
