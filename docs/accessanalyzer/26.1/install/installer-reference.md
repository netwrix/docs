---
title: Installer Reference
description: The dspm-installer flags, environment variables, configuration file keys, exit codes, preflight checks, and log locations.
sidebar_position: 6
---

`dspm-installer` takes its settings from four places. A flag wins over an environment variable, an environment variable wins over the configuration file, and the configuration file wins over the built-in default. When the installer runs in a terminal, it prompts for any required value still missing; without a terminal, a missing required value is an error.

```bash
dspm-installer [flags]
dspm-installer wait-for-apps [flags]
dspm-installer update-cert [flags]
dspm-installer rollback-cert [flags]
dspm-installer --help
dspm-installer --version
```

There are no single-letter flags.

## Flags

Two environment variable names need care: `--hostname` reads `DSPM_HOSTNAME`, not `HOSTNAME`, because the shell sets `HOSTNAME` itself, and `--assume-yes` reads `DSPM_ASSUME_YES`, not `ASSUME_YES`.

| Flag | Environment variable | Default | Description |
|---|---|---|---|
| `--license-key` | `LICENSE_KEY` | none | Netwrix license key. Required. The installer validates it online before the install starts. |
| `--hostname` | `DSPM_HOSTNAME` | none | Fully qualified domain name users open in their browsers. The installer lowercases it before use. |
| `--first-admin-email` | `FIRST_ADMIN_EMAIL` | none | Email address of the first administrator. Required. Becomes that person's username. |
| `--first-admin-name` | `FIRST_ADMIN_NAME` | none | Full name of the first administrator. |
| `--tls-cert` | `TLS_CERT_FILE` | `/etc/dspm/tls.crt` | PEM TLS certificate file, full chain with the leaf certificate first. Requires `--tls-key`. |
| `--tls-key` | `TLS_KEY_FILE` | `/etc/dspm/tls.key` | PEM TLS private key file. Requires `--tls-cert`. |
| `--ca-bundle` | `TLS_CA_BUNDLE_FILE` | none | PEM certificate authority (CA) bundle. Needed when a private CA issued the certificate. |
| `--size` | `SIZE` | `medium` | Deployment size: `small`, `medium`, `large`, or `enterprise`. Case-insensitive. See [Size](requirements.md#size) for the CPU, RAM, and disk each size requires. |
| `--target-revision` | `TARGET_REVISION` | `1.*` | Release version to install, such as `1.5.0`. The default installs the latest 1.x release. Also appears as **Target Revision** under **Show advanced settings?**. |
| `--accept-warnings` | `ACCEPT_WARNINGS` | `false` | Continue past preflight warnings without asking. |
| `--assume-yes` | `DSPM_ASSUME_YES` | `false` | Skip the review screen that appears when the configuration file already supplies every required value. |
| `--dry-run` | `DRY_RUN` | `false` | Print the planned actions and exit without installing. Needs no TLS files and writes no configuration file. |
| `--log-level` | `LOG_LEVEL` | `info` | Detail written to the log file: `debug`, `info`, `warn`, or `error`. |
| `--postgres-data-dir` | `POSTGRES_DATA_DIR` | none | Custom directory for the application database's data. |
| `--clickhouse-data-dir` | `CLICKHOUSE_DATA_DIR` | none | Custom directory for the analytics store's data. |
| `--log-exports-storage` | `LOG_EXPORTS_STORAGE` | none | Persistent volume claim (PVC) size for log exports, such as `10Gi`. |
| `--skip-preflight` | `SKIP_PREFLIGHT` | `false` | Skip the preflight checks. Intended for testing only. |
| `--version` | — | — | Print the installer version and exit. |
| `--help` | — | — | Print flag help and exit. |

The defaults for `--tls-cert` and `--tls-key` apply only when you omit both flags. Supplying one without the other is an error: `--tls-cert and --tls-key must both be provided together`.

### Advanced Flags

These flags control the underlying Kubernetes platform, ArgoCD, and Helm chart the installer manages. Most installs never need them — they exist for troubleshooting, custom environments, and uninstalling.

| Flag | Environment variable | Default | Description |
|---|---|---|---|
| `--k3s-version` | none | `v1.33.4+k3s1` | K3s version to install. |
| `--k3s-name` | none | `dspm` | K3s service and instance name. |
| `--kubeconfig` | `KUBECONFIG` | `/etc/rancher/k3s/k3s.yaml` | Path to the kubeconfig file. |
| `--argocd-version` | none | `3.2.0` | ArgoCD image tag. |
| `--argocd-namespace` | none | `argocd` | Kubernetes namespace for ArgoCD. |
| `--argocd-reconciliation-timeout` | none | `1h` | How often ArgoCD self-heals configuration drift. The version-poller CronJob detects new releases separately. |
| `--disable-dex` | none | `true` | Disable the Dex identity provider. |
| `--disable-notifications` | none | `true` | Disable the ArgoCD notifications controller. |
| `--helm-namespace` | none | `default` | Kubernetes namespace for the Helm chart. |
| `--helm-values` | none | none | Path to a Helm values YAML file. |
| `--chart` | none | none | Chart name, for custom chart sources. |
| `--repo` | none | none | Helm repository URL, for custom chart sources. |
| `--release` | none | none | Helm release name, for custom chart sources. |
| `--local-charts-dir` | `LOCAL_CHARTS_DIR` | none | Mount a local Helm chart directory into `argocd-repo-server` and install from it with a `file://` source, instead of a remote repository. |
| `--use-mirrored-images` | none | `true` | Pull container images from the Netwrix mirror registry. |
| `--set` | none | none | Inline Helm value override in `key=value` form. Repeatable. |
| `--uninstall` | `DSPM_UNINSTALL` | `false` | Uninstall k3s and permanently delete all Access Analyzer data. Prompts for confirmation unless you pass `--force`. |
| `--force` | `DSPM_FORCE` | `false` | Skip the confirmation prompt for `--uninstall`. |

A custom data directory must be an absolute path to an existing, writable directory. It can't be `/`, can't sit under `/bin`, `/sbin`, `/boot`, `/dev`, `/etc`, `/lib`, `/lib64`, `/proc`, `/root`, `/run`, `/sys`, `/usr`, or `/var/log`, and can't contain quotes, backslashes, dollar signs, or backticks.

### Value Checks

The installer rejects bad values before it changes anything on the server.

| Value | Rules |
|---|---|
| License key | Letters, digits, hyphens, and underscores only. The installer checks it online; an expired, suspended, unknown, or invalid key stops the install with exit code 10. If the installer can't reach the licensing service, it warns and continues. |
| Hostname | Must contain a dot, must not be an IP address, must not end in `.localhost`, and must not exceed 253 characters. Each dot-separated part is 1 to 63 letters, digits, or hyphens and can't start or end with a hyphen. |
| First administrator email | A plain address such as `admin@corp.example.com`, with a dotted domain and without a display name, quotes, backslashes, or spaces. The installer lowercases it before use. |
| TLS certificate and key | PEM. The pair must match, the certificate must not be expired, and its Subject Alternative Names must include the hostname. A certificate that expires within 30 days produces a warning in the log. |
| CA bundle | PEM with at least one certificate. The TLS certificate must chain to it. If the TLS certificate is self-signed and you give no bundle, the installer uses the certificate as its own bundle. |

## Configuration File

The installer keeps its answers in `/etc/dspm/installer.yaml`. It writes the file itself: after every confirmed prompt in an interactive run, or once after license validation in a flag-driven run. On the first save it prints `Progress saved to /etc/dspm/installer.yaml — future runs will pre-fill these values.` A later run reads the file and asks only for what's still missing, so a canceled install resumes where it stopped.

Keys are the flag names. The installer writes `license-key`, `hostname`, `first-admin-email`, `first-admin-name`, `tls-cert`, `tls-key`, and `ca-bundle`, plus `target-revision` when you pin a version other than `1.*`. It keeps any keys you add, and never saves operational flags such as `--accept-warnings`, `--assume-yes`, `--dry-run`, and `--skip-preflight`. You can also write the file by hand before the first run.

```yaml title="/etc/dspm/installer.yaml"
license-key: XXXX-XXXX-XXXX-XXXX-XXXX-V3
hostname: dspm.corp.example.com
first-admin-email: admin@corp.example.com
first-admin-name: Alice Smith
tls-cert: /etc/dspm/tls.crt
tls-key: /etc/dspm/tls.key
ca-bundle: /etc/dspm/ca-bundle.pem
```

The file holds the license key, so the installer creates it owned by root with mode `0600` inside a `0755` directory. A later run without `sudo` can't read it; the error ends with `re-run with sudo, or remove the file`. If `/etc/dspm/installer.yaml` doesn't exist, the installer also looks for `~/.dspm/installer.yaml`. `--dry-run` never writes the file.

When the file supplies every required value and the installer runs in a terminal, it first asks **Show advanced settings?** (the default is **No**), then shows the review screen and asks **Everything look good?** before it starts. Declining the review prints `Config file /etc/dspm/installer.yaml was loaded — edit or delete that file, or override individual values with flags.` Pass `--assume-yes` to skip both questions.

## Exit Codes

| Code | Meaning |
|---|---|
| 0 | Success. |
| 1 | General failure: an invalid flag value, a hostname or TLS validation error, a required value missing in a non-interactive run, or prompts canceled with Esc or Ctrl-C (`installation cancelled`). |
| 10 | License key error. The key is expired, suspended, not found, or invalid. |
| 20 | The release version you requested with `--target-revision` isn't available for this license key. |
| 50 | The installer couldn't install the platform, or the platform didn't become ready within 5 minutes. |
| 60 | The installer couldn't install a platform component. |
| 70 | The Access Analyzer services didn't all become healthy within 30 minutes, or you pressed Ctrl-C while waiting for them. |
| 71 | A service stayed in a failed state for 5 minutes. Only `wait-for-apps` returns this code; during an install the same condition exits 70. |
| 80 | Preflight checks failed (`preflight checks failed`), or you didn't accept warnings (`preflight warnings detected; use --accept-warnings to continue` or `installation stopped at preflight warnings`). |

The `update-cert` and `rollback-cert` commands return their own codes. See [The `update-cert` command](#the-update-cert-command) and [The `rollback-cert` command](#the-rollback-cert-command).

## Preflight Checks

Eleven checks run before the installer changes anything on the server, in the order the following table lists them. Each ends as PASS, WARN, or FAIL. The installer prints only WARN and FAIL results, as `  [FAIL] <check> <message>` or `  [WARN] <check> <message>`. Any FAIL stops the install; `--accept-warnings` doesn't override it. Any WARN stops it too unless you answer **Yes** to **Continue despite these warnings?** or pass `--accept-warnings`.

The installer compares RAM and disk against their thresholds with a 5% tolerance, so a virtual machine provisioned at exactly the stated figure passes. It compares CPU cores exactly.

| Check | What it tests | Result when not met | Message |
|---|---|---|---|
| `ram` | Total RAM against the minimum for the chosen size. | FAIL | `<n> GB RAM; the <size> size requires <n> GB` |
| `cpu` | CPU cores against the minimum for the chosen size. | FAIL | `<n> CPU cores; the <size> size requires <n>` |
| `disk` | Free space on `/var/lib` against the 40 GB floor. | FAIL | `<n> GB free on /var/lib; at least 40 GB is needed to install` |
| `disk` | Free space on `/var/lib` against the size's recommended disk. | WARN | `<n> GB free on /var/lib; the <size> size is designed to hold <n> GB, so it will run out as data accumulates` |
| `cgroups` | The kernel exposes cgroups at `/sys/fs/cgroup`. | FAIL | `cgroups not available at /sys/fs/cgroup` |
| `kernel-modules` | The kernel has the `br_netfilter` and `overlay` modules loaded or built in. The install loads missing modules itself, so this check warns only when it can't inspect a module, or during a dry run when a module isn't loaded. | WARN | `kernel module issues: <module>: could not check module: <error>` or `kernel module issues: <module>: not loaded (dry run; will not be modprobed)` |
| `os` | The Linux distribution belongs to a recognized family. | WARN | `unrecognised Linux distribution; installation may not be supported` |
| `selinux` | SELinux isn't in enforcing mode. | WARN | The message says SELinux is enforcing and asks you to allow the platform's container policy or set SELinux to permissive. |
| `antivirus` | No known antivirus product is installed or running: `mdatp`, CrowdStrike, ClamAV, Sophos, Carbon Black, or Trend Micro. | WARN | `antivirus software detected: <product> (exclusion hint: <hint>)` |
| `network` | Each of the 18 required hosts resolves in DNS and accepts a connection on port 443 within 5 seconds. | FAIL when a name doesn't resolve; WARN when a connection times out or the host refuses it | `DNS resolution failed for: <hosts>` or `connection failed (timeout/refused) for: <hosts>` |
| `domain-join` | Whether the server belongs to an Active Directory domain. Informational only. | — | `no AD domain detected`, or a message naming the detected domain |
| `clock-sync` | A time-sync service (`chronyd`, `ntpd`, or `systemd-timesyncd`) is running. | WARN | `no clock sync daemon detected; Kerberos authentication requires clocks within 5 minutes of the AD domain controller — install chronyd, ntpd, or systemd-timesyncd to eliminate clock-skew risk` |

When the `antivirus` check finds a product, add these paths to that product's exclusion list: `/var/lib/rancher/k3s/agent/containerd`, `/var/lib/rancher/k3s/data`, and `/run/k3s/containerd`. The hint in the message names the product's own command or console for adding exclusions.

The [Requirements](requirements.md) page lists the 18 hosts the `network` check connects to and the CPU, RAM, and disk figures for each size.

## The `wait-for-apps` Command

`wait-for-apps` repeats the readiness wait without reinstalling anything. Use it when an install stopped while waiting for the services, or to check whether they're all ready.

```bash
sudo dspm-installer wait-for-apps
```

It prints `Waiting for applications to become Synced and Healthy…` and exits when every service is healthy.

| Flag | Default | Description |
|---|---|---|
| `--timeout` | `30m0s` | Maximum time to wait. |

Exit codes: 0 when everything is healthy, 70 when the timeout passes, 71 when a service stays in a failed state for 5 minutes, and 1 for any other error. Ctrl-C exits 1.

## The `update-cert` Command

`update-cert` installs a new TLS certificate on a running Access Analyzer installation, without re-running the full installer. Use it to replace a certificate that's expiring or expired, to replace one pods don't trust, or to swap a self-signed certificate for a CA-issued one.

```bash
sudo dspm-installer update-cert \
  --tls-cert /etc/dspm/tls.crt \
  --tls-key /etc/dspm/tls.key \
  --ca-bundle /etc/dspm/internal-root-ca.pem
```

`update-cert` validates the certificate and key pair, confirms the certificate's Subject Alternative Names cover the installed hostname, snapshots the certificate the cluster serves, applies the new certificate and CA bundle, restarts every workload that mounts the CA bundle, and verifies the result before it exits. See [Rotate the TLS certificate](rotate-the-tls-certificate.md) for the full procedure, including how to roll back with `rollback-cert`.

| Flag | Default | Description |
|---|---|---|
| `--tls-cert` | (required) | PEM certificate file, full chain with the leaf certificate first. |
| `--tls-key` | (required) | PEM private key file matching `--tls-cert`. |
| `--ca-bundle` | none | PEM CA bundle the certificate chains to. Required unless the certificate is self-signed. |
| `--hostname` | from `/etc/dspm/installer.yaml` | Hostname the certificate must cover. |
| `--port` | `443` | External HTTPS port for probing the certificate the cluster serves. |
| `--timeout` | `30m0s` | Time budget for the whole rotation. A rollback, if needed, gets its own budget of the same size. |
| `--dry-run` | off | Validate the certificate and print the plan without changing the cluster. Doesn't need cluster access. |
| `--no-rollback` | off | Leave the new certificate in place if verification fails, instead of restoring the previous one automatically. |
| `--kubeconfig` | `/etc/rancher/k3s/k3s.yaml` | Path to the kubeconfig file. |
| `--argocd-namespace` | `argocd` | Kubernetes namespace for ArgoCD. |

If verification fails, `update-cert` restores the previous certificate from its snapshot and exits with a code that tells you what state the cluster is in:

| Code | Meaning |
|---|---|
| 0 | `update-cert` applied and verified the new certificate. |
| 1 | A check failed before `update-cert` wrote anything. The cluster is unchanged. |
| 72 | Verification failed; `update-cert` restored and verified the previous certificate. |
| 73 | Verification failed; `update-cert` restored the previous certificate but couldn't verify it. |
| 74 | Verification failed and `update-cert` couldn't apply the rollback. |
| 75 | `update-cert` couldn't reach the ingress, so it verified nothing and rolled nothing back. The new certificate is still in place. |

## The `rollback-cert` Command

`rollback-cert` restores a certificate from a snapshot `update-cert` saved during an earlier rotation. Snapshots live under `/etc/dspm/cert-snapshots/`, and Access Analyzer never prunes them automatically.

```bash
sudo dspm-installer rollback-cert --latest
```

| Flag | Default | Description |
|---|---|---|
| `--list` | off | List available snapshots: timestamp, hostname, leaf certificate fingerprint, and expiry. Doesn't need cluster access. |
| `--latest` | off | Restore the most recent snapshot. |
| `--snapshot` | none | Restore the snapshot at the given path, such as `/etc/dspm/cert-snapshots/2026-09-08T14-02-11Z`. |

`--list`, `--latest`, and `--snapshot` are mutually exclusive. `rollback-cert` exits `1` when a check fails before it writes anything, such as combining these flags or naming a snapshot that doesn't exist, `0` when it applies and verifies the restore, `72` when it applies the restore but verification fails, and `73` when it can't apply the restore.

## Logs

| File | Contents |
|---|---|
| `/var/log/dspm-installer.log` | Everything the installer does, as one JavaScript Object Notation (JSON) object per line, at the detail `--log-level` sets. The installer appends to the file on every run, with mode `0640`. If the installer can't write the file, it sends the same output to the terminal's standard error as text. |
| `/var/log/dspm-preflight.json` | The full result of the most recent preflight run: `timestamp`, `overallStatus`, and a `checks` list with `name`, `status`, and `message` for every check, including the ones that passed. `--dry-run` doesn't write it. |
