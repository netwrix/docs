---
title: "Governance"
description: "Governance"
sidebar_position: 30
---

# Governance

Usercube not only gives the right entitlements to the right identities, but also makes sure that,
over time, every assignment still complies with the configured policy.

## Enforcing the Policy

By reading entitlement data from the managed systems, Usercube builds an exhaustive list of existing
assignments for all identities in all managed systems.

Rules and roles define a policy. By definition, assignments not supported by a rule do not comply
with the policy. These assignments are identified as non-conforming in order to be acted upon by
knowledgeable users who can decide whether the assignment is warranted, such as security officers.

![Non-Conforming Assignments](/images/identitymanager/6.1/integration-guide/role-assignment/assignments-of-entitlements/governance_nonconforming.webp)

A non-conforming assignment must be reviewed in Usercube by a knowledgeable user, and is therefore:

- either removed if Usercube correctly spotted it and the owner should indeed not possess this
  permission;
- or kept as an exception if the configured rules do not apply to this particular case.

## Other Governance Tools

Usercube provides a set of governance tools to help enforce the policy, like access certification
campaigns, risk management or reporting.

## Next Steps

Let's read some
[use case stories](/docs/identitymanager/6.1/introduction-guide/overview/use-cases/index.md).

## Learn More

[Learn more on governance](/docs/identitymanager/6.1/integration-guide/governance/index.md).

[Learn more on reporting](/docs/identitymanager/6.1/user-guide/administrate/reporting/index.md).

[Learn more on access certification](/docs/identitymanager/6.1/user-guide/administrate/access-certification/index.md).

[Learn more on risk management](/docs/identitymanager/6.1/user-guide/optimize/risk-management/index.md).
