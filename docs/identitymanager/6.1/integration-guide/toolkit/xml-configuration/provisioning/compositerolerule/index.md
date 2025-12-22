---
title: "CompositeRoleRule"
description: "CompositeRoleRule"
sidebar_position: 40
---

# CompositeRoleRule

A composite role rule assigns a composite role to users who match given criteria.

## Examples

The following example declares a new rule to give the composite role "HR_Accounting" to all the
"FCT0008" users.

```

    <CompositeRoleRule Role="HR_Accounting" D1="FCT0008" Policy="Default" />    <CompositeRoleRule Role="HR_Accounting" D1="FCT0008" Type="Suggested" Policy="Default" />

```

## Properties

| Property                      | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| D0 optional                   | **Type** Int64 **Description** Value to match for the dimension `D0` (up to `D127`) to trigger the rule. For example, considering that `D0` corresponds to users' countries, then set `D0` to `France` to assign the composite role to users whose country is `France`.                                                                                                                                                                                                                                                                                             |
| IsDenied default value: false | **Type** Boolean **Description** `true` to forbid the assignment instead of applying it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| L0 default value: false       | **Type** Boolean **Description** `true` to activate inheritance for `D0` (up to 127).                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ParentRole optional           | **Type** Int64 **Description** Identifier of a composite role that users must have to trigger the rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Policy required               | **Type** Int64 **Description** Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Role required                 | **Type** Int64 **Description** Identifier of the composite role to be assigned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Type default value: 0         | **Type** RuleType **Description** Type of the rule. `0` - **Required**: the role is automatically assigned to users matching the criteria. `1` - **RequestedAutomatically**: the role is listed in the permission basket of new workers, these assignments can still be modified. For existing workers, the rule's type is `Suggested`. `2` - **Suggested**: the role is listed among suggested permissions in the permission basket of users matching the criteria during an entitlement request, suggested assignments must be selected manually to be requested. |
