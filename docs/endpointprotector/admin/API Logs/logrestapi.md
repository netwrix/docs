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
The Logs REST API is read-only for log data. The only write operation is `POST /login` to obtain an authentication token. All log endpoints are GET-only; other methods return 405 Method Not Allowed.
:::

## Base URL and protocol

- Base URL: `https://<epp-server>/api/logs/`
- HTTPS only (TLS 1.2+)
- Content-Type: `application/json`

## Authentication

Authentication uses JWT (JSON Web Tokens) with HS256 signing. Call `POST /login` at `https://<epp-server>/api/login` with your credentials to receive a token valid for 1 hour, then include it in subsequent requests:

```
Authorization: Bearer <token>
```

:::note
The login endpoint is at `/api/login`, separate from the log endpoints at `/api/logs/`.
:::

## Quick start

**1) Authenticate and obtain a token**

```bash
TOKEN=$(curl -s -k -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "your_password"}' \
  "https://<epp-server>/api/login" | python -c "import sys,json; print(json.load(sys.stdin)['data']['token'])")
```

:::note
If your Endpoint Protector server uses a self-signed certificate, add `-k` to the curl command to ignore TLS verification. For production environments, use a certificate trusted by your clients instead.
:::

**2) Query recent Device Control logs**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/logs/device-control?sort_by=timestamp&sort_order=DESC&per_page=10"
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
    "message": "Missing authentication token. Provide via Authorization: Bearer <token> header."
  }
}
```

## HTTP status codes

| Code | Meaning |
|---|---|
| 200 | Success |
| 400 | Invalid parameters |
| 401 | Missing or invalid JWT token |
| 404 | Resource not found |
| 405 | Method not allowed |
| 429 | Rate limit exceeded |
| 500 | Internal error |

---

## Logs REST API Technical Reference

### Authentication

**POST /login** — `https://<epp-server>/api/login`

Authenticates with a username and password and returns a JWT token. This endpoint is at the `/api/` base, not under `/api/logs/`.

### Device Control Logs

Online device tracking logs.

**GET /device-control**

Date field: `timestamp` (unix timestamp, converted from user-supplied date strings)

Filters (in addition to common params):
- `machine_name` (partial match)
- `client_name` (partial match)
- `use_last_partition` (boolean, default: `false`)

### System Alerts

**GET /system-alert-logs**

Lists system alert log entries. Date field: `created_at`

### Content Filtering (CAP)

**GET /content-aware-protection**

Lists Content-Aware Protection logs. Date field: `timestamp` (unix timestamp, converted from user-supplied date strings)

Filters (in addition to common params):
- `machine_name` (partial match)
- `client_name` (partial match)
- `use_last_partition` (boolean, default: `false`)

**GET /content-filtering-alerts**

Lists content filtering alert definitions. Date field: `created_at`

### EasyLock (Enforced Encryption)

**GET /easy-lock**

Date field: `timestamp` (unix timestamp, converted from user-supplied date strings)

Filters (in addition to common params):
- `machine_name` (partial match)
- `client_name` (partial match)
- `use_last_partition` (boolean, default: `false`)

### eDiscovery (Data at Rest)

**GET /ediscovery**

Lists Data-at-Rest scan results. Date field: `timestamp` (unix timestamp, converted from user-supplied date strings)

Filters (in addition to common params):
- `machine_name` (partial match)
- `policy_name` (partial match)
- `file_name` (partial match)
- `status` (exact match)
- `use_last_partition` (boolean, default: `false`)

### SCIM Provisioning Logs

**GET /scim-logs**

Lists SCIM API request logs.

### Admin Actions

**GET /admin-actions**

Lists administrator actions performed in the console. Date field: `created_at`

## Rate limiting

The API enforces rate limiting to protect the server and ensure fair usage. When exceeded, the API returns:

- HTTP 429
- `Retry-After` header
- `X-RateLimit-*` headers describing the remaining request budget

## CORS

CORS is enabled to support browser-based integrations. Origins must be listed in the server's `cors_allowed_origins` configuration:

- `Access-Control-Allow-Origin: <configured-origin>`
- `Access-Control-Allow-Methods: GET, POST, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Authorization`
