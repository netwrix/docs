---
title: Deploy an Agent
description: Prepare a Linux host, generate an install command in the Deploy agent panel, run it on the host, and edit or remove the agent later.
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

You deploy an agent by running one command on the Linux host that becomes the agent. The **Deploy agent** panel generates the command. When you run it, the host joins the installation and registers itself under the name and labels you chose. The Access Analyzer server never connects to the host, so you don't give Access Analyzer a username, password, or SSH key for it.

You need the Admin role for everything on this page. Viewers can see the Agents page but can't deploy, edit, or remove agents.

## How the Install Command Works

The command is `dspm-installer install-agent`, the same installer binary you used on the server. It carries a registration bundle in its `--token` value. The bundle holds what the host needs to join the installation and to name itself afterward.

A bundle is valid for 30 minutes. `install-agent` refuses to start a bundle with less than 10 minutes left, so you have about 20 minutes to start the command after you generate it. The panel shows the latest start time next to the command. If that time passes, click **Regenerate command** and use the new command.

Which steps the command takes on the host depends on how you installed the server:

| Server installed | What the agent host does |
|---|---|
| From downloaded media (a connected install) | Downloads the release's offline media from Netwrix, about 3.5 GB, and installs from it. |
| From offline media with `--airgap` | Installs from offline media that you copy to the host and name with `--bundle-dir`. |
| From the Netwrix registry | Downloads k3s and the scan components from the internet and the Netwrix registry. |

The panel text under the command tells you which case applies. For a server that runs from offline media, it says either that the cluster is offline (air-gapped) or that the machine downloads the release's offline media (about 3.5 GB, needing about 8 GB of free disk). For a registry install, it only gives the latest start time.

## Prepare the Host

The agent host needs a Linux server of its own. You can't run `install-agent` on the Access Analyzer server.

| Requirement | Details |
|---|---|
| Operating system | A RHEL-family or Debian-family Linux distribution. Preflight warns on a distribution it doesn't recognize. |
| Access | Root, either directly or through `sudo`. `install-agent` stops with `install-agent must run as root: re-run it with sudo` otherwise. |
| Architecture | The same CPU architecture as the server when the server runs from offline media. The in-cluster registry holds connector images only for the server's architecture, so `install-agent` refuses a host with another one. |
| CPU | 2 cores. |
| Memory | 4 GB. |
| Disk | 5 GB free. A server that runs from offline media also needs room for the media and its unpacked copy, about 7 GB. The panel says about 8 GB of free disk, and preflight warns below 8 GB. |
| Installer | The `dspm-installer` binary for the host's architecture. See [Download the installer](../install/run-the-installer.md#download-the-installer). |
| Not the server | The host can't be the Access Analyzer server. `install-agent` refuses to run where `/etc/rancher/k3s/k3s.yaml` exists. |

For example, an arm64 host can't join a server that runs from offline media on an x86 machine. Use an x86 host, or build the server on matching hardware.

### Network Paths

Every port in this table is open on the agent host or between the agent host and the server. `install-agent` opens the host-firewall rules itself; it doesn't open rules on network firewalls between the hosts.

| Direction | Port | Purpose |
|---|---|---|
| Agent host to server | TCP 6443 | The agent joins the installation and talks to the Kubernetes API server. |
| Server to agent host | TCP 10250 | The server reaches the agent's kubelet for logs and exec. |
| Server and agent host, both directions | UDP 8472 | The pod network (flannel VXLAN). |

On a server that runs from offline media, connector images reach the agent over the pod network. If UDP 8472 is blocked, the agent's scan pods stay in `ImagePullBackOff`.

When firewalld or ufw is active on the agent host, `install-agent` adds what is missing before it joins: the pod and service networks (`10.42.0.0/16` and `10.43.0.0/16`) and the ports `10250/tcp`, `8472/udp`, and `51820/udp`. It exits with code `80` if it can't. The [firewalld steps for the server](../install/installer-reference.md#firewalld) don't apply to the agent host.

### Outbound Access

Preflight tests the hosts the agent needs on TCP 443 and fails if it can't reach the Access Analyzer server on its join address. An agent host on an **SELinux-enforcing** system also needs `rpm.rancher.io`, which is required, and `api.github.com`, which is advisory.

<Tabs groupId="install-mode">
<TabItem value="connected" label="Connected install">

