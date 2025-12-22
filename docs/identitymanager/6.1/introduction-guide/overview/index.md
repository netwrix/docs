---
title: "IGA and Usercube"
description: "IGA and Usercube"
sidebar_position: 10
---

# IGA and Usercube

Usercube is a powerful tool for Identity Governance and Administration (IGA) automation.

## Identity Governance and Administration (IGA)

Identity Governance and Administration (IGA) is a combination of Identity Access Management (IAM)
and Identity Access Governance (IAG).

- IAM is about allowing the right identities to have the right permissions at the right time for the
  right reasons.
- IAG is about providing visibility regarding identities, user access, and for monitoring
  compliance.

[See Gartner's documentation on IGA](https://www.gartner.com/en/documents/3885381).

## Why Usercube

We could explain Usercube's purpose like this:

**Typically, Usercube manages entitlements automatically according to a user's needs, for example
Active Directory group memberships.**

**---**

**First, we need to manage identities.**

To do so, Usercube capitalizes on information from several source systems in order to build a
central repository. This repository should contain all the organizational data relevant for access
management for all users, meaning not only employees but also contractors, bots, or any kind of
identity.

![Synchronization](/images/identitymanager/6.1/introduction-guide/overview/overview_synchronization.webp)

**This implies involving external systems.**

Access management requires reading/writing data to/from varied systems and applications, like the
Active Directory. Usercube provides an expanded set of connectors which contain the technology
required for IGA-related data flows.

![Connectors](/images/identitymanager/6.1/introduction-guide/overview/overview_connectors.webp)

[See more details on identity management and connection between systems](/docs/identitymanager/6.1/introduction-guide/overview/identity-management/index.md).

**---**

**Then, we need to manage entitlements, in other words access rights, or permissions.**

Usercube helps you build a role catalog that lists all entitlements from all managed systems. The
technical entitlements can then associated with new, functional names that more clearly represent a
business-oriented view point.

In addition, Usercube helps you determine identities' expected entitlements by building a role
model. This model contains different kinds of rules that will suggest entitlement assignments, or
even assign them directly, based on the imported organizational data.

As each working environment has its own particularities, you will be able to refine the identity
model by defining dimensions, i.e. criteria from among organizational data that will trigger the
rules.

![Calculation](/images/identitymanager/6.1/introduction-guide/overview/overview_calculation.webp)

**---**

**Finally, we need to actually give identities their entitlements and then govern them.**

Usercube can be configured to provision the managed systems in order to apply the changes dictated
by the role model. This provisioning can be done either directly, with automatic provisioning, or by
notifying system administrators of the needed changes. Thus, identities finally get their
entitlements.

![Provisioning](/images/identitymanager/6.1/introduction-guide/overview/overview_provisioning.webp)

Furthermore, Usercube provides a few workflows for entitlement request or user data modification,
which often include approval from a third party, hence identities get their entitlements securely.

[See more details on entitlement management](/docs/identitymanager/6.1/introduction-guide/overview/entitlement-management/index.md).

Thanks to the role model and data flows between Usercube and the managed systems, Usercube ensures
the compliance of existing permission assignments with the policy, pointing out non-conforming
assignments.

[See more details on governance](/docs/identitymanager/6.1/introduction-guide/overview/governance/index.md).

## Examples

[Find use case stories](/docs/identitymanager/6.1/introduction-guide/overview/use-cases/index.md).
