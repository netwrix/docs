---
title: "Logs REST API Specification"
description: "Complete endpoint reference for the EPP Logs REST API including request parameters, response fields, and examples"
sidebar_position: 40
---

# Logs REST API Specification

:::warning 
Preview feature — Support-enabled

The Logs REST API is a Preview capability. It is disabled by default and is not automatically exposed on Endpoint Protector servers.

Enable this API only after Netwrix Support has reviewed your use case and provided setup guidance. Preview availability, endpoint coverage, response fields, authentication behavior, request limits, and configuration steps may change before general availability.

:::

:::warning 
Preview API contract

This technical reference describes the current Preview API surface for approved Logs REST API deployments.

Use this reference only after Netwrix Support has enabled the API in your environment. Because the feature is in Preview, endpoints, fields, filters, examples, limits, and configuration requirements may change before general availability.

Integrations should be designed to tolerate additive response fields, documented error responses, pagination, and future contract refinements.
:::


**Version:** 1.0  
**Base URL:** `https://<epp-server>/api/logs/`  
**Protocol:** HTTPS only (TLS 1.2+)  
**Content-Type:** `application/json`

## Authentication

Authentication uses JWT (JSON Web Tokens) with HS256 signing.

To authenticate, send a POST request to `/login` with your credentials. On success, you receive a token valid for 1 hour. Include the token in all subsequent requests using the `Authorization: Bearer` header.

| Method | Header | Example |
|---|---|---|
| Bearer token | `Authorization: Bearer <token>` | `Authorization: Bearer eyJ...` |

Unauthenticated requests receive:

```json
{
  "success": false,
  "error": {
    "code": 401,
    "message": "Missing authentication token. Provide via Authorization: Bearer <token> header."
  }
}
```

Requests with an invalid or expired token receive:

```json
{
  "success": false,
  "error": {
    "code": 401,
    "message": "Invalid or expired token."
  }
}
```

## Common parameters

All list endpoints support the following query parameters.

### Pagination

| Parameter | Type | Default | Description |
|---|---|---|---|
| `page` | integer | 1 | Page number (1-based) |
| `per_page` | integer | 50 | Items per page (max: 200) |

### Sorting

| Parameter | Type | Default | Description |
|---|---|---|---|
| `sort_by` | string | `id` | Column to sort by (must be a valid column for the endpoint) |
| `sort_order` | string | `DESC` | Sort direction: ASC or DESC |

### Date filtering

| Parameter | Type | Format | Description |
|---|---|---|---|
| `start_date` | string | `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS` | Return records on or after this date |
| `end_date` | string | `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS` | Return records on or before this date |

The date field used for filtering varies by endpoint (documented per endpoint below).

### Text search

| Parameter | Type | Description |
|---|---|---|
| `search` | string | Full-text search across all filterable columns (uses LIKE matching) |

### Partition filtering

| Parameter | Type | Default | Description |
|---|---|---|---|
| `use_last_partition` | boolean | `false` | When `true`, restricts the query to the most recent partition only, which improves performance on large tables. Accepts `true`, `1`, `yes`, or `on` (case-insensitive). |

Available on: Device Control, Content-Aware Protection, eDiscovery, EasyLock.

## Response format

**Success (single resource)**

Used by the `POST /login` endpoint.

```json
{
  "success": true,
  "data": {
    "token": "eyJ..."
  }
}
```

**Success (standard list with pagination)**

Used by System Alerts and Content Filtering Alerts.

```json
{
  "success": true,
  "data": [
    { "id": "1", "name": "Example 1" },
    { "id": "2", "name": "Example 2" }
  ],
  "meta": {
    "page": 1,
    "per_page": 50,
    "total": 128,
    "total_pages": 3
  }
}
```

**Success (legacy list format)**

Used by Device Control, Content-Aware Protection, eDiscovery, and EasyLock. Pagination fields are at the top level alongside `items`:

```json
{
  "current_page": 1,
  "items": [
    { "id": "1", "machine_name": "DESKTOP-01" },
    { "id": "2", "machine_name": "DESKTOP-02" }
  ],
  "num_items_per_page": 50,
  "max_rows_limit": 10000,
  "max_rows_limit_reached": false,
  "page_count": 3,
  "page_items_count": 2,
  "total_count": 128
}
```

| Field | Type | Description |
|---|---|---|
| `current_page` | integer | Current page number (1-based) |
| `items` | array | Array of log entries |
| `num_items_per_page` | integer | Requested items per page |
| `max_rows_limit` | integer | Maximum rows scanned for COUNT (default: 10 000). When reached, the count stops and `max_rows_limit_reached` is set to `true`. |
| `max_rows_limit_reached` | boolean | `true` if `total_count` >= `max_rows_limit` — apply more filters to narrow results |
| `page_count` | integer | Total number of pages |
| `page_items_count` | integer | Number of items on the current page |
| `total_count` | integer | Total matching records (capped at `max_rows_limit`) |

