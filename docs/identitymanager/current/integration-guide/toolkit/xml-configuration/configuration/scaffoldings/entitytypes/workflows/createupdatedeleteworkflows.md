---
title: "CreateUpdateDeleteWorkflows"
description: " "
sidebar_position: 2
---

 



## Examples


```xml
  <CreateUpdateDeleteWorkflows EntityType="Directory_Country"/>
```


## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<Workflow Identifier="Directory_Country_Create" DisplayName_L1="Country - New" DisplayName_L2="Pays - Créer" VariablesType="Workflow_Directory_Country">
  <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" />
  <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Directory_Country_Delete" DisplayName_L1="Country - Delete" DisplayName_L2="Pays - Supprimer" VariablesType="Workflow_Directory_Country">
  <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" />
  <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>
<Workflow Identifier="Directory_Country_Update" DisplayName_L1="Country - Update" DisplayName_L2="Pays - Modifier" VariablesType="Workflow_Directory_Country">
  <Activity Identifier="Request" DisplayName_L1="Request" DisplayName_L2="Demande" Template="Action" />
  <Activity Identifier="Persist" DisplayName_L1="Persist" DisplayName_L2="Enregistrement" Template="Persist" />
</Workflow>

```