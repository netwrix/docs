---
title: "Remote Access Gateway requirements"
description: "Check the servers, software, virtualization settings, ports, and certificates that the Remote Access Gateway portal, gateway, and guacd need."
sidebar_position: 20
---

# Remote Access Gateway requirements

The Remote Access Gateway uses two Windows servers. The portal runs on its own server in the demilitarized zone (DMZ). The gateway runs on a second server inside your network. The Apache Guacamole daemon (guacd) runs on the gateway server in Windows Subsystem for Linux (WSL) by default, or on a separate Linux host. This page lists what each server needs before you install.

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
- guacd version 1.6.0. The 26.07.3 portal requires this version. See [Upgrade the Remote Access Gateway](/docs/privilegesecure/26.07/remote-access-gateway/install/upgrade.md).
- A place to run guacd, either of the following:
  - **WSL 2 with an Ubuntu distribution (default).** The gateway doesn't support WSL 1. Run Windows Update before you install WSL. Docker runs inside WSL, and the install script installs Docker. Enable systemd in WSL. WSL needs outbound access to download packages and the `guacamole/guacd:1.6.0` image. See [Install the gateway and guacd](/docs/privilegesecure/26.07/remote-access-gateway/install/install-gateway.md).
  - **A separate Linux host with Docker.** Instead of running guacd in WSL on the gateway server, you can run guacd as a Docker container on its own Linux server. This keeps WSL and Docker off the gateway server. See [Run guacd on a separate Linux host](#run-guacd-on-a-separate-linux-host).

## Run guacd on a separate Linux host

By default, guacd runs in WSL on the gateway server. You can instead run guacd as a Docker container on a separate, always-on Linux server. The gateway keeps running on Windows; only guacd moves. Run it on a Linux server that can stay powered on, so the container survives restarts.

The gateway connects to the remote guacd over the network, so set the requirements for the separate host as follows.

| Requirement | Value |
| --- | --- |
| Operating system | A Linux distribution with Docker Engine. Ubuntu 26.04 LTS is tested. |
| Docker | Docker Engine with the Compose plugin. |
| guacd | The `guacamole/guacd:1.6.0` container, published on port 4822. |
| Ports | 4822 open from the gateway server to the host; the host reaches the proxy on ports 4489 and 4422. |
| Name resolution | The guacd host resolves the Privilege Secure server name, so guacd can reach the proxy. |
| Certificate | A guacd certificate (`guacd.crt` and `guacd.key`). The gateway pins it by thumbprint. |

The gateway doesn't use WSL when guacd runs on a separate host, so you can leave WSL and its scheduled tasks off the gateway server.

:::warning
The gateway and the portal are Windows components. The gateway and portal installers are Windows packages, and Netwrix ships no Linux build of either. Only guacd runs on Linux.
:::

### Nested virtualization

This section applies only when guacd runs in WSL on the gateway server. A separate Linux host for guacd doesn't need nested virtualization on the gateway server.

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

The first command reports whether the firmware exposes virtualization. {/* TODO verify: the value that the first command returns inside a virtual machine with nested virtualization enabled. It depends on the hypervisor and the host, and Microsoft's documentation doesn't state it for a guest. */}

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

The gateway installer creates the Windows Firewall rule "NPS Gateway Web Service Port (6550)", open to any address. Limit it to the portal server's address. The installers create no rules for ports 443, 80, and 4822.

## Certificates

- **Portal:** The portal configuration script creates a self-signed certificate. Browsers show a certificate warning until you replace it with a certificate from your certification authority. A replacement certificate must include the portal's DNS name in its subject alternative names.
- **Gateway:** The gateway installer installs a self-signed certificate for port 6550. The portal doesn't verify it.
- **guacd:** The configuration script creates a self-signed certificate for the connection between the gateway and guacd. The gateway pins the certificate by thumbprint.

See [Portal and gateway certificates](/docs/privilegesecure/26.07/remote-access-gateway/configuration/certificates.md).

## Licensing

The portal sign-in page requires a valid Privilege Secure license. See [Activate a license](/docs/privilegesecure/26.07/install/activate-license.md).
