---
title: "Policy"
description: ""
sidebar_position: 9
---

A policy is a role-based access control (RBAC) which works by assigning permissions to users based on their roles within an organization. A policy is a sub-group of the role model, containing roles and rules, that allows an administrator to manage the access specific to their application.

:::info
At least one policy must be declared.
:::

## Examples
```xml
<Policy Identifier="Default" DisplayName_L1="Default Policy" IsProvisioningEnabled="true" />
```

All `ResourceType`, `SingleRole`,  `CompositeRole` and `Category` must belong to a Policy. This is done by specifying the `Policy` attribute.

```xml
<Category Policy="Default" Identifier="AD" DisplayName_L1="Active Directory" />
```


## Properties

|Property|Details|
|---|---|
| CommentActivationOnApproveInReview <span class="optionalAttribute">default value: Optional</span> | **Type:** CommentActivation **Description:** Indicates if a comment is enabled when reviewing a role request associated with the policy, and deciding to approve it. `0` - Disabled. `1` - Optional. `2` - Required. |
| CommentActivationOnDeclineInReview <span class="optionalAttribute">default value: Required</span> | **Type:** CommentActivation **Description:** Indicates if a comment is enabled when reviewing a role request associated with the policy, and deciding to refuse it. `0` - Disabled. `1` - Optional. `2` - Required. |
| CommentActivationOnDeleteGapInReconciliation <span class="optionalAttribute">default value: Optional</span> | **Type:** CommentActivation **Description:** Indicates if a comment is enabled when reviewing a non-conforming role assignment associated with the policy, and deciding to delete it. `0` - Disabled. `1` - Optional. `2` - Required. |
| CommentActivationOnKeepGapInReconciliation <span class="optionalAttribute">default value: Required</span> | **Type:** CommentActivation **Description:** Indicates if a comment is enabled when reviewing a non-conforming role assignment associated with the policy, and deciding to keep it. `0` - Disabled. `1` - Optional. `2` - Required. |
| D0 optional | **Type:** Int64 **Description:** Value of the dimension 0 (up to 127) that filters the access to the policy and its roles. |
| DisplayName_L1 required | **Type:** String **Description:** Display name of the policy in language 1 (up to 16). |
| GracePeriod <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Duration (in minutes) for which a lost automatic entitlement associated with this policy is prolonged. The grace period is only applied if the loss of the entitlement is due to a change in the rules (rule deletion or criteria changes). A review will be required to validate or decline the entitlement prolongation. Inferred entitlements won't be lost unless the end of the grace period is reached or the prolongation is declined. This value can be overwritten for each composite role and single role. |
| HasImplicitApproval <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to skip the approval circuit when the requester has the appropriate review permissions. This value can be overwritten for each policy object (composite role, single role, resource type). |
| Identifier required | **Type:** String **Description:** Unique identifier of the policy. |
| IsExternal <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to indicate that the policy's roles are outside Identity Manager's scope. The roles are managed by an external source, and Identity Manager cannot add, update nor delete any role. |
| IsProvisioningEnabled <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to enable the provisioning policy. |
| IsSimulationEnabled <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to enable the provisioning policy simulation. |
| ManualAssignmentEndDateLockedToContextMode <span class="optionalAttribute">default value: ExplicitNotContextBoundByDefault</span> | **Type:** PolicyManualAssignmentEndDateLockedToContextMode **Description:** Explicit (default value): The manual assignments' EndDate can be specified by the user or can be locked to match the end date specified by context rules. Never: The manual assignments' EndDate needs to be specified. Always: The manual assignments' EndDate cannot be modified. They are computed by the policy to match the end date specified by context rules. |
| MaxDuration <span class="optionalAttribute">default value: 0</span> | **Type:** Int32 **Description:** Duration (in minutes) after which the assignments induced by the policy will be automatically revoked, if no earlier end date is specified. It impacts only the assignments which are performed after the maximum duration is set. Pre-existing assignments are not impacted. |
| ProlongationWithoutApproval <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to allow the policy's roles to be extended without any validation. |
