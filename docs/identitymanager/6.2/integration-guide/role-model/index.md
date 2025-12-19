---
title: "Role Model"
description: "Role Model"
sidebar_position: 80
---

# Role Model

The role model, with its computation and enforcement, is at the heart of Identity Manager's engine.
It is composed mainly of roles, representing entitlements, and rules, enforcing the company
assignment policies.

Make sure to read the introduction on entitlement management first. See the
[Entitlement Management](/docs/identitymanager/6.2/introduction-guide/overview/entitlement-management/index.md) topic
for additional information.

## Roles

Roles represent entitlements from the managed systems, but expressed in a language understandable by
non-technical people.

A single role is meant to represent one entitlement from a managed system, by acting as a label,
thus allowing better organization and readability.

A composite role is meant to group several single roles into a meaningful, business-themed
entitlement package.

In this way, the role model can be seen as a
[Role-Based Access Control](https://en.wikipedia.org/wiki/Role-based_access_control) (RBAC).

## Assignment Rules

An
[Automate Role Assignments](/docs/identitymanager/6.2/user-guide/optimize/assignment-automation/automate-role-assignment/index.md)
gives an entitlement to a user, usually based on (at least) one criterion from the user's data.
Assignment rules are:

- single role rules which assign single roles;
- composite role rules which assign composite roles;
- resource type rules which assign resources, usually accounts, of specific types.

The identity criteria that trigger the rules are named dimensions.

In this way, the role model can also be seen as an
[Attribute-Based Access Control](https://en.wikipedia.org/wiki/Attribute-based_access_control)
(ABAC) model.

Identity Manager gives users access to given resources in the managed systems, based on roles and
rules, but it does not override the managed systems' authorization mechanisms.

## Enforcement of the Assignment Policy

The company's policy for entitlement assignment is enforced by Identity Manager with the computation
of the role model, through the
[Compute Role Model Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask/index.md)
It applies all the configured rules, thus:

- helping build a catalog of all available entitlements in the managed systems; See the
  [Create Roles in Bulk](/docs/identitymanager/6.2/user-guide/set-up/single-roles-catalog-creation/role-naming-rule-creation/index.md) topic for additional information.
- helping build the rules that define the assignment policy, i.e. the expected entitlement
  assignments for all users; See the[Perform Role Mining](/docs/identitymanager/6.2/user-guide/optimize/assignment-automation/role-mining/index.md) topic for additional information.
- automating entitlement assignment; See the [Automate Role Assignments](/docs/identitymanager/6.2/user-guide/optimize/assignment-automation/automate-role-assignment/index.md) topic for additional information.
- generating the provisioning orders that enable writing to the managed systems; See the [Create a Provisioning Rule](/docs/identitymanager/6.2/user-guide/set-up/provisioning-rule-creation/index.md) topic for additional information.
- detecting assignments in the managed systems that do not comply with the policy; See the[Review Non-conforming Assignments](/docs/identitymanager/6.2/user-guide/administrate/non-conforming-assignment-review/index.md) topic for additional information.
