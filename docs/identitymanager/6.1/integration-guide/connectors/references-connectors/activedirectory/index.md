---
title: "Active Directory"
description: "Active Directory"
sidebar_position: 10
---

# Active Directory

This connector exports and fulfills users and groups from/to an
[Active Directory](https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/active-directory-domain-services)
instance.

This page is about
[Directory/Active Directory](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/active-directory/index.md).

![Package: Directory/Active Directory](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/activedirectory/packages_ad_v603.webp)

## Overview

Active Directory is a directory service developed by Microsoft for Windows domain networks. The
Active Directory connector exports Active Directory (AD) entries to Usercube's resource repository.
This connector also enables automated provisioning from the resource repository to the AD.

## Prerequisites

Implementing this connector requires:

- reading first the
  [appsettings documentation](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md);
- opening the LDAP feed from Usercube's server to the Active Directory, with the ports 389 for LDAP
  and 636 for LDAPS;
- a service account with reading and writing permissions on the target Active Directory instance. It
  means that the Replicating Directory Changes rights are required for the service account, but also
  for the Active Directory root and the AD children. See the instructions below;
- enabling rights inheritance in the **Advanced Security Settings**.

### Enable Active Directory Permissions

To enable permissions, the Active Directory administrator must open the **Advanced Security
Settings** dialog box for the domain root and select the **Replicating Directory Changes** check box
from the list.

![Enable Permissions - Step 1](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/activedirectory/references_connectors_activedirectory_01.webp)

![Enable Permissions - Step 2](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/activedirectory/references_connectors_activedirectory_02.webp)

![Enable Permissions - Step 3](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/activedirectory/references_connectors_activedirectory_03.webp)

Also, in order to change groups' membership, in the `Applies` field, select
`Descendent Group object` and select the **Read Members** and **Write Members** check boxes from the
list.

![Read/Write Members](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/activedirectory/references_connectors_activedirectory_04.webp)

If you want the Reset Password capabilities, in the `Applies` field, select `Descendent User object`
and select the **Read lockoutTime** and **Write lockoutTime** check boxes from the list.

![Read/Write Lockout Times](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/activedirectory/references_connectors_activedirectory_05.webp)

Administrator rights must not be granted to the service account. Doing otherwise would create a
security breach. Administrator rights must only be granted to the target perimeter.

## Export

For a configured set of Active Directory entries, this connector exports all attributes from the
connector's configuration to CSV files.

The export is executed by a job from the UI, or via `Usercube-Export-ActiveDirectory.exe` in the
command prompt.

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

