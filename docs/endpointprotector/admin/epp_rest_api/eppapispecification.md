---
title: "EPP REST API Specification"
description: "Complete endpoint reference for the EPP REST API including authentication, management endpoints, log endpoints, request parameters, and response fields"
sidebar_position: 40
---

# EPP REST API Specification


**Version:** 1.0  
**Base URL:** `https://<epp-server>/api/`  
**Token endpoint:** `https://<epp-server>/api/oauth/token`  
**Protocol:** HTTPS only (TLS 1.2+)  
**Content-Type:** `application/json` (`application/x-www-form-urlencoded` for the token request)

:::tip
When the API is enabled in your environment, an interactive OpenAPI reference is available at `https://<epp-server>/api/doc`, generated from the running server.
:::

## Authentication

The API uses the **OAuth 2.0 Client Credentials** grant. Integrations authenticate with a dedicated API client identifier and secret provisioned by Netwrix Support, not with a console administrator's username and password.

Obtain a token, then include it as a Bearer token on every subsequent request:

| Method | Header | Example |
|---|---|---|
| Bearer token | `Authorization: Bearer <token>` | `Authorization: Bearer eyJ...` |

Access tokens are short-lived signed JSON Web Tokens (JWT) with a default lifetime of 1 hour. Every endpoint except the token endpoint requires a valid, unexpired token and returns 401 otherwise.

:::warning
Treat the `client_secret` like a password. Store it in a secret manager, never commit it to source control, and rotate it through Netwrix Support if it may have been exposed.
:::

**POST /oauth/token**

Issues an OAuth 2.0 access token using the Client Credentials grant. This is the only endpoint that doesn't require a token. Send the request as `application/x-www-form-urlencoded`:

| Field | Required | Description |
|---|---|---|
| `grant_type` | Yes | Must be `client_credentials` |
| `client_id` | Yes | API client identifier provisioned by Netwrix Support |
| `client_secret` | Yes | API client secret provisioned by Netwrix Support |

Success response:

