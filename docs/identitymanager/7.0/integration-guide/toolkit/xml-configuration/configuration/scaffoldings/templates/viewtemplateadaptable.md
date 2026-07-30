---
title: "ViewTemplateAdaptable"
description: "Implements a default display name for the resources of a given entity type, displays the resources in an adaptable table, and give the permissions to view the resources."
sidebar_position: 12
---

Implements a default display name for the resources of a given entity type, displays the resources in an adaptable table, and give the permissions to view the resources.


The scaffolding generates the following scaffoldings:

- [Entity Type Display Name](../entitytypes/entitytypes/entitytypedisplayname)

Computes a default value for resources' internal display names.
- [Entity Type Display Table Adaptable](../entitytypes/entitytypes/entitytypedisplaytableadaptable)

Creates an adaptable display table for a given entity type.
- [View Access Control Rules](../accesscontrolrules/resources/viewaccesscontrolrules)

Generates the permissions to view an entity type's resources.


## Examples
The following example implements a default display name for resources from the `Directory_PresenceState` entity type, displays the resources in an adaptable table, and gives to the `Administrator` profile the permissions to view the resources.

```xml
<ViewTemplateAdaptable EntityType="Directory_PresenceState" Profile="Administrator" />
```


## Properties

|Property|Details|
|---|---|
| EntityType optional | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |
| Profile optional | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |
| Property optional | **Type:** String **Description:** Identifier of the property involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<EntityTypeDisplayName Id="101" EntityType="Directory_PresenceState" />
<EntityTypeDisplayTableAdaptable Id="502" EntityType="Directory_PresenceState" />
<ViewAccessControlRules Id="188" EntityType="Directory_PresenceState" Profile="Administrator" />
```