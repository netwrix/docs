---
title: "Hardware and System Requirements"
description: "System requirements for deploying Access Analyzer including hardware, OS, and virtualization"
sidebar_position: 10
---

# Hardware and System Requirements

Access Analyzer is deployed on a single Linux virtual machine. The installer runs preflight checks to validate that your system meets these requirements before installation begins.

## Deployment Sizing

| Size | CPU | Memory | Disk | Use Case |
| --- | --- | --- | --- | --- |
| **Small** | 2 vCPUs (4 recommended) | 8 GB (16 GB recommended) | 20 GB free (50 GB recommended) | Evaluation and small environments |
| **Medium** | 8 vCPUs | 32 GB | 100 GB SSD | Mid-size environments |
| **Large** | 16 vCPUs | 64 GB | 500 GB SSD | Large enterprise environments |

:::note
The `--size` flag scales memory requirements by the specified multiplier. For example, `--size 2` doubles the minimum and recommended memory thresholds. See [Environment Variables](/docs/accessanalyzer/1_0/install/environmentvariables) for details.
:::

## Disk Space Requirements

The installer validates free space on the following paths:

| Path | Minimum Free Space | Purpose |
| --- | --- | --- |
| `/` | 20 GB | Root filesystem |
| `/var` | 20 GB | K3s data, containers, logs |
| `/var/lib` | 20 GB | K3s data directory |
| `/var/log` | 5 GB | System and application logs |
| `/etc` | 1 GB | Configuration files |

Write access is also verified for `/var`, `/tmp`, and `/etc`.

## Operating System

| Requirement | Value |
| --- | --- |
| **Distribution** | Ubuntu 24.04 LTS |
| **Architecture** | x86_64 (amd64) |
| **Kernel** | 5.15 or later |

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
Set-VMMemory -VMName "<VM_NAME>" -DynamicMemoryEnabled $false -StartupBytes 16GB
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
| 16 GB or more | Optional |
| Less than 16 GB | 2–4 GB recommended |

If no swap is configured on a system with less than 16 GB of RAM, the installer issues a warning. To create a swap file:

```bash
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```
