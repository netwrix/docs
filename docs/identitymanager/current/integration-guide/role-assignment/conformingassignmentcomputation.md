---
title: "Conforming Assignments"
description: "Conforming Assignments"
sidebar_position: 90
---

# Conforming Assignments

The [Compute Role Model Task](../../integration-guide/toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask) is able to compute, for a given identity, the appropriate assignments.

If you are interested in a detailed description of the actual Compute Role Model task algorithm, please refer to the Reference documentation. This article focuses more on the design decisions and the underlying philosophy of the process.

## Overview

This is how Identity Manager solves the identity lifecycle issue.

> **FAQ**: During onboarding, moving, offboarding, how can we make sure that an identity has the
> appropriate assignments?  
> What are the appropriate assignments?

They are a trade-off between having enough assignments to work efficiently but not too many as to pose a security threat.

Choosing the appropriate assignments is a science as much as an art. Identity Manager helps formalize decision rules to make them more efficient. But talking about assignments and their provisioning requires the appropriate language.

## Roles

> **FAQ**: What does assigning an entitlement means?

In a target application, it is granting an account membership for a group, changing a person's clearance level, adding an authorized account to the access control list of a resource, etc.

Performing an assignment requires a great deal of knowledge about the inner mechanisms of the target authorization mechanism. That makes talking about entitlement even more complicated. Am I talking about a group, a resource's access control list, a clearance level?

Identity Manager here aims at:

- Making every assignment decision more intentional.
- Making automation of those assignment decisions possible.

For these goals, Identity Manager hides this complexity behind an ubiquitous language, using a widely known model: RBAC. In the end, talking about entitlements is talking about roles. No more multiple obscure authorization mechanisms.

This makes thinking about entitlements within Identity Manager easy. The provisioning issues stay out of the way, and all the energy can be focused on designing the perfect assignment policy.

The appropriate model also helps formalizing rules that can be used for automation.

## Dimensions

Assignment decisions for a user are always made based on the user's needs and legitimacy.

> **FAQ**: Are employees working on tasks that need this assignment? Are they senior enough to have
> that responsibility?

The basis for an assignment decision can be seen as a set of "identity attributes" that represent the place of the employee in the organization.

We can formalize these "identity attributes", on which informal assignment decisions are made, by translating them into dimensions. Identity Manager's dimensions are exactly that: key criteria, on which assignment decisions are based.

Just as roles, dimensions are a fundamental piece of the puzzle. Choosing dimensions forces users to sit down and really think about what really motivates assignment decisions in the organization. It is going to help with automation but it is also going to help come up with better decision rules, and hence improve the overall security of the organization. Assignment rules naturally flow from dimensions and roles.

## Rules

> **FAQ**: Do all employees working on a given task have the entitlements they need?

Roles and dimensions are the basis for a language that enables users to formalize, in a very explicit way, the assignment policy: who should get what entitlement. Dimensions are criteria for decisions and roles are the result of a decision. We are now only missing the rules that map criteria to roles.

Those are the assignment rules: single role rules and composite role rules.

Writing the assignment policy actually becomes very easy. Once dimensions and roles are identified, assignment rules become obvious.

The last difficulty is provisioning those assignments.

## Provisioning

> **FAQ**: Is the data from the target application complying with the rules created earlier?

Translating roles into provisioning orders is finding out how the target application should be changed to satisfy the assignments. This is where the technical complexity that was hidden by the role, should be written. Authorization mechanisms map so well to RBAC that provisioning mechanisms naturally flow from the roles.

Provisioning mechanisms all follow this pattern:

1. Start with the **identity**.
2. Find the resource in the target application that should be updated to satisfy the assignment
requirement. It is often an account. That's the **correlation**.
3. Compute the value of the data that should be updated in the target resource. That's
**provisioning rules**.

One last point to consider is that provisioning rules and correlation sometimes depend on the type of resource we are handling. Authorization mechanisms often discriminate between resources, depending on their relevance for security. We might need specific provisioning rules to enforce this difference.

The resource type materializes the classification of resources of the same application into categories relevant from a security point of view. As a bonus, classifying resources help with governance.

## The Role Model

> **FAQ**: What is the role model in a nutshell?

Dimensions, roles, assignment rules, resource type, provisioning rules.

You start with dimensions. From there, roles are deduced from assignment rules. They are translated to provisioning orders, following scalar rules and correlation rules and resource types.

## When There Are No Rules

If you're not comfortable yet with writing rules that automatically assign roles, you can skip dimensions and start this whole process from roles.

You can assign roles manually to users and still benefit from hiding the provisioning complexity inside roles, and have a good basis for writing down your assignment policy.

