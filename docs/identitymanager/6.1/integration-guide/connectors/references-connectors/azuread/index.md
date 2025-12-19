---
title: "Microsoft Entra ID"
description: "Microsoft Entra ID"
sidebar_position: 30
---

# Microsoft Entra ID

This connector exports and fulfills user and groups from/to an
[Microsoft Entra ID](https://www.microsoft.com/fr-fr/security/business/identity-access/microsoft-entra-id)
(formerly Microsoft Azure AD) instance.

This page is about
[Directory/Microsoft Entra ID](/docs/identitymanager/6.1/integration-guide/connectors/references-packages/azure-active-directory/index.md).

![Package: Directory/Microsoft Entra ID](/images/identitymanager/6.1/integration-guide/connectors/references-connectors/azuread/packages_azuread_v603.webp)

## Overview

Microsoft Entra ID is Microsoft's cloud-based identity and access management service which helps
your employees sign in and access resources in:

- external resources, such as Microsoft Office 365, the Azure portal, and thousands of other SaaS
  applications;
- internal resources, such as apps on your corporate network and intranet, along with any cloud apps
  developed by your own organization.

## Prerequisites

Implementing this connector requires giving Usercube
[application permissions](https://docs.microsoft.com/en-us/graph/auth/auth-concepts#application-permissions),
because Usercube does not access the
[Microsoft Graph API](https://docs.microsoft.com/en-us/graph/overview?view=graph-rest-1.0) on behalf
of a user but with [its own identity](https://docs.microsoft.com/en-us/graph/auth-v2-service), and
delegated permissions are not enough. These application permissions require the consent of an
administrator of the target Microsoft Entra ID tenant.

[See how to register Usercube as an application with the Microsoft Identity Platform](/docs/identitymanager/6.1/integration-guide/connectors/how-tos/azuread-register/index.md)
in order to grant Usercube a service account which authenticates with the target Microsoft Entra ID.

## Export

For a configured set of directory objects on an Microsoft Entra ID instance, this connector exports
the list of configured attributes in the associated entity type mapping to a CSV file.

### Configuration

This process is configured through a
[connection](/docs/identitymanager/6.1/integration-guide/toolkit/xml-configuration/connectors/connection/index.md)
in the UI and/or the XML configuration, and in the `appsettings.agent.json > Connections` section:

                    ```

**appsettings.agent.json**

{ ... "Connections": { ... "<ConnectionIdentifier>": { ... } } }

````


The identifier of the connection and thus the name of the subsection must:

- be unique.

- not begin with a digit.

- not contain ```<```, ```>```, ```:```, ```"```, ```/```, ```\```, ```|```, ```?```, ```*``` and ```_```.

> For example:
>
>                         ```
>
>                             appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "MicrosoftEntraIDExport": {
>         "ApplicationId": "contosoAzure897",
>         "ApplicationKey": "25d408a1925d4c081925b\d40819",
>         "TenantId": "25d40819-f23f-4837-9d50-a9a52da50b8c",
>         "MicrosoftGraphPathApi": "https://graph.microsoft.com/beta/",
>         "ResponseUri": "https://agent.usercubecontoso.com"
>     }
>   }
> }
> ```

#### Setting attributes

| Name | Details |
| --- | --- |
| ApplicationId   required | __Type__    String   __Description__ GUID that uniquely identifies the application registration in the Azure tenant.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Usercube__ > __Overview__ > __Application (client) ID__ |
| ApplicationKey   required | __Type__    String   __Description__ Secret associated with the ```ApplicationId```.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Usercube__ > __Certificate & secrets__ > __Client secrets__ > __Client Secret__ |
| TenantId   required | __Type__    String   __Description__ GUID that uniquely identifies the Azure tenant.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Usercube__ > __Overview__ > __Application (tenant) ID__ |
| ResponseUri   default value: ```http://localhost``` | __Type__    String   __Description__ URI used by Azure to contact back the application with the tokens. This response Uri needs to be registered in the [app registration](https://aka.ms/msal-net-register-app). |
|  |  |
| --- | --- |
| MicrosoftAuthorityPath   optional | __Type__    String   __Description__ Pattern for Microsoft Authority Path. |
| MicrosoftGraphPath   default value: ```https://graph.microsoft.com/.default``` | __Type__    String   __Description__ Scope requested to access a protected API.   __Note:__ for this flow (client credentials), the scope should be of the form __`{ResourceIdUri/.default}`__. [See Microsoft's documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#see-microsofts-documentation). |
| MicrosoftGraphPathApi   default value: ```https://graph.microsoft.com/v1.0/``` | __Type__    String   __Description__ Microsoft Graph Uri API. |

### Output details

This connector is meant to generate the following files:

- ```<connectionIdentifier>_directoryobjects.csv``` containing the property values from the entity type mapping associated with the connection.

  The values are exported from the entities listed in the attribute ```C0``` of the ```EntityTypeMapping```.

  > For example, with the following configuration example:
  >
  >                                 ```
  >
  > <EntityTypeMapping Identifier="MicrosoftEntraID_DirectoryObject" Connector="MicrosoftEntraID" ConnectionTable="MicrosoftEntraIDExport_directoryobjects" C0="user group directoryRole servicePrincipal">  <Property Identifier="accountEnabled" ConnectionColumn="accountEnabled" />  <Property Identifier="objectid" ConnectionColumn="id" IsPrimaryKey="true" />  <Property Identifier="mail" ConnectionColumn="mail" /></EntityTypeMapping>
  >
  > ```
  >
  >
  > Four entities are exported (```user```; ```group```; ```directoryRole```; ```servicePrincipal```) and whose names are to be found in the column ```@odata.type```. Then ```MicrosoftEntraIDExport_directoryobjects.csv``` looks like:
  >
  >                                 ```
  >
  >                                     MicrosoftEntraIDExport_directoryobjects.csv
  > Command,@odata.type,accountEnabled,id,mail
  > ...
  > ```

  Attributes described as "Supported only on the Get `<entity_name>` API" in the [Microsoft Graph API](https://docs.microsoft.com/en-us/graph/overview?view=graph-rest-1.0) documentation cannot be retrieved through this connector. The export task will raise an error if these attributes are used in your ```EntityTypeMapping```.

  This connector supports [Microsoft Entra ID Schema Extensions](https://docs.microsoft.com/en-us/previous-versions/azure/ad/graph/howto/azure-ad-graph-api-directory-schema-extensions) but does not support [Microsoft Graph Schema Extensions](https://docs.microsoft.com/en-us/graph/extensibility-schema-groups).
- ```<connectionIdentifier>_<navigationProperty>_<entity>.csv``` describing the navigation property from one entity to another.

  > For example ```MicrosoftEntraIDExport_members_group.csv``` would look like:
  >
  >                                 ```
  >
  >                                     MicrosoftEntraIDExport_members_group.csv
  > Command,groupId,id
  > ...
  > ```
  >
  >
  > Where __command__ can be ```insert```, ```update``` or ```delete```; __groupId__ is the id of the group; __id__ is the id of the group member (in this context).

  Only the navigation properties ```members``` and ```owners``` are exported. These navigation properties are automatically detected according to the data exported.
- one file ```<connectionIdentifier>_cookie_<entity>.bin``` per entity, containing an URL with a ```delta token``` useful for incremental export.

  > For example ```MicrosoftEntraIDExport_cookie_user.bin```

  Most exports can be run in complete mode, where the CSV files will contain all entries, or in incremental mode, where CSV files will contain only the entries which have been modified since the last synchronization.

  A task can use the ```IgnoreCookieFile``` boolean property, and a command line (with an executable) can use the option ```--ignore-cookies```.

The CSV files are stored in the [ExportOutput](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md) folder, and the cookie file in the [ExportCookies](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md) folder.

For more details, [see Microsoft's documentation on columns and attributes synchronized to Microsoft Entra ID](https://docs.microsoft.com/azure/active-directory/hybrid/reference-connect-sync-attributes-synchronized).

## Fulfill

This connector writes to the Microsoft Entra ID, to create, update and delete Microsoft Entra ID objects, initiated manually through the UI or automatically by [enforcing the policy](/docs/identitymanager/6.1/integration-guide/role-assignment/evaluate-policy/index.md).

### Configuration

Same as for export, fulfill is configured through connections.

> For example:
>
>                         ```
>
>                             appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "MicrosoftEntraIDFulfillment": {
>         "ApplicationId": "contosoAzure897",
>         "ApplicationKey": "84468d65324ghj\de9864d3d7e89026",
>         "TenantId": "25d40819-f23f-4837-9d50-a9a52da50b8c",
>         "MicrosoftGraphPathApi": "https://graph.microsoft.com/beta/",
>         "ResponseUri": "https://agent.usercube.com"
>     }
>   }
> }
> ```

#### Setting attributes

| Name | Details |
| --- | --- |
| ApplicationId   required | __Type__    String   __Description__ GUID that uniquely identifies the application registration in the Azure tenant.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Usercube__ > __Overview__ > __Application (client) ID__ |
| ApplicationKey   required | __Type__    String   __Description__ Secret associated with the ```ApplicationId```.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Usercube__ > __Certificate & secrets__ > __Client secrets__ > __Client Secret__ |
| TenantId   required | __Type__    String   __Description__ GUID that uniquely identifies the Azure tenant.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Usercube__ > __Overview__ > __Application (tenant) ID__ |
| ResponseUri   default value: ```http://localhost``` | __Type__    String   __Description__ URI used by Azure to contact back the application with the tokens. This response Uri needs to be registered in the [app registration](https://aka.ms/msal-net-register-app). |
|  |  |
| --- | --- |
| MicrosoftGraphPathApi   default value: ```https://graph.microsoft.com/v1.0/``` | __Type__    String   __Description__ Microsoft Graph Uri API. |

### Output details

This connector can create a new resource, and update and delete any Microsoft Entra ID objects and groups' memberships via the UI.

## Authentication

### Password reset

[See how to configure password reset settings](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md).

### Credential protection

Data protection can be ensured through:

- [RSA encryption](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md), configured in the ```appsettings.encrypted.agent.json``` file;
- an [Azure Key Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md) safe;

- a [CyberArk Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md) able to store Microsoft Entra ID's ```ApplicationId``` and ```ApplicationKey```.
````
