---
title: "Select All Performed by Association Query Handler Setting"
description: "Select All Performed by Association Query Handler Setting"
sidebar_position: 100
---

# Select All Performed by Association Query Handler Setting

This setting enables task delegation to a group of people.

## Examples

```

**<SelectAllPerformedByAssociationQueryHandlerSetting RootEntityType="AD_Entry" Binding="member" />**

```

## Properties

| Property                                                              | Details                                                                                                |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Binding optional                                                      | **Type** String **Description** Defines the binding used to get the list of identities to delegate to. |
| Identifier default value: SelectAllPerformedByAssociationQueryHandler | **Type** String **Description** Unique identifier of the setting.                                      |
| RootEntityType optional                                               | **Type** String **Description** Indicates the entity type on which the delegation is applied.          |
