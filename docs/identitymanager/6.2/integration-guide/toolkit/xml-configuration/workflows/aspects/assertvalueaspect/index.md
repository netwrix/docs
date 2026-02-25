---
title: "Assert Value Aspect"
description: "Assert Value Aspect"
sidebar_position: 20
---

# Assert Value Aspect

Checks whether the value of a given property satisfies a given condition.

## Examples

The following example makes sure that, when creating a new employee, the contract end date is after
the contract start date. The pointcuts define when the value assertion must happen.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AssertValueAspect Identifier="Directory_User_NewInternal_CheckDates" Binding="Workflow_Directory_User:Directory_User.Records.ContractEndDate" ExpressionBinding="Workflow_Directory_User:Directory_User.Records" Expression="C#:record: return ( ((Nullable&lt;DateTime&gt;) record.ContractStartDate).HasValue && ((Nullable&lt;DateTime&gt;) record.ContractEndDate).HasValue) ?  record.ContractStartDate &lt; record.ContractEndDate : true;" Message_L1="Contract's end date must be after contract's start date.">    <PointCut Activity="Directory_User_NewInternal:Request" ActivityState="ActionWithRefine-Executed" Mode="Before" />    <PointCut Activity="Directory_User_NewInternal:Review" ActivityState="ReviewWithFeedback-Approved" Mode="Before" /></AssertValueAspect>
```

### Assert a multi-valued object

When asserting a multi-valued object, said object must not be called through a binding that goes
back and forth between entities.

For example, to manage records, using the ExpressionBinding set to
`<Workflow_Directory_User:Directory_User>`. Records and the Expression using C#:record:return
record.Directory_User.Records... will not work.

Instead, the ExpressionBinding should be set to `<Workflow_Directory_User:Directory_User>` and the
Expression should use C#:user:return user.Records.

The following example makes sure that a user's positions do not overlap.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AssertValueAspect Identifier="RecordsOverlapCheck" Binding="Workflow_Directory_User:Directory_User.Records.Organization" ExpressionBinding="Workflow_Directory_User:Directory_User" Expression="C#:user:for (int i = 0; i &lt; user.Records.Count; i++)
{
    for (int j = 0; j &lt; user.Records.Count &amp;&amp; i != j ; j++)
    {
        if (user.Records[i].StartDate != default
            &amp;&amp; user.Records[j].StartDate != default)
        {
            if ((user.Records[i].EndDate == null) &amp;&amp; (user.Records[j].EndDate == null))
              || ((user.Records[i].EndDate == null) &amp;&amp; (user.Records[j].EndDate != null) &amp;&amp; (user.Records[j].EndDate &gt; user.Records[i].StartDate))
              || ((user.Records[j].EndDate == null) &amp;&amp; (user.Records[i].EndDate != null) &amp;&amp; (user.Records[i].EndDate &gt;= user.Records[j].StartDate))
              || ((user.Records[i].EndDate != null) &amp;&amp; (user.Records[j].EndDate != null) &amp;&amp; (user.Records[i].StartDate &lt;= user.Records[j].EndDate) &amp;&amp; (user.Records[i].EndDate &gt;= user.Records[j].StartDate))
            {
                return false;
            }
        }
    }
}
return true;" Message_L1="A user cannot have more than one position simultaneously.">    <PointCut Activity=... ></AssertValueAspect>
```

## Properties

| Property                   | Type   | Description                                                                                                                                                                                                                                                                                                                                     |
| -------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Binding required           | String | Binding whose difference with ExpressionBinding defines the property to be validated by the aspect.                                                                                                                                                                                                                                             |
| Identifier required        | String | Unique identifier of the aspect.                                                                                                                                                                                                                                                                                                                |
| Expression optional        | String | C# expression returning a boolean, false to invalidate the property value.                                                                                                                                                                                                                                                                      |
| ExpressionBinding optional | String | Binding: - Defines the variable type used in the potential expressions specified in the aspect; - Whose difference with Binding defines the property involved in the aspect **NOTE:** Required when handling the property of multi-valued objects, for example records, to make sure to modify the property in all records and not only in one. |
| IfExpression optional      | String | Expression that conditions the aspect execution. See the [Expressions](/docs/identitymanager/6.2/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                                                                                                      |
| Message_L1 optional        | String | Message in language 1 (up to 16) to be displayed when the property is invalidated by the condition specified in Expression.                                                                                                                                                                                                                     |
| Priority default value: 0  | Int32  | Execution priority among all aspects. At a given activity state, the aspect with the highest priority will be triggered first. **NOTE:** The priority can be a negative value.                                                                                                                                                                  |

## Child Element: PointCut

A pointcut is a mechanism telling Identity Manager when to execute the linked aspect. See the
[Aspects](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/workflows/aspects/index.md) topic for additional information.

The position of the pointcut is specified by an activity state and a mode (before or after).

![pointcut Schema](/images/identitymanager/integration-guide/toolkit/xml-configuration/workflows/aspects/addchangeaspect/pointcut.webp)

| Property               | Type         | Description                                                                                                                                                                                                                                                                                                                                    |
| ---------------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Activity required      | Int64        | Identifier of the activity whose specified state triggers the aspect.                                                                                                                                                                                                                                                                          |
| ActivityState required | Enumeration  | Identifier of the activity state that triggers the aspect.                                                                                                                                                                                                                                                                                     |
| Mode default value: 0  | PointCutMode | Mode defining when exactly the aspect is triggered around the specified workflow's activity state. 0 - Before — the aspect will be executed on entry to the specified activity state, regardless of the transition used. 1 - After — the aspect will be executed on exit from the specified activity state, regardless of the transition used. |
