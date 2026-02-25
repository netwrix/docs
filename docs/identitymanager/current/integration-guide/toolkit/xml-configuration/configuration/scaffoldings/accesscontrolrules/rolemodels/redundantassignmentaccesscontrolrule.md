---
title: "RedundantAssignmentAccessControlRule"
description: "Generates the permissions to access the **Redundant Assignment** page, to analyze and remove redundant assignments."
sidebar_position: 11
---

Generates the permissions to access the **Redundant Assignment** page, to analyze and remove redundant assignments.

Gives access to a shortcut on the dashboard to access this page.

![Redundant Assignments](/images/identitymanager/user-guide/optimize/assignment-automation/remove-redundant-assignments/home_redundantassignments_v602.webp)



## Examples
The following example gives to the `Administrator` profile the permissions to access the **Redundant Assignment** page and perform redundant-assignment related actions.

```xml
  <RedundantAssignmentAccessControlRule Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<AccessControlRule Identifier="Administrator_RedundantAssignment" DisplayName_L1="Administrator_RedundantAssignment" EntityType="Policy" Profile="Administrator">
  <Entry CanExecute="true" Permission="/ProvisioningPolicy/RedundantAssignment" />
</AccessControlRule>
```