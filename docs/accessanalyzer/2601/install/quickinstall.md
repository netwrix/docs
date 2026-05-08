---
title: "Quick Install"
description: "Install Access Analyzer on a fresh Linux VM with Active Directory authentication, end-to-end"
sidebar_position: 5
---

# Quick Install

This guide covers installing Access Analyzer on a fresh Linux VM with **Active Directory** as the identity provider.

## Prerequisites Checklist

Before running the installer, confirm the following:

- [ ] Server meets hardware and OS requirements
- [ ] Outbound HTTPS access confirmed to all required domains
- [ ] Server hostname is a fully qualified domain name (FQDN) that resolves to the server IP
- [ ] TLS certificate option chosen; certificate files prepared if using Bring Your Own
- [ ] AD/DC Root CA bundle file prepared and placed on the server
- [ ] Active Directory service account details collected
- [ ] First admin email address confirmed (must match the AD `mail` attribute exactly)
- [ ] Netwrix license key on hand

### System requirements

**Absolute installer minimums (enforced by preflight):** 6 vCPUs, 24 GB RAM, 20 GB free disk on `/`. The preflight check blocks installation if the system falls below these thresholds.

Choose a deployment size based on your environment:

| Size | CPU | Memory | Disk | Typical Environment |
| --- | --- | --- | --- | --- |
| **Small** | 8 cores | 24 GB | 1 TB SSD | Evaluation, pilots, up to ~1,000 assets |
| **Medium** | 16 cores | 48 GB | 1 TB SSD | Up to ~5,000 assets |
| **Large** | 32 cores | 64 GB | 1 TB SSD | 5,000+ assets / enterprise |

**Disk space** — the installer validates free space on multiple paths:

| Path | Minimum Free Space | Purpose |
| --- | --- | --- |
| `/` | 20 GB | Root filesystem |
| `/var` | 20 GB | K3s data, containers, logs |
| `/var/lib` | 20 GB | K3s data directory |
| `/var/log` | 5 GB | System and application logs |
| `/etc` | 1 GB | Configuration files |

