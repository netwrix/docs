---
title: "BulkResourceReconciliationAccessControlRules"
description: "Generates the permissions to perform bulk validations on the **Resource Reconciliation** page."
sidebar_position: 4
---


The following example assigns to the `Administrator` profile the rights to reconcile simultaneously several resources from the `Directory_User` entity type.

```xml
  <MassReconciliateResourcesAccessControlRules Profile="Administrator" EntityType="Directory_User"/>
```


The scaffolding generates the following scaffoldings:

- [Reconciliate Resources Access Control Rules](../../accesscontrolrules/rolemodels/reconciliateresourcesaccesscontrolrules)

Generates the permissions to access the resource reconciliation pages for a given entity type and profile.

## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |
| Profile required | **Type:** String **Description:** Identifier of the profile involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml

<AccessControlRule Identifier="MassReconciliateResources_AssignedResourceType_Administrator_Directory_User" DisplayName_L1="Mass reconciliate resources AssignedResourceBinary User" EntityType="AssignedResourceType" Profile="Administrator">
  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/MassReconciliateResources/Directory_User" />
</AccessControlRule>
<ReconciliateResourcesAccessControlRules EntityType="Directory_User" Profile="Administrator"/>

```