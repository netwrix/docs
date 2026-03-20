---
title: "Sidekiq Dashboard"
description: "Monitoring background jobs via the Sidekiq web UI"
sidebar_position: 10
---

# Sidekiq Dashboard

Access Analyzer uses Sidekiq to process background jobs such as scans, syncs, and scheduled tasks. The Sidekiq web dashboard provides real-time visibility into job processing, queue health, and worker status.

## Accessing the Dashboard

The Sidekiq dashboard is available at the `/sidekiq` path on your Access Analyzer instance:

```
https://<your-access-analyzer-host>/sidekiq
```

The dashboard requires authentication. Enter the configured username and password when prompted.

:::note
Dashboard credentials are set during installation. Contact your system administrator if you do not have the credentials.
:::

## Dashboard Capabilities

The Sidekiq web UI provides the following views:

- **Dashboard** -- Real-time graph of processed and failed jobs over time.
- **Busy** -- Lists workers currently executing jobs, including the job class and arguments.
- **Queues** -- Displays all queues with their current size. Use this to identify backpressure.
- **Retries** -- Shows jobs that failed and are scheduled for automatic retry.
- **Scheduled** -- Lists jobs enqueued for future execution.
- **Dead** -- Contains jobs that exhausted all retry attempts. These require manual intervention.

## Checking Job Throughput

From the dashboard home page, review the **Processed** and **Failed** counters. A healthy system shows a steadily increasing processed count with a low or zero failed count.

If the failed count is climbing, navigate to the **Retries** tab to inspect the error messages and determine the root cause.

## Infrastructure Dependency

Sidekiq depends on Redis for job storage and queue management. If the Sidekiq dashboard is unreachable or shows no data, verify that the Redis pod is running:

```bash
kubectl get pods -n access-analyzer -l app=redis
```

See [Job Queues and Priorities](/docs/accessanalyzer/1.0/troubleshooting/jobmonitoring/queues) for details on individual queue behavior.
