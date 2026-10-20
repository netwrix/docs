---
title: "SingleRole"
description: ""
sidebar_position: 16
---

A single role is a way to represent an entitlement assigned to an identity. It brings a layer of abstraction through a user-friendly name that reflects the business view.

Use roles to:
- Grant accesses of various types and levels.
- Restrict access to sensitive information assets by grouping entitlements in business-meaningful forms.
- Grant the minimum privileges an individual needs to perform their job.

Roles can be requested manually, or they can be configured to be assigned automatically via [single role rules](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/provisioning/singlerolerule) depending on identities' attributes.


## Examples
import ParameterizedRole from '@site/docs/identitymanager/current/_partials/parameterized-role.mdx';

The following example declares a new single role in the default policy; in the category `Internet`; for resources from `Directory_User`; with one approval needed.

```xml
    <SingleRole Identifier="DL-INTERNET-ALL" DisplayName_L1="Unlimited Internet access"
        Category="Internet" ApprovalWorkflowType="One" EntityType="Directory_User" Policy="Default" />
```

### Parameterized roles

<ParameterizedRole />

## Properties

|Property|Details|
|---|---|
| ApprovalWorkflowType <span class="optionalAttribute">default value: 0</span> | **Type:** ProvisioningPolicyApprovalWorkflow **Description:** Number of validations required to assign manually the single role (from `None` to `Three`). The value `ManualAssignmentNotAllowed` is used when a manual assignment can't be performed. |
| Category optional | **Type:** Int64 **Description:** Identifier of the category that the role is part of. |
| CommentActivationOnApproveInReview <span class="optionalAttribute">default value: Inherited</span> | **Type:** CommentActivationWithInherited **Description:** Indicates if a comment is enabled when reviewing a request of the role and deciding to approve it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy. |
| CommentActivationOnDeclineInReview <span class="optionalAttribute">default value: Inherited</span> | **Type:** CommentActivationWithInherited **Description:** Indicates if a comment is enabled when reviewing a request of the role and deciding to refuse it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy. |
| CommentActivationOnDeleteGapInReconciliation <span class="optionalAttribute">default value: Inherited</span> | **Type:** CommentActivationWithInherited **Description:** Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to delete it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy. |
| CommentActivationOnKeepGapInReconciliation <span class="optionalAttribute">default value: Inherited</span> | **Type:** CommentActivationWithInherited **Description:** Indicates if a comment is enabled when reviewing a non-conforming assignment of the role and deciding to keep it. `0` - Disabled. `1` - Optional. `2` - Required. `3` - Inherited: comment activation in the associated policy. |
| D0 optional | **Type:** Int64 **Description:** Value that will be set for the dimension 0 (up to 3V following the [base32hex convention](/docs/identitymanager/current/integration-guide/toolkit/parameter-names)) for all users with the role. |
| Description_L1 optional | **Type:** String **Description:** Detailed description of the single role in language 1 (up to 16). |
| DisplayName_L1 required | **Type:** String **Description:** Display name of the single role in language 1 (up to 16). |
| EntityType required | **Type:** Int64 **Description:** Identifier of the entity type whose resources can receive the single role. |
| GracePeriod optional | **Type:** Int32 **Description:** Duration (in minutes) for which a lost automatic single role is prolonged. The grace period is only applied if the loss of the entitlement is due to a change in the rules (rule deletion or criteria changes). A review will be required to validate or decline the entitlement prolongation. Inferred entitlements won't be lost unless the end of the grace period is reached or the prolongation is declined. If it isn't defined, the value is inherited from the policy. |
| HideOnSimplifiedView <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to show the role in a user's basket only in advanced view and not simplified view. This flag is applied only on automatic assignments. |
| Identifier required | **Type:** String **Description:** Identifier of the single role. |
| ImplicitApproval <span class="optionalAttribute">default value: 0</span> | **Type:** Byte **Description:** Indicates whether the validation steps of the single role can be skipped. `0` - Inherited: implicit approval value from the associated policy. `1` - Explicit: all the workflow steps must be approved. `2` - Implicit: the workflow steps can be skipped if the requester has enough permissions. |
| ManualAssignmentEndDateLockedToContextMode <span class="optionalAttribute">default value: Inherited</span> | **Type:** RoleManualAssignmentEndDateLockedToContextMode **Description:** Inherited (default value): Use the policy's ManualAssignmentEndDateLockedToContextMode value. ExplicitNotContextBoundByDefault: The manual assignments' end date can be specified by the user or can be locked to match the end date specified by context rules. By default, in the UI, it isn't automatically locked. ExplicitContextBoundByDefault: The manual assignments' end date can be specified by the user or can be locked to match the end date specified by context rules. By default, in the UI, it is automatically locked. Never: The manual assignments' end date needs to be specified. Always: The manual assignments' end date can't be modified. They are computed by the policy to match the end date specified by context rules. |
| MaxDuration optional | **Type:** Int32 **Description:** Duration (in minutes) after which the role will be automatically revoked, if no earlier end date is specified. It impacts only the roles which are manually assigned after the maximum duration is set. Pre-assigned roles aren't impacted. If no duration is set on the role, the `MaxDuration` of the associated policy is applied. If the `MaxDuration` is set to 0 on the role, it prevents the associated policy from applying its `MaxDuration` to it. |
| Policy required | **Type:** Int64 **Description:** Identifier of the policy in which the role exists. |
| ProlongationWithoutApproval <span class="optionalAttribute">default value: 0</span> | **Type:** ProlongationWithoutApproval **Description:** Indicates whether the role can be extended without any validation. `0` - Inherited: gets the value from the policy. `1` - Enabled. `2` - Disabled. |
| R0 <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to set the dimension 0 (up to 3V following the [base32hex convention](/docs/identitymanager/current/integration-guide/toolkit/parameter-names)) as a required parameter when assigning the role. |
| State <span class="optionalAttribute">default value: Manual</span> | **Type:** RoleState **Description:** Mark that differentiates the roles analyzed in the role mining process. `0` - Manual: the role was created manually. `1` - Generated: the role was generated by a role mapping rule. |
| Tags optional | **Type:** String **Description:** Labels that can later be used to filter the target roles of access certification campaigns. The tag separator is `¤`. |
