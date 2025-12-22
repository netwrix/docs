---
title: "Profile Rule Context"
description: "Profile Rule Context"
sidebar_position: 80
---

# Profile Rule Context

Defines the context in which the rule will be evaluated.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ProfileRuleContext ResourceType="AD_Entry_User" IsAppliedToRoot="false"><ProfileRule Profile="Administrator" SubExpression="c#:user:return user.Organization.Code_Organisation == "SRV46";" B0="Organization:Code"/></ProfileRuleContext>
```

## Properties

| Property                            | Type    | Description                                                                                            |
| ----------------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| EntityType optional                 | Int64   | When ResourceType is not used, identifier of the entity type from which the expressions are evaluated. |
| IsAppliedToRoot default value: true | Boolean | The dimensions are queried from the user's information.                                                |
| ResourceType optional               | Int64   | The resourceType of the assignedResourcetypes on which the rule is going to be applied on.             |
| RootBinding optional                | Int64   | Binding to apply on the user resource before executing the root expression(cf Profile Rule).           |
| SubBinding optional                 | Int64   | Binding to apply on the user resource before executing the sub expression(cf Profile Rule).            |

## Child Element: ProfileRule

Defines the rule to assign a profile to user when matched.

### Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ProfileRuleContext ResourceType="AD_Entry_NominativeUser" SubBinding="Directory_User:ManagedOrganizations" IsAppliedToRoot="false">    <ProfileRule Profile="Manager" B0="Directory_Organization:Id" /></ProfileRuleContext>
```

### Properties

| Property                      | Type    | Description                                                                                                                                                                                                                                                                              |
| ----------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| B0 optional                   | Int64   | Represents the first dimension binding definition. The 127 other dimension bindings can be referred to by 127 more parameters from B1 to B3V following the base32hex convention. See the [Base32 Parameter Names](/docs/identitymanager/6.2/integration-guide/toolkit/parameter-names/index.md) topic for additional information. |
| IsDenied default value: false | Boolean | Profile denied to the user when matched.                                                                                                                                                                                                                                                 |
| Profile required              | Int64   | Identifier of the profile rule.                                                                                                                                                                                                                                                          |
| RootExpression optional       | String  | C# expression to apply on the source entity type of the context resource type. See the [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                    |
| SubExpression optional        | String  | C# expression to apply on the target entity type of the context resource type. See the [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                    |
