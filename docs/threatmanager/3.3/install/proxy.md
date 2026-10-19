---
title: "Configure a Proxy for Azure and Entra ID Connections"
description: "Configure a Proxy for Azure and Entra ID Connections"
sidebar_position: 50
---

# Configure a Proxy for Azure and Entra ID Connections

Netwrix Threat Manager's Azure Service connects to Azure and Microsoft Entra ID to sync data. If
your environment requires outbound connections to go through a proxy server, configure the proxy
settings in the Azure Service configuration file.

## Configuration File

The proxy is configured in the Azure Service `appsettings.json` file on the Threat Manager server:

**C:\Program Files\STEALTHbits\StealthDEFEND\AzureService\appsettings.json**

:::warning
Before editing configuration files, review the [Modify Service Configuration Settings](/docs/threatmanager/3.3/install/appsettings.md) topic for important guidance on the correct approach.
:::

## Proxy Settings

Add or update the `Proxy` section in `appsettings.json`:

```json
{
  "Proxy": {
    "Enabled": true,
    "Address": "http://proxy.contoso.com:8080",
    "BypassProxyOnLocal": null,
    "UseDefaultCredentials": null,
    "PreAuthenticate": null,
    "CredentialProfileId": null
  }
}
```

The table below describes each setting.

| Property | Config Key | Type | Description |
|---|---|---|---|
| Enabled | `Proxy:Enabled` | bool | Whether the proxy is active. If `false`, all other settings are ignored and direct connections are made. |
| Address | `Proxy:Address` | string | The proxy server URL, e.g. `http://proxy.contoso.com:8080`. Required when `Enabled` is `true`. |
| BypassProxyOnLocal | `Proxy:BypassProxyOnLocal` | bool | Whether to skip the proxy for local and intranet addresses. |
| UseDefaultCredentials | `Proxy:UseDefaultCredentials` | bool | Whether to authenticate to the proxy using the Windows identity of the service account. Suitable for NTLM/Kerberos-authenticated proxies. |
| PreAuthenticate | `Proxy:PreAuthenticate` | bool | Whether to send proxy credentials on the first request rather than waiting for a 407 challenge. Can improve performance on authenticated proxies. |
| CredentialProfileId | `Proxy:CredentialProfileId` | long | ID of a credential profile to use for proxy authentication. Used instead of `UseDefaultCredentials` when the proxy requires an explicit username and password. See the [Credential Profile Page](/docs/threatmanager/3.3/administration/configuration/integrations/credentialprofile.md) topic for information on creating credential profiles. |

:::note
If `Enabled` is set to `true` and `Address` is left `null`, the service loads the OS-level proxy
settings and ignores all other settings in this section.
:::

## Configure the Proxy

**Step 1 –** Open the Azure Service configuration file on the Threat Manager server:

**C:\Program Files\STEALTHbits\StealthDEFEND\AzureService\appsettings.json**

**Step 2 –** Locate the `Proxy` section. If it doesn't exist, add it as shown in the example above.

**Step 3 –** Set `Enabled` to `true`.

**Step 4 –** Set `Address` to the URL of your proxy server, e.g. `http://proxy.contoso.com:8080`.

**Step 5 –** Configure authentication for the proxy using one of the following options:

- **Windows identity (NTLM/Kerberos)** — Set `UseDefaultCredentials` to `true`. The service
  authenticates to the proxy using the Windows identity of the account running the Azure Service.
- **Explicit credentials** — Set `CredentialProfileId` to the ID of a credential profile stored in
  Threat Manager. See the
  [Credential Profile Page](/docs/threatmanager/3.3/administration/configuration/integrations/credentialprofile.md)
  topic for information on creating credential profiles.
- **No authentication** — Leave both `UseDefaultCredentials` and `CredentialProfileId` as `null`
  for unauthenticated proxies.

**Step 6 –** Optionally, set `BypassProxyOnLocal` to `true` to bypass the proxy for local and
intranet addresses.

**Step 7 –** Optionally, set `PreAuthenticate` to `true` to send proxy credentials on the first
request and avoid the 407 challenge round-trip. Use this only if your proxy supports
pre-authentication.

**Step 8 –** Save the configuration file.

**Step 9 –** Restart the Netwrix Threat Manager Azure Service for the changes to take effect.
