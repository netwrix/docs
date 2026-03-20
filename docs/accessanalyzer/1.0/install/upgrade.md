---
title: "Upgrading Access Analyzer"
description: "Update Access Analyzer to a new version using DSPMctl"
sidebar_position: 70
---

# Upgrading Access Analyzer

Access Analyzer uses ArgoCD for GitOps-based application management. Upgrades are performed by updating the target revision, which triggers ArgoCD to pull and deploy the new version from the Netwrix OCI registry.

## Upgrade Procedure

### Step 1: Check Current Version

```bash
dspmctl auto-status
```

Note the current target revision displayed for each application.

### Step 2: Set the New Target Revision

Update the target revision to the desired version:

```bash
dspmctl set-revision netwrix <NEW_VERSION>
```

**Example:**

```bash
dspmctl set-revision netwrix 1.0.7
```

### Step 3: Monitor the Upgrade

If auto-sync is enabled, ArgoCD automatically detects the revision change and begins deploying the new version. Monitor the status:

```bash
# Watch ArgoCD application sync status
kubectl get apps -n argocd -w

# Check DSPMctl status
dspmctl auto-status
```

If auto-sync is not enabled, manually trigger the sync:

```bash
dspmctl sync netwrix.infra
dspmctl sync netwrix.core-api
```

### Step 4: Verify the Upgrade

Confirm all applications are synced and healthy:

```bash
kubectl get apps -n argocd
kubectl get pods -n access-analyzer
```

All applications should show `Synced` and `Healthy` status. All pods should be `Running` or `Completed`.

## Rollback

To revert to a previous version, set the target revision back:

```bash
dspmctl set-revision netwrix <PREVIOUS_VERSION>
```

ArgoCD will redeploy the previous version.

:::warning
Test upgrades in a non-production environment before applying to production systems.
:::
