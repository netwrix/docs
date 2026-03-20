---
title: "Monitoring and Troubleshooting"
description: "Health checks, observability, and common issue resolution"
sidebar_position: 1
---

# Monitoring and Troubleshooting

This section provides guidance for monitoring the health of your Netwrix Access Analyzer deployment and resolving common issues. Use the categories below to navigate to the relevant topic.

## Troubleshooting Categories

| Category | Description | Link |
| --- | --- | --- |
| Health Checks | Kubernetes probes and service health endpoints | [Probes](/docs/accessanalyzer/1.0/troubleshooting/healthchecks/probes), [Endpoints](/docs/accessanalyzer/1.0/troubleshooting/healthchecks/endpoints) |
| Observability | Distributed tracing and metrics collection | [OpenTelemetry](/docs/accessanalyzer/1.0/troubleshooting/observability/opentelemetry), [Prometheus](/docs/accessanalyzer/1.0/troubleshooting/observability/prometheus) |
| Job Monitoring | Background job processing and queue health | [Sidekiq](/docs/accessanalyzer/1.0/troubleshooting/jobmonitoring/sidekiq), [Queues](/docs/accessanalyzer/1.0/troubleshooting/jobmonitoring/queues), [Failed Jobs](/docs/accessanalyzer/1.0/troubleshooting/jobmonitoring/failedjobs) |
| Common Issues | Connection failures, scan errors, and database connectivity | [Connections](/docs/accessanalyzer/1.0/troubleshooting/commonissues/connectionfailures), [Scans](/docs/accessanalyzer/1.0/troubleshooting/commonissues/scanerrors), [Database](/docs/accessanalyzer/1.0/troubleshooting/commonissues/databaseconnectivity) |

## Quick Diagnostic Commands

Run the following commands to get an immediate overview of system health.

**Check all pod status across namespaces:**

```bash
kubectl get pods -A
```

**View resource consumption for nodes and pods:**

```bash
kubectl top nodes
kubectl top pods -n access-analyzer
```

**Check ArgoCD application sync status:**

```bash
kubectl get apps -n argocd
```

**View logs for a specific pod:**

```bash
kubectl logs -n access-analyzer <pod-name> --tail=100
```

**Review installer and preflight logs:**

```bash
cat /var/log/dspm-installer.log
cat /var/log/dspm-preflight.json
```

## Installer Exit Codes

If installation failed, check the exit code to identify the failure category.

| Exit Code | Meaning |
| --- | --- |
| 10 | License validation failure |
| 50 | K3s installation or startup failure |
| 60 | ArgoCD deployment failure |
| 70 | Application readiness timeout |
| 80 | Preflight check failure (CPU, memory, disk, kernel, or cgroups) |

:::note
Most troubleshooting commands require `kubectl` access to the cluster. Ensure your kubeconfig is configured correctly before running diagnostics.
:::
