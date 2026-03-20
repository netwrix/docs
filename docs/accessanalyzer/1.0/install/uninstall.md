---
title: "Uninstalling Access Analyzer"
description: "Remove Access Analyzer and all associated components"
sidebar_position: 80
---

# Uninstalling Access Analyzer

To completely remove Access Analyzer from the system, run the K3s uninstall script provided by the installer.

:::warning
Uninstalling removes all Kubernetes resources, databases, and application data. This action is irreversible. Back up any data you need before proceeding.
:::

## Uninstall Procedure

### Step 1: Run the Uninstall Script

```bash
sudo /usr/local/bin/k3s-dspm-uninstall.sh
```

This script:

- Stops and removes the K3s service
- Deletes all Kubernetes resources (pods, services, volumes)
- Removes K3s binaries and configuration
- Cleans up container images and data

### Step 2: Remove Remaining Configuration

Remove the kubeconfig and DSPMctl configuration:

```bash
rm -rf ~/.kube/config
sudo rm -rf /opt/dspm
sudo rm -f /usr/local/bin/dspmctl
```

### Step 3: Verify Removal

Confirm that K3s is no longer running:

```bash
systemctl status k3s-dspm
```

The service should not be found or should show as inactive.

## Reinstallation

After uninstalling, you can reinstall Access Analyzer by running the installer again. See [Quick Install](/docs/accessanalyzer/1_0/install/quickinstall) or [Step-by-Step Installation](/docs/accessanalyzer/1_0/install/stepbystep).
