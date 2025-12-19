---
title: "OpenLDAP"
description: "OpenLDAP"
sidebar_position: 180
---

# OpenLDAP

This connector exports and fulfills entries from/to an [OpenLDAP](https://www.openldap.org/)
directory.

This page is about
[Directory/Open LDAP](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/open-ldap/index.md).

![Package: Directory/Open LDAP](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/openldap/packages_ldapopen_v603.webp)

## Overview

OpenLDAP is an open source implementation of the Lightweight Directory Access Protocol (LDAP).

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings documentation](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md);
- a service account with reading and writing permissions on the target OpenLDAP server;
- enabling SyncProv Overlay for the OpenLDAP server.

    To perform a complete export without the SyncProv Overlay enabled, use rather the
    [LDAP connector](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/ldap/index.md).

## Export

This connector exports to CSV files the content of an OpenLDAP Directory.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connection/index.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "<ConnectionIdentifier>": {
      ...
    }
  }
}
```

The identifier of the connection and thus the name of the subsection must:

- be unique.
- not begin with a digit.
- not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> For example:
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections":{
>     ...
>     "OpenLDAPExport": {
>         "Server": "contoso.server.com",
>         "DistinguishedName": "DC=contoso,DC=com",
>         "Login": "Contoso",
>         "Password": "ContOso$123456789",
>         "Filter": "(|(objectclass=person)(objectclass=ou))",
>         "Scope": "SubTree",
>         "SSL": "true"
>     }
>     ...
>   }
> }
> ```

#### Setting attributes

