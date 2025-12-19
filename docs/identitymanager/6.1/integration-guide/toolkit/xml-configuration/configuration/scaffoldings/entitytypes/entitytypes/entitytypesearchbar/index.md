---
title: "EntityTypeSearchBar"
description: "EntityTypeSearchBar"
sidebar_position: 70
---

# EntityTypeSearchBar

Creates the search bar for the entity without criteria.

## Examples

```

**<EntityTypeSearchBar EntityType="Directory_Country"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

**<SearchBar EntityType="Directory_Country" Menu="Search_Directory_Country" SearchBarDesignElement="Inline" />**

```
