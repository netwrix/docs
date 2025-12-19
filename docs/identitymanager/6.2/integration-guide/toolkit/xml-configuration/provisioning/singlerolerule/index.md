---
title: "Single Role Rule"
description: "Single Role Rule"
sidebar_position: 170
---

# Single Role Rule

A single role rule assigns a single role to users who match given criteria.

## Examples

The following example declares a new rule to give the single role to all the `"FCT0000"` users.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

    <SingleRoleRule Role="DL-INTERNET-ALL" D1="FCT0000" Policy="Default" />
    <SingleRoleRule Role="DL-INTERNET-ALL" D1="FCT0000" Type="Suggested" Policy="Default" />

```

## Properties

| Property                      | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CompositeRole optional        | Int64    | Identifier of a [Composite Role](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/compositerole/index.md) that users must have to trigger the rule.                                                                                                                                                                                                                                                                                                                                                                                                                  |
| D0 optional                   | Int64    | Value to match for the dimension `D0` (up to `D127`) to trigger the rule. For example, considering that `D0` corresponds to users' countries, then set `D0` to `France` to assign the single role to users whose country is `France`.                                                                                                                                                                                                                                                                                    |
| IsDenied default value: false | Boolean  | `true` to forbid the assignment instead of applying it.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| L0 default value: false       | Boolean  | `true` to activate inheritance for `D0` (up to 127).                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| Policy required               | Int64    | Identifier of the policy that the rule is part of.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Priority default value: 0     | Int32    | Priority of the rule over the others. The highest priority is defined by the smallest number. This enables, for example, overriding "deny rules" that have a lower priority (higher number).                                                                                                                                                                                                                                                                                                                             |
| Role required                 | Int64    | Identifier of the single role to be assigned.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Type default value: 0         | RuleType | Type of the rule. `0` - Required — the role is automatically assigned to users matching the criteria. `1` - RequestedAutomatically — the role is listed in the permission basket of new workers, these assignments can still be modified. For existing workers, the rule's type is `Suggested`. `2` - Suggested — the role is listed among suggested permissions in the permission basket of users matching the criteria during an entitlement request, suggested assignments must be selected manually to be requested. |
