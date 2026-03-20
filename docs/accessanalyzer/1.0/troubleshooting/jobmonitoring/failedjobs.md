---
title: "Failed Job Troubleshooting"
description: "Diagnosing and resolving failed background jobs"
sidebar_position: 30
---

# Failed Job Troubleshooting

When a Sidekiq background job encounters an error, it enters the retry cycle. Jobs that exhaust all retry attempts move to the dead set. This page explains how to find, diagnose, and resolve failed jobs.

## Finding Failed Jobs

Open the [Sidekiq Dashboard](/docs/accessanalyzer/1.0/troubleshooting/jobmonitoring/sidekiq) and navigate to the following tabs:

- **Retries** -- Jobs that failed and are awaiting automatic retry. Each entry displays the error class, error message, and the number of retries attempted.
- **Dead** -- Jobs that exhausted all retry attempts. Dead jobs are not retried automatically and require manual action.

## Retry Behavior

Sidekiq uses an exponential backoff strategy for retries. The delay between retries increases with each attempt, following the formula:

```
(retry_count ^ 4) + 15 + (random(10) * (retry_count + 1)) seconds
```

By default, a job retries up to 25 times before being moved to the dead set. This means a failing job may continue retrying for approximately 21 days before it is considered dead.

## Diagnosing Failures

1. **Check the error message** in the Retries or Dead tab. The error class and message typically indicate the root cause (for example, a connection timeout or validation error).
2. **Review application logs** for the time of the failure:

```bash
kubectl logs -n access-analyzer deploy/core-api --since=1h | grep -i error
```

3. **Check backing service health** -- Many job failures stem from database or Redis connectivity issues. See [Database Connectivity](/docs/accessanalyzer/1.0/troubleshooting/commonissues/databaseconnectivity).

## Handling Dead Jobs

From the **Dead** tab in the Sidekiq dashboard, you can:

- **Retry** a specific dead job to re-enqueue it for processing.
- **Delete** a dead job to remove it permanently.
- **Retry All** to re-enqueue all dead jobs at once.

:::warning
Before retrying dead jobs, ensure the underlying issue has been resolved. Retrying jobs without fixing the root cause will result in repeated failures.
:::

## Common Failure Causes

| Cause | Symptoms | Resolution |
| --- | --- | --- |
| Redis unavailable | All jobs fail simultaneously | Verify Redis pod health |
| Database timeout | Jobs in `scans` or `syncs` queues fail | Check PostgreSQL/ClickHouse connectivity |
| External API error | Connector-related jobs fail | Verify source credentials and network access |
| Memory pressure | Jobs killed mid-execution | Increase worker pod memory limits |
