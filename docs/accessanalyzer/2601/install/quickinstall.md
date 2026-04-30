---
title: "Quick Install"
description: "Install Access Analyzer on a fresh Linux VM with Active Directory authentication, end-to-end"
sidebar_position: 5
---

# Quick Install

This guide walks through installing Access Analyzer on a fresh Linux VM with **Active Directory** as the identity provider.

For the CLI-flag reference, see [Configure Identity Provider](identity-provider.md).

## Prerequisites Checklist

Before running the installer, confirm the following.

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
:::

### TLS certificates

See [TLS Certificate Requirements](system/certificates.md) for the full specification. At a minimum you need:

- **Application TLS certificate** (PEM). The Subject Alternative Name (SAN) list must include `DSPM_HOSTNAME` **in lowercase** and the server's IP address.
- **Private key** paired with the certificate (PEM). Must be readable by the OS user running the installer, not just `root`.
- **CA bundle** (PEM). Must contain the CA that signed the application certificate. For AD authentication, the CA bundle must also contain the CA that signed the domain controller's LDAPS certificate. If these are different CAs, concatenate them:

  ```bash
  cat app-ca.crt ldaps-ca.crt > ca-bundle.crt
  ```

:::warning
`DSPM_HOSTNAME` must be a DNS hostname, **not an IP address**. The browser TLS handshake requires a hostname in the certificate's SAN. Avoid the `.local` and `.localhost` TLDs — both break in-cluster DNS resolution and silently break sign-in flows.
:::

### DNS

The value you pick for `DSPM_HOSTNAME` must resolve to the VM's IP address from:

- Client browsers — configure a DNS A record, or add an entry to each client's `hosts` file.
- In-cluster pods — handled automatically by the installer's CoreDNS rewrite. No customer action needed.

### Active Directory information

Gather these values from your directory team before starting:

- Domain controller hostname or IP, and port (636 LDAPS strongly recommended; 389 plain LDAP works but is unencrypted)
- Service account distinguished name (DN) — read-only access to the user directory is sufficient
- Service account password
- Base DN where your user accounts are stored (for example, `CN=Users,DC=example,DC=com`)
- Email attribute name (usually `mail`)

<!-- HIDDEN: Entra ID OIDC (Option B) is post-GA. Uncomment when ready to publish.

### Entra ID information (Option B only)

Before running the installer, register Access Analyzer as an application in your Azure tenant.