> The following example configures a connection to the Active Directory Domain Controller
> `contoso.server.com` using Basic Authentication with **BaseDN**, **Login**, **Password** with
> `EnableSSL` for all entries ( `"Filter": "(objectclass=*)"`):
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     "ADExport": {
>       "Filter": "(objectclass=*)",
>       "Servers": [>         {
>           "Server": "contoso.server.com",
>           "BaseDN": "DC=contoso,DC=com"
>         }
>],
>       "AuthType": "Basic",
>       "AsAdLds": false,
>       "EnableSSL": true,
>       "Login": "Contoso",
>       "NoSigning": false,
>       "Password": "ContOso$123456789",
>       "RetryDelay": 10
>     }
>   }
> }
> ```

#### Setting attributes

| Name                              | Details                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Servers required                  | **Type** Server List **Description** List of pairs that define the target servers, made of: - **Server**: domain controller URL. - **BaseDN**: base Distinguished Name used to connect to the related server.                                                                                                                                                 |
| AsAdLds optional                  | **Type** Boolean **Description** `True` to state the managed system as an AD LDS. **Info:** used for extracting the schema through the connection screen.                                                                                                                                                                                                     |
|                                   |                                                                                                                                                                                                                                                                                                                                                               |
| ---                               | ---                                                                                                                                                                                                                                                                                                                                                           |
| EnableSSL optional                | **Type** Boolean **Description** `True` to enable SSL protocol for authentication requests. **Note:** recommended when using `AuthType` set to `Basic` because basic authentication packets are not encrypted by default. **Info:** SSL is not available on Linux.                                                                                            |
| NoSigning optional                | **Type** Boolean **Description** `True` to disable Kerberos encryption.                                                                                                                                                                                                                                                                                       |
|                                   |                                                                                                                                                                                                                                                                                                                                                               |
| ---                               | ---                                                                                                                                                                                                                                                                                                                                                           |
| AuthType default value: Negotiate | **Type** String **Description** Authentication method used by Usercube to authenticate to the server. Access is granted to the target domain controller: `Anonymous` - without any login/password; `Basic` - via the `BaseDN`, `Login` and `Password` attributes; `Negotiate` - via GSS-API negotiations with the Kerberos mechanism used for authentication. |
| Login optional                    | **Type** String **Description** Login used by Usercube for basic authentication. **Note:** required when `AuthType` is set to `Basic`.                                                                                                                                                                                                                        |
| Password optional                 | **Type** String **Description** Password used by Usercube for basic authentication. **Note:** required when `AuthType` is set to `Basic`.                                                                                                                                                                                                                     |
|                                   |                                                                                                                                                                                                                                                                                                                                                               |
| ---                               | ---                                                                                                                                                                                                                                                                                                                                                           |
| Filter required                   | **Type** String **Description** Value that filters out the corresponding entries from the AD instance which will not be exported. Only non-filtered entries are exported. The filter value complies with Microsoft's [search filter syntax](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax).                                        |
| RetryDelay optional               | **Type** Int32 **Description** Time (in milliseconds) after which Usercube retries a timeout request.                                                                                                                                                                                                                                                         |
| RequestTimeout optional           | **Type** Int32 **Description** Time (in seconds) after which a request faces a timeout.                                                                                                                                                                                                                                                                       |
| ConnectionTimeout optional        | **Type** Int32 **Description** Time (in seconds) after which a connection faces a timeout.                                                                                                                                                                                                                                                                    |

### Output details

This connector is meant to generate:

- a file named `<connectionIdentifier>_entries.csv`, with one column for each property having a
  `ConnectionColumn` and each property without it but used in an entity association;

    Any property can be exported in a specific format when specified.
    [See more details](/docs/identitymanager/6.1/integration-guide/connectors/entitypropertymapping-format/index.md).

- an additional file for each related table other than entries;
- a cookie file named `<connectionIdentifier>_cookie.bin`, containing the time of the last export in
  order to perform incremental exports.

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

> For example, with the following configuration example:
>
> ```
>
> <EntityType Identifier="AD_Entry" DisplayName_L1="AD - Entry" >  <Property Identifier="dn" DisplayName_L1="dn" IsKey="true" TargetColumnIndex="0" Type="String" />  <Property Identifier="objectCategory" DisplayName_L1="objectCategory" TargetColumnIndex="4" Type="String" />  <Property Identifier="objectGuid" DisplayName_L1="objectGuid" TargetColumnIndex="3" Type="String" IsKey="true" />  <Property Identifier="objectSid" DisplayName_L1="objectSid" TargetColumnIndex="9" Type="String" />  <Property Identifier="pwdLastSet" DisplayName_L1="pwdLastSet" TargetColumnIndex="13" Type="String" />  <Property Identifier="thumbnailPhoto" DisplayName_L1="thumbnailPhoto" Type="Binary" />  <Property Identifier="ParentDn" DisplayName_L1="ParentDN" Type="ForeignKey" TargetColumnIndex="128" />  <Property Identifier="children" DisplayName_L1="children" Type="ForeignKey" />  <Property Identifier="Member" DisplayName_L1="Member" Type="ForeignKey" />  <Property Identifier="memberOf" DisplayName_L1="memberOf" Type="ForeignKey"/></EntityType><EntityTypeMapping Identifier="AD_Entry" Connector="AD" ConnectionTable="ADExport_entries">  <Property Identifier="dn" ConnectionColumn="dn" IsUniqueKey="true" />  <Property Identifier="objectCategory" ConnectionColumn="objectCategory" Format="rdn" />  <Property Identifier="objectGuid" ConnectionColumn="objectGuid" IsPrimaryKey="true" Format="guid" />  <Property Identifier="objectSid" ConnectionColumn="objectSid" IsUniqueKey="true" Format="sid"/>  <Property Identifier="pwdLastSet" ConnectionColumn="pwdLastSet" Format="1601date" />  <Property Identifier="thumbnailPhoto" ConnectionColumn="thumbnailPhoto" Format="binary" /></EntityTypeMapping><EntityAssociation Identifier="AD_Entry_parentdn" DisplayName_L1="Parent DN" IsProperty1Collection="true" Property2="AD_Entry:ParentDn" Property1="AD_Entry:children" /><EntityAssociation Identifier="AD_Entry_member" DisplayName_L1="Member" IsProperty1Collection="true" IsProperty2Collection="true" Property1="AD_Entry:Member" Property2="AD_Entry:memberOf" /><EntityAssociationMapping Identifier="AD_Entry_parentdn" Column2="dn" Column1="parentdn" ConnectionTable="ADExport_entries" EntityPropertyMapping1="AD_Entry:dn" EntityPropertyMapping2="AD_Entry:dn" Connector="AD" /><EntityAssociationMapping Identifier="AD_Entry_member" Column1="dn" Column2="member" ConnectionTable="ADExport_members" EntityPropertyMapping1="AD_Entry:dn" EntityPropertyMapping2="AD_Entry:dn" Connector="AD" />
>
> ```
>
> We would have `C:/identitymanagerContoso/Temp/ExportOutput/ADExport_entries.csv` with a column for each
> [scalar property](/docs/identitymanager/6.1/integration-guide/entity-model/index.md):
>
> ```
> ADExport_entries.csv
> command,dn,objectCategory,objectGuid,objectSid,pwdLastSet,thumbnailPhoto,parentdn
> ...
> ```
>
> Also, `ADExport_member` as `ConnectionTable` in a mapping will trigger the generation of the file
> `C:/identitymanagerContoso/Temp/ExportOutput/ADExport_member.csv` with `member` as link attribute:
>
> ```
> ADExport_member.csv
> command,dn,member
> ...
> ```
>
> And `C:/identitymanagerContoso/Work/ExportCookies/ADExport_cookie.bin`.

### Synchronize multiple forests

This connector can export resources from multiple forests trusted by the same AD domain.

It requires specifying the **Server** and **BaseDN** pairs in **Servers** for all the forests used
as source for the export.

Each **BaseDN** will generate a cookie file, but the entries from all **BaseDN** properties will be
written to the same CSV file.

> The following example exports data from two sources: both on the same **Server**
> (`contoso.server.com`), but on two different **BaseDN**s (`DC=contoso,DC=com` and
> `DC=defense,DC=contoso,DC=com`).
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     "ADExport": {
>       "Servers": [>         {
>           "Server": "contoso.server.com",
>           "BaseDN": "DC=contoso,DC=com"
>         },
>         {
>           "Server": "contoso.server.com",
>           "BaseDN": "DC=defense,DC=contoso,DC=com"
>         }
>],
>       "AuthType": "Basic",
>       "Login": "Contoso",
>       "Password": "ContOso$123456789",
>       "Filter": "(objectclass=*)",
>       "EnableSSL": "true"
>     }
>   }
> }
> ```
>
> The export creates two cookie files: `ADExport_cookie_0.bin` for the first **BaseDN**, and
> `ADExport_cookie_1.bin` for the second **BaseDN**, but the entries of both **BaseDN** properties
> will be written in `ADExport_entries.csv`.

