---
title: "EPP REST API"
description: "Programmatic access to Endpoint Protector device control management and log data over HTTPS using OAuth 2.0"
sidebar_position: 10
---

# EPP REST API


The EPP REST API provides programmatic access over HTTPS to Endpoint Protector device control management data (users, computers, devices, groups, and Offline Temporary Passwords) and to audit and activity logs. Responses are returned in JSON, and all endpoints are authenticated with OAuth 2.0.

The API is organized into the following groups:

| Group | Purpose | Access |
|---|---|---|
| OAuth | Issues the access token used to authenticate every other request | Write (token issuance only) |
| Health | Service liveness check for monitoring and health probes | Read |
| Users | Manage endpoint users (create, read, update, delete) | Read/write |
| Computers | Manage endpoint computers | Read/write |
| Devices | Manage endpoint devices, plus device type reference data | Read/write |
| Groups | Manage endpoint groups | Read/write |
| Offline Temporary Passwords | Generate, list, revoke, and delete Offline Temporary Passwords (OTPs) | Read/write |
| Logs | Query Device Control, Content-Aware Protection, eDiscovery, EasyLock, SCIM, system alert, and admin action logs | Read |

## Availability

The EPP REST API is available as a controlled Preview for approved integration, automation, and reporting use cases. It is not enabled by default.

To request Preview access, open a Netwrix Support case and include:

- Endpoint Protector version and deployment type
- Target integration or consuming system
- The endpoint groups and operations you need (for example, log ingestion, computer provisioning, OTP automation)
- Expected request volume and frequency
- Source IP ranges or network path
- Whether the intended use is test, pilot, or production

Netwrix Support confirms suitability for the Preview, assists with enablement, provisions the OAuth client credentials your integration uses to authenticate, and provides the setup guidance required for your environment.

## Base URL and protocol

- Base URL: `https://<epp-server>/api/`
- Token endpoint: `https://<epp-server>/api/oauth/token`
- HTTPS only (TLS 1.2+)
- Content-Type: `application/json` for request and response bodies (the token request uses `application/x-www-form-urlencoded`)

## Interactive API reference

When the API is enabled in your environment, an interactive OpenAPI (Swagger UI) reference is available at:

```
https://<epp-server>/api/doc
```

Use it to browse every endpoint, parameter, and response schema, and to send authenticated test requests directly from the browser. The reference is generated from the running server, so it always reflects the exact contract deployed in your environment.

:::tip
The interactive reference is the authoritative source for the precise request and response schema of each endpoint. Use this page and the [specification](eppapispecification) for conceptual guidance and integration planning.
:::

## Authentication

The EPP REST API uses the **OAuth 2.0 Client Credentials** grant. Authentication is designed for machine-to-machine integrations: your integration authenticates with a dedicated API client identifier and secret rather than a console administrator's username and password.

Request an access token from the token endpoint, then include it as a Bearer token on every subsequent request:

```
Authorization: Bearer <access_token>
```

Access tokens are short-lived and expire after 1 hour by default. Request a new token when the current one expires.

### Security model

- **Dedicated client credentials** — Netwrix Support provisions a `client_id` and `client_secret` specifically for API access. Console administrator credentials are not used to authenticate to the API.
- **Signed, short-lived tokens** — access tokens are signed JSON Web Tokens (JWT) with a default lifetime of 1 hour. The server validates every request before it reaches an endpoint.
- **Least exposure** — the token endpoint is the only endpoint that does not require a token. Every other endpoint rejects requests without a valid, unexpired token with a 401 response.
- **Attributable writes** — create and update operations record the authenticating client identifier in the `created_by` and `modified_by` fields of the affected record.

:::warning
Treat the `client_secret` like a password. Store it in a secret manager, never commit it to source control, and rotate it through Netwrix Support if it may have been exposed.
:::

## Quick start

**1) Request an access token**

```bash
TOKEN=$(curl -s -k -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials&client_id=<client-id>&client_secret=<client-secret>" \
  "https://<epp-server>/api/oauth/token" | python -c "import sys,json; print(json.load(sys.stdin)['access_token'])")
```

:::note
If your Endpoint Protector server uses a self-signed certificate, add `-k` to the curl command to ignore TLS verification. For production environments, use a certificate trusted by your clients instead.
:::

**2) Read data — list recent Device Control logs**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/logs/device-control?sort_by=timestamp&sort_order=DESC&per_page=10"
```

**3) Write data — create a computer**

```bash
curl -s -k -X POST \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"name": "WORKSTATION-01", "description": "Finance laptop", "department_id": 3}' \
  "https://<epp-server>/api/device-control/computers"
