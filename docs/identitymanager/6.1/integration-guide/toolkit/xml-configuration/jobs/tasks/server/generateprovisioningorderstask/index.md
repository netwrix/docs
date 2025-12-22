---
title: "GenerateProvisioningOrdersTask"
description: "GenerateProvisioningOrdersTask"
sidebar_position: 70
---

# GenerateProvisioningOrdersTask

In the following 3 tables:

- Assigned resource types
- Assigned resource scalars
- Assigned resource navigation

The provisioning task will recover all resources whose provisioningState is at 1 to build a list of
JSON files containing all provisioning orders. This task can be started either with a connector or
with a resourceType list. Then changes the provisioningState of the resources concerned to 2.

## Examples

```

**<GenerateProvisioningOrdersTask Identifier="SAB_GenerateProvisioningOrder" DisplayName_L1="SAB GenerateProvisioningOrder">  <TaskResourceType ResourceType="Compte_SAB_Guest"/></GenerateProvisioningOrdersTask>**

```

## Properties

| Property                               | Details                                                                            |
| -------------------------------------- | ---------------------------------------------------------------------------------- |
| DisplayName_L1 required                | **Type** String **Description** Display name of the task in language 1 (up to 16). |
| BatchInsertSize default value: 0       | **Type** Int32 **Description** Specifies the number of orders by file.             |
| BatchSelectSize default value: 0       | **Type** Int32 **Description** Defines the batch select size.                      |
| Connector optional                     | **Type** String **Description** Identifier of the connector involved in the task.  |
| ForceProvisioning default value: false | **Type** Boolean **Description** `true` to block the provisioning policy orders.   |
| Identifier optional                    | **Type** String **Description** Unique identifier of the task.                     |

## Child Element: TaskResourceType

The table TaskResourceTypes makes the link between the tasks and the Resourcetypes.

| Property              | Details                                                |
| --------------------- | ------------------------------------------------------ |
| ResourceType required | **Type** Int64 **Description** Linked resourceType id. |
