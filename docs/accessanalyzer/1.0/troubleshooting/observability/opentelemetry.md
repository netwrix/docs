---
title: "OpenTelemetry Traces and Metrics"
description: "Distributed tracing and metric collection"
sidebar_position: 10
---

# OpenTelemetry Traces and Metrics

Access Analyzer uses OpenTelemetry (OTel) for distributed tracing. Traces are collected by the `otel-collector` pod and stored in ClickHouse, allowing you to analyze request flows and identify performance bottlenecks.

## Architecture

Trace data flows through the following path:

1. Application services instrument outgoing requests and operations with OTel spans.
2. The `otel-collector` pod receives spans and exports them to ClickHouse.
3. Traces are stored in the `access_analyzer_logs` database in ClickHouse.

## Querying Traces in ClickHouse

**Connect to the ClickHouse pod:**

```bash
kubectl exec -it -n access-analyzer deploy/clickhouse -- clickhouse-client
```

**List available tables in the trace database:**

```bash
USE access_analyzer_logs;
SHOW TABLES;
```

**Query recent traces by service name:**

```bash
SELECT TraceId, SpanName, Duration, StatusCode
FROM otel_traces
WHERE ServiceName = 'core-api'
ORDER BY Timestamp DESC
LIMIT 20;
```

**Find slow spans exceeding a duration threshold (in nanoseconds):**

```bash
SELECT TraceId, SpanName, Duration
FROM otel_traces
WHERE Duration > 5000000000
ORDER BY Duration DESC
LIMIT 10;
```

## Common Trace Analysis

- **High latency requests** -- Query for spans with long durations to identify slow database queries or external API calls.
- **Error spans** -- Filter by `StatusCode` to find spans that completed with errors.
- **Cross-service tracing** -- Use a `TraceId` to follow a request across `core-api`, `connector-api`, and backing services.

## Verifying the OTel Collector

**Check that the collector pod is running:**

```bash
kubectl get pods -n access-analyzer -l app=otel-collector
```

**View collector logs for export errors:**

```bash
kubectl logs -n access-analyzer deploy/otel-collector --tail=50
```

:::note
Trace retention depends on your ClickHouse storage configuration. Monitor disk usage on the ClickHouse pod to ensure traces are not consuming excessive storage.
:::
