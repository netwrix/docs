---
title: "Ldap Resource Type Mapping"
description: "Ldap Resource Type Mapping"
sidebar_position: 30
---

# Ldap Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<LdapResourceTypeMapping Identifier="AD_Entry_NominativeUser" Connection="ADExportFulfillment" PasswordResetSetting="ToManager" DefaultObjectClass="user" RDNAttributeIdentifier="CN" UsePermissiveModify="true" UseTreeDelete="false">  <Property Property="dn" IsDNProperty="true" />  <Property Property="parentdn" IsParentProperty="true" />  <Property Property="cn" IsRDNProperty="true" />  <Property Property="userAccountControl" IsUserAccountControlProperty="true" />  <Property Property="memberOf" DataSourceBacklinkColumnName="member" />  <Property Property="Categories" MultiValueSeparator=";" /></LdapResourceTypeMapping>
```

### Multiple default object classes

The following example configures a whole set of settings for the LDAP_Entry_NominativeUser resource
type, including several default object classes.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
<ResourceTypeMapping Identifier="LDAP_Entry_NominativeUser" DefaultObjectClass="inetOrgPerson
organizationalPerson" ... />
```

## Properties

| Property                                 | Type    | Description                                                                                                                                                      |
| ---------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection required                      | String  | Identifier of the corresponding connection.                                                                                                                      |
| DefaultObjectClass required              | String  | Default object class used by the provisioner, for example person, organizationalPerson, and user, etc. Multiple default object classes are separated with <br/>. |
| RDNAttributeIdentifier required          | String  | Identifier of the RDN attribute used by the provisioner.                                                                                                         |
| PasswordResetSetting optional            | String  | Identifier of the corresponding password reset setting.                                                                                                          |
| UsePermissiveModify default value: false | Boolean | True to use [LDAP's permissive modify control](https://learn.microsoft.com/en-us/previous-versions/windows/desktop/ldap/ldap-server-permissive-modify-oid).      |
| UseTreeDelete default value: false       | Boolean | True to use the control option that enables deleting all the sub-trees within a directory via a single deletion request.                                         |
