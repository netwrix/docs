---
title: "View History Resource Template"
description: "View History Resource Template"
sidebar_position: 50
---

# View History Resource Template

Generates an access control rule giving to the specified profile the permission to browse the
resources history of the specified entity type.

## Examples

```

**<ViewHistoryResourceTemplate EntityType="Directory_User" Profile="Administrator"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType optional | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile optional    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_Directory_User_View_History_Directory_User" DisplayName_L1="Administrator_Directory_User_View_History_Directory_User" EntityType="Directory_User" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/Resources/Directory_User/ViewHistory" /></AccessControlRule>

```
