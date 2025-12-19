---
title: "AccessCertificationOwnerFilter"
description: "AccessCertificationOwnerFilter"
sidebar_position: 30
---

# AccessCertificationOwnerFilter

When running an Access Certification Campaign, this object defines the scope of assignments of
entitlements to certify for a given Access Certification Campaign. It filters based on the
attributes of entitlements owner.

## Properties

| Property                                  | Details                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Campaign required                         | **Type** Int64 **Description** The associated campaign.                                                                                                                                                                                                                                                                                                             |
| D0 optional                               | **Type** Int64 **Description** Identifier of the dimension 0 (up to 3V in [base32hex](/docs/identitymanager/6.1/integration-guide/toolkit/parameter-names/index.md)) that filters the owners targeted by the access certification campaign.                                                                                                             |
| IndividualOwner optional                  | **Type** Int64 **Description** If set, filters on the owner.                                                                                                                                                                                                                                                                                                        |
| L0 default value: false                   | **Type** Boolean **Description** `true` to include all the hierarchy beneath the dimension 0. **Note:** this setting can be used only if the corresponding [dimension](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/metadata/dimension/index.md) was declared with `IsHierarchical` set to `true` and with a `ParentProperty`. |
| MinimalRiskScore optional                 | **Type** Int32 **Description** If set, filters only owners above given risk.                                                                                                                                                                                                                                                                                        |
| OwnerLastModificationDate optional        | **Type** DateTime **Description** Date such that the identities to be certified will be those for which the value of the `OwnerLastModificationDateBinding` property was modified since then. **Note:** must be set together with `OwnerLastModificationDateBinding`.                                                                                               |
| OwnerLastModificationDateBinding optional | **Type** Int64 **Description** Binding of the property whose owner will be part of the campaign's targets, if the property's value was modified since `OwnerLastModificationDate`. **Note:** must be set together with `OwnerLastModificationDate`. **Note:** the properties calculated by Usercube cannot be used.                                                 |
| TargetedRisk optional                     | **Type** Int64 **Description** If set, filters on the owner risk.                                                                                                                                                                                                                                                                                                   |
