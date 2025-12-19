---
title: "Get Role Mining Task"
description: "Get Role Mining Task"
sidebar_position: 80
---

# Get Role Mining Task

Role mining is the process of analyzing user-to-resource mapping data to determine or modify user
permissions for role-based access control (RBAC) in an enterprise. In a business setting, roles are
defined according to job competency, authority and responsibility. The ultimate intent of role
mining is to achieve optimal security administration based on the role each individual plays within
the organization. This executable allows to highlight the RoleMining table as well as the different
rules to be applied in the role model so that it is optimal at the time T. The xml file contains 2
sql requests to link roles, dimensions and Owners to extract a table containing the grouping of
SingleRoles and CompositesRoles and set it up in the system.

## Examples

```

**<GetRoleMiningTask DisplayName_L1="Apply Mining Rules">  <TaskEntityType EntityType="Directory_User"/></GetRoleMiningTask>**

```

## Properties

| Property                         | Details                                                                                                                      |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| DisplayName_L1 required          | **Type** String **Description** Display name of the task in language 1 (up to 16).                                           |
| AllEntities default value: false | **Type** Boolean **Description** Apply role mining on all entities (otherwise list the entity types with the TaskEntityType) |
| Identifier optional              | **Type** String **Description** Unique identifier of the task.                                                               |
| IsSimulated default value: false | **Type** Boolean **Description** Apply results of role mining in simulation or not                                           |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |
