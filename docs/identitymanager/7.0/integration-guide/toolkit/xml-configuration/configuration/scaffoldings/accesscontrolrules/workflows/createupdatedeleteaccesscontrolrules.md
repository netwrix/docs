---
title: "CreateUpdateDeleteAccessControlRules"
description: "Generates execution rights for the create, update, delete workflows."
sidebar_position: 1
---

Generates execution rights for the create, update, delete workflows.

:::warning
Some prerequisites are necessary to be able to launch this scaffolding.
A entity type must be created with the following naming convention: "Worfklow_" + idenfitier type entity.
Three workflows must be created with the following names:
   - entity type identifier + "_Create";
   - entity type identifier + "_Update";
   - entity type identifier + "_Delete";
:::

The scaffolding generates the following scaffoldings:

- [View Access Control Rules](../../accesscontrolrules/resources/viewaccesscontrolrules)

Generates the permissions to view an entity type's resources.


## Examples


```xml
  <CreateUpdateDeleteAccessControlRules Profile="Administrator" EntityType="Directory_UserType"/>
```


## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_Directory_UserType_Custom_Workflows_Directory_UserType" DisplayName_L1="Administrator_Directory_UserType_Custom_Workflows_Directory_UserType" EntityType="Workflow_Directory_UserType" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Create/Request/ActionPending" />
  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Delete/Request/ActionPending" />
  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Update/Request/ActionPending" />
</AccessControlRule>

```