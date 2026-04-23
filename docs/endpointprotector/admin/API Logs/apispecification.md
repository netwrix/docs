---
title: "Logs REST API Specification"
description: "Complete endpoint reference for the EPP Logs REST API including request parameters, response fields, and examples"
sidebar_position: 40
---

# Logs REST API Specification

**Version:** 1.0  
**Base URL:** `https://<epp-server>/api/logs/`  
**Protocol:** HTTPS only (TLS 1.2+)  
**Content-Type:** `application/json`

## Authentication

All requests require authentication via one of these methods (in order of preference):

| Method | Format | Example |
|---|---|---|
| X-Api-Key header | `X-Api-Key: <key>` | `X-Api-Key: abc123def456` |
| Bearer token | `Authorization: Bearer <key>` | `Authorization: Bearer abc123def456` |
| Query parameter | `?api_key=<key>` | `?api_key=abc123def456` |

API keys are validated against the `api_key` database table. The associated user must be active in `sf_guard_user`.

If no API key is provided or validated, the API falls back to checking for an active Symfony session cookie (useful when calling the API from the EPP web interface).

Unauthenticated requests receive:

```json
{
  "success": false,
  "error": {
    "code": 401,
    "message": "Missing API key. Provide via X-Api-Key header or api_key query parameter."
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
| 401 | Unauthorized (missing or invalid API key) |
| 404 | Resource not found |
| 405 | Method not allowed (only GET is supported) |
| 429 | Rate limit exceeded |
| 500 | Internal server error |

## Endpoints

### Event Logs

Core device control event logs from the `log` table, joined with `event`, `clientmachine`, `clientuser`, `clientdevice`, and `devicetype` tables.

**GET /event-logs**

Date field: `eventtime`

Filters:

| Parameter | Type | Description |
|---|---|---|
| `start_date` | string | Return records on or after this date |
| `end_date` | string | Return records on or before this date |
| `machine_name` | string | Filter by machine name (partial match) |
| `client_name` | string | Filter by client name (partial match) |

Response fields:

| Field | Source | Description |
|---|---|---|
| `id` | `log.id` | Log entry ID |
| `machine_id` | `log.machine_id` | Machine ID |
| `machine_name` | `clientmachine.name` | Computer name (resolved via JOIN) |
| `machine_ip` | `clientmachine.ip` | Computer IP address (resolved via JOIN) |
| `client_id` | `log.client_id` | Client user ID |
| `client_username` | `clientuser.username` | Username (resolved via JOIN) |
| `device_type_id` | `log.device_type_id` | Device type ID |
| `device_type_name` | `devicetype.name` | Device type name, e.g. "USB Storage" (resolved via JOIN) |
| `device_id` | `log.device_id` | Device ID |
| `device_name` | `clientdevice.name` | Device name (resolved via JOIN) |
| `event_id` | `log.event_id` | Event ID |
| `event_name` | `event.name` | Event name (resolved via JOIN) |
| `eventtime` | `log.eventtime` | Event timestamp — server time (UTC) |
| `eventtimelocal` | `log.eventtimelocal` | Event timestamp — client local time |
| `filename` | `log.filename` | File name involved |
| `filesize` | `log.filesize` | File size in bytes |
| `filetype_extension` | `log.filetype_extension` | File extension |
| `filenameduplicate` | `log.filenameduplicate` | Duplicate file name |
| `filehash` | `log.filehash` | File hash (MD5) |
| `created_at` | `log.created_at` | Record creation timestamp |
| `created_by` | `log.created_by` | Record creator |

Example:

```bash
GET /api/logs/event-logs?machine_name=WORKSTATION&start_date=2025-01-01&per_page=10
```

**GET /event-logs/(id)**

Returns a single event log entry by ID with the same fields as the list endpoint.

### Device Control Logs

Online device tracking logs from the `olog` table, joined with `event`, `devicetype`, `clientmachine`, and `clientdevice` tables.

**GET /device-control-logs**

Date field: `eventtime`

Filters:

| Parameter | Type | Description |
|---|---|---|
| `start_date` | string | Return records on or after this date |
| `end_date` | string | Return records on or before this date |
| `machine_name` | string | Filter by machine name (partial match) |
| `client_name` | string | Filter by client name (partial match) |

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

**GET /device-control-logs/(id)**

Returns a single device control log entry by ID with the same fields as the list endpoint.

### Alert Statuses

**GET /alert-statuses/(id)**

Returns a single alert status entry by ID.

Response fields: `id`, `alert_type`, `log_id`, `alert_id`, `status`, `email`, `timestamp`

### System Alerts

**GET /system-alerts**

Lists system alerts, joined with `sys_event` for event names.

Response fields: `id`, `name`, `sys_event_id`, `event_name`

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

**GET /content-filtering-logs**

Date field: `eventtime`

Filters:

| Parameter | Type | Description |
|---|---|---|
| `start_date` | string | Return records on or after this date |
| `end_date` | string | Return records on or before this date |
| `machine_name` | string | Filter by machine name (partial match) |
| `client_name` | string | Filter by client name (partial match) |

Response fields: `id`, `loclogid`, `event_id`, `machine_id`, `machine_name`, `ip`, `domain`, `client_id`, `client_name`, `destination_type`, `destination`, `filename`, `content_policy`, `content_policy_type`, `item_type`, `matched_item`, `item_details`, `eventtime`, `eventtimelocal`, `alert_flag`, `nr_reports`, `filesize`, `filehash`, `os_type`, `department_id`, `justification`, `event_name`

:::note
Hash columns (`loghash`, `loghasht`, etc.) are excluded from list responses for performance. Use the detail endpoint to retrieve all fields.
:::

**GET /content-filtering-logs/(id)**

Returns a single content filtering log with all fields (including hash columns and `event_name`).

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

**GET /mobile-management-alerts**

Lists mobile management alert definitions.

Filters: `mm_device_id`, `mm_event_id`

Response fields: `id`, `name`, `mm_device_type_id`, `mm_device_id`, `mm_event_id`

**GET /mobile-management-alert-logs**

Date field: `created_at`

Filters: `mm_device_type_id`, `mm_device_id`, `mm_event_id`

Response fields: `id`, `mm_alert_name`, `mm_device_type_id`, `mm_device_id`, `mm_event_id`, `created_at`

### EasyLock Logs

**GET /easylock-alert-logs**

Date field: `created_at`

Filters: `el_alert_name`, `el_event_name`, `el_client_name`, `el_device_machine`, `el_device_username`, `sent`

Response fields: `id`, `el_alert_name`, `el_event_name`, `el_client_name`, `el_device_name`, `el_device_description`, `el_ip`, `el_device_vid`, `el_device_pid`, `el_device_serial`, `el_device_machine`, `el_device_username`, `sent`, `sent_at`, `created_at`

**GET /easylock-send-alert-logs**

Lists EasyLock send alert log entries, joined with `el_event` for event names.

Filters: `event_id`, `machine_id`, `user_id`, `status`, `alert_flag`

Response fields: `id`, `event_id`, `machine_id`, `user_id`, `group_id`, `status`, `alert_flag`, `description`, `event_name`

### Data at Rest

**GET /data-rest-alerts/(id)**

Returns a single Data-at-Rest alert with event name.

Response fields: `id`, `name`, `dr_event_id`, `event_name`

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
`request_body` and `response_body` are excluded from list responses. Use the detail endpoint.
:::

**GET /scim-logs/(id)**

Returns a single SCIM log entry including `request_body` and `response_body`.

### Authentication Logs

**GET /auth-logs**

Lists user authentication attempt logs, joined with `sf_guard_user` for usernames.

Date field: `created_at`

Filters:

| Parameter | Type | Description |
|---|---|---|
| `user_id` | integer | Filter by user ID |
| `ip` | string | Filter by IP address (partial match) |
| `block` | integer | Filter by block status |

Response fields: `id`, `user_id`, `ip`, `number_attempts`, `block`, `created_at`, `expire_at`, `username`

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

**List recent device control logs for a specific machine**

```bash
curl -s -k \
  -H "X-Api-Key: YOUR_API_KEY" \
  "https://epp-server/api/logs/device-control-logs?machine_name=WORKSTATION&sort_by=eventtime&sort_order=DESC&per_page=10"
