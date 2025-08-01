---
title: "Composite Role Rule"
description: "Composite Role Rule"
sidebar_position: 40
---

# Composite Role Rule

A composite role rule assigns a composite role to users who match given criteria.

## Examples

The following example declares a new rule to give the composite role `"HR_Accounting"` to all the
`"FCT0008"` users.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

    <CompositeRoleRule Role="HR_Accounting" D1="FCT0008" Policy="Default" />
    <CompositeRoleRule Role="HR_Accounting" D1="FCT0008" Type="Suggested" Policy="Default" />

```

## Properties

| Property                      | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| D0 optional                   | Int64    | Value to match for the dimension `D0` (up to `D127`) to trigger the rule. For example, considering that `D0` corresponds to users' countries, then set `D0` to `France` to assign the composite role to users whose country is `France`.                                                                                                                                                                                                                                                                                 |
| IsDenied default value: false | Boolean  | `true` to forbid the assignment instead of applying it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| L0 default value: false       | Boolean  | `true` to activate inheritance for `D0` (up to 127).                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ParentRole optional           | Int64    | Identifier of a composite role that users must have to trigger the rule.                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Policy required               | Int64    | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Priority default value: 0     | Int32    | Priority of the rule over the others. The highest priority is defined by the smallest number. This enables, for example, overriding "deny rules" that have a lower priority (higher number).                                                                                                                                                                                                                                                                                                                             |
| Role required                 | Int64    | Identifier of the composite role to be assigned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Type default value: 0         | RuleType | Type of the rule. `0` - Required — the role is automatically assigned to users matching the criteria. `1` - RequestedAutomatically — the role is listed in the permission basket of new workers, these assignments can still be modified. For existing workers, the rule's type is `Suggested`. `2` - Suggested — the role is listed among suggested permissions in the permission basket of users matching the criteria during an entitlement request, suggested assignments must be selected manually to be requested. |
