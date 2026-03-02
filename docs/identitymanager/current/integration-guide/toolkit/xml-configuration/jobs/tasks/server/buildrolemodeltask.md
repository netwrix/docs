---
title: "BuildRoleModelTask"
description: "Applies the role naming rules, i.e. generates single roles and navigation rules based on resources matching a given pattern."
sidebar_position: 1
---

Applies the [role mappings](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/provisioning/rolemapping), also named [role naming rules](/docs/identitymanager/current/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation), i.e. generates single roles and navigation rules based on resources matching a given pattern.

> For example, this task can transform AD groups with a special naming convention into roles.


## Examples
The following example applies all role naming rules linked to the AD connector.

```xml
<BuildRoleModelTask Identifier="AD_ApplyRoleNamingRules" Connector="AD" DisplayName_L1="AD - Generate Roles/Rules" />
```


## Properties

|Property|Details|
|---|---|
| DisplayName_L1 required | **Type:** String **Description:** Display name of the task in language 1 (up to 16). |
| Connector optional | **Type:** String **Description:** Identifier of the connector whose role mappings / role naming rules are to be applied. |
| Identifier optional | **Type:** String **Description:** Unique identifier of the task. |

