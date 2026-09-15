---
title: "API Keys"
description: "Create, use, and revoke API keys for Change Tracker Hub automation without affecting active UI sessions"
sidebar_position: 25
---

# API Keys

API keys let a script or automation client (a CI pipeline, a monitoring integration, a
scheduled job) call the Netwrix Change Tracker Hub API (the central management server) without
a human logging in through the browser. You create a key once, use it as a Bearer token on
every subsequent request, and revoke it independently of any UI session.

Creating or using an API key, unlike a normal login, **never invalidates a user's other active
UI sessions**. The Hub normally enforces a single active session per user — logging in from a
second browser signs the first one out. API keys are exempt from that restriction, so an
automation client and a human user can both authenticate as the same account at the same time
without signing the other one out.

## How it works

An API key is a self-issued JSON Web Token (JWT), signed with the same key the Hub already
uses for UI session tokens. The Hub verifies the token's signature and expiry (`exp` claim) on
every request without a database lookup — the only thing the Hub stores server-side is a
non-secret identifier (`KeyId`, the token's `jti` claim) that it uses to check whether the key
is revoked and to record last-used timestamps. The Hub never stores, logs, or displays the raw
secret after the moment it's created.

Because the token carries no session identifier, it structurally can't participate in
single-session enforcement — a competing login has no session to invalidate.

## Enabling API keys

API key authentication is **disabled by default**. The setting isn't present in the shipped
`Configs/appsettings.*.json` files, so it stays off until an administrator adds it explicitly.
Calling `POST /apikeys/create` while it's disabled returns `403 Forbidden` ("API key
authentication is not enabled on this system.").

An administrator enables it by adding `security:apiKeys:enabled` under `security` in
`Configs/appsettings.Production.json` (or the equivalent environment-specific file):

```json
{
  "security": {
    "apiKeys": {
      "enabled": "true"
    }
  }
}
```

Alternatively, set the `security__apiKeys__enabled` environment variable — the Hub applies
environment variables last, so they override the JSON files. Related settings, all under
`security:apiKeys`:

| Setting | Default | Purpose |
|---|---|---|
| `enabled` | `false` | Turns API key authentication on or off for the whole deployment. |
| `expirySeconds` | `86400` (24 hours) | How long an API key remains valid after creation. The Hub rejects expired keys, so create a new one to replace it. |
| `usageLogDebounceSeconds` | `3600` | Minimum interval between usage-audit log entries for the same key, to avoid flooding the log on high-frequency callers. |
| `revocationCacheSeconds` | `300` (5 minutes) | How long the Hub caches a confirmed-valid key's status in Redis before re-checking it against Mongo. See [Security notes](#security-notes). |
| `maxKeysPerUser` | `64` | Maximum number of keys (of any status) a single user may hold at once. See [Key limits](#key-limits). |
| `basicAuthRateLimitMaxAttempts` | `10` | Maximum `POST /apikeys/create` Basic-auth attempts allowed per client IP within the rate-limit window, since that path bypasses the normal account lockout. Exceeding it returns `429 Too Many Requests`. |
| `basicAuthRateLimitWindowSeconds` | `60` | Length of the sliding window (in seconds) over which the Hub enforces `basicAuthRateLimitMaxAttempts`. |

### Who can create a key

Even with API keys enabled system-wide, an individual account can create keys for itself only
if it holds the **`ApiKeyManage`** permission. This is deliberately separate from `UserManage`
(which gates the *admin* endpoints — viewing/revoking *other* users' keys): `ApiKeyManage` only
controls whether an account may create keys for itself at all. An account without it gets
`403 Forbidden` ("You do not have permission to create API keys...") from `POST /apikeys/create`.

This exists because API-key usage never re-challenges two-factor authentication (2FA) — a key is
a bearer credential, the same as a GitHub personal access token or an AWS access key, so once
created it authenticates for its full lifetime (`expirySeconds`) without prompting for a
one-time code again. Restricting creation to accounts an administrator has explicitly opted in
limits how many standing, 2FA-free credentials exist at any time, rather than letting every
authenticated account create one. `Admin`-role accounts get `ApiKeyManage` automatically; anyone
else needs it granted explicitly (Administration → Users → **Roles and Permissions** —
`ApiKeyManage` appears there like any other permission, no separate setup needed).

Listing and revoking your *own* already-created keys (`GET /apikeys`, `DELETE /apikeys/{KeyId}`)
does **not** require `ApiKeyManage` — only creating a new one does. That way, revoking someone's
`ApiKeyManage` permission stops them creating new keys without stranding whatever keys they
already have.

### Key limits

Each user may hold at most `maxKeysPerUser` keys at once (default 64), counting every status —
active, revoked, and expired — since the Hub keeps revoked and expired keys for their audit
history rather than deleting them immediately. When a user at the limit creates a new key, the Hub
automatically deletes their single oldest revoked or expired key to make room. If the user is at
the limit and every one of their keys is still active (nothing revoked or expired to evict),
creation fails with `409 Conflict` until they revoke one themselves.

## SaaS and on-premises deployments

API keys work the same way in both deployment modes — creating, listing, using, and revoking a
key behaves identically after you have one. The only difference is how you can create one:

| Works on | Acquisition method |
|---|---|
| On-premises / SaaS | Authenticated WebUI session, **My API Keys** web page |
| On-premises | `Authorization: Basic` with a username/password against `POST /apikeys/create` |

## Using the WebUI

Each user manages their own API keys from the **My API Keys** page:

1. Click your username in the top-right corner of the Hub, then click **My API Keys**.
2. Click **Create**.
3. Enter a label that identifies where this key will be used (for example, "Jenkins CI"), so
   you can tell it apart from your other keys later.
4. Copy the key value shown — the Hub shows it only once, at the moment you create it. If you
   lose it, revoke it and create a new one.

From the same page you can also see all your existing keys with their creation/expiry/last-used
dates and a usage count, and revoke any key you no longer need.

:::note
The usage count reflects debounced audit log entries (at most one per
`usageLogDebounceSeconds` window — see [Review API key usage](#review-api-key-usage)), not
literal request counts, so it undercounts for a key used more than once within the same window.
:::

## Using the API directly

The following examples assume you already have a key in the `API_KEY` environment variable —
created via the WebUI (see [Using the WebUI](#using-the-webui)) or handed to you by whoever
created it. To create one from a script instead, see [PowerShell examples](#powershell-examples)
or [Python examples](#python-examples).

The examples also use the local development Hub (`https://localhost:5001/api`) with a
self-signed certificate, hence `curl -k`; against a Hub with a properly issued certificate, drop
that flag and substitute your own Hub URL.

```bash
export API_KEY="..."   # already have this from the WebUI or elsewhere
```

### 1. Use the key to call the API

Any endpoint that accepts an authenticated session also accepts the API key as a Bearer
token. For example, to list the device groups registered with the Hub:

```bash
curl -sk https://localhost:5001/api/groupsTree \
  -H "Authorization: Bearer $API_KEY"
```

This returns the same group/device hierarchy an authenticated UI session would see, and has no
effect on any other session the user has open.

### 2. List your API keys

```bash
curl -sk "https://localhost:5001/api/apikeys?Skip=0&Take=20" \
  -H "Authorization: Bearer $API_KEY"
```

Response:

```json
{
  "Results": [
    {
      "KeyId": "c8303fd5fb984338b874c3ac90635104",
      "Label": "Jenkins CI",
      "CreatedDate": "2026-08-26T21:38:56Z",
      "ExpiryDate": "2026-08-27T21:38:56Z",
      "CancelledDate": null,
      "LastUsedDate": "2026-08-26T21:39:10Z",
      "UsageCount": 12
    }
  ],
  "TotalCount": 1
}
```

:::note
The Hub returns `KeyId` here, not the key itself. It never stores or displays the
raw key value again after creation.
:::

### 3. Revoke a key

```bash
curl -sk -X DELETE https://localhost:5001/api/apikeys/$KEY_ID \
  -H "Authorization: Bearer $API_KEY"
```

where `$KEY_ID` is the `KeyId` from the create/list response (not the key itself). A revoked
key stops working immediately — the Hub checks revocation status on every request, so there's
no waiting for the token to expire.

### Inspecting a key's contents

A JWT's payload is base64-encoded, not encrypted, so you can inspect its claims without any
key material at all. The payload is just the middle, base64url-encoded segment of the token,
so it decodes with nothing but standard command-line tools:

```bash
decode_jwt_payload() {
  echo "$1" | cut -d. -f2 | tr -- '-_' '+/' | \
    awk '{ while (length($0) % 4) { $0 = $0 "=" } print }' | base64 -d 2>/dev/null | jq .
}

decode_jwt_payload "$API_KEY"
```

This decodes entirely offline. The output looks like:

```json
{
  "iss": "ssjwt",
  "sub": 1,
  "iat": 1787780736,
  "exp": 1787867136,
  "preferred_username": "admin",
  "nnt_ver": 802010000,
  "perms": "22440207668198477",
  "jti": "c8303fd5fb984338b874c3ac90635104",
  "nnt_org": 0,
  "nnt_tfe": 0,
  "zoneinfo": "Europe/London",
  "auth_username": "admin",
  "typ": "apikey",
  "label": "Jenkins CI"
}
```

`typ: "apikey"` and the absence of an `nnt_sid` claim distinguish this token from a
UI session token and keep it exempt from single-session enforcement. `jti` matches the
`KeyId` returned when the key was created — that's the non-secret identifier the Hub uses to
check for revocation. `exp` is the expiry (24 hours after creation, by default).

:::warning
An API key is a live bearer credential with its creating user's full permissions. Decode it
locally with the method above rather than pasting it into a third-party website such as jwt.io.
:::

## Admin operations

An administrator (any account with the `UserManage` permission) can view and revoke other users'
API keys without needing that user's own key. These endpoints require an authenticated caller —
either a UI session or, same as everywhere else in this document, the admin's own API key. They
don't accept `Authorization: Basic`, and there is no WebUI for them yet.

Netwrix recommends using the admin's own API key (rather than logging in for a session cookie)
to call these from a script: an API key inherits the creating user's permissions (see
[Security notes](#security-notes)), so an admin's key already carries `UserManage` and works here exactly
like a session would — with none of the session-invalidation risk of a fresh
`POST /auth/credentials` login.

### List a specific user's keys

Same shape as [the self-service list](#2-list-your-api-keys), but takes the target user's
`UserId` in the path. Get this value from [listing every key in the system](#list-every-key-in-the-system)
(each result includes the owner's `UserId`) if you don't already have it:

```bash
curl -sk "https://localhost:5001/api/admin/apikeys/$USER_ID?Skip=0&Take=20&ActiveOnly=false" \
  -H "Authorization: Bearer $API_KEY"
```

### List every key in the system

Omit `UserId` to list keys across every user instead of one — useful for an audit or
"who has API keys" overview. Each result includes a `UserId` field identifying its owner:

```bash
curl -sk "https://localhost:5001/api/admin/apikeys?Skip=0&Take=20&ActiveOnly=true" \
  -H "Authorization: Bearer $API_KEY"
```

```json
{
  "Results": [
    { "KeyId": "...", "UserId": "1", "Label": "Jenkins CI", "CreatedDate": "...", "ExpiryDate": "...", "CancelledDate": null, "LastUsedDate": "..." },
    { "KeyId": "...", "UserId": "7", "Label": "Nightly sync", "CreatedDate": "...", "ExpiryDate": "...", "CancelledDate": null, "LastUsedDate": "..." }
  ],
  "TotalCount": 2
}
```

`ActiveOnly=true` excludes revoked/expired keys the same way it does for the self-service list.

### Revoke another user's key

Requires both the owning user's `UserId` and the key's `KeyId` — an admin can't revoke a key by
`KeyId` alone without confirming which user it belongs to:

```bash
curl -sk -X DELETE "https://localhost:5001/api/admin/apikeys/$USER_ID/$KEY_ID" \
  -H "Authorization: Bearer $API_KEY"
```

This returns `404 Not Found` if the key doesn't exist, or if it exists but belongs to a
different user than the one specified — so a mistyped `UserId` can't accidentally revoke
someone else's key.

### Revoke every active key for a user

For incident response (e.g. a compromised account) — revokes every active key for a
user in one call, rather than one `KeyId` at a time. The Hub leaves already-revoked and expired
keys untouched (it keeps them for their audit history, same as elsewhere in this feature). There is no
system-wide "revoke every key for every user" variant — this always targets one `UserId`:

```bash
curl -sk -X DELETE "https://localhost:5001/api/admin/apikeys/$USER_ID" \
  -H "Authorization: Bearer $API_KEY"
```

```json
{ "RevokedCount": 3 }
```

`RevokedCount` is how many keys were active and got revoked — `0` if the user had none active
(not an error). Revocation takes effect immediately for every key revoked this way, the same as
[revoking a single key](#3-revoke-a-key) — including for a key that was itself used to
authenticate this call.

### Review API key usage

You can list usage records (route, IP address, User-Agent, timestamp) at three scopes,
depending on which of `UserId`/`KeyId` you supply — all newest first, paginated the same way as
the list endpoints:

```bash
# One key's usage
curl -sk "https://localhost:5001/api/admin/apikeys/$USER_ID/$KEY_ID/usage?Take=20" \
  -H "Authorization: Bearer $API_KEY"

# Every key a given user has ever used (including keys since revoked/deleted)
curl -sk "https://localhost:5001/api/admin/apikeys/$USER_ID/usage?Take=20" \
  -H "Authorization: Bearer $API_KEY"

# Every key for every user in the system
curl -sk "https://localhost:5001/api/admin/apikeys/usage?Take=20" \
  -H "Authorization: Bearer $API_KEY"
```

```json
{
  "Results": [
    { "KeyId": "...", "UserId": "1", "Route": "/status/system", "IpAddress": "10.0.0.5", "UserAgent": "curl/8.7.1", "TimestampUtc": "..." }
  ],
  "TotalCount": 1
}
```

`KeyId` is only ever meaningful together with `UserId` — the Hub looks up a key solely to confirm
it belongs to that user (same ownership check as revoking a specific key), so it rejects `KeyId`
without `UserId`. The Hub debounces these records (at most one write per key per
`usageLogDebounceSeconds`) and expires them after 90 days, so this reflects "which keys were
active in which window," not every single request.

## PowerShell examples

The following examples build a complete, working flow — create a key, inspect it, call the API,
list keys, and clean up — the same steps as [Using the API directly](#using-the-api-directly),
but in PowerShell.

Creating a key only ever needs HTTP Basic auth, never a session:

```powershell
function Get-BasicAuthHeader([string]$User, [string]$Pass) {
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($User + ':' + $Pass)
    'Basic ' + [Convert]::ToBase64String($bytes)
}

$basicHeader = Get-BasicAuthHeader $CtUsername $CtPassword
$createResponse = Invoke-RestMethod -Method Post -Uri "$HostUrl/apikeys/create" `
    -ContentType 'application/json' -Headers @{ Authorization = $basicHeader } `
    -Body (@{ Label = 'my-automation' } | ConvertTo-Json)

$apiKey = $createResponse.Key
$keyId = $createResponse.KeyId
```

A JWT's payload is base64url-encoded, not encrypted, so you can inspect its claims locally
without a request to the Hub — useful for confirming a key's `label`, `exp`, or `jti` (`KeyId`)
before using it:

```powershell
function ConvertFrom-JwtPayload([string]$Jwt) {
    $payload = $Jwt.Split('.')[1].Replace('-', '+').Replace('_', '/')
    switch ($payload.Length % 4) {
        2 { $payload += '==' }
        3 { $payload += '=' }
    }
    $bytes = [Convert]::FromBase64String($payload)
    [System.Text.Encoding]::UTF8.GetString($bytes) | ConvertFrom-Json
}

ConvertFrom-JwtPayload $apiKey | ConvertTo-Json
```

Calling an endpoint and listing your own keys both just need the key as a Bearer token:

```powershell
$status = Invoke-RestMethod -Uri "$HostUrl/status/system" -Headers @{ Authorization = "Bearer $apiKey" }

$list = Invoke-RestMethod -Uri "$HostUrl/apikeys?Skip=0&Take=20" -Headers @{ Authorization = "Bearer $apiKey" }
$list.Results | Select-Object KeyId, Label, CreatedDate | Format-Table -AutoSize
```

Revoking is a `DELETE` by `KeyId`:

```powershell
Invoke-WebRequest -Method Delete -Uri "$HostUrl/apikeys/$keyId" `
    -Headers @{ Authorization = "Bearer $apiKey" } -UseBasicParsing | Out-Null
```

For a script that mints its own throwaway keys (a CI job, a one-off report), wrap the whole
thing in `try`/`finally` so the script revokes the key whether it succeeds or fails — the same
pattern `demo-api-keys.ps1` uses, which leaves no stray keys:

```powershell
$createdKeyIds = New-Object System.Collections.Generic.List[string]

try {
    # ... create keys, add each KeyId to $createdKeyIds, do the work ...
}
finally {
    foreach ($id in $createdKeyIds) {
        Invoke-WebRequest -Method Delete -Uri "$HostUrl/apikeys/$id" `
            -Headers @{ Authorization = "Bearer $apiKey" } -UseBasicParsing | Out-Null
    }
}
```

## Python examples

The `nct_api_client` package's `NCTClient` wraps this flow. Authenticate with
`login_apikey()`, not `login()`:

```python
client = NCTClient(base_url="https://localhost:5001", username="admin", verify_ssl=False)
client.login_apikey()

print(client.get_agents())
```

`login_apikey()` caches the minted key in the OS keyring (via the `keyring` package) and
reuses it across runs as long as it still has more than an hour of time-to-live left,
so a script called repeatedly (a scheduled job, a CI step) doesn't create a fresh key — and
create a fresh audit record — on every invocation:

```python
def login_apikey(self, label: str = None):
    label = label or f"{self.username}-python-client"

    api_key = keyring.get_password(API_KEY_KEYRING_SERVICE, label)
    if api_key and self._jwt_ttl_seconds(api_key) > API_KEY_MIN_TTL_SECONDS:
        self.api_key = api_key
        return
    # ... otherwise create a new one over HTTP Basic auth against /apikeys/create ...
```

If the account this script runs as has 2FA required or enabled, `POST /apikeys/create` rejects
the Basic-auth bootstrap outright (`403 Forbidden`, "This account requires two-factor
authentication, which Basic authentication can't satisfy") — there's nowhere for this flow to
collect a one-time password, so it can't create a key on its own. Someone has to create one from the
**My API Keys** page instead and hand it to the script. If you maintain your own copy of this
client, adding a check like this before the keyring lookup covers that case:

```python
def login_apikey(self, label: str = None):
    label = label or f"{self.username}-python-client"

    # First check whether the key was set in the environment,
    # which is required when 2FA is enabled.
    env_api_key = os.environ.get("API_KEY")
    if env_api_key:
        self.api_key = env_api_key
        return

    api_key = keyring.get_password(API_KEY_KEYRING_SERVICE, label)
    if api_key and self._jwt_ttl_seconds(api_key) > API_KEY_MIN_TTL_SECONDS:
        self.api_key = api_key
        return
    # ... otherwise create a new one over HTTP Basic auth against /apikeys/create ...
```

The client's `_authenticated_request()` method is worth reproducing in your own scripts even
outside this library: it tries the API key as a Bearer token first, and only falls back to a
credentials-based session if that fails — so you can write a client once and have it work
regardless of whether `security:apiKeys:enabled` is turned on for a given Hub, without every
call site having to know which auth mode is active:

```python
def _authenticated_request(self, method: str, path: str, **kwargs):
    url = urljoin(self.base_url, path)

    if self.api_key:
        headers = {**kwargs.pop("headers", {}), "Authorization": f"Bearer {self.api_key}"}
        response = requests.request(method, url, headers=headers, verify=self.verify_ssl, **kwargs)
        if response.ok:
            return response

    if not self.session:
        raise NCTError("Not authenticated. Call login() or login_apikey() first.")

    response = self.session.request(method, url, **kwargs)
    response.raise_for_status()
    return response
```

Every data method on the client (`get_agents()`, `get_devices()`, `add_database_credential()`,
and so on) calls `_authenticated_request()` rather than making its own request, so this fallback
applies uniformly — callers never need to branch on which auth mode is in use.

The older PowerShell tools don't have an API-key option yet. If your automation calls
`New-NctSession` or `GetAdminUserSession` instead of the `nct_api_client` package, see
[Appendix B](#appendix-b-older-powershell-helpers-and-single-session-enforcement).

## Security notes

- The Hub shows the key value exactly once, at creation time. There is no way to retrieve it
  again — revoke and re-create if it's lost.
- The label isn't secret — the token's `label` claim includes it so the credential is
  self-describing, but never put sensitive information in a key's label.
- Revoking a key takes effect immediately; the Hub checks revocation on every request that
  presents an API-key token. The Hub caches revocation status in Redis for a few minutes (configurable
  via `security:apiKeys:revocationCacheSeconds`, default 300s) to reduce load on Mongo — revoking
  writes straight through to that cache, so revocation stays instant as long as Redis is reachable
  at the moment of revoke. Only if Redis was down exactly then could a key that was already cached
  as valid keep working for up to that window.
- Keys inherit the exact permission set their creating user held at the moment of creation. If
  that user's permissions change later, existing keys keep their original permissions until they
  expire or someone revokes and re-creates them.
- The Hub accepts API keys only via the `Authorization: Bearer` header — never via the browser's
  session cookie. The Hub enforces this rather than merely recommending it: it rejects a key
  presented via a cookie with 401, since a cookie-borne key would otherwise bypass 2FA and the
  single-session restriction the way a real login can't.

## Appendix A: API Reference

A summary of every endpoint this feature adds. For the full, always-current request/response
schemas, see the [Netwrix Change Tracker Hub API Reference](/docs/changetracker/api/reference/),
generated from the Hub's OpenAPI spec.

### Self-service

| Endpoint | Description | Input | Output |
|---|---|---|---|
| `POST /apikeys/create` | Creates a new API key for the calling user. | `Label` (string, body). Accepts an authenticated session (both deployment modes, used by the WebUI) or `Authorization: Basic` (on-premises only). | `Key`, `KeyId`, `Label`, `CreatedDate`, `ExpiryDate` |
| `GET /apikeys` | Lists the calling user's own API keys, newest first. | `Skip`, `Take`, `ActiveOnly` (query, all optional) | `Results[]` (`KeyId`, `UserId`, `Label`, `CreatedDate`, `ExpiryDate`, `CancelledDate`, `LastUsedDate`, `UsageCount`), `TotalCount` |
| `DELETE /apikeys/{KeyId}` | Revokes one of the calling user's own keys immediately. | `KeyId` (path) | *(204 No Content)* |

### Admin

Requires the `UserManage` permission.

| Endpoint | Description | Input | Output |
|---|---|---|---|
| `GET /admin/apikeys`<br/>`GET /admin/apikeys/{UserId}` | Lists API keys for one user, or across every user if you omit `UserId`. | `UserId` (path, optional), `Skip`, `Take`, `ActiveOnly` (query, all optional) | Same shape as `GET /apikeys` |
| `DELETE /admin/apikeys/{UserId}/{KeyId}` | Revokes a specific user's key. | `UserId`, `KeyId` (path) | *(204 No Content)* |
| `DELETE /admin/apikeys/{UserId}` | Revokes every active key for a user in one call. Leaves already-revoked and expired keys untouched. | `UserId` (path) | `RevokedCount` |
| `GET /admin/apikeys/usage`<br/>`GET /admin/apikeys/{UserId}/usage`<br/>`GET /admin/apikeys/{UserId}/{KeyId}/usage` | Lists usage audit records, scoped to one key, one user's keys, or every key in the system depending on which path you use. | `UserId`, `KeyId` (path, both optional — `KeyId` requires `UserId`), `Skip`, `Take` (query, both optional) | `Results[]` (`KeyId`, `UserId`, `Route`, `IpAddress`, `UserAgent`, `TimestampUtc`), `TotalCount` |

### Other APIs referenced in this document

Endpoints outside the API key feature itself that this document mentions, for context.

| Endpoint | Description | Input | Output |
|---|---|---|---|
| `POST /auth/credentials` | The Hub's normal credentials-based session login — the same one the browser UI uses. Every older automation path this document warns about (`New-NctSession`, `GetAdminUserSession`, `NCTClient.login()`) authenticates here. Signs the account in to a real UI session, which triggers the Hub's single-session-per-user enforcement: it signs out any other active session for that account. This side effect is the whole reason this document exists — API keys are the alternative that avoids it. | `username`, `password` (form body) | `UserId`, `SessionId` |
| `GET /groupsTree` | Returns the device group hierarchy. Used in [Using the API directly](#using-the-api-directly) only as an example of an arbitrary endpoint that accepts a Bearer token like any other — it isn't part of the API key feature. | *(none)* | Device group hierarchy |
| `GET /status/system` | Returns Hub version and system/config details once authenticated. Used in the PowerShell examples only as an example authenticated call — it isn't part of the API key feature. | *(none)* | System version and config settings |

## Appendix B: Older PowerShell helpers and single-session enforcement

This appendix only applies if your automation already calls `New-NctSession` (from the
`NctApiClientLibrary` module) or `GetAdminUserSession` (from `gen7-utilities.ps1`).
If you're not using either of those, you can skip it.

Two older PowerShell tools predate API keys and still authenticate the same way a browser
login does:

| Tool | Function | What it does |
|---|---|---|
| `NctApiClientLibrary` module | `New-NctSession` | Prompts for (or loads persisted) credentials and posts them to `/auth/credentials` to start a session. |
| `gen7-utilities.ps1` | `GetAdminUserSession` | Posts a configured admin username and password to `/auth/credentials` to start a session. |

Despite its folder name, `GetAdminUserSession` in `ApiKeysDemo/gen7-utilities.ps1`
authenticates through the same credentials-login endpoint as `New-NctSession` and a browser
sign-in. Neither tool supports authenticating with an API key.

Because both tools log in with a username and password, they trigger the Hub's normal
single-session enforcement — the same restriction API keys are exempt from. Running either
one signs out any other active session for that account, including a browser tab someone else
has open. A scheduled job that calls `New-NctSession` every hour, or an admin script built on
`GetAdminUserSession`, can silently sign a user out of a live UI session with no warning to
either party.

For example, calling `New-NctSession` from the `NctApiClientLibrary` module authenticates
with a username and password, the same as a browser login:

```powershell
Import-Module NctApiClientLibrary

# Prompts for a password (or loads a persisted credential) and posts it to
# /auth/credentials — this signs out any other active session for "admin".
$mySession = New-NctSession -url "https://localhost/api" -user "admin"
```

`GetAdminUserSession` in `gen7-utilities.ps1` does the same thing directly,
without the client library:

```powershell
function GetAdminUserSession() {
    $uri = "$HostUrl/auth/credentials"
    $params = "username=$AdminUser&password=$AdminPwd&format=json"
    Invoke-RestMethod -Method Post -Uri $uri -Headers @{ Accept = 'application/json' } `
        -SessionVariable myWebSession -Body $params
    # ...
}
```

:::warning
`New-NctSession` and `GetAdminUserSession` authenticate via `/auth/credentials`, the same
endpoint a browser login uses. Running either one invalidates any other active session for
that account. For automation, prefer an API key instead — it authenticates without affecting
any other session.
:::

`demo-api-keys.ps1` shows the safe alternative: it authenticates only by creating
an API key over HTTP Basic auth against `POST /apikeys/create` and never calls
`POST /auth/credentials`, so it's safe to run alongside a live login session without signing
it out. Creating the key:

```powershell
function Get-BasicAuthHeader([string]$User, [string]$Pass) {
    $bytes = [System.Text.Encoding]::UTF8.GetBytes($User + ':' + $Pass)
    'Basic ' + [Convert]::ToBase64String($bytes)
}

$basicHeader = Get-BasicAuthHeader $CtUsername $CtPassword
$createResponse = Invoke-RestMethod -Method Post -Uri "$HostUrl/apikeys/create" `
    -ContentType 'application/json' -Headers @{ Authorization = $basicHeader } `
    -Body (@{ Label = 'demo-api-keys.ps1' } | ConvertTo-Json)

$ApiKey = $createResponse.Key
```

Then calling an authenticated endpoint with the resulting key as a Bearer token — no session
created, nothing to invalidate:

```powershell
$status = Invoke-RestMethod -Uri "$HostUrl/status/system" -Headers @{ Authorization = "Bearer $ApiKey" }
```

If you're automating against the Hub API today, create an API key this way (or from the
**My API Keys** page) instead of adding a new call to `New-NctSession` or
`GetAdminUserSession`.
