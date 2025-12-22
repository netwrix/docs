---
title: "Azure Key Vault"
description: "Azure Key Vault"
sidebar_position: 40
---

# Azure Key Vault

## Prerequisites

First, NETWRIX recommends reading:

- [Azure Key Vault's overview documentation](https://docs.microsoft.com/en-us/azure/key-vault/general/overview)
  and [Basic concepts](https://docs.microsoft.com/azure/key-vault/general/basic-concepts);
- how to
  [sign in to Azure and create a vault](https://docs.microsoft.com/en-us/azure/key-vault/general/quick-create-portal#sign-in-to-azure-and-create-a-vault);
- about
  [Azure Key Vault's secrets](https://docs.microsoft.com/en-us/azure/key-vault/secrets/about-secrets)
  because secrets are the data that Usercube needs to collect.

## Compatible Settings

Every key from
[`appsettings.agent.json`](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
that has a string value can be saved as a secret into Azure Key Vault.

See examples in
[connectors' credential protection](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/servicenowentitymanagement/index.md)
sections.

## Write Settings to the Vault

After creating the Azure Key Vault, open its page on Azure's portal and
[add a secret](https://docs.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal#add-a-secret).

The important part of adding a secret in Azure Key Vault is defining its name and value:

- as secrets' names can only contain alphanumeric characters and double dashes (`--`) as separator,
  the keys from the `appsettings.agent.json` file must contain only alphanumeric characters too;
- secrets' values are simply the value associated with the key in the JSON file.

> For example, for the
> [Active Directory](/docs/identitymanager/6.1/integration-guide/connectors/references-connectors/activedirectory/index.md):
>
>                         ```
>
> appsettings.agent.json { ... "Connections": { ... "ADExport": { "Servers": [> { > "Server": >
> "paris.contoso.com", > "BaseDN": "DC=paris,DC=com" > }, > { > "Server": "marseille.contoso.com", >
>
> > "BaseDN": "DC=defense,DC=marseille,DC=com" > } >], "AuthType": "Basic", "Login": "login123",
> > "Password": "password123", "Filter": "(objectclass=\*)", "EnableSSL": "false", } } }
>
> ````
>
>
> To save the login to Azure Key Vault, create a secret whose name and value are respectively ```Connections--ADExport--Login``` and ```login123```.
>
> To save the second server, create a secret whose name and value are respectively ```Connections--ADExport--Servers--1--Server``` and ```marseille.contoso.com```. __Note that__ the index of the first element is ```0```.
> ````

This way, values from the Azure Key Vault take priority over the values from the appsettings files.

> For example, if `Login` exists in both Azure Key Vault and `appsettings.agent.json`, then the
> value from Azure Key Vault is used.

## Configure Usercube

Connect Usercube to Azure Key Vault by adding to the agent's `appsettings.json` file a specific
section.

> For example:
>
>                         ```
>
>                             appsettings.json
>
> { ... "AzureKeyVault": { "Vault" : "https://identitymanagerkeyvault.vault.azure.net/",
> "ConnectionString":
> "RunAs=App;AppId={dcb9b3a4-159c-45d8-93d5-8d6d677de4a7};TenantId={7a06f56c-47a8-469b-b0c0-089ec0666bd1};AppKey={Ju4m3BWA_U~s9XVlI_btgydJ8w5wY.iD.L}"
> } }
>
> ```
>
> ```

| Name                                 | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Vault required                       | **Type** String **Description** _DNS Name_ found on the page of the vault in Azure's portal. **Info:** usually in the format `https://yourVault.vault.azure.net/`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ConnectionString default value: null | **Type** String **Description** Identification token used to retrieve the various connection keys found in the Azure Key Vault. It concatenates a series of options defining the authentication to Azure Key Vault. `null` - the connection is established with the current user. **Warning**: this user must be connected to the Microsoft Entra ID (formerly Microsoft Azure AD) instance and to the correct tenant. Otherwise, Usercube gets the token from Microsoft Entra ID via: `RunAs=App` - a [managed identity](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview#managed-identity). **Warning**: connecting via a managed identity must be enabled on Azure's App Service. `RunAs=App;`**`AppId={ClientId of user-assigned identity}`** - a user-assigned identity. `RunAs=App;`**`AppId={TestAppId};KeyVaultCertificateSecretIdentifier={KeyVaultCertificateSecretIdentifier}`** - the application and a certificate's secret, for custom services authentication. `RunAs=App;`**`AppId={AppId};TenantId={TenantId};CertificateThumbprint={Thumbprint};CertificateStoreLocation={LocalMachine or CurrentUser}`** - a certificate with a thumbprint on TenantId. `RunAs=App;AppId={AppId};TenantId={TenantId};`**`CertificateSubjectName={Subject};`**`CertificateStoreLocation={LocalMachine or CurrentUser}` - a certificate with a DN on TenantId. `RunAs=App;AppId={AppId};TenantId={TenantId};`**`AppKey={ClientSecret}`** - a secret. |
