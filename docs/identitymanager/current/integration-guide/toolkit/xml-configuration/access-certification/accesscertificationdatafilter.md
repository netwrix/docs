---
title: "AccessCertificationDataFilter"
description: ""
sidebar_position: 2
---

When running an Access Certification Campaign, this object defines the scope of assignments of entitlements to certify for a given Access Certification Campaign. It filters based on the specific entitlements attributes.

## Properties

|Property|Details|
|---|---|
| Campaign required | **Type:** Int64 **Description:** The associated campaign. |
| Category optional | **Type:** Int64 **Description:** Specifies the category targeted by the filter. |
| IncludeCompositeRoles <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to include the composite roles in the certification. |
| IncludeDeniedPermissions <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** Filters items with denied permissions from Access Certification Campaign. |
| IncludeDoubleValidation <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to include the assignments of entitlements with two validations in the certification. |
| IncludeManualAssignmentNotAllowed <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to include in the certification the resources that cannot be requested manually, i.e. those from [resource types](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/provisioning/resourcetype#properties) with `ApprovalWorkflowType` set to `ManualAssignmentNotAllowed`. |
| IncludeNestedCategories <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** When a category is used as filter, all its nested categories are also included in the campaign. |
| IncludeNoValidation <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to include the assignments of entitlements without validation in the certification. |
| IncludeResourceNavigations <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to include the resource navigations in the certification. |
| IncludeResourceScalars <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to include the resource scalars in the certification. |
| IncludeResourceTypes <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to include the resource types in the certification. |
| IncludeSimpleValidation <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to include the assignments of entitlements with one validation in the certification. |
| IncludeSingleRoles <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to include the single roles in the certification. |
| IncludeTripleValidation <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to include the assignments of entitlements with three validations in the certification. |
| IncludeWorkflowStateApproved <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to include the manually approved assignments of entitlements in the certification. |
| IncludeWorkflowStateFound <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to include the reconciled assignments of entitlements in the certification. |
| IncludeWorkflowStateHistory <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to include the preexisting approved assignments of entitlements in the certification. |
| IncludeWorkflowStatePolicyApproved <span class="optionalAttribute">default value: true</span> | **Type:** Boolean **Description:** `true` to include the automatically approved assignments of entitlements in the certification. |
| LatestCertifiedLimitDate optional | **Type:** DateTime **Description:** If specified, only assignments of entitlements not certified since. |
| ResourceType optional | **Type:** Int64 **Description:** Specifies the resource type targeted by the filter. |
| Tags optional | **Type:** String **Description:** Tags of the roles targeted by the campaign filter. The tag separator is `¤`. |
| TargetedRisk optional | **Type:** Int64 **Description:** If set, filters on the owner risk. |