| Name                                   | Details                                                                                                                                                                                                                                                                                |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Server required                        | **Type** String **Description** IP address and port of the OpenLDAP server.                                                                                                                                                                                                            |
| DistinguishedName required             | **Type** String **Description** Distinguished Name of the domain controller.                                                                                                                                                                                                           |
| Login required                         | **Type** String **Description** OpenLDAP server's login.                                                                                                                                                                                                                               |
| Password required                      | **Type** String **Description** OpenLDAP server's password.                                                                                                                                                                                                                            |
| SSL optional                           | **Type** Boolean **Description** `True` to enable SSL (Secure Socket Layer) protocol for authentication requests.                                                                                                                                                                      |
|                                        |                                                                                                                                                                                                                                                                                        |
| ---                                    | ---                                                                                                                                                                                                                                                                                    |
| TimeFormat default value: 60           | **Type** Int32 **Description** Timeout (in seconds) for the export's requests to the targeted server.                                                                                                                                                                                  |
| WaitingTimeInSeconds default value: 30 | **Type** Int32 **Description** Time period (in seconds) during which pulling for changes is not allowed during the persistent phase.                                                                                                                                                   |
|                                        |                                                                                                                                                                                                                                                                                        |
| ---                                    | ---                                                                                                                                                                                                                                                                                    |
| Filter required                        | **Type** String **Description** Entries to be excluded from export among all entries from the LDAP instance. Only non-filtered entries are exported. The filter must use [Microsoft's search filter syntax](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax). |
| Scope optional                         | **Type** String **Description** Search scope to be applied to the request. The result will be limited to: `Base` - the base of the object; `OneLevel` - the immediate children of the object; `Subtree` - the entire subtree from the base object down.                                |

### Output details

This connector is meant to generate to the
[`ExportOutput`](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
folder:

- a CSV file, named `<connectionIdentifier>_entry.csv`, with one column for each property having a
  `ConnectionColumn` and each property without it but used in an entity association;

    Any property can be exported in a specific format when specified.
    [See more details](/docs/identitymanager/6.1/integration-guide/connectors/entitypropertymapping-format/index.md).

- a CSV file for each `ConnectionTable` in a related `EntityTypeMapping` or
  `EntityAssociationMapping`, and which is not an `entry`, named
  `<connectionIdentifier>_<ConnectionTableName>.csv`;

    > For example, `OpenLDAPExport_member` as `ConnectionTable` in a mapping will generate the file
    > `OpenLDAPExport_member.csv` with `member` as link attribute.

- `<connectionIdentifier>_cookie.bin` which stores the time of the last successful export, thus
  allowing incremental processes.

    Most exports can be run in complete mode, where the CSV files will contain all entries, or in
    incremental mode, where CSV files will contain only the entries which have been modified since
    the last synchronization.

    A task can use the `IgnoreCookieFile` boolean property, and a command line (with an executable)
    can use the option `--ignore-cookies`.

The CSV files are stored in the
[ExportOutput](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
folder, and the cookie file in the
[ExportCookies](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
folder.

> For example, with the following configuration:
>
> ```
>
> <EntityType Identifier="OpenLDAP_Entry" DisplayName_L1="OpenLDAP - Entry">  <Property Identifier="cn" DisplayName_L1="cn" TargetColumnIndex="10" Type="String" />  <Property Identifier="dn" DisplayName_L1="dn" IsKey="true" TargetColumnIndex="0" Type="String" />  <Property Identifier="entryUuid" DisplayName_L1="objectGuid" TargetColumnIndex="3" Type="String" IsKey="true" />  <Property Identifier="objectClass" DisplayName_L1="objectClass" TargetColumnIndex="4" Type="String" />  <Property Identifier="parentdn" DisplayName_L1="parentdn" Type="ForeignKey" TargetColumnIndex="128" />  <Property Identifier="children" DisplayName_L1="children" Type="ForeignKey" />  <Property Identifier="member" DisplayName_L1="member" Type="ForeignKey" />  <Property Identifier="memberOf" DisplayName_L1="memberOf" Type="ForeignKey" /></EntityType><EntityTypeMapping Identifier="OpenLDAP_Entry" Connector="OpenLDAP" ConnectionTable="OpenLDAPExport_entry">  <Property Identifier="entryUuid" ConnectionColumn="entryUuid" IsPrimaryKey="true" />  <Property Identifier="cn" ConnectionColumn="cn" />  <Property Identifier="dn" ConnectionColumn="dn" IsUniqueKey="true" />  <Property Identifier="objectClass" ConnectionColumn="objectClass" Format="multivaluedtext" /></EntityTypeMapping><EntityAssociation Identifier="OpenLDAP_Entry_parentdn" DisplayName_L1="parentdn" IsProperty1Collection="true" Property2="OpenLDAP_Entry:parentdn" Property1="OpenLDAP_Entry:children" /><EntityAssociation Identifier="OpenLDAP_Entry_member" DisplayName_L1="member" IsProperty1Collection="true" IsProperty2Collection="true" Property1="OpenLDAP_Entry:member" Property2="OpenLDAP_Entry:memberOf" /><EntityAssociationMapping Identifier="OpenLDAP_Entry_parentdn" Column2="dn" Column1="parentdn" ConnectionTable="OpenLDAPExport_entry.csv" EntityPropertyMapping1="OpenLDAP_Entry:dn" EntityPropertyMapping2="OpenLDAP_Entry:dn" Connector="OpenLDAP" /><EntityAssociationMapping Identifier="OpenLDAP_Entry_member" Column1="dn" Column2="member" ConnectionTable="OpenLDAPExport_member.csv" EntityPropertyMapping1="OpenLDAP_Entry:dn" EntityPropertyMapping2="OpenLDAP_Entry:dn" Connector="OpenLDAP" />
>
> ```
>
> We would have `C:/identitymanagerContoso/Temp/ExportOutput/OpenLDAPExport.csv` like:
>
> ```
> entry.csv
> Command,entryUUID,dn,cn,objectClass,parentdn
> Insert,value1,value2,...,valueN
> ```
>
> And we would also have `C:/identitymanagerContoso/Temp/ExportOutput/OpenLDAPExport_member.csv` like:
>
> ```
> LDAPExport_member.csv
> Command,entryUUID,member
> Insert,value1,value2,...,valueN
> ```

## Fulfill

This connector fulfills via the LDAP connector's fulfill process.

The LDAP connector fulfills the creation, deletion and update of LDAP entries, initiated through the
Usercube UI or by
[assignment policy enforcement](/docs/identitymanager/6.1/integration-guide/role-assignment/evaluate-policy/index.md).

### Configuration

Same as for export, fulfill is configured through connections.

> ```
> appsettings.agent.json
> {
>     ...
>     "Connections": {
>         ...
>         "OpenLDAPFulfillment": {
>             "Server": "contoso.server.com",
>             "DistinguishedName": "DC=contoso,DC=com",
>             "Login": "Contoso",
>             "Password": "ContOso$123456789",
>             "SSL": "true",
>             "IsLdapPasswordReset": "true"
>         }
>     }
> }
> ```

#### Setting attributes

|                              |                                                                                                                                                                                                                                                                                        |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Filter required              | **Type** String **Description** Entries to be excluded from export among all entries from the LDAP instance. Only non-filtered entries are exported. The filter must use [Microsoft's search filter syntax](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax). |
| Scope optional               | **Type** String **Description** Search scope to be applied to the request. The result will be limited to: `Base` - the base of the object; `OneLevel` - the immediate children of the object; `Subtree` - the entire subtree from the base object down.                                |
|                              |                                                                                                                                                                                                                                                                                        |
| ---                          | ---                                                                                                                                                                                                                                                                                    |
| IsLdapPasswordReset optional | **Type** Boolean **Description** `True` to state the managed system as an LDAP-compliant system supporting password reset.                                                                                                                                                             |

### Output details

This connector can create a new resource, and update and delete an existing resource via the UI.

A new resource is created with the state `disabled`, corresponding to the **useraccountcontrol**
value `514`. When it is approved, its `disabled` state is removed and the **useraccountcontrol**
value becomes `512`.

### Add attributes to the requests

Some systems using the LDAP protocol require additional attributes in the creation and/or update
requests.

If these attributes are not synchronized in Usercube, then they cannot be computed and provided by
scalar rules or navigation rules. In this case, they can be given as arguments in the provisioning
order, through the `ResourceType`'s `ArgumentsExpression`.

> The following example adds the attribute `description` with a value depending on what is modified:
>
> ```
>
> <ResourceType Identifier="LDAP_Entry_NominativeUser" DisplayName_L1="LDAP User (nominative)" Policy="Default" TargetEntityType="LDAP_Entry" Category="Accounts" SourceEntityType="Directory_User" ApprovalWorkflowType="One" HideOnSimplifiedView="true"
> ArgumentsExpression="C#:resource:
>   var arguments = new System.Collections.Generic.Dictionary<string, string>();
>
>   if (provisioningOrder.HasChanged("cn")) {
>     arguments.Add("description", "This entry's login has been modified by Usercube.");
>   }
>   else if (provisioningOrder.HasChanged("mail")) {
>     arguments.Add("description", "This entry's email has been modified by Usercube.");
>   }
>   else {
>     arguments.Add("description", "This entry has been modified by Usercube.");
>   }
>
>   return arguments;">
>
>     <ScalarRule Property="givenName" Binding="FirstName" />    <ScalarRule Property="cn" Binding="Login" />    <ScalarRule Property="sn" Binding="LastName" />    <ScalarRule Property="employeeNumber" Binding="EmployeeId" /></ResourceType>
>
> ```

## Authentication

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md)
  safe;

- a
  [CyberArk Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)
  able to store OpenLDAP's `Login`, `Password` and `Server`.
