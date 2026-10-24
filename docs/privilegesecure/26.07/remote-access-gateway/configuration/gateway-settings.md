---
title: "Gateway settings reference"
description: "Look up the keys in the Remote Access Gateway appsettings.json file, their defaults, and which ones you can change."
sidebar_position: 30
---

# Gateway settings reference

The Remote Access Gateway reads its settings from JSON files on the gateway server. This page lists each key, its default value, and what it controls.

## Locate the settings file

The gateway settings are in the following folder on the gateway server:

```text
C:\ProgramData\Stealthbits\PAM\RagGateway
```

The gateway loads the following settings files in this order. A later file overrides an earlier one.

| File | Purpose |
|---|---|
| `appsettings.default.json` | The shipped defaults. Don't edit it. |
| `appsettings.json` | The settings that `Configure-Gateway.ps1` writes. |
| `appsettings.user.json` | Optional overrides. |
| `appsettings.log.json` | Installed with the gateway. It sets `InsecureSkipVerify`. See [Skip certificate validation for Privilege Secure](#skip-certificate-validation-for-privilege-secure). |
| `appsettings.svc.json` | Service-level overrides. |

{/* TODO verify: the purpose of appsettings.user.json and appsettings.svc.json, and which of the files you may edit. */}

`Configure-Gateway.ps1` sets `NPS.Uri`, `Guacd.Hostname`, `Guacd.ServerThumbprint`, and `Guacd.InsecureSkipVerify` for you. Until the script writes the file, the gateway runs on the defaults, and `Guacd.ServerThumbprint` reads "Guacd:ServerThumbprint not set!". For the install order, see [Install the gateway and guacd](/docs/privilegesecure/26.07/remote-access-gateway/install/install-gateway.md).

:::note
Keep a copy of `appsettings.json` before you change it.
:::

{/* TODO verify: whether the gateway picks up an appsettings.json change without an app pool recycle of NPSGatewayAppPool, since the code reloads appsettings.json when it changes. */}

## Settings

| Key | Default | Description |
|---|---|---|
| `Uri` | `https://*:6550` | The address and port the gateway listens on. |
| `Cors.AllowOrigins` | `[]` | The origins that the gateway allows for cross-origin requests. |
| `NPS.Uri` | `https://localhost:6500` | The Netwrix Privilege Secure for Access Management (Privilege Secure) web service the gateway forwards requests to. `Configure-Gateway.ps1 -NPSHost` sets this value. Use the form `https://<nps-server>:6500`. |
| `Guacd.Hostname` | `localhost` | The host name or IP address of the guacd server. `Configure-Gateway.ps1 -NPSGuacdHost` sets this value. |
| `Guacd.Port` | `4822` | The port guacd listens on. |
| `Guacd.ServerThumbprint` | `Guacd:ServerThumbprint not set!` | The thumbprint of the guacd certificate. The gateway accepts only a guacd certificate with this thumbprint. `Configure-Gateway.ps1` sets this value. |
| `Guacd.InsecureSkipVerify` | `false` | When `true`, the gateway connects to guacd without TLS. Keep it `false`. |
| `Client.DefaultArguments` | Per protocol | The default connection arguments the gateway passes to guacd for each protocol, such as the default port and the display size. |
| `Client.UnencryptedArguments` | See the shipped file | The arguments the browser may pass outside the encrypted token, such as `width`, `height`, and `dpi`. |
| `AllowedLoginMethods` | `0` | The sign-in methods the portal offers. See [Configure sign-in for the portal](/docs/privilegesecure/26.07/remote-access-gateway/configuration/authentication.md). |

In the table, `Section.Key` means a nested JSON key. For example, `NPS.Uri` is `"NPS": { "Uri": ... }`.

{/* TODO verify: the default value of Client.UnencryptedArguments on a 26.07.3 install. */}

### Gateway address

The gateway listens on port 6550. The portal connects to the gateway on this port, and the installer binds the **NPS Gateway Web Service** site in Internet Information Services (IIS) to it.

Don't change `Uri`. The installer binds the **NPS Gateway Web Service** site to port 6550, and the portal's nginx upstream expects that port.

{/* TODO verify: whether the gateway port is customer-configurable. */}

### Connection to Privilege Secure

`NPS.Uri` must point to the web service address that the gateway server can reach and whose certificate the gateway server trusts. The gateway forwards only a fixed list of Privilege Secure API calls from the portal.

### Connection to guacd

The gateway connects to guacd on `Guacd.Hostname` and `Guacd.Port` over TLS. The gateway trusts the guacd certificate only when its thumbprint equals `Guacd.ServerThumbprint`. If you regenerate the guacd certificate, run `Configure-Gateway.ps1` again so the thumbprint matches. See [Portal and gateway certificates](/docs/privilegesecure/26.07/remote-access-gateway/configuration/certificates.md).

:::warning
Keep `Guacd.InsecureSkipVerify` set to `false`. When it is `true`, the gateway sends session traffic to guacd without TLS, and it logs a warning.
:::

{/* TODO verify: the WSL IP address stored in Guacd.Hostname can change after a restart of WSL or the server. Confirm whether Guacd.Hostname must be updated, and the supported way to keep it current. */}

### Skip certificate validation for Privilege Secure

The root-level `InsecureSkipVerify` key controls whether the gateway validates the Privilege Secure certificate when it forwards requests to `NPS.Uri`. The key is at the root of the file, not under `NPS`. It isn't in `appsettings.default.json`, and the shipped `appsettings.log.json` sets it to `true`. Because `appsettings.log.json` loads after `appsettings.json`, a value in `appsettings.json` doesn't override it.

When the key is `true`, the gateway doesn't validate the Privilege Secure certificate.

:::warning
When `InsecureSkipVerify` is `true`, the gateway accepts any certificate from the server it forwards to. For production, make sure the gateway server trusts the certificate on `https://<nps-server>:6500`, for example by importing the root certificate authority (CA) certificate on the gateway server.
:::

{/* TODO verify: SME. Is the shipped appsettings.log.json value of true intended, and what is the supported way to turn validation on? */}

### Default connection arguments

`Client.DefaultArguments` holds the arguments the gateway uses when the browser doesn't supply them. The shipped defaults for an RDP connection are `args=connect`, `port=3389`, `width=1024`, `height=768`, `dpi=96`, `security=any`, and `ignore-cert=true`. The defaults for an SSH connection are `args=connect`, `port=22`, `width=1024`, `height=768`, `dpi=96`, and `version=1.5.0`. Leave these values unchanged unless Netwrix Support asks you to change them.

{/* TODO verify: whether customers ever need to change Client.DefaultArguments, and which arguments are supported. */}

## Log level

The gateway reads the `LOG_LEVEL` environment variable. The default is `Information`. The values are `Verbose`, `Debug`, `Information`, `Warning`, `Error`, and `Fatal`. Don't use a level below `Information` in production, because the log then includes sensitive information.

{/* TODO verify: where to set LOG_LEVEL for the IIS-hosted gateway */}

## Find the gateway log

The gateway writes to `PAM-RagGateway*.log` in `C:\ProgramData\Stealthbits\PAM\Log`. The file stays empty until the gateway handles its first request. For more log locations, see [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md).
