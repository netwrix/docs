---
title: "Scim Resource Type Mapping"
description: "Scim Resource Type Mapping"
sidebar_position: 70
---

# Scim Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ScimResourceTypeMapping Identifier="CyberArk_Shadow_NominativeUser" DefaultObjectClass="Users" Connection="SCIMCyberArkExportFulfillment">    <Property Property="CyberArk_id" IsDNProperty="true" /></ScimResourceTypeMapping>
```

## Properties

| Property                    | Type   | Description                                                                                                                                                      |
| --------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required         | String | Identifier of the corresponding connection.                                                                                                                      |
| DefaultObjectClass optional | String | Default object class used by the provisioner, for example person, organizationalPerson, and user, etc. Multiple default object classes are separated with <br/>. |
