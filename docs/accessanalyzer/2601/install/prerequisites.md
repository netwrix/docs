---
title: "Prerequisites"
description: "What to gather and prepare before installing Access Analyzer"
sidebar_position: 1
---

# Prerequisites

Gather the following before you start the Access Analyzer installer. For the full installation walkthrough, see [Quick Install](quickinstall.md).

## Checklist

- [ ] Server meets hardware and OS requirements
- [ ] Account with `sudo` access to the server ready
- [ ] Outbound HTTPS access to all required domains confirmed
- [ ] Server hostname is a fully qualified domain name (FQDN) that resolves to the server IP
- [ ] TLS certificate option chosen; certificate files prepared if using Bring Your Own
- [ ] First admin name and email address decided (this provisions a local account — no AD/Entra dependency)
- [ ] Netwrix license key ready

## System requirements

**Absolute installer minimums:** 6 vCPUs, 24 GB RAM, 20 GB free disk on `/`. The preflight check blocks installation if the system falls below these thresholds.

Choose a deployment size based on your environment:

| Size | CPU | Memory | Minimum Disk Space |
| --- | --- | --- | --- |
| **Small** | 8 cores | 32 GB | 500 GB SSD |
| **Medium** | 16 cores | 48 GB | 1 TB SSD |
| **Large** | 32 cores | 64 GB | 1 TB SSD |
| **Enterprise** | 48 cores | 128 GB | 3 TB+ SSD |

:::note
The required disk space scales with the number of objects across your sources, not the size of on-disk data, because Access Analyzer stores only object metadata, not the actual contents. These are minimum disk space requirements — allocate more if possible to avoid running out of space later.
:::

