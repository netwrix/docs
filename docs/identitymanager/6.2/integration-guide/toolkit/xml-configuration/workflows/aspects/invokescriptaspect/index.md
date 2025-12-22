---
title: "Invoke Script Aspect"
description: "Invoke Script Aspect"
sidebar_position: 50
---

# Invoke Script Aspect

Runs a tailored script asynchronously, independent of the workflow event, necessitating the creation
and execution of a job using an InvokeAspectsTask task.

## Examples

The following example executes the script `aspect.ps1` on the local agent, when creating a new user.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<InvokeScriptAspect Identifier="Directory_User_InvokeScript" Agent="Local" ScriptFile="C:/identitymanagerDemo/Conf/InvokeAspects/aspect.ps1">
<PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
<PointCut Activity="Directory_User_StartExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
</InvokeScriptAspect>
<Job Identifier="InvokeAspects" DisplayName_L1="00: Invoke Aspects" Agent="Local">
<InvokeAspectsTask Agent="Local" DisplayName_L1="Execute Powershell for aspects" OutputPath="C:/identitymanagerDemo/Temp" OpenIdClient="Job" />
</Job>
```

## Properties

| Property                   | Type   | Description                                                                                                                                                                                                                                                                                                                                       |
| -------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required        | String | Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                  |
| Agent optional             | String | Agent on which the script will be launched.                                                                                                                                                                                                                                                                                                       |
| ExpressionBinding optional | String | Binding defines the variable type used in the potential expressions specified in the aspect. The difference with `Binding` defines the property involved in the aspect. **NOTE:** It is required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | String | Expression that conditions the aspect execution. See the [C# utility functions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/csharp-utility-functions/index.md) topic for additional information.                                                                                                                                                                    |
| Priority default value: 0  | Int32  | Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **NOTE:** The priority can be a negative value.                                                                                                                                                                    |
| ScriptFile optional        | String | Path of the script file to be executed by the aspect.                                                                                                                                                                                                                                                                                             |

## ChildElement: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked aspect. See the
[Aspects](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/workflows/aspects/index.md) topic for additional information.

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Type         | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | Int64        | Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                          |
| ActivityState required | Enumeration  | Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                     |
| Mode default value: 0  | PointCutMode | Mode defining when exactly the aspect is triggered around the specified workflow's activity state. 0 - Before — The aspect will be executed on entry to the specified activity state, regardless of the transition used. 1 - After — The aspect will be executed on exit from the specified activity state, regardless of the transition used. |
