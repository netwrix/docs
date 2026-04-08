---
title: "Assert Value Required Aspect"
description: "Assert Value Required Aspect"
sidebar_position: 30
---

# Assert Value Required Aspect

Checks whether a given property has a non-null value.

## Examples

The following example makes sure that the contract start date is specified for any new worker. The
pointcuts define when the value assertion must happen.

```

<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_ContractStartDate" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Binding="Workflow_Directory_User:Directory_User.Records.ContractStartDate" Message_L1="The contract start date is required">
    <PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />    <PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" TemplateTransformation="NewInternalWorkflowIsReviewRequired" />    <PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />    <PointCut Activity="Directory_User_NewExternal:Review" ActivityState="ReviewWithFeedback-Approved" TemplateTransformation="NewExternalWorkflowIsReviewRequired" />  </AssertValueRequiredAspect>

```

## Properties

| Property                   | Details                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required           | **Type** String **Description** Binding whose difference with `ExpressionBinding` defines the property to be validated by the aspect.                                                                                                                                                                                                                                                   |
| Identifier required        | **Type** String **Description** Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                        |
| ExpressionBinding optional | **Type** String **Description** Binding: - that defines the variable type used in the potential expressions specified in the aspect; - whose difference with `Binding` defines the property involved in the aspect. **Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | **Type** String **Description** Expression that conditions the aspect execution. See the [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                                                                                                              |
| Message_L1 optional        | **Type** String **Description** Message in language 1 (up to 16) to be displayed when the property is empty.                                                                                                                                                                                                                                                                            |
| Priority default value: 0  | **Type** Int32 **Description** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **Note:** the priority can be a negative value.                                                                                                                                                                           |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked
[Aspects](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/workflows/aspects/index.md).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Details                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | **Type** Int64 **Description** Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                                           |
| ActivityState required | **Type** Enumeration **Description** Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                                |
| Mode default value: 0  | **Type** PointCutMode **Description** Mode defining when exactly the aspect is triggered around the specified workflow's activity state. `0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used. `1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used. |
