---
title: "ScimResourceTypeMapping"
description: "ScimResourceTypeMapping"
sidebar_position: 70
---

# ScimResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

**<ScimResourceTypeMapping Identifier="CyberArk_Shadow_NominativeUser" DefaultObjectClass="Users" Connection="SCIMCyberArkExportFulfillment">    <Property Property="CyberArk_id" IsDNProperty="true" /></ScimResourceTypeMapping>**

```

## Properties

| Property                    | Details                                                                                                                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required         | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                    |
| DefaultObjectClass optional | **Type** String **Description** Default object class used by the provisioner, for example `person`, `organizationalPerson`, `user`, etc. **Note:** multiple default object classes are separated with `<br/>`. |