**Network:** Outbound HTTPS (port 443) to required endpoints — see [Required Domains](#required-domains).

**License:** Valid Netwrix license key.

:::note
**Supported OS:** Ubuntu 24.04 LTS is the primary tested platform. Red Hat Enterprise Linux (RHEL) 8 and 9, CentOS, Fedora, and Debian stable releases are also compatible. Access Analyzer doesn't support AIX or non-Linux operating systems.
:::

:::note
If the server runs on a hypervisor, configure **static memory allocation** (not dynamic/ballooned memory). See [Hardware and System Requirements](system/requirements.md) for hypervisor-specific instructions.

- **VMware vSphere:** disable memory ballooning (`mem.balloon.enable = "FALSE"`)
- **Hyper-V:** use static memory (`Set-VMMemory -DynamicMemoryEnabled $false`)
:::

## DNS

The hostname you enter during installation must be a fully qualified domain name (FQDN) — it must contain at least one dot (for example, `analyzer.corp.example.com`). The installer rejects a plain hostname without a dot.

The hostname must resolve to the VM's IP address from:

- Client browsers — configure a DNS A record, or add an entry to each client's `hosts` file.
- In-cluster pods — the installer's CoreDNS rewrite handles these automatically. No customer action needed.

:::warning
Use a DNS hostname, **not an IP address**. The browser TLS handshake requires a hostname. Avoid the `.local` and `.localhost` TLDs — both break in-cluster DNS resolution and silently break sign-in flows.
:::

## TLS certificates

You must prepare the following three files and place them in `/etc/dspm/` on the server before running the installer:

```bash
sudo mkdir -p /etc/dspm
```

| File | What It Is |
| --- | --- |
| `<hostname>.crt` | Server identity certificate in PEM format. The Subject Alternative Name (SAN) list must include the hostname **in lowercase** and the server's IP address. |
| `<hostname>.key` | Private key paired with the certificate (PEM). The OS user running the installer must be able to read it — not just `root`. |
| `ca-bundle.crt` | CA certificates that trust the server certificate. Required only if an internal or private CA signs the certificate — omit it for a publicly trusted certificate. |

**SAN requirement:** The hostname in the SAN list must be lowercase. Browsers normalize hostnames to lowercase during TLS validation — a case mismatch causes HTTP 401 failures at sign-in. The SAN must also include the server IP address.

```bash
sudo chown $(whoami) /etc/dspm/<hostname>.key
sudo chmod 644 /etc/dspm/<hostname>.key

sudo cp /etc/dspm/ca-bundle.crt /usr/local/share/ca-certificates/dspm-ca.crt
sudo update-ca-certificates
```

**Verifying certificate files before install:**

```bash
# Check that the SAN includes your hostname (lowercase) and server IP
openssl x509 -noout -text -in /etc/dspm/<hostname>.crt | grep -A5 "Subject Alternative"

# Verify the cert was signed by your CA bundle
openssl verify -CAfile /etc/dspm/ca-bundle.crt /etc/dspm/<hostname>.crt

# Verify the key matches the cert (both md5sums must match)
openssl pkey -pubout -in /etc/dspm/<hostname>.key 2>/dev/null | md5sum
openssl x509 -noout -pubkey -in /etc/dspm/<hostname>.crt | md5sum
```

For the full TLS specification including SAN rules and multi-CA environments, see [TLS Certificate Requirements](system/certificates.md).

## First admin account

Identify the email address and display name of the person who will be the first administrator. The installer prompts for both values during setup and provisions a **local** account automatically — it doesn't depend on Active Directory, Entra ID, or any other identity provider.

The installer generates a temporary password for this account and displays it once, in the [installation summary](quickinstall.md#step-5-review-the-installation-summary). The first admin must set a new password on their first sign-in.

To let users sign in with their Active Directory or Entra ID credentials instead, configure an identity provider after installation.

## License key

You need your Netwrix license key to download the installer; it's the first prompt in the installation wizard. Obtain it from your Netwrix account representative before starting.

## Connector port requirements

Ports the Access Analyzer server must reach on your data sources and directory services. Only open the ports for the connectors you plan to configure.

**Direction of traffic:**

- **Outbound** from the Access Analyzer server to the target source/host — **required** for all connectors.
- **Inbound** at the target source/host from the Access Analyzer server — **required** (the target must accept the connection on the listed port).
- **Two-way communication** between the Access Analyzer server and the target — **optional**. You can configure it for environments that require it, but no connector requires it.

| Connector | Port | Protocol | Notes |
| --- | --- | --- | --- |
| CIFS / SMB | 445 | TCP | SMB file sharing |
| Active Directory | 389 | TCP | LDAP |
| Active Directory | 636 | TCP | LDAPS (encrypted) — **required for AD authentication** |
| Active Directory | 135–139 | TCP | RPC |
| Active Directory | 49152–65535 | TCP | RPC dynamic ports |
| SharePoint Online | 443 | TCP | Microsoft Graph API |
| Entra ID | 443 | TCP | Microsoft identity platform |
| Local Groups | 5985 | TCP | WinRM (HTTP) |
| Local Groups | 5986 | TCP | WinRM (HTTPS) |

### Required Domains

All outbound endpoints use HTTPS (port 443). The Access Analyzer server must reach the following domains before installation. For firewall rule examples, see [Network and Port Requirements](system/network.md).

| Endpoint | Category | Purpose | When Required |
| --- | --- | --- | --- |
| `api.keygen.sh` | Keygen / Licensing | License validation API | Installation and updates |
| `oci.pkg.keygen.sh` | Keygen / Licensing | Netwrix OCI registry — Helm charts and application images | Installation and updates |
| `raw.pkg.keygen.sh` | Keygen / Licensing | Installer binary download | Installation and updates |
| `keygen-dist.c3c9112df8df715f42d1162cdce5dba1.r2.cloudflarestorage.com` | Keygen / Licensing CDN | Keygen artifact storage | Installation and updates |
| `api.github.com` | GitHub | GitHub API | Installation only |
| `github.com` | GitHub | Repository and release access | Installation only |
| `raw.githubusercontent.com` | GitHub | ArgoCD bootstrap manifests | Installation only |
| `release-assets.githubusercontent.com` | GitHub | Release asset downloads | Installation only |
| `pkg-containers.githubusercontent.com` | GitHub Container Registry | GitHub Packages CDN | Installation and updates |
| `ghcr.io` | GitHub Container Registry | Container images | Installation and updates |
| `get.k3s.io` | K3s / Rancher | K3s installer download | Installation only |
| `rpm.rancher.io` | K3s / Rancher | K3s package repository | Installation only |
| `storage.googleapis.com` | K3s / Rancher | K3s artifact storage | Installation only |

## Active Directory

Active Directory doesn't require an application registration. Prepare the following before connecting.

**Service account:** Create a dedicated, read-only service account in your directory. Access Analyzer never writes to your directory.

**Certificate:** Prepare a PEM file containing the CA certificate that issued your domain controller's LDAPS certificate. The setup wizard requires it to complete the connection test.

**Network access:** The Access Analyzer cluster must reach a domain controller in your AD forest over LDAPS (port 636).

Collect the following values:

| Value | Description |
| --- | --- |
| **AD domain name** | Fully qualified domain name of your AD forest — for example, `corp.example.com`. Access Analyzer connects over LDAPS (port 636) automatically. |
| **Service account** | A read-only service account, in User Principal Name (UPN) format — for example, `aa26-svc@corp.example.com` |
| **Service account password** | — |
| **AD authentication certificate** | The CA certificate (PEM) that issued the domain controller's LDAPS certificate |

You don't need to look up the users base DN or the email attribute yourself. After you enter the domain, service account, and certificate, the wizard tests the connection and discovers both automatically.

## Entra ID

Complete the following steps in the Azure Portal before connecting Access Analyzer.

1. Open **Azure Portal** > **Entra ID** > **App registrations** > **New registration**.
2. Name the application and click **Register**.
3. Open the registration > **Authentication** > **Add a platform** > **Web**, and add two redirect URIs:
   - The URI shown on the Access Analyzer setup wizard's **Entra ID** step (`https://<your-hostname>/setup/entra-consent-callback`) — used once, during the admin-consent step.
   - `https://<your-hostname>/idps/callback` — used every time a user signs in with Entra ID.
4. Go to **Certificates & secrets** > **New client secret**. Set an expiry that fits your rotation policy and copy the value immediately — the portal shows it only once.

Collect the following values:

| Value | Where to find it |
| --- | --- |
| **Tenant ID** | Azure Portal > Entra ID > Overview > Directory (tenant) ID — the GUID, not the primary domain |
| **Application (client) ID** | App registration > Overview > Application (client) ID |
| **Client secret** | Created in step 4 |

Enter these values in the Access Analyzer setup wizard and click **Sign in with Microsoft and continue**. A popup prompts a **Global Administrator** or **Privileged Role Administrator** to sign in and grant consent for Access Analyzer to read the directory.

:::note
Register both redirect URIs before anyone signs in with Entra ID. The setup wizard's callback completes the connection; `/idps/callback` is Microsoft's redirect target for every subsequent sign-in — omitting it lets you finish setup but blocks sign-in with an `AADSTS50011` redirect URI mismatch.
:::
