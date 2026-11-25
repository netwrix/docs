---
title: "Install the Power Automate Reverse Proxy"
description: "Install, verify, reinstall, and troubleshoot the reverse proxy that lets Power Automate send approval decisions back to Directory Manager."
keywords:
  - Power Automate reverse proxy
  - PowerAutomateProxy installer
  - TLS certificate
  - Directory Manager DataService
  - IIS reverse proxy
  - Microsoft Trusted Root Program
sidebar_position: 10
---

# Install the Power Automate Reverse Proxy

## Overview

The **Power Automate Reverse Proxy** is a required component for the Directory Manager
integration with Microsoft Power Automate. When a Power Automate workflow needs to approve or deny a
directory request, it calls back into the Directory Manager environment to deliver the decision.
Because Power Automate runs in Microsoft's cloud, Directory Manager must be reachable from the public internet.

The reverse proxy is a lightweight service you install on your Directory Manager server.
It sits in front of the DataService and acts as a hardened entry point.

## Prerequisites

Before running the installer, ensure the following are in place:

| Requirement | Details |
|-------------|---------|
| Administrator access | You must run the installer as Administrator |
| Directory Manager DataService running | The proxy forwards to it; it must be reachable on the same machine |
| Directory Manager Security Token Service (STS) running | Used for internal authentication |
| SQL Server access | The installer registers the proxy in the Directory Manager database. Windows Authentication is recommended; SQL login is also supported |
| A publicly trusted TLS certificate | See **TLS Certificate Requirements** |
| An available public-facing port | A TCP port that is reachable from the internet and not used by another service, including Directory Manager, such as 4443 |

### TLS Certificate Requirements

Power Automate runs in Microsoft's cloud and validates your proxy's TLS certificate against the **Microsoft Trusted Root Program**. 
It silently rejects certificates issued by internal or private certificate authorities, so you must obtain a certificate from a publicly trusted CA.

The certificate must be issued for the **public DNS hostname** at which your proxy is reachable.
The installer derives this hostname automatically from the certificate's Subject Alternative Name (SAN) 
and uses it for all bindings and URLs.

The installer expects two PEM files:

| File | Content |
|------|---------|
| Certificate file (`--cert-path`) | The leaf certificate, followed by any intermediate CA certificates (full-chain PEM) |
| Private key file (`--key-path`) | The RSA or EC private key corresponding to the certificate |

## Installation

### 1. Obtain the installer package

Extract the archive, which contains `PowerAutomateProxy-<version>.exe`.

### 2. Run the installer

Open **PowerShell 7 as Administrator** on the target server and run:

```powershell
.\PowerAutomateProxy-<version>.exe `
    --cert-path  "C:\certs\fullchain.pem" `
    --key-path   "C:\certs\privkey.pem" `
    --port       443 `
    --sql-server localhost
```

If Windows Authentication isn't available for the Directory Manager database, add `--sql-user <login>`. The installer prompts for the password interactively.

#### All parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `--cert-path` | Yes | Path to the full-chain PEM certificate file |
| `--key-path` | Yes | Path to the PEM private key file |
| `--port` | Yes | HTTPS port the proxy listens on. Must be reachable from the internet |
| `--sql-server` | Yes | SQL Server hostname or instance (for example, `localhost` or `SERVER\SQLEXPRESS`) |
| `--sql-database` | No | Directory Manager database name. Defaults to `GroupID` |
| `--sql-user` | No | SQL login name. Omit to use Windows Authentication (recommended) |
| `--sql-trust-server-certificate` | No | Flag. Skip SQL Server TLS validation. Use only if SQL Server uses a self-signed certificate |
| `--sts-authority` | No | Directory Manager STS base URL. Auto-discovered from the database when omitted |
| `--data-service-url` | No | Directory Manager DataService base URL. Auto-discovered from the database when omitted |
| `--known-proxies` | No | Comma-separated IP addresses of load balancers in front of the proxy, if any (for example, `10.0.0.1`) |
| `--known-networks` | No | Comma-separated trusted upstream CIDR ranges, if any (for example, `10.0.0.0/8`) |

:::note
The installer doesn't roll back on failure. If it stops midway, see [Manual cleanup](#manual-cleanup-after-a-failed-install) before retrying.
:::

## Verification

The installer runs tests automatically at the end of installation. If the tests pass, the Power Automate Reverse Proxy is ready for use.

## Reinstalling or upgrading

Re-run the installer with the same parameters. It safely handles existing installations:

- If the proxy is already registered in the Directory Manager database, the installer reuses the existing registration.
- If the IIS site and app pool already exist, the installer preserves them and only updates the binaries.

## Manual cleanup after a failed install

If the installer stopped partway through, remove the components it created before retrying:

1. **Remove the HTTP.sys certificate binding** (PowerShell):
   ```powershell
   netsh http delete sslcert ipport=0.0.0.0:<port>
   ```
2. **Remove the IIS site**: In IIS Manager, go to Sites, right-click **PAProxy**, and select Remove.
3. **Remove the IIS application pool**: In IIS Manager, go to Application Pools, right-click **DirectoryManager_PowerAutomateReverseProxy**, and select Remove.
4. **Remove the publish directory**:
   ```
   C:\Program Files\Imanami\GroupID 11.0\PowerAutomateProxy\Web\PowerAutomateProxy
   ```
5. **Remove the firewall rule**: In Windows Defender Firewall with Advanced Security, go to Inbound Rules, find `DirectoryManager-PowerAutomateReverseProxy-<port>`, and select Delete.

## Troubleshooting

### Power Automate can't reach the proxy

- Confirm that the proxy port is open in both Windows Firewall and any network firewall or NAT rules between the internet and the server.
- Confirm the DNS record for your proxy hostname points to the server's public IP address.
- Test connectivity from an external machine: `Invoke-WebRequest https://<your-hostname>:<port>/health`

### Power Automate returns a TLS certificate error

- Confirm the certificate was issued by a publicly trusted CA (not an internal CA or self-signed).
- Confirm the certificate's hostname matches the DNS name Power Automate is calling.
- If using a CDN or reverse proxy in front (for example, Cloudflare), ensure it's configured in **DNS-only** mode. Proxied (orange-cloud) mode changes the TLS certificate and breaks the trust chain.

### `Certificate chain validation failed` during installation

The installer validates the certificate chain before proceeding. Common causes:

- The PEM file contains only the leaf certificate, not the full chain. Use the full-chain file (for example, `fullchain.pem` from Let's Encrypt, not `cert.pem`).
- The certificate was issued by an internal or private CA. Power Automate also rejects it, so a publicly trusted certificate is required.

### IIS site fails to start (HTTP 503)

- Check that the `DirectoryManager_PowerAutomateReverseProxy` application pool is started in IIS Manager.
- Check that the `logs\` directory under the publish path exists and the app pool identity has write access to it.

### STS or DataService URL auto-discovery failed

The installer looks up the Directory Manager service URLs from the database automatically. If your server hosts multiple Directory Manager deployments or the URLs aren't registered, provide the URLs for the instances on the same machine as the proxy explicitly:

```powershell
.\PowerAutomateProxy-<version>.exe `
    --sts-authority    https://<ndm-host>:<port>/GroupIDSecurityService `
    --data-service-url https://<ndm-host>:<port>/GroupIDDataService `
    ... (other parameters)
```