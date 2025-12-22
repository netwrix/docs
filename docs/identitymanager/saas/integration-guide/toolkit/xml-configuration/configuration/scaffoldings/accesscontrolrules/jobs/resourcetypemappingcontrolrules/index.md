---
title: "ResourceTypeMappingControlRules"
description: "ResourceTypeMappingControlRules"
sidebar_position: 70
---

# ResourceTypeMappingControlRules

Scaffolding to create the right for a profile to start the Fulfillment to an external system (LDAP,
MicrosoftEntraID...). This right corresponds to the permission to use ResourceTypeMapping elements
(`/Connectors/FulfillLDAP`).

## Examples

```

**<ResourceTypeMappingControlRules Profile="Administrator"/>**

```

## Properties

| Property         | Details                                                                                |
| ---------------- | -------------------------------------------------------------------------------------- |
| Profile required | **Type** String **Description** Identifier of the profile involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="Administrator_ResourceTypeMapping" DisplayName_L1="Administrator_ResourceTypeMapping" DisplayName_L2="Administrator_ResourceTypeMapping" EntityType="ResourceTypeMapping" Profile="Administrator">  <Entry CanExecute="true" Permission="/Connectors/ProvisionerResourceTypeMapping/Query" /></AccessControlRule>

```
