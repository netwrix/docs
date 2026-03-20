---
title: "DSPMctl CLI"
description: "Command-line reference for the DSPMctl application management tool"
sidebar_position: 45
---

# DSPMctl CLI

DSPMctl is a command-line tool installed by the Access Analyzer installer at `/usr/local/bin/dspmctl`. It provides convenient commands for managing ArgoCD-deployed applications without requiring direct `kubectl` or ArgoCD CLI interaction.

## Commands

### auto-status

Display the current sync and auto-sync status of all applications:

```bash
dspmctl auto-status
```

### enable-auto

Enable auto-sync for a specific application. When auto-sync is enabled, ArgoCD automatically applies changes when the target revision is updated in the OCI registry:

```bash
dspmctl enable-auto <APPLICATION_NAME>
```

**Example:**

```bash
dspmctl enable-auto netwrix.core-api
```

### disable-auto

Disable auto-sync for a specific application:

```bash
dspmctl disable-auto <APPLICATION_NAME>
```

### set-revision

Update the target revision (version) for an application or application set:

```bash
dspmctl set-revision <APPLICATION_PREFIX> <REVISION>
```

**Example:**

```bash
dspmctl set-revision netwrix 1.0.6
```

### sync

Manually trigger a sync for a specific application:

```bash
dspmctl sync <APPLICATION_NAME>
```

**Example:**

```bash
dspmctl sync netwrix.core-api
```

### set-helm-param

Set one or more Helm parameter overrides for an application:

```bash
dspmctl set-helm-param <APPLICATION_NAME> <KEY> <VALUE>
dspmctl set-helm-param <APPLICATION_NAME> <KEY>=<VALUE> [<KEY>=<VALUE> ...]
```

**Examples:**

```bash
# Set a single parameter
dspmctl set-helm-param netwrix.core-api image.tag v1.2.3

# Set multiple parameters
dspmctl set-helm-param netwrix.core-api image.tag=v1.2.3 replicaCount=2
```

### version

Display the DSPMctl version:

```bash
dspmctl version
```

### help

Display usage information:

```bash
dspmctl --help
```

## Common Workflows

### Upgrading to a New Version

To update all applications to a new target revision:

```bash
# Set the new version
dspmctl set-revision netwrix 1.0.7

# Verify applications are syncing
dspmctl auto-status

# Force sync if needed
dspmctl sync netwrix.infra
dspmctl sync netwrix.core-api
```

See [Upgrading Access Analyzer](/docs/accessanalyzer/1_0/install/upgrade) for the full upgrade procedure.

### Scaling an Application

```bash
dspmctl set-helm-param netwrix.core-api replicaCount 3
```

### Checking Deployment Health

```bash
# Check auto-sync status
dspmctl auto-status

# Also verify with kubectl
kubectl get apps -n argocd
kubectl get pods -n access-analyzer
```
