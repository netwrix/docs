---
title: "EntityTypeDisplayName"
description: "Computes a default value for resources' internal display names."
sidebar_position: 2
---

Creates a default expression to compute the display names of an entity type's resources.


## Examples
The following example assigns a default display name to each resource in `Directory_Country`, when no display name is defined.

```xml
<EntityTypeDisplayName EntityType="Directory_Country"/>
```

### Property

The following example assigns the `DisplayName` property as a default display name to each resource in `Directory_Country`, when no display name is defined.

```xml
<EntityTypeDisplayName EntityType="Directory_Country" Property="DisplayName"/>
```


## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |
| Property optional | **Type:** String **Description:** Property of the specified entity type, that will be used as display name for the entity type's resources.**Note:** when not specified, the display name is the first string property of the entity type that contains "name" (case insensitively), in ascending order of `TargetColumnIndex`.When there is no such property, the display name is the first string property of the entity type that is a key property, i.e. `isKey` set to `true`.When there is no key property either, the display name is the first property of the entity type. |



## Generated XML

Our example generates the following configuration:

```xml
<EntityPropertyExpression Identifier="Directory_Country_InternalDisplayName_L1" Binding="Directory_Country:DisplayName_enUS" EntityType="Directory_Country" Property="InternalDisplayName_L1" />
<EntityPropertyExpression Identifier="Directory_Country_InternalDisplayName_L2" Binding="Directory_Country:DisplayName_frFR" EntityType="Directory_Country" Property="InternalDisplayName_L2" />

```