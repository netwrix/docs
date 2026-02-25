---
title: "UpdateResourcesTemplate"
description: " "
sidebar_position: 8
---

 


The scaffolding generates the following scaffoldings:

- [Entity Type Display Name](../entitytypes/entitytypes/entitytypedisplayname)

Computes a default value for resources' internal display names.
- [Entity Type Display Table](../entitytypes/entitytypes/entitytypedisplaytable)

Creates a display table for the given entity.
- [Update Resources Access Control Rules](../accesscontrolrules/workflows/updateresourcesaccesscontrolrules)

 
- [Update Resources Menus](../entitytypes/workflows/updateresourcesmenus)

 
- [Update Resources Workflows](../entitytypes/workflows/updateresourcesworkflows)

 
- [View Access Control Rules](../accesscontrolrules/resources/viewaccesscontrolrules)

Generates the permissions to view an entity type's resources.
- [Workflow Entity Type](../entitytypes/workflows/workflowentitytype)

Creates an entity that will be the source of all workflows that manipulate the given entity.


## Examples


```xml
  <UpdateResourcesTemplate EntityType="HR_Person" Profile="Administrator"/>
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
<EntityTypeDisplayName Id="301" EntityType="HR_Person" />
<EntityTypeDisplayTable Id="325" EntityType="HR_Person" />
<UpdateResourcesAccessControlRules Id="390" EntityType="HR_Person" Profile="Administrator" />
<UpdateResourcesMenus Id="391" EntityType="HR_Person" />
<UpdateResourcesWorkflows Id="392" EntityType="HR_Person" />
<ViewAccessControlRules Id="398" EntityType="HR_Person" Profile="Administrator" />
<WorkflowEntityType Id="421" EntityType="HR_Person" />

```