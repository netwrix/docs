---
title: "Bulk Review Provisioning Access Control Rules"
description: "Bulk Review Provisioning Access Control Rules"
sidebar_position: 40
---

# Bulk Review Provisioning Access Control Rules

The following example assigns permissions to the `Administrator` profile, allowing the simultaneous
review of multiple errored provisioning orders for the `Directory_User` entity type.

```

**<BulkReviewProvisioningAccessControlRules Profile="Administrator" EntityType="Directory_User"/>**

```

The scaffolding generates the following scaffoldings:

- [Review Provisioning Access Control Rules](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/configuration/scaffoldings/accesscontrolrules/rolemodels/reviewprovisioningaccesscontrolrules/index.md):
  Generates the permissions to access the provisioning review pages for a given entity type and
  profile.

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |
| Profile required    | **Type** String **Description** Identifier of the profile involved in the scaffolding.     |

## Generated XML

Our example generates the following configuration:

```

<AccessControlRule Identifier="BulkReviewProvisioning_AssignedResourceType_Administrator_Directory_User" DisplayName_L1="Mass reconciliate resources AssignedResourceBinary User" EntityType="AssignedResourceType" Profile="Administrator">  <Entry CanExecute="true" Permission="/Custom/ProvisioningPolicy/BulkReviewProvisioning/Directory_User" /></AccessControlRule><ReviewProvisioningAccessControlRules EntityType="Directory_User" Profile="Administrator"/>

```
