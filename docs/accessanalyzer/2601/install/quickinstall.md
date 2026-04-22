---
title: "Quick Install"
description: "Install Access Analyzer on a fresh Linux VM with Active Directory authentication, end-to-end"
sidebar_position: 5
---

# Quick Install

This guide walks through installing Access Analyzer on a fresh Linux VM with **Active Directory authentication**, using environment variables to configure the installer. Follow it top-to-bottom for a straight-forward copy-paste install.

For other identity providers (Entra ID, Okta, SAML, generic OIDC) or for the equivalent CLI-flag form, see [Configure Identity Provider](identity-provider.md).

## Prerequisites Checklist

Before running the installer, confirm the following.

### System requirements

**Absolute installer minimums (enforced by preflight):** 6 vCPUs, 24 GB RAM, 20 GB free disk on `/`. Installation is blocked if the system falls below these thresholds.

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

**Network:** Outbound HTTPS (port 443) to required endpoints — see [Required Domains](#required-domains) below.

**License:** Valid Netwrix license key.

:::note
**Supported OS:** Ubuntu 24.04 LTS is the primary tested platform. Red Hat Enterprise Linux (RHEL) 8 and 9, CentOS, Fedora, and Debian stable releases are also compatible. AIX and non-Linux operating systems are not supported.
:::

:::note
If running on a hypervisor, configure **static memory allocation** (not dynamic/ballooned memory). See [Hardware and System Requirements](/docs/accessanalyzer/2601/install/system/requirements) for hypervisor-specific instructions.
:::

### Active Directory information

Gather these values from your directory team before starting:

- Domain controller hostname or IP, and port (636 LDAPS strongly recommended; 389 plain LDAP works but is unencrypted)
- Service account distinguished name (DN) — read-only access to the user directory is sufficient
- Service account password
- Base DN where your user accounts are stored (for example, `CN=Users,DC=example,DC=com`)
- Email attribute name (usually `mail`)

### TLS certificates

See [TLS Certificate Requirements](system/certificates.md) for the full specification. At a minimum you need:

- **Application TLS certificate** (PEM). The Subject Alternative Name (SAN) list must include `DSPM_HOSTNAME` **in lowercase** and the server's IP address.
- **Private key** paired with the certificate (PEM). Must be readable by the OS user running the installer, not just `root`.
- **CA bundle** (PEM). Must contain **both** the CA that signed the application certificate **and** the CA that signed the domain controller's LDAPS certificate. If these are different CAs in your environment, concatenate them into one file:

  ```bash
  cat app-ca.crt ldaps-ca.crt > ca-bundle.crt
  ```

:::warning
`DSPM_HOSTNAME` must be a DNS hostname, **not an IP address**. The browser TLS handshake requires a hostname in the certificate's SAN. The AD DC's LDAPS endpoint can still be reached by IP in `LDAP_URL` — that is a different TLS context governed by the CA bundle.
:::

Avoid the `.local` and `.localhost` TLDs. Both break in-cluster DNS resolution and silently break OIDC login flows.

### DNS

The value you pick for `DSPM_HOSTNAME` must resolve to the VM's IP address from:

- Client browsers — configure a DNS A record, or add an entry to each client's `hosts` file.
- In-cluster pods — handled automatically by the installer's CoreDNS rewrite. No customer action needed.

### Connector port requirements

Ports the Access Analyzer server must be able to reach on your data sources and directory services. Only open the ports for the connectors you plan to configure.

**Direction of traffic:**

- **Outbound** from the Access Analyzer server to the target source/host — **required** for all connectors.
- **Inbound** at the target source/host from the Access Analyzer server — **required** (the target must accept the connection on the listed port).
- **Two-way communication** between the Access Analyzer server and the target — **optional**. Can be configured for environments that require it, but not required for any connector.

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

These ports are used within the Access Analyzer VM for service-to-service communication. No external firewall rules are required — only port 443 (Traefik) is exposed externally.

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

## Step 1: Prepare the VM — upload certs and trust the CA

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

## Step 2: Set environment variables

Paste and customize the following at the top of your terminal session. Every subsequent command references these variables.

```bash
export DSPM_TARGET_REVISION="<version, e.g. 0.3.*-dev or leave unset for latest>"
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

## Step 3: Download and run the installer

Download the installer:

```bash
curl -sLfo /tmp/dspm-install.sh \
  "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:${LICENSE_KEY}"
```

Run it with one of the two password options below. Installation takes 15–30 minutes.

### Option A — Pipe the LDAP bind password (automated)

```bash
printf '<Service-Account-Password>\n' | bash /tmp/dspm-install.sh
```

Runs non-interactively. Suitable for scripted or automated installs. After the install completes, clear your shell history if others can read the session (`history -c`, and clear `~/.bash_history` or equivalent) — the password was part of the `printf` command line.

### Option B — Type the password when prompted

```bash
bash /tmp/dspm-install.sh
```

The installer pauses part-way through and displays `Enter LDAP bind credential:`. Type the password (input is silent — no characters are echoed) and press Enter. The password is never placed in shell history, environment, or disk. Requires a human at the keyboard at that moment.

:::note
Setting `LDAP_BIND_CREDENTIAL` as an environment variable is not an alternative. The installer always reads the bind password interactively, which overwrites any exported value. Use Option A or Option B.
:::

## Step 4: Verify the installation

After the installer completes, confirm all pods are healthy:

```bash
kubectl get pods -A
kubectl get apps -n argocd
```

All pods should show `Running` or `Completed` status. All ArgoCD applications should be `Synced` and `Healthy`.

## Step 5: Sign in as the bootstrap User Admin and pre-provision users

<!-- SYNC: configurations/identity-provider.md "Sign in as the bootstrap User Admin" -->
<!-- If you change this block, update the matching block in configurations/identity-provider.md -->

The installer seeds a bootstrap account, `admin@dspm.local`, with the **User Admin** role. This account can create and manage other users but **cannot** access system configuration. Use it on first login to pre-provision your AD users, then sign out and sign back in as an Administrator for system-level work.

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
   - Enter a first name and last name. **Do not change the email address.**

5. Pre-provision each user who should be able to sign in. For each user:
   - Click **+ Add User**.
   - Enter the Name and Email. The email must match the user's AD `mail` attribute exactly, **including case**.
   - Assign a role (see [Roles](#roles) below).

   Assign at least one user the **Administrator** role — the bootstrap account cannot access system configuration, so someone needs to. Assign at least one additional user the **User Admin** role if you want a non-bootstrap user to manage accounts going forward.

6. Sign out.

<!-- END SYNC -->

### Roles

<!-- SYNC: configurations/identity-provider.md "Roles" -->
<!-- If you change this block, update the matching block in configurations/identity-provider.md -->

This table is also published at [Configuration > Identity Provider > Roles](../configurations/identity-provider.md#roles). It is duplicated here so this guide reads top-to-bottom.

| Role | Description |
| --- | --- |
| **Administrator** | System configuration rights: configure sources, scans, connectors, application settings. Does **not** have user management rights. |
| **User Admin** | User and role management rights: create, edit, activate, deactivate, and delete users; assign roles; pre-provision federated users. Does **not** have system configuration rights. The bootstrap `admin@dspm.local` account is assigned this role. |
| **Viewer** | Read-only access to data and reports. No configuration or user management rights. |

**User Admin** and **Administrator** have non-overlapping responsibilities by design. Most deployments assign at least one user to each role. The bootstrap `admin@dspm.local` account is seeded as User Admin — you'll use it to pre-provision the rest of your users, including your first Administrator.

<!-- END SYNC -->

## Step 6: Sign in with AD credentials

1. Navigate to `https://<DSPM_HOSTNAME>`.
2. Click the login button labeled with your `IDP_ALIAS`.
3. Enter AD credentials for a pre-provisioned user.

## Troubleshooting

For certificate-specific issues, see [TLS Certificate Requirements — Troubleshooting](system/certificates.md#troubleshooting-certificate-issues).

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Sign-in returns HTTP 401 with correct credentials | SAN hostname is mixed-case; browser normalized it to lowercase | Re-issue the certificate with lowercase hostname in the SAN list |
| Installer exits with "Failed to read TLS private key" | Key file owned by `root`, installer runs as non-root user | `sudo chown <install-user> /opt/dspm-tls/<hostname>.key` |
| Sign-in silently fails with `PKIX path building failed` in Keycloak logs | CA bundle is missing the LDAPS DC's CA | Concatenate the DC's LDAPS CA into the bundle and re-run the installer with `--configure-idp-only` |
| Browser rejects the application URL with a SAN mismatch error | `DSPM_HOSTNAME` is an IP, or SAN does not include the hostname in use | Use a DNS hostname for `DSPM_HOSTNAME` and verify the cert SAN list |
| Installer rejects `--idp-alias` | Alias contains a space or special character | Use only letters, digits, hyphens, underscores, and dots |
| Sign-in fails after pre-provisioning | Pre-provisioned email does not match the AD `mail` attribute | Confirm the email matches exactly, including case |

For other identity provider failures, see [Configure Identity Provider — Troubleshooting](identity-provider.md#troubleshooting-idp-configuration).

## Reinstalling

- **Same VM**: your certificates are already in place at `/opt/dspm-tls/`. Skip Step 1 and restart at Step 2.
- **New VM, same CA**: upload the same three certificate files to `/opt/dspm-tls/` on the new VM (Step 1), then continue with Step 2.
