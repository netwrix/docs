---
title: "Azure Key Vault"
description: "Azure Key Vault"
sidebar_position: 40
---

# Azure Key Vault

## Prerequisites

First, Identity Manager recommends reading:

- [Azure Key Vault's overview documentation](https://docs.microsoft.com/en-us/azure/key-vault/general/overview)
  and [Basic concepts](https://docs.microsoft.com/azure/key-vault/general/basic-concepts);
- How to
  [sign in to Azure and create a vault](https://docs.microsoft.com/en-us/azure/key-vault/general/quick-create-portal#sign-in-to-azure-and-create-a-vault);
- About
  [Azure Key Vault's secrets](https://docs.microsoft.com/en-us/azure/key-vault/secrets/about-secrets)
  because secrets are the data that Identity Manager needs to collect.

## Compatible Settings

Every key from appsettings.agent.json that has a string value can be saved as a secret into
Microsoft Entra ID (formerly Azure AD) Key Vault. See the
[appsettings.agent](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md) topic for additional information.

Check the examples in connectors' credential protection sections. See the
[ServiceNow](/docs/identitymanager/saas/integration-guide/connectors/references-connectors/servicenowentitymanagement/index.md) topic
for additional information.

## Write Settings to the Vault

After creating the Azure Key Vault, open its page on Azure's portal and
[add a secret](https://docs.microsoft.com/en-us/azure/key-vault/secrets/quick-create-portal#add-a-secret).

The important part of adding a secret in Azure Key Vault is defining its name and value:

- As secrets' names can only contain alphanumeric characters and double dashes (`--`) as separator,
  the keys from the appsettings.agent.json file must contain only alphanumeric characters too;
- Secrets' values are simply the value associated with the key in the JSON file.

For example, for the Active Directory:

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the
script in the command line.

```
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
      "Password": "<password123>",
      "Filter": "(objectclass=*)",
      "EnableSSL": "false",
    }
  }
}
                    
```

To save the login to Azure Key Vault, create a secret whose name and value are respectively
`<Connections--ADExport--Login>` and `<login123>`.

To save the second server, create a secret whose name and value are respectively
`<Connections--ADExport--Servers--1--Server>` and `<marseille.contoso.com>`.

:::tip
Remember, the index of the first element is `0`.
:::


This way, values from the Azure Key Vault take priority over the values from the appsettings files.

For example, if Login exists in both Azure Key Vault and appsettings.agent.json, then the value from
Azure Key Vault is used.

## Configure Usercube

Netwrix Identity Manager (formerly Usercube)uses the default Azure credentials to connect to the
vault. Since the implementation of default Azure credential is controlled by Microsoft see the
[Default Azure Credential](https://learn.microsoft.com/en-us/dotnet/api/azure.identity.defaultazurecredential?view=azure-dotnet)
page additional information.

| Name           | Type   | Description                                                                                                                           |
| -------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| Vault required | String | DNS Name found on the page of the vault in Azure's portal. _Remember,_ usually in the format is `https://yourVault.vault.azure.net/`. |
