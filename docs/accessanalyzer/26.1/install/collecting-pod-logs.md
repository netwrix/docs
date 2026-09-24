---
title: Collecting Pod Logs
description: Pull logs from an Access Analyzer install with kubectl, including pods that are crash-looping or never start, and bundle them for Netwrix Support.
sidebar_position: 7
---

These are operator-facing procedures for pulling logs from an Access Analyzer install, including pods that are crash-looping or never start. Run every command on the install host. All workloads run in the `access-analyzer` namespace; the ArgoCD Applications that deploy them live in `argocd`.

## Prerequisites

The k3s kubeconfig is readable only by root. Run `kubectl` with `sudo`, or point `KUBECONFIG` at the k3s file in a root shell:

```bash
sudo -i
export KUBECONFIG=/etc/rancher/k3s/k3s.yaml
kubectl get nodes
```

Without root, `kubectl` falls back to `localhost:8080` and fails with `connection refused`. That error means a permissions problem, not a cluster outage.

Create a working directory for the files you collect:

```bash
BUNDLE=/tmp/aa-support-$(date +%Y%m%d-%H%M%S)
mkdir -p "$BUNDLE"
```

## Find the Failing Pods

```bash
kubectl get pods -n access-analyzer -o wide
```

What to look for:

| Column | Healthy | Investigate |
|---|---|---|
| `STATUS` | `Running`, or `Completed` for Jobs | `CrashLoopBackOff`, `Error`, `Init:<n>/<m>`, `Init:CrashLoopBackOff`, `Pending`, `ImagePullBackOff`, `CreateContainerConfigError` |
| `READY` | `1/1`, `2/2`, ... | Fewer ready than total |
| `RESTARTS` | `0` or a small, old count | A count that keeps climbing |

List only unhealthy pods:

```bash
kubectl get pods -n access-analyzer \
  --field-selector=status.phase!=Running,status.phase!=Succeeded
```

A `CrashLoopBackOff` pod can still report phase `Running` between restarts. Check the `RESTARTS` column in the full list too.

## Collect Logs From a Running Pod

```bash
kubectl logs -n access-analyzer <pod-name> --all-containers --timestamps \
  > "$BUNDLE/<pod-name>.log"
```

To read logs for a whole Deployment without looking up the pod name:

```bash
kubectl logs -n access-analyzer deploy/<deployment-name> --all-containers --timestamps
```

`--all-containers` includes init containers and sidecars. Without it, `kubectl` picks one container and warns about the rest.

### Main Containers Per Workload

Use these names with `-c <container>` when you need a single container:

| Deployment | Main container | Init containers |
|---|---|---|
| `core-api` | `core-api` | `wait-for-postgres`, `wait-for-redis`, `wait-for-clickhouse`, `init-exports-dir`, `init-ca-bundle` |
| `core-api-worker` | `worker` | `wait-for-postgres`, `wait-for-clickhouse`, `init-exports-dir` |
| `platform-service` | `platform-service` | `wait-for-zitadel-bootstrap`, `init-ca-bundle` |
| `connector-api` | `connector-api` | `init-ca-bundle` |
| `webapp` | `webapp` | none |
| `zitadel` | `zitadel` | `init-db` |
| `metabase` | `metabase` | `wait-for-postgres` |

Databases run as StatefulSets: `clickhouse-0`, `postgres-0`, and `redis-0`.

## Collect Logs From a Crash-Looping Pod

When a container restarts, `kubectl logs` shows the new, often empty instance. The error that caused the crash is in the **previous** instance:

```bash
kubectl logs -n access-analyzer <pod-name> -c <container> --previous --timestamps \
  > "$BUNDLE/<pod-name>-<container>-previous.log"
```

What to look for: the last 20–50 lines. Crashes usually end with a fatal error, a panic stack trace, or a failed connection to a dependency (Postgres, ClickHouse, Redis, Zitadel).

`--previous` returns `previous terminated container ... not found` if the container hasn't restarted yet. Use the command without `--previous`.

### Pod Stuck in `Init:`

The pod is waiting on an init container. The `wait-for-*` containers loop until a dependency answers, so the stuck one names the dependency to check:

```bash
kubectl logs -n access-analyzer <pod-name> -c <init-container> --timestamps
```

