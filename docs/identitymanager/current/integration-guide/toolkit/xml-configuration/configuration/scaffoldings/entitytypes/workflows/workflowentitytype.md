---
title: "WorkflowEntityType"
description: "Creates an entity that will be the source of all workflows that manipulate the given entity."
sidebar_position: 6
---

Creates an entity that will be the source of all workflows that manipulate the given entity. Also create the association between this new entity and the starting entity.


## Examples


```xml
  <WorkflowEntityType EntityType="Directory_Country"/>
```


## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<EntityType Identifier="Directory_Country" DisplayName_L1="Country" DisplayName_L2="Pays">
  <Property Identifier="Workflows" DisplayName_L1="Workflows" DisplayName_L2="Workflows" Type="ForeignKey" />
</EntityType>
<EntityType Identifier="Workflow_Directory_Country" DisplayName_L1="Workflow for Country" DisplayName_L2="Pays">
  <Property Identifier="Directory_Country" DisplayName_L1="Country" DisplayName_L10="Country" DisplayName_L11="Country" DisplayName_L12="Country" DisplayName_L13="Country" DisplayName_L14="Country" DisplayName_L15="Country" DisplayName_L16="Country" DisplayName_L2="Pays" DisplayName_L3="Country" DisplayName_L4="Country" DisplayName_L5="Country" DisplayName_L6="Country" DisplayName_L7="Country" DisplayName_L8="Country" DisplayName_L9="Country" TargetColumnIndex="128" Type="ForeignKey" />
</EntityType>
<EntityAssociation Identifier="Workflow_Directory_Country_Directory_Country" IsProperty2Collection="true" Property1="Workflow_Directory_Country:Directory_Country" Property2="Directory_Country:Workflows" />
<WorkflowEntityTypeDisplayEntityType Id="29" EntityType="Directory_Country" />

```