---
title: "Hardware and System Requirements"
description: "System requirements for deploying Access Analyzer including hardware, OS, and virtualization"
sidebar_position: 10
---

# Hardware and System Requirements

Access Analyzer runs on a single Linux virtual machine. The installer runs preflight checks to validate that your system meets these requirements before installation begins.

## Deployment Sizing

The installer enforces absolute minimums via preflight checks — the installer blocks installation if the system falls below these thresholds. Use the **Production Recommended** specifications for customer-facing or enterprise deployments.

**Absolute installer minimums (enforced by preflight):** 6 vCPUs, 24 GB RAM, 20 GB free disk.

| Size | Recommended CPU | Recommended Memory | Recommended Disk | Data Threshold |
| --- | --- | --- | --- | --- |
| **Small** | 8 cores | 24 GB | 250 GB SSD | Up to 5 TB |
| **Medium** | 16 cores | 48 GB | 500 GB SSD | 5 TB – 100 TB |
| **Large** | 32 cores | 64 GB | 1 TB SSD | 100 TB – 1 PB |
| **Enterprise** | 48 cores | 128 GB | 3 TB+ SSD | 1 PB+ |


## Disk Space Requirements

The installer validates free space on the following paths:

| Path | Minimum Free Space | Purpose |
| --- | --- | --- |
| `/` | 20 GB | Root filesystem |
| `/var` | 20 GB | K3s data, containers, logs |
| `/var/lib` | 20 GB | K3s data directory |
| `/var/log` | 5 GB | System and application logs |
| `/etc` | 1 GB | Configuration files |

The installer also verifies write access for `/var`, `/tmp`, and `/etc`.

## Operating System

| Requirement | Value |
| --- | --- |
| **Distribution** | Ubuntu 24.04 LTS (primary tested platform) |
| **Architecture** | x86_64 (amd64) |
| **Kernel** | 5.15 or later |

**Compatible distributions (engineer-validated):** Red Hat Enterprise Linux (RHEL) 8 and 9, CentOS, Fedora, and Debian stable releases are compatible with the installer. Ubuntu is Debian-based, so Debian stable releases are also supported.

**Not supported:** AIX and other non-Linux operating systems aren't compatible. The installer requires a 64-bit Linux distribution with kernel capabilities including cgroups v1/v2, Linux namespaces, and overlay filesystem support.

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

If no swap is configured on a system with less than 32 GB of RAM, the installer issues a warning. To create a swap file:

```bash
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```
