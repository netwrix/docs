---
title: Install Access Analyzer
description: Download the installer, copy the TLS certificate to the server, and run dspm-installer by answering prompts or passing flags.
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The installer is a single Linux binary, `dspm-installer`. Run it as root on the server, and it checks the hardware, asks for anything you haven't supplied, sets up every service, and prints the address and credentials for the first sign-in.

Before you start, work through [Requirements](requirements.md). You need the license key, the server's fully qualified hostname, the TLS certificate and private key files, the email address and name of the first administrator, and about 16 GB of free disk for the install media.

## Download the Installer

Access Analyzer installs from offline media in both install modes. The modes differ in who downloads the media.

- A **connected** install is the default. You download only the installer. The installer then downloads the release's offline media from Netwrix, verifies it, and installs from it. The cluster stays connected to the internet, but it doesn't pull charts and images from the Netwrix registry. They come from a registry and a git server inside the cluster.
- An **air-gapped** install uses the same media, but you download it in advance and the installer reads it from disk. The server needs no network access and no license key at install time.

Pick one mode and use its tab in this section and in [Run the Installer](#run-the-installer).

The Netwrix package registry hosts the installer binary and the media archive, and your license key authenticates the download. Run these commands on the server, or on a connected machine of the same architecture if the server has no network access.

1. Read your license key into an environment variable. The key doesn't appear on screen, and it stays out of your shell history.

   ```bash
   read -rs LICENSE_KEY && export LICENSE_KEY
   ```

<Tabs groupId="install-mode">
<TabItem value="connected" label="Connected install">

2. Download the installer for the server's architecture and place it in `/usr/local/bin`.

   ```bash
   ARCH=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')
   TMP_FILE=$(mktemp)
   curl -Lf -o "$TMP_FILE" \
     "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-installer-linux-$ARCH?auth=license:${LICENSE_KEY}&channel=stable"
   sudo install -m 0755 "$TMP_FILE" "/usr/local/bin/dspm-installer"
   rm -f "$TMP_FILE"
   ```

3. Confirm it runs.

   ```bash
   dspm-installer --version
   ```

   A version number means the binary is ready. An error means the download failed: check the license key and confirm the server can reach `raw.pkg.keygen.sh`, as [Outbound](requirements.md#outbound) describes.

</TabItem>
<TabItem value="airgap" label="Air-gapped install">

2. Download the installer and the offline install media for the server's architecture.

   ```bash
   ARCH=$(uname -m | sed 's/x86_64/amd64/;s/aarch64/arm64/')
   VERSION='<release-version>'  # the release you're installing, for example 1.5.0
   TMP_FILE=$(mktemp)
   curl -Lf -o "$TMP_FILE" \
     "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-installer-linux-$ARCH?auth=license:${LICENSE_KEY}&channel=stable"
   sudo install -m 0755 "$TMP_FILE" "/usr/local/bin/dspm-installer"
   rm -f "$TMP_FILE"

   sudo mkdir -p /etc/dspm
   sudo curl -Lf -o "/etc/dspm/dspm-airgap-media-v${VERSION}-${ARCH}.tar.gz" \
     "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-airgap-media-v${VERSION}-${ARCH}.tar.gz?auth=license:${LICENSE_KEY}&channel=stable"
   ```

   The installer binary lands in `/usr/local/bin`, and the media archive lands in `/etc/dspm`. The media is about 3.5 GB, so the download takes a while.

   Don't extract the archive, and keep its name as downloaded. The installer reads the version and architecture from the file name. If the server has no network access, run these commands on a connected machine, then copy `/usr/local/bin/dspm-installer` and the archive to the server with `scp` or removable media.

3. Confirm the installer runs.

   ```bash
   dspm-installer --version
   ```

   A version number means the binary is ready. An error means the download failed: check the license key and confirm the machine can reach the Netwrix package registry.

4. Confirm the archive downloaded completely.

   ```bash
   ls -lh "/etc/dspm/dspm-airgap-media-v${VERSION}-${ARCH}.tar.gz"
   ```

   The file should be about 3.5 GB. If it's much smaller, the download was interrupted. Repeat step 2.

</TabItem>
</Tabs>

:::note
Keep the `channel=stable` parameter on every download. Without it, the registry returns the newest artifact across all channels, which can be a pre-release or development build instead of the latest stable release.
:::

## Copy the TLS Certificate to the Server

The installer expects the certificate at `/etc/dspm/tls.crt` and the private key at `/etc/dspm/tls.key`. If you keep them somewhere else, enter the paths when the installer prompts for them, or pass them with `--tls-cert` and `--tls-key`.

:::tip
Supplying your own certificate isn't the only option. `--generate-self-signed-cert` has the installer generate one for you, so you can skip this section. Or hand issuance and renewal to a certificate authority instead: see [Automatic TLS Certificates](automatic-tls-certificates.md) for Let's Encrypt or another Automatic Certificate Management Environment (ACME) certificate authority, and [AD CS TLS Certificates](adcs-tls-certificates.md) for an on-premises Active Directory Certificate Services (AD CS) certificate authority.
:::

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

Run the installer with `sudo`, using the command for the mode you chose when you downloaded it.

<Tabs groupId="install-mode">
<TabItem value="connected" label="Connected install">

Keep the license key off the command line. `--license-key` and `sudo LICENSE_KEY=...` both put the key in the process list, where any local user can read it. Pass it through the environment instead, with the `LICENSE_KEY` variable you set when you downloaded the installer. If you're in a new shell, set it again first:

```bash
read -rs LICENSE_KEY && export LICENSE_KEY
```

Then run the installer. `--preserve-env=LICENSE_KEY` carries the variable through `sudo` to root.

```bash
sudo --preserve-env=LICENSE_KEY dspm-installer --size <size>
```

`--preserve-env` needs sudo 1.8.21 or later. After the first run, the installer saves the key in `/etc/dspm/installer.yaml`, so later runs need only `sudo dspm-installer`. A run with no flags in a terminal starts the wizard, which asks for the key.

The installer:

1. Checks the license key and finds the release to install. That's the newest stable release, or the one you give with `--target-revision`. The installer refuses a release older than itself and exits with code `16`, because the app can't upgrade from older releases.
2. Downloads `dspm-airgap-media-v<version>-<arch>.tar.gz` and checks its SHA-512 checksum. An interrupted download resumes on the next run.
3. Unpacks the media and installs from it.
4. Deletes the media once every application is healthy, along with media from any other release in the same directory. If the install fails, the installer keeps the media, so the next run doesn't download it again.

To preview the install without changing anything, add `--dry-run`. It shows what the installer would download and runs the free-space check. It never downloads or deletes media.

#### Download Progress

The installer always shows download progress, in a style that suits the terminal.

| Terminal | Display |
|---|---|
| 256-color or truecolor, UTF-8 locale, `NO_COLOR` not set | Color bar with transfer rate and time remaining |
| Any other terminal that can redraw a line | Plain `[####----]` bar, redrawn in place |
| A pipe or log file, `TERM=dumb` or unset, or a window narrower than 50 columns | Plain bar, one line every 10% |

If the detection picks the wrong style, force one with `--progress` or `DSPM_PROGRESS`: `auto`, `bar`, `ascii`, or `lines`. For example, `--progress ascii` fixes a progress bar that shows garbled characters.

#### Install from the Registry Instead

To pull every chart and image from the Netwrix registry, the way connected installs worked before media installs, set `DSPM_MEDIA_INSTALL=false`:

```bash
sudo --preserve-env=LICENSE_KEY DSPM_MEDIA_INSTALL=false dspm-installer --hostname dspm.example.com
```

This option exists only while connected media installs roll out. A registry install can move onto downloaded media later. See [Convert or connect an install](convert-or-connect-an-install.md).

</TabItem>
<TabItem value="airgap" label="Air-gapped install">

In air-gapped mode, the installer reads the software it needs from `--bundle-dir` instead of the network, so it needs no license key and makes no outbound calls.

```bash
sudo dspm-installer --airgap --bundle-dir /etc/dspm/dspm-airgap-media-v<version>-<arch>.tar.gz --size <size>
```

`--bundle-dir` takes the downloaded archive directly. You don't need to extract it first. The installer reads the version and architecture from the file name, unpacks the archive into the [media directory](requirements.md#install-media), and removes the unpacked copy when the install finishes. It leaves your archive where it is. Keep the archive outside the media directory, because the installer cleans that directory.

An extracted directory still works as `--bundle-dir`, and the installer never deletes it.

[Installer reference](installer-reference.md#flags) covers the full `--airgap` and `--bundle-dir` flag details.

</TabItem>
</Tabs>

Replace `<size>` with `small`, `medium`, `large`, or `enterprise`. See [Size](requirements.md#size) to pick the one that matches your CPU, RAM, and expected data volume; the installer defaults to `medium` if you omit the flag.

The installer runs its preflight checks first, then collects any value it doesn't have yet. You can let it ask, or supply everything in advance.

<Tabs groupId="install-method">
<TabItem value="prompts" label="Answer the prompts">

When you run the installer with no flags in a terminal, it asks for each value it needs, one screen at a time. It asks only for values it doesn't already have, so a re-run skips what you answered before.

1. **License Key** - paste your Netwrix license key in the form `XXXX-XXXX-XXXX-XXXX-XXXX-V3`. The installer validates it online before moving on. An air-gapped install skips this prompt.
2. **Hostname** - enter the fully qualified domain name users open in their browsers, for example `dspm.corp.example.com`. If the server's own name is a valid choice, the installer offers it as a suggestion.
3. **First Admin Email** and **First Admin Name** - enter the email address of the first administrator, and optionally their full name. The address becomes their username.
4. **TLS Certificate File**, **TLS Private Key File**, and **CA Bundle File (optional)** - press Enter to accept `/etc/dspm/tls.crt` and `/etc/dspm/tls.key`, or enter other paths. Fill in the CA bundle only if a private certificate authority issued the certificate. The installer checks that the certificate and key match, that the certificate hasn't expired, and that it covers the hostname you entered.
5. **Show advanced settings?** - select **No**.
6. Check the review screen. It lists the hostname, the certificate path (and the CA bundle path if you gave one), the first administrator, and a masked license key.
7. Answer **Yes** to **Everything look good?**

The installer saves each answer to `/etc/dspm/installer.yaml` as soon as you confirm it. On the first save it prints `Progress saved to /etc/dspm/installer.yaml — future runs will pre-fill these values.` If you cancel with Esc or Ctrl-C, the installer exits with `installation cancelled`, and your answers stay in that file for the next run.

</TabItem>
<TabItem value="flags" label="Pass flags">

Pass every value as a flag and the installer asks nothing. Use this form in scripts or over a connection without a terminal, where the installer can't prompt and exits with an error for any missing value. This example installs a connected cluster. It reads the license key from the `LICENSE_KEY` environment variable instead of `--license-key`, which keeps the key out of the process list. To install an air-gapped cluster instead, drop `LICENSE_KEY` and add `--airgap --bundle-dir <path-to-archive>`.

```bash
sudo --preserve-env=LICENSE_KEY dspm-installer \
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

Whether you answer prompts or pass flags, the installer saves the following values to `/etc/dspm/installer.yaml`. A later run reads this file first and only asks for (or requires) values that are still missing.

```yaml
first-admin-email: admin@example.com
first-admin-name: Jane Doe
hostname: dspm.example.com
license-key: XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXXX-XXX9
tls-cert: /etc/dspm/tls.crt
tls-key: /etc/dspm/tls.key
ca-bundle: /etc/dspm/ca-bundle.pem
```

`ca-bundle` only appears if you gave a CA bundle path. The installer stores the license key in plain text in this file, so restrict access to it the same way you restrict `/etc/dspm/tls.key`.

</TabItem>
</Tabs>

## Preflight Checks

The installer checks the server first, under the heading `Running preflight checks...`. Checks that pass are silent. Each failure or warning gets its own line, tagged `[FAIL]` or `[WARN]`, for example:

```text
  [FAIL] 48.0 GB RAM; the medium size requires 64 GB
  [WARN] clock-sync no clock sync daemon detected
```

A `[FAIL]` stops the install. There's no way to override it: fix the server or choose a smaller size, then run the installer again. Failures cover CPU cores, RAM, the 40 GB disk floor, DNS resolution of the hosts the installer connects to, and the availability of cgroups, a kernel feature the platform depends on.

A `[WARN]` is a condition the install can continue past, such as less disk than the size recommends, less than about 16 GB free for the install media, no time-sync service, or antivirus software that may need exclusions. In a terminal the installer asks **Continue despite these warnings?**; answer **Yes** to continue. Without a terminal, warnings stop the install unless you pass `--accept-warnings`.

The full list of checks, thresholds, and messages is in the [Installer reference](installer-reference.md#preflight-checks). The installer also writes the complete result of each run to `/var/log/dspm-preflight.json` (a `--dry-run` doesn't write it).

## Install Phases

After the checks and prompts, the installer validates the certificate and hostname, confirms the license key online, and saves your answers. Then it works through these phases, printing a progress line for each:

1. Downloads and verifies the install media on a connected install, as [Run the Installer](#run-the-installer) describes. An air-gapped install unpacks the archive you supplied instead.
2. Sets up the platform Access Analyzer runs on, including the in-cluster registry and git server. The installer waits up to 5 minutes for the platform to become ready.
3. Loads and starts the Access Analyzer services from the media. A live line reads `Starting Access Analyzer (<n> of <total> services running)` and counts up. The installer waits up to 30 minutes for every service to become healthy.
4. Creates the first administrator account, under `Provisioning first admin user...`.

If the platform or the services don't become ready inside those limits, the installer stops with a non-zero exit code; the [Installer reference](installer-reference.md#exit-codes) lists the codes. If creating the first administrator fails, the installer prints a warning and still finishes. The installer logs everything it does to `/var/log/dspm-installer.log`.

<details>
<summary>Troubleshooting: check per-service status in ArgoCD</summary>

The installer's progress line only reports how many services are running, not which ones are degraded. If phase 2 is taking longer than expected and you need a visual, service-by-service view, open the ArgoCD UI.

Retrieve the initial admin password:

```bash
sudo kubectl get secret -n argocd argocd-initial-admin-secret -o jsonpath='{.data.password}' | base64 -d && echo
```

Forward the ArgoCD server so you can reach it in a browser:

```bash
sudo kubectl port-forward -n argocd svc/argocd-server 8080:80 --address 0.0.0.0
```

Open `http://<server-address>:8080`, sign in as `admin` with the password you retrieved, and check each application's health and sync status.

</details>

## Troubleshooting the Media Download

**The install stops with exit code `15` and says the cluster was installed from the registry.** This host already has a registry install. Convert it with `sudo dspm-installer upgrade --download --migrate` instead. See [Convert or connect an install](convert-or-connect-an-install.md).

**The install stops with exit code `16` and mentions free space.** Free space on the media volume, or point the media elsewhere with `--tmp-dir`. The check counts media from other releases as free, because the installer would delete them, but it deletes nothing unless the check passes.

**The download stops partway.** Run the same command again. The installer resumes an interrupted download and keeps verified media from a failed install, so it doesn't download it twice.

**The progress bar shows garbled characters.** Run the installer with `--progress ascii`, or set `DSPM_PROGRESS=ascii`.

## Install Summary

The installer prints a summary. It contains:

- The web application URL, `https://<hostname>`.
- **First Admin Credentials**: the **Username**, which is the email address you gave, and a one-time **Password**.
- A reminder to allow inbound port 443 through the firewall.
- The installation log path, `/var/log/dspm-installer.log`.

Copy the password somewhere safe. It works once, and Access Analyzer asks you to replace it when you first sign in. Then open the URL in a browser and continue with [Sign in for the first time](first-sign-in.md), which also explains how to read the password back from the server if you lose it.
