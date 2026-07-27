---
sidebar_position: 13
---
# Entra Scanner

<!-- TODO: screenshot -->

The **Entra Scanner** section syncs its settings from the Entra Scanner microservice. See [Entra scanning](enterpriseentrascan.md) for the scanning feature itself.

- **Api** — Enables or disables the Swagger API documentation in production.
- **Security & headers** — HTTP Strict Transport Security (HSTS), Content Security Policy, referrer policy, minimum TLS version, forwarded-headers handling, and HTTPS redirection.
- **Rate limiting** — Request throttling for the API, including permit, window, and queue limits, with separate limits for filtered queries and encryption key rotation.
- **Scanning** — Tuning for the scan worker pool: queue capacity, worker count, maximum concurrent scans per tenant, and drain rate.
- **Azure scanning** — Maximum parallelism for Azure and Entra scan operations.
- **HTTP resilience** — Retry attempts, backoff delay, request and client timeouts, and circuit breaker thresholds for outbound HTTP calls.
- **Audit store** — Where audit events are stored (file, database, or none), the file path, and the retention period.
- **Maintenance** — Interval for background maintenance jobs.
- **Telemetry** — Telemetry exporter (OTLP, Console, or None) and the tracing toggle.
