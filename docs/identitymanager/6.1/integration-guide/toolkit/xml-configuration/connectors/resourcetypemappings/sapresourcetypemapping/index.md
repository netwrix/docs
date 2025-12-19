---
title: "SapResourceTypeMapping"
description: "SapResourceTypeMapping"
sidebar_position: 60
---

# SapResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<SapResourceTypeMapping Identifier="SAP_User_NominativeUser" Connection="SAPConnection" PasswordResetSetting="ToSelf" DefaultObjectClass="sapuser">  <Property Property="sapid" IsDNProperty="true" />  <Property Property="roles" DataSourceBacklinkColumnName="member" /></SapResourceTypeMapping>

```

## Properties

| Property                      | Details                                                                                                                                                                                                        |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required           | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                    |
| DefaultObjectClass optional   | **Type** String **Description** Default object class used by the provisioner, for example `person`, `organizationalPerson`, `user`, etc. **Note:** multiple default object classes are separated with `<br/>`. |
| PasswordResetSetting optional | **Type** String **Description** Identifier of the corresponding password reset setting.                                                                                                                        |
