---
title: "InvokeScriptAspect"
description: "Executes a customized script."
sidebar_position: 5
---

Executes a customized script.


## Examples
The following example executes the script `aspect.ps1` on the local agent, when creating a new user.

```xml
<InvokeScriptAspect Identifier="Directory_User_InvokeScript" Agent="Local" ScriptFile="C:/Usercube/Conf/InvokeAspects/aspect.ps1">
    <PointCut Activity="Directory_User_StartInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
    <PointCut Activity="Directory_User_StartExternal:Request" ActivityState="ActionWithRefine-Executed" Mode="After" />
</InvokeScriptAspect>
```


## Properties

|Property|Details|
|---|---|
| Identifier required | **Type:** String **Description:** Unique identifier of the aspect. |
| Agent optional | **Type:** String **Description:** Agent on which the script will be launched. |
| ExpressionBinding optional | **Type:** String **Description:** Binding:- that defines the variable type used in the potential expressions specified in the aspect;- whose difference with `Binding` defines the property involved in the aspect.**Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional | **Type:** String **Description:** Expression that conditions the aspect execution. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
| Priority <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first.**Note:** the priority can be a negative value. |
| ScriptFile optional | **Type:** String **Description:** Path of the script file to be executed by the aspect. |


## Child Element: PointCut
A pointcut is a mechanism telling Identity Manager when to execute the linked [aspect](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/workflows/aspects).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)


|Property|Details|
|---|---|
|Activity<br/>required|<p>**Type**<br />Int64<br /><br />**Description**<br />Identifier of the activity whose specified state triggers the aspect.</p>|
|ActivityState<br/>required|<p>**Type**<br />Enumeration<br /><br />**Description**<br />Identifier of the activity state that triggers the aspect.</p>|
|Mode<br/><span class="optionalAttribute">default value: 0</span>|<p>**Type**<br />PointCutMode<br /><br />**Description**<br />Mode defining when exactly the aspect is triggered around the specified workflow's activity state.<br/>`0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used.<br/>`1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used.</p>|
