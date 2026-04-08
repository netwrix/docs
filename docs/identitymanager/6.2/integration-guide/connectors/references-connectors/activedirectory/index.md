---
title: "Active Directory"
description: "Active Directory"
sidebar_position: 10
---

# Active Directory

This connector exports and fulfills users and groups from/to an
[Active Directory](https://docs.microsoft.com/en-us/windows-server/identity/ad-ds/active-directory-domain-services)
instance.

This page is about Directory/Active Directory. See the Active Directory topic for additional
information.

![Package: Directory/Active Directory](/images/identitymanager/integration-guide/connectors/references-connectors/activedirectory/packages_ad_v603.webp)

## Overview

Active Directory is a directory service developed by Microsoft for Windows domain networks. The
Active Directory connector exports Active Directory (AD) entries to Identity Manager's resource
repository. This connector also enables automated provisioning from the resource repository to the
AD.

## Prerequisites

Implementing this connector requires:

- Reading first the appsettings documentation; See the
  [appsettings.agent](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
  topic for additional information.
- Opening the LDAP feed from Identity Manager's server to the Active Directory, with the ports 389
  for LDAP and 636 for LDAPS.
- A service account with reading and writing permissions on the target Active Directory instance. It
  means that the Replicating Directory Changes rights are required for the service account, but also
  for the Active Directory root and the AD children. See the instructions below for additional
  information.
- An SSL connection which is mandatory for the AD connector to initialize and change a password.
- Enabling rights inheritance in the **Advanced Security Settings**.

### Enable Active Directory Permissions

To enable permissions, the Active Directory administrator must do the following:

**Step 1 –** Check the **View** details in the Active Directory and Computers.

![Enable Permissions - Step 1](/images/identitymanager/integration-guide/connectors/references-connectors/activedirectory/references_connectors_activedirectory_01.webp)

**Step 2 –** Open the **Advanced Security Settings** dialog box for the domain root.

![Enable Permissions - Step 2](/images/identitymanager/integration-guide/connectors/references-connectors/activedirectory/references_connectors_activedirectory_02.webp)

**Step 3 –** Select the **Replicating Directory Changes** check box from the list.

![Enable Permissions - Step 3](/images/identitymanager/integration-guide/connectors/references-connectors/activedirectory/references_connectors_activedirectory_03.webp)

**Step 4 –** To change groups' membership, in the Applies field, select Descendent Group object and
select the **Read Members** and **Write Members** check boxes from the list.

![Read/Write Members](/images/identitymanager/integration-guide/connectors/references-connectors/activedirectory/references_connectors_activedirectory_04.webp)

**Step 5 –** To Reset Password capabilities, in the Applies field, select Descendent User object and
select the **Read lockoutTime** and **Write lockoutTime** check boxes from the list.

![Read/Write Lockout Times](/images/identitymanager/integration-guide/connectors/references-connectors/activedirectory/references_connectors_activedirectory_05.webp)

Administrator rights must not be granted to the service account. Doing otherwise would create a
security breach. Administrator rights must only be granted to the target perimeter.

## Export

For a configured set of Active Directory entries, this connector exports all attributes from the
connector's configuration to CSV files.

The export is executed by a job from the UI, or via Identity Manager-Export-ActiveDirectory.exe in
the command prompt.

### Configuration

This process is configured through a connection in the UI and/or the XML configuration, and in the
appsettings.agent.json > Connections section:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

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

- Be unique.
- Not begin with a digit.
- Not contain `<`, `>`, `:`, `"`, `/`, `\`, `|`, `?`, `*` and `_`.

> The following example configures a connection to the Active Directory Domain Controller
> contoso.server.com using Basic Authentication with **BaseDN**, **Login**, **Password** with
> EnableSSL for all entries ( "Filter": "(objectclass=\*)"):
>
> Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
> script in the command line.
>
> ```
> appsettings.agent.json
>                     {
>                     ...
>                     "Connections": {
>                     "ADExport": {
>                     "Filter": "(objectclass=*)",
>                     "Servers": [>                     {
>                     "Server": "contoso.server.com",
>                     "BaseDN": "DC=contoso,DC=com"
>                     }
>],
>                     "AuthType": "Basic",
>                     "AsAdLds": false,
>                     "EnableSSL": true,
>                     "Login": "Contoso",
>                     "NoSigning": false,
>                     "Password": "ContOso$123456789",
>                     "RetryDelay": 10
>                     }
>                     }
>                 }
> ```

#### Setting attributes

| Name                              | Type        | Description                                                                                                                                                                                                                                                                                                               |
| --------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Servers required                  | Server List | List of pairs that define the target servers, made of: - Server: domain controller URL. - BaseDN: base Distinguished Name used to connect to the related server.                                                                                                                                                          |
| AsAdLds optional                  | Boolean     | True to state the managed system as an AD LDS. It is used for extracting the schema through the connection screen.                                                                                                                                                                                                        |
| EnableSSL optional                | Boolean     | True to enable SSL protocol for authentication requests. recommended when using AuthType set to Basic because basic authentication packets are not encrypted by default. SSL is not available on Linux.                                                                                                                   |
| NoSigning optional                | Boolean     | True to disable Kerberos encryption.                                                                                                                                                                                                                                                                                      |
| AuthType default value: Negotiate | String      | Authentication method used by Identity Manager to authenticate to the server. Access is granted to the target domain controller: Anonymous - without any login/password; Basic - via the BaseDN, Login and Password attributes; Negotiate - via GSS-API negotiations with the Kerberos mechanism used for authentication. |
| Login optional                    | String      | Login used by Identity Manager for basic authentication. It is required when AuthType is set to Basic.                                                                                                                                                                                                                    |
| Password optional                 | String      | Password used by Identity Manager for basic authentication. It is required when AuthType is set to Basic.                                                                                                                                                                                                                 |
| Filter required                   | String      | Value that filters out the corresponding entries from the AD instance which will not be exported. Only non-filtered entries are exported. The filter value complies with Microsoft's [search filter syntax](https://docs.microsoft.com/en-us/windows/win32/adsi/search-filter-syntax).                                    |
| RetryDelay optional               | Int32       | Time (in milliseconds) after which Identity Manager retries a timeout request.                                                                                                                                                                                                                                            |
| RequestTimeout optional           | Int32       | Time (in seconds) after which a connection faces a timeout.                                                                                                                                                                                                                                                               |
| ConnectionTimeout optional        | Int32       | Time (in seconds) after which a connection faces a timeout.                                                                                                                                                                                                                                                               |

### Output details

This connector is meant to generate:

- A file named `<connectionIdentifier>`\_entries.csv, with one column for each property having a
  ConnectionColumn and each property without it but used in an entity association;

    Any property can be exported in a specific format when specified. See the
    [References: Format for the EntityPropertyMapping](/docs/identitymanager/6.2/integration-guide/connectors/entitypropertymapping-format/index.md)
    topic for additional information.

- An additional file for each related table other than entries;
- A cookie file named `<connectionIdentifier>`\_cookie.bin, containing the time of the last export
  in order to perform incremental exports.

    :::note
    Most exports can be run in complete mode, where the CSV files will contain all
    entries, or in incremental mode, where CSV files will contain only the entries which have been
    modified since the last synchronization.
    :::


    A task can use the IgnoreCookieFile boolean property, and a command line (with an executable)
    can use the option --ignore-cookies.

The CSV files are stored in the ExportOutput folder, and the cookie file in the ExportCookies
folder. See the
[Application Settings](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
topic for additional information.

For example, with the following configuration example:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

                <EntityType Identifier="AD_Entry" DisplayName_L1="AD - Entry" >  <Property Identifier="dn" DisplayName_L1="dn" IsKey="true" TargetColumnIndex="0" Type="String" />  <Property Identifier="objectCategory" DisplayName_L1="objectCategory" TargetColumnIndex="4" Type="String" />  <Property Identifier="objectGuid" DisplayName_L1="objectGuid" TargetColumnIndex="3" Type="String" IsKey="true" />  <Property Identifier="objectSid" DisplayName_L1="objectSid" TargetColumnIndex="9" Type="String" />  <Property Identifier="pwdLastSet" DisplayName_L1="pwdLastSet" TargetColumnIndex="13" Type="String" />  <Property Identifier="thumbnailPhoto" DisplayName_L1="thumbnailPhoto" Type="Binary" />  <Property Identifier="ParentDn" DisplayName_L1="ParentDN" Type="ForeignKey" TargetColumnIndex="128" />  <Property Identifier="children" DisplayName_L1="children" Type="ForeignKey" />  <Property Identifier="Member" DisplayName_L1="Member" Type="ForeignKey" />  <Property Identifier="memberOf" DisplayName_L1="memberOf" Type="ForeignKey"/></EntityType><EntityTypeMapping Identifier="AD_Entry" Connector="AD" ConnectionTable="ADExport_entries">  <Property Identifier="dn" ConnectionColumn="dn" IsUniqueKey="true" />  <Property Identifier="objectCategory" ConnectionColumn="objectCategory" Format="rdn" />  <Property Identifier="objectGuid" ConnectionColumn="objectGuid" IsPrimaryKey="true" Format="guid" />  <Property Identifier="objectSid" ConnectionColumn="objectSid" IsUniqueKey="true" Format="sid"/>  <Property Identifier="pwdLastSet" ConnectionColumn="pwdLastSet" Format="1601date" />  <Property Identifier="thumbnailPhoto" ConnectionColumn="thumbnailPhoto" Format="binary" /></EntityTypeMapping><EntityAssociation Identifier="AD_Entry_parentdn" DisplayName_L1="Parent DN" IsProperty1Collection="true" Property2="AD_Entry:ParentDn" Property1="AD_Entry:children" /><EntityAssociation Identifier="AD_Entry_member" DisplayName_L1="Member" IsProperty1Collection="true" IsProperty2Collection="true" Property1="AD_Entry:Member" Property2="AD_Entry:memberOf" /><EntityAssociationMapping Identifier="AD_Entry_parentdn" Column2="dn" Column1="parentdn" ConnectionTable="ADExport_entries" EntityPropertyMapping1="AD_Entry:dn" EntityPropertyMapping2="AD_Entry:dn" Connector="AD" /><EntityAssociationMapping Identifier="AD_Entry_member" Column1="dn" Column2="member" ConnectionTable="ADExport_members" EntityPropertyMapping1="AD_Entry:dn" EntityPropertyMapping2="AD_Entry:dn" Connector="AD" />
            
```

We would have `C:/identitymanagerContoso/Temp/ExportOutput/ADExport_entries.csv` with a column for each
scalar property. See the [Entity Model](/docs/identitymanager/6.2/integration-guide/entity-model/index.md) topic for additional
information.

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
ADExport_entries.csv
                command,dn,objectCategory,objectGuid,objectSid,pwdLastSet,thumbnailPhoto,parentdn
            ...
```

Also, ADExport_member as ConnectionTable in a mapping will trigger the generation of the file
`C:/identitymanagerContoso/Temp/ExportOutput/ADExport_member.csv` with member as link attribute:

```
ADExport_member.csv
                command,dn,member
            ...
```

And `C:/identitymanagerContoso/Work/ExportCookies/ADExport_cookie.bin`

### Synchronize multiple forests

This connector can export resources from multiple forests trusted by the same AD domain.

It requires specifying the **Server** and **BaseDN** pairs in **Servers** for all the forests used
as source for the export.

Each **BaseDN** will generate a cookie file, but the entries from all **BaseDN** properties will be
written to the same CSV file.

> The following example exports data from two sources: both on the same **Server**
> (contoso.server.com), but on two different **BaseDN**s (DC=contoso,DC=com and
> DC=defense,DC=contoso,DC=com).
>
> Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
> script in the command line.
>
> ```
> appsettings.agent.json
>                     {
>                     ...
>                     "Connections": {
>                     "ADExport": {
>                     "Servers": [>                     {
>                     "Server": "<contoso.server.com>",
>                     "BaseDN": "<DC=contoso,DC=com>"
>                     },
>                     {
>                     "Server": "<contoso.server.com>",
>                     "BaseDN": "<DC=defense,DC=contoso,DC=com>"
>                     }
>],
>                     "AuthType": "<Basic>",
>                     "Login": "<Contoso>",
>                     "Password": "<ContOso$123456789>",
>                     "Filter": "<(objectclass=*)>",
>                     "EnableSSL": "<true>"
>                     }
>                     }
>                 }
> ```
>
> The export creates two cookie files: ADExport_cookie_0.bin for the first **BaseDN**, and
> ADExport_cookie_1.bin for the second **BaseDN**, but the entries of both **BaseDN** properties
> will be written in ADExport_entries.csv.

## Fulfill

This connector writes to the Active Directory, to create, update and delete entries, initiated
manually through the UI or automatically by enforcing the policy. See the
[Evaluate Policy](/docs/identitymanager/6.2/integration-guide/role-assignment/evaluate-policy/index.md) topic for additional
information.

### Configuration

Same as for export, fulfill is configured through connections.

> The following example connects to an AD LDS system located at contoso.server.com.
>
> Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
> script in the command line.
>
> ```
> appsettings.agent.json
>                     {
>                     ...
>                     "Connections": {
>                     ...
>                     "ADFulfillment": {
>                     "Servers": [>                     {
>                     "Server": "<contoso.server.com>",
>                     "BaseDN": "<DC=contoso,DC=com>"
>                     }
>],
>                     "AuthType": "Basic",
>                     "AsAdLds": "true",
>                     "EnableSSL": true,
>                     "Login": "<Contoso>",
>                     "NoSigning": false,
>                     "Password": "<ContOso$123456789>",
>                     }
>                     }
>                 }
> ```

#### Setting attributes

| Name                              | Type        | DescriptionDetails                                                                                                                                                                                                                                                                                                        |
| --------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Servers required                  | Server List | List of pairs that define the target servers, made of: - Server: domain controller URL. - BaseDN: base Distinguished Name used to connect to the related server.                                                                                                                                                          |
| AsAdLds optional                  | Boolean     | True to state the managed system as an AD LDS. It isInfo: used for extracting the schema through the connection screen.                                                                                                                                                                                                   |
| EnableSSL optional                | Boolean     | True to enable SSL protocol for authentication requests. **NOTE:** recommended when using AuthType set to Basic because basic authentication packets are not encrypted by default. SSL is not available on Linux.                                                                                                         |
| NoSigning optional                | Boolean     | True to disable Kerberos encryption.                                                                                                                                                                                                                                                                                      |
| AuthType default value: Negotiate | String      | Authentication method used by Identity Manager to authenticate to the server. Access is granted to the target domain controller: Anonymous - without any login/password; Basic - via the BaseDN, Login and Password attributes; Negotiate - via GSS-API negotiations with the Kerberos mechanism used for authentication. |
| Login optional                    | String      | Login used by Identity Manager for basic authentication. **NOTE:** It is required when AuthType is set to Basic.                                                                                                                                                                                                          |
| Password optional                 | String      | Password used by Identity Manager for basic authentication. **NOTE:** It is required when AuthType is set to Basic.                                                                                                                                                                                                       |

### Output details

This connector can create a new resource, and update and delete an existing resource via the UI.

A new resource is created with the state disabled, corresponding to the useraccountcontrol
value 514. When it is approved, its disabled state is removed and the useraccountcontrol value
becomes 512.

### Provision multiple forests

Same as for export, this connector can fulfill resources to multiple forests trusted by the same AD
domain, by specifying the Server and BaseDN pairs in Servers for all forests.

The following example fulfills data to two targets: both on the same Server (contoso.server.com),
but on two different BaseDNs (DC=contoso,DC=com and DC=defense,DC=contoso,DC=com).

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
appsettings.agent.json
                {
                ...
                "Connections": {
                ...
                "ADFulfillment": {
                "Servers": [{
                "Server": "<contoso.server.com>",
                "BaseDN": "<DC=contoso,DC=com>"
                },
                {
                "Server": "<contoso.server.com>",
                "BaseDN": "<DC=defense,DC=contoso,DC=com>"
                }],
                "AuthType": "Basic",
                "Login": "<Contoso>",
                "Password": "<ContOso$123456789>",
                "AsAdLds": "true"
                }
                }
            }
```

### Add attributes to the requests

Some systems using the LDAP protocol require additional attributes in the creation and/or update
requests.

If these attributes are not synchronized in Identity Manager, then they cannot be computed and
provided by scalar rules or navigation rules. In this case, they can be given as arguments in the
provisioning order, through the ResourceType's ArgumentsExpression.

The following example adds the attribute description with a value depending on what is modified:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```

                <ResourceType Identifier="LDAP_Entry_NominativeUser" DisplayName_L1="LDAP User (nominative)" Policy="Default" TargetEntityType="LDAP_Entry" Category="Accounts" SourceEntityType="Directory_User" ApprovalWorkflowType="One" HideOnSimplifiedView="true"
                ArgumentsExpression="C#:resource:
                var arguments = new System.Collections.Generic.Dictionary<string, string>();
                if (provisioningOrder.HasChanged("cn")) {
                arguments.Add("description", "This entry's login has been modified by Usercube.");
                }
                else if (provisioningOrder.HasChanged("mail")) {
                arguments.Add("description", "This entry's email has been modified by Usercube.");
                }
                else {
                arguments.Add("description", "This entry has been modified by Usercube.");
                }
                return arguments;">
                <ScalarRule Property="givenName" Binding="FirstName" />    <ScalarRule Property="cn" Binding="Login" />    <ScalarRule Property="sn" Binding="LastName" />    <ScalarRule Property="employeeNumber" Binding="EmployeeId" /></ResourceType>
            
```

### Password reset

See the
[appsettings.agent](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
topic for additional information on how to configure password reset settings.

### Credential protection

Data protection can be ensured through:

- RSA encryption, configured in the appsettings.encrypted.agent.json file. See the
  [RSA Encryption](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md)
  topic for additional information.
- An Azure Key Vault safe; See the
  [Azure Key Vault](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md)
  topic for additional information.

- A CyberArk Vault able to store Active Directory's Login, Password and Server. See the
  [CyberArk's AAM Credential Providers ](/docs/identitymanager/6.2/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)
  topic for additional information.