**Success (legacy list format — simple)**

Used by Admin Actions. Flat pagination with fewer metadata fields:

```json
{
  "current_page": 1,
  "items": [
    { "id": 1, "section": "Custom Content Denylists" }
  ],
  "page_count": 10,
  "items_per_page": 10,
  "total_item_count": 95
}
```

| Field | Type | Description |
|---|---|---|
| `current_page` | integer | Current page number (1-based) |
| `items` | array | Array of log entries |
| `page_count` | integer | Total number of pages |
| `items_per_page` | integer | Requested items per page |
| `total_item_count` | integer | Total matching records |

**Error**

```json
{
  "success": false,
  "error": {
    "code": 404,
    "message": "Resource not found"
  }
}
```

## Error handling

| HTTP Code | Meaning |
|---|---|
| 200 | Success |
| 400 | Bad request (invalid parameters) |
| 401 | Unauthorized (missing or invalid token) |
| 404 | Resource not found |
| 405 | Method not allowed (only GET is supported) |
| 429 | Rate limit exceeded |
| 500 | Internal server error |

## Endpoints

### Authentication

**POST /login**

Authenticates with a username and password and returns a JWT token valid for 1 hour. This is the only public endpoint — no token is required.

:::note
The login endpoint is at `https://<epp-server>/api/login`, not under the `/api/logs/` base URL.
:::

Request body:

```json
{
  "username": "api_admin",
  "password": "your_password"
}
```

Success response:

