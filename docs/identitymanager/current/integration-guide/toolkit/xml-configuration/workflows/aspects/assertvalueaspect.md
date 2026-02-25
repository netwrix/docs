---
title: "AssertValueAspect"
description: "Checks whether the value of a given property satisfies a given condition."
sidebar_position: 2
---

Checks whether the value of a given property satisfies a given condition.


## Examples
The following example makes sure that, when creating a new employee, the contract end date is after the contract start date. The pointcuts define when the value assertion must happen.

```xml
<AssertValueAspect Identifier="Directory_User_NewInternal_CheckDates" Binding="Workflow_Directory_User:Directory_User.Records.ContractEndDate" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Expression="C#:record: return ( ((Nullable&amp;lt;DateTime&amp;gt;) record.ContractStartDate).HasValue &amp;&amp; ((Nullable&amp;lt;DateTime&amp;gt;) record.ContractEndDate).HasValue) ?  record.ContractStartDate &amp;lt; record.ContractEndDate : true;" Message_L1="Contract's end date must be after contract's start date.">
    <PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="Before" />
    <PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="Before" />
</AssertValueAspect>
```

### Assert a multi-valued object

:::info
When asserting a multi-valued object, said object must not be called through a binding that goes back and forth between entities.

For example, to manage records, using the `ExpressionBinding` set to `Workflow_Directory_User:Directory_User.Records` and the `Expression` using `C#:record:return record.Directory_User.Records...` will not work.

Instead, the `ExpressionBinding` should be set to `Workflow_Directory_User:Directory_User` and the `Expression` should use `C#:user:return user.Records...`
:::

The following example makes sure that a user's positions do not overlap.

```xml
<AssertValueAspect Identifier="RecordsOverlapCheck" Binding="Workflow_Directory_User:Directory_User.Records.Organization" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:user:for (int i = 0; i &amp;lt; user.Records.Count; i++)
{
    for (int j = 0; j &amp;lt; user.Records.Count &amp;amp;&amp;amp; i != j ; j++)
    {
        if (user.Records[i].StartDate != default
            &amp;amp;&amp;amp; user.Records[j].StartDate != default)
        {
            if ((user.Records[i].EndDate == null) &amp;amp;&amp;amp; (user.Records[j].EndDate == null))
              || ((user.Records[i].EndDate == null) &amp;amp;&amp;amp; (user.Records[j].EndDate != null) &amp;amp;&amp;amp; (user.Records[j].EndDate &amp;gt; user.Records[i].StartDate))
              || ((user.Records[j].EndDate == null) &amp;amp;&amp;amp; (user.Records[i].EndDate != null) &amp;amp;&amp;amp; (user.Records[i].EndDate &amp;gt;= user.Records[j].StartDate))
              || ((user.Records[i].EndDate != null) &amp;amp;&amp;amp; (user.Records[j].EndDate != null) &amp;amp;&amp;amp; (user.Records[i].StartDate &amp;lt;= user.Records[j].EndDate) &amp;amp;&amp;amp; (user.Records[i].EndDate &amp;gt;= user.Records[j].StartDate))
            {
                return false;
            }
        }
    }
}
return true;" Message_L1="A user cannot have more than one position simultaneously.">
    <PointCut Activity=... >
</AssertValueAspect>
```


## Properties

|Property|Details|
|---|---|
| Binding required | **Type:** String **Description:** Binding whose difference with `ExpressionBinding` defines the property to be validated by the aspect. |
| Identifier required | **Type:** String **Description:** Unique identifier of the aspect. |
| Expression optional | **Type:** String **Description:** C# expression returning a boolean, `true` to invalidate the property value. |
| ExpressionBinding optional | **Type:** String **Description:** Binding:- that defines the variable type used in the potential expressions specified in the aspect;- whose difference with `Binding` defines the property involved in the aspect.**Note:** required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional | **Type:** String **Description:** Expression that conditions the aspect execution. [See more details on C# expressions](/docs/identitymanager/current/integration-guide/toolkit/expressions#c-expressions). |
| Message_L1 optional | **Type:** String **Description:** Message in language 1 (up to 16) to be displayed when the property is invalidated by the condition specified in `Expression`. |
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
