---
title: "Quick Install"
description: "Get Access Analyzer up and running in minutes with this streamlined installation guide"
sidebar_position: 5
---

# Quick Install

This guide walks you through installing Netwrix Access Analyzer on a fresh Linux VM. For detailed explanations of each step, see the [Step-by-Step Installation](/docs/accessanalyzer/1_0/install/stepbystep) guide.

## Prerequisites Checklist

Before running the installer, confirm the following:

| Requirement | Minimum | Recommended |
| --- | --- | --- |
| **Operating System** | Ubuntu 24.04 LTS (x86_64) — recommended; see note below | — |
| **Memory** | 8 GB RAM | 16 GB RAM |
| **CPU** | 6 vCPUs | 8 vCPUs |
| **Disk Space** | 20 GB free | 50 GB free |
| **Network** | Outbound HTTPS (port 443) to required endpoints — see [Required Domains](#required-domains) below | — |
| **License** | Valid Netwrix license key | — |

:::note
**Supported OS:** Ubuntu 24.04 LTS is the primary tested platform. Red Hat Enterprise Linux (RHEL) 8 and 9, CentOS, Fedora, and Debian stable releases are also compatible. AIX and non-Linux operating systems are not supported.
:::

:::note
If running on a hypervisor, configure **static memory allocation** (not dynamic/ballooned memory). See [Hardware and System Requirements](/docs/accessanalyzer/2601/install/system/requirements) for hypervisor-specific instructions.
:::

## Required Domains

All endpoints use HTTPS (port 443). The following domains must be reachable from the Access Analyzer server before installation. For firewall rule examples, see [Network and Port Requirements](/docs/accessanalyzer/1_0/install/system/network).

| Endpoint | Category | Purpose | When Required |
| --- | --- | --- | --- |
| `api.keygen.sh` | Keygen / Licensing | License validation API | Installation and updates |
| `oci.pkg.keygen.sh` | Keygen / Licensing | Netwrix OCI registry — Helm charts and application images | Installation and updates |
| `raw.pkg.keygen.sh` | Keygen / Licensing | Installer script download | Installation and updates |
| `keygen-dist.c3c9112df8df715f42d1162cdce5dba1.r2.cloudflarestorage.com` | Keygen / Licensing CDN | Keygen artifact storage | Installation and updates |
| `api.github.com` | GitHub | GitHub API | Installation only |
| `github.com` | GitHub | Repository and release access | Installation only |
| `raw.githubusercontent.com` | GitHub | ArgoCD bootstrap manifests | Installation only |
| `release-assets.githubusercontent.com` | GitHub | Release asset downloads | Installation only |
| `pkg-containers.githubusercontent.com` | GitHub Container Registry | GitHub Packages CDN | Installation and updates |
| `ghcr.io` | GitHub Container Registry | Container images | Installation and updates |
| `auth.docker.io` | Docker Hub | Docker authentication | Installation and updates |
| `registry-1.docker.io` | Docker Hub | Container images | Installation and updates |
| `production.cloudflare.docker.com` | Docker CDN | Docker Hub CDN | Installation and updates |
| `docker-images-prod.6aa30f8b08e16409b46e0173d6de2f56.r2.cloudflarestorage.com` | Docker CDN | Docker image storage | Installation and updates |
| `d2glxqk2uabbnd.cloudfront.net` | Docker CDN | Docker image CDN | Installation and updates |
| `get.k3s.io` | K3s / Rancher | K3s installer download | Installation only |
| `rpm.rancher.io` | K3s / Rancher | K3s package repository | Installation only |
| `storage.googleapis.com` | K3s / Rancher | K3s artifact storage | Installation only |

## Step 1: Prepare the System

Update the operating system and verify internet connectivity:

```bash
sudo apt update && sudo apt upgrade -y

# Verify outbound access to the Netwrix registry
curl -I https://oci.pkg.keygen.sh:443
```

## Step 2: Set Your License Key

```bash
export LICENSE_KEY='<YOUR_LICENSE_KEY>'
```

:::warning
Your license key grants access to the Netwrix package registry. Keep it confidential and clear your shell history after installation. See [Security Best Practices](/docs/accessanalyzer/1_0/install/security).
:::

## Step 3: Run the Installer

Download and execute the installer in a single command:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -
```

The installer performs the following automatically:

1. Preflight system validation (memory, CPU, disk, kernel)
2. K3s Kubernetes deployment (v1.33.4)
3. ArgoCD installation (v3.2.0)
4. Application deployment from the Netwrix OCI registry
5. Health verification of all components

:::note
Installation typically takes 15–30 minutes depending on network speed and system resources. The installer displays progress in real time.
:::

## Step 4: Verify the Installation

After the installer completes, confirm all pods are running:

```bash
kubectl get pods -A
```

All pods should show a `Running` or `Completed` status. Check ArgoCD application sync status:

```bash
kubectl get apps -n argocd
```

## Step 5: Access the Application

Open a browser and navigate to:

```
https://<SERVER_IP_OR_HOSTNAME>
```

:::note
Access Analyzer uses a self-signed TLS certificate by default. Accept the browser security warning to proceed.
:::

## Step 6: Create Your Admin Account

1. On the login page, click **Create Account**
2. Enter your name, email address, and password
3. Click **Create Account** to finalize

The first account created automatically receives the **Administrator** role.

## Step 7: Sign In

1. Enter your email address and password
2. Click **Sign In**

You are now signed in to Netwrix Access Analyzer. See [Getting Started](/docs/accessanalyzer/1_0/gettingstarted/overview) for next steps, including configuring your first data source and running a scan.

## Optional: Validate with Dry Run

To validate system readiness without installing, use dry-run mode:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --dry-run
```

This runs all [preflight checks](/docs/accessanalyzer/1_0/install/preflight) and writes results to `/var/log/dspm-preflight.json` without modifying the system.

## Troubleshooting

If the installation fails, check the installer log:

```bash
cat /var/log/dspm-installer.log
```

For common issues and resolutions, see [Troubleshooting](/docs/accessanalyzer/1_0/troubleshooting/overview).
