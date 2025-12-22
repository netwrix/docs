---
title: "Add Change Aspect"
description: "Add Change Aspect"
sidebar_position: 10
---

# Add Change Aspect

Modifies a given property value.

## Examples

The following example computes a new value for the property `IsDraft` from the `Directory_User`
entity type. The new value is always `true`. The pointcuts define when the value change must happen.

```

<AddChangeAspect Identifier="Directory_UserRecord_AddChange_IsDraft" Binding="Workflow_Directory_User:Directory_User.IsDraft" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:record:return true;">
    <PointCut Activity="Directory_User_NewInternal:PersistDraft" ActivityState="PersistOnlyResources-Invoked" Mode="Before" TemplateTransformation="NewInternalWorkflowIsReviewRequired" />    <PointCut Activity="Directory_User_NewExternal:PersistDraft" ActivityState="PersistOnlyResources-Invoked" Mode="Before" TemplateTransformation="NewExternalWorkflowIsReviewRequired" /></AddChangeAspect>

```

### Accept Null Value

The following example computes a new value for the `Card` property in users' records, considering
`null` as a value. Instead of being ignored, a `null` value returned by `Expression` will replace
the old value.

```

<AddChangeAspect Identifier="AddChangeAspect_Self_PersonRecord_Card" Binding="Workflow_Person:Person.PersonRecords.Card" AcceptNullValueExpression="C#:record:return true;" ExpressionBinding="Workflow_Person:Person.PersonRecords" Expression="C#:record:
        if(!string.IsNullOrEmpty(record.Card))
        {
            return record.Card;
        }
        return null;" >    <PointCut Activity="Self_DataUpdate:Request" ActivityState="Action-Executed" Mode="After" /></AddChangeAspect>

```

## Properties

| Property                           | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required                   | **Type** String **Description** Binding whose difference with `ExpressionBinding` defines the property to be changed.                                                                                                                                                                                                                                                                   |
| Identifier required                | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| AcceptNullValueExpression optional | **Type** String **Description** C# expression returning a boolean, `true` to consider `null` for the new value returned by `Expression`. By default, `null` values are ignored.                                                                                                                                                                                                         |
| Expression optional                | **Type** String **Description** C# expression returning a new value for the property to be changed. **Note:** this property can also be defined by a binding via `ExpressionBinding`.                                                                                                                                                                                                   |
| ExpressionBinding optional         | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional              | **Type** String **Description** Expression that conditions the aspect execution. See the [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                                                                                                              |
| Priority default value: 0          | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked
[Aspects](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/workflows/aspects/index.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |
