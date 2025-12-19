---
title: "Generate Provisioning Orders Task"
description: "Generate Provisioning Orders Task"
sidebar_position: 70
---

# Generate Provisioning Orders Task

In the Assigned resource types, Assigned resource scalars, and Assigned resource navigation the
provisioning task will recover all resources whose provisioningState is at 1 to build a list of JSON
files containing all provisioning orders. This task can be started either with a connector or with a
resourceType list. Then changes the provisioningState of the resources concerned to 2.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<GenerateProvisioningOrdersTask Identifier="SAB_GenerateProvisioningOrder" DisplayName_L1="SAB GenerateProvisioningOrder">  <TaskResourceType ResourceType="Compte_SAB_Guest"/></GenerateProvisioningOrdersTask>
```

## Properties

| Property                               | Type    | Description                                        |
| -------------------------------------- | ------- | -------------------------------------------------- |
| DisplayName_L1 required                | String  | Display name of the task in language 1 (up to 16). |
| BatchInsertSize default value: 0       | Int32   | Specifies the number of orders by file.            |
| BatchSelectSize default value: 0       | Int32   | Defines the batch select size.                     |
| Connector optional                     | String  | Identifier of the connector involved in the task.  |
| ForceProvisioning default value: false | Boolean | True to block the provisioning policy orders.      |
| Identifier optional                    | String  | Unique identifier of the task.                     |

## Child Element: TaskResourceType

The table TaskResourceTypes makes the link between the tasks and the Resourcetypes.

| Property              | Type  | Description             |
| --------------------- | ----- | ----------------------- |
| ResourceType required | Int64 | Linked resourceType id. |
