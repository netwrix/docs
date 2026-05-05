---
title: "Installer Command Reference"
description: "Options you can pass to the Access Analyzer installer to customize your deployment"
sidebar_position: 20
---

# Installer Command Reference

You install Access Analyzer using a single curl command that downloads and runs the installer. You can pass options to this command to customize how the product is deployed on your server. Most installations need only a license key and accept all defaults.

## Before You Run the Installer

### Set your license key

Export your license key as an environment variable before running any installer command. This keeps the key out of your shell history and makes it available to the installer automatically.

```bash
export LICENSE_KEY="[YOUR_LICENSE_KEY]"
```

Replace "[YOUR_LICENSE_KEY]" with the license key Netwrix provided. All examples on this page assume you have exported this variable.

:::warning
Your license key authenticates access to the Netwrix package registry. Don't share it, commit it to version control, or leave it visible in script files.
:::

### Choose an installer version

If you don't specify a version, the installer downloads the latest stable release automatically. This is appropriate for initial deployments and when you want to install the latest release:

```bash
# Set the Keygen license key variable
export LICENSE_KEY='[YOUR_LICENSE_KEY]'

# Download and install the DSPM installer binary for your Linux system architecture (x86_64 or ARM64) using your license key.
ARCH=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')
TMP_FILE=$(mktemp)
curl -sLf -o "$TMP_FILE" "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-installer-linux-$ARCH?auth=license:$LICENSE_KEY"
sudo install -m 0755 "$TMP_FILE" "/usr/local/bin/dspm-installer"
rm -f "$TMP_FILE"

# Launches the installation wizard 
sudo dspm-installer
```

Run `dspm-installer [command] --help` to view usage and available options for any command.

**To pin to a specific release** — recommended when you want to control when upgrades happen during your organization's patching cycle — export the version before downloading and running the installer:

```bash
# Set the Keygen license key variable
export LICENSE_KEY='[YOUR_LICENSE_KEY]'

# Pin to a specific release version
export TARGET_REVISION='[VERSION]'

# Download and install the DSPM installer binary for your Linux system architecture (x86_64 or ARM64) using your license key.
ARCH=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')
TMP_FILE=$(mktemp)
curl -sLf -o "$TMP_FILE" "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-installer-linux-$ARCH?auth=license:$LICENSE_KEY"
sudo install -m 0755 "$TMP_FILE" "/usr/local/bin/dspm-installer"
rm -f "$TMP_FILE"

# Launches the installation wizard
sudo dspm-installer
```

Run `dspm-installer [command] --help` to view usage and available options for any command.


Version strings control which release the installer installs and what auto-upgrades apply:

| Value | Behavior |
| --- | --- |
| (unset) | Defaults to 1.* — auto-upgrades within the 1.x line; a future 2.x release doesn't install automatically |
| `1.0.8` | Pinned to exactly 1.0.8 — no auto-upgrade |
| `1.*` | Auto-upgrades to any 1.x version |

For most deployments, either omit this variable to stay on the latest release, or pin to a specific version (for example, `1.0.8`) to control when upgrades happen during your organization's patching cycle.

## Environment Variables

You can set most options as environment variables instead of command-line flags. This is the recommended style for scripted or automated deployments — see the [Quick Install](quickinstall.md) for an end-to-end example.

Export the variables before running the installer. When you set the same option as both an environment variable and a command-line flag, the flag takes precedence.

| Environment variable | Equivalent flag | Example |
| --- | --- | --- |
| `LICENSE_KEY` | `--license-key` | `NWRX-XXXX-XXXX-XXXX` |
| `DSPM_HOSTNAME` | `--hostname` | `aa2601.corp.example.com` |
| `TARGET_REVISION` | `--target-revision` | `1.0.8` (pinned) or omit for latest |
| `SIZE` | `--size` | `1` (default), `2`, up to `10` |
| `TLS_CERT_FILE` | `--tls-cert` | `/opt/dspm-tls/aa2601.crt` |
| `TLS_KEY_FILE` | `--tls-key` | `/opt/dspm-tls/aa2601.key` |
| `TLS_CA_BUNDLE_FILE` | `--ca-bundle` | `/opt/dspm-tls/ca-bundle.crt` |
| `IDP_TYPE` | `--idp-type` | `ad`, `ldap` |
| `IDP_ALIAS` | `--idp-alias` | `corporate-ad` (no spaces) |
| `LDAP_URL` | `--ldap-url` | `ldaps://dc01.example.com:636` |
| `LDAP_BIND_DN` | `--ldap-bind-dn` | `CN=svc-dspm,OU=ServiceAccounts,DC=example,DC=com` |
| `LDAP_USERS_DN` | `--ldap-users-dn` | `CN=Users,DC=example,DC=com` |
| `LDAP_EMAIL_ATTRIBUTE` | `--ldap-email-attribute` | `mail` (default) |
| `LDAP_BIND_PASSWORD` | (secret — see Quick Install) | (see Quick Install) |
| `POSTGRES_DATA_DIR` | `--postgres-data-dir` | `/mnt/ssd/postgres` |
| `CLICKHOUSE_DATA_DIR` | `--clickhouse-data-dir` | `/mnt/nvme/clickhouse` |
| `ACCEPT_WARNINGS` | `--accept-warnings` | `true` |
| `LOG_LEVEL` | `--log-level` | `info` (default), `debug`, `warn`, `error` |
| `HTTP_PROXY` / `HTTPS_PROXY` | (no flag) | `http://proxy.example.com:8080` |
| `NO_PROXY` | (no flag) | `localhost,127.0.0.1,.svc,.cluster.local` |
| `SKIP_AV_CHECK` | (no flag) | `true` |
| `DRY_RUN` | `--dry-run` | `true` |

:::note
`LDAP_BIND_PASSWORD` is the only secret environment variable, and the installer doesn't actually honor it — the installer always reads the bind password via an interactive prompt or piped stdin, overwriting any exported value. See [Quick Install — Step 3](quickinstall.md#step-3-download-and-run-the-installer) for the two supported ways to provide the password.
:::

## Running the Installer

When you run the curl command, the installer automatically:

1. Runs preflight checks to verify your system meets requirements
2. Installs Kubernetes (k3s v1.33.4, the version Netwrix validated for this release)
3. Deploys ArgoCD as the GitOps controller
4. Pulls and deploys the Access Analyzer application stack from the Netwrix registry
5. Waits for all components to become healthy

Installation typically takes 15–30 minutes depending on network speed and hardware.

---
<!-- HIDDEN:
### Passing additional options

To customize the installation, add options after `bash -s --`. The installer receives everything after `--`:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --dry-run
```

For options that take a value, such as custom storage paths:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- \
  --postgres-data-dir /mnt/ssd/postgres \
  --clickhouse-data-dir /mnt/nvme/clickhouse
```

The following sections describe the available options.

### Validate before installing (dry run)

To check system readiness without making any changes, add `--dry-run`:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --dry-run
```

Dry run performs all preflight checks and shows what the installer would do, without modifying the system. Use this before deploying to production to confirm your server meets requirements.

## Customizing the Installation

### Directing database storage to a dedicated volume

By default, the PostgreSQL and ClickHouse databases store data on the root filesystem. For production deployments, direct each database to a dedicated volume to keep database growth from filling your root disk:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- \
  --postgres-data-dir /mnt/ssd/postgres \
  --clickhouse-data-dir /mnt/nvme/clickhouse
```

Each directory must already exist and be writable before the installer runs. The path must:

- Start with `/` (absolute path)
- Not be a system directory (`/bin`, `/etc`, `/usr`, `/var/log`, and others)
- Not contain special characters: `"`, `'`, `\`, `` ` ``, or `$`

### Scaling resources for larger servers

The `--size` option scales CPU and memory allocations for all Access Analyzer workloads. The default value of `1` suits the minimum recommended hardware (24 GB RAM, 6 vCPUs). Increase this on servers with more resources:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --size 2
```

The valid range is `1` through `10`. Contact Netwrix Support for guidance on which value is appropriate for your server.

### Increasing log verbosity

If an installation fails and you need more detail to diagnose the problem, run with debug logging:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --log-level debug
```

The installer writes the log to `/var/log/dspm-installer.log`. Accepted values are `debug`, `info`, `warn`, and `error`. The default is `info`. Terminal progress output isn't affected — only the log file verbosity changes.

END HIDDEN -->
---

## Identity Provider Flags

The following table lists every identity provider (IdP) flag the installer accepts. For end-to-end examples, see one of these walkthroughs:

- [Quick Install](quickinstall.md) — Active Directory deployment using environment variables (recommended for most customers)
- [Configure Identity Provider](identity-provider.md) — example commands for Active Directory and LDAP, plus recovery with `--configure-idp-only`

| Flag | Default | Description |
| --- | --- | --- |
| `--idp-type <type>` | — | Federation type: `ad`, `ldap` |
| `--idp-alias <label>` | — | Login button label |
| `--ldap-url <url>` | — | LDAP server URL |
| `--ldap-bind-dn <dn>` | — | Service account distinguished name |
| `--ldap-users-dn <dn>` | — | Base DN for user search |
| `--ldap-email-attribute <attr>` | `mail` | LDAP attribute carrying the user email |
| `--configure-idp-only` | — | Retry IdP configuration without reinstalling the cluster |

## Configuration File

If you run the installer on multiple servers with the same options, you can store common settings in `~/.dspm/installer.yaml` to avoid repeating them every time:

```yaml
# ~/.dspm/installer.yaml
log-level: info
postgres-data-dir: /mnt/ssd/postgres
clickhouse-data-dir: /mnt/nvme/clickhouse
size: 2
```

Don't store your license key in this file. Use the `LICENSE_KEY` environment variable instead.

**Precedence order** (highest to lowest): command-line flags > environment variables > configuration file > defaults.

## Preflight Check Requirements

The installer checks the following before installation begins. The installer writes results to `/var/log/dspm-preflight.json`.

| Check | Fail | Warn |
|---|---|---|
| **RAM** | Less than 24 GB total | Less than 48 GB total |
| **CPU** | Fewer than 6 cores | — |
| **Disk** | Less than 20 GB free on `/var` | — |
| **Cgroups** | Not available at `/sys/fs/cgroup` | — |
| **Overlay kernel module** | — | Not loaded |
| **OS family** | — | Unrecognized Linux distribution |
| **SELinux** | — | SELinux in enforcing mode |
| **Antivirus** | — | Known antivirus software detected |
| **Network** | DNS resolution fails for a required domain | TCP connection timeout to a required domain |

A **FAIL** result stops the installer. Resolve it before retrying. A **WARN** result also stops the installer by default — see [If the Installer Stops with Warnings](#if-the-installer-stops-with-warnings).

For the full list of required network domains, see [Network and Port Requirements](/docs/accessanalyzer/2601/install/system/network).

## If the Installer Stops with Warnings

By default, the installer stops when it detects a preflight warning. In some cases you may know the warning is acceptable for your environment. Use `--accept-warnings` to allow installation to continue:

```bash
sudo dspm-installer --accept-warnings
```

Before using this option, identify which warning the installer reports and review the following:

| Warning | What it means | Recommended action |
|---|---|---|
| Overlay kernel module not loaded | The `overlay` module isn't active. k3s may load it automatically during installation. | Generally safe to accept. Monitor the installation for container errors. |
| Unrecognized Linux distribution | The installer didn't recognize your OS as a supported RHEL or Debian variant. | Verify your OS is a supported version before accepting. Contact Netwrix Support if unsure. |
| SELinux in enforcing mode | SELinux may block k3s container operations. | Accept only if you have confirmed your SELinux policy permits k3s. If unsure, set SELinux to permissive mode first. |
| Antivirus software detected | An antivirus agent is running and may interfere with container storage paths. | Configure exclusions for the k3s paths listed in the warning output before accepting. |

If you're unsure whether a warning is safe to accept, contact Netwrix Support before proceeding.

## If the Installer Fails

When the installer exits with an error, check the log:

```bash
cat /var/log/dspm-installer.log
```

The exit code indicates which phase failed:

| Code | Phase | What to do |
|---|---|---|
| `0` | — | Installation completed successfully |
| `1` | General | Review the log for the specific error message |
| `10` | License | Verify your license key is correct and hasn't expired |
| `50` | k3s | Review the log and contact Netwrix Support |
| `60` | ArgoCD | Review the log and contact Netwrix Support |
| `70` | App startup | Applications didn't become healthy within 30 minutes. Run `kubectl get pods -n access-analyzer` to check pod status, then contact Netwrix Support |
| `71` | App startup | A pod entered a permanent failure state. Run `kubectl get pods -A` to identify it, then contact Netwrix Support |
| `80` | Preflight | Resolve the reported system requirement and retry |
| `90` | IdP configuration | IdP setup failed after the cluster was deployed. Check the log for the specific error, then use `--configure-idp-only` to retry |
