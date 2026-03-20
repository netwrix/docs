---
title: "System Logs"
description: "Viewing and exporting system log data"
sidebar_position: 110
---

# System Logs

System logs provide visibility into the internal operations of Access Analyzer, including application events, background job processing, and error diagnostics. These logs are distinct from audit logs, which track user actions.

## Viewing System Logs

Navigate to **System Logs** in the sidebar to access the log viewer. System logs display application-level events including:

- Application startup and shutdown events
- Background job execution (scan workers, identity sync)
- Connection errors and retry attempts
- API request errors and exceptions

## Sidekiq Dashboard

Access Analyzer uses Sidekiq for background job processing. The Sidekiq dashboard provides real-time monitoring of:

| View | Description |
|---|---|
| **Queues** | Active job queues and their current depth |
| **Workers** | Currently executing jobs and their runtime |
| **Retries** | Failed jobs scheduled for automatic retry |
| **Dead** | Jobs that have exhausted all retry attempts |
| **Scheduled** | Jobs queued for future execution |

Access the Sidekiq dashboard from **System Logs** > **Job Monitor**.

## Log Levels

System logs are categorized by severity:

| Level | Description |
|---|---|
| **ERROR** | Failures requiring attention |
| **WARN** | Unexpected conditions that did not cause failures |
| **INFO** | Normal operational events |
| **DEBUG** | Detailed diagnostic output (disabled by default) |

:::note
Debug-level logging generates significant output and can impact performance. Enable it only for targeted troubleshooting and disable it afterward.
:::
