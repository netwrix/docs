---
title: "ResourceApiAdministration"
description: "ResourceApiAdministration"
sidebar_position: 20
---

# ResourceApiAdministration

Generates the permissions to create/update/delete/query resources from a given entity type, for a
given profile.

## Examples

The following example gives the `Administrator` profile the rights to create, update, delete and
query resources from `Directory_User`.

```

**<ResourceApiAdministration EntityType="Directory_User" Profile="Administrator"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="AdministratorResourceApi_Administration_Directory_User" DisplayName_L1="AdministratorResourceApi_Administration_Directory_User" EntityType="Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Create" />  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Delete" />  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Query" />  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/Update" /></AccessControlRule>

```
