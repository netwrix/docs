---
title: "Create Update Delete Menus"
description: "Create Update Delete Menus"
sidebar_position: 10
---

# Create Update Delete Menus

Creates creation, update and delete menus for an entity. Read these menuItems again on the main
menuItems of the entity with the following naming rule: "Search\_" + Identifier of entity type. if
this menuItem does not exist, create it in the database.

The workflows for adding, deleting and modifying the entity must be created beforehand. For this
scaffolding, the names of these 3 workflows must comply with the following standard:

- entity type identifier + "\_Create"
- entity type identifier + "\_Update"
- entity type identifier + "\_Delete"

## Examples

```

**<CreateUpdateDeleteMenus EntityType="Directory_Country"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<MenuItem Identifier="Search_Directory_Country" DisplayName_L1="Country" DisplayName_L2="Pays">  <MenuItem Identifier="Search_Directory_Country_Create" DisplayName_L1="New" DisplayName_L2="Cr�er" IconCode="Add" Workflow="Directory_Country_Create" /></MenuItem><MenuItem Identifier="View_Directory_Country" DisplayName_L1="Country" DisplayName_L2="Pays">  <MenuItem Identifier="View_Directory_Country_Update" DisplayName_L1="Update" DisplayName_L2="Modifier" IconCode="Edit" Workflow="Directory_Country_Update" />  <MenuItem Identifier="View_Directory_Country_Delete" DisplayName_L1="Delete" DisplayName_L2="Supprimer" IconCode="Cancel" Workflow="Directory_Country_Delete" /></MenuItem>

```
