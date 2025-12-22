---
title: "Display Property Group"
description: "Display Property Group"
sidebar_position: 30
---

# Display Property Group

A display property group bundles a list of entity properties together in a fieldset in the UI.

## Examples

The following example will group a specific set of properties together, when displaying AD entries.

```

**<DisplayPropertyGroup Identifier="AD_General" DisplayName_L1="General" />**

Knowing that we have the following properties:
<DisplayEntityType Identifier="AD_Entry">    <Property Identifier="displayName" Group="AD_General" DisplayOrder="100" />    <Property Identifier="givenName" Group="AD_General" DisplayOrder="101" />    <Property Identifier="initials" Group="AD_General" DisplayOrder="102" />    <Property Identifier="sn" Group="AD_General" DisplayOrder="103" />    <Property Identifier="description" Group="AD_General" DisplayOrder="104" />    <Property Identifier="thumbnailPhoto" Group="AD_General" DisplayOrder="105" />    <Property Identifier="telephoneNumber" Group="AD_General" DisplayOrder="106" />    <Property Identifier="mobile" Group="AD_General" DisplayOrder="107" />    <Property Identifier="mail" Group="AD_General" DisplayOrder="108" />    ...
</DisplayEntityType>

```

![Display Property Group - Example](/images/identitymanager/saas/integration-guide/toolkit/xml-configuration/user-interface/displaypropertygroup/displaypropertygroup_example_v603.webp)

Any property without a value is not displayed.

## Properties

| Property                | Details                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------- |
| DisplayName_L1 optional | **Type** String **Description** Display name of the fieldset in language 1 (up to 16). |
| Identifier required     | **Type** String **Description** Unique identifier of the property group.               |