```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

Error responses:

| Scenario | HTTP Code | Message |
|---|---|---|
| Missing/invalid JSON body | 400 | `Missing required fields: username and password` |
| Wrong credentials | 401 | `Invalid credentials.` |
| Account disabled | 401 | `Account is disabled.` |
| Account locked | 429 | `Account temporarily locked. Try again later.` |

Use the returned token in the `Authorization: Bearer` header for all subsequent requests.

### Device Control Logs

Online device tracking logs from the `olog` table, joined with `event`, `devicetype`, `clientmachine`, and `clientdevice` tables.

**Response format:** Legacy list (see [Success (legacy list format)](#response-format))

**GET /device-control**

Date field: `timestamp` (unix timestamp, converted from user-supplied date strings)

Filters:

| Parameter | Type | Description |
|---|---|---|
| `start_date` | string | Return records on or after this date |
| `end_date` | string | Return records on or before this date |
| `machine_name` | string | Filter by machine name (partial match) |
| `client_name` | string | Filter by client name (partial match) |
| `use_last_partition` | boolean | Restrict query to the most recent partition (default: `false`) |

Response fields:

| Field | Description |
|---|---|
| `id` | Log entry ID |
| `timestamp` | Unix timestamp |
| `machine_name` | Computer name |
| `event_time_local` | Event timestamp — client local time |
| `file_name` | File name involved |
| `event_name` | Event name, e.g. "Blocked" |
| `file_type` | File type |
| `ip` | Computer IP address |
| `domain` | Computer domain |
| `os_type` | OS type identifier |
| `device_name` | Device name |
| `vid` | Device vendor ID |
| `pid` | Device product ID |
| `serial_no` | Device serial number |
| `device_type_name` | Device type name, e.g. "Webcam" |
| `epp_client_version` | EPP client version |
| `os_version` | Full OS version string |

### System Alerts

**GET /system-alert-logs**

Lists system alert log entries, joined with `sys_event` for event names.

Date field: `created_at`

Filters:

| Parameter | Type | Description |
|---|---|---|
| `start_date` | string | Return records on or after this date |
| `end_date` | string | Return records on or before this date |

Response fields: `id`, `sys_alert_name`, `sys_event_id`, `sys_event_opt_id`, `created_at`, `event_name`

### Content Filtering (CAP) Logs

Content-Aware Protection logs and alerts, joined with `event` table for event names.

**GET /content-aware-protection**

**Response format:** Legacy list (see [Success (legacy list format)](#response-format))

Date field: `timestamp` (unix timestamp, converted from user-supplied date strings)

Filters:

| Parameter | Type | Description |
|---|---|---|
| `start_date` | string | Return records on or after this date |
| `end_date` | string | Return records on or before this date |
| `machine_name` | string | Filter by machine name (partial match) |
| `client_name` | string | Filter by client name (partial match) |
| `use_last_partition` | boolean | Restrict query to the most recent partition (default: `false`) |

Response fields:

| Field | Description |
|---|---|
| `id` | Log entry ID |
| `timestamp` | Unix timestamp |
| `machine_name` | Computer name |
| `client_name` | Client/user name |
| `event_time_local` | Event timestamp — client local time |
| `file_name` | File name involved |
| `file_size` | File size |
| `event_name` | Event name |
| `ip` | Computer IP address |
| `os_type` | OS type identifier |
| `destination_type` | Destination type |
| `content_policy` | Content policy name |
| `item_type` | Matched item type |
| `matched_item` | Matched content item |
| `item_details` | Item details |
| `file_hash` | File hash |
| `destination_details` | Destination details |
| `justification` | User justification |

**GET /content-filtering-alerts**

Lists content filtering alert definitions, joined with `event` for event names.

Date field: `created_at`

Filters: `event_id`, `content_policy`, `department_id`

Response fields: `id`, `name`, `department_id`, `group_id`, `machine_id`, `client_id`, `content_policy`, `event_id`, `old_alert`, `created_at`, `created_by_user_id`, `event_name`

### EasyLock Logs

EasyLock encryption and deployment logs, filtered to EasyLock-related events only. Uses the same response structure as Device Control Logs.

**GET /easy-lock**

**Response format:** Legacy list (see [Success (legacy list format)](#response-format))

Date field: `timestamp` (unix timestamp, converted from user-supplied date strings)

Filters:

| Parameter | Type | Description |
|---|---|---|
| `start_date` | string | Return records on or after this date |
| `end_date` | string | Return records on or before this date |
| `machine_name` | string | Filter by machine name (partial match) |
| `client_name` | string | Filter by client name (partial match) |
| `use_last_partition` | boolean | Restrict query to the most recent partition (default: `false`) |

Response fields:

| Field | Description |
|---|---|
| `id` | Log entry ID |
| `timestamp` | Unix timestamp of the event |
| `machine_name` | Computer name |
| `event_time_local` | Event timestamp in client local time |
| `file_name` | File name involved |
| `event_name` | Event name |
| `file_type` | File type |
| `ip` | Computer IP address |
| `domain` | Computer domain |
| `os_type` | Operating system type |
| `device_name` | Device name |
| `vid` | Device vendor ID |
| `pid` | Device product ID |
| `serial_no` | Device serial number |
| `device_type_name` | Device type name |
| `epp_client_version` | Endpoint Protector client version |
| `os_version` | Operating system version |

### eDiscovery (Data at Rest)

eDiscovery scan results. Uses the legacy list response format.

**GET /ediscovery**

**Response format:** Legacy list (see [Success (legacy list format)](#response-format))

Date field: `timestamp` (unix timestamp, converted from user-supplied date strings)

Filters:

| Parameter | Type | Description |
|---|---|---|
| `start_date` | string | Return records on or after this date |
| `end_date` | string | Return records on or before this date |
| `machine_name` | string | Filter by machine name (partial match) |
| `policy_name` | string | Filter by policy name (partial match) |
| `file_name` | string | Filter by file name (partial match) |
| `status` | string | Filter by scan result status (exact match) |
| `use_last_partition` | boolean | Restrict query to the most recent partition (default: `false`) |

Response fields:

| Field | Description |
|---|---|
| `id` | Log entry ID |
| `timestamp` | Unix timestamp |
| `machine_name` | Computer name |
| `event_time_local` | Event timestamp — client local time |
| `file_name` | Scanned file path |
| `matched_item` | Matched content item (e.g. MIME type) |
| `item_details` | Item details (e.g. file format) |
| `policy_name` | eDiscovery policy name |
| `client_time` | Client report time |
| `status` | Object status |

### SCIM Logs

**GET /scim-logs**

Lists SCIM API log entries.

Filters:

| Parameter | Type | Description |
|---|---|---|
| `http_method` | string | Filter by HTTP method (GET, POST, etc.) |
| `endpoint` | string | Filter by API endpoint path |
| `status_code` | string | Filter by HTTP status code |
| `actor` | string | Filter by actor/user |
| `operation` | string | Filter by SCIM operation |
| `resource_type` | string | Filter by resource type (User, Group, etc.) |

Response fields: `id`, `timestamp`, `request_id`, `http_method`, `endpoint`, `status_code`, `actor`, `operation`, `resource_type`, `external_id`, `duration_ms`, `ip_address`, `user_agent`, `bulk_request_id`, `operation_index`

:::note
`request_body` and `response_body` are excluded from list responses for performance.
:::

### Admin Actions

Administrator action audit trail.

**GET /admin-actions**

**Response format:** Legacy list — simple (see [Success (legacy list format — simple)](#response-format))

Date field: `created_at`

Filters:

| Parameter | Type | Description |
|---|---|---|
| `user_id` | integer | Filter by admin user ID |
| `section` | string | Filter by section (e.g. "Device Control", "Content Aware Protection") |
| `log_type` | string | Filter by log type |
| `operation` | string | Filter by operation performed |
| `search` | string | Search across section, log_type, operation, and username |

Response fields:

| Field | Description |
|---|---|
| `id` | Action ID |
| `section` | Section name, e.g. "Custom Content Denylists" |
| `operation` | Operation performed, e.g. "Login" |
| `log_type` | Log type, e.g. "EDIT" |
| `before_desc` | State before the action (JSON object) |
| `after_desc` | State after the action (JSON object) |
| `user` | User object with `id` and `username` |
| `created_at` | Action timestamp |

## Usage examples

**Obtain a JWT token**

```bash
TOKEN=$(curl -s -k -X POST \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "your_password"}' \
  "https://<epp-server>/api/login" | python -c "import sys,json; print(json.load(sys.stdin)['data']['token'])")
