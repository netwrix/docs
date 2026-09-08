---
title: Installer Reference
description: The dspm-installer flags, environment variables, configuration file keys, exit codes, preflight checks, and log locations.
sidebar_position: 4
---

`dspm-installer` takes its settings from four places. A flag wins over an environment variable, an environment variable wins over the configuration file, and the configuration file wins over the built-in default. When the installer runs in a terminal, it prompts for any required value still missing; without a terminal, a missing required value is an error.

```bash
dspm-installer [flags]
dspm-installer wait-for-apps [flags]
dspm-installer --help
dspm-installer --version
```

There are no single-letter flags.

## Flags

Two environment variable names need care: `--hostname` reads `DSPM_HOSTNAME`, not `HOSTNAME`, because the shell sets `HOSTNAME` itself, and `--assume-yes` reads `DSPM_ASSUME_YES`, not `ASSUME_YES`.

| Flag | Environment variable | Default | Description |
|---|---|---|---|
| `--license-key` | `LICENSE_KEY` | none | Netwrix license key. Required. Validated online before the install starts. |
| `--hostname` | `DSPM_HOSTNAME` | none | Fully qualified domain name users open in their browsers. Lowercased before use. |
| `--first-admin-email` | `FIRST_ADMIN_EMAIL` | none | Email address of the first administrator. Required. Becomes that person's username. |
| `--first-admin-name` | `FIRST_ADMIN_NAME` | none | Full name of the first administrator. |
| `--tls-cert` | `TLS_CERT_FILE` | `/etc/dspm/tls.crt` | PEM TLS certificate file, full chain with the leaf certificate first. Requires `--tls-key`. |
| `--tls-key` | `TLS_KEY_FILE` | `/etc/dspm/tls.key` | PEM TLS private key file. Requires `--tls-cert`. |
| `--ca-bundle` | `TLS_CA_BUNDLE_FILE` | none | PEM certificate authority (CA) bundle. Needed when a private CA issued the certificate. |
| `--size` | `SIZE` | `medium` | Deployment size: `small`, `medium`, `large`, or `enterprise`. Case-insensitive. |
| `--target-revision` | `TARGET_REVISION` | `1.*` | Release version to install, such as `1.5.0`. The default installs the latest 1.x release. Also appears as **Target Revision** under **Show advanced settings?**. |
| `--accept-warnings` | `ACCEPT_WARNINGS` | `false` | Continue past preflight warnings without asking. |
| `--assume-yes` | `DSPM_ASSUME_YES` | `false` | Skip the review screen shown when the configuration file already supplies every required value. |
| `--dry-run` | `DRY_RUN` | `false` | Print the planned actions and exit without installing. Needs no TLS files and writes no configuration file. |
| `--log-level` | `LOG_LEVEL` | `info` | Detail written to the log file: `debug`, `info`, `warn`, or `error`. |
| `--postgres-data-dir` | `POSTGRES_DATA_DIR` | none | Custom directory for the application database's data. |
| `--clickhouse-data-dir` | `CLICKHOUSE_DATA_DIR` | none | Custom directory for the analytics store's data. |
| `--skip-preflight` | `SKIP_PREFLIGHT` | `false` | Skip the preflight checks. Intended for testing only. |
| `--version` | — | — | Print the installer version and exit. |
| `--help` | — | — | Print flag help and exit. |

The defaults for `--tls-cert` and `--tls-key` apply only when you omit both flags. Supplying one without the other is an error: `--tls-cert and --tls-key must both be provided together`.

A custom data directory must be an absolute path to an existing, writable directory. It can't be `/`, can't sit under `/bin`, `/sbin`, `/boot`, `/dev`, `/etc`, `/lib`, `/lib64`, `/proc`, `/root`, `/run`, `/sys`, `/usr`, or `/var/log`, and can't contain quotes, backslashes, dollar signs, or backticks.

### Value Checks

The installer rejects bad values before it changes anything on the server.

| Value | Rules |
|---|---|
| License key | Letters, digits, hyphens, and underscores only. Checked online; an expired, suspended, unknown, or invalid key stops the install with exit code 10. If the installer can't reach the licensing service, it warns and continues. |
| Hostname | Must contain a dot, must not be an IP address, must not end in `.localhost`, and must not exceed 253 characters. Each dot-separated part is 1 to 63 letters, digits, or hyphens and can't start or end with a hyphen. |
| First administrator email | A plain address such as `admin@corp.example.com`, with a dotted domain and without a display name, quotes, backslashes, or spaces. Lowercased before use. |
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
| 20 | The release version requested with `--target-revision` isn't available for this license key. |
| 50 | The installer couldn't install the platform, or the platform didn't become ready within 5 minutes. |
| 60 | The installer couldn't install a platform component. |
| 70 | The Access Analyzer services didn't all become healthy within 30 minutes, or you pressed Ctrl-C while waiting for them. |
| 71 | A service stayed in a failed state for 5 minutes. Only `wait-for-apps` returns this code; during an install the same condition exits 70. |
| 80 | Preflight checks failed (`preflight checks failed`), or you didn't accept warnings (`preflight warnings detected; use --accept-warnings to continue` or `installation stopped at preflight warnings`). |

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
| `kernel-modules` | The `br_netfilter` and `overlay` modules are loaded or built in. The install loads missing modules itself, so this check warns only when it can't inspect a module, or during a dry run when a module isn't loaded. | WARN | `kernel module issues: <module>: could not check module: <error>` or `kernel module issues: <module>: not loaded (dry run; will not be modprobed)` |
| `os` | The Linux distribution belongs to a recognized family. | WARN | `unrecognised Linux distribution; installation may not be supported` |
| `selinux` | SELinux isn't in enforcing mode. | WARN | The message says SELinux is enforcing and asks you to allow the platform's container policy or set SELinux to permissive. |
| `antivirus` | No known antivirus product is installed or running: `mdatp`, CrowdStrike, ClamAV, Sophos, Carbon Black, or Trend Micro. | WARN | `antivirus software detected: <product> (exclusion hint: <hint>)` |
| `network` | Each of the 18 required hosts resolves in DNS and accepts a connection on port 443 within 5 seconds. | FAIL when a name doesn't resolve; WARN when a connection times out or is refused | `DNS resolution failed for: <hosts>` or `connection failed (timeout/refused) for: <hosts>` |
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

## Logs

| File | Contents |
|---|---|
| `/var/log/dspm-installer.log` | Everything the installer does, as one JavaScript Object Notation (JSON) object per line, at the detail set by `--log-level`. The installer appends to the file on every run, with mode `0640`. If the installer can't write the file, it sends the same output to the terminal's standard error as text. |
| `/var/log/dspm-preflight.json` | The full result of the most recent preflight run: `timestamp`, `overallStatus`, and a `checks` list with `name`, `status`, and `message` for every check, including the ones that passed. `--dry-run` doesn't write it. |
