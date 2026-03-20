---
title: "Prometheus Monitoring"
description: "Prometheus metrics and alerting"
sidebar_position: 20
---

# Prometheus Monitoring

Access Analyzer includes a Prometheus instance that collects metrics from application services and infrastructure components. Use Prometheus to monitor resource utilization, request rates, and application performance.

## Accessing Prometheus

The Prometheus pod runs in the `access-analyzer` namespace. To access the Prometheus web UI, set up a port forward:

```bash
kubectl port-forward -n access-analyzer deploy/prometheus 9090:9090
```

Then open `http://localhost:9090` in your browser.

## Key Metrics to Monitor

| Metric | Description |
| --- | --- |
| `container_memory_usage_bytes` | Memory consumption per container |
| `container_cpu_usage_seconds_total` | CPU usage per container |
| `http_request_duration_seconds` | Request latency histogram |
| `http_requests_total` | Total request count by status code |
| `sidekiq_queue_size` | Number of jobs waiting in each Sidekiq queue |
| `pg_stat_activity_count` | Active PostgreSQL connections |

## Useful PromQL Queries

**Check memory usage for Access Analyzer pods:**

```bash
container_memory_usage_bytes{namespace="access-analyzer"}
```

**Calculate request error rate over the last 5 minutes:**

```bash
rate(http_requests_total{namespace="access-analyzer", status=~"5.."}[5m])
```

**Monitor Sidekiq queue depth:**

```bash
sidekiq_queue_size{namespace="access-analyzer"}
```

## Recording Rules

Access Analyzer ships with Prometheus recording rules that pre-compute frequently used metric aggregations. Recording rules reduce query latency for dashboards and alerts. View the active recording rules in the Prometheus UI under **Status > Rules**.

## Verifying Prometheus Health

**Confirm the Prometheus pod is running:**

```bash
kubectl get pods -n access-analyzer -l app=prometheus
```

**Check Prometheus targets to ensure all scrape endpoints are reachable:**

Open `http://localhost:9090/targets` (with port forward active) and verify all targets show an **UP** state.

:::warning
If Prometheus targets appear as **DOWN**, verify that the target pods are running and that network policies allow traffic from the Prometheus pod on the metrics port.
:::
