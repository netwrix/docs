---
title: "TargetResourceReport"
description: "TargetResourceReport"
sidebar_position: 10
---

# TargetResourceReport

Creates a ReportQuery with default Query taking all the properties of the entity.

The entity must have a displayTable to be able to use this scaffolding.

## Examples

```

**<TargetResourceReport EntityType="LDAP_Entry"/>**

```

## Properties

| Property            | Details                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------ |
| EntityType required | **Type** String **Description** Identifier of the entity type involved in the scaffolding. |

## Generated XML

Our example generates the following configuration:

```

<ReportQuery Identifier="Resources_LDAP_Entry" DisplayName_L1="Resource List - LDAP - Entry" Query="join ResourceAssignedResourceTypes art join art.Role rt join art.Owner o select LDAP_Entry:dn,LDAP_Entry:rdn,LDAP_Entry:displayName,LDAP_Entry:objectClass, o.InternalDisplayName, rt.DisplayName, art.WorkflowState, art.ProvisioningState, art.StartDate, art.EndDate, art.IsDenied" ReturnedEntityType="LDAP_Entry" />

```