```

## Conventions

The API follows consistent conventions for pagination, sorting, filtering, responses, and errors. Two families of endpoints apply these slightly differently:

- **Management endpoints** — Users, Computers, Devices, Groups, and Offline Temporary Passwords.
- **Log endpoints** — the read-only endpoints under `/api/logs/`.

The differences are noted below and in the [specification](eppapispecification).

### Pagination

All list endpoints accept `page` and `per_page` and return a `meta` object alongside the `data` array.

| Parameter | Type | Default | Notes |
|---|---|---|---|
| `page` | integer | 1 | 1-based |
| `per_page` | integer | 25 (management), 50 (logs) | Maximum 200 for all endpoints |

The `meta` object contains `page`, `per_page`, `total`, and `total_pages`. On the high-volume log endpoints, `total` is capped at a server-side maximum for performance — when the cap is reached, `total` reflects that maximum rather than the exact count.

### Sorting

| Endpoint family | Sort field parameter | Direction parameter | Default direction |
|---|---|---|---|
| Management | `sort_by` | `direction` | `ASC` |
| Logs | `sort_by` | `sort_order` | `DESC` |

For both families, `sort_by` must be a valid column for that endpoint (unrecognized values fall back to the endpoint default), and the direction accepts `ASC` or `DESC`.

### Date filtering

Where a list endpoint supports date filtering, `start_date` and `end_date` are inclusive and accept `YYYY-MM-DDTHH:MM:SS` (ISO 8601) or `YYYY-MM-DD`. A space is also accepted in place of `T`. The record field used for filtering depends on the endpoint.

### Filtering and search

Most list endpoints expose targeted filters (for example `department_id`, `machine_name`, or `otp_type`) and a free-text `search` parameter that performs partial (LIKE) matching across that endpoint's key fields. See each endpoint in the [specification](eppapispecification) for the exact filters it supports.

### Response envelope

**List responses** return a `data` array and a `meta` object:

```json
{
  "data": [ { "id": 1 }, { "id": 2 } ],
  "meta": { "page": 1, "per_page": 25, "total": 128, "total_pages": 6 }
}
```

**Single-resource responses** on the management endpoints return the resource object directly. Single-resource log responses wrap the object in a `data` property.

### Errors

The API uses two error body shapes:

```json
{ "error": "Computer not found." }
```

```json
{ "errors": { "name": "Name must not be empty." } }
```

The first form is returned for authentication failures, invalid IDs, and missing resources. The second form (a map of field names to messages) is returned for request-body validation failures.

### Creating and updating records

- **Create** uses `POST` to the collection. For Users, Computers, and Devices, create is idempotent by identity: if a record with the same identity already exists, the API updates and returns it (HTTP 200) instead of creating a duplicate, and restores it if it had been deleted. A brand-new record returns HTTP 201.
- **Update** uses `PATCH` to a single resource and is partial — only the fields present in the body are changed. Pass a field as `null` to clear an optional value such as `department_id`.
- **Agent-managed fields** (for example a computer's `ip`, `mac`, and `os_version`, or a device's `vid`, `pid`, and `serial_no` after registration) are populated automatically by the EPP agent and cannot be set through the API.

### Deleting records

- **Delete** uses `DELETE` on a single resource and performs a soft delete: the record is flagged deleted and excluded from future queries but retained for audit. A successful delete returns `{ "response": "allok" }`.
- **Bulk delete** uses `DELETE` on the collection with a body of `{ "id": [ ... ] }`. Each ID is processed independently; the response is a `resources` map keyed by ID, where each entry has a `code` (200 = deleted, 404 = not found). If every ID succeeds, the status is 200; if any ID was not found, the status is 207 (Multi-Status).

## HTTP status codes

| Code | Meaning |
|---|---|
| 200 | Success |
| 201 | Resource created |
| 207 | Multi-Status — bulk operation with at least one non-success item |
| 400 | Invalid parameters or validation error |
| 401 | Missing, invalid, or expired access token |
| 403 | Operation not permitted |
| 404 | Resource not found |
| 405 | Method not allowed |
| 500 | Internal error |

## Limits

To protect the server and keep responses fast, the API caps result sizes rather than returning unbounded data:

- `per_page` accepts a maximum of 200 records per page.
- `total` in the `meta` object is capped at a server-side maximum on the high-volume log endpoints; use pagination and filters to retrieve complete data sets in batches.

Netwrix Support may apply additional request-rate or network-level limits as part of your Preview enablement. Design integrations to page through results and to retry transient failures with backoff.
