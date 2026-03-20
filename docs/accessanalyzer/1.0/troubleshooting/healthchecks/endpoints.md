---
title: "Service Health Endpoints"
description: "Service-specific health check URLs"
sidebar_position: 20
---

# Service Health Endpoints

Access Analyzer exposes several HTTP health check endpoints that report on service availability. Use these endpoints to verify that application services are running and responsive.

## Available Endpoints

| Endpoint | Purpose | Expected Response |
| --- | --- | --- |
| `/health/live` | Liveness check. Confirms the process is running. | `200 OK` |
| `/health/ready` | Readiness check. Confirms the service can handle requests. | `200 OK` |
| `/api/v1/monitoring/__health` | Deep health check. Validates connectivity to backing services (database, cache). | `200 OK` with JSON status |

## Querying Health Endpoints

**From within the cluster, use `kubectl exec` to curl a health endpoint:**

```bash
kubectl exec -n access-analyzer deploy/core-api -- curl -s http://localhost:3000/health/live
```

**Check the readiness endpoint:**

```bash
kubectl exec -n access-analyzer deploy/core-api -- curl -s http://localhost:3000/health/ready
```

**Run the deep health check to verify backing service connectivity:**

```bash
kubectl exec -n access-analyzer deploy/core-api -- curl -s http://localhost:3000/api/v1/monitoring/__health
```

The deep health check at `/api/v1/monitoring/__health` validates that the application can reach PostgreSQL, ClickHouse, and Redis. A failure response from this endpoint identifies which backing service is unreachable.

## Interpreting Results

- A `200 OK` response indicates the service is healthy.
- A non-200 response or connection timeout indicates a problem. Check the pod logs for additional context.
- If `/health/live` passes but `/health/ready` fails, the service is running but cannot process requests, typically due to a dependency being unavailable.

:::note
The `/api/v1/monitoring/__health` endpoint performs active checks against all backing services. Use it for thorough health verification, but avoid calling it at high frequency as it places load on downstream systems.
:::
