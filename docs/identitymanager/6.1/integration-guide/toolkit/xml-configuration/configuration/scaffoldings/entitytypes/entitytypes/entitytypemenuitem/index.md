---
title: "EntityTypeMenuItem"
description: "EntityTypeMenuItem"
sidebar_position: 60
---

# EntityTypeMenuItem

Creates a menu item for the entity type, and for its connector if the entity type has an entity type
mapping.

You can create menu items this way in the menu items `Nav`, `Top` and `Dashboard`.

When choosing `Nav`, it creates the connector's menu item under the `Nav_Connectors` menu item if
you have it, otherwise it creates the connector's menu item under `Nav`. When choosing `Top`, no
menu item is created for the entity type's connector.

If the entity type already has a menu item in the given section (`Nav`, `Top` or `Dashboard`), the
scaffolding does not create any more menu item in this section. If the entity type has no menu item
in the given section, but the connector's menu item already exists in this section, the scaffolding
creates only a menu item for the entity type, under the menu item of its connector.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Child Elements

- [MenuItemLocalization](#menuitemlocalization) (optional) Localization for the created menu items.

### MenuItemLocalization

| Property                         | Details                                                                                                                                     |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| OnDashboard default value: false | **Type** Boolean **Description** Generic column used to store information for internal use.                                                 |
| OnNav default value: false       | **Type** Boolean **Description** For the Argument AddTask the property after define the place of the task to add with the TaskCompareWith.  |
| OnTop default value: false       | **Type** Boolean **Description** For the Argument AddTask the property before define the place of the task to add with the TaskCompareWith. |
