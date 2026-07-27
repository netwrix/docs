---
title: "EntityTypeDisplayTableAdaptable"
description: "Creates an adaptable display table for a given entity type."
sidebar_position: 4
---

Displays all resources of a given entity type in an adaptable table.

:::note
When the entity type contains fewer than 4 scalar properties, all properties will be displayed in the table. Otherwise, the only scalar property displayed in the table is the internal display name.
:::



## Examples
The following example displays the resources of the `Directory_Country` entity type in an adaptable table.

```xml
  <EntityTypeDisplayTableAdaptable EntityType="Directory_Country"/>
```


## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<DisplayTable Identifier="Directory_Country" DisplayTableDesignElement="adaptable" EntityType="Directory_Country" IsEntityTypeDefault="true">
  <Column CanBeFiltered="true" DisplayBinding="DisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
  <Column CanBeFiltered="true" DisplayBinding="Identifier" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
  <Column CanBeFiltered="true" DisplayBinding="ISOCode" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
</DisplayTable>
```