---
title: "Dynasty Options page"
description: "Dynasty Options page"
sidebar_position: 20
---

# Dynasty Options page

Dynasties create Smart Groups for each distinct value of each attribute listed in the **Attributes**
area. Depending on the Dynasty template selected, the **Attributes** area displays the default
attributes for the template; however, you can add and remove attributes. For the Custom template, no
attribute is displayed.

For example, if you specify the Country, State, and City attributes, GroupID creates a group for
every distinct country value, then for each state within a country, and finally for each city in a
state.

- Click **Add** to specify an attribute.
- Click **Edit** to edit the selected attribute options.
- Click **Remove** to remove the selected attribute.

**On the Dynasty Options page:**

1. (Optional) Click **Add** to add more attributes to those shown in the **Attributes** list.

    The **Add Attributes** dialog box is displayed.

    This filter is used to strip out values from Dynasties by allowing you to collapse several
    values into one.

    An example is populating the Office field with the building/office number, thus conveniently
    storing two items of related data in the same field. Now, suppose you need a distribution list
    for each building. If the building name was in its own field (custom attribute 1), you could
    create a Dynasty that groups by the custom attribute 1 field and GroupID would then create a
    group for each building value.

    Attribute value:

    Custom Attribute 1 = MacArthur Plaza

    Sample groups created by GroupID:

    Everyone in MacArthur Plaza

    However, if you were to create a Dynasty that groups by the Office field (which contains both
    the building name and office number), GroupID will create a group for each distinct
    building/office value. This strategy gives you a group for every office number, rather than for
    each building.

    Attribute value:

    Office = MacArthur Plaza/1256C

    Sample groups created by GroupID:

    Everyone in MacArthur Plaza/1256C

    The filter option solves this problem by enabling you to filter out unwanted permutations of
    values.

1. In the **Group items by** list, type or select the field to use for expanding the Dynasty.

    GroupID creates a child group for each unique value of this field.

1. The **Child container** box displays the container where new child groups will be created. If
   this setting is blank, GroupID creates child groups in the same container as the parent Dynasty.

    To change the container, click **Browse** and select a new container.

1. From the **Filter** drop-down list, select an additional group-by filter for greater control over
   the values used to create children.

    - **None**: Do not apply any filter. Simply create a group for each distinct value of the
      attribute selected in the **Group items by** list. For example, distinct values for the
      ‘department’ attribute might be _Engineering_, _Marketing_, and _Finance_.
    - **Left**: Select a portion of the group-by attribute starting from the left for the number of
      characters specified in the **Value** box, and create a group for each distinct value of the
      portion of the attribute selected.
    - **Right**: Select a portion of the group-by attribute, starting from the right for the number
      of characters specified in the **Value** box, and create a group for each distinct value of
      the portion of the attribute selected.
    - **Regular Expression**: A group is created for each distinct value of the regular expression
      specified in the **Value** box.

1. Each group-by level can have a separator. In the **Separator** box, enter a separator character
   to use in both the display name and alias of child groups to separate the group-by values.
1. Click **OK** to close the **Add Attributes** dialog box.

1. Click **Next**.

**See Also**

- [Create an Active Directory Dynasty](/docs/directorymanager/11.0/welcome/group/dynasty/createdynasty/createdynasty.md)
