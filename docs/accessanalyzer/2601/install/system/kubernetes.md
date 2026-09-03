---
title: "Kubernetes and Operating System"
description: "OS version, kernel requirements, and K3s Kubernetes details"
sidebar_position: 10
---

# Kubernetes and Operating System

Access Analyzer uses K3s, a lightweight Kubernetes distribution that the installer deploys automatically. You don't need to set up Kubernetes manually.

## Operating System

| Requirement | Value |
| --- | --- |
| **Distribution** | Ubuntu 24.04 LTS |
| **Architecture** | x86_64 (amd64) |
| **Kernel version** | 5.15 or later |

:::note
Other Linux distributions may work, but Netwrix doesn't officially test or support them. Ubuntu 24.04 LTS is the recommended and validated platform.
:::

## K3s Kubernetes

| Component | Version |
| --- | --- |
| **K3s** | v1.33.4+k3s1 |
| **Kubeconfig mode** | `644` |
| **Secrets encryption** | Enabled (at rest) |
| **Service name** | `k3s-dspm` |

The Access Analyzer installer installs and manages K3s automatically. The `kubectl` command is available immediately after installation for cluster management.

## Kernel Features

The following kernel features must be available. The installer validates these automatically during installation (see [System Requirements](/docs/accessanalyzer/2601/install/system/requirements)):

| Feature | Description |
| --- | --- |
| **cgroups v1 or v2** | Memory and CPU controllers required for container resource management |
| **Overlay filesystem** | `overlay` kernel module for container image layers |
| **Linux namespaces** | NET, PID, IPC, UTS, MNT, USER for container isolation |
| **iptables** | Required for Kubernetes networking and service routing |

## ArgoCD

| Component | Version |
| --- | --- |
| **ArgoCD** | v3.2.0 |
| **Namespace** | `argocd` |
| **UI port** | 8090 (via port-forward) |

The installer deploys ArgoCD automatically, and ArgoCD manages the lifecycle of all Access Analyzer application components through GitOps.