1. Sign in to the [Microsoft Entra admin center](https://entra.microsoft.com).
2. Navigate to **Identity** > **Applications** > **App registrations**.
3. Click **New registration**.
4. Enter the following:
   - **Name:** A display name for the application (for example, `Access Analyzer`)
   - **Supported account types:** Accounts in this organizational directory only
   - **Redirect URI:** Platform — **Web**. Value: `https://<DSPM_HOSTNAME>/auth/realms/dspm/broker/entra-id/endpoint`
5. Click **Register**.
6. On the app overview page, note the **Application (client) ID** and **Directory (tenant) ID** — you will need both when running the installer.
7. Navigate to **API permissions** > **Add a permission** > **Microsoft Graph** > **Delegated permissions**.
8. Add: `openid`, `profile`, `email`.
9. Click **Grant admin consent** to apply the permissions tenant-wide.
10. Navigate to **Certificates & secrets** > **New client secret**.
11. Set an expiry period, click **Add**, and copy the **secret value immediately** — it is only shown once.

**Values to collect before running the installer:**

| Value | Description | Where to Find |
| --- | --- | --- |
| **Tenant ID** | Directory (tenant) ID | Entra admin center > Overview > Directory (tenant) ID |
| **Client ID** | Application (client) ID | App registration > Overview > Application (client) ID |
| **Client Secret** | OIDC client secret — entered at the interactive prompt during install | Certificates & secrets — copy immediately after creation |

END HIDDEN -->

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

These ports handle service-to-service communication within the Access Analyzer VM. No external firewall rules are required — the installer exposes only port 443 (Traefik) externally.

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

All outbound endpoints use HTTPS (port 443). The following domains must be reachable from the Access Analyzer server before installation. For firewall rule examples, see [Network and Port Requirements](/docs/accessanalyzer/2601/install/system/network).

| Endpoint | Category | Purpose | When Required |
| --- | --- | --- | --- |
| `api.keygen.sh` | Keygen / Licensing | License validation API | Installation and updates |
| `oci.pkg.keygen.sh` | Keygen / Licensing | Netwrix OCI registry — Helm charts and application images | Installation and updates |
| `raw.pkg.keygen.sh` | Keygen / Licensing | Installer script download | Installation and updates |
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

## Active Directory Authentication

### Step 1: Prepare the VM — upload certs and trust the CA

For full details on each certificate file (SAN rules, ownership, CA bundle concatenation), see [TLS Certificate Requirements](system/certificates.md).

```bash
sudo mkdir -p /opt/dspm-tls

# Copy your three PEM files into /opt/dspm-tls/:
#   - <hostname>.crt   (Access Analyzer server certificate — SAN must match DSPM_HOSTNAME, lowercase)
#   - <hostname>.key   (private key — chown to install user, chmod 644)
#   - ca-bundle.crt    (concatenated: application CA + LDAPS DC CA)

sudo chown $(whoami) /opt/dspm-tls/<hostname>.key
sudo chmod 644 /opt/dspm-tls/<hostname>.key

sudo cp /opt/dspm-tls/ca-bundle.crt /usr/local/share/ca-certificates/dspm-ca.crt
sudo update-ca-certificates
```

### Step 2: Set environment variables

Paste and customize the following at the top of your terminal session. Every subsequent command references these variables.

```bash
# export DSPM_TARGET_REVISION="1.0.8"    # optional — omit to stay on latest; see version syntax below
export LICENSE_KEY="<Your-License-Key>"
export DSPM_HOSTNAME="<AA2601 FQDN, e.g. aa2601.corp.example.com>"
export TLS_CERT_FILE="/opt/dspm-tls/<hostname>.crt"
export TLS_KEY_FILE="/opt/dspm-tls/<hostname>.key"
export TLS_CA_BUNDLE_FILE="/opt/dspm-tls/ca-bundle.crt"
export IDP_TYPE="ad"
export IDP_ALIAS="<login-button-label>"                   # letters, digits, hyphens, underscores, dots only — no spaces
export LDAP_URL="ldaps://<dc-hostname-or-ip>:636"
export LDAP_BIND_DN="<Service-Account-DN>"                # e.g. CN=svc-dspm,OU=ServiceAccounts,DC=example,DC=com
export LDAP_USERS_DN="<Users-Base-DN>"                    # e.g. CN=Users,DC=example,DC=com
export LDAP_EMAIL_ATTRIBUTE="mail"
```

**Environment variable reference:**

| Variable | Description | Example |
| --- | --- | --- |
| `LICENSE_KEY` | Netwrix license key | `NWRX-XXXX-XXXX-XXXX` |
| `DSPM_HOSTNAME` | Fully qualified domain name. Must be lowercase and match the cert SAN | `aa2601.corp.example.com` |
| `TLS_CERT_FILE` | Full path to PEM server certificate | `/opt/dspm-tls/aa2601.crt` |
| `TLS_KEY_FILE` | Full path to PEM private key. Must be readable by the install user | `/opt/dspm-tls/aa2601.key` |
| `TLS_CA_BUNDLE_FILE` | Full path to CA bundle (application CA + LDAPS DC CA) | `/opt/dspm-tls/ca-bundle.crt` |
| `IDP_TYPE` | Identity provider type | `ad` |
| `IDP_ALIAS` | Login button label. Letters, digits, hyphens, underscores, dots only | `active-directory` |
| `LDAP_URL` | LDAPS URL for the domain controller | `ldaps://dc.corp.example.com:636` |
| `LDAP_BIND_DN` | Distinguished name of the read-only service account | `CN=svc-dspm,OU=ServiceAccounts,DC=corp,DC=example,DC=com` |
| `LDAP_USERS_DN` | Base DN for the OU containing user accounts | `CN=Users,DC=corp,DC=example,DC=com` |
| `LDAP_EMAIL_ATTRIBUTE` | LDAP attribute storing the user's email address | `mail` |
| `DSPM_TARGET_REVISION` | (Optional) Controls which version is installed and auto-upgraded to. Omit to stay on the latest release. | `1.0.8` |

**Version syntax for `DSPM_TARGET_REVISION`:**

| Value | Behavior |
| --- | --- |
| (unset) | Installs the latest release; auto-upgrades to the latest version with no limit |
| `1.0.8` | Pinned to exactly 1.0.8 — no auto-upgrade |
| `1.*` | Auto-upgrades to any 1.x version |

For most deployments, either omit this variable to stay on the latest release, or pin to a specific version (for example, `1.0.8`) to control when upgrades happen during your organization's patching cycle.

### Step 3: Download and run the installer

Download the installer:

```bash

# Download and install the DSPM installer binary for your Linux system architecture (x86_64 or ARM64) using your license key.
ARCH=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')
TMP_FILE=$(mktemp)
curl -sLf -o "$TMP_FILE" "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-installer-linux-$ARCH?auth=license:$LICENSE_KEY"
sudo install -m 0755 "$TMP_FILE" "/usr/local/bin/dspm-installer"
rm -f "$TMP_FILE"
 
# Launches the installation wizard
sudo dspm-installer --license-key '$LICENSE_KEY'
 
Use "dspm-installer [command] --help" for more information about a command.
```
<!-- HIDDEN:
Run it with one of the following two password options. Installation takes 15–30 minutes.

#### Option — Pipe the LDAP bind password (automated)

```bash
printf '<Service-Account-Password>\n' | bash /tmp/dspm-install.sh
```

Runs non-interactively. Suitable for scripted or automated installs. After the install completes, clear your shell history if others can read the session (`history -c`, and clear `~/.bash_history` or equivalent) — the password was part of the `printf` command line.

#### Option — Enter the password when prompted

```bash
bash /tmp/dspm-install.sh
```

The installer pauses part-way through and displays `Enter LDAP bind credential:`. Enter the password (input is silent — no characters appear) and press Enter. The password never enters shell history, the environment, or disk. Requires a human at the keyboard at that moment.

:::note
Setting `LDAP_BIND_CREDENTIAL` as an environment variable isn't an alternative. The installer always reads the bind password interactively, which overwrites any exported value. Use one of the two options above.
:::
END HIDDEN -->
### Step 4: Verify the installation

After the installer completes, confirm all pods are healthy:

```bash
kubectl get pods -A
kubectl get apps -n argocd
```

All pods should show `Running` or `Completed` status. All ArgoCD applications should be `Synced` and `Healthy`.

### Step 5: Sign in as the bootstrap User Admin and pre-provision users

<!-- SYNC: configurations/identity-provider.md "Sign in as the bootstrap User Admin" -->
<!-- If you change this block, update the matching block in configurations/identity-provider.md -->

The installer seeds a bootstrap account, `admin@dspm.local`, with the **User Admin** role. This account can create and manage other users but **can't** access system configuration. Use it on first log in to pre-provision your AD users, then sign out and sign back in as an Administrator for system-level work.

1. Retrieve the bootstrap admin password:

   ```bash
   sudo kubectl get secret -n access-analyzer dspm-bootstrap-admin \
     -o jsonpath='{.data.password}' | base64 -d; echo
   ```

2. Open a browser and navigate to `https://<DSPM_HOSTNAME>`.

3. Sign in with:
   - **Username**: `admin@dspm.local`
   - **Password**: (from step 1)

4. Complete first-login setup:
   - Scan the QR code with an authenticator app, enter a device name, submit the one-time code. **Save this enrollment** — you will need the same authenticator for any future bootstrap admin login.
   - Enter a first name and last name. **Don't change the email address.**

5. Pre-provision each user who should be able to sign in. For each user:
   - Click **+ Add User**.
   - Enter the Name and Email. The email must match the user's AD `mail` attribute exactly, **including case**.
   - Assign a role (see [Roles](#roles)).

   Assign at least one user the **Administrator** role — the bootstrap account can't access system configuration, so someone needs to. Assign at least one additional user the **User Admin** role if you want a non-bootstrap user to manage accounts going forward.

6. Sign out.

<!-- END SYNC -->

### Step 6: Sign in with AD credentials

1. Navigate to `https://<DSPM_HOSTNAME>`.
2. Enter the email and password for a pre-provisioned AD user and sign in.

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

### Step 5: Sign in as the bootstrap User Admin and pre-provision users

The same bootstrap account flow applies for Entra ID as for AD. Follow [Option A — Step 5](#step-5-sign-in-as-the-bootstrap-user-admin-and-pre-provision-users) with one difference: when pre-provisioning users, the email must match the address sent by Entra ID exactly, **including case** (not the AD `mail` attribute).

### Step 6: Sign in with Entra ID credentials

1. Navigate to `https://<DSPM_HOSTNAME>`.
2. Enter the email and password for a pre-provisioned Entra ID user and sign in.

END HIDDEN -->

---

## Roles

<!-- SYNC: configurations/identity-provider.md "Roles" -->
<!-- If you change this block, update the matching block in configurations/identity-provider.md -->

This table is also published at [Configuration > Identity Provider > Roles](../configurations/identity-provider.md#roles). This guide duplicates it here so it reads top-to-bottom.

| Role | Description |
| --- | --- |
| **Administrator** | Full access: system configuration (sources, scans, connectors, application settings) and user management (create, edit, activate, deactivate, and delete users; assign roles; pre-provision federated users). |
| **User Admin** | User and role management rights only: create, edit, activate, deactivate, and delete users; assign roles; pre-provision federated users. Does **not** have system configuration rights. The installer assigns this role to the bootstrap `admin@dspm.local` account. |
| **Viewer** | Read-only access to data and reports. No configuration or user management rights. |

The **User Admin** role exists to provide a dedicated account for user management with no system configuration access — useful for delegating user administration separately from system configuration. The installer seeds the bootstrap `admin@dspm.local` account as User Admin — you'll use it to pre-provision the rest of your users, including your first Administrator.

<!-- END SYNC -->

## Troubleshooting

For certificate-specific issues, see [TLS Certificate Requirements — Troubleshooting](system/certificates.md#troubleshooting-certificate-issues).

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Sign-in returns HTTP 401 with correct credentials | SAN hostname is mixed-case; browser normalized it to lowercase | Re-issue the certificate with lowercase hostname in the SAN list |
| Installer exits with "Failed to read TLS private key" | Key file owned by `root`, installer runs as non-root user | `sudo chown <install-user> /opt/dspm-tls/<hostname>.key` |
| Sign-in silently fails with `PKIX path building failed` in Keycloak logs | CA bundle is missing the LDAPS DC's CA (AD only) | Concatenate the DC's LDAPS CA into the bundle and re-run the installer with `--configure-idp-only` |
| Browser rejects the application URL with a SAN mismatch error | `DSPM_HOSTNAME` is an IP, or SAN doesn't include the hostname in use | Use a DNS hostname for `DSPM_HOSTNAME` and verify the cert SAN list |
| Installer rejects `--idp-alias` | Alias contains a space or special character | Use only letters, digits, hyphens, underscores, and dots |
| Sign-in fails after pre-provisioning | Pre-provisioned email doesn't match the directory attribute | Confirm the email matches exactly, including case |
| Entra ID login redirects fail | Redirect URI in App Registration doesn't match | Verify the redirect URI is `https://<DSPM_HOSTNAME>/auth/realms/dspm/broker/entra-id/endpoint` exactly |
| Entra ID login prompt doesn't appear | Client secret entered incorrectly or has expired | Re-run with `--configure-idp-only` and re-enter the secret; rotate the secret in Azure if expired |

For other identity provider failures, see [Configure Identity Provider — Troubleshooting](identity-provider.md#troubleshooting-idp-configuration).

## Reinstalling

- **Same VM**: your certificates are already in place at `/opt/dspm-tls/`. Skip Step 1 and restart at Step 2.
- **New VM, same CA**: upload the same three certificate files to `/opt/dspm-tls/` on the new VM (Step 1), then continue with Step 2.
