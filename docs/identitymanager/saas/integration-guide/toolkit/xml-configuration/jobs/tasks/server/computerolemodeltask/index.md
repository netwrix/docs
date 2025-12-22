---
title: "Compute Role Model Task"
description: "Compute Role Model Task"
sidebar_position: 40
---

# Compute Role Model Task

This task applies all rules in the role model of all
[Resource Type](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md) whose source entity types are
specified as child elements of the task.

## Behavior Details

### Property creation/update

If the resource or property needs to be created or changed, the policy inserts a new line in one of
the following 3 tables:

- Assigned resource types
- Assigned resource scalars
- Assigned resource navigation

Their provisioning state will therefore increase to either 1 or 5.

If the resource already exists in the database, then the policy checks whether the existing value is
the same as the computed value. If the existing value is the same as the computed value, then the
provisioning state goes to 4.

### Notifications

Executing the `ComputeRoleModelTask` will modify some roles' workflow states, and it will send a
notification for each of these roles being:

- pending approval (1/1, 1/2, 2/2, 1/3, 2/3, 3/3);
- blocked because of a risk.

## Examples

The following example applies all rules in the role model concerning the entity types `HR_Service`,
`HR_Category`, `HR_Site` and `HR_Person`.

```

<ComputeRoleModelTask Identifier="First_ComputeRoleModel" DisplayName_L1="First Compute Role Model">    <TaskEntityType EntityType="HR_Service"/>    <TaskEntityType EntityType="HR_Category"/>    <TaskEntityType EntityType="HR_Site"/>    <TaskEntityType EntityType="HR_Person"/></ComputeRoleModelTask>

```

### Ignore Archiving

While archiving data for audits is part of the main purposes of Identity Manager, some elements can
be prevented from being archived, for example during Identity Manager's installation and
initialization.

The following example is similar to the previous one, except that the values prior to the changes on
assigned single roles, composite roles, resource types, scalar or navigation properties, or
binaries, will not be stored in the database.

```

<ComputeRoleModelTask Identifier="First_ComputeRoleModel" DisplayName_L1="First Compute Role Model" IgnoreHistorization="true">    <TaskEntityType EntityType="HR_Service"/>    <TaskEntityType EntityType="HR_Category"/>    <TaskEntityType EntityType="HR_Site"/>    <TaskEntityType EntityType="HR_Person"/></ComputeRoleModelTask>

```

## Properties

| Property                                              | Details                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| DisplayName_L1 required                               | **Type** String **Description** Display name of the task in language 1 (up to 16).                                                                                                                                                                                                                                                                                 |
| BatchInsertSize default value: 0                      | **Type** Int32 **Description** Defines the batch insert size.                                                                                                                                                                                                                                                                                                      |
| BatchSelectSize default value: 0                      | **Type** Int32 **Description** Defines the batch select size.                                                                                                                                                                                                                                                                                                      |
| BlockAllResourceTypeProvisioning default value: false | **Type** Boolean **Description** `true` to force an additional mandatory review (on the **Provisioning Review** screen) of all provisioning orders for all resource types, no matter whether the resource types' `BlockProvisioning` boolean is set to `true` or `false`.                                                                                          |
| BlockProvisioning default value: false                | **Type** Boolean **Description** `true` to block the provisioning policy orders.                                                                                                                                                                                                                                                                                   |
| Dirty default value: false                            | **Type** Boolean **Description** Initiate use only dirty resources.                                                                                                                                                                                                                                                                                                |
| Identifier optional                                   | **Type** String **Description** Unique identifier of the task.                                                                                                                                                                                                                                                                                                     |
| IgnoreHistorization default value: false              | **Type** Boolean **Description** `true` to prevent Identity Manager from archiving the changes (resource creation, update, deletion) performed by the task. Impacted tables are: `UP_AssignedSingleRoles`, `UP_AssignedCompositeRoles`, `UP_AssignedResourceTypes`, `UP_AssignedResourceScalars`, `UP_AssignedResourceNavigations`, `UP_AssignedResourceBinaries`. |
| LdifFilePath optional                                 | **Type** String **Description** Path to save the ldif file                                                                                                                                                                                                                                                                                                         |
| UseLdif default value: false                          | **Type** Boolean **Description** to simulate or not into a ldif file                                                                                                                                                                                                                                                                                               |

## Child Element: TaskEntityType

A task entity type defines the entity type on which the task is applied.

| Property            | Details                                                                                         |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| EntityType required | **Type** Int64 **Description** Identifier of the entity type that the task is to be applied on. |
