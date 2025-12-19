---
title: "Role Mining"
description: "Role Mining"
sidebar_position: 100
---

# Role Mining

Role mining aims to reduce the cost of entitlement management by automating entitlement assignments,
via the analysis of existing assignments. See the
[Automate Assignments](/docs/identitymanager/6.2/user-guide/optimize/assignment-automation/index.md) topic for
additional information.

## Overview

After the role catalog is established, the
[Compute Role Model Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/server/computerolemodeltask/index.md)
is able to assign single roles to users according to their attributes which are used as assignment
criteria.

> For example, in the AD, entitlements are given through group membership. Integrators create a
> navigation rule to assign each group to the users who have the corresponding single role. Then,
> the Compute-RoleModel task is able to assign single roles to users according to their existing
> group membership.
>
> In addition to group membership, the assignment of an entitlement to users could also depend on
> users' attributes like their location, position title, etc.

Now that users received their roles, the role mining tool can analyze these assignments and deduce
[Single Role Rule](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/singlerolerule/index.md) which will
assign single roles to certain users matching given criteria.

![Schema - Role Mining](/images/identitymanager/saas/user-guide/optimize/assignment-automation/role-mining/rolemining_schema.webp)

Role mining is a Machine Learning process. It is a statistic tool used to emphasize the dimensions
that constitute the key criteria for existing role assignments. See the
[Conforming Assignments](/docs/identitymanager/6.2/integration-guide/role-assignment/conformingassignmentcomputation/index.md)topic for
additional information. It detects the most probable links between identities dimensions and their
roles in order to suggest the appropriate entitlement assignment rules.

> For example, suppose that 80% of Netwrix Identity Manager (formerly Usercube) workers in
> Marseilles have access to an application "App". Then, role mining is most likely to recognize the
> working site as a relevant dimension, and suggest to create a rule that gives the "App" access to
> users whose site is Marseilles.

Role mining being a statistic tool based on existing entitlement assignments, it appears useless if
the role model contains fewer than 2,000 role assignments. Then, start by reinforcing the
[Create Roles in the Role Catalog](/docs/identitymanager/6.2/user-guide/set-up/single-roles-catalog-creation/index.md).

### Technical Principles

Role mining works through
[Mining Rule](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/provisioning/miningrule/index.md) that Identity Manager
applies with the
[Get Role Mining Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/server/getroleminingtask/index.md).

### Entitlement differentiation with rule types

Mining rules can be configured to generate:

1. automatic rules, i.e. rules which assign roles automatically with or without a validation;
2. suggested rules, i.e. rules which don't assign roles directly, but suggest them during an
   entitlement request for a user.

    ![Suggested](/images/identitymanager/saas/user-guide/optimize/assignment-automation/role-mining/rolemining_suggested_v602.webp)

You can generate both automatic and suggested rules for the same role, with different precision
levels and different approval workflows.

> Consider an organization where an unknown ratio of users have a given role. Using the precision
> settings, we can create a mining rule to generate automatic assignment rules when the ratio is
> above 95% and a second mining rule to generate suggested assignment rules when the ratio is
> between 75% and 95%.
>
> ![Rule Types](/images/identitymanager/saas/user-guide/optimize/assignment-automation/role-mining/rolemining_ruletype.webp)

You can also differentiate entitlements according to their sensitivity, for example require
additional reviews following the request of a sensitive entitlement:

![Rule Types - Sensitivity](/images/identitymanager/saas/user-guide/optimize/assignment-automation/role-mining/rolemining_ruletype-sensitivity.webp)

The automation of entitlement assignments according to sensitivity brings greater confidence in
basic entitlements assignment which won't need to be certified anymore. Thus, automation lets
certification campaigns focus on more sensitive entitlements.

Role mining should be performed first for automatic rules as they are stricter precision-wise. Thus,
automatic rules should always have priority over suggested rules (via the `Priority` setting).

### Impact on users' entitlements

Consider that all users from a given organization have a given role. Then role mining will create a
single role rule to assign automatically this role to any user of this organization. Then users'
entitlements remain unchanged:

![Impact Example - Use Case 1](/images/identitymanager/saas/integration-guide/role-mining/rolemining_impact_usecase1.webp)

Now consider that half of users in the organization have the role. Then role mining will not
generate a role assignment rule. Then users' entitlements remain unchanged:

![Impact Example - Use Case 2](/images/identitymanager/saas/integration-guide/role-mining/rolemining_impact_usecase2.webp)

Starting from the previous example, consider now that users progressively request the role. As long
as the ratio is below a given threshold, then role mining will not generate a role assignment rule.
Then users' entitlements remain unchanged:

![Impact Example - Use Case 3](/images/identitymanager/saas/integration-guide/role-mining/rolemining_impact_usecase3.webp)

Starting from the previous example, consider now that users continue requesting the role. As soon as
the ratio is above the threshold, then role mining will create a single role rule to assign
automatically this role to any user in the organization. Then a few users are going to get the
entitlement:

![Impact Example - Use Case 4](/images/identitymanager/saas/integration-guide/role-mining/rolemining_impact_usecase4.webp)

Starting from the previous example, consider now that, as a result of a reorganization or an access
certification for example, some users do not have the role anymore. If the ratio is below the
threshold, then role mining will remove the single role rule. If the role (or its policy) is
configured with a grace period, users who need the role will not lose it. Then users' entitlements
remain unchanged:

![Impact Example - Use Case 5](/images/identitymanager/saas/integration-guide/role-mining/rolemining_impact_usecase5.webp)

## Perform Role Mining

See the
[Perform Role Mining](/docs/identitymanager/6.2/user-guide/optimize/assignment-automation/role-mining/index.md) for
additional information.

### Simulation

Be aware that you can configure the
[Get Role Mining Task](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/jobs/tasks/server/getroleminingtask/index.md)
to generate role assignment rules either directly or in a [Simulation](/docs/identitymanager/6.2/integration-guide/simulation/index.md).

Simulating the results of role mining allows a knowledgeable user to analyze the impact of role
mining on the role model, before applying them.

![Schema - Role Mining](/images/identitymanager/saas/integration-guide/role-mining/rolemining_simulation.webp)

The simulation tool gives another point of view on the role model as it emphasizes the changes.

![Schema - Role Mining](/images/identitymanager/saas/integration-guide/role-mining/rolemining_simulationresults.webp)

Identity Manager recommends simulating role mining before applying the results.
