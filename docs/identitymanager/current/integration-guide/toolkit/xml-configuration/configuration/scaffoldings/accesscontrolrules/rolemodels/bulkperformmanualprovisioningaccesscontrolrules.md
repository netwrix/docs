---
title: "BulkPerformManualProvisioningAccessControlRules"
description: "Generates the permissions to perform bulk validations on the **Perform Manual Provisioning** page."
sidebar_position: 3
---


The following example assigns permissions to the `Administrator` profile, allowing the simultaneous review of multiple manual provisioning items for the `Directory_User` entity type.

```xml
  <BulkPerformManualProvisioningAccessControlRules Profile="Administrator" EntityType="Directory_User"/>
```


The scaffolding generates the following scaffoldings:

- [Perform Manual Provisioning Access Control Rules](../../accesscontrolrules/rolemodels/performmanualprovisioningaccesscontrolrules)

Generates the permissions to access the manual provisioning pages for a given entity type and profile.

## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml

<AccessControlRule Identifier="BulkPerformManualProvisioning_AssignedResourceType_Administrator_Directory_User" DisplayName_L1="Mass review manual provisioning items for Directory_User" EntityType="AssignedResourceType" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/BulkPerformManualProvisioning/Directory_User" />
</AccessControlRule>
<PerformManualProvisioningAccessControlRules EntityType="Directory_User" Profile="Administrator"/>

```