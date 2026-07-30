---
title: "EntityTypeSearchBar"
description: "Creates the search bar for the entity without criteria."
sidebar_position: 7
---

Creates the search bar for the entity without criteria.



## Examples


```xml
  <EntityTypeSearchBar EntityType="Directory_Country"/>
```


## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<SearchBar EntityType="Directory_Country" Menu="Search_Directory_Country" SearchBarDesignElement="Inline" />

```