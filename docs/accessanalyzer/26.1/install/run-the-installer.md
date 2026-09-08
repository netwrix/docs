---
title: Install Access Analyzer
description: Download the installer, copy the TLS certificate to the server, and run dspm-installer by answering prompts or passing flags.
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The installer is a single Linux binary, `dspm-installer`. Run it as root on the server, and it checks the hardware, asks for anything you haven't supplied, sets up every service, and prints the address and credentials for the first sign-in.

Before you start, work through [Requirements](requirements.md). You need the license key, the server's fully qualified hostname, the TLS certificate and private key files, and the email address and name of the first administrator.

## Download the Installer

The Netwrix package registry hosts the installer, and your license key authenticates the download. Run these commands on the server.

1. Export your license key.

   ```bash
   export LICENSE_KEY='<license-key>'
   ```

2. Download the installer for the server's architecture and place it in `/usr/local/bin`.

   ```bash
   ARCH=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')
   TMP_FILE=$(mktemp)
   curl -sLf -o "$TMP_FILE" \
     "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-installer-linux-$ARCH?auth=license:${LICENSE_KEY}&channel=stable"
   sudo install -m 0755 "$TMP_FILE" "/usr/local/bin/dspm-installer"
   rm -f "$TMP_FILE"
   ```

3. Confirm it runs.

   ```bash
   dspm-installer --version
   ```

   A version number means the binary is ready. An error means the download failed: check the license key and confirm the server can reach the domains listed under [Outbound](requirements.md#outbound).

:::note
Keep the `channel=stable` parameter. Without it, the registry returns the newest artifact across all channels, which can be a pre-release or development build instead of the latest stable release.
:::

## Copy the TLS Certificate to the Server

The installer expects the certificate at `/etc/dspm/tls.crt` and the private key at `/etc/dspm/tls.key`. If you keep them somewhere else, enter the paths when the installer prompts for them, or pass them with `--tls-cert` and `--tls-key`.

1. Create the directory.

   ```bash
   sudo mkdir -p /etc/dspm
   ```

2. Move the certificate and key into place.

   ```bash
   sudo mv /path/to/your.crt /etc/dspm/tls.crt
   sudo mv /path/to/your.key /etc/dspm/tls.key
   ```

3. Restrict the key to root.

   ```bash
   sudo chmod 600 /etc/dspm/tls.key
   ```

If a private certificate authority (CA) issued the certificate, copy its CA bundle too. `/etc/dspm/ca-bundle.pem` is a convenient place; the installer asks for the path.

:::note
The installer rejects the certificate if it doesn't cover the hostname you enter at the **Hostname** prompt. Confirm the certificate's subject before you run the installer:

```bash
openssl x509 -in /etc/dspm/tls.crt -noout -subject -nameopt multiline
```

Enter the exact hostname that appears in the output, for example `commonName=dspm.corp.example.com`.
:::

## Run the Installer

Run the installer with `sudo`. The `-E` flag carries your environment through to root, so the installer reads the `LICENSE_KEY` you exported for the download instead of prompting for it.

```bash
sudo -E dspm-installer
```

If your `sudo` policy doesn't allow `-E`, pass the variable inline instead: `sudo LICENSE_KEY="$LICENSE_KEY" dspm-installer`.

The installer runs its preflight checks first, then collects any value it doesn't have yet. You can let it ask, or supply everything up front.

<Tabs groupId="install-method">
<TabItem value="prompts" label="Answer the prompts">

When you run the installer with no flags in a terminal, it asks for each value it needs, one screen at a time. It asks only for values it doesn't already have, so a re-run skips what you answered before.

1. **License Key** - paste your Netwrix license key in the form `XXXX-XXXX-XXXX-XXXX-XXXX-V3`. The installer validates it online before moving on.
2. **Hostname** - enter the fully qualified domain name users open in their browsers, for example `dspm.corp.example.com`. If the server's own name is a valid choice, the installer offers it as a suggestion.
3. **First Admin Email** and **First Admin Name** - enter the email address of the first administrator, and optionally their full name. The address becomes their username.
4. **TLS Certificate File**, **TLS Private Key File**, and **CA Bundle File (optional)** - press Enter to accept `/etc/dspm/tls.crt` and `/etc/dspm/tls.key`, or enter other paths. Fill in the CA bundle only if a private certificate authority issued the certificate. The installer checks that the certificate and key match, that the certificate hasn't expired, and that it covers the hostname you entered.
5. **Show advanced settings?** - select **No**.
6. Check the review screen. It lists the hostname, the certificate path (and the CA bundle path if you gave one), the first administrator, and a masked license key.
7. Answer **Yes** to **Everything look good?**

The installer saves each answer to `/etc/dspm/installer.yaml` as soon as you confirm it. On the first save it prints `Progress saved to /etc/dspm/installer.yaml — future runs will pre-fill these values.` If you cancel with Esc or Ctrl-C, the installer exits with `installation cancelled`, and your answers stay in that file for the next run.

</TabItem>
<TabItem value="flags" label="Pass flags">

Pass every value as a flag and the installer asks nothing. Use this form in scripts or over a connection without a terminal, where the installer can't prompt and exits with an error for any missing value.

```bash
sudo dspm-installer \
  --license-key "<license-key>" \
  --hostname dspm.corp.example.com \
  --tls-cert /etc/dspm/tls.crt \
  --tls-key /etc/dspm/tls.key \
  --size medium \
  --first-admin-email admin@corp.example.com \
  --first-admin-name "Alice Smith" \
  --accept-warnings
```

`--accept-warnings` lets the install continue past preflight warnings. Without a terminal the installer can't ask you, so it stops on warnings unless you pass this flag. Leave it out the first time if you'd rather see the warnings and decide.

`--size` defaults to `medium` when you omit it. Pass `--tls-cert` and `--tls-key` together; if you omit both, the installer uses `/etc/dspm/tls.crt` and `/etc/dspm/tls.key`. Add `--ca-bundle <path>` for a certificate from a private certificate authority.

If `/etc/dspm/installer.yaml` exists from an earlier run and you're in a terminal, the installer still asks **Show advanced settings?** and shows the review screen before it starts. Add `--assume-yes` to skip both.

Every flag also has an environment variable, listed in the [Installer reference](installer-reference.md).

</TabItem>
<TabItem value="yaml" label="installer.yaml">

Whether you answer prompts or pass flags, the installer saves the values below to `/etc/dspm/installer.yaml`. A later run reads this file first and only asks for (or requires) values that are still missing.

```yaml
ca-bundle:
first-admin-email: admin@example.com
first-admin-name: Jane Doe
hostname: dspm.example.com
license-key: XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXX9
tls-cert: /etc/dspm/tls.crt
tls-key: /etc/dspm/tls.key
```

`ca-bundle` stays empty unless you gave a CA bundle path. The installer stores the license key in plain text in this file, so restrict access to it the same way you restrict `/etc/dspm/tls.key`.

</TabItem>
</Tabs>

## Preflight Checks

The installer checks the server first, under the heading `Running preflight checks...`. Checks that pass are silent. Each failure or warning gets its own line, tagged `[FAIL]` or `[WARN]`, for example:

```text
  [FAIL] 48.0 GB RAM; the medium size requires 64 GB
  [WARN] clock-sync no clock sync daemon detected
```

A `[FAIL]` stops the install. There's no way to override it: fix the server or choose a smaller size, then run the installer again. Failures cover CPU cores, RAM, the 40 GB disk floor, DNS resolution of the hosts the installer downloads from, and the availability of cgroups, a kernel feature the platform depends on.

A `[WARN]` is a condition the install can continue past, such as less disk than the size recommends, no time-sync service, or antivirus software that may need exclusions. In a terminal the installer asks **Continue despite these warnings?**; answer **Yes** to go on. Without a terminal, warnings stop the install unless you pass `--accept-warnings`.

The full list of checks, thresholds, and messages is in the [Installer reference](installer-reference.md#preflight-checks). The installer also writes the complete result of each run to `/var/log/dspm-preflight.json` (a `--dry-run` doesn't write it).

## Install Phases

After the checks and prompts, the installer validates the certificate and hostname, confirms the license key online, and saves your answers. Then it works through these phases, printing a progress line for each:

1. Sets up the platform Access Analyzer runs on. The installer waits up to 5 minutes for it to become ready.
2. Downloads and starts the Access Analyzer services. A live line reads `Starting Access Analyzer (<n> of <total> services running)` and counts up. The installer waits up to 30 minutes for every service to become healthy.
3. Creates the first administrator account, under `Provisioning first admin user...`.

If the platform or the services don't become ready inside those limits, the installer stops with a non-zero exit code; the [Installer reference](installer-reference.md#exit-codes) lists the codes. If creating the first administrator fails, the installer prints a warning and still finishes. The installer logs everything it does to `/var/log/dspm-installer.log`.

:::note
The installer's progress line only reports how many services are running, not which ones are degraded. For a visual, service-by-service view while phase 2 runs, open the ArgoCD UI.

Retrieve the initial admin password:

```bash
sudo kubectl get secret -n argocd argocd-initial-admin-secret -o jsonpath='{.data.password}' | base64 -d && echo
```

Forward the ArgoCD server so you can reach it in a browser:

```bash
sudo kubectl port-forward -n argocd svc/argocd-server 8080:80 --address 0.0.0.0
```

Open `http://<server-address>:8080`, sign in as `admin` with the password above, and check each application's health and sync status.
:::

## Install Summary

The installer prints a summary. It contains:

- The web application URL, `https://<hostname>`.
- **First Admin Credentials**: the **Username**, which is the email address you gave, and a one-time **Password**.
- A reminder to allow inbound port 443 through the firewall.
- The installation log path, `/var/log/dspm-installer.log`.

Copy the password somewhere safe. It works once, and Access Analyzer asks you to replace it when you first sign in. Then open the URL in a browser and continue with [Sign in for the first time](first-sign-in.md), which also explains how to read the password back from the server if you lose it.
