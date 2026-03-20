---
title: "Database Connectivity"
description: "Resolving PostgreSQL, ClickHouse, and Redis connectivity issues"
sidebar_position: 30
---

# Database Connectivity

Access Analyzer relies on three backing data stores: PostgreSQL for relational data, ClickHouse for analytics and trace storage, and Redis for sessions, caching, and job queues. Connectivity failures to any of these services impact application functionality.

## Checking Pod Status

**Verify that all database pods are running:**

```bash
kubectl get pods -n access-analyzer -l app=postgresql
kubectl get pods -n access-analyzer -l app=clickhouse
kubectl get pods -n access-analyzer -l app=redis
```

A pod not in `Running` status requires immediate attention. Use `kubectl describe pod <pod-name> -n access-analyzer` to inspect events and error details.

## PostgreSQL

PostgreSQL stores core application data including user accounts, source configurations, and scan results.

**Test connectivity from the core-api pod:**

```bash
kubectl exec -n access-analyzer deploy/core-api -- pg_isready -h postgresql -p 5432
```

**Check active connections:**

```bash
kubectl exec -n access-analyzer deploy/postgresql -- psql -U postgres -c "SELECT count(*) FROM pg_stat_activity;"
```

Common issues:
- **Too many connections** -- The connection pool is exhausted. Restart the application pods or increase the pool size.
- **Pod in CrashLoopBackOff** -- Check PostgreSQL logs for disk space or corruption errors.

## ClickHouse

ClickHouse stores analytics data and OpenTelemetry traces in the `access_analyzer_logs` database.

**Test connectivity:**

```bash
kubectl exec -n access-analyzer deploy/clickhouse -- clickhouse-client --query "SELECT 1"
```

**Check database availability:**

```bash
kubectl exec -n access-analyzer deploy/clickhouse -- clickhouse-client --query "SHOW DATABASES"
```

Common issues:
- **Disk pressure** -- ClickHouse can consume significant storage for trace and analytics data. Monitor disk usage with `kubectl exec -n access-analyzer deploy/clickhouse -- df -h`.
- **Query timeout** -- Large analytical queries can time out. Check ClickHouse server logs for slow query warnings.

## Redis

Redis provides session storage, caching, and serves as the job queue backend for Sidekiq.

**Test connectivity:**

```bash
kubectl exec -n access-analyzer deploy/redis -- redis-cli ping
```

A successful response returns `PONG`.

**Check memory usage:**

```bash
kubectl exec -n access-analyzer deploy/redis -- redis-cli info memory | grep used_memory_human
```

Common issues:
- **MaxMemory reached** -- Redis evicts keys or rejects writes when memory is full. Increase the memory limit or review eviction policies.
- **Connection refused** -- The Redis pod may have restarted. Check pod status and events.

## Deep Health Check

Use the application health endpoint to validate connectivity to all backing services at once:

```bash
kubectl exec -n access-analyzer deploy/core-api -- curl -s http://localhost:3000/api/v1/monitoring/__health
```

This endpoint reports the status of each backing service and identifies which connection is failing. See [Service Health Endpoints](/docs/accessanalyzer/1.0/troubleshooting/healthchecks/endpoints) for more details.

:::warning
Database connectivity failures cascade across the application. If multiple services report errors simultaneously, start by verifying database pod health before troubleshooting individual application pods.
:::
