---
title: "TargetResourceReport"
description: "Creates a ReportQuery with default Query taking all the properties of the entity."
sidebar_position: 1
---

Creates a ReportQuery with default Query taking all the properties of the entity.

:::warning
The entity must have a displayTable to be able to use this scaffolding.
:::


## Examples


```xml
  <TargetResourceReport EntityType="LDAP_Entry"/>
```


## Properties

|Property|Details|
|---|---|
| EntityType required | **Type:** String **Description:** Identifier of the entity type involved in the scaffolding. |



## Generated XML

Our example generates the following configuration:

```xml
<ReportQuery Identifier="Resources_LDAP_Entry" DisplayName_L1="Resource List - LDAP - Entry" Query="join ResourceAssignedResourceTypes art join art.Role rt join art.Owner o select LDAP_Entry:dn,LDAP_Entry:rdn,LDAP_Entry:displayName,LDAP_Entry:objectClass, o.InternalDisplayName, rt.DisplayName, art.WorkflowState, art.ProvisioningState, art.StartDate, art.EndDate, art.IsDenied" ReturnedEntityType="LDAP_Entry" />

```