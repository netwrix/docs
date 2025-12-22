---
title: "EntityTypeDisplayTableAdaptable"
description: "EntityTypeDisplayTableAdaptable"
sidebar_position: 40
---

# EntityTypeDisplayTableAdaptable

Displays all resources of a given entity type in an adaptable table.

When the entity type contains fewer than 4 scalar properties, all properties will be displayed in
the table. Otherwise, the only scalar property displayed in the table is the internal display name.

## Examples

The following example displays the resources of the `Directory_Country` entity type in an adaptable
table.

```

**<EntityTypeDisplayTableAdaptable EntityType="Directory_Country"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<DisplayTable Identifier="Directory_Country" DisplayTableDesignElement="adaptable" EntityType="Directory_Country" IsEntityTypeDefault="true">  <Column CanBeFiltered="true" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />  <Column CanBeFiltered="true" DisplayBinding="Identifier" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />  <Column CanBeFiltered="true" DisplayBinding="ISOCode" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" /></DisplayTable>

```