For example, `core-api` stuck in `wait-for-clickhouse` means you should collect `clickhouse-0` logs next.

## Describe a Pod That Never Starts

Pods in `Pending`, `ImagePullBackOff`, or `CreateContainerConfigError` have no logs. The reason is in the pod's events:

```bash
kubectl describe pod -n access-analyzer <pod-name> > "$BUNDLE/<pod-name>-describe.txt"
```

What to look for, in the `Events` section at the bottom and in each container's `Last State`:

| Message | Meaning |
|---|---|
| `OOMKilled` (exit code 137) | Container exceeded its memory limit |
| `FailedScheduling ... Insufficient cpu/memory` | Host is too small for the deployment size |
| `Failed to pull image` / `ErrImagePull` | Registry unreachable, proxy or firewall issue, or air-gap images missing |
| `secret "<name>" not found` | An initialization Job didn't finish; check ArgoCD status below |
| `Liveness probe failed` | Container started but stopped responding |

Collect recent events for the whole namespace:

```bash
kubectl get events -n access-analyzer --sort-by=.lastTimestamp \
  > "$BUNDLE/events.txt"
```

Events expire after about an hour. Collect them early.

## Check ArgoCD Application Status

ArgoCD deploys each component as an Application named `netwrix.<component>`. An Application that isn't `Synced` / `Healthy` points at the component to investigate:

```bash
kubectl get applications -n argocd
```

Expected output: every row shows `SYNC STATUS` `Synced` and `HEALTH STATUS` `Healthy`. For one that doesn't:

```bash
kubectl describe application -n argocd netwrix.<component> \
  > "$BUNDLE/app-<component>.txt"
```

What to look for: `Status > Conditions` and `Operation State > Message`. A failed sync hook (for example `db-seeds` or `zitadel-bootstrap`) shows up here as a failed Job. Collect that Job's pod logs next:

```bash
kubectl get jobs -n access-analyzer
kubectl logs -n access-analyzer job/<job-name> --all-containers --timestamps
```

## Query Historical Logs in ClickHouse

An OpenTelemetry agent ships every `access-analyzer` pod's logs into ClickHouse, table `access_analyzer_logs.otel_logs`, kept for 30 days. Use this when the pod has been replaced and `kubectl logs --previous` no longer has what you need.

This only works while `clickhouse-0` is running.

```bash
kubectl exec -n access-analyzer clickhouse-0 -- sh -c \
  'clickhouse-client --user "$CLICKHOUSE_USER" --password "$CLICKHOUSE_PASSWORD" --query "
    SELECT Timestamp, ServiceName, SeverityText, Body
    FROM access_analyzer_logs.otel_logs
    WHERE ServiceName = '\''<deployment-name>'\''
      AND Timestamp > now() - INTERVAL 2 HOUR
    ORDER BY Timestamp
    FORMAT TSV"' \
  > "$BUNDLE/<deployment-name>-clickhouse.tsv"
```

`ServiceName` is the owning Deployment, StatefulSet, or CronJob name (for example `core-api`, `core-api-worker`, `clickhouse`), not the pod name.

## Collect the Installer Log

The installer writes its own log on the host:

```bash
cp /var/log/dspm-installer.log "$BUNDLE/"
```

## Bundle Everything for Support

Add a snapshot of cluster state, then archive the directory:

```bash
kubectl get pods,deploy,statefulset,jobs,pvc -n access-analyzer -o wide > "$BUNDLE/resources.txt"
kubectl get applications -n argocd > "$BUNDLE/argocd-apps.txt"
kubectl get nodes -o wide > "$BUNDLE/nodes.txt"
tar -czf "$BUNDLE.tar.gz" -C "$(dirname "$BUNDLE")" "$(basename "$BUNDLE")"
ls -lh "$BUNDLE.tar.gz"
```

:::warning
Before sending, review the bundle for customer data. Application logs mask common secrets, but can still contain hostnames, usernames, and file paths from scanned sources.
:::

## Clean Up

```bash
rm -rf "$BUNDLE" "$BUNDLE.tar.gz"
exit   # leave the root shell opened in Prerequisites
```

Delete the archive only after support confirms receipt.
