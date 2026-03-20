---
title: "Liveness and Readiness Probes"
description: "Kubernetes health probe endpoints"
sidebar_position: 10
---

# Liveness and Readiness Probes

Kubernetes uses liveness and readiness probes to monitor the health of pods in the Access Analyzer deployment. Understanding these probes helps you diagnose pod restarts and service availability issues.

## How Probes Work

- **Liveness probes** determine whether a container is running. If a liveness probe fails, Kubernetes restarts the container.
- **Readiness probes** determine whether a container is ready to accept traffic. If a readiness probe fails, Kubernetes removes the pod from service endpoints until it passes again.

## Checking Probe Status

**View the current state of all pods in the Access Analyzer namespace:**

```bash
kubectl get pods -n access-analyzer
```

A pod in `CrashLoopBackOff` status typically indicates repeated liveness probe failures. A pod showing `0/1 Ready` may be failing its readiness probe.

**Inspect probe configuration and recent events for a specific pod:**

```bash
kubectl describe pod <pod-name> -n access-analyzer
```

Look for the `Liveness` and `Readiness` fields in the output to see the probe endpoint, interval, timeout, and failure threshold. The **Events** section at the bottom shows recent probe failures and container restarts.

**View logs from a pod that is restarting:**

```bash
kubectl logs <pod-name> -n access-analyzer --previous
```

The `--previous` flag retrieves logs from the last terminated container, which is useful when a pod has already restarted.

## Key Pods to Monitor

| Pod | Purpose |
| --- | --- |
| `core-api` | Primary API server |
| `webapp` | Web application frontend |
| `connector-api` | Source connector service |
| `postgresql` | Relational data store |
| `clickhouse` | Analytics data store |
| `redis` | Session and cache store |

:::warning
Frequent pod restarts caused by probe failures often indicate resource pressure (memory or CPU) rather than application bugs. Check node resource utilization with `kubectl top nodes` before investigating application-level issues.
:::
