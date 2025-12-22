---
title: "Simulation"
description: "Simulation"
sidebar_position: 110
---

# Simulation

Simulations aim to assess the impact of a modification in the role model, i.e. any modification of a
role or rule, before it is applied.

## Overview

Identity Manager's simulations gather roles and rules which are to be created, modified or deleted,
without being inserted in the actual role model straight away. More specifically, a simulation can
involve:

- [Resource Correlation Rule](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcecorrelationrule/index.md)
  and
  [Resource Classification Rule](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourceclassificationrule/index.md);
- Scalar rules and navigation rules;
- [Resource Type](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md) rules;
- [Single Role](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/singlerole/index.md) and
  [Composite Role](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/compositerole/index.md);
- [Single Role Rule](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/singlerolerule/index.md)and
  [Composite Role Rule](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/provisioning/compositerolerule/index.md).

A simulation can also be created by the role mining tool for the automation of role assignments. See
the [Perform Role Mining](/docs/identitymanager/saas/user-guide/optimize/assignment-automation/role-mining/index.md)
topic for additional information.

Through simulation, integrators can:

1. create, modify or delete roles and rules in a given policy;

    Only one simulation can be active per policy.

2. observe via simulation reports the impact on the whole system, i.e. both assignments and
   provisioning results, before the changes are applied;
3. decide to confirm or cancel changes.

Netwrix Identity Manager (formerly Usercube) recommends using simulation whenever performing an
action (creation/modification/deletion) on the role model.

## Perform a Simulation

See the [Perform a Simulation](/docs/identitymanager/saas/user-guide/optimize/simulation/index.md) for additional
information.
