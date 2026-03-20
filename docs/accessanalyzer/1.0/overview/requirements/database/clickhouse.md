---
title: "ClickHouse"
description: "ClickHouse version and configuration"
sidebar_position: 20
---

# ClickHouse

ClickHouse is a columnar analytics database used by Access Analyzer for scan results, reporting data, and observability (OpenTelemetry traces and logs).

## Version

| Component | Value |
| --- | --- |
| **ClickHouse version** | 25.8.13 |
| **Namespace** | `access-analyzer` |
| **HTTP interface port** | 8123 |
| **Native protocol port** | 9000 |

## Provisioning

ClickHouse is **automatically provisioned** by the installer. No manual setup is required.

Database passwords are auto-generated and stored as Kubernetes secrets.

## Data Stored

- Scan results and analytics data
- OpenTelemetry traces and logs (via the `access_analyzer_logs` database)
- Reporting and dashboard data queried by Metabase