**Network:** Outbound HTTPS (port 443) to required endpoints — see [Required Domains](#required-domains).

**License:** Valid Netwrix license key.

:::note
**Supported OS:** Ubuntu 24.04 LTS is the primary tested platform. Red Hat Enterprise Linux (RHEL) 8 and 9, CentOS, Fedora, and Debian stable releases are also compatible. Access Analyzer doesn't support AIX or non-Linux operating systems.
:::

:::note
If running on a hypervisor, configure **static memory allocation** (not dynamic/ballooned memory). See [Hardware and System Requirements](/docs/accessanalyzer/2601/install/system/requirements) for hypervisor-specific instructions.

- **VMware vSphere:** disable memory ballooning (`mem.balloon.enable = "FALSE"`)
- **Hyper-V:** use static memory (`Set-VMMemory -DynamicMemoryEnabled $false`)
:::

### DNS

The hostname you enter during installation must be a fully qualified domain name (FQDN) — it must contain at least one dot (for example, `analyzer.corp.example.com`). The installer rejects a plain hostname without a dot.

The hostname must resolve to the VM's IP address from:

- Client browsers — configure a DNS A record, or add an entry to each client's `hosts` file.
- In-cluster pods — the installer's CoreDNS rewrite handles these automatically. No customer action needed.

:::warning
Use a DNS hostname, **not an IP address**. The browser TLS handshake requires a hostname. Avoid the `.local` and `.localhost` TLDs — both break in-cluster DNS resolution and silently break sign-in flows.
:::

### TLS certificates

The installer offers three ways to provision the server's TLS certificate. Choose your option before gathering certificate materials — only **Bring your own certificate** requires preparation in advance.

| Option | What It Does | Best For | What to Prepare |
| --- | --- | --- | --- |
| **Generate self-signed** | Installer generates a certificate automatically — no CA involvement | Quick evaluations and proof-of-concept installs. Not for production — browsers will show a security warning | Nothing — installer handles it |
| **Sign with AD Certificate Services** | Installer generates a CSR and submits it to your organization's AD CS to be signed by your internal Enterprise CA | Enterprise environments where AD CS is already deployed and the server can reach the CA | AD CS must be reachable from the server; an account with certificate enrollment rights |
| **Bring your own certificate** | You provide a pre-existing certificate, private key, and CA bundle | Environments with a centralized PKI team, or where AD CS isn't available | Three PEM files — see below |

:::note
**AD/DC Root CA Bundle is always required regardless of which TLS option you choose.** Even if the installer generates your server certificate, it still needs a separate CA file to trust the connection to your domain controller. See [Active Directory information](#bring-your-own-certificate-file-requirements).
:::

#### Bring your own certificate: file requirements

If you selected **Bring your own certificate**, prepare the following three files and place them in `/opt/dspm-tls/` on the server before running the installer:

```bash
sudo mkdir -p /opt/dspm-tls
```

| File | What It Is |
| --- | --- |
| `<hostname>.crt` | Server identity certificate in PEM format. The Subject Alternative Name (SAN) list must include the hostname **in lowercase** and the server's IP address. |
| `<hostname>.key` | Private key paired with the certificate (PEM). The OS user running the installer must be able to read it — not just `root`. |
| `ca-bundle.crt` | CA certificates that trust the server certificate. If the CA that signed the server certificate and the CA that signed the domain controller's LDAPS certificate are different, concatenate both — see [Active Directory information](#bring-your-own-certificate-file-requirements). |

**SAN requirement:** The hostname in the SAN list must be lowercase. Browsers normalize hostnames to lowercase during TLS validation — a case mismatch causes HTTP 401 failures at sign-in. The SAN must also include the server IP address.

```bash
sudo chown $(whoami) /opt/dspm-tls/<hostname>.key
sudo chmod 644 /opt/dspm-tls/<hostname>.key

sudo cp /opt/dspm-tls/ca-bundle.crt /usr/local/share/ca-certificates/dspm-ca.crt
sudo update-ca-certificates
```

**Verifying certificate files before install:**

```bash
# Check that the SAN includes your hostname (lowercase) and server IP
openssl x509 -noout -text -in /opt/dspm-tls/<hostname>.crt | grep -A5 "Subject Alternative"

# Verify the cert was signed by your CA bundle
openssl verify -CAfile /opt/dspm-tls/ca-bundle.crt /opt/dspm-tls/<hostname>.crt

# Verify the key matches the cert (both md5sums must match)
openssl pkey -pubout -in /opt/dspm-tls/<hostname>.key 2>/dev/null | md5sum
openssl x509 -noout -pubkey -in /opt/dspm-tls/<hostname>.crt | md5sum
```

For the full TLS specification including SAN rules and multi-CA environments, see [TLS Certificate Requirements](system/certificates.md).

### Active Directory information

Gather these values from your directory team before starting. The installer wizard prompts for each one.

| Field | What It Is | Example |
| --- | --- | --- |
| LDAP URL | Address of your domain controller. Use port 636 (LDAPS, encrypted) — strongly recommended; port 389 (plain LDAP) is available if LDAPS isn't configured | `ldaps://dc.corp.example.com:636` |
| Bind DN | Full Distinguished Name of a read-only service account | `CN=svc-dspm,OU=ServiceAccounts,DC=corp,DC=example,DC=com` |
| Bind Password | Password for the service account | — |
| Users Base DN | LDAP container where user accounts are stored | `CN=Users,DC=corp,DC=example,DC=com` |
| Email Attribute | LDAP attribute storing the user's email address (usually `mail`) | `mail` |
| AD/DC Root CA Bundle | Root CA certificate that signed the domain controller's LDAPS certificate. Required for all TLS options | `/opt/dspm-tls/ca-bundle.crt` |

**Bind DN format:** The installer requires full Distinguished Name (DN) format — for example, `CN=svc-dspm,OU=ServiceAccounts,DC=corp,DC=example,DC=com`. The installer doesn't accept User Principal Name (UPN) format (`user@domain.com`). The DN must exactly match the account's record in Active Directory.

**AD/DC Root CA Bundle:** To identify which CA signed the domain controller's LDAPS certificate, run this from the Access Analyzer server:

```bash
openssl s_client -connect <dc-hostname>:636 -showcerts </dev/null 2>/dev/null \
  | openssl x509 -noout -issuer
```

Ask your AD or PKI team for that CA's root certificate in PEM format. Place it at `/opt/dspm-tls/ca-bundle.crt`.

If the server certificate CA and the DC LDAPS CA are the **same**, one file covers both:

```bash
sudo cp app-ca.crt /opt/dspm-tls/ca-bundle.crt
```

If they are **different CAs**, concatenate both into a single file:

```bash
cat app-ca.crt ldaps-ca.crt > /opt/dspm-tls/ca-bundle.crt
```

### First admin account

Identify the email address and display name of the person who will be the first administrator. The installer prompts for both values during setup and provisions the account automatically. That person signs in using their Active Directory password — no separate password is needed.

The email address must match the `mail` attribute of the person's Active Directory account exactly, including case.

### License key

You need your Netwrix license key to download the installer; it's the first prompt in the installation wizard. Obtain it from your Netwrix account representative before starting.

### Connector port requirements

Ports the Access Analyzer server must be able to reach on your data sources and directory services. Only open the ports for the connectors you plan to configure.

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

### Internal port requirements

These ports handle service-to-service communication within the Access Analyzer VM. The deployment requires no external firewall rules — the installer exposes only port 443 (Traefik) externally.

| Port | Protocol | Service | Description |
| --- | --- | --- | --- |
| 443 | TCP | Traefik | HTTPS ingress for web UI and API |
| 6443 | TCP | K3s API | Kubernetes API server |
| 8090 | TCP | ArgoCD | ArgoCD UI (via port-forward) |
| 5432 | TCP | PostgreSQL | Database connections |
| 8123 | TCP | ClickHouse | HTTP interface |
| 9000 | TCP | ClickHouse | Native protocol |
| 6379 | TCP | Redis | Cache and queue connections |

For firewall rule examples, see [Network and Port Requirements](/docs/accessanalyzer/2601/install/system/network).

## Required Domains

All outbound endpoints use HTTPS (port 443). The Access Analyzer server must reach the following domains before installation. For firewall rule examples, see [Network and Port Requirements](/docs/accessanalyzer/2601/install/system/network).

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

---

## Installation

### Step 1: SSH into the server

Connect to the Access Analyzer server:

```bash
ssh <your-user>@<server-ip-or-hostname>
```

### Step 2: Download the installer

Replace `YOUR_NETWRIX_LICENSE_KEY` on the first line with your license key — that is the only value you need to change. Run the remaining lines as-is:

```bash
export LICENSE_KEY='YOUR_NETWRIX_LICENSE_KEY'
ARCH=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')
TMP_FILE=$(mktemp)
curl -sLf -o "$TMP_FILE" \
  "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-installer-linux-$ARCH?auth=license:${LICENSE_KEY}"
sudo install -m 0755 "$TMP_FILE" "/usr/local/bin/dspm-installer"
rm -f "$TMP_FILE"
```

### Step 3: Verify the download

```bash
dspm-installer --version
```

If this returns a version number, the binary is ready. If it returns an error, the download failed — verify your license key is correct and that the server has outbound access to all required domains listed earlier.

### Step 4: Run the installer

```bash
sudo dspm-installer
```

The installer presents an interactive wizard. Have your prerequisites ready before proceeding. Installation takes 15–30 minutes.

**Complete prompt reference:**

The **Example** column shows representative values for illustration — enter your own values when prompted.

| Prompt | Example | Notes |
| --- | --- | --- |
| License Key | `NWRX-XXXX-XXXX-XXXX` | Your Netwrix license key |
| Hostname | `aa2601.corp.example.com` | Must contain a dot; must be lowercase and match the cert SAN exactly |
| Identity Provider | `Active Directory` | Select from the list |
| LDAP URL | `ldaps://dc.corp.example.com:636` | Use port 636 (LDAPS) — port 389 is available but unencrypted |
| Bind DN | `CN=svc-dspm,OU=ServiceAccounts,DC=corp,DC=example,DC=com` | Full DN format required — not UPN format |
| Bind Password | *(your service account password)* | Input is silent — no characters appear |
| Users Base DN | `CN=Users,DC=corp,DC=example,DC=com` | The LDAP container where user accounts are stored |
| Email Attribute | `mail` | The LDAP attribute that holds the user's email address |
| First Admin Email | `admin@corp.example.com` | Must match their AD `mail` attribute exactly, including case |
| First Admin Name | `Jane Smith` | Used in the UI only |
| Advanced Settings | `No` *(standard installations)* | See the following note |
| TLS Certificate | *(select your provisioning method)* | See [TLS certificates](#tls-certificates) |
| TLS Certificate File *(Bring your own only)* | `/opt/dspm-tls/aa2601.crt` | |
| TLS Private Key File *(Bring your own only)* | `/opt/dspm-tls/aa2601.key` | |
| AD/DC Root CA Bundle Path | `/opt/dspm-tls/ca-bundle.crt` | Required for all TLS options |

:::note
**Advanced Settings** exposes the **Target Revision** prompt — pin to a specific chart version (for example, `1.5.0`), or leave empty to stay on the latest release. Use this to control when upgrades happen during your organization's patching cycle.
:::

### Step 5: Review the installation summary

When the installer finishes, it displays a summary screen. Review it before proceeding — it includes the application URL, required actions, and useful paths.

:::note
You can skip this step if you're signing in for the first time and only need to add users and assign roles. Return to complete the required actions before using `kubectl` or configuring firewall rules.
:::

```
DSPM Installation Complete

## Access Analyzer Web Application

• URL: https://<your-hostname>
• Administrator account provisioned for <first-admin-email>
• Check application status: kubectl get pods -n access-analyzer

## DSPM Command Line Tool

Path: /usr/local/bin/dspmctl

For detailed usage: /usr/local/bin/dspmctl --help

## Required Actions

• Ensure firewall allows inbound port 443
• Log out and back in (or run newgrp dspm) to activate kubectl access

## Granting kubectl Access to Additional Users

  sudo usermod -aG dspm <username>
  export KUBECONFIG=/etc/rancher/k3s/k3s.yaml

## Troubleshooting

Installation log: /var/log/dspm-installer.log
```

**Complete the required actions before signing in:**

1. Confirm that inbound port 443 is open on the server's firewall.
2. Log out of your current SSH session and log back in, or run `newgrp dspm`, to activate `kubectl` access for your user. Commands like `kubectl get pods` will not work until you do this.

### Step 6: Sign in

Navigate to `https://<your-hostname>` in a browser. Sign in using the first admin email address and the corresponding Active Directory password.

From here, add additional users under **Configuration** > **Users**.

#### Breakglass account

The installer also creates a bootstrap administrator account (`admin@dspm.local`) as a recovery mechanism. If the first admin account becomes inaccessible, use this account to regain access:

```bash
sudo kubectl get secret -n access-analyzer dspm-bootstrap-admin \
  -o jsonpath='{.data.password}' | base64 -d; echo
```

:::warning
Don't change the bootstrap account email address — doing so causes authentication failures.
:::

---

<!-- HIDDEN: Option B (Entra ID OIDC) is post-GA. Uncomment when ready to publish.

## Option B: Entra ID Authentication (OIDC)

### Step 1: Prepare the VM — upload certs and trust the CA

```bash
sudo mkdir -p /opt/dspm-tls

# Copy your three PEM files into /opt/dspm-tls/:
#   - <hostname>.crt   (Access Analyzer server certificate — SAN must match DSPM_HOSTNAME, lowercase)
#   - <hostname>.key   (private key — chown to install user, chmod 644)
#   - ca-bundle.crt    (CA bundle for the application certificate)

sudo chown $(whoami) /opt/dspm-tls/<hostname>.key
sudo chmod 644 /opt/dspm-tls/<hostname>.key

sudo cp /opt/dspm-tls/ca-bundle.crt /usr/local/share/ca-certificates/dspm-ca.crt
sudo update-ca-certificates
```

### Step 2: Set environment variables

```bash
export LICENSE_KEY="<Your-License-Key>"
export DSPM_HOSTNAME="<AA2601 FQDN, e.g. aa2601.corp.example.com>"
```

The Entra ID installer is invoked using CLI flags rather than environment variables. The flags are passed directly to the install command in Step 3.

**Entra ID installer flag reference:**

| Flag | Description | Example |
| --- | --- | --- |
| `--hostname` | Fully qualified domain name. Must be lowercase and match the cert SAN | `aa2601.corp.example.com` |
| `--tls-cert` | Full path to PEM server certificate | `/opt/dspm-tls/aa2601.crt` |
| `--tls-key` | Full path to PEM private key | `/opt/dspm-tls/aa2601.key` |
| `--ca-bundle` | Full path to CA bundle | `/opt/dspm-tls/ca-bundle.crt` |
| `--idp-type` | Identity provider type for Entra ID OIDC | `entra-oidc` |
| `--idp-alias` | Login button label. Letters, digits, hyphens, underscores, dots only | `entra-id` |
| `--entra-tenant-id` | Azure AD Directory (tenant) ID | `12345678-1234-1234-1234-123456789abc` |
| `--oidc-client-id` | Application (client) ID from the App Registration | `87654321-4321-4321-4321-cba987654321` |

### Step 3: Download and run the installer

Download the installer:

```bash
curl -sLfo /tmp/dspm-install.sh \
  "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:${LICENSE_KEY}"
```

Run the installer with Entra ID flags. When prompted for the client secret, paste the value — input is silent and the secret is never written to disk or shell history:

```bash
bash /tmp/dspm-install.sh \
  --hostname "${DSPM_HOSTNAME}" \
  --tls-cert /opt/dspm-tls/<hostname>.crt \
  --tls-key /opt/dspm-tls/<hostname>.key \
  --ca-bundle /opt/dspm-tls/ca-bundle.crt \
  --idp-type entra-oidc \
  --idp-alias entra-id \
  --entra-tenant-id <tenant-id> \
  --oidc-client-id <client-id>
```

Replace `<tenant-id>` with the Directory (tenant) ID and `<client-id>` with the Application (client) ID from your Azure App Registration. Installation takes 15–30 minutes.

:::note
The installer constructs the OIDC discovery URL automatically from `--entra-tenant-id`. No manual discovery URL is required.
:::

### Step 4: Verify the installation

```bash
kubectl get pods -A
kubectl get apps -n argocd
```

All pods should show `Running` or `Completed` status. All ArgoCD applications should be `Synced` and `Healthy`.

### Step 5: Sign in with Entra ID credentials

1. Navigate to `https://<DSPM_HOSTNAME>`.
2. Enter the email and password for a pre-provisioned Entra ID user and sign in.

END HIDDEN -->

---

## Roles

<!-- SYNC: configurations/identity-provider.md "Roles" -->
<!-- If you change this block, update the matching block in configurations/identity-provider.md -->

This table also appears at [Configuration > Identity Provider > Roles](../configurations/identity-provider.md#roles). This guide duplicates it here so it reads top-to-bottom.

| Role | Description |
| --- | --- |
| **Administrator** | Full access: system configuration (sources, scans, connectors, application settings) and user management (create, edit, activate, deactivate, and delete users; assign roles; pre-provision federated users). |
| **User Admin** | User and role management rights only: create, edit, activate, deactivate, and delete users; assign roles; pre-provision federated users. Does **not** have system configuration rights. The bootstrap `admin@dspm.local` account is assigned this role. |
| **Viewer** | Read-only access to data and reports. No configuration or user management rights. |

The **User Admin** role provides a dedicated account for user management with no system configuration access — useful for delegating user administration separately from system configuration.

<!-- END SYNC -->

## Troubleshooting

For certificate-specific issues, see [TLS Certificate Requirements — Troubleshooting](system/certificates.md#troubleshooting-certificate-issues).

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Sign-in returns HTTP 401 with correct credentials | SAN hostname is mixed-case; browser normalized it to lowercase | Re-issue the certificate with lowercase hostname in the SAN list |
| Installer exits with "Failed to read TLS private key" | Key file owned by `root`, installer runs as non-root user | `sudo chown <install-user> /opt/dspm-tls/<hostname>.key` |
| Sign-in silently fails with `PKIX path building failed` in Keycloak logs | CA bundle is missing the LDAPS DC's CA | Concatenate the DC's LDAPS CA into the bundle and re-run the installer |
| Browser rejects the application URL with a SAN mismatch error | Hostname entered as an IP address, or SAN doesn't include the hostname in use | Use a DNS hostname and verify the cert SAN list |
| Pods not starting after installation | Outbound HTTPS blocked to one or more required endpoints | Verify connectivity to all domains in [Required Domains](#required-domains) |
| Installer rejects the hostname | Hostname doesn't contain a dot — not a valid FQDN | Use a fully qualified domain name such as `analyzer.corp.example.com` |
| Installer rejects the Bind DN | UPN format (`user@domain.com`) entered instead of full DN | Use full Distinguished Name format: `CN=user,OU=ServiceAccounts,DC=corp,DC=example,DC=com` |

**Useful diagnostic commands:**

```bash
# View installer log
cat /var/log/dspm-installer.log

# Check pod status (access-analyzer namespace)
sudo kubectl get pods -n access-analyzer

# Check all namespaces
sudo kubectl get pods -A

# Check ArgoCD sync status
sudo kubectl get apps -n argocd

# View Keycloak logs
sudo kubectl logs -n access-analyzer statefulset/keycloak --tail=50
```

## Reinstalling

Before reinstalling, completely remove the existing installation:

```bash
sudo /usr/local/bin/k3s-dspm-uninstall.sh
sudo rm -rf /var/lib/rancher/k3s /opt/dspm ~/.kube/config
sudo rm -f /usr/local/bin/dspm-installer
```

See [Uninstalling Access Analyzer](uninstall.md) for the complete uninstall procedure.

After uninstalling:

- **Same VM**: your certificates are already in place at `/opt/dspm-tls/`. Skip the certificate preparation steps and restart at [Step 1](#step-1-ssh-into-the-server).
- **New VM, same CA**: upload the same certificate files to `/opt/dspm-tls/` on the new VM (see [TLS certificates](#tls-certificates)), then continue with [Step 1](#step-1-ssh-into-the-server).
