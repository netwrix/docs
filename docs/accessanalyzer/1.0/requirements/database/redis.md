---
title: "Redis"
description: "Redis version and configuration"
sidebar_position: 30
---

# Redis

Redis provides in-memory caching, session storage, and job queue management for Access Analyzer.

## Version

| Component | Value |
| --- | --- |
| **Redis version** | 8.4.0 |
| **Namespace** | `access-analyzer` |
| **Port** | 6379 |

## Provisioning

Redis is **automatically provisioned** by the installer. No manual setup is required.

## Data Stored

| Function | Description |
| --- | --- |
| **User sessions** | Session data for authenticated users (with IP validation and configurable TTL) |
| **Sidekiq job queues** | Background job processing for scans, syncs, mailers, and system tasks |
| **Application cache** | Frequently accessed data for reduced database load |

## Job Queues

Redis backs the Sidekiq job processing system, which uses the following queues:

| Queue | Purpose |
| --- | --- |
| `critical` | High-priority system operations |
| `scans` | Scan execution jobs |
| `syncs` | Identity synchronization jobs |
| `scheduler` | Scheduled job dispatch |
| `default` | General-purpose jobs |
| `mailers` | Email notification delivery |
| `low` | Low-priority background tasks |
