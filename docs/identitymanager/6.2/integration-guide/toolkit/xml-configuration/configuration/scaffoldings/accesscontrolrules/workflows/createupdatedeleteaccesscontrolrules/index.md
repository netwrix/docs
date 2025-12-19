---
title: "Create Update Delete Access Control Rules"
description: "Create Update Delete Access Control Rules"
sidebar_position: 10
---

# Create Update Delete Access Control Rules

Generates execution rights for the create, update, delete workflows.

Some prerequisites are necessary to be able to launch this scaffolding. A entity type must be
created with the following naming convention: "Worfklow\_" + idenfitier type entity. Three workflows
must be created with the following names:

- entity type identifier + "\_Create";
- entity type identifier + "\_Update";
- entity type identifier + "\_Delete";

The scaffolding generates the following scaffoldings:

- [View Access Control Rules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/resources/viewaccesscontrolrules/index.md): Generates the
  permissions to view an entity type's resources.

## Examples

```

**<CreateUpdateDeleteAccessControlRules Profile="Administrator" EntityType="Directory_UserType"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Directory_UserType_Custom_Workflows_Directory_UserType" DisplayName_L1="Administrator_Directory_UserType_Custom_Workflows_Directory_UserType" EntityType="Workflow_Directory_UserType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Create/Request/ActionPending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Delete/Request/ActionPending" />  <Entry CanExecute="true" Permission="/Custom/Workflows/Directory_UserType_Update/Request/ActionPending" /></AccessControlRule>

```
