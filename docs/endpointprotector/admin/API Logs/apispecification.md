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
    "message": "Unauthorized"
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
| `use_last_partition` | boolean | `false` | When `true`, restricts the query to the most recent partition only, which improves performance on large tables |

Available on: Device Control, Content-Aware Protection, eDiscovery, EasyLock.

## Response format

**Success (single resource)**

```json
{
  "success": true,
  "data": {
    "id": "1",
    "name": "Example",
    "created_at": "2025-01-15 10:30:00"
  }
}
```

**Success (list with pagination)**

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

Authenticates with a username and password and returns a JWT token valid for 1 hour.

Request body:

```json
{
  "username": "admin",
  "password": "secret"
}
```

Response:

```json
{
  "success": true,
  "data": {
    "token": "eyJ..."
  }
}
```

Use the returned token in the `Authorization: Bearer` header for all subsequent requests.

### Device Control Logs

Online device tracking logs from the `olog` table, joined with `event`, `devicetype`, `clientmachine`, and `clientdevice` tables.

**GET /device-control**

Date field: `eventtime`

Filters:

| Parameter | Type | Description |
|---|---|---|
| `start_date` | string | Return records on or after this date |
| `end_date` | string | Return records on or before this date |
| `machine_name` | string | Filter by machine name (partial match) |
| `client_name` | string | Filter by client name (partial match) |
| `use_last_partition` | boolean | Restrict query to the most recent partition (default: `false`) |

Response fields:

| Field | Source | Description |
|---|---|---|
| `id` | `olog.id` | Log entry ID |
| `loclogid` | `olog.loclogid` | Local log ID |
| `machine_id` | `olog.machine_id` | Machine ID |
| `machine_name` | `olog.machine_name` | Computer name (denormalized) |
| `ip` | `olog.ip` | Computer IP address (denormalized) |
| `domain` | `olog.domain` | Computer domain |
| `client_id` | `olog.client_id` | Client user ID |
| `client_name` | `olog.client_name` | Username (denormalized) |
| `device_type_id` | `olog.device_type_id` | Device type ID |
| `device_type_name` | `devicetype.name` | Device type name (resolved via JOIN) |
| `device_id` | `olog.device_id` | Device ID |
| `device_name` | `olog.device_name` | Device name (denormalized) |
| `event_id` | `olog.event_id` | Event ID |
| `event_name` | `event.name` | Event name (resolved via JOIN) |
| `machine_serial_number` | `clientmachine.serial_number` | Machine serial number (resolved via JOIN) |
| `device_serial_number` | `clientdevice.serialno` | Device serial number (resolved via JOIN) |
| `eventtime` | `olog.eventtime` | Event timestamp — server time (UTC) |
| `eventtimelocal` | `olog.eventtimelocal` | Event timestamp — client local time |
| `nrfiles` | `olog.nrfiles` | Number of files |
| `alert_flag` | `olog.alert_flag` | Alert flag |
| `filename` | `olog.filename` | File name |
| `filetype` | `olog.filetype` | File type |
| `os_type` | `olog.os_type` | OS type |
| `timestamp` | `olog.timestamp` | Unix timestamp |
| `department_id` | `olog.department_id` | Department ID |

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

Date field: `eventtime`

Filters:

| Parameter | Type | Description |
|---|---|---|
| `start_date` | string | Return records on or after this date |
| `end_date` | string | Return records on or before this date |
| `machine_name` | string | Filter by machine name (partial match) |
| `client_name` | string | Filter by client name (partial match) |
| `use_last_partition` | boolean | Restrict query to the most recent partition (default: `false`) |

Response fields: `id`, `loclogid`, `event_id`, `machine_id`, `machine_name`, `ip`, `domain`, `client_id`, `client_name`, `destination_type`, `destination`, `filename`, `content_policy`, `content_policy_type`, `item_type`, `matched_item`, `item_details`, `eventtime`, `eventtimelocal`, `alert_flag`, `nr_reports`, `filesize`, `filehash`, `os_type`, `department_id`, `justification`, `event_name`

