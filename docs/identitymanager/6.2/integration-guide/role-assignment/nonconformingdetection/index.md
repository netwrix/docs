---
title: "Non-Conforming Assignments"
description: "Non-Conforming Assignments"
sidebar_position: 110
---

# Non-Conforming Assignments

The
[Compute Role Model Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask/index.md)
is able to detect from synchronized data a list of non-conforming or missing resources/entitlements
for every identity. That is one of Identity Manager's most powerful governance features, provided
you have a full role model configured.

## Build the conforming assignment list

The **first step** is building the conforming assignment list, as explained in the
[Conforming Assignments](/docs/identitymanager/6.2/integration-guide/role-assignment/conformingassignmentcomputation/index.md). This list (list `A`)
includes the assignments that perfectly comply with the role model/assignment policy.

## Build the existing assignment list

The **second step** is building the existing assignment list (list `B`), as explained in
the[Existing Assignments](/docs/identitymanager/6.2/integration-guide/role-assignment/existingassignmentsdeduction/index.md) every synced resource can be
translated into a role assignment following the assignment rules "in reverse".

## Compare both lists

We can now **compare both lists** to find out if the managed systems really comply with the decided
upon assignment policy.

For every assignment from list `B` representing resources from the synced data:

1. There is a rule path from the identity attribute to the resource provisioning order in the role
   model. The assignment was expected, it can be found in list `A`.
2. There is no rule path from the identity attribute to the resource provisioning order in the role
   model. The assignment was unexpected, it is not in list `A` or it is in list `A` but not with
   exactly the same property values.

The "unexpected" (or non-conforming) assignments can be for example orphan accounts. Sometimes, the
account itself should indeed exist according to the rules, but its attribute values are
"unexpected", contradicting scalar rules.

Non-conforming accounts are presented in the reconciliation screens: from the role point-of-view in
the role reconciliation screen and from the resource point-of-view in the resource reconciliation
screen.

They need human confirmation to be either kept or destroyed.

For every assignment from list `A` representing expected assignments:

1. There is an exact match in list `B`. The managed system complies with the assignment policy for
   this resource.
2. There is no match in list `B`: the managed system doesn't comply with the assignment policy. The
   resource is missing (the account is missing).

Missing accounts are presented in the provisioning review for validation before provisioning.

Identity Manager will **never delete data** without having a user's confirmation first. That is the
reason why these variations from the ideal aren't fixed automatically but submitted for review.

Some users might wonder how they can perform governance if they don't have automated rules.
Certification can help. By reviewing (even manually) the entitlement landscape, non-conforming
account proliferation can be contained.

This feature is the final touch of the **sync-fulfill-verify loop** that makes Identity Manager so
efficient. It is exactly like a closed-loop control system with a feedback loop: perturbations, in
the form of modifications in a managed system that don't go through Identity Manager first, trigger
a reaction. This reaction uses the role model to suggest a fix. This is the only way for the state
of the entitlement landscape to tend towards the ideal standards described by the rules.
