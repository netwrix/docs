---
title: "Azure"
description: "Azure"
sidebar_position: 20
---

# Azure

This connector exports
[Azure](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-azure)
resources, role definitions and assignments.

This page is about [Azure](/docs/identitymanager/saas/integration-guide/connectors/references-packages/azure/index.md).

![Package: Cloud/Azure](/images/identitymanager/saas/integration-guide/connectors/references-connectors/azure/packages_azure_v603.webp)

## Prerequisites

Implementing this connector requires at least the `Security Reader` role, because Identity
Manager does not access the [Azure API](https://docs.microsoft.com/en-us/rest/api/azure/) on behalf
of a user but with [its own identity](https://docs.microsoft.com/en-us/rest/api/azure/).

## Export

For a given Azure tenant with resources, this connector exports Azure resources, role definitions
and role assignments to CSV files.

### Configuration

This process is configured through a
[Connection](/docs/identitymanager/saas/integration-guide/toolkit/xml-configuration/connectors/connection/index.md) in the UI and/or
the XML configuration, and in the `appsettings.agent.json > Connections` section:

                    ```

**appsettings.agent.json**

{ ... "Connections": { ... "<ConnectionIdentifier>": { ... } } }

````


The identifier of the connection and thus the name of the subsection must:

- be unique.

- not begin with a digit.

- not contain ```<```, ```>```, ```:```, ```"```, ```/```, ```\```, ```|```, ```?```, ```*``` and ```_```.

> The following example
>
>                         ```
>
>                             appsettings.agent.json
> {
>   ...
>   "Connections": {
>     ...
>     "AzureExport": {
>         "ApplicationId": "contosoAzure897",
>         "ApplicationKey": "25d408a1925d4c081925b\d40819",
>         "SubscriptionId": "Contoso",
>         "TenantId": "25d40819-f23f-4837-9d50-a9a52da50b8c",
>         "AzurePath": "https://management.azure.com/.default",
>         "AzurePathApi": "https://management.azure.com",
>         "ResponseUri": "https://agent.usercubecontoso.com"
>     }
>   }
> }
> ```

#### Setting attributes

| Name | Details |
| --- | --- |
| ApplicationId   required | __Type__    String   __Description__ GUID that uniquely identifies the application registration in the Azure tenant.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Identity Manager__ > __Overview__ > __Application (client) ID__ |
| ApplicationKey   required | __Type__    String   __Description__ Secret associated with the ```ApplicationId```.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Identity Manager__ > __Certificate & secrets__ > __Client secrets__ > __Client Secret__ |
| TenantId   required | __Type__    String   __Description__ GUID that uniquely identifies the Azure tenant.   __Note:__ value obtained at registration: __App registrations__ > __Owned applications__ > __Identity Manager__ > __Overview__ > __Application (tenant) ID__ |
| ResponseUri   default value: ```http://localhost``` | __Type__    String   __Description__ URI used by Azure to contact back the application with the tokens. This response Uri needs to be registered in the [app registration](https://aka.ms/msal-net-register-app). |
|  |  |
| --- | --- |
| SubscriptionId   required | __Type__    String   __Description__ GUID that uniquely identifies the subscription associated to the ```ApplicationId```. [See how to find it](https://www.youtube.com/watch?v=6b1J03fDnOg&t=3s). |
| AzurePath   default value: ```https://management.azure.com/.default``` | __Type__    String   __Description__ Scope requested to access a protected API. For this flow (client credentials), the scope should be of the form __`{ResourceIdUri/.default}`__. [See Microsoft's documentation](https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow#see-microsofts-documentation). |
| AzurePathApi   default value: ```https://management.azure.com``` | __Type__    String   __Description__ Azure Uri API. |

### Output details

This connector is meant to generate to the Export Output folder the following CSV files:

```<identifier>_RoleDefinition.csv``` with the following columns:

- __id__: role definition's Azure id;
- __name__: role definition's id;
- __roleName__: role definition's name;
- __type__: role definition's type, for example it can describe if it is a built-in role or a customized one;
- __description__: role definition's description.

```<identifier>_Resource.csv``` with the following columns:

- __id__: resource's Azure id;
- __name__: resource's name;
- __type__: resource's type;
- __location__: resource's geographical location;
- __managedBy__: GUID or Azure id of the resource's manager;
- __principalId__: resource's identity PrincipalId;
- __ResourceIdentitytype__: resource's identity type.

```<identifier>_RoleAssignment.csv``` with the following columns:

- __id__: role assignment's Azure id;
- __name__: role assignment's id;
- __roleDefinitionId__: role definition's Azure id;
- __principalId__: Microsoft Entra ID (formerly Microsoft Azure AD)'s object GUID;
- __scope__: resource's Azure id.

See the [Application Settings](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings/index.md)topic for additional information.

## Fulfill

There are no fulfill capabilities for this connector.

## Authentication

### Password reset

This connector does not reset passwords.

### Credential protection

Data protection can be ensured through:

- [RSA Encryption](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md) configured in the ```appsettings.encrypted.agent.json``` file;
- An [Azure Key Vault](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md) safe;

- A [CyberArk's AAM Credential Providers
  ](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md) able to store Azure's ```ApplicationId``` and ```ApplicationKey```.
````
