---
title: "Invoke Workflow Aspect"
description: "Invoke Workflow Aspect"
sidebar_position: 60
---

# Invoke Workflow Aspect

Launches a workflow.

## Examples

The following example launches the workflow `Directory_User_VehicleRequest` when a vehicle is
requested for a new internal user.

```

<InvokeWorkflowAspect Identifier="Directory_User_VehicleRequest" ExpressionBinding="Workflow_Directory_User:Directory_User" IfExpression="C#:person:return person.Vehicle_Requested;" Workflow="Directory_User_VehicleRequest">
    <PointCut Activity="Directory_User_NewInternal:Persist" ActivityState="Persist-Invoked" Mode="After" /></InvokeWorkflowAspect>

```

## Properties

| Property                   | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Identifier required        | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| Workflow required          | **Type** String **Description** Identifier of the workflow to be launched.                                                                                                                                                                                                                                                                                                              |
| ExpressionBinding optional | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | **Type** String **Description** Expression that conditions the aspect execution. See the [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                                                                                                              |
| Priority default value: 0  | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked
[Aspects](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/workflows/aspects/index.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |
