---
title: "InvokeScriptAspect"
description: "InvokeScriptAspect"
sidebar_position: 50
---

# InvokeScriptAspect

Executes a customized script.

## Examples

The following example executes the script `aspect.ps1` on the local agent, when creating a new user.

```

<InvokeScriptAspect Identifier="Directory_User_InvokeScript" Agent="Local" ScriptFile="C:/identitymanager/Conf/InvokeAspects/aspect.ps1">
    <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />    <PointCut Activity="Directory_User_StartExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" /></InvokeScriptAspect>

```

## Properties

| Property                   | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required        | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| Agent optional             | **Type** String **Description** Agent on which the script will be launched.                                                                                                                                                                                                                                                                                                             |
| ExpressionBinding optional | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | **Type** String **Description** Expression that conditions the aspect execution. [See more details on C# expressions](/docs/identitymanager/6.1/integration-guide/toolkit/expressions/index.md).                                                                                                                                                                            |
| Priority default value: 0  | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |
| ScriptFile optional        | **Type** String **Description** Path of the script file to be executed by the aspect.                                                                                                                                                                                                                                                                                                   |

## Child Element: PointCut

A pointcut is a mechanism telling Usercube when to execute the linked
[aspect](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/workflows/aspects/index.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/images/identitymanager/6.1/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |
