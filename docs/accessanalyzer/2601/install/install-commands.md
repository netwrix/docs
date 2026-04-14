---
title: "Installer Command Reference"
description: "Options you can pass to the Access Analyzer installer to customize your deployment"
sidebar_position: 20
---

# Installer Command Reference

Access Analyzer is installed using a single curl command that downloads and runs the installer. You can pass options to this command to customize how the product is deployed on your server. Most installations need only a license key and accept all defaults.

## Before You Run the Installer

### Set your license key

Export your license key as an environment variable before running any installer command. This keeps the key out of your shell history and makes it available to the installer automatically.

```bash
export LICENSE_KEY='[YOUR_LICENSE_KEY]'
```

Replace `[YOUR_LICENSE_KEY]` with the license key provided by Netwrix. All examples on this page assume you have exported this variable.

:::warning
Your license key authenticates access to the Netwrix package registry. Don't share it, commit it to version control, or leave it visible in script files.
:::

### Choose an installer version

**Without specifying a version**, the installer downloads the latest stable release automatically. This is appropriate for initial deployments and when you're ready to take the latest release:

```bash
# Set the Keygen license key variable
export LICENSE_KEY='[YOUR_LICENSE_KEY]'

# Run installation
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -
```

**To pin to a specific release** — recommended when you want to control when upgrades happen during your organization's patching cycle — export the version before running the same curl command:

```bash
# Set the Keygen license key variable
export LICENSE_KEY='[YOUR_LICENSE_KEY]'

# Pin to a specific release version
export DSPM_TARGET_REVISION='[VERSION]'

# Run installation
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -
```

:::note
The version number for each Access Analyzer release will be published here before general availability. Replace `[VERSION]` with the version string provided in the release notes.
:::

## Running the Installer

When you run the curl command above, the installer automatically:

1. Runs preflight checks to verify your system meets requirements
2. Installs Kubernetes (k3s v1.33.4, the version validated by Netwrix for this release)
3. Deploys ArgoCD as the GitOps controller
4. Pulls and deploys the Access Analyzer application stack from the Netwrix registry
5. Waits for all components to become healthy

Installation typically takes 15–30 minutes depending on network speed and hardware.

### Passing additional options

To customize the installation, add options after `bash -s --`. Everything after `--` is forwarded to the installer:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --dry-run
```

For options that take a value, such as custom storage paths:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- \
  --postgres-data-dir /mnt/ssd/postgres \
  --clickhouse-data-dir /mnt/nvme/clickhouse
```

The available options are described in the sections below.

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

The `--size` option scales CPU and memory allocations for all Access Analyzer workloads. The default value of `1` suits the minimum recommended hardware (16 GB RAM, 4 vCPUs). Increase this on servers with more resources:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --size 2
```

The valid range is `1` through `10`. Contact Netwrix Support for guidance on which value is appropriate for your server.

### Increasing log verbosity

If an installation fails and you need more detail to diagnose the problem, run with debug logging:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --log-level debug
```

The log is written to `/var/log/dspm-installer.log`. Accepted values are `debug`, `info`, `warn`, and `error`. The default is `info`. Terminal progress output is not affected — only the log file verbosity changes.

## If the Installer Stops with Warnings

By default, the installer stops when a preflight warning is detected. In some cases you may know the warning is acceptable for your environment. Use `--accept-warnings` to allow installation to continue:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --accept-warnings
```

Before using this option, identify which warning is being reported and review the guidance below:

| Warning | What it means | Recommended action |
|---|---|---|
| Overlay kernel module not loaded | The `overlay` module isn't active. k3s may load it automatically during installation. | Generally safe to accept. Monitor the installation for container errors. |
| Unrecognized Linux distribution | The installer didn't recognize your OS as a supported RHEL or Debian variant. | Verify your OS is a supported version before accepting. Contact Netwrix Support if unsure. |
| SELinux in enforcing mode | SELinux may block k3s container operations. | Accept only if you have confirmed your SELinux policy permits k3s. If unsure, set SELinux to permissive mode first. |
| Antivirus software detected | An antivirus agent is running and may interfere with container storage paths. | Configure exclusions for the k3s paths listed in the warning output before accepting. |

If you're unsure whether a warning is safe to accept, contact Netwrix Support before proceeding.

## Preflight Check Requirements

The installer checks the following before installation begins. Results are written to `/var/log/dspm-preflight.json`.

| Check | Fail | Warn |
|---|---|---|
| **RAM** | Less than 8 GB total | Less than 16 GB total |
| **CPU** | Fewer than 6 cores | — |
| **Disk** | Less than 20 GB free on `/var` | — |
| **Cgroups** | Not available at `/sys/fs/cgroup` | — |
| **Overlay kernel module** | — | Not loaded |
| **OS family** | — | Unrecognized Linux distribution |
| **SELinux** | — | SELinux in enforcing mode |
| **Antivirus** | — | Known antivirus software detected |
| **Network** | DNS resolution fails for a required domain | TCP connection timeout to a required domain |

A **FAIL** result stops the installer and must be resolved. A **WARN** result also stops the installer by default — see [If the Installer Stops with Warnings](#if-the-installer-stops-with-warnings) above.

For the full list of required network domains, see [Network and Port Requirements](/docs/accessanalyzer/2601/install/system/network).

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

## Environment Variables

If you prefer not to pass options on the command line — for example, in an automated deployment script — several options can be set as environment variables. These are picked up automatically if they are exported before the install command runs.

| Environment variable | Equivalent option |
|---|---|
| `LICENSE_KEY` | `--license-key` |
| `DRY_RUN` | `--dry-run` |
| `ACCEPT_WARNINGS` | `--accept-warnings` |
| `LOG_LEVEL` | `--log-level` |
| `POSTGRES_DATA_DIR` | `--postgres-data-dir` |
| `CLICKHOUSE_DATA_DIR` | `--clickhouse-data-dir` |
| `IDP_TYPE` | `--idp-type` |
| `IDP_ALIAS` | `--idp-alias` |

When the same option is set as both an environment variable and a command-line flag, the flag takes precedence.

## Identity Provider Flags

For per-IdP examples, secret collection behavior, and recovery instructions, see [Configure Identity Provider](identity-provider.md). The table below lists all available flags.

| Flag | Default | Description |
| --- | --- | --- |
| `--idp-type <type>` | — | Federation type: `entra-oidc`, `entra-saml`, `oidc`, `saml`, `ad`, `ldap` |
| `--idp-alias <label>` | — | Login button label |
| `--entra-tenant-id <id>` | — | Azure AD tenant GUID (Entra ID types) |
| `--oidc-client-id <id>` | — | OIDC application client ID |
| `--oidc-discovery-url <url>` | — | OIDC discovery endpoint URL (generic OIDC only) |
| `--saml-sso-url <url>` | — | SAML SSO endpoint URL |
| `--saml-entity-id <id>` | — | SAML entity ID / audience |
| `--saml-signing-cert <path>` | — | Path to signing certificate PEM file |
| `--saml-email-attribute <attr>` | `email` | SAML attribute carrying the user email |
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
