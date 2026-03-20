---
title: "Hardware and Resource Allocation"
description: "CPU, memory, storage, and virtualization requirements"
sidebar_position: 20
---

# Hardware and Resource Allocation

Access Analyzer is deployed on a single Linux virtual machine. This page details the hardware requirements and virtualization configuration.

## Deployment Sizing

| Size | CPU | Memory | Disk | Use Case |
| --- | --- | --- | --- | --- |
| **Small** | 2 vCPUs (4 recommended) | 8 GB (16 GB recommended) | 20 GB free (50 GB recommended) | Evaluation and small environments |
| **Medium** | 8 vCPUs | 32 GB | 100 GB SSD | Mid-size environments |
| **Large** | 16 vCPUs | 64 GB | 500 GB SSD | Large enterprise environments |

All sizes require SSD or NVMe storage for optimal database performance.

## Disk Space by Directory

| Path | Minimum Free Space | Purpose |
| --- | --- | --- |
| `/` | 20 GB | Root filesystem |
| `/var` | 20 GB | K3s data, containers, logs |
| `/var/lib` | 20 GB | K3s data directory |
| `/var/log` | 5 GB | System and application logs |
| `/etc` | 1 GB | Configuration files |

## Virtualization Requirements

When running on a hypervisor, the following must be supported:

| Requirement | Details |
| --- | --- |
| **Linux namespaces** | NET, PID, IPC, UTS, MNT, USER |
| **Control groups** | cgroups v1 or v2 with memory and CPU controllers |
| **Overlay filesystem** | Kernel module for container layers |
| **iptables** | Kubernetes networking |

## Hypervisor Configuration

Configure **static memory allocation** for the Access Analyzer VM. Dynamic or ballooned memory can cause resource underestimation and out-of-memory conditions.

### VMware vSphere / ESXi

Disable memory ballooning:

```
sched.mem.pshare.enable = "FALSE"
mem.balloon.enable = "FALSE"
```

Set these in **VM Settings** > **VM Options** > **Advanced** > **Edit Configuration**.

### Microsoft Hyper-V

Use static memory:

```powershell
Set-VMMemory -VMName "<VM_NAME>" -DynamicMemoryEnabled $false -StartupBytes 16GB
```

### KVM / QEMU

Use hugepages:

```xml
<hugepages>
  <page size='2048' unit='KiB'/>
</hugepages>
```

## Swap

| System Memory | Recommendation |
| --- | --- |
| 16 GB or more | Swap is optional |
| Less than 16 GB | 2–4 GB swap recommended to prevent OOM during container pulls |

## Resource Scaling

The installer supports a `--size` flag (1–10) that scales memory thresholds by the specified multiplier. For example, `--size 2` doubles the minimum and recommended memory requirements. See [Environment Variables](/docs/accessanalyzer/1_0/install/environmentvariables).
