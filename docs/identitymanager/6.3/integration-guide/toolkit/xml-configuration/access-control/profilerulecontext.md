---
title: "ProfileRuleContext"
description: ""
sidebar_position: 8
---

Defines the context in which the rule will be evaluated.


## Examples
```xml
<ProfileRuleContext ResourceType="AD_Entry_User" IsAppliedToRoot="false">
<ProfileRule Profile="Administrator" SubExpression="c#:user:return user.Organization.Code_Organisation == &quot;SRV46&quot;;" Dimension0Binding="Organization:Code"/>
</ProfileRuleContext>
```


## Properties

|Property|Details|
|---|---|
| EntityType optional | **Type:** Int64 **Description:** When `ResourceType` is not used, identifier of the entity type from which the expressions are evaluated. |
| IsAppliedToRoot <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** Are the dimensions queried from user informations? |
| ResourceType optional | **Type:** Int64 **Description:** The resourceType of the assignedResourcetypes on which the rule is going to be applied on. |
| RootBinding optional | **Type:** Int64 **Description:** Binding to apply on the user resource before excuting the root expression(cf Profile Rule). |
| SubBinding optional | **Type:** Int64 **Description:** Binding to apply on the user resource before excuting the sub expression(cf Profile Rule). |

## Child Element: ProfileRule
Defines the rule to assign a profile to user when matched.


### Examples
```xml
<ProfileRuleContext ResourceType="AD_Entry_NominativeUser" SubBinding="Directory_User:ManagedOrganizations" IsAppliedToRoot="false">
    <ProfileRule Profile="Manager" Dimension0Binding="Directory_Organization:Id" />
</ProfileRuleContext>
```


### Properties

|Property|Details|
|---|---|
| B0 optional | **Type:** Int64 **Description:** Represents the first dimension binding definition. The 127 other dimension bindings can be referred to by 127 more parameters from B1 to B3V following the [base32hex convention](/docs/identitymanager/current/integration-guide/toolkit/parameter-names). |
| IsDenied <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** Profile denied to the user when matched. |
| Profile required | **Type:** Int64 **Description:** Identifier of the profile rule. |
| RootExpression optional | **Type:** String **Description:** C# expression to apply on the source entity type of the context resource type. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
| SubExpression optional | **Type:** String **Description:** C# expression to apply on the target entity type of the context resource type. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
