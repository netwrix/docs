---
title: "ComputeRoleModelTask"
description: "The Compute Role Model will calculate the role model of all whose EntityTypes sources are included in the list of EntityTypes given in the start of this job."
sidebar_position: 4
---

This task applies all rules in the role model of all [resource types](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/provisioning/resourcetype) whose source entity types are specified as child elements of the task.

## Behavior Details

### Property creation/update

If the resource or property needs to be created or changed, the policy inserts a new line in one of the following 3 tables:

- Assigned resource types]
- Assigned resource scalars
- Assigned resource navigation

Their provisioning state will therefore increase to either 1 or 5.

If the resource already exists in the database, then the policy checks whether the existing value is the same as the computed value. If the existing value is the same as the computed value, then the provisioning state goes to 4.

### Notifications

Executing the `ComputeRoleModelTask` will modify some roles' workflow states, and it will send a notification for each of these roles being:
* pending approval (1/1, 1/2, 2/2, 1/3, 2/3, 3/3);
* blocked because of a risk.


## Examples
import IgnoreHistorizationIntro from '@site/docs/identitymanager/current/_partials/ignoreHistorization-intro.mdx';

The following example applies all rules in the role model concerning the entity types `HR_Service`, `HR_Category`, `HR_Site` and `HR_Person`.

```xml
<ComputeRoleModelTask Identifier="First_ComputeRoleModel" DisplayName_L1="First Compute Role Model">
    <TaskEntityType EntityType="HR_Service"/>
    <TaskEntityType EntityType="HR_Category"/>
    <TaskEntityType EntityType="HR_Site"/>
    <TaskEntityType EntityType="HR_Person"/>
</ComputeRoleModelTask>
```

### Ignore Archiving

<IgnoreHistorizationIntro />

The following example is similar to the previous one, except that the values prior to the changes on assigned single roles, composite roles, resource types, scalar or navigation properties, or binaries, will not be stored in the database.

```xml
<ComputeRoleModelTask Identifier="First_ComputeRoleModel" DisplayName_L1="First Compute Role Model" IgnoreHistorization="true">
    <TaskEntityType EntityType="HR_Service"/>
    <TaskEntityType EntityType="HR_Category"/>
    <TaskEntityType EntityType="HR_Site"/>
    <TaskEntityType EntityType="HR_Person"/>
</ComputeRoleModelTask>
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| BatchInsertSize <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Defines the batch insert size. |
| BatchSelectSize <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Defines the batch select size. |
| BlockAllResourceTypeProvisioning <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to force an additional mandatory review (on the **Provisioning Review** screen) of all provisioning orders for all resource types, no matter whether the resource types' `BlockProvisioning` boolean is set to `true` or `false`. |
| BlockProvisioning <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to block the provisioning policy orders. |
| Dirty <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Initiate use only dirty resources. |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |
| IgnoreHistorization <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to prevent Usercube from archiving the changes (resource creation, update, deletion) performed by the task. Impacted tables are: `UP_AssignedSingleRoles`, `UP_AssignedCompositeRoles`, `UP_AssignedResourceTypes`, `UP_AssignedResourceScalars`, `UP_AssignedResourceNavigations`, `UP_AssignedResourceBinaries`. |
| LdifFilePath optional | **Type:** String **Description:** Path to save the ldif file |
| UseLdif <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** to simulate or not into a ldif file |


## Child Element: TaskEntityType
A task entity type defines the entity type on which the task is applied.


|Property|Details|
|---|---|
|EntityType<br/>required|<p>**Type**<br />Int64<br /><br />**Description**<br />Identifier of the entity type that the task is to be applied on.</p>|
