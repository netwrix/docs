---
title: "IndirectResourceRule"
description: ""
sidebar_position: 7
---

An indirect resource rule is a link between a resource and its indirect groups, equivalent in another system and the indirect groups of the equivalent in the other system.


## Examples
For example:
```xml
<IndirectResourceRule
	ResourceType="MicrosoftEntraID_DirectoryObject_NominativeUser"
	Property="memberOf"
	Correspondence="SharePointObject"
	CorrespondenceMembershipProperty="Group"
	Entitlement="Entitlement"
	/>
```


## Properties

|Property|Details|
|---|---|
| Correspondence optional | **Type:** Int64 **Description:** Property used to link the resource with an associated resource in another system, like Microsoft Entra ID (formerly Azure Active Directory) or SharePoint groups. |
| CorrespondenceMembershipProperty optional | **Type:** Int64 **Description:** Same as Property but for the associated resource found in the external system. |
| Entitlement optional | **Type:** Int64 **Description:** Property used if the assignment isn't given by the property in the external system. In the example, the assignment being sought isn't whether a user is in a group. Instead, it is the entitlements given by the groups of which the user is a member. |
| Property required | **Type:** Int64 **Description:** Resource property for membership. Example: if the entity is a group, the groups it belongs to. |
| ResourceType required | **Type:** Int64 **Description:** Represents the Id of the ResourceType you want to use the rule on. |
