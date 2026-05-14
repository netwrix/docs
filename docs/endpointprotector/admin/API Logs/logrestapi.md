---
title: "Logs REST API"
description: "Query Endpoint Protector log data over HTTPS for integrations and reporting"
sidebar_position: 10
---

# Logs REST API

:::warning 
Preview feature — Support-enabled

The Logs REST API is a Preview capability. It is disabled by default and is not automatically exposed on Endpoint Protector servers.

Enable this API only after Netwrix Support has reviewed your use case and provided setup guidance. Preview availability, endpoint coverage, response fields, authentication behavior, request limits, and configuration steps may change before general availability.

:::

## Availability

The Logs REST API is available as a controlled Preview for approved integration and reporting use cases.

It is intended for customers who need read-only programmatic access to selected Endpoint Protector log and audit data, for example for SIEM pull ingestion, custom reporting dashboards, incident investigations, or internal automation.

The API is not enabled by default. To request Preview access, open a Netwrix Support case and include:

- Endpoint Protector version and deployment type
- Target integration or consuming system
- Log families required
- Expected request volume and frequency
- Source IP ranges or network path
- Whether the intended use is test, pilot, or production

Netwrix Support will confirm suitability for the Preview, assist with enablement, and provide the setup guidance required for your environment.

For standard log forwarding to SIEM platforms, customers can continue to use the existing Endpoint Protector SIEM integration. The Logs REST API Preview is a separate optional path for use cases that require pull-based API access or custom integration logic.

## Overview

The Logs REST API provides a read-only interface to query Endpoint Protector logs and audit trails over HTTPS in JSON format. Use it for:

- SIEM ingestion and SOC workflows
- Custom reporting dashboards
- Incident investigations and audits
- Automation and integrations with internal tools

:::info
The Logs REST API is read-only. It supports GET (and OPTIONS for CORS preflight). Other methods return 405 Method Not Allowed.
:::

## Base URL and protocol

- Base URL: `https://<epp-server>/api/logs/`
- HTTPS only (TLS 1.2+)
- Content-Type: `application/json`

## Authentication

All requests require authentication using an API key:

| Method | Header / Format | Example |
|---|---|---|
| Recommended | `X-Api-Key: <key>` | `X-Api-Key: abc123...` |
| Alternative | `Authorization: Bearer <key>` | `Authorization: Bearer abc123...` |
| Alternative | Query parameter | `?api_key=abc123...` |

:::note
When called from the Endpoint Protector web interface, the API can also use an active server session cookie. For external integrations, always use an API key.
:::

## Quick start

**1) List supported endpoints (discovery)**

```bash
curl -s \
  -H "X-Api-Key: YOUR_API_KEY" \
  "https://<epp-server>/api/logs/endpoints"
```

:::note
If your Endpoint Protector server uses a self-signed certificate, add `-k` to the curl command to ignore TLS verification. For production environments, use a certificate trusted by your clients instead.
:::

**2) Query recent Device Control logs**

```bash
curl -s \
  -H "X-Api-Key: YOUR_API_KEY" \
  "https://<epp-server>/api/logs/device-control?sort_by=eventtime&sort_order=DESC&per_page=10"
```

## Common query parameters

Most list endpoints support the following parameters.

### Pagination

| Parameter | Type | Default | Notes |
|---|---|---|---|
| `page` | integer | 1 | 1-based |
| `per_page` | integer | 50 | Max 200 |

### Sorting

| Parameter | Type | Default |
|---|---|---|
| `sort_by` | string | `id` |
| `sort_order` | string | `DESC` (ASC or DESC) |

### Date filtering

| Parameter | Format | Notes |
|---|---|---|
| `start_date` | `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS` | inclusive |
| `end_date` | `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS` | inclusive |

:::note
The date field used for filtering depends on the endpoint (documented in each endpoint section below).
:::

### Text search

| Parameter | Type | Notes |
|---|---|---|
| `search` | string | LIKE matching across filterable fields |

## Response format

**Success (single resource)**

```json
{
  "success": true,
  "data": {
    "id": "1"
  }
}
```

**Success (list with pagination)**

```json
{
  "success": true,
  "data": [
    { "id": "1" },
    { "id": "2" }
  ],
  "meta": {
    "page": 1,
    "per_page": 50,
    "total": 128,
    "total_pages": 3
  }
}
```

**Error**

```json
{
  "success": false,
  "error": {
    "code": 401,
    "message": "Missing API key. Provide via X-Api-Key header or api_key query parameter."
  }
}
```

## HTTP status codes

| Code | Meaning |
|---|---|
| 200 | Success |
| 400 | Invalid parameters |
| 401 | Missing/invalid API key |
| 404 | Resource not found |
| 405 | Method not allowed (GET-only) |
| 429 | Rate limit exceeded |
| 500 | Internal error |

---

## Logs REST API Technical Reference

### Discovery

**GET /endpoints**

Returns API name/version and a list of supported routes for the current server build.

### Event Logs

Core device control event logs.

**GET /event-logs**

Date field: `eventtime`

Filters (in addition to common params):
- `machine_name` (partial match)
- `client_name` (partial match)

**GET /event-logs/(id)**

Returns a single event log entry by ID.

### Device Control Logs

Online device tracking logs.

**GET /device-control**

Date field: `eventtime`

Filters (in addition to common params):
- `machine_name` (partial match)
- `client_name` (partial match)

**GET /device-control/(id)**

Returns a single device control log entry by ID.

### Alert Statuses

**GET /alert-statuses/(id)**

Returns a single alert status entry by ID.

### System Alerts

**GET /system-alerts**

Lists system alert definitions.

**GET /system-alert-logs**

Lists system alert log entries. Date field: `created_at`

### Content Filtering (CAP)

**GET /content-aware-protection**

Lists Content Aware Protection logs. Date field: `eventtime`

Common filters include:
- `machine_name`
- `client_name`

**GET /content-aware-protection/(id)**

Returns a single log entry (includes fields excluded from list responses for performance).

**GET /content-filtering-alerts**

Lists content filtering alert definitions.

**GET /content-filtering-alerts/(id)**

Returns a single alert definition.

### Mobile Management

**GET /mobile-management-logs**

Date field: `eventtime`

**GET /mobile-management-alerts**

Lists mobile management alert definitions.

**GET /mobile-management-alert-logs**

Date field: `created_at`

### EasyLock (Enforced Encryption)

**GET /easy-lock**

Date field: `created_at`

**GET /easylock-send-alert-logs**

Lists EasyLock send alert log entries.

### Data at Rest (eDiscovery)

**GET /ediscovery/(id)**

Returns a single Data-at-Rest alert entry by ID.

### SCIM Provisioning Logs

**GET /scim-logs**

Lists SCIM API request logs.

**GET /scim-logs/(id)**

Returns a single SCIM log entry including request/response bodies.

### Authentication Logs

**GET /auth-logs**

Lists authentication attempt logs. Date field: `created_at`

### Export Logs

**GET /export-logs/(id)**

Returns a single export job log entry by ID.

### Admin Actions

**GET /admin-actions**

Lists administrator actions performed in the console. Date field: `created_at`

## Rate limiting

The API enforces rate limiting to protect the server and ensure fair usage. When exceeded, the API returns:

- HTTP 429
- `Retry-After` header
- `X-RateLimit-*` headers describing the remaining request budget

## CORS

CORS is enabled to support browser-based integrations:

- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, X-Api-Key, Authorization`
