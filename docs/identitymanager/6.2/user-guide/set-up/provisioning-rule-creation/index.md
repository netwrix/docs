---
title: "Create a Provisioning Rule"
description: "Create a Provisioning Rule"
sidebar_position: 90
---

# Create a Provisioning Rule

How to define scalar rules, navigation rules and/or query rules to compute and provision target
resources values from source resources values. See the
[Resource Type](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md)
topic for additional information.

## Overview

[Categorize Resources](/docs/identitymanager/6.2/user-guide/set-up/categorization/index.md) led to the grouping of resources into resource
types (classification), and the establishment of source-to-target relationships between these
resources (correlation).

Sources are usually identities, and targets are usually accounts from the managed systems.

Here, we are going to compute the values of scalar and navigation properties for the target
resources used in entitlement management, based on source resources. We are going to
[Provision](/docs/identitymanager/6.2/user-guide/administrate/provisioning/index.md) these properties, i.e. write them to the
managed system.

The right tools for the job are provisioning rules: scalar rules, navigation rules, query rules.

These provisioning rules are designed to:

1. retrieve the input data in source objects;
2. compute the output value for target objects;
3. provision the corresponding properties in the managed system with the computation result.

Another kind of provisioning rule is called resource type rule. Instead of computing existing
properties, resource type rules create automatically target resources to be owned by given source
resources (identities).

In testing mode, the impacted resource types can be configured to block provisioning, by adding a
mandatory review before actually writing to the managed system. See the
[Create a Resource Type](/docs/identitymanager/6.2/user-guide/set-up/categorization/resource-type-creation/index.md) topic for additional
information.

## Participants and Artifacts

For a given managed system, integrators may need the help of the application owner who knows the
application users, entitlements and data model.

| Input                     | Output                                    |
| ------------------------- | ----------------------------------------- |
| Categorization (required) | Scalar rules Navigation rules Query rules |

See the [Categorize Resources](/docs/identitymanager/6.2/user-guide/set-up/categorization/index.md) topic for additional information.

## Create Provisioning Rules

- [Create Resources](/docs/identitymanager/6.2/user-guide/set-up/provisioning-rule-creation/resource-creation/index.md)type rules to automatically create resources.
- [Compute a Scalar Property](/docs/identitymanager/6.2/user-guide/set-up/provisioning-rule-creation/scalar-property-computation/index.md) to compute scalar properties;
- Create navigation and/or query rules to compute navigation properties.

Netwrix Identity Manager (formerly Usercube) recommends creating/modifying/deleting provisioning
rules using simulations in order to anticipate changes. See the
[Perform a Simulation](/docs/identitymanager/6.2/user-guide/optimize/simulation/index.md) topic for additional information.

## Next Steps

Once provisioning rules are created, integrators can start
to[Create Roles in the Role Catalog](/docs/identitymanager/6.2/user-guide/set-up/single-roles-catalog-creation/index.md).
