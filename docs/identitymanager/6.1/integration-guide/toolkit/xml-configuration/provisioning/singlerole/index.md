---
title: "SingleRole"
description: "SingleRole"
sidebar_position: 160
---

# SingleRole

A single role is a way to represent an entitlement that is to be assigned to an identity. It brings
a layer of abstraction through a user-friendly name, close to the business view.

Roles can be used to:

- grant accesses of various types and levels;
- restrict access to sensitive information assets, by grouping entitlements in a form that is
  meaningful from a business point of view;
- grant the minimum privileges required by an individual to perform his/her job.

Roles can be requested manually, or they can be configured to be assigned automatically via
[single role rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/singlerolerule/index.md)
depending on identities' attributes.

## Examples

The following example declares a new single role in the default policy; in the category `Internet`;
for resources from `Directory_User`; with one approval needed.

```

    <SingleRole Identifier="DL-INTERNET-ALL" DisplayName_L1="Unlimited Internet access"
        Category="Internet" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" />

```

### Parameterized roles

The role catalog can be optimized by reducing the number of roles, by configuring parameterized
roles.
[See how to via the UI](/docs/identitymanager/6.1/user-guide/optimize/parameterized-role/index.md).

This optimization will simplify the functional understanding of the role catalog, and speed up
Usercube's calculations.

Supposing that the 10th
[dimension](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/dimension/index.md)
(dimension A following the
[base32hex convention](/docs/identitymanager/6.1/integration-guide/toolkit/parameter-names/index.md))
is created for time slots, the following example creates a single role `Access/A_Brune_HR` for all
time slots. Each time-slot-related entitlement will be assigned to users by configuring one
navigation rule per entitlement, using the dimension as a required parameter.

```

<SingleRole Identifier="Access/A_Brune_HR" DisplayName_L1="Zone - Brune - HR" DisplayName_L2="Zone - Brune - RH" Category="Access" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" RA="1" /><ResourceType ... >    <NavigationRule Property="TimeSlot" Resource="TS_5/7_8/24" SingleRole="Access/A_Brune_HR" DA="TS_5/7_8/24" />    <NavigationRule Property="TimeSlot" Resource="TS_5/7_12/24" SingleRole="Access/A_Brune_HR" DA="TS_5/7_12/24" />    <NavigationRule Property="TimeSlot" Resource="TS_7/7_24/24" SingleRole="Access/A_Brune_HR" DA="TS_7/7_24/24" /></ResourceType>

```

## Properties

| Property                                                              | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ApprovalWorkflowType default value: 0                                 | **Type** ProvisioningPolicyApprovalWorkflow **Description** Number of validations required to assign manually the single role (from `None` to `Three`). The value `ManualAssignmentNotAllowed` is used when a manual assignment cannot be performed.                                                                                                                                                                                                                                                           |
| Category optional                                                     | **Type** Int64 **Description** Identifier of the category that the role is part of.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| CommentActivationOnApproveInReview default value: Inherited           | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a request of the role and deciding to approve it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                                       |
| CommentActivationOnDeclineInReview default value: Inherited           | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a request of the role and deciding to refuse it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                                        |
| CommentActivationOnDeleteGapInReconciliation default value: Inherited | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to delete it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                      |
| CommentActivationOnKeepGapInReconciliation default value: Inherited   | **Type** CommentActivationWithInherited **Description** Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to keep it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy.                                                                                                                                                                                                                        |
| D0 optional                                                           | **Type** Int64 **Description** Value that will be set for the dimension 0 (up to 3V following the [base32hex convention](/docs/identitymanager/6.1/integration-guide/toolkit/parameter-names/index.md)) for all users with the role.                                                                                                                                                                                                                                                               |
| Description_L1 optional                                               | **Type** String **Description** Detailed description of the single role in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                              |
| DisplayName_L1 required                                               | **Type** String **Description** Display name of the single role in language 1 (up to 16).                                                                                                                                                                                                                                                                                                                                                                                                                      |
| EntityType required                                                   | **Type** Int64 **Description** Identifier of the entity type whose resources can receive the single role.                                                                                                                                                                                                                                                                                                                                                                                                      |
| GracePeriod optional                                                  | **Type** Int32 **Description** Duration (in minutes) for which a lost automatic single role is prolonged. The grace period is only applied if the loss of the entitlement is due to a change in the rules (rule deletion or criteria changes). A review will be required to validate or decline the entitlement prolongation. Inferred entitlements won't be lost unless the end of the grace period is reached or the prolongation is declined. If it is not defined, the value is inherited from the policy. |
| HideOnSimplifiedView default value: false                             | **Type** Boolean **Description** `true` to show the role in a user's basket only in advanced view and not simplified view. This flag is applied only on automatic assignments.                                                                                                                                                                                                                                                                                                                                 |
| Identifier required                                                   | **Type** String **Description** Identifier of the single role.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ImplicitApproval default value: 0                                     | **Type** Byte **Description** Indicates whether the validation steps of the single role can be skipped. `0` - Inherited: implicit approval value from the associated policy. `1` - Explicit: all the workflow steps must be approved. `2` - Implicit: the workflow steps can be skipped if the requester has enough permissions.                                                                                                                                                                               |
| MaxDuration optional                                                  | **Type** Int32 **Description** Duration (in minutes) after which the role will be automatically revoked, if no earlier end date is specified. It impacts only the roles which are manually assigned after the maximum duration is set. Pre-assigned roles are not impacted. If no duration is set on the role, the `MaxDuration` of the associated policy is applied. If the `MaxDuration` is set to 0 on the role, it prevents the associated policy from applying its `MaxDuration` to it.                   |
| Policy required                                                       | **Type** Int64 **Description** Identifier of the policy in which the role exists.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ProlongationWithoutApproval default value: 0                          | **Type** ProlongationWithoutApproval **Description** Indicates whether the role can be extended without any validation. `0` - Inherited: gets the value from the policy. `1` - Enabled. `2` - Disabled.                                                                                                                                                                                                                                                                                                        |
| R0 default value: false                                               | **Type** Boolean **Description** `true` to set the dimension 0 (up to 3V following the [base32hex convention](/docs/identitymanager/6.1/integration-guide/toolkit/parameter-names/index.md)) as a required parameter when assigning the role.                                                                                                                                                                                                                                                      |
| State default value: Manual                                           | **Type** RoleState **Description** Mark that differentiates the roles analyzed in the role mining process. `0` - Manual: the role was created manually. `1` - Generated: the role was generated by a role mapping rule.                                                                                                                                                                                                                                                                                        |
| Tags optional                                                         | **Type** String **Description** Label(s) that can later be used to filter the target roles of access certification campaigns. The tag separator is `�`.                                                                                                                                                                                                                                                                                                                                                        |
