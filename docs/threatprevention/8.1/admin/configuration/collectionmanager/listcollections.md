---
title: "List of Collections Window"
description: "List of Collections Window"
sidebar_position: 10
---

# List of Collections Window

Use the List of Collections window to add new items to a collection as well as edit and remove
existing items.

Click **Configuration** > **Collections** on the menu to launch the
[Collection Manager Window](/docs/threatprevention/8.1/admin/configuration/collectionmanager/overview.md). Then either double-click a Collection or select a
Collection and click the Manage button to open the List of Collections window.

![List of Collections window](/images/threatprevention/8.1/admin/configuration/collectionmanager/listofcollections.webp)

The Collection Category displays at the top of the window. Each item in the list displays:

- Name – Name of the collection
- Item Count – Number of items in the collection
- Dependency Count – Number of policies or policy templates referencing the collection

Use the Add, Edit, Remove, Dependencies, and Export buttons to modify a collection.

## Add New Collection Window

To add a static collection:

**Step 1 –** Click **Add** on the List of Collections window to open the Add New Collection window.

![Add New Collections window](/images/threatprevention/8.1/admin/configuration/collectionmanager/addnewcollection.webp)

**Step 2 –** Select an option:

- The _I will provide a list_ option button enables the default setting for a static collection.
- The _I want a list to come from the database table_ option button enables a dynamic collection.
  Enter the table name in the textbox that appears or select it from the dropdown menu. See the
  [Dynamic Collections](/docs/threatprevention/8.1/admin/configuration/collectionmanager/dynamic.md) topic for additional information.

**Step 3 –** Provide a unique, descriptive name for the collection in the name box.

**Step 4 –** Provide a detailed description in the Description box.

**Step 5 –** Threat Prevention automatically populates the Created By, Created On, Modified By, and
Modified On boxes when you create or change collections.

**Step 6 –** Use the Add (+) button to search for Items that match the selected Collection category.

The Select… window opens. Select a server/Agent from the dropdown menu and click **Connect**.
Expand the domain tree in the navigation pane. Select an item in the Results pane on the right and
click **OK**. See the [Selection Windows](/docs/threatprevention/8.1/admin/policies/configuration/eventtype/window/overview.md) topic for
additional information.

![Select window](/images/threatprevention/8.1/admin/configuration/collectionmanager/selectadobjects.webp)

Use the **Remove** (x) button to remove Items from the list on the Add New Collection window.

You can configure some collections as dynamic collections. See the
[Dynamic Collections](/docs/threatprevention/8.1/admin/configuration/collectionmanager/dynamic.md) topic for additional information. The Perpetrators and Lockdown
Perpetrators collections also have the option to expand group membership. See the Expand Groups
Option for Perpetrators & Objects Collection topic for additional information.

**Step 7 –** When the configuration is set, click **OK** to save the collection.

## Expand Groups Option for Perpetrators & Objects Collection

The Expand Groups option on the Add New Collection window is only available for the following
collections:

- Perpetrators
- Lockdown Perpetrators
- Objects
- Lockdown Objects

![Expand Groups option on the Add New Collection window](/images/threatprevention/8.1/admin/configuration/collectionmanager/expandgroups.webp)

- For Perpetrators – If checked, Threat Prevention expands the groups and nested groups to monitor
  effective group membership at the user level. This means the Agent monitors/blocks based on the
  user’s token rather than the group’s token. For Lockdown Perpetrators collections specifically,
  this option immediately blocks a logged-in user whose group membership changed while they were
  logged in.
- For Objects – If checked, when you add a group object, Threat Prevention expands the groups and
  nested groups to monitor effective group membership at the user level. This means the Agent
  monitors/blocks based on the user’s token rather than the group’s token. For Lockdown Objects
  collections specifically, this option immediately blocks a logged-in user whose group membership
  changed while they were logged in.

The Expand Groups option **doesn't** apply to other object types.

Threat Prevention can expand a maximum of 1000 users/objects. If the total number of users or
objects of the groups added to a single collection exceeds 1000, then the Agent defaults to
monitoring/blocking based on the groups’ tokens.

If group membership can't be resolved, then the Agent defaults to monitoring/blocking based on the
groups’ tokens.

## Edit Collection Window

**Step 1 –** Select a collection on the List of Collections window and click **Edit**. The Edit
Collection window opens.

![Edit Collection Window](/images/threatprevention/8.1/admin/configuration/collectionmanager/editcollection.webp)

**Step 2 –** You can modify the name, description, and items in the collection. See the Add New
Collection Window topic for additional information on these settings.

## Remove Collection

**Step 1 –** Select a collection on the List of Collections window and click **Remove**.

:::note
You can't delete a collection assigned to an active policy, as indicated in the
Dependency Count column. Remove the collection from all policies it's assigned to before
deleting it.
:::


![Confirm Removal window](/images/threatprevention/8.1/admin/configuration/collectionmanager/confirmremoval.webp)

**Step 2 –** Click **Yes** on the Confirm Removal window to delete the collection.

## Collection Dependencies Window

**Step 1 –** Select a collection on the List of Collections window and click **Dependencies** to
open the Collection Dependencies window.

![Collection Dependencies Window](/images/threatprevention/8.1/admin/configuration/collectionmanager/dependencies.webp)

**Step 2 –** This window displays a list of all policy templates and policies the selected
collection is assigned to. View the list and click **OK**.

## Export Collections

You can select one or more collections on the List of Collections window and export their
information to a TSV file.

To export a collection in the list:

**Step 1 –** Select one or more collections on the List of Collections window and click **Export**.

**Step 2 –** The Save As window opens. It displays the default file name and save location. Modify
them if required and click **Save**.
