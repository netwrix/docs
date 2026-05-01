---
title: "Scanner Requirements"
description: "System requirements and prerequisites for deploying a custom scanner in Access Analyzer"
sidebar_position: 20
---

# Scanner Requirements

These requirements apply to any Linux host you want to register as a custom scanner. The system scanner built into Access Analyzer has no additional requirements.

## Operating system

Access Analyzer supports any Linux distribution as a scanner host. Ubuntu 20.04 LTS or later is recommended.

Access Analyzer registers the scanner by connecting over SSH and running an automated installation script. The script installs [k3s](https://k3s.io/) — a lightweight Kubernetes distribution — and joins the host to the Access Analyzer cluster as a worker node.

## Hardware

| Resource | Minimum |
|----------|---------|
| CPU | 2 cores |
| Available RAM | 512 MB |
| Free disk space | 5 GB (on `/`) |

## Software and access

The registration script runs automatically over SSH. Before registering a scanner, confirm the following on the target host:

- `curl` is installed
- `bash` is installed
- The SSH service account used during registration has passwordless `sudo` access

### Preflight checks

When you click **Deploy** in the Deploy Scanner wizard, Access Analyzer runs the following preflight checks on the target host before installing k3s. All checks must pass for registration to proceed.

| Check | Requirement |
|-------|-------------|
| `curl` available | `curl` must be installed and on the system PATH |
| `bash` available | `bash` must be installed and on the system PATH |
| Passwordless sudo | The SSH service account must be able to run `sudo` without a password prompt |
| Internet access | The host must be able to reach `https://get.k3s.io` to download the k3s installer |
| Disk space | At least 5 GB free on `/` |
| Memory | At least 512 MB available RAM |
| CPU | At least 2 CPU cores |

## Network requirements

### Ports

| Port | Protocol | Direction | Purpose |
|------|----------|-----------|---------|
| 22 | TCP | Access Analyzer → Scanner | SSH connection during registration only |
| 6443 | TCP | Scanner → Access Analyzer | Kubernetes API — ongoing job dispatch |

Port 22 is only required during the initial registration. After the scanner is registered, the scanner host connects outbound to the Access Analyzer server on port 6443 to receive and run scan jobs. Port 22 can be restricted or closed after registration is complete.

:::note
The SSH port defaults to **22** but is configurable in the Deploy Scanner wizard. If your scanner host runs SSH on a non-standard port, enter it in the **SSH Port** field during deployment.
:::

### Internet access

The registration script downloads the k3s installer from `https://get.k3s.io`. The scanner host must be able to reach this URL **during registration only**. After registration completes, internet access is not required for normal scan operation.

## Service account

Scanner deployment requires an **SSH Username / SSH Key** service account in Access Analyzer. This account must:

- Have SSH access to the scanner host
- Use an **unencrypted** private key in PEM format

:::warning
Passphrase-protected private keys are not supported. The registration script will fail if the key requires a passphrase. Use a key generated without a passphrase, or strip the passphrase before creating the service account.
:::

See [SSH Username / SSH Key](../../service-accounts/ssh-username-key.md) to create this account. You can also create it inline from the Deploy Scanner wizard using the **+** button next to the Service Account field without navigating away.
