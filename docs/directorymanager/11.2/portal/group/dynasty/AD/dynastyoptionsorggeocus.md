---
title: "Configure Dynasty attributes in Directory Manager"
description: "Add, edit, or remove the group-by attributes, child container, filter, and separator for an Organizational, Geographical, or Custom Dynasty."
keywords:
  - Dynasty attributes
  - group-by attribute
  - child container
  - Dynasty filter
  - regular expression filter
sidebar_position: 20
---

# Configure Dynasty attributes in Directory Manager

Dynasties create Smart Groups for each distinct value of each attribute listed in the **Attributes** area. Depending on the Dynasty template selected, the **Attributes** area displays the default attributes for the template. You can add and remove attributes. For the Custom template, no attribute is displayed.

For example, if you specify the Country, State, and City attributes, Directory Manager creates a group for every distinct country value, then for each state within a country, and finally for each city in a state.

In the **Attributes** area:

- Click **Add** to specify an attribute.
- Click **Edit** to edit the selected attribute options.
- Click **Remove** to remove the selected attribute.

On the **Dynasty Options** page:

1. (Optional) Click **Add** to add more attributes to those shown in the **Attributes** list.

   The **Add Attributes** dialog box opens.

2. Use the **Group items by** list to type or select the field for expanding the Dynasty.

   Directory Manager creates a child group for each unique value of this field.

3. Check the **Child container** box, which displays the container where Directory Manager creates new child groups. If this setting is blank, Directory Manager creates child groups in the same container as the parent Dynasty.

   To change the container, click **Browse** and select a new container.

4. From the **Filter** dropdown list, select an additional group-by filter for greater control over the values used to create children.

   The filter strips out values from Dynasties by allowing you to collapse several values into one.

   For example, you populate the Office field with the building and office number, which stores two items of related data in the same field. Now suppose you need a distribution list for each building. If the building name was in its own field (custom attribute 1), you could create a Dynasty that groups by the custom attribute 1 field. Directory Manager then creates a group for each building value.

   Attribute value: **Custom Attribute 1 = MacArthur Plaza**

   Sample groups created by Directory Manager: **Everyone in MacArthur Plaza**

   However, if you create a Dynasty that groups by the Office field, which contains both the building name and office number, Directory Manager creates a group for each distinct building and office value. This strategy gives you a group for every office number, rather than for each building.

   Attribute value: **Office = MacArthur Plaza/1256C**

   Sample groups created by Directory Manager: **Everyone in MacArthur Plaza/1256C**

   The filter option solves this problem by enabling you to filter out unwanted permutations of values.

   The filter options are:

   - **None**: Don't apply any filter. Create a group for each distinct value of the attribute selected in the **Group items by** list. For example, distinct values for the 'department' attribute might be _Engineering_, _Marketing_, and _Finance_.
   - **Left**: Select a portion of the group-by attribute starting from the left for the number of characters specified in the **Value** box. Create a group for each distinct value of the portion of the attribute selected.
   - **Right**: Select a portion of the group-by attribute, starting from the right for the number of characters specified in the **Value** box. Create a group for each distinct value of the portion of the attribute selected.
   - **Regular Expression**: A group is created for each distinct value of the regular expression specified in the **Value** box.

5. In the **Separator** box, enter a separator character to use in both the display name and alias of child groups to separate the group-by values.

   Each group-by level can have a separator.

6. Click **OK** to close the **Add Attributes** dialog box.
7. Click **Next**.
