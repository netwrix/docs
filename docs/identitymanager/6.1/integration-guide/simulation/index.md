---
title: "Simulation"
description: "Simulation"
sidebar_position: 110
---

# Simulation

Simulations aim to assess the impact of a modification in the role model, i.e. any modification of a
role or rule, before it is applied.

## Overview

Usercube's simulations gather roles and rules which are to be created, modified or deleted, without
being inserted in the actual role model straight away. More specifically, a simulation can involve:

- [correlation rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcecorrelationrule/index.md)
  and
  [classification rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourceclassificationrule/index.md);
- [scalar rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md)
  and
  [navigation rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md);
- [resource type rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/resourcetype/index.md);
- [single roles](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/singlerole/index.md)
  and
  [composite roles](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/compositerole/index.md);
- [single role rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/singlerolerule/index.md)
  and
  [composite role rules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/provisioning/compositerolerule/index.md).

A simulation can also be created by the
[role mining tool](/docs/identitymanager/6.1/user-guide/optimize/assignment-automation/role-mining/index.md)
for the automation of role assignments.

Through simulation, integrators can:

1. create, modify or delete roles and rules in a given policy;

    Only one simulation can be active per policy.

2. observe via simulation reports the impact on the whole system, i.e. both assignments and
   provisioning results, before the changes are applied;
3. decide to confirm or cancel changes.

NETWRIX recommends using simulation whenever performing an action (creation/modification/deletion)
on the role model.

## Perform a Simulation

[See how to perform a simulation](/docs/identitymanager/6.1/user-guide/optimize/simulation/index.md).