```

**Get content filtering logs for a date range**

```bash
curl -s -k \
  -H "X-Api-Key: YOUR_API_KEY" \
  "https://epp-server/api/logs/content-filtering-logs?start_date=2025-01-01&end_date=2025-01-31&content_policy=PCI"
```

**Get a specific event log entry**

```bash
curl -s -k \
  -H "X-Api-Key: YOUR_API_KEY" \
  "https://epp-server/api/logs/event-logs/12345"
```

## Database tables reference

| Endpoint Group | Primary Table | Joined Tables |
|---|---|---|
| Event Logs | `log` | `event`, `clientmachine`, `clientuser`, `clientdevice`, `devicetype` |
| Device Control | `olog` | `event`, `devicetype`, `clientmachine`, `clientdevice` |
| Alert Statuses | `alert_status` | — |
| System Alerts | `sys_alert`, `sys_alert_log` | `sys_event` |
| Content Filtering | `cf_log`, `cf_alert` | `event` |
| Mobile Management | `mm_log`, `mm_alert`, `mm_alert_log` | — |
| EasyLock | `el_alert_log`, `el_send_alert_log` | `el_event` |
| Data at Rest | `dr_alert` | `dr_event` |
| SCIM Logs | `scim_log` | — |
| Auth Logs | `sf_guard_log` | `sf_guard_user` |
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
- `Access-Control-Allow-Headers: Content-Type, X-Api-Key, Authorization`
- `Access-Control-Max-Age: 86400`
