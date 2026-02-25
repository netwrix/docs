---
title: "CompositeRole"
description: ""
sidebar_position: 3
---

Defines basic information about a composite role.
Composite roles identify affiliations or job functions by which users can be grouped.
A composite role is a business role comprehensible by managers. It provides a layer of abstraction above existing entitlements, technical roles and single roles.

Roles can be used to:
- Grant various types and levels of access.
- Restrict access to sensitive information assets by grouping entitlements in a form that is meaningful to the business.
- Grant the minimum privileges required by an individual to perform his/her job.

Roles can be requested manually, or they can be configured to be assigned automatically via a [Composite Role Rule](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/provisioning/compositerolerule).
To further control access, roles can be related via required, inherited, or permitted relationships.


## Examples
The following example declares a new composite role.
```xml
    <CompositeRole Identifier="HR_Accounting" DisplayName_L1="HR:accounting" Category="HR" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default"/>
```


## Properties

|Property|Details|
|---|---|
| ApprovalWorkflowType <span class="optionalAttribute">default value: 0</span> | **Type:** ProvisioningPolicyApprovalWorkflow **Description:** Number of validations required to assign manually the composite role (from `None` to `Three`). The value `ManualAssignmentNotAllowed` is used when a manual assignment cannot be performed. |
| Category optional | **Type:** Int64 **Description:** Identifier of the category that the role is part of. |
| CommentActivationOnApproveInReview <span class="optionalAttribute">default value: Inherited</span> | **Type:** CommentActivationWithInherited **Description:** Indicates if a comment is enabled when reviewing a request of the role and deciding to approve it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy. |
| CommentActivationOnDeclineInReview <span class="optionalAttribute">default value: Inherited</span> | **Type:** CommentActivationWithInherited **Description:** Indicates if a comment is enabled when reviewing a request of the role and deciding to refuse it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy. |
| CommentActivationOnDeleteGapInReconciliation <span class="optionalAttribute">default value: Inherited</span> | **Type:** CommentActivationWithInherited **Description:** Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to delete it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy. |
| CommentActivationOnKeepGapInReconciliation <span class="optionalAttribute">default value: Inherited</span> | **Type:** CommentActivationWithInherited **Description:** Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to keep it. `0` - Disabled `1` - Optional `2` - Required `3` - Inherited: comment activation in the associated policy. |
| Description_L1 optional | **Type:** String **Description:** Detailed description of the single role in language 1 (up to 16). |
| DisplayName_L1 required | **Type:** String **Description:** Display name of the composite role in language 1 (up to 16). |
| EntityType required | **Type:** Int64 **Description:** Identifier of the entity type whose resources can receive the composite role. |
| GracePeriod optional | **Type:** Int32 **Description:** Duration (in minutes) for which a lost automatic composite role is prolonged. The grace period is only applied if the loss of the entitlement is due to a change in the rules (rule deletion or criteria changes). A review will be required to validate or decline the entitlement prolongation. Inferred entitlements won't be lost unless the end of the grace period is reached or the prolongation is declined. If it is not defined, the value is inherited from the policy. |
| HideOnSimplifiedView <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to show the role in a user's basket only in advanced view and not simplified view. This flag is applied only on automatic assignments. |
| Identifier required | **Type:** String **Description:** Unique identifier of the composite role. |
| ImplicitApproval <span class="optionalAttribute">default value: 0</span> | **Type:** Byte **Description:** Indicates if the validation steps of the composite role can be skipped. `0` - Inherited: implicit approval value in the associated policy. `1` - Explicit: all the workflow steps must be approved. `2` - Implicit: the workflow steps can be skipped if the requester has enough permissions. |
| ManualAssignmentEndDateLockedToContextMode <span class="optionalAttribute">default value: Inherited</span> | **Type:** RoleManualAssignmentEndDateLockedToContextMode **Description:** Inherited (default value): Use the policy's ManualAssignmentEndDateLockedToContextMode value. ExplicitNotContextBoundByDefault: The manual assignments' end date can be specified by the user or can be locked to match the end date specified by context rules. By default, in the UI, it is not automatically locked. ExplicitContextBoundByDefault: The manual assignments' end date can be specified by the user or can be locked to match the end date specified by context rules. By default, in the UI, it is automatically locked. Never: The manual assignments' end date needs to be specified. Always: The manual assignments' end date cannot be modified. They are computed by the policy to match the end date specified by context rules. |
| MaxDuration optional | **Type:** Int32 **Description:** Duration (in minutes) after which the role will be automatically revoked, if no earlier end date is specified. It impacts only the roles which are manually assigned after the maximum duration is set. Pre-assigned roles are not impacted. If no duration is set on the role, the `MaxDuration` of the associated policy is applied. If the `MaxDuration` is set to 0 on the role, it prevents the associated policy from applying its `MaxDuration` to it. |
| Policy required | **Type:** Int64 **Description:** Identifier of the policy that the role is part of. |
| ProlongationWithoutApproval <span class="optionalAttribute">default value: 0</span> | **Type:** ProlongationWithoutApproval **Description:** Indicates whether the role can be extended without any validation. `0` - Inherited: gets the value from the policy. `1` - Enabled. `2` - Disabled. |
| R0 <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to set the dimension 0 (up to 3V following the [base32hex convention](/docs/identitymanager/current/integration-guide/toolkit/parameter-names)) as a required parameter when assigning the role. |
| Tags optional | **Type:** String **Description:** Tags of the roles targeted by the campaign filter. The tag separator is `¤`. |
