---
title: "Step-by-Step Installation"
description: "Detailed walkthrough of the Access Analyzer installation process"
sidebar_position: 35
---

# Step-by-Step Installation

This guide provides a detailed walkthrough of the Netwrix Access Analyzer installation process with explanations for each phase. For a condensed version, see the [Quick Install](/docs/accessanalyzer/1_0/install/quickinstall) guide.

## Pre-Installation Checklist

Complete the following before starting the installer:

| Step | Action | Reference |
| --- | --- | --- |
| 1 | Provision a Linux VM meeting hardware requirements | [Hardware and System Requirements](/docs/accessanalyzer/1_0/install/requirements) |
| 2 | Configure static memory allocation on the hypervisor | [Virtualization Configuration](/docs/accessanalyzer/1_0/install/requirements#virtualization-and-hypervisor-configuration) |
| 3 | Verify outbound HTTPS connectivity to required endpoints | [Network Configuration](/docs/accessanalyzer/1_0/install/network) |
| 4 | Obtain your Netwrix license key | Contact Netwrix Sales or Support |
| 5 | Update the operating system | See step 1 below |

## Step 1: Update the Operating System

Ensure all system packages are current:

```bash
sudo apt update && sudo apt upgrade -y
```

Reboot if kernel updates were applied:

```bash
sudo reboot
```

## Step 2: Validate System Readiness (Optional)

Run the installer in dry-run mode to verify that the system meets all requirements without making changes:

```bash
export LICENSE_KEY='<YOUR_LICENSE_KEY>'
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -s -- --dry-run
```

Review the results in `/var/log/dspm-preflight.json`. Address any `FAIL` items before proceeding. See [Preflight Checks](/docs/accessanalyzer/1_0/install/preflight) for details on each check.

## Step 3: Set the License Key

Export your Netwrix license key as an environment variable:

```bash
export LICENSE_KEY='<YOUR_LICENSE_KEY>'
```

:::warning
Do not store the license key in scripts or configuration files that are committed to version control. Clear your shell history after installation — see [Security Best Practices](/docs/accessanalyzer/1_0/install/security).
:::

## Step 4: Run the Installer

Download and execute the installer:

```bash
curl -sLfo - "https://raw.pkg.keygen.sh/v1/accounts/netwrix/artifacts/dspm-install.sh?auth=license:$LICENSE_KEY" | bash -
```

The installer executes the following phases automatically:

### Phase 1 — Preflight Checks

The installer validates system resources (memory, CPU, disk), kernel features (cgroups, overlay FS, namespaces), and system access. If any critical check fails, the installer exits with code `80`. If warnings are present, you are prompted to continue or abort.

### Phase 2 — K3s Installation

K3s (v1.33.4+k3s1) is deployed as a lightweight Kubernetes distribution. The installer configures:

- Kubeconfig permissions (`644`)
- Secrets-at-rest encryption
- K3s service name `dspm`

### Phase 3 — ArgoCD Installation

ArgoCD (v3.2.0) is deployed using Kustomize-based manifests with dynamic patches. ArgoCD provides GitOps-based application lifecycle management for all Access Analyzer components.

### Phase 4 — DSPMctl Wrapper

The `dspmctl` command-line tool is installed to `/usr/local/bin/dspmctl`. This tool provides convenient commands for managing ArgoCD applications. See [DSPMctl CLI](/docs/accessanalyzer/1_0/install/dspmctl).

### Phase 5 — Application Deployment

Applications are deployed from the Netwrix OCI registry (`oci://oci.pkg.keygen.sh/netwrix/dspm-apps-helm`). ArgoCD pulls Helm charts and deploys all services into the `access-analyzer` namespace.

### Phase 6 — Health Verification

The installer monitors application health with a 30-minute timeout, checking every 2 seconds. Once all applications report healthy status, the installer prints a success summary.

## Step 5: Verify the Installation

After the installer completes successfully, verify the cluster state:

```bash
# Check all pods across all namespaces
kubectl get pods -A

# Check ArgoCD application sync status
kubectl get apps -n argocd

# Check node resource usage
kubectl top nodes
```

All pods should be in `Running` or `Completed` status. All ArgoCD applications should show `Synced` and `Healthy`.

## Step 6: Access the Application

Open a browser and navigate to:

```
https://<SERVER_IP_OR_HOSTNAME>
```

:::note
Access Analyzer uses a self-signed TLS certificate by default. Your browser will display a security warning — accept it to proceed. See [SSL / TLS Configuration](/docs/accessanalyzer/1_0/install/ssl) for custom certificate setup.
:::

## Step 7: Create the First Admin Account

1. On the login page, click **Create Account**
2. Enter your full name, email address, and a password
3. Click **Create Account**

The first account created is automatically assigned the **Administrator** role with full access to all features.

## Step 8: Sign In

1. Enter your email address and password
2. Click **Sign In**

You are now ready to begin configuring Access Analyzer. See [Getting Started](/docs/accessanalyzer/1_0/gettingstarted/overview) for your next steps.

## Installation Log

The installer writes a detailed log to `/var/log/dspm-installer.log`. If the installation fails, review this file for diagnostic information:

```bash
cat /var/log/dspm-installer.log
```

For additional troubleshooting guidance, see [Troubleshooting](/docs/accessanalyzer/1_0/troubleshooting/overview).
