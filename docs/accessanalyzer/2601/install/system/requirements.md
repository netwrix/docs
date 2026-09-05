---
title: "Hardware and System Requirements"
description: "System requirements for deploying Access Analyzer including hardware, OS, and virtualization"
sidebar_position: 10
---

# Hardware and System Requirements

Access Analyzer runs on a single Linux virtual machine. The installer runs preflight checks to validate that your system meets these requirements before installation begins.

## Deployment Sizing

Choose a deployment size with `--size` — see [Installer Command Reference](/docs/accessanalyzer/2601/install/install-commands#choosing-a-deployment-size). The installer enforces each size's CPU and memory figures as hard preflight minimums and blocks installation if the system falls below them. Disk works differently: a fixed 40 GB floor blocks installation regardless of size, and the size's disk figure is a recommendation that only warns if the host falls short (see [Disk Space Requirements](#disk-space-requirements)).

| Size | CPU | Memory | Recommended Disk | Scale |
| --- | --- | --- | --- | --- |
| **Small** | 8 cores | 32 GB | 400 GB SSD | Up to ~25 million objects and under 5,000 identities |
| **Medium** *(default)* | 16 cores | 64 GB | 1 TB SSD | Up to ~200 million objects and 5,000–25,000 identities |
| **Large** | 24 cores | 96 GB | 3 TB SSD | Up to ~800 million objects and 25,000–100,000 identities |
| **Enterprise** | 32 cores | 128 GB | 8 TB SSD | Up to ~3 billion objects and 100,000+ identities |

:::warning
A `micro` size also exists (8 cores, 24 GB, 80 GB SSD), but it targets development, CI, and demo installs only. Don't use it for a production or customer-facing deployment.
:::


## Disk Space Requirements

The installer validates free space on the following paths:

| Path | Minimum Free Space | Purpose |
| --- | --- | --- |
| `/` | 20 GB | Root filesystem |
| `/var` | 20 GB | K3s data, containers, logs |
| `/var/lib` | 40 GB minimum; see the [Deployment Sizing](#deployment-sizing) table for the recommended amount ** | K3s data directory |
| `/var/log` | 5 GB | System and application logs |
| `/etc` | 1 GB | Configuration files |

** 40 GB free on `/var/lib` is the hard floor for every size — the installer fails preflight below it. The recommended amount in the [Deployment Sizing](#deployment-sizing) table is what your chosen `--size` is designed to hold as data accumulates; a host below it passes preflight with a warning rather than failing, because k3s thin-provisions storage and consumes it only as data actually arrives.

The installer also verifies write access for `/var`, `/tmp`, and `/etc`.

## Operating System

| Requirement | Value |
| --- | --- |
| **Distribution** | Ubuntu 24.04 LTS (primary tested platform) |
| **Architecture** | x86_64 (amd64) |
| **Kernel** | 5.15 or later |

**Compatible distributions (engineer-validated):** Red Hat Enterprise Linux (RHEL) 8 and 9, CentOS, Fedora, and Debian stable releases are compatible with the installer. Ubuntu is Debian-based, so Debian stable releases are also compatible.

**Not supported:** AIX and other non-Linux operating systems. The installer requires a 64-bit Linux distribution with kernel capabilities including cgroups v1/v2, Linux namespaces, and overlay filesystem support.

## Kernel and Container Runtime Requirements

The installer validates the following kernel features required for Kubernetes container operation:

| Feature | Description |
| --- | --- |
| **Linux Namespaces** | NET, PID, IPC, UTS, MNT, USER — required for container isolation |
| **Control Groups (cgroups)** | v1 or v2 with memory and CPU controllers |
| **Overlay Filesystem** | Kernel module for container image layers |
| **iptables** | Required for Kubernetes networking |

## Virtualization and Hypervisor Configuration

When deploying on a virtual machine, configure **static memory allocation** to ensure consistent performance. Dynamic or ballooned memory can cause the installer to underestimate available resources and lead to out-of-memory conditions during operation.

### VMware vSphere / ESXi

Disable memory ballooning in vSphere client under **VM Settings** > **VM Options** > **Advanced** > **Edit Configuration**:

```
sched.mem.pshare.enable = "FALSE"
mem.balloon.enable = "FALSE"
```

### Microsoft Hyper-V

Configure static memory instead of dynamic memory:

```powershell
Set-VMMemory -VMName "<VM_NAME>" -DynamicMemoryEnabled $false -StartupBytes 24GB
```

### KVM / QEMU

Use hugepages for better memory performance. Add the following to your VM XML configuration:

```xml
<hugepages>
  <page size='2048' unit='KiB'/>
</hugepages>
```

## Swap Configuration

| System Memory | Swap Recommendation |
| --- | --- |
| 32 GB or more | Optional |
| Less than 32 GB | 2–4 GB recommended |

If a system with less than 32 GB of RAM has no swap, the installer issues a warning. To create a swap file:

```bash
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```
