---
title: "Remote Access Gateway requirements"
description: "Check the servers, software, virtualization settings, ports, and certificates that the Remote Access Gateway portal, gateway, and guacd need."
sidebar_position: 20
---

# Remote Access Gateway requirements

The Remote Access Gateway uses two Windows servers. The portal runs on its own server in the demilitarized zone (DMZ). The gateway and the Apache Guacamole daemon (guacd) run together on a second server inside your network. This page lists what each server needs before you install.

## Privilege Secure version

Install the gateway and portal from the package for your Privilege Secure release, and use the same release on the application server. This page covers 26.07.3.

{/* TODO verify: whether the gateway, portal, and application server must be the same release, and whether a 26.07.3 gateway works with an earlier 26.07 application server. */}

## Recommended server sizing

| Server | Operating system | Processor cores | Memory |
| --- | --- | --- | --- |
| Portal | Windows Server 2022 or later | 4 | 8 GB |
| Gateway and guacd | Windows Server 2022 or later | 8 | 16 GB |

{/* TODO verify: that Windows Server 2022 is the minimum supported version, and whether later versions are supported. */}

{/* TODO verify: minimum sizing; the lab ran both roles on 4 cores */}

## Portal server requirements

- A dedicated server in the DMZ. Don't install the portal on the application server or on a server that runs Internet Information Services (IIS) with its Default Web Site.
- Ports 80 and 443 free. The portal listens on 443 and uses 80 to redirect users to HTTPS. If another service holds port 80, nginx can't start, but the **NPS Rag Portal** service still shows as running. IIS binds port 80 for its Default Web Site, so a server with IIS typically has port 80 in use.
- The .NET 10 Hosting Bundle. The portal installer includes it.
- A Domain Name System (DNS) name that users can resolve. Users browse to the portal by this name.

## Gateway server requirements

- Internet Information Services (IIS). The gateway installer turns on the IIS role and the features it needs. The gateway runs as the IIS site **NPS Gateway Web Service**, not as a Windows service.
- The .NET 10 Hosting Bundle. The gateway installer includes it.
- Windows Subsystem for Linux 2 (WSL 2) with a Ubuntu distribution. The gateway doesn't support WSL 1. Run Windows Update before you install WSL.
- Docker running inside WSL. guacd runs as a Docker container, and the install script installs Docker.
- Systemd enabled in WSL. See [Install the gateway and guacd](/docs/privilegesecure/26_07/remote-access-gateway/install/install-gateway).
- Outbound access from WSL to download packages and the `guacamole/guacd:1.6.0` image.
- guacd version 1.6.0. The 26.07.3 portal requires this version. See [Upgrade the Remote Access Gateway](/docs/privilegesecure/26_07/remote-access-gateway/install/upgrade).

{/* TODO verify: whether guacd on a native Ubuntu host with Docker, instead of WSL on the gateway server, is a supported deployment, and the minimum Ubuntu version. Community guidance from 2025 named Ubuntu 22.04 or later; confirm it still applies to guacd 1.6.0. */}

### Nested virtualization

WSL 2 needs hardware virtualization. If the gateway server is a virtual machine, enable nested virtualization on the host.

- Hyper-V: with the virtual machine turned off, run `Set-VMProcessor -VMName <vm-name> -ExposeVirtualizationExtensions $true` on the Hyper-V host.
- VMware: enable hardware-assisted virtualization for the virtual machine in its processor settings.
- Physical servers: enable virtualization extensions in the Basic Input/Output System (BIOS) or Unified Extensible Firmware Interface (UEFI) firmware.

To check the gateway server, run the following commands in PowerShell as an administrator. Run `Get-WindowsOptionalFeature` once for each feature.

```powershell
(Get-CimInstance Win32_Processor).VirtualizationFirmwareEnabled
Get-WindowsOptionalFeature -Online -FeatureName VirtualMachinePlatform
Get-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

The first command reports whether the firmware exposes virtualization. {/* TODO verify: the expected result of the first command on a virtual machine with nested virtualization enabled. */}

## Application server requirements

The gateway connects to the Privilege Secure web service at `https://<nps-server>:6500`. The gateway server must trust the certificate that the web service presents.

{/* TODO verify: SME. In 26.07.3 the installed appsettings.log.json sets root InsecureSkipVerify to true and loads after appsettings.json, so the gateway skips validation of the 6500 certificate. Is this intended, and what is the supported way to turn validation on? */}

## Ports

| Port | Connection | Purpose |
| --- | --- | --- |
| 443 | Users to the portal | Portal HTTPS |
| 80 | Users to the portal | Redirect to HTTPS |
| 6550 | Portal to the gateway | Gateway web service |
| 6500 | Gateway to the application server | Privilege Secure web service |
| 4822 | Gateway to guacd | Guacamole protocol over TLS |
| 4489 | guacd to the proxy | RDP sessions |
| 4422 | guacd to the proxy | SSH sessions |

Allow only these connections between the DMZ and the internal network. The portal doesn't connect to port 6500. For the full list of Privilege Secure ports, see [Ports](/docs/privilegesecure/26_07/requirements/ports).

The gateway installer creates the Windows Firewall rule "NPS Gateway Web Service Port (6550)", open to any address. Limit it to the portal server's address. The installers create no rules for ports 443, 80, and 4822.

{/* TODO verify: whether customers open 443, 80, and 4822 manually. */}

## Certificates

- **Portal:** The portal configuration script creates a self-signed certificate. Browsers show a certificate warning until you replace it with a certificate from your certification authority. A replacement certificate must include the portal's DNS name in its subject alternative names.
- **Gateway:** The gateway installer creates a self-signed certificate for port 6550. The portal doesn't verify it.
- **guacd:** The configuration script creates a self-signed certificate for the connection between the gateway and guacd. The gateway pins the certificate by thumbprint.

See [Portal and gateway certificates](/docs/privilegesecure/26_07/remote-access-gateway/configuration/certificates).

## Licensing

The portal sign-in page requires a valid Privilege Secure license. See [Activate a license](/docs/privilegesecure/26_07/install/activate-license).
