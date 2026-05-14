---
title: "SingleRoleRule"
description: ""
sidebar_position: 17
---

A single role rule assigns a single role to users who match given criteria.


## Examples
The following example declares a new rule to give the single role to all the "FCT0000" users.
```xml
    <SingleRoleRule Role="DL-INTERNET-ALL" D1="FCT0000" Policy="Default" />

    <SingleRoleRule Role="DL-INTERNET-ALL" D1="FCT0000" Type="Suggested" Policy="Default" />
```


## Properties

|Property|Details|
|---|---|
| CompositeRole optional | **Type:** Int64 **Description:** Identifier of a [composite role](/docs/identitymanager/current/integration-guide/toolkit/xml-configuration/provisioning/compositerole) that users must have to trigger the rule. |
| D0 optional | **Type:** Int64 **Description:** Value to match for the dimension `D0` (up to `D127`) to trigger the rule. For example, considering that `D0` corresponds to users' countries, then set `D0` to `France` to assign the single role to users whose country is `France`. |
| IsDenied <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to forbid the assignment instead of applying it. |
| L0 <span class="optionalAttribute">default value: false</span> | **Type:** Boolean **Description:** `true` to activate inheritance for `D0` (up to 127). |
| Policy required | **Type:** Int64 **Description:** Identifier of the policy that the rule is part of. |
| Role required | **Type:** Int64 **Description:** Identifier of the single role to be assigned. |
| Type <span class="optionalAttribute">default value: 0</span> | **Type:** RuleType **Description:** Type of the rule. `0` - **Required**: the role is automatically assigned to users matching the criteria. `1` - **RequestedAutomatically**: the role is listed in the permission basket of new workers, these assignments can still be modified. For existing workers, the rule's type is `Suggested`. `2` - **Suggested**: the role is listed among suggested permissions in the permission basket of users matching the criteria during an entitlement request, suggested assignments must be selected manually to be requested. |
