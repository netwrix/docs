---
title: "Hardware and System Requirements"
description: "System requirements for deploying Access Analyzer including hardware, OS, and virtualization"
sidebar_position: 10
---

# Hardware and System Requirements

Access Analyzer is deployed on a single Linux virtual machine. The installer runs preflight checks to validate that your system meets these requirements before installation begins.

## Deployment Sizing

Use the **Minimum** specifications for evaluation and lab deployments. Use the **Production Recommended** specifications for customer-facing or enterprise deployments. The installer enforces the minimum thresholds — preflight checks will fail if the system falls below them.

| Size | Min CPU | Min Memory | Min Disk | Prod CPU | Prod Memory | Prod Disk | Typical Environment |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **Small** | 2 vCPUs | 8 GB | 20 GB free | 8 cores | 32 GB | 1 TB SSD | Evaluation, pilots, up to ~1,000 assets |
| **Medium** | 4 vCPUs | 16 GB | 50 GB free | 16 cores | 64 GB | 1 TB SSD | Up to ~5,000 assets |
| **Large** | 8 vCPUs | 32 GB | 100 GB free | 32 cores | 128 GB | 1 TB SSD | 5,000+ assets / enterprise |

:::note
The `--size` flag scales memory thresholds by the specified multiplier. For example, `--size 2` doubles the minimum and recommended memory requirements enforced by the preflight checks.
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
