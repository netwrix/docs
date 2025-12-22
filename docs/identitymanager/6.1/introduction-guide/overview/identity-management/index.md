---
title: "Identity Management"
description: "Identity Management"
sidebar_position: 10
---

# Identity Management

Managing identities' entitlements requires starting by managing identities themselves.

## A Central Repository

A company involves many sorts of identities: obviously employees, but also external workers like
contractors who are usually not tracked in the company's systems except for billing purposes, bots,
softwares, etc. All identity types that need to be assigned entitlements to work within the company
must be represented.

Companies often use about one system for each identity type. Usercube capitalizes on information
from several source systems in order to build a central repository meant to contain all the data
necessary to manage all identities throughout their whole lifecycle.

![Usercube's Repository](/images/identitymanager/6.1/introduction-guide/overview/identity-management/identities_repository.webp)

Usercube's central repository acts as an intermediary between the systems that provide data, for
example the HR system, and those that receive data, for example the Active Directory. This greatly
reduces the complexity in the links between all systems.

Without an intermediary, adding one system to a set of n systems requires up to n sets of rules, one
for each reading/writing relationship that this system has with the others. The complexity is
quadratic.

Now with the central repository as an intermediary, implementing a new system requires only one more
set of rules. The complexity becomes linear.

![identities_complexityquadratic](/images/identitymanager/6.1/introduction-guide/overview/identity-management/identities_complexityquadratic.webp)

#### Quadratic Complexity

![identities_complexitylinear](/images/identitymanager/6.1/introduction-guide/overview/identity-management/identities_complexitylinear.webp)

#### Linear Complexity

## An Entity Relationship Model

Identities, along with any IGA-related data, are modeled in Usercube by an
[entity-relationship model](https://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model?featherlight=true).

All this data is organized and modeled by entities. This concept is quite similar to a database: an
entity is a set of properties, some are scalar so "simple" properties, and others are navigation
properties which make links between entities, quite like foreign keys in a database.

> For example, consider an entity `Directory_User` with properties like `Name`, `Email`, `JobTitle`,
> `Department`.
>
> Another entity could be `Directory_Department`, linked to `Directory_User` through a navigation
> property.
>
> Another entity could be `SAB_User` to model SAB accounts owned by users from `Directory_User`. The
> accounts from `SAB_User` could be related to groups from another entity `SAB_Group`.

![Entity Type - Schema](/images/identitymanager/6.1/user-guide/set-up/connect-system/entity-type-creation/entitytypecreation_schema.webp)

These entities' instances are called resources in Usercube. A resource can be the digital identity
of a user (human or bot), or an AD account or any other account, or an entry from the HR system, or
the representation of a department of the company, etc.

> Consider once more the `Directory_User` entity with properties like `Name`, `Email`, `JobTitle`,
> `Department`. Then a resource could be the digital identity of an employee whose name is John
> Smith, with the email address [john.smith@contoso.com](mailto:john.smith@contoso.com) and working
> as an assistant manager in the accounting department.

While Usercube provides a predefined model that should fit most organizations, it can still be
adjusted to your exact needs. Thus, Usercube provides a customizable model to organize a company's
data according to its IGA-related needs, which is also most reliable because it is kept up-to-date.

## Connectors

Each entity is related to a managed system, for example the Active Directory or SAB or ServiceNow,
etc. The reading/writing data between the system and Usercube are ensured by connectors. So Usercube
can be configured with one connector for each managed system.

![Connector Schema](/images/identitymanager/6.1/user-guide/set-up/connect-system/connectorcreation_connectorschema.webp)

For a given system, a connector contains:

- the technology which enables data flows between the system and Usercube;
- the related entities which model the system's resources;
- the categories which group the system's resources together according to the rules that we want to
  apply to manage entitlement assignment for this system.

Thus, a connector enables synchronization, i.e. Usercube reading from a managed system via an
[extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load) process.

![Synchronization](/images/identitymanager/6.1/introduction-guide/overview/overview_synchronization.webp)

> A typical example is the synchronization of the HR system's data to retrieve employees' personal
> information.

It also enables provisioning, i.e. Usercube writing to a managed system, but that is something we
will dig into
[later](/docs/identitymanager/6.1/introduction-guide/overview/governance/index.md).

![Provisioning](/images/identitymanager/6.1/introduction-guide/overview/overview_provisioning.webp)

## Repository Updates

Once Usercube is configured, with not only connectors but also
[roles and rules, etc.](/docs/identitymanager/6.1/introduction-guide/overview/entitlement-management/index.md)
(which constitute a different topic), changes can be made to the repository through:

- synchronization, when changes were made in the managed systems and then synchronized, so copied,
  to Usercube;
- manual input, mostly used for a few resources/properties that rarely change such as contractors'
  identities;
- workflows which contain approval steps to complete before the changes are actually applied;
- the
  [policy's rules](/docs/identitymanager/6.1/introduction-guide/overview/entitlement-management/index.md)
  that trigger changes to the repository directly, and those that trigger changes to managed systems
  and impact the repository indirectly after the next synchronization.

## Next Steps

Let's learn about
[entitlement management](/docs/identitymanager/6.1/introduction-guide/overview/entitlement-management/index.md).

## Learn More

[Learn more on identity management](/docs/identitymanager/6.1/integration-guide/identity-management/index.md).

[See how to create the workforce repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md).

[Learn more on connectors](/docs/identitymanager/6.1/integration-guide/connectors/index.md).

[See how to create a connector](/docs/identitymanager/6.1/user-guide/set-up/connect-system/index.md).

[Learn more on synchronization](/docs/identitymanager/6.1/integration-guide/synchronization/index.md).

[Learn more on workflows](/docs/identitymanager/6.1/integration-guide/workflows/index.md).
