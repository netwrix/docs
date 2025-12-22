---
title: "Simulation Access Control Rules"
description: "Simulation Access Control Rules"
sidebar_position: 70
---

# Simulation Access Control Rules

This scaffolding generates the rights to configure and launch simulations.

It also gives access to a shortcut on the dashboard allowing to enter the simulation screen. Through
this screen, simulations can be launched and results can be visualized.

The scaffolding generates the following scaffoldings:

- [Policy Simulation Control Rules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/simulations/policysimulationcontrolrules/index.md):
- [Role And Simulation Control Rules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/simulations/roleandsimulationcontrolrules/index.md):

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
