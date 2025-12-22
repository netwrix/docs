---
title: "Bulk Perform Manual Provisioning Access Control Rules"
description: "Bulk Perform Manual Provisioning Access Control Rules"
sidebar_position: 20
---

# Bulk Perform Manual Provisioning Access Control Rules

The following example assigns permissions to the `Administrator` profile, allowing the simultaneous
review of multiple manual provisioning items for the `Directory_User` entity type.

```

**<BulkPerformManualProvisioningAccessControlRules Profile="Administrator" EntityType="Directory_User"/>**

```

The scaffolding generates the following scaffoldings:

- [Perform Manual Provisioning Access Control Rules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/performmanualprovisioningaccesscontrolrules/index.md):
  Generates the permissions to access the manual provisioning pages for a given entity type and
  profile.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="BulkPerformManualProvisioning_AssignedResourceType_Administrator_Directory_User" DisplayName_L1="Mass review manual provisioning items for Directory_User" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/BulkPerformManualProvisioning/Directory_User" /></AccessControlRule><PerformManualProvisioningAccessControlRules EntityType="Directory_User" Profile="Administrator"/>

```