The host needs TCP 443 to the same two hosts that [Requirements](../install/requirements.md#outbound) lists for the media download: `api.keygen.sh` and the media download host. It needs nothing else, including `get.k3s.io`, GitHub, and Docker Hub. If you pass `--bundle-dir`, nothing downloads, and preflight tests only the connection to the server.

</TabItem>
<TabItem value="airgap" label="Air-gapped install">

The host needs no outbound access. Preflight tests only the connection to the server on its join address.

</TabItem>
<TabItem value="registry" label="Registry install">

The host needs TCP 443 to these hosts:

- `get.k3s.io`
- `github.com`
- `release-assets.githubusercontent.com`
- `oci.pkg.keygen.sh`
- `auth.docker.io`
- `registry-1.docker.io`
- `production.cloudflare.docker.com`
- `docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com`
- `keygen-dist.c3c9112df8df715f42d1162cdce5dba1.r2.cloudflarestorage.com`

</TabItem>
</Tabs>

## Generate the Command

1. Go to **Configuration > Agents**.
2. Click **Deploy agent**.
3. In **Name**, enter a name for the agent, such as `Production Agent`.
4. Under **Labels**, add at least one label, such as `env=production` or `region=us-east`. Labels are how scans find this agent; see [Agent labels and scan routing](agent-labels.md).
5. Click **Deploy**. The panel reads **Generating install command…** and then shows the command under **Install command**.
6. Click the **Copy install command** icon. A notification reads `Command copied to clipboard`.

The panel stays open. Leave it open until you have pasted the command into a terminal on the host, because **Regenerate command** is the only way to get the command again.

A generated command looks like this:

```bash
sudo dspm-installer install-agent --server=https://aa.corp.example.com:6443 --token=<registration-bundle> --name='Edge agent' --label=region=eu
```

The panel quotes the name for the shell and adds one `--label` for each label. Run the command exactly as the panel gives it.

| Field | What to enter | Rules |
|---|---|---|
| **Name** | A display name, for example `Production Agent` | Required; up to 255 characters |
| **Labels** | One or more `key=value` pairs | At least one required; Access Analyzer lowercases keys and values and replaces spaces with hyphens. The keys `name` and `default` are reserved. |

If you close the panel with unsaved changes, Access Analyzer asks you to confirm. After you generate the command, closing the panel needs no confirmation.

:::warning
The `--token` value is a credential. A bundle on a server installed from the Netwrix registry or from downloaded media contains your organization's license key. The key is base64-encoded, not encrypted, and unlike the rest of the bundle it doesn't expire. Don't paste the command into tickets, chat, or anywhere else it could persist.

While `install-agent` runs, the bundle is visible in the process list and in `sudo` logs on the host. Run the command only on a host where you trust everyone who can list processes or read those logs.
:::

## Run the Command

Run the command as root on the agent host before the start time that the panel shows.

:::note
On RHEL and similar distributions, `/usr/local/bin` usually isn't on the `PATH`, so `dspm-installer` can fail with `command not found`. Run it by its full path instead, for example `sudo /usr/local/bin/dspm-installer install-agent …`.
:::

<Tabs groupId="install-mode">
<TabItem value="connected" label="Connected install">

1. On the agent host, confirm that `dspm-installer` runs.

   ```bash
   dspm-installer --version
   ```

2. Paste the command from the panel and press Enter.

   `install-agent` downloads the release's media from Netwrix into `/var/lib/dspm/media`. The download resumes if it's interrupted, and the installer verifies the checksum when it finishes. The download must finish before the start time the panel shows, so start the command right away.

   To use media that's already on the host, add `--bundle-dir=<path>` to the command. The path is the archive, such as `/etc/dspm/media/dspm-airgap-media-v<version>-<arch>.tar.gz`, or the extracted directory.

3. Wait for the line `✓ Agent node "<name>" registered as <registration-ID>`.

The installer doesn't write the license key to the host in this case. It deletes the media it downloaded after the agent joins. If the command fails, it keeps the media so the next run reuses it.

</TabItem>
<TabItem value="airgap" label="Air-gapped install">

An air-gapped server has no license key, so its bundles carry none and the host can't download anything. Copy the release's offline media to the host first.

1. On a connected machine, download the offline media for the **agent host's** architecture and the release that the server runs. The panel shows the release in parentheses after "copy this release's offline media". The download commands are in [Download the installer](../install/run-the-installer.md#download-the-installer) on the **Air-gapped install** tab. Keep the archive name as downloaded: the installer reads the version and architecture from it.
2. Copy `dspm-installer` and the media archive to the agent host with `scp` or removable media.
3. In the command from the panel, add `--bundle-dir` with the path to the archive or to the extracted directory.

   ```bash
   sudo /usr/local/bin/dspm-installer install-agent --server=https://aa.corp.example.com:6443 --token=<registration-bundle> --name='Edge agent' --label=region=eu --bundle-dir=/etc/dspm/media/dspm-airgap-media-v<version>-<arch>.tar.gz
   ```

   If you give an archive, the installer unpacks it into `/var/lib/dspm/media`.
4. Run the command and wait for the line `✓ Agent node "<name>" registered as <registration-ID>`.

The installer deletes the media it unpacked after the agent joins. An extracted directory that you supplied stays.

</TabItem>
<TabItem value="registry" label="Registry install">

1. On the agent host, confirm that `dspm-installer` runs.

   ```bash
   dspm-installer --version
   ```

2. Paste the command from the panel and press Enter.

   `install-agent` downloads k3s, then writes `/etc/rancher/k3s/registries.yaml`, which points the host at the Netwrix registry with your license key. The file is readable by root only. Don't pass `--bundle-dir`; a server installed from the registry refuses it.

3. Wait for the line `✓ Agent node "<name>" registered as <registration-ID>`.

</TabItem>
</Tabs>

If the command stops at a preflight warning, it asks whether to continue. Add `--accept-warnings` to continue without the prompt. A preflight failure always stops the command.

### What the Command Does

1. Checks the bundle, the name, and the labels.
2. Stops if the host is the Access Analyzer server, if the command isn't running as root, or if the `--bundle-dir` setting doesn't match the server.
3. Runs the agent preflight: the sizing, operating system, disk, and network checks that the previous sections list.
4. Checks that the server's certificate covers the address that the host joins. See [The certificate doesn't cover the join address](#the-certificate-doesnt-cover-the-join-address).
5. On a server that runs from offline media, either downloads or unpacks the media, and stops if the media's k3s is newer than the server's.
6. Opens the host firewall if firewalld or ufw is active.
7. Checks the bundle's time again, then joins the installation as a k3s agent. The new node carries the label and taint `dspm.netwrix.com/agent=true`, so only scan work runs on it.
8. Sets the name and labels you chose on its own node, and prints `✓ Agent node "<name>" registered as <registration-ID>`.

Joining takes up to about five minutes. When the command finishes, close the panel. The agent appears in the list on the Agents page and shows **Healthy** and a **Last Heartbeat** after it reports to the server. See [Agents](index.md) for the list columns.

## Troubleshoot a Deployment

### The Bundle Expired

Messages: `registration bundle has expired, generate a new one` or `registration bundle expires too soon to safely start the install`.

The bundle ran past its 30-minute lifetime, or you started the command with less than 10 minutes left. In the panel, click **Regenerate command**, and run the new command.

On a server that runs from offline media, a slow download causes the same failure. A fresh bundle leaves about 20 minutes to start the command, and the 3.5 GB download must finish before the bundle expires. On a slow link, the first run stops with `the registration bundle ran out while the media was prepared; generate a new install command and re-run it — the media on disk is reused`. Click **Regenerate command** and run the new command. The installer kept the downloaded part, so the new run continues where the last one stopped.

### The Certificate Doesn't Cover the Join Address

Message: `the DSPM server's k3s certificate does not cover the address this host would join at`.

The agent checks the server's certificate against the address in `--server`, as any TLS client does. A server installed before the installer added the server's hostname to the certificate doesn't cover that hostname. Without this check, the join would run for about five minutes and fail with `x509: certificate is valid for …` in `journalctl -u k3s-agent`. Pick one of two fixes.

- **Add the hostname to the server's certificate.** On the Access Analyzer server, run these commands. Replace `dspm.corp.example` with the hostname in the `--server` value. The data directory is `/var/lib/rancher/k3s` unless you installed the server with `--storage-dir`, which moves it to `<storage-dir>/rancher/k3s`. The service is `k3s-dspm` unless you changed it with `--k3s-name`.

  ```bash
  sudo sh -c 'echo "tls-san: [dspm.corp.example]" >> /etc/rancher/k3s/config.yaml'
  sudo rm -f /var/lib/rancher/k3s/server/tls/dynamic-cert.json
  sudo systemctl restart k3s-dspm
  ```

  The restart interrupts the API server briefly.
- **Join by IP address.** Run `install-agent` again with `--server=https://<server-ip>:6443`. The certificate already covers the server's IP address.

### The Firewall Blocks the Agent

Exit code `80` means preflight failed, you didn't accept its warnings, or `install-agent` couldn't open the host firewall rules for firewalld or ufw. Read the message above the exit. Open the pod and service networks (`10.42.0.0/16` and `10.43.0.0/16`) and the ports `10250/tcp`, `8472/udp`, and `51820/udp` yourself, or fix the cause the message names, and run the command again. If a network firewall sits between the hosts, open TCP 6443, TCP 10250, and UDP 8472 on it too.

### The Command Refuses to Run

`install-agent` stops before it changes the host in these cases.

| Message or cause | What to do |
|---|---|
| `this host runs the DSPM k3s server: run install-agent on a separate host` | Run the command on a different Linux host. |
| `install-agent must run as root: re-run it with sudo` | Run the command with `sudo`. |
| `this host's architecture differs from the cluster's; its in-cluster registry holds no connector images for it` | Use a host with the server's CPU architecture. |
| `the media's k3s is newer than the cluster's` (exit code `16`) | The release that the server runs from media moved k3s forward after you installed it. See [Agents can't join after a k3s change](#agents-cant-join-after-a-k3s-change). |
| `--bundle-dir is only for a cluster running from offline media; this cluster pulls connector images from the registry, so run the command without it` | Remove `--bundle-dir`. |
| `this cluster has no license key to download its media with (it was installed with --airgap): pass --bundle-dir with the release's offline media` | Copy the media to the host and add `--bundle-dir`. |
| Too little disk for the media (exit code `16`) | Free space on the volume that holds `/var/lib/dspm/media`. |
| Media can't download, verify, or unpack (exit code `17`) | Run the command again. The download resumes. |
| Preflight can't reach the server | Open TCP 6443 from the host to the server, and check DNS for the server's hostname. |

### The Host Joined but Its Name and Labels Are Missing

Message: `the host joined the cluster, but its name and labels were not applied`.

The host is part of the installation, but the last step failed. Pick one of two fixes.

- Run the same command again while the bundle is still valid.
- Open the agent's **Actions** menu on the Agents page, click **Edit**, and set the name and labels there.

Don't generate a new command for a host that already joined. A new command joins the host again as a second node, and the first node stays in the list as **Offline** until you delete it. To clean up, delete the stale agent as [Remove an agent](#remove-an-agent) describes.

### The Agent's Scan Pods Stay in ImagePullBackOff

The pod network between the server and the agent host is blocked. Open UDP 8472 in both directions, as [Network paths](#network-paths) describes.

## Known Limits

### Agents Can't Join After a k3s Change

`dspm-installer upgrade` leaves the server's k3s as it was installed and has no k3s upgrade. A node can't run a newer kubelet than its API server. After a release that moves k3s forward, agents can't join a media cluster that you installed from an earlier release, and `install-agent` exits with code `16`. This check doesn't affect an agent that already joined. Agents that use an older k3s than the server's are accepted.

### Servers Installed Before the Hostname Change

A server installed before the installer added the hostname to the server's certificate needs the fix in [The certificate doesn't cover the join address](#the-certificate-doesnt-cover-the-join-address), or agents must join by IP address.

### Media Migrations With Mixed Architectures

[Converting a registry install](../install/convert-or-connect-an-install.md) to downloaded media refuses while any agent runs on a different CPU architecture from the server. Remove those agents, convert, then add them again from media for their architecture.

## Edit an Agent

1. Go to **Configuration > Agents**.
2. In the agent's **Actions** menu, click **Edit**.
3. Change the **Name** or the **Labels**. A deployed agent must keep at least one label.
4. Click **Save changes**.

**Test connection** sends a short test task through the agent and confirms it runs. It's a quick way to prove a deployed agent can accept work. Success shows **Connection successful**; a failure shows the server's message.

You can't rename or relabel the System agent, listed as **Default Agent**; opening **Edit** on it shows **Name** and **Labels** locked.

## Remove an Agent

1. Go to **Configuration > Agents**.
2. In the agent's **Actions** menu, click **Delete**.
3. Click **Delete Agent** to confirm.

A notification reads `Agent "<name>" deleted`, and the agent leaves the list.

Removal takes the agent out of Access Analyzer. The server doesn't connect to the host again, and the agent software stays installed there until you remove it yourself.

You can't remove an agent while a scan is running on it; the attempt fails with **Failed to delete agent**. Wait for the execution to finish, or stop it from [Scan executions](../scans/scan-executions.md), then try again.

Scans whose agent label pointed at the removed agent keep that label. Their next execution waits until another agent with matching labels is available, as described in [Agent labels and scan routing](agent-labels.md#when-no-agent-matches). Edit those scans, or deploy a replacement agent with the same labels, before their next scheduled run.

The System agent has no **Delete** action.