**GET /content-filtering-alerts**

Lists content filtering alert definitions, joined with `event` for event names.

Date field: `created_at`

Filters: `event_id`, `content_policy`, `department_id`

Response fields: `id`, `name`, `department_id`, `group_id`, `machine_id`, `client_id`, `content_policy`, `event_id`, `old_alert`, `created_at`, `created_by_user_id`, `event_name`

**GET /content-filtering-alerts/(id)**

Returns a single content filtering alert by ID with event name.

### Mobile Management Logs

**GET /mobile-management-logs**

Date field: `eventtime`

Filters: `mm_device_id`, `action_ck`, `result_code`

Response fields: `id`, `mm_device_id`, `action_ck`, `action`, `result_code`, `error_code`, `error_message`, `latitude`, `longitude`, `altitude`, `loctime`, `locqual`, `other`, `short_address`, `long_address`, `eventtime`

### EasyLock Logs

**GET /easy-lock**

Date field: `timestamp`

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

**GET /ediscovery**

Lists Data-at-Rest scan results.

Date field: `timestamp`

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
| `id` | Entry ID |
| `timestamp` | Unix timestamp of the scan event |
| `machine_name` | Computer name |
| `event_time_local` | Event timestamp in client local time |
| `file_name` | File name scanned |
| `matched_item` | Matched content item |
| `item_details` | Details of the matched item |
| `policy_name` | Name of the policy that triggered the result |
| `client_time` | Client-reported time |
| `status` | Scan result status |

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

### Export Logs

**GET /export-logs/(id)**

Returns a single export log entry including the `description` field.

Response fields: `id`, `name`, `log_type`, `status`, `date`, `from_date`, `to_date`, `partitions`, `export_type`, `sf_guard_user_id`, `description`

### Admin Actions

**GET /admin-actions**

Lists administrator action audit trail entries, joined with `sf_guard_user` for usernames.

Date field: `created_at`

Filters:

| Parameter | Type | Description |
|---|---|---|
| `user_id` | integer | Filter by admin user ID |
| `section` | string | Filter by section (e.g. "Device Control") |
| `log_type` | string | Filter by log type |
| `operation` | string | Filter by operation performed |
| `search` | string | Search across section, log_type, operation, and username |

Response fields: `id`, `user_id`, `created_at`, `section`, `log_type`, `operation`, `username`

:::note
`before_desc` and `after_desc` LONGTEXT fields are excluded from list responses for performance.
:::

## Usage examples

**Authenticate and obtain a token**

```bash
TOKEN=$(curl -s -k -X POST \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"secret"}' \
  "https://<epp-server>/api/logs/login" | jq -r '.data.token')
```

**List recent device control logs for a specific machine**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/logs/device-control?machine_name=WORKSTATION&sort_by=eventtime&sort_order=DESC&per_page=10"
```

**Get content filtering logs for a date range**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/logs/content-aware-protection?start_date=2025-01-01&end_date=2025-01-31&content_policy=PCI"
```

## Database tables reference

| Endpoint Group | Primary Table | Joined Tables |
|---|---|---|
| Device Control | `olog` | `event`, `devicetype`, `clientmachine`, `clientdevice` |
| System Alerts | `sys_alert_log` | `sys_event` |
| Content Filtering | `cf_log`, `cf_alert` | `event` |
| Mobile Management | `mm_log` | — |
| EasyLock | `olog` | — |
| eDiscovery | `dr_object` | — |
| SCIM Logs | `scim_log` | — |
| Export Logs | `export_log_list` | — |
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

The API includes CORS headers allowing cross-origin requests from any origin. The OPTIONS preflight response includes:

- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: GET, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type, Authorization`
- `Access-Control-Max-Age: 86400`
