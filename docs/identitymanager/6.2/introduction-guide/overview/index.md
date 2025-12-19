---
title: "IGA and Netwrix Identity Manager"
description: "IGA and Netwrix Identity Manager"
sidebar_position: 10
---

# IGA and Netwrix Identity Manager

Identity Manager is a powerful tool for Identity Governance and Administration (IGA) automation.

## Identity Governance and Administration (IGA)

Identity Governance and Administration (IGA) is a combination of Identity Access Management (IAM)
and Identity Access Governance (IAG).

- IAM is about allowing the right identities to have the right permissions at the right time for the
  right reasons.
- IAG is about providing visibility regarding identities, user access, and for monitoring
  compliance.

[See Gartner's documentation on IGA](https://www.gartner.com/en/documents/3885381).

## Why Identity Manager

We could explain Identity Manager's purpose like this:

Typically, Identity Manager manages entitlements automatically according to a user's needs, for
example Active Directory group memberships.

**---**

**First, we need to manage identities.**

To do so, Identity Manager capitalizes on information from several source systems in order to build
a central repository. This repository should contain all the organizational data relevant for access
management for all users, meaning not only employees but also contractors, bots, or any kind of
identity.

![Synchronization](/images/identitymanager/saas/introduction-guide/overview/overview_synchronization.webp)

**This implies involving external systems.**

Access management requires reading/writing data to/from varied systems and applications, like the
Active Directory. Identity Manager provides an expanded set of connectors which contain the
technology required for IGA-related data flows.

![Connectors](/images/identitymanager/saas/introduction-guide/overview/overview_connectors.webp)

See more details on [Identity Management](/docs/identitymanager/6.2/introduction-guide/overview/identity-management/index.md) and connection between
systems.

**---**

**Then, we need to manage entitlements, in other words access rights, or permissions.**

Identity Manager helps you build a role catalog that lists all entitlements from all managed
systems. The technical entitlements can then associated with new, functional names that more clearly
represent a business-oriented view point.

In addition, Identity Manager helps you determine identities' expected entitlements by building a
role model. This model contains different kinds of rules that will suggest entitlement assignments,
or even assign them directly, based on the imported organizational data.

As each working environment has its own particularities, you will be able to refine the identity
model by defining dimensions, i.e. criteria from among organizational data that will trigger the
rules.

![Calculation](/images/identitymanager/saas/introduction-guide/overview/overview_calculation.webp)

**---**

**Finally, we need to actually give identities their entitlements and then govern them.**

Identity Manager can be configured to provision the managed systems in order to apply the changes
dictated by the role model. This provisioning can be done either directly, with automatic
provisioning, or by notifying system administrators of the needed changes. Thus, identities finally
get their entitlements.

![Provisioning](/images/identitymanager/saas/introduction-guide/overview/overview_provisioning.webp)

Furthermore, Identity Manager provides a few workflows for entitlement request or user data
modification, which often include approval from a third party, hence identities get their
entitlements securely.

See the [Entitlement Management](/docs/identitymanager/6.2/introduction-guide/overview/entitlement-management/index.md) topic for additional
information.

Thanks to the role model and data flows between Identity Manager and the managed systems, Identity
Manager ensures the compliance of existing permission assignments with the policy, pointing out
non-conforming assignments.

See the [Governance](/docs/identitymanager/6.2/introduction-guide/overview/governance/index.md) topic for additional information.

## Examples

Let's read some [Use Case Stories](/docs/identitymanager/6.2/introduction-guide/overview/use-cases/index.md).
