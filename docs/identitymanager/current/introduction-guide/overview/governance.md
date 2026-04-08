---
title: "Governance"
description: "Governance"
sidebar_position: 30
---

# Governance

Identity Manager not only gives the right entitlements to the right identities, but also makes sure that, over time, every assignment still complies with the configured policy.

## Enforcing the Policy

By reading entitlement data from the managed systems, Identity Manager builds an exhaustive list of **existing** assignments for all identities in all managed systems.

Rules and roles define a policy. By definition, assignments not supported by a rule do not comply with the policy. These assignments are identified as **non-conforming** in order to be acted upon by knowledgeable users who can decide whether the assignment is warranted, such as security officers.

![**non-conforming** Assignments](/images/identitymanager/integration-guide/role-assignment/assignments-of-entitlements/governance_nonconforming.webp)

A **non-conforming** assignment must be reviewed in Identity Manager by a knowledgeable user, and is therefore:

- either removed if Identity Manager correctly spotted it and the owner should indeed not possess
this permission;
- or kept as an **exception** if the configured rules do not apply to this particular case.

## Other Governance Tools

Identity Manager provides a set of governance tools to help enforce the policy, like access certification campaigns, risk management or reporting.

## Next Steps

Let's read some [Use Case Stories](../../introduction-guide/overview/use-cases).

## Learn More

Learn more on [Governance](../../integration-guide/governance).

Learn more on how to [Generate Reports](../../user-guide/administrate/reporting).

Learn more on [Perform Access Certification](../../user-guide/administrate/access-certification).

Learn more on how to [Manage Risks](../../user-guide/optimize/risk-management).

