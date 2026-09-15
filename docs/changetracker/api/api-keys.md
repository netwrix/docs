---
title: "API Keys"
description: "API Keys"
sidebar_position: 25
---

# API Keys

API keys let a script or automation client (a CI pipeline, a monitoring integration, a
scheduled job) call the Hub API without a human logging in through the browser. A key is
created once, used as a Bearer token on every subsequent request, and can be revoked
independently of any UI session.

Unlike a normal login, creating or using an API key **never invalidates a user's other active
UI sessions**. The Hub normally enforces a single active session per user — logging in from a
second browser signs the first one out. API keys are exempt from that restriction, so an
automation client and a human user can be authenticated as the same account at the same time
without either one kicking the other out.

## How it works

An API key is a self-issued JSON Web Token (JWT), signed with the same key the Hub already
uses for UI session tokens. The token's signature and expiry (`exp` claim) are verified on
every request without a database lookup — the only thing the Hub stores server-side is a
non-secret identifier (`KeyId`, the token's `jti` claim) used to check whether the key has
been revoked and to record last-used timestamps. No raw secret is ever stored, logged, or
displayed after the moment it's created.

Because the token carries no session identifier, it structurally cannot participate in
single-session enforcement — there is no session for a competing login to invalidate.

## Enabling API keys

API key authentication is **disabled by default**. This default isn't spelled out in a shipped
config file — `security:apiKeys:enabled` isn't present in `Configs/appsettings.*.json` out of the
box, so the `false` default comes implicitly from the Hub's own internal default
(`ConfigConstants.DefaultApiKeyAuthEnabled`) until an administrator adds the setting explicitly.

An administrator enables it either by adding `security:apiKeys:enabled: "true"` under `security`
in `Configs/appsettings.Production.json` (or the equivalent environment-specific file), or by
setting the `security__apiKeys__enabled` environment variable — environment variables are applied
last and override the JSON files, which is how the local Docker dev stack's
`security__apiKeys__enabled=true|false` (see the root `Makefile`) toggles this setting without
touching any config file. Related settings, all under `security:apiKeys`:

| Setting | Default | Purpose |
|---|---|---|
| `enabled` | `false` | Turns API key authentication on or off for the whole deployment. |
| `expirySeconds` | `86400` (24 hours) | Time-to-Live (TTL) defines how long an API key remains valid before it expires and requires re-authorization. |
| `usageLogDebounceSeconds` | `3600` | Minimum interval between usage-audit log entries for the same key, to avoid flooding the log on high-frequency callers. |
| `revocationCacheSeconds` | `300` (5 minutes) | How long a confirmed-valid key's status is cached in Redis before being re-checked against Mongo. See *Security notes* below. |
| `maxKeysPerUser` | `64` | Maximum number of keys (of any status) a single user may hold at once. See *Key limits* below. |
| `basicAuthRateLimitMaxAttempts` | `10` | Maximum `POST /apikeys/create` Basic-auth attempts allowed per client IP within the rate-limit window, since that path bypasses the normal account lockout. |
| `basicAuthRateLimitWindowSeconds` | `60` | Length of the sliding window (in seconds) `basicAuthRateLimitMaxAttempts` is enforced over. |

### Who can create a key

Even with API keys enabled system-wide, an individual account can only create keys for itself
if it holds the **`ApiKeyManage`** permission. This is deliberately separate from `UserManage`
(which gates the *admin* endpoints — viewing/revoking *other* users' keys): `ApiKeyManage` only
controls whether an account may mint keys for itself at all.

This exists because API-key usage never re-challenges 2FA — a key is a bearer credential, the
same as a GitHub PAT or an AWS access key, so once minted it authenticates for its full lifetime
(`expirySeconds`) without prompting for a one-time code again. Restricting creation to accounts
an administrator has explicitly opted in limits how many standing, 2FA-free credentials exist at
any time, rather than letting every authenticated account mint one. `Admin`-role accounts get
`ApiKeyManage` automatically; anyone else needs it granted explicitly (Administration → Users →
**Roles and Permissions** — `ApiKeyManage` appears there like any other permission, no separate
setup needed).

Listing and revoking your *own* already-created keys (`GET /apikeys`, `DELETE /apikeys/{KeyId}`)
does **not** require `ApiKeyManage` — only creating a new one does. That way, revoking someone's
`ApiKeyManage` permission stops them minting new keys without stranding whatever keys they
already have.

### Key limits

Each user may hold at most `maxKeysPerUser` keys at once (default 64), counting every status —
active, revoked, and expired — since revoked/expired keys are kept around for their audit
history rather than deleted immediately. When a user at the limit creates a new key, the Hub
automatically deletes their single oldest revoked or expired key to make room. If the user is at
the limit and every one of their keys is still active (nothing revoked or expired to evict),
creation fails with `409 Conflict` until they revoke one themselves.

## SaaS vs. on-prem

API keys work the same way in both deployment modes — creating, listing, using, and revoking a
key behaves identically once you have one. The only difference is which ways you can create one:

| Works on | Acquisition method |
|---|---|
| On-prem / SaaS | Authenticated WebUI session, **My API Keys** web page |
| On-prem | `Authorization: Basic` with a username/password against `POST /apikeys/create` |

## Using the WebUI

Each user manages their own API keys from the **My API Keys** page, reached from the user
menu in the top-right corner of the Hub (click your username, then **My API Keys**).

From here you can create a new key (giving it a label so you can tell it apart from your
other keys later), see all your existing keys with their creation/expiry/last-used dates and a
usage count, and revoke any key you no longer need. The usage count reflects debounced audit log
entries (at most one per `usageLogDebounceSeconds` window — see *Review API key usage* below),
not literal request counts, so it undercounts for a key used more than once within the same
window.

A key's full value is only ever shown once, at the moment it's created — copy it somewhere
safe immediately. If you lose it, revoke it and create a new one.

## Using the API directly

The examples below assume you already have a key in the `API_KEY` environment variable — created
via the WebUI (see above) or handed to you by whoever created it. `Hub/ApiScripts/Bash/` has a
script (`purge-api-keys.sh`) that shows how to mint one from a username and password if you need
to script that part too, but that's a separate concern from what's covered here and isn't repeated
in this document.

The examples also use the local development Hub (`https://localhost:5001/api`) with a
self-signed certificate, hence `curl -k`; drop that flag and substitute your own Hub URL against
a Hub with a properly issued certificate.

```bash
export API_KEY="..."   # already have this from the WebUI or elsewhere
```

### 1. Inspect the key's contents at jwt.io

A JWT's payload is base64-encoded, not encrypted, so you can inspect its claims without any
key material at all. Open [https://www.jwt.io](https://www.jwt.io) and paste the `Key` value
into the "Encoded" box. The decoded payload looks like:

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

`typ: "apikey"` and the absence of an `nnt_sid` claim are what distinguish this token from a
UI session token and keep it exempt from single-session enforcement. `jti` matches the
`KeyId` returned when the key was created — that's the non-secret identifier the Hub uses to
check for revocation. `exp` is the expiry (24 hours after creation, by default).

The token is signed (RS256 by default), not encrypted — verifying that signature requires the Hub's
public key, which jwt.io doesn't have, so it will show the signature as "invalid". That's
expected and not a problem: decoding the claims doesn't require verification, and the Hub
itself verifies the signature on every request that presents the token.

You don't need a browser for this — the payload is just the middle, base64url-encoded segment
of the token, so it decodes with nothing but standard command-line tools:

```bash
decode_jwt_payload() {
  echo "$1" | cut -d. -f2 | tr -- '-_' '+/' | \
    awk '{ while (length($0) % 4) { $0 = $0 "=" } print }' | base64 -d 2>/dev/null | jq .
}

decode_jwt_payload "$API_KEY"
```

This prints the same JSON jwt.io shows, entirely offline.

### 2. Use the key to call the API

Any endpoint that accepts an authenticated session also accepts the API key as a Bearer
token. For example, to list the device groups registered with the Hub:

```bash
curl -sk https://localhost:5001/api/groupsTree \
  -H "Authorization: Bearer $API_KEY"
```

This returns the same group/device hierarchy an authenticated UI session would see, and has no
effect on any other session the user has open.

### 3. List your API keys

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

Note that `KeyId` — not the key itself — is what's returned here. The Hub never stores or
displays the raw key value again after creation.

### Revoking a key

```bash
curl -sk -X DELETE https://localhost:5001/api/apikeys/$KEY_ID \
  -H "Authorization: Bearer $API_KEY"
```

where `$KEY_ID` is the `KeyId` from the create/list response (not the key itself). A revoked
key stops working immediately — the Hub checks revocation status on every request, so there's
no waiting for the token to expire naturally.

## Admin operations

An administrator (any account with the `UserManage` permission) can view and revoke other users'
API keys without needing that user's own key. These endpoints require an authenticated caller —
either a UI session or, same as everywhere else in this doc, the admin's own API key. They are
not available via `Authorization: Basic`, and there is no WebUI for them yet.

Using the admin's own API key (rather than logging in for a session cookie) is the recommended
way to call these from a script: an API key inherits the creating user's permissions (see
*Security notes* below), so an admin's key already carries `UserManage` and works here exactly
like a session would — with none of the session-invalidation risk of a fresh
`POST /auth/credentials` login.

### List a specific user's keys

Same shape as the self-service list above, but takes the target user's `UserId` (their
`UserAuthId`) in the path:

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

Requires both the owning user's `UserId` and the key's `KeyId` — an admin cannot revoke a key by
`KeyId` alone without confirming which user it belongs to:

```bash
curl -sk -X DELETE "https://localhost:5001/api/admin/apikeys/$USER_ID/$KEY_ID" \
  -H "Authorization: Bearer $API_KEY"
```

This 404s if the key doesn't exist, or if it exists but belongs to a different user than the one
specified — so a mistyped `UserId` can't accidentally revoke someone else's key.

### Revoke every active key for a user

For incident response (e.g. a compromised account) — revokes every currently-active key for a
user in one call, rather than one `KeyId` at a time. Already-revoked/expired keys are left
untouched (they're kept for their audit history, same as elsewhere in this feature). There is no
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
the single-key revoke above — including for a key that was itself used to authenticate this
call.

### Review API key usage

Usage records (route, IP address, User-Agent, timestamp) can be listed at three scopes,
depending on which of `UserId`/`KeyId` are supplied — all newest first, paginated the same way as
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

`KeyId` is only ever meaningful together with `UserId` — a key is looked up solely to confirm it
belongs to that user (same ownership check as revoking a specific key), so `KeyId` without
`UserId` is rejected. Records are debounced (at most one write per key per
`usageLogDebounceSeconds`) and auto-expire after 90 days, so this reflects "which keys were
active in which window," not literally every single request.

## PowerShell examples

The examples below build a complete, working flow — mint a key, inspect it, call the API,
list keys, and clean up — the same steps as [Using the API directly](#using-the-api-directly),
but in PowerShell. They mirror the pattern in `Utils/Powershell/ApiKeysDemo/demo-api-keys.ps1`.

Minting a key only ever needs HTTP Basic auth, never a session:

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

A JWT's payload is base64url-encoded, not encrypted, so its claims can be inspected locally
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
thing in `try`/`finally` so the key is revoked whether the script succeeds or fails — the same
pattern `demo-api-keys.ps1` uses, so nothing is left behind:

```powershell
$createdKeyIds = New-Object System.Collections.Generic.List[string]

try {
    # ... mint keys, add each KeyId to $createdKeyIds, do the work ...
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
`login_apikey()`, not `login()` — see
[Appendix B](#appendix-b-client-library-gotchas--powershell-vs-python) for why:

```python
client = NCTClient(base_url="https://localhost:5001", username="admin", verify_ssl=False)
client.login_apikey()

print(client.get_agents())
```

`login_apikey()` caches the minted key in the OS keyring (via the `keyring` package) and
reuses it across runs as long as it still has more than an hour of time-to-live left,
so a script called repeatedly (a scheduled job, a CI step) doesn't mint a fresh key — and
create a fresh audit record — on every invocation:

```python
def login_apikey(self, label: str = None):
    label = label or f"{self.username}-python-client"

    api_key = keyring.get_password(API_KEY_KEYRING_SERVICE, label)
    if api_key and self._jwt_ttl_seconds(api_key) > API_KEY_MIN_TTL_SECONDS:
        self.api_key = api_key
        return
    # ... otherwise mint a new one over HTTP Basic auth against /apikeys/create ...
```

If the account this script runs as has 2FA required or enabled, `POST /apikeys/create` rejects
the Basic-auth bootstrap outright (`403 Forbidden`, "This account requires two-factor
authentication, which Basic authentication cannot satisfy") — there's nowhere for this flow to
collect an OTP, so it can't mint a key on its own. Someone has to create one from the
**My API Keys** page instead and hand it to the script. Checking an `API_KEY` environment
variable before falling back to the keyring/Basic-auth flow covers that case:

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
    # ... otherwise mint a new one over HTTP Basic auth against /apikeys/create ...
```

The client's `_authenticated_request()` method is worth borrowing for your own scripts even
outside this library: it tries the API key as a Bearer token first, and only falls back to a
credentials-based session if that fails — so a client can be written once and work whether or
not `security:apiKeys:enabled` is turned on for a given Hub, without every call site having to
know which auth mode is active:

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

## Security notes

- The key value is shown exactly once, at creation time. There is no way to retrieve it again
  — revoke and re-create if it's lost.
- The label is not secret — it's included in the token's `label` claim so the credential is
  self-describing, but never put sensitive information in a key's label.
- Revoking a key takes effect immediately; the Hub checks revocation on every request that
  presents an API-key token. Revocation status is cached in Redis for a few minutes (configurable
  via `security:apiKeys:revocationCacheSeconds`, default 300s) to reduce load on Mongo — revoking
  writes straight through to that cache, so revocation stays instant as long as Redis is reachable
  at the moment of revoke. Only if Redis was down exactly then could a key that was already cached
  as valid keep working for up to that window.
- Keys inherit the exact permission set of the user who created them at the moment of
  creation. If that user's permissions change later, existing keys keep whatever permissions
  were baked in until they expire or are revoked and re-created.
- API keys are only accepted via the `Authorization: Bearer` header — never via the browser's
  session cookie. This is enforced by the Hub, not just a usage convention: presenting one via a
  cookie is rejected with 401, since it would otherwise let a key bypass 2FA and the single-session
  restriction the way a real login can't.

## Appendix A: API Reference

A summary of every endpoint this feature adds. For the full, always-current request/response
schemas, see the [Netwrix Change Tracker Hub API Reference](/docs/changetracker/api/reference/),
generated from the Hub's OpenAPI spec.

### Self-service

| Endpoint | Description | Input | Output |
|---|---|---|---|
| `POST /apikeys/create` | Creates a new API key for the calling user. | `Label` (string, body). On-prem only, authenticated with `Authorization: Basic` rather than a session or existing key. | `Key`, `KeyId`, `Label`, `CreatedDate`, `ExpiryDate` |
| `GET /apikeys` | Lists the calling user's own API keys, newest first. | `Skip`, `Take`, `ActiveOnly` (query, all optional) | `Results[]` (`KeyId`, `UserId`, `Label`, `CreatedDate`, `ExpiryDate`, `CancelledDate`, `LastUsedDate`, `UsageCount`), `TotalCount` |
| `DELETE /apikeys/{KeyId}` | Revokes one of the calling user's own keys immediately. | `KeyId` (path) | *(204 No Content)* |

### Admin

Requires the `UserManage` permission.

| Endpoint | Description | Input | Output |
|---|---|---|---|
| `GET /admin/apikeys`<br/>`GET /admin/apikeys/{UserId}` | Lists API keys for one user, or across every user if `UserId` is omitted. | `UserId` (path, optional), `Skip`, `Take`, `ActiveOnly` (query, all optional) | Same shape as `GET /apikeys` |
| `DELETE /admin/apikeys/{UserId}/{KeyId}` | Revokes a specific user's key. | `UserId`, `KeyId` (path) | *(204 No Content)* |
| `DELETE /admin/apikeys/{UserId}` | Revokes every active key for a user in one call. Already-revoked/expired keys are left untouched. | `UserId` (path) | `RevokedCount` |
| `GET /admin/apikeys/usage`<br/>`GET /admin/apikeys/{UserId}/usage`<br/>`GET /admin/apikeys/{UserId}/{KeyId}/usage` | Lists usage audit records, scoped to one key, one user's keys, or every key in the system depending on which path is used. | `UserId`, `KeyId` (path, both optional — `KeyId` requires `UserId`), `Skip`, `Take` (query, both optional) | `Results[]` (`KeyId`, `UserId`, `Route`, `IpAddress`, `UserAgent`, `TimestampUtc`), `TotalCount` |

## Appendix B: Client library gotchas — PowerShell vs. Python

If you're automating against the Hub with the `nct_api_client` Python package, use
`NCTClient.login_apikey()` — it already mints and uses an API key over HTTP Basic auth
against `/apikeys/create` instead of starting a session, precisely to avoid the
single-session-invalidation gotcha described in this article:

```python
client = NCTClient(base_url="https://localhost:5001", username="admin")
client.login_apikey()          # safe: never creates a session
```

Avoid `NCTClient.login()` for automation — it posts to `/auth/credentials` and creates a
real Hub session, which invalidates any other active session for that user the same as a
browser login does:

```python
client = NCTClient(base_url="https://localhost:5001", username="admin")
client.login()                 # avoid for automation: signs out other active sessions
```

The older PowerShell tools don't have an API-key option yet, so the equivalent guidance there
is different: prefer minting a key directly over HTTP Basic auth, using the same approach as
`demo-api-keys.ps1`, instead of calling `New-NctSession` or `GetAdminUserSession`. See
[Appendix C](#appendix-c-older-powershell-helpers-and-the-single-session-gotcha) if you're
using either of those tools.

## Appendix C: Older PowerShell helpers and the single-session gotcha

This appendix only applies if your automation already calls `New-NctSession` (from the
`NctApiClientLibrary` module) or `GetAdminUserSession` (from `ApiKeysDemo/gen7-utilities.ps1`).
If you're not using either of those, you can skip it.

Two older PowerShell tools predate API keys and still authenticate the same way a browser
login does:

| Tool | Function | What it does |
|---|---|---|
| `NctApiClientLibrary` module | `New-NctSession` | Prompts for (or loads persisted) credentials and posts them to `/auth/credentials` to start a session. |
| `ApiKeysDemo/gen7-utilities.ps1` | `GetAdminUserSession` | Posts a configured admin username and password to `/auth/credentials` to start a session. |

Despite its folder name, `GetAdminUserSession` in `ApiKeysDemo/gen7-utilities.ps1`
authenticates through the same credentials-login endpoint as `New-NctSession` and a browser
sign-in. Neither tool supports authenticating with an API key.

Because both tools log in with a username and password, they trigger the Hub's normal
single-session enforcement — the same restriction API keys are exempt from. Running either
one signs out any other active session for that account, including a browser tab someone else
has open. A scheduled job that calls `New-NctSession` every hour, or an admin script built on
`GetAdminUserSession`, can silently kick a user out of a live UI session with no warning to
either party.

For example, calling `New-NctSession` from the `NctApiClientLibrary` module authenticates
with a username and password, the same as a browser login:

```powershell
Import-Module NctApiClientLibrary

# Prompts for a password (or loads a persisted credential) and posts it to
# /auth/credentials — this signs out any other active session for "admin".
$mySession = New-NctSession -url "https://localhost/api" -user "admin"
```

`GetAdminUserSession` in `ApiKeysDemo/gen7-utilities.ps1` does the same thing directly,
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

`ApiKeysDemo/demo-api-keys.ps1` shows the safe alternative: it authenticates only by minting
an API key over HTTP Basic auth against `POST /apikeys/create` and never calls
`POST /auth/credentials`, so it's safe to run alongside a live login session without signing
it out. Minting the key:

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

If you're automating against the Hub API today, mint an API key this way (or from the
**My API Keys** page) instead of adding a new call to `New-NctSession` or
`GetAdminUserSession`.