```json
{
  "token_type": "Bearer",
  "expires_in": 3600,
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Error response (invalid credentials):

```json
{
  "error": "invalid_client",
  "message": "Client authentication failed"
}
```

## Common parameters

### Pagination

| Parameter | Type | Default | Description |
|---|---|---|---|
| `page` | integer | 1 | Page number (1-based) |
| `per_page` | integer | 25 (management endpoints), 50 (log endpoints) | Items per page (maximum: 200) |

Every list response includes a `meta` object: `page`, `per_page`, `total`, and `total_pages`.

### Sorting

| Endpoint family | Sort field | Direction | Default direction |
|---|---|---|---|
| Management (Users, Computers, Devices, Groups, OTP) | `sort_by` | `direction` | `ASC` |
| Logs (`/api/logs/...`) | `sort_by` | `sort_order` | `DESC` |

`sort_by` must be a valid column for the endpoint; unrecognized values fall back to the endpoint default. Direction accepts `ASC` or `DESC`.

### Date filtering

| Parameter | Format | Notes |
|---|---|---|
| `start_date` | `YYYY-MM-DDTHH:MM:SS` (ISO 8601) or `YYYY-MM-DD` | Inclusive; a space is also accepted in place of `T` |
| `end_date` | `YYYY-MM-DDTHH:MM:SS` (ISO 8601) or `YYYY-MM-DD` | Inclusive |

The date field used for filtering varies by endpoint (documented per endpoint).

### Text search and filters

Where supported, `search` performs partial (LIKE) matching across the endpoint's key fields. Endpoints also expose targeted exact or partial filters (for example `department_id`, `machine_name`, `otp_type`), documented per endpoint.

## Response format

**List (success)**

```json
{
  "data": [
    { "id": 1 },
    { "id": 2 }
  ],
  "meta": {
    "page": 1,
    "per_page": 25,
    "total": 128,
    "total_pages": 6
  }
}
```

| Field | Type | Description |
|---|---|---|
| `data` | array | Log or resource entries for the current page |
| `meta.page` | integer | Current page number (1-based) |
| `meta.per_page` | integer | Maximum records returned in this page |
| `meta.total` | integer | Total matching records. Capped at a server-side maximum on the high-volume log endpoints. |
| `meta.total_pages` | integer | Total pages derived from `total` and `per_page` |

**Single resource (success)**

Management endpoints return the resource object directly. Log single-resource endpoints wrap the object in a `data` property.

**Delete (success)**

```json
{ "response": "allok" }
```

**Bulk operation result**

```json
{
  "resources": {
    "42": { "code": 200, "message": "deleted" },
    "43": { "code": 404, "message": "not found" }
  }
}
```

**Error**

```json
{ "error": "Resource not found." }
```

```json
{ "errors": { "name": "Name must not be empty." } }
```

## Error handling

| HTTP Code | Meaning |
|---|---|
| 200 | Success |
| 201 | Resource created |
| 207 | Multi-Status (bulk operation with at least one non-success item) |
| 400 | Bad request (invalid parameters or validation error) |
| 401 | Unauthorized (missing, invalid, or expired token) |
| 403 | Operation not permitted |
| 404 | Resource not found |
| 405 | Method not allowed |
| 500 | Internal server error |

---

## Health

**GET /health**

Returns a simple liveness response. Useful for container health probes and uptime monitoring. Requires a valid Bearer token.

Response:

```json
{ "status": "ok" }
```

---

## Users

Manage endpoint users. Base path: `/api/device-control/users`.

**User fields**

| Field | Type | Writable |
|---|---|---|
| `id` | integer | Read-only |
| `username` | string | Yes (part of identity) |
| `first_name` | string | Yes |
| `last_name` | string | Yes |
| `email` | string | Yes |
| `phone` | string | Yes |
| `domain` | string | Yes (part of identity when domain support is enabled) |
| `employee_id` | string | Yes |
| `team` | string | Yes |
| `sid` | string | Yes (Windows Security Identifier) |
| `last_seen` | string | Read-only (agent-managed) |
| `department_id` | integer | Yes |
| `created_at`, `modified_at` | string | Read-only |
| `created_by`, `modified_by` | string | Read-only (set to the OAuth client ID on write) |

### GET /device-control/users

Lists endpoint users. Soft-deleted users are excluded.

| Parameter | Type | Description |
|---|---|---|
| `page`, `per_page` | integer | Pagination (per_page default 25, max 200) |
| `sort_by` | string | One of `id`, `username`, `first_name`, `last_name`, `email`, `last_seen`, `department_id`, `created_at` (default `id`) |
| `direction` | string | `ASC` or `DESC` (default `ASC`) |
| `search` | string | Partial match across `username`, `first_name`, `last_name`, `email` |
| `department_id` | integer | Exact department match |
| `domain` | string | Exact domain match |

### GET /device-control/users/`{id}`

Returns a single user. Responds 404 if the user doesn't exist or has been deleted.

### POST /device-control/users

Creates a user. Identity is `username` (plus `domain` when domain support is enabled). If a matching user already exists it is updated and returned (200), restoring it if it was deleted; a brand-new user returns 201.

Request body (`username` required):

| Field | Type | Required | Validation |
|---|---|---|---|
| `username` | string | Yes | Non-empty; max 255 |
| `first_name` | string | No | Max 128 |
| `last_name` | string | No | Max 128 |
| `email` | string | No | Valid email address if provided |
| `phone` | string | No | — |
| `domain` | string | No | Part of identity when domain support is enabled |
| `employee_id` | string | No | — |
| `team` | string | No | — |
| `sid` | string | No | — |
| `department_id` | integer | No | Defaults to the default department when omitted |

### PATCH /device-control/users/`{id}`

Partial update. Only the fields present in the body change. Pass `department_id: null` to clear the department. If the resulting `username` (plus `domain`) collides with a different active user, the API returns 400 with `A user with this identity already exists.`

### DELETE /device-control/users/`{id}`

Soft-deletes a single user. Returns `{ "response": "allok" }`, or 404 if the user is absent or already deleted.

### DELETE /device-control/users

Bulk soft-delete. Body: `{ "id": [42, 43, 44] }`. Returns a `resources` map keyed by ID (`code` 200 = deleted, 404 = not found). Status 200 if all succeeded, 207 if any ID wasn't found, 400 if `id` is missing or not a non-empty array.

---

## Computers

Manage endpoint computers. Base path: `/api/device-control/computers`.

**Computer fields**

| Field | Type | Writable |
|---|---|---|
| `id` | integer | Read-only |
| `name` | string | Yes (part of identity) |
| `domain` | string | Yes (part of identity when domain support is enabled) |
| `workgroup` | string | Yes |
| `description` | string | Yes |
| `location` | string | Yes |
| `department_id` | integer | Yes |
| `owner_id` | integer | Yes |
| `ip`, `mac`, `ip_list`, `mac_list`, `serial_number`, `computer_id`, `os_type`, `os_version`, `agent_version`, `logged_user_id`, `terminal_server`, `last_seen` | mixed | Read-only (agent-managed) |
| `created_at`, `modified_at` | string | Read-only |
| `created_by`, `modified_by` | string | Read-only (set to the OAuth client ID on write) |

`os_type`: 1 = Windows, 2 = macOS, 3 = Linux.

### GET /device-control/computers

Lists endpoint computers. Soft-deleted computers are excluded.

| Parameter | Type | Description |
|---|---|---|
| `page`, `per_page` | integer | Pagination (per_page default 25, max 200) |
| `sort_by` | string | One of `id`, `name`, `domain`, `ip`, `os_type`, `os_version`, `agent_version`, `last_seen`, `department_id`, `created_at` (default `id`) |
| `direction` | string | `ASC` or `DESC` (default `ASC`) |
| `search` | string | Partial match across `name` and `domain` |
| `department_id` | integer | Exact department match |
| `os_type` | integer | 1 (Windows), 2 (macOS), 3 (Linux) |

### GET /device-control/computers/`{id}`

Returns a single computer, or 404 if absent or deleted.

### POST /device-control/computers

Creates a computer. Identity is `name` (plus `domain` when domain support is enabled). A matching computer is updated and returned (200); a brand-new computer returns 201. Agent-managed fields populate automatically when the EPP agent connects.

Request body (`name` required):

| Field | Type | Required | Validation |
|---|---|---|---|
| `name` | string | Yes | Non-empty; max 255 |
| `description` | string | No | Max 255 |
| `location` | string | No | Max 255 |
| `domain` | string | No | Max 512 |
| `workgroup` | string | No | Max 255 |
| `department_id` | integer | No | Defaults to the default department when omitted |
| `owner_id` | integer | No | ID of the owning user |

### PATCH /device-control/computers/`{id}`

Partial update of admin-managed metadata. Agent-managed fields can't be changed. An identity collision returns 400 with `A computer with this identity already exists.`

### DELETE /device-control/computers/`{id}`

Soft-deletes a single computer.

### DELETE /device-control/computers

Bulk soft-delete. Body: `{ "id": [99, 100, 101] }`. Same `resources` map and 200/207/400 semantics as Users.

---

## Devices

Manage endpoint devices. Base path: `/api/device-control/devices`.

**Device fields**

| Field | Type | Writable |
|---|---|---|
| `id` | integer | Read-only |
| `name` | string | Yes |
| `description` | string | Yes |
| `friendly_name` | string | Yes |
| `friendly_description` | string | Yes |
| `device_type_id` | integer | Yes (at create; part of identity) |
| `vid`, `pid`, `serial_no` | string | At create only (part of identity); agent-managed thereafter |
| `online`, `last_seen`, `last_computer_id`, `last_user_id` | mixed | Read-only (agent-managed) |
| `department_id` | integer | Yes |
| `owner_id` | integer | Yes |
| `created_at`, `modified_at` | string | Read-only |
| `created_by`, `modified_by` | string | Read-only (set to the OAuth client ID on write) |

A device's identity is the combination of `device_type_id`, `vid`, `pid`, and `serial_no`. `online`: 0 = offline, 1 = online.

### GET /device-control/devices

Lists endpoint devices. Soft-deleted devices are excluded.

| Parameter | Type | Description |
|---|---|---|
| `page`, `per_page` | integer | Pagination (per_page default 25, max 200) |
| `sort_by` | string | One of `id`, `name`, `device_type_id`, `vid`, `pid`, `serial_no`, `last_seen`, `department_id`, `created_at` (default `id`) |
| `direction` | string | `ASC` or `DESC` (default `ASC`) |
| `search` | string | Partial match across `name` and `friendly_name` |
| `device_type_id` | integer | Exact match |
| `department_id` | integer | Exact match |
| `online` | integer | 0 = offline, 1 = online |

### GET /device-control/devices/`{id}`

Returns a single device, or 404 if absent or deleted.

### POST /device-control/devices

Creates a device. If a device with the same identity already exists, that existing device is returned (200); a brand-new device returns 201.

Request body (`name` and `device_type_id` required):

| Field | Type | Required | Validation |
|---|---|---|---|
| `name` | string | Yes | Non-empty; max 128 |
| `device_type_id` | integer | Yes | Must reference an existing device type (see below) |
| `vid` | string | No | Max 16 |
| `pid` | string | No | Max 16 |
| `serial_no` | string | No | Max 1024 |
| `description` | string | No | Max 256 |
| `friendly_name` | string | No | Max 128 |
| `friendly_description` | string | No | Max 256 |
| `department_id` | integer | No | Defaults to the default department when omitted |
| `owner_id` | integer | No | ID of the owning user |

An unknown `device_type_id` returns 400 with `Unknown device type.`

### PATCH /device-control/devices/`{id}`

Partial update of admin-managed metadata (`name`, `description`, `friendly_name`, `friendly_description`, `department_id`, `owner_id`). Identity fields (`device_type_id`, `vid`, `pid`, `serial_no`) and agent-managed fields can't be changed.

### DELETE /device-control/devices/`{id}`

Soft-deletes a single device.

### DELETE /device-control/devices

Bulk soft-delete. Body: `{ "id": [55, 56] }`. Same `resources` map and 200/207/400 semantics as Users.

### GET /device-control/device-types

Returns the available device types (reference data). Use an `id` from this list for the `device_type_id` field when creating a device.

Response:

```json
{
  "data": [
    { "id": 1, "name": "USB Storage Device", "description": "Removable USB mass-storage devices" }
  ]
}
```

---

## Groups

Manage endpoint groups. Base path: `/api/device-control/groups`.

**Group fields**

| Field | Type | Writable |
|---|---|---|
| `id` | integer | Read-only |
| `name` | string | Yes (unique across active groups) |
| `description` | string | Yes |
| `domain` | string | Yes |
| `department_id` | integer | Yes |
| `priority` | integer | Yes (lower value = higher priority; default 999) |
| `group_type` | integer | Yes (0 = Regular, 1 = Smart, 2 = Default, 3 = Default variant) |
| `created_at`, `modified_at` | string | Read-only |
| `created_by`, `modified_by` | string | Read-only (set to the OAuth client ID on write) |

:::note
Policy configuration for a group (file tracing, shadowing, deep packet inspection, scan settings, and so on) is managed in the Endpoint Protector console, not through this API.
:::

### GET /device-control/groups

Lists endpoint groups. Soft-deleted groups are excluded.

| Parameter | Type | Description |
|---|---|---|
| `page`, `per_page` | integer | Pagination (per_page default 25, max 200) |
| `sort_by` | string | One of `id`, `name`, `priority`, `group_type`, `department_id`, `created_at` (default `id`) |
| `direction` | string | `ASC` or `DESC` (default `ASC`) |
| `search` | string | Partial match on group name |
| `department_id` | integer | Exact match |
| `group_type` | integer | 0, 1, 2, or 3 |

### GET /device-control/groups/`{id}`

Returns a single group, or 404 if absent or deleted.

### POST /device-control/groups

Creates a group. `name` must be unique across active groups; a duplicate returns 400 with `A group with this name already exists.`

Request body (`name` required):

| Field | Type | Required | Validation |
|---|---|---|---|
| `name` | string | Yes | Non-empty; max 1024; unique across active groups |
| `description` | string | No | Max 4096 |
| `domain` | string | No | Max 1024 |
| `department_id` | integer | No | — |
| `priority` | integer | No | Non-negative; defaults to 999 |
| `group_type` | integer | No | 0, 1, 2, or 3; defaults to 0 |

### PATCH /device-control/groups/`{id}`

Partial update. `name` must remain unique across active groups.

### DELETE /device-control/groups/`{id}`

Soft-deletes a single group. The global group can't be deleted (returns 403).

### DELETE /device-control/groups

Bulk soft-delete. Body: `{ "id": [7, 8, 9] }`. Same `resources` map and 200/207/400 semantics as Users.

---

## Offline Temporary Passwords

Generate, list, revoke, and delete Offline Temporary Passwords (OTPs). Base path: `/api/offline-temporary-passwords`.

An OTP grants time-limited offline access on an endpoint — for example, unlocking a specific device, unlocking all devices, allowing all file transfers, or resetting a transfer limit.

**OTP type**

| Value | Type | Notes |
|---|---|---|
| 1 | Device-specific (Device Control) | Unlocks a single device; requires `device_id` |
| 2 | All devices (Device Control) | Unlocks all devices for a computer or user |
| 3 | All file transfers (Content-Aware Protection) | Allows all file transfers for a computer or user |
| 4 | Transfer Limit Reset | Resets the transfer limit counter (fixed 30-minute window) |

**Duration**

`duration` is a preset code: `0` = 15 minutes, `1` = 30 minutes, `2` = 1 hour, `3` = 2 hours, `4` = 4 hours, `5` = 8 hours, `6` = 1 day, `7` = 2 days, `8` = 5 days, `9` = 14 days, `A` = 30 days, `date` = custom range (requires `start_date` and `end_date`). Duration is ignored for type 4, which always uses a 30-minute window.

**Status** (`status`): 1 = Inactive (not yet active), 2 = Active, 3 = Expired.

**Revocation state** (`revoke_sent`): 0 = Generated, 1 = Used, 2 = To be revoked, 3 = Revoke sent.

**OTP object fields**

`id`, `otp_type`, `duration`, `start_date`, `end_date`, `otp_code`, `justification`, `status`, `created_at`, `revoke_sent`, `used_on_machine_id`, and nested `device`, `computer`, and `user` objects (each with `id` and identifying fields, when applicable).

### GET /offline-temporary-passwords

Lists OTPs.

| Parameter | Type | Description |
|---|---|---|
| `page`, `per_page` | integer | Pagination (per_page default 25, max 200) |
| `sort_by` | string | One of `id`, `otp_type`, `duration`, `status`, `created_at`, `revoke_sent`, `otp_code`, `justification`, `device_name`, `machine_name`, `username` (default `id`) |
| `direction` | string | `ASC` or `DESC` (default `ASC`) |
| `start_date`, `end_date` | string | Filter by creation date |
| `otp_type` | integer | 1, 2, 3, or 4 |
| `status` | integer | 1, 2, or 3 |
| `revoke_sent` | integer | 0, 1, 2, or 3 |
| `otp_code`, `justification`, `device_name`, `machine_name`, `username` | string | Partial match |

### GET /offline-temporary-passwords/`{id}`

Returns a single OTP, or 404 if absent.

### POST /offline-temporary-passwords

Generates a new OTP. The referenced device, computer, or user must already be synced with the EPP Server.

Request body (`otp_type`, `duration`, and `justification` required):

| Field | Type | Required | Validation |
|---|---|---|---|
| `otp_type` | integer | Yes | 1, 2, 3, or 4 |
| `duration` | string | Yes | One of `0`–`9`, `A`, or `date` |
| `justification` | string | Yes | Non-empty; max 1024 |
| `device_id` | integer | Conditional | Required when `otp_type` = 1; must reference an existing device |
| `machine_id` | integer | Conditional | For `otp_type` 2, 3, or 4: provide `machine_id` or `client_id`; must reference an existing computer |
| `client_id` | integer | Conditional | For `otp_type` 2, 3, or 4: provide `machine_id` or `client_id`; must reference an existing user |
| `start_date` | string | Conditional | Required when `duration` = `date` (`YYYY-MM-DD HH:MM:SS`) |
| `end_date` | string | Conditional | Required when `duration` = `date`; must be after `start_date`, by at most 30 days and 12 hours |

Returns 201 with the created OTP. Validation failures (including a referenced computer or user that doesn't exist) return 400.

### PATCH /offline-temporary-passwords/`{id}`

Revokes an OTP. This marks the OTP for revocation (`revoke_sent` = 2, To be revoked). The EPP agent processes the revocation and sets `revoke_sent` = 3 (Revoke sent) on its next sync. Returns 200, or 404 if the OTP is absent.

### DELETE /offline-temporary-passwords/`{id}`

Soft-deletes a single OTP.

### DELETE /offline-temporary-passwords

Bulk soft-delete. Body: `{ "id": [99, 100] }`. Same `resources` map and 200/207/400 semantics as Users.

### GET /offline-temporary-passwords/transfer-limit

Returns whether any user, computer, or group has an active transfer limit policy.

Response:

```json
{ "tl_active": true }
```

---

## Logs

Read-only access to Endpoint Protector audit and activity logs. Base path: `/api/logs`. Log list endpoints use `sort_order` (default `DESC`) for sort direction and default to `per_page` 50 (max 200).

### GET /logs/device-control

Online device tracking logs. Date field: `timestamp`.

Filters: `start_date`, `end_date`, `machine_name` (partial), `client_name` (partial).

Response fields: `id`, `timestamp`, `machine_name`, `event_time_local`, `file_name`, `file_type`, `ip`, `domain`, `os_type`, `device_name`, `event_name`, `device_type_name`, `vid`, `pid`, `serial_no`, `epp_client_version`, `os_version`.

### GET /logs/content-aware-protection

Content-Aware Protection logs. Date field: `timestamp`.

Filters: `start_date`, `end_date`, `machine_name` (partial), `client_name` (partial).

Response fields: `id`, `timestamp`, `machine_name`, `client_name`, `event_time_local`, `file_name`, `file_size`, `event_name`, `ip`, `os_type`, `destination_type`, `content_policy`, `item_type`, `matched_item`, `item_details`, `file_hash`, `destination_details`, `justification`.

### GET /logs/content-filtering-alerts

Content filtering alert definitions. Date field: `created_at`.

Filters: `event_id`, `content_policy`, `department_id`.

Response fields: `id`, `name`, `department_id`, `group_id`, `machine_id`, `client_id`, `content_policy`, `event_id`, `old_alert`, `created_at`, `created_by_user_id`, `event_name`.

### GET /logs/easy-lock

EasyLock encryption and deployment logs. Date field: `timestamp`.

Filters: `start_date`, `end_date`, `machine_name` (partial), `client_name` (partial).

Response fields: `id`, `timestamp`, `machine_name`, `event_time_local`, `file_name`, `event_name`, `file_type`, `ip`, `domain`, `os_type`, `device_name`, `vid`, `pid`, `serial_no`, `device_type_name`, `epp_client_version`, `os_version`.

### GET /logs/ediscovery

eDiscovery (Data at Rest) scan results. Date field: `timestamp`.

Filters: `start_date`, `end_date`, `machine_name` (partial), `policy_name` (partial), `file_name` (partial).

Response fields: `id`, `timestamp`, `machine_name`, `event_time_local`, `file_name`, `matched_item`, `item_details`, `policy_name`, `client_time`, `status` (0 = pending, 1 = found sensitive data, 2 = clean).

### GET /logs/scim-logs

SCIM API request logs, without the request and response body payloads. Date field: `timestamp`.

Filters: `http_method`, `endpoint`, `status_code`, `actor`, `operation`, `resource_type`, and `search`.

Response fields: `id`, `timestamp`, `request_id`, `http_method`, `endpoint`, `status_code`, `actor`, `operation`, `resource_type`, `external_id`, `duration_ms`, `ip_address`, `user_agent`, `bulk_request_id`, `operation_index`.

### GET /logs/scim-logs/`{id}`

Returns a single SCIM log entry, wrapped in a `data` property, including the full `request_body` and `response_body` payloads.

### GET /logs/system-alert-logs

System alert log entries. Date field: `created_at`.

Filters: `start_date`, `end_date`.

Response fields: `id`, `sys_alert_name`, `sys_event_id`, `sys_event_opt_id`, `created_at`, `event_name`.

### GET /logs/admin-actions

Administrator action audit trail. Date field: `created_at`.

Filters: `user_id`, `section`, `log_type`, `operation`, and `search`.

Response fields: `id`, `section`, `operation`, `log_type`, `before_desc`, `after_desc`, `user` (object with `id` and `username`), `created_at`.

---

## Usage examples

**Obtain an access token**

```bash
TOKEN=$(curl -s -k -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials&client_id=<client-id>&client_secret=<client-secret>" \
  "https://<epp-server>/api/oauth/token" | python -c "import sys,json; print(json.load(sys.stdin)['access_token'])")
```

**List computers filtered by department**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/device-control/computers?department_id=3&sort_by=name&direction=ASC&per_page=50"
```

**Create a device**

```bash
curl -s -k -X POST \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"name": "Finance USB", "device_type_id": 1, "vid": "0781", "pid": "5567", "serial_no": "AA00112233445566"}' \
  "https://<epp-server>/api/device-control/devices"
```

**Generate a device-specific Offline Temporary Password valid for one hour**

```bash
curl -s -k -X POST \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"otp_type": 1, "duration": "2", "device_id": 5, "justification": "Temporary access for maintenance"}' \
  "https://<epp-server>/api/offline-temporary-passwords"
```

**List recent Device Control logs for a specific machine**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/logs/device-control?machine_name=WORKSTATION&sort_by=timestamp&sort_order=DESC&per_page=10"
```

**Retrieve a single SCIM log entry with payloads**

```bash
curl -s -k \
  -H "Authorization: Bearer ${TOKEN}" \
  "https://<epp-server>/api/logs/scim-logs/50"
```

## Limits

To protect the server and keep responses fast, the API caps result sizes rather than returning unbounded data:

- `per_page` accepts a maximum of 200 records per page.
- `meta.total` is capped at a server-side maximum on the high-volume log endpoints. Use pagination and filters to retrieve complete data sets in batches.

Netwrix Support may apply additional request-rate or network-level limits as part of your Preview enablement. Design integrations to page through results and to retry transient failures with backoff.
