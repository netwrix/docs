---
title: "Universe Access Control Rules"
description: "Universe Access Control Rules"
sidebar_position: 40
---

# Universe Access Control Rules

Generates an access control rule which gives a profile the permission to access the query page and
run queries.

## Examples

The following example gives the permission to access the query page to the administrator profile.

```

**<UniverseAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_DataQuery_Universe" DisplayName_L1="Administrator_DataQuery_Universe" EntityType="Universe" Profile="Administrator">  <Entry CanExecute="true" Permission="/Universes/UniverseData/Query" /></AccessControlRule>

```
