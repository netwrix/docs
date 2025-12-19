---
title: "LdapResourceTypeMapping"
description: "LdapResourceTypeMapping"
sidebar_position: 30
---

# LdapResourceTypeMapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

```

<LdapResourceTypeMapping Identifier="AD_Entry_NominativeUser" Connection="ADExportFulfillment" PasswordResetSetting="ToManager" DefaultObjectClass="user" RDNAttributeIdentifier="CN" UsePermissiveModify="true" UseTreeDelete="false">  <Property Property="dn" IsDNProperty="true" />  <Property Property="parentdn" IsParentProperty="true" />  <Property Property="cn" IsRDNProperty="true" />  <Property Property="userAccountControl" IsUserAccountControlProperty="true" />  <Property Property="memberOf" DataSourceBacklinkColumnName="member" />  <Property Property="Categories" MultiValueSeparator=";" /></LdapResourceTypeMapping>

```

### Multiple default object classes

The following example configures a whole set of settings for the `LDAP_Entry_NominativeUser`
resource type, including several default object classes.

```

<ResourceTypeMapping Identifier="LDAP_Entry_NominativeUser" DefaultObjectClass="inetOrgPerson
organizationalPerson" ... />

```

## Properties

| Property                                 | Details                                                                                                                                                                                                        |
| ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                      | **Type** String **Description** Identifier of the corresponding connection.                                                                                                                                    |
| DefaultObjectClass required              | **Type** String **Description** Default object class used by the provisioner, for example `person`, `organizationalPerson`, `user`, etc. **Note:** multiple default object classes are separated with `<br/>`. |
| RDNAttributeIdentifier required          | **Type** String **Description** Identifier of the RDN attribute used by the provisioner.                                                                                                                       |
| PasswordResetSetting optional            | **Type** String **Description** Identifier of the corresponding password reset setting.                                                                                                                        |
| UsePermissiveModify default value: false | **Type** Boolean **Description** `true` to use [LDAP's permissive modify control](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ldap/ldap-server-permissive-modify-oid).                 |
| UseTreeDelete default value: false       | **Type** Boolean **Description** `true` to use the control option that enables deleting all the sub-trees within a directory via a single deletion request.                                                    |
