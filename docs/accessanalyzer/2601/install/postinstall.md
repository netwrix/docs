---
title: "Post-Installation Validation"
description: "Verify cluster health and application status after installation"
sidebar_position: 40
---

# Post-Installation Validation

After the installer completes, validate that all Access Analyzer components are running correctly.

## Cluster Health

Verify that all Kubernetes pods are healthy:

```bash
kubectl get pods -A -o wide
```

All pods should be in one of these states:

| Status | Meaning |
| --- | --- |
| `Running` | Pod is active and healthy |
| `Completed` | One-time job completed successfully |

If any pods show `CrashLoopBackOff`, `Error`, or `ImagePullBackOff`, check the [application logs](/docs/accessanalyzer/2601/configurations/logs).

## ArgoCD Application Status

Check the sync and health status of all ArgoCD-managed applications:

```bash
kubectl get apps -n argocd
```

Each application should show:

| Field | Expected Value |
| --- | --- |
| **SYNC STATUS** | `Synced` |
| **HEALTH STATUS** | `Healthy` |

## ArgoCD UI

Access the ArgoCD web interface for a visual overview of all applications:

1. Start port forwarding:

   ```bash
   kubectl port-forward svc/argocd-server -n argocd 8090:443
   ```

2. Open `https://localhost:8090` in a browser

3. Retrieve the admin password:

   ```bash
   kubectl -n argocd get secret argocd-initial-admin-secret \
     -o jsonpath='{.data.password}' | base64 -d; echo
   ```

4. Sign in with username `admin` and the retrieved password

The ArgoCD dashboard displays each application's sync status, health, and resource tree.

## Application Health Table

The following components should be deployed and healthy after a successful installation:

| Component | Namespace | Type |
| --- | --- | --- |
| **Core API** | `access-analyzer` | Rails application server |
| **Web Application** | `access-analyzer` | React frontend |
| **Connector API** | `access-analyzer` | Go connector execution service |
| **PostgreSQL** | `access-analyzer` | Primary relational database |
| **ClickHouse** | `access-analyzer` | Analytics and log storage |
| **Redis** | `access-analyzer` | Session cache and job queues |
| **Metabase** | `access-analyzer` | Embedded analytics dashboards |
| **Traefik** | `kube-system` | Ingress controller and routing |
| **OpenTelemetry Collector** | `access-analyzer` | Observability data pipeline |
| **Prometheus** | `access-analyzer` | Metrics collection |
| **ArgoCD** | `argocd` | GitOps application controller |

## Resource Usage

Monitor node-level resource consumption:

```bash
kubectl top nodes
kubectl top pods -A --sort-by=memory
```

## Next Steps

- [Create your first admin account](/docs/accessanalyzer/2601/configurations/users) and sign in
- [Configure a data source](/docs/accessanalyzer/2601/gettingstarted/active-directory/active-directory) and run your first scan
- Review [install commands](/docs/accessanalyzer/2601/install/install-commands) for ongoing application management
