---
title: "IndirectResourceRule"
description: "IndirectResourceRule"
sidebar_position: 70
---

# IndirectResourceRule

An indirect resource rule is a link between a resource and its indirect groups, equivalent in
another system and the indirect groups of the equivalent in the other system.

## Examples

For example:

                    ```

<IndirectResourceRule
	ResourceType="MicrosoftEntraID_DirectoryObject_NominativeUser"
	Property="memberOf"
	Correspondence="SharePointObject"
	CorrespondenceMembershipProperty="Group"
	Entitlement="Entitlement"
	/>

```


## Properties

| Property | Details |
| --- | --- |
| Correspondence   optional | __Type__    Int64   __Description__   Property used to link the resource with an associated resource in another system, like Microsoft Entra ID (formerly Microsoft Azure AD) or SharePoint groups. |
| CorrespondenceMembershipProperty   optional | __Type__    Int64   __Description__   Same as Property but for the associated resource found in the external system. |
| Entitlement   optional | __Type__    Int64   __Description__   Property used if the assignment is not given by the property in the external system. In the example, the assignment that we are looking for is not whether a user is in a group. Instead, it is the entitlement(s) given by the groups of which the user is a member. |
| Property   required | __Type__    Int64   __Description__   Resource property for membership. Example: if our entity is a group, the group(s) it belongs to. |
| ResourceType   required | __Type__    Int64   __Description__   Represents the Id of the ResourceType you want to use the rule on. |
```
