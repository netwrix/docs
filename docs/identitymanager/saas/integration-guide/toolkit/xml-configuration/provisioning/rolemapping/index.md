---
title: "Role Mapping"
description: "Role Mapping"
sidebar_position: 150
---

# Role Mapping

Defines a naming rule to create a single role in a specific category based on a property. A
navigation rule will also be created by the naming rule, giving the property to the target user when
the created single role is assigned to this user.

## Examples

### Additional condition

The following example uses `WhereExpression` to condition the application of the rule.

NETWRIX recommends using this property only when the properties from the rule items do not suffice.

Here the naming convention says that we should create a single role for each group (`memberOf`
value) whose `dn` starts with `SG_`and whose dn's second part (between two `_`) is made of three
characters.

```

<RoleMapping Identifier="AD_dn" Policy="Default" Property="AD_Entry:memberOf" ResourceType="AD_Entry_NominativeUser" WhereExpression="C#:resource:return resource.dn?.Split('_')[1].Length == 3;" >    <Rule>        <Item Property="AD_Entry:dn" Operator="StartWith" Value="SG_"/>    </Rule></RoleMapping>

```

## Properties

| Property                                                              | Details                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ApprovalRequired default value: false                                 | **Type** Boolean **Description** Indicates that the generated role must be approved before being used by a policy.                                                                                                                                                                                                        |
| ApprovalWorkflowType default value: None                              | **Type** ProvisioningPolicyApprovalWorkflow **Description** Indicates the number of validation to give to a manual role (from 0 to 3 inclusive). The value 4 is used when a manual assignment cannot be performed.                                                                                                        |
| Category optional                                                     | **Type** Int64 **Description** Identifier of the category.                                                                                                                                                                                                                                                                |
| CategoryDisplayNameBinding optional                                   | **Type** Int64 **Description** Defines the binding used to compute the category display name.                                                                                                                                                                                                                             |
| CategoryDisplayNameExpression optional                                | **Type** String **Description** References the C# or literal expression used to compute the category display name. See the [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                 |
| CategoryIdentifierBinding optional                                    | **Type** Int64 **Description** Binding used to compute the category identifier.                                                                                                                                                                                                                                           |
| CategoryIdentifierExpression optional                                 | **Type** String **Description** C# or literal expression used to compute the category identifier. See the [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                                  |
| CommentActivationOnApproveInReview default value: Inherited           | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a request of the role and deciding to approve it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                                     |
| CommentActivationOnDeclineInReview default value: Inherited           | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a request of the role and deciding to refuse it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                                      |
| CommentActivationOnDeleteGapInReconciliation default value: Inherited | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to delete it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                    |
| CommentActivationOnKeepGapInReconciliation default value: Inherited   | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to keep it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy.                                      |
| DisplayNameBinding optional                                           | **Type** Int64 **Description** Defines the binding used to compute the role display name.                                                                                                                                                                                                                                 |
| DisplayNameExpression optional                                        | **Type** String **Description** References the C# or literal expression used to compute the role display name. See the [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                     |
| HideOnSimplifiedView default value: false                             | **Type** Boolean **Description** `true` to hide this role in the basket simplified view. This flag is applied only on automatic assignments.                                                                                                                                                                              |
| Identifier required                                                   | **Type** String **Description** Identifier of the role mapping.                                                                                                                                                                                                                                                           |
| IdentifierBinding optional                                            | **Type** Int64 **Description** Binding used to compute the role identifier.                                                                                                                                                                                                                                               |
| IdentifierExpression optional                                         | **Type** String **Description** C# or literal expression used to compute the role identifier. See the [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                                      |
| ImplicitApproval default value: 0                                     | **Type** Byte **Description** Indicates if the validation steps of the single role can be skipped. `0` - Inherited: implicit approval value in the associated policy. `1` - Explicit: all the workflow steps must be approved. `2` - Implicit: the workflow steps can be skipped if the requester has enough permissions. |
| ParentCategoryIdentifierBinding optional                              | **Type** Int64 **Description** Defines the binding used to compute the parent category.                                                                                                                                                                                                                                   |
| ParentCategoryIdentifierExpression optional                           | **Type** String **Description** References the C# or literal expression used to compute the parent category. See the [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                                       |
| Policy required                                                       | **Type** Int64 **Description** Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                         |
| Property required                                                     | **Type** Int64 **Description** Property on which the naming rule will be applied.                                                                                                                                                                                                                                         |
| ResourceType required                                                 | **Type** Int64 **Description** Resource type on which the naming rule will be applied.                                                                                                                                                                                                                                    |
| RolePolicy optional                                                   | **Type** Int64 **Description** Identifier of the policy used for the roles created by the naming rule.                                                                                                                                                                                                                    |
| WhereExpression optional                                              | **Type** String **Description** C# expression returning a boolean, used to condition the application of the naming convention. See the [Expressions](/docs/identitymanager/saas/integration-guide/toolkit/expressions/index.md) topic for additional information.                                                                                                     |

## Child Element: Rule

Represent the sets of conditions which will determine the enforcement of the naming rule.

## Child Element: Item

Represents one of the conditions used to determine the enforcement of the naming rule.

### Properties

| Property                  | Details                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Operator default value: 0 | **Type** QueryComparisonOperator **Description** Operator used in the condition for the naming rule enforcement. |
| Property required         | **Type** Int64 **Description** Property on which the condition for the naming rule enforcement is based.         |
| Value optional            | **Type** String **Description** Value used in the condition for the naming rule enforcement.                     |
