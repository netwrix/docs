---
title: "AssertValueRequiredAspect"
description: "Checks whether a given property has a non-null value."
sidebar_position: 3
---

Checks whether a given property has a non-null value.


## Examples
The following example makes sure that the contract start date is specified for any new worker. The pointcuts define when the value assertion must happen.

```xml
<AssertValueRequiredAspect Identifier="Directory_UserRecord_ValueRequired_ContractStartDate" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Binding="Workflow_Directory_User:Directory_User.Records.ContractStartDate" Message_L1="The contract start date is required">
    <PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" />
    <PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" TemplateTransformation="NewInternalWorkflowIsReviewRequired" />
    <PointCut Activity="Directory_User_NewExternal:Request" ActivityState="ActionWithRefine-Executed" />
    <PointCut Activity="Directory_User_NewExternal:Review" ActivityState="ReviewWithFeedback-Approved" TemplateTransformation="NewExternalWorkflowIsReviewRequired" />
  </AssertValueRequiredAspect>
```


## Properties

|Property|Details|
|---|---|
| Binding required | **Type:** String **Description:** Binding whose difference with `ExpressionBinding` defines the property to be validated by the aspect. |
| Identifier required | **Type:** String **Description:** Unique identifier of the aspect. |
| ExpressionBinding optional | **Type:** String **Description:** Binding:- that defines the variable type used in the potential expressions specified in the aspect;- whose difference with `Binding` defines the property involved in the aspect.**Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional | **Type:** String **Description:** Expression that conditions the aspect execution. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
| Message_L1 optional | **Type:** String **Description:** Message in language 1 (up to 16) to be displayed when the property is empty. |
| Priority <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first.**Note:** the priority can be a negative value. |


## Child Element: PointCut
A pointcut is a mechanism telling Identity Manager when to execute the linked [aspect](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/workflows/aspects).

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)


|Property|Details|
|---|---|
|Activity<br/>required|<p>**Type**<br />Int64<br /><br />**Description**<br />Identifier of the activity whose specified state triggers the aspect.</p>|
|ActivityState<br/>required|<p>**Type**<br />Enumeration<br /><br />**Description**<br />Identifier of the activity state that triggers the aspect.</p>|
|Mode<br/><span class="optionalAttribute">default value: 0</span>|<p>**Type**<br />PointCutMode<br /><br />**Description**<br />Mode defining when exactly the aspect is triggered around the specified workflow's activity state.<br/>`0` - **Before**: the aspect will be executed on entry to the specified activity state, regardless of the transition used.<br/>`1` - **After**: the aspect will be executed on exit from the specified activity state, regardless of the transition used.</p>|
