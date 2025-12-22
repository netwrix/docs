---
title: "SimulationAccessControlRules"
description: "SimulationAccessControlRules"
sidebar_position: 70
---

# SimulationAccessControlRules

This scaffolding generates the rights to configure and launch simulations.

It also gives access to a shortcut on the dashboard allowing to enter the simulation screen. Through
this screen, simulations can be launched and results can be visualized.

The scaffolding generates the following scaffoldings:

- [PolicySimulationControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/simulations/policysimulationcontrolrules/index.md):
- [RoleAndSimulationControlRules](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/simulations/roleandsimulationcontrolrules/index.md):

## Examples

```

**<SimulationAccessControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

**<PolicySimulationControlRules Id="7" Profile="Administrator" /><RoleAndSimulationControlRules Id="9" Profile="Administrator" />**

```
