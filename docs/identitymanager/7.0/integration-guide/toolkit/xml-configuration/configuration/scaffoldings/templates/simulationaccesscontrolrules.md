---
title: "SimulationAccessControlRules"
description: "Generates the permissions to configure and launch simulations."
sidebar_position: 7
---

This scaffolding generates the rights to configure and launch simulations.

It also gives access to a dashboard shortcut for the simulation screen, where you can launch simulations and view results.

The scaffolding generates the following scaffoldings:

- [Policy Simulation Control Rules](../accesscontrolrules/simulations/policysimulationcontrolrules)

 
- [Role And Simulation Control Rules](../accesscontrolrules/simulations/roleandsimulationcontrolrules)

 


## Examples


```xml
  <SimulationAccessControlRules Profile="Administrator"/>
```


## Properties

|Property|Details|
|---|---|
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

This example generates the following configuration:

```xml
<PolicySimulationControlRules Id="7" Profile="Administrator" />
<RoleAndSimulationControlRules Id="9" Profile="Administrator" />

```