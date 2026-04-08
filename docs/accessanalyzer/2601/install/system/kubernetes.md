---
title: "Kubernetes and Operating System"
description: "OS version, kernel requirements, and K3s Kubernetes details"
sidebar_position: 10
---

# Kubernetes and Operating System

Access Analyzer uses K3s, a lightweight Kubernetes distribution, which is automatically deployed by the installer. No manual Kubernetes setup is required.

## Operating System

| Requirement | Value |
| --- | --- |
| **Distribution** | Ubuntu 24.04 LTS |
| **Architecture** | x86_64 (amd64) |
| **Kernel version** | 5.15 or later |

:::note
Other Linux distributions may work but are not officially tested or supported. Ubuntu 24.04 LTS is the recommended and validated platform.
:::

## K3s Kubernetes

| Component | Version |
| --- | --- |
| **K3s** | v1.33.4+k3s1 |
| **Kubeconfig mode** | `644` |
| **Secrets encryption** | Enabled (at rest) |
| **Service name** | `k3s-dspm` |

K3s is installed and managed automatically by the Access Analyzer installer. The `kubectl` command is available immediately after installation for cluster management.

## Kernel Features

The following kernel features must be available. The installer [preflight checks](/docs/accessanalyzer/1_0/install/preflight) validate these automatically:

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

ArgoCD is deployed automatically and manages the lifecycle of all Access Analyzer application components through GitOps.
