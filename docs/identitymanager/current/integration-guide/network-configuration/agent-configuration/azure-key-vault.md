---
title: "Azure Key Vault"
description: "Azure Key Vault"
sidebar_position: 40
---

# Azure Key Vault

## Prerequisites

First, NETWRIX recommends reading:
- [Azure Key Vault's overview documentation](https://docs.microsoft.com/en-us/azure/key-vault/general/overview) and [Basic concepts](https://docs.microsoft.com/azure/key-vault/general/basic-concepts);
- How to [sign in to Azure and create a vault](https://docs.microsoft.com/en-us/azure/key-vault/general/quick-create-portal#sign-in-to-azure-and-create-a-vault);
- About [Azure Key Vault's secrets](https://docs.microsoft.com/en-us/azure/key-vault/secrets/about-secrets) because secrets are the data that Identity Manager needs to collect.

## Compatible Settings

Every key from appsettings.agent.json that has a **string** value can be saved as a secret into Microsoft Entra ID (formerly Azure AD) Key Vault. See the [appsettings.agent](../../../integration-guide/network-configuration/agent-configuration/appsettings-agent) topic for additional information.

Check the examples in connectors' credential protection sections. See the [ServiceNow](../../../integration-guide/connectors/references-connectors/servicenowentitymanagement) topic for additional information.

## Write Settings to the Vault

After creating the Azure Key Vault, open its page on Azure's portal and [add a secret](https://docs.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal#add-a-secret).

The important part of adding a secret in Azure Key Vault is defining its name and value:
- As secrets' **names** can only contain alphanumeric characters and double dashes (`--`) as separator, the keys from the appsettings.agent.json file must contain only alphanumeric characters too;
- Secrets' **values** are simply the value associated with the key in the JSON file.

For example, for the Active Directory:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```json
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "ADExport": {
      "Servers": [{
          "Server": "<paris.contoso.com>",
          "BaseDN": "<DC=paris,DC=com>"
        },
        {
          "Server": "<marseille.contoso.com>",
          "BaseDN": "<DC=defense,DC=marseille,DC=com>"
        }],
      "AuthType": "<Basic>",
      "Login": "<login123>",
      "Password": "<YourPasswordHere>",
      "Filter": "(objectclass=*)",
      "EnableSSL": "false",
    }
  }
}
```
To save the login to Azure Key Vault, create a secret whose name and value are respectively `<Connections--ADExport--Login>` and `<login123>`.

To save the second server, create a secret whose name and value are respectively `<Connections--ADExport--Servers--1--Server>` and `<marseille.contoso.com>`.

:::tip
 Remember, the index of the first element is `0`.
:::
This way, **values** from the Azure Key Vault take priority over the **values** from the appsettings files.

For example, if Login exists in both Azure Key Vault and appsettings.agent.json, then the value from Azure Key Vault is used.

## Configure Usercube

Netwrix Identity Manager (formerly Usercube) uses the default Azure credentials to connect to the vault. Since the implementation of default Azure credential is controlled by Microsoft see the [Default Azure Credential](https://learn.microsoft.com/en-us/dotnet/api/azure.identity.defaultazurecredential?view=azure-dotnet) page for additional information.

> For example:
> ```json
> *appsettings.json*
>
> {
>   ...
>   "AzureKeyVault": {
>     "Vault" : "https://usercubekeyvault.vault.azure.net/",
>     "ConnectionString": "RunAs=App;AppId={<dcb9b3a4-159c-45d8-93d5-8d6d677de4a7>};TenantId={<7a06f56c-47a8-469b-b0c0-089ec0666bd1>};AppKey={<Ju4m3BWA_U~s9XVlI_btgydJ8w5wY.iD.L>}"
>   }
> }
>```

 | Name | Details |
 | --- | --- |
 | Vault<br /><span class="requiredAttribute">required</span> | **Type**<br />**string**<br /><br />**Description**<p>*DNS Name* found on the page of the vault in Azure's portal.<br />**Info:** usually in the format `https://yourVault.vault.azure.net/`.</p> |
 | ConnectionString<br /><span class="optionalAttribute">default value: null</span> | **Type**<br />**string**<br /><br />**Description**<p>Identification token used to retrieve the various connection keys found in the Azure Key Vault. It concatenates a series of options defining the authentication to Azure Key Vault.<br /><br />`null` - the connection is established with the current user.<br />**Warning**: this user must be connected to the Microsoft Entra ID (formerly Azure Active Directory) instance and to the correct tenant.<br /><br />Otherwise, Identity Manager gets the token from Microsoft Entra ID via:<br /><br />`RunAs=App` - a [managed identity](https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview#how-does-the-managed-identities-for-azure-resources-work).<br />**Warning**: connecting via a managed identity must be enabled on Azure's App Service.<br /><br />`RunAs=App;`**`AppId={ClientId of user-assigned identity}`** - a user-assigned identity.<br /><br />`RunAs=App;`**`AppId={TestAppId};KeyVaultCertificateSecretIdentifier={KeyVaultCertificateSecretIdentifier}`** - the application and a certificate's secret, for custom services authentication.<br /><br />`RunAs=App;`**`AppId={AppId};TenantId={TenantId};CertificateThumbprint={Thumbprint};CertificateStoreLocation={LocalMachine or CurrentUser}`** - a certificate with a thumbprint on TenantId.<br /><br />`RunAs=App;AppId={AppId};TenantId={TenantId};`**`CertificateSubjectName={Subject};`**`CertificateStoreLocation={LocalMachine or CurrentUser}` - a certificate with a DN on TenantId.<br /><br />`RunAs=App;AppId={AppId};TenantId={TenantId};`**`AppKey={ClientSecret}`** - a secret.</p> |

