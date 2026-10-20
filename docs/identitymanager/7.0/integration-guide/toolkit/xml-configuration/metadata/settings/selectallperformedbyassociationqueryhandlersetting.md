---
title: "SelectAllPerformedByAssociationQueryHandlerSetting"
description: "This setting enables task delegation to a group of people."
sidebar_position: 10
---

This setting enables task delegation to a group of people.


## Examples
```xml
    <!-- Delegate to the members of an AD Group -->
    <SelectAllPerformedByAssociationQueryHandlerSetting RootEntityType="AD_Entry" Binding="member" />
```


## Properties

|Property|Details|
|---|---|
| Binding optional | **Type:** String **Description:** Defines the binding used to get the list of identities to delegate to. |
| Identifier <span class="optionalAttribute">default value: SelectAllPerformedByAssociationQueryHandler</span> | **Type:** String **Description:** Unique identifier of the setting. |
| RootEntityType optional | **Type:** String **Description:** Indicates the entity type on which the delegation is applied. |

