---
title: "Remote Access Gateway requirements"
description: "Check the servers, software, virtualization settings, ports, and certificates that the Remote Access Gateway portal, gateway, and guacd need."
sidebar_position: 20
---

# Remote Access Gateway requirements

The Remote Access Gateway uses two Windows servers. The portal runs on its own server in the demilitarized zone (DMZ). The gateway and the Apache Guacamole daemon (guacd) run together on a second server inside your network. This page lists what each server needs before you install.

## Privilege Secure version

Install the gateway and portal from the package for your Privilege Secure release. This page covers 26.07.3.

Netwrix tests the latest gateway and portal with the latest Privilege Secure application server. Use the same release for the portal, the gateway, and the application server.

## Recommended server sizing

| Server | Operating system | Processor cores | Memory |
| --- | --- | --- | --- |
| Portal | Windows Server 2022 | 4 | 8 GB |
| Gateway and guacd | Windows Server 2022 | 8 | 16 GB |

## Portal server requirements

- A dedicated server in the DMZ. Don't install the portal on the application server or on a server that runs Internet Information Services (IIS) with its Default Web Site.
- Ports 80 and 443 free. The portal listens on 443 and uses 80 to redirect users to HTTPS. If another service holds port 80, nginx can't start, but the **NPS Rag Portal** service still shows as running. IIS binds port 80 for its Default Web Site, so a server with IIS typically has port 80 in use.
- The .NET 10 Hosting Bundle. The portal installer includes it.
- A Domain Name System (DNS) name that users can resolve. Users browse to the portal by this name.

## Gateway server requirements

- Internet Information Services (IIS). The gateway installer turns on the IIS role and the features it needs. The gateway runs as the IIS site **NPS Gateway Web Service**, not as a Windows service.
- The .NET 10 Hosting Bundle. The gateway installer includes it.
- Windows Subsystem for Linux 2 (WSL 2) with an Ubuntu distribution. The gateway doesn't support WSL 1. Run Windows Update before you install WSL.
- Docker running inside WSL. guacd runs as a Docker container, and the install script installs Docker.
- Systemd enabled in WSL. See [Install the gateway and guacd](/docs/privilegesecure/26.07/remote-access-gateway/install/install-gateway.md).
- Outbound access from WSL to download packages and the `guacamole/guacd:1.6.0` image.
- guacd version 1.6.0. The 26.07.3 portal requires this version. See [Upgrade the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/install/upgrade.md).


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

The first command reports whether the firmware exposes virtualization. Inside a virtual machine, it can report `False` even when nested virtualization is enabled and WSL 2 works. A guest doesn't expose the firmware flag the same way a physical host does. Treat a `False` result together with an `Enabled` result for both features as virtualization being available.

## Application server requirements

The gateway connects to the Privilege Secure web service at `https://<nps-server>:6500`. In 26.07.3 the gateway installs with certificate validation for this connection turned off, so it accepts any certificate that the web service presents. For production, set `InsecureSkipVerify` to `false` in `appsettings.log.json` and ensure the gateway server trusts the certificate that the web service presents. See [Skip certificate validation for Privilege Secure](/docs/privilegesecure/26.07/remote-access-gateway/configuration/gateway-settings.md#skip-certificate-validation-for-privilege-secure).

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

Allow only these connections between the DMZ and the internal network. The portal doesn't connect to port 6500. For the full list of Privilege Secure ports, see [Ports](/docs/privilegesecure/26.07/requirements/ports.md).

The gateway installer creates this inbound Windows Firewall rule, open to any address:

| Rule | Port |
| --- | --- |
| `NPS Gateway Web Service Port (6550)` | 6550 |

The portal installer creates no Windows Firewall rules. Create a rule for port 443, and for port 80 when you use the redirect to HTTPS. See [Install the Remote Access Gateway portal](/docs/privilegesecure/26.07/remote-access-gateway/install/install-portal.md#open-the-portal-ports).

Limit each rule to the address of the server that connects to it. No installer creates a rule for ports 80 or 4822.

## Certificates

- **Portal:** The portal configuration script creates a self-signed certificate. Browsers show a certificate warning until you replace it with a certificate from your certification authority. A replacement certificate must include the portal's DNS name in its subject alternative names.
- **Gateway:** The gateway installer installs a self-signed certificate for port 6550. The portal doesn't verify it.
- **guacd:** The configuration script creates a self-signed certificate for the connection between the gateway and guacd. The gateway pins the certificate by thumbprint.

See [Portal and gateway certificates](/docs/privilegesecure/26.07/remote-access-gateway/configuration/certificates.md).

## Licensing

The portal sign-in page requires a valid Privilege Secure license. See [Activate a license](/docs/privilegesecure/26.07/install/activate-license.md).
