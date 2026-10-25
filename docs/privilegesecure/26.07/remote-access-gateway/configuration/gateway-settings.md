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
| `appsettings.user.json` | Optional overrides. The gateway creates the file with a `RestService` block (`Url` and `InsecureSkipVerify`) when it is missing. |
| `appsettings.log.json` | Installed with the gateway. It holds the log settings under `Serilog` and sets `InsecureSkipVerify`. See [Log level](#log-level) and [Skip certificate validation for Privilege Secure](#skip-certificate-validation-for-privilege-secure). |
| `appsettings.svc.json` | The service identity, `ServiceInfo`, with `ScmName` and `RegisteredServiceType`. |

Make your changes in `appsettings.json`, except where a section on this page names another file.

{/* TODO verify: whether Netwrix supports editing appsettings.user.json and appsettings.svc.json. The release code shows what each file holds but doesn't say whether customers should edit them. */}

`Configure-Gateway.ps1` sets `NPS.Uri`, `Guacd.Hostname`, `Guacd.ServerThumbprint`, and `Guacd.InsecureSkipVerify` for you. Until the script writes the file, the gateway runs on the defaults, and `Guacd.ServerThumbprint` reads "Guacd:ServerThumbprint not set!". For the install order, see [Install the gateway and guacd](/docs/privilegesecure/26.07/remote-access-gateway/install/install-gateway.md).

:::note
Keep a copy of `appsettings.json` before you change it.
:::

The gateway reads most settings once, when it starts. After you change a setting, recycle the gateway application pool so that it takes effect:

```powershell
Restart-WebAppPool -Name NPSGatewayAppPool
```

`AllowedLoginMethods` is the exception. The gateway reads it again on each sign-in request, so a saved change applies without a recycle.

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
| `Client.UnencryptedArguments` | Per protocol | The arguments the browser may pass outside the encrypted token, such as `width`, `height`, and `dpi`. |
| `AllowedLoginMethods` | `0` | The sign-in methods the portal offers. See [Configure sign-in for the portal](/docs/privilegesecure/26.07/remote-access-gateway/configuration/authentication.md). |

In the table, `Section.Key` means a nested JSON key. For example, `NPS.Uri` is `"NPS": { "Uri": ... }`.

The default `Client.UnencryptedArguments` are `width`, `height`, and `dpi` for `rdp` and `vnc`, and `color-scheme`, `font-name`, `font-size`, `width`, `height`, and `dpi` for `ssh` and `telnet`.

### Gateway address

The gateway listens on port 6550. The portal connects to the gateway on this port, and the installer binds the **NPS Gateway Web Service** site in Internet Information Services (IIS) to it.

Don't change the port. The gateway runs inside IIS, so the IIS binding of the **NPS Gateway Web Service** site decides the port, not `Uri`. The portal's nginx upstream expects port 6550.

### Connection to Privilege Secure

`NPS.Uri` must point to the web service address that the gateway server can reach and whose certificate the gateway server trusts. The gateway forwards only a fixed list of Privilege Secure API calls from the portal.

### Connection to guacd

The gateway connects to guacd on `Guacd.Hostname` and `Guacd.Port` over TLS. The gateway trusts the guacd certificate only when its thumbprint equals `Guacd.ServerThumbprint`. If you regenerate the guacd certificate, run `Configure-Gateway.ps1` again so the thumbprint matches. See [Portal and gateway certificates](/docs/privilegesecure/26.07/remote-access-gateway/configuration/certificates.md).

:::warning
Keep `Guacd.InsecureSkipVerify` set to `false`. When it is `true`, the gateway sends session traffic to guacd without TLS, and it logs a warning.
:::

In the default networking mode, WSL 2 runs behind network address translation (NAT), and the address of the WSL instance can change when WSL or the server restarts. After a restart, run `wsl hostname -I` on the gateway server. If the address changed, run `Configure-Gateway.ps1 -NPSGuacdHost <new address> -NPSHost <Privilege Secure URL>`, and then recycle the `NPSGatewayAppPool` application pool so the gateway reads the new value. The script also resets `NPS.Uri`, `Guacd.ServerThumbprint`, and `Guacd.InsecureSkipVerify`.

### Skip certificate validation for Privilege Secure

The root-level `InsecureSkipVerify` key controls whether the gateway validates the Privilege Secure certificate when it forwards requests to `NPS.Uri`. The key is at the root of the file, not under `NPS`. It isn't in `appsettings.default.json`, and the shipped `appsettings.log.json` sets it to `true`. Because `appsettings.log.json` loads after `appsettings.json`, a value in `appsettings.json` doesn't override it.

When the key is `true`, the gateway doesn't validate the Privilege Secure certificate. To make the gateway validate it, set the key to `false` in `appsettings.log.json`, and then recycle the gateway application pool.

:::warning
When `InsecureSkipVerify` is `true`, the gateway accepts any certificate from the server it forwards to. The shipped value of `true` is for initial setup. Set it to `false` for production, and ensure that the gateway server trusts the certificate on `https://<nps-server>:6500`, for example by importing the root certificate authority (CA) certificate on the gateway server.
:::

### Default connection arguments

`Client.DefaultArguments` holds the arguments the gateway uses when the browser doesn't supply them. The shipped defaults are:

| Protocol | Defaults |
|---|---|
| RDP | `args=connect`, `port=3389`, `width=1024`, `height=768`, `dpi=96`, `security=any`, `ignore-cert=true` |
| VNC | `args=connect`, `port=5900`, `width=1024`, `height=768`, `dpi=96`, `version=1.5.0` |
| SSH | `args=connect`, `port=22`, `width=1024`, `height=768`, `dpi=96`, `version=1.5.0` |
| Telnet | `args=connect`, `port=23`, `width=1024`, `height=768`, `dpi=96`, `version=1.5.0` |

For the arguments listed in `Client.UnencryptedArguments`, a non-empty value from the browser request overrides the value from the connection token, and a value from the token overrides a default. To change the default display size, change `width` and `height`. The browser normally sends its own `width` and `height`, so these defaults apply only when it doesn't. Leave the other values unchanged unless Netwrix Support asks you to change them.

{/* TODO verify: which arguments other than width and height Netwrix supports changing in Client.DefaultArguments. The release code accepts any Guacamole argument, but no source lists the supported ones. */}

## Log level

The gateway takes its log level from `Serilog.MinimumLevel.Default` in `appsettings.log.json`. The default is `Information`. The values are `Verbose`, `Debug`, `Information`, `Warning`, `Error`, and `Fatal`. Don't use a level below `Information` in production, because the log then includes sensitive information. After you change the level, recycle the gateway application pool.

## Find the gateway log

The gateway writes to `PAM-RagGateway*.log` in `C:\ProgramData\Stealthbits\PAM\Log`. The file stays empty until the gateway handles its first request. For more log locations, see [Troubleshoot the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/troubleshooting.md).