```

**List recent device control logs for a specific machine**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/logs/device-control?machine_name=WORKSTATION&sort_by=timestamp&sort_order=DESC&per_page=10"
```

**List EasyLock logs**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/logs/easy-lock?sort_by=timestamp&sort_order=DESC&per_page=20"
```

**List eDiscovery logs for a specific policy**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/logs/ediscovery?policy_name=Policy%201&sort_by=timestamp&sort_order=DESC&per_page=20"
```

**Fetch only the latest partition (delta sync)**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/logs/device-control?use_last_partition=true&sort_by=timestamp&sort_order=DESC&per_page=100"
```

**Get content-aware protection logs for a date range**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/logs/content-aware-protection?start_date=2025-01-01&end_date=2025-01-31"
```

## Database tables reference

| Endpoint Group | Primary Table | Joined Tables |
|---|---|---|
| Device Control | `olog` | `event`, `devicetype`, `clientmachine`, `clientdevice` |
| System Alerts | `sys_alert_log` | `sys_event` |
| Content Filtering | `cf_log`, `cf_alert` | `event` |
| EasyLock | `olog` | `event`, `devicetype`, `clientmachine`, `clientdevice` |
| eDiscovery | `dr_object` | — |
| SCIM Logs | `scim_log` | — |
| Admin Actions | `admin_action` | `sf_guard_user` |

## Rate limiting

The API enforces two independent rate limits using a fixed-window counter:

1. **Global limit** — caps total requests across all users combined (server protection)
2. **Per-user limit** — caps requests per authenticated user or IP (fairness)

Both checks happen on every request. Whichever limit triggers first returns a 429 response.

### Configuration

Rate limit parameters are configured in `api_config.php`:

| Parameter | Type | Default | Description |
|---|---|---|---|
| `rate_limit_enabled` | boolean | `true` | Enable or disable all rate limiting |
| `rate_limit_global_requests` | integer | 200 | Max requests per window across all users |
| `rate_limit_global_window` | integer | 60 | Global window in seconds |
| `rate_limit_user_requests` | integer | 60 | Max requests per window per user |
| `rate_limit_user_window` | integer | 60 | Per-user window in seconds |

With defaults: 200 requests/minute globally, 60 requests/minute per user.

### Response headers

Every API response includes per-user rate limit headers:

| Header | Description |
|---|---|
| `X-RateLimit-Limit` | Per-user maximum requests per window |
| `X-RateLimit-Remaining` | Per-user requests remaining in the current window |
| `X-RateLimit-Reset` | Unix timestamp when the per-user window resets |

### Rate limit exceeded (429)

When the per-user limit is exceeded:

```json
{
  "success": false,
  "error": {
    "code": 429,
    "message": "Rate limit exceeded. Maximum 60 requests per 60 seconds."
  }
}
```

When the global limit is exceeded:

```json
{
  "success": false,
  "error": {
    "code": 429,
    "message": "Global rate limit exceeded. Maximum 200 requests per 60 seconds across all users."
  }
}
```

The response also includes a `Retry-After` header (in seconds) indicating when the client may retry.

## CORS

The API includes CORS headers for browser-based integrations. Origins must be listed in the server's `cors_allowed_origins` configuration. The OPTIONS preflight response includes:

- `Access-Control-Allow-Origin: <configured-origin>`
- `Access-Control-Allow-Methods: GET, POST, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Authorization`
- `Access-Control-Max-Age: 86400`