## Fulfill

This connector writes to the Active Directory, to create, update and delete entries, initiated
manually through the UI or automatically by
[enforcing the policy](/docs/identitymanager/6.1/integration-guide/role-assignment/evaluate-policy/index.md).

### Configuration

Same as for export, fulfill is configured through connections.

> The following example connects to an AD LDS system located at `contoso.server.com`.
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "ADFulfillment": {
>       "Servers": [>         {
>           "Server": "contoso.server.com",
>           "BaseDN": "DC=contoso,DC=com"
>         }
>],
>       "AuthType": "Basic",
>       "AsAdLds": "true",
>       "EnableSSL": true,
>       "Login": "Contoso",
>       "NoSigning": false,
>       "Password": "ContOso$123456789",
>     }
>   }
> }
> ```

#### Setting attributes

| Name                              | Details                                                                                                                                                                                                                                                                                                                                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Servers required                  | **Type** Server List **Description** List of pairs that define the target servers, made of: - **Server**: domain controller URL. - **BaseDN**: base Distinguished Name used to connect to the related server.                                                                                                                                                 |
| AsAdLds optional                  | **Type** Boolean **Description** `True` to state the managed system as an AD LDS. **Info:** used for extracting the schema through the connection screen.                                                                                                                                                                                                     |
|                                   |                                                                                                                                                                                                                                                                                                                                                               |
| ---                               | ---                                                                                                                                                                                                                                                                                                                                                           |
| EnableSSL optional                | **Type** Boolean **Description** `True` to enable SSL protocol for authentication requests. **Note:** recommended when using `AuthType` set to `Basic` because basic authentication packets are not encrypted by default. **Info:** SSL is not available on Linux.                                                                                            |
| NoSigning optional                | **Type** Boolean **Description** `True` to disable Kerberos encryption.                                                                                                                                                                                                                                                                                       |
|                                   |                                                                                                                                                                                                                                                                                                                                                               |
| ---                               | ---                                                                                                                                                                                                                                                                                                                                                           |
| AuthType default value: Negotiate | **Type** String **Description** Authentication method used by Usercube to authenticate to the server. Access is granted to the target domain controller: `Anonymous` - without any login/password; `Basic` - via the `BaseDN`, `Login` and `Password` attributes; `Negotiate` - via GSS-API negotiations with the Kerberos mechanism used for authentication. |
| Login optional                    | **Type** String **Description** Login used by Usercube for basic authentication. **Note:** required when `AuthType` is set to `Basic`.                                                                                                                                                                                                                        |
| Password optional                 | **Type** String **Description** Password used by Usercube for basic authentication. **Note:** required when `AuthType` is set to `Basic`.                                                                                                                                                                                                                     |

### Output details

This connector can create a new resource, and update and delete an existing resource via the UI.

A new resource is created with the state `disabled`, corresponding to the **useraccountcontrol**
value `514`. When it is approved, its `disabled` state is removed and the **useraccountcontrol**
value becomes `512`.

### Provision multiple forests

Same as for export, this connector can fulfill resources to multiple forests trusted by the same AD
domain, by specifying the **Server** and **BaseDN** pairs in **Servers** for all forests.

> The following example fulfills data to two targets: both on the same **Server**
> (`contoso.server.com`), but on two different **BaseDN**s (`DC=contoso,DC=com` and
> `DC=defense,DC=contoso,DC=com`).
>
> ```
> appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "ADFulfillment": {
>       "Servers": [>         {
>           "Server": "contoso.server.com",
>           "BaseDN": "DC=contoso,DC=com"
>         },
>         {
>           "Server": "contoso.server.com",
>           "BaseDN": "DC=defense,DC=contoso,DC=com"
>         }
>],
>       "AuthType": "Basic",
>       "Login": "Contoso",
>       "Password": "ContOso$123456789",
>       "AsAdLds": "true"
>     }
>   }
> }
> ```

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

### Password reset

[See how to configure password reset settings](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md),
  configured in the `appsettings.encrypted.agent.json` file;
- an
  [Azure Key Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md)
  safe;

- a
  [CyberArk Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)
  able to store Active Directory's `Login`, `Password` and `Server`.
