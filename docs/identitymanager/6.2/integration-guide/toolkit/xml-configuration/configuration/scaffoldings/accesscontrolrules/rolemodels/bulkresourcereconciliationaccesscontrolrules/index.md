---
title: "Bulk Resource Reconciliation Access Control Rules"
description: "Bulk Resource Reconciliation Access Control Rules"
sidebar_position: 30
---

# Bulk Resource Reconciliation Access Control Rules

The following example assigns to the Administrator profile the rights to reconcile simultaneously
several resources from the Directory_User entity type.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<BulkResourceReconciliationAccessControlRules Profile="Administrator" EntityType="Directory_User"/>
```

The scaffolding generates the following scaffoldings:

- ReconciliateResourcesAccessControlRules: Generates the permissions to access the resource
  reconciliation pages for a given entity type and profile. See the
  [Reconciliate Resources Access Control Rules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/reconciliateresourcesaccesscontrolrules/index.md)
  topic for additional information.

## Properties

| Property            | Type   | Description                                                |
| ------------------- | ------ | ---------------------------------------------------------- |
| EntityType required | String | Identifier of the entity type involved in the scaffolding. |
| Profile required    | String | Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<AccessControlRule Identifier="BulkResourceReconciliationAccessControlRules_AssignedResourceType_Administrator_Directory_User" DisplayName_L1="Bulk reconciliate resources AssignedResourceBinary User" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/MassReconciliateResources/Directory_User" /></AccessControlRule><ReconciliateResourcesAccessControlRules EntityType="Directory_User" Profile="Administrator"/>
```
