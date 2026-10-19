---
title: "EntityTypeDisplayTargetResourceTable"
description: "Creates a displaytable for the given entity."
sidebar_position: 5
---

Creates a displaytable for the given entity. If there are less than 4 scalar properties, the scaffolding adds all the properties in the table otherwise there is only the internaldisplayname. The design element for this displaytable is resourcetable.


## Examples


```xml
  <EntityTypeDisplayTargetResourceTable EntityType="SAB_User"/>
```


## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<DisplayTable Identifier="SAB_User" DisplayTableDesignElement="resourcetable" EntityType="SAB_User" IsEntityTypeDefault="true">
  <Column CanBeFiltered="true" DisplayBinding="InternalDisplayName" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
  <Column CanBeFiltered="true" DisplayBinding="Login" IsDisplayInSummaryView="true" IsResizable="true" IsSortable="true" />
</DisplayTable>

```