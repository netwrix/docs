---
title: "Job Queues and Priorities"
description: "Understanding job queue structure and priority levels"
sidebar_position: 20
---

# Job Queues and Priorities

Access Analyzer processes background work through seven Sidekiq queues, each serving a specific purpose. Understanding queue roles and priorities helps you identify processing bottlenecks and backpressure.

## Queue Overview

| Queue | Priority | Purpose |
| --- | --- | --- |
| `critical` | Highest | System-critical operations that must complete promptly |
| `scans` | High | Data source scan execution |
| `syncs` | High | Data synchronization between sources and the platform |
| `scheduler` | Medium | Periodic task scheduling and orchestration |
| `default` | Medium | General-purpose background work |
| `mailers` | Low | Email notification delivery |
| `low` | Lowest | Deferred or non-urgent tasks |

Sidekiq workers process queues in priority order. Higher-priority queues are drained before lower-priority ones.

## Monitoring Queue Depth

**From the Sidekiq dashboard**, navigate to the **Queues** tab to view the current size of each queue. A queue size that grows continuously indicates that jobs are being enqueued faster than workers can process them.

**From the command line, query Prometheus for queue sizes:**

```bash
kubectl exec -n access-analyzer deploy/prometheus -- \
  promtool query instant http://localhost:9090 'sidekiq_queue_size'
```

## Identifying Backpressure

Backpressure occurs when one or more queues accumulate jobs faster than they are processed. Common causes include:

- **Resource constraints** -- Insufficient CPU or memory on worker pods. Check with `kubectl top pods -n access-analyzer`.
- **Downstream dependency failures** -- Database or external service unavailability causing job retries and requeuing.
- **Large scan jobs** -- A scan targeting a large data source can consume worker capacity, delaying other queues.

:::warning
If the `critical` queue has a sustained non-zero depth, investigate immediately. Delayed critical jobs can affect system stability and data consistency.
:::

## Corrective Actions

- Scale worker replicas if resource limits allow.
- Investigate and resolve downstream dependency failures (see [Database Connectivity](/docs/accessanalyzer/1.0/troubleshooting/commonissues/databaseconnectivity)).
- Stagger large scan jobs to avoid overwhelming worker capacity.
