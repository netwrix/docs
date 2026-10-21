---
title: "Splunk and SIEM queries"
description: "Use example Splunk searches and command-line filters to find sign-in, policy, and Just-In-Time Access events from Privilege Secure for Discovery."
sidebar_position: 50
---

This page lists example searches for Splunk and command-line filters for other Security Information and Event Management (SIEM) solutions. Use them to find events that Netwrix Privilege Secure for Discovery forwards. To forward logs, see [Forward logs to a syslog server or SIEM](./forward-logs.md). For the event structure, see [Audit log event reference](./additional-logs.md).

The Splunk examples assume that Splunk parses each event as JSON, so every field is searchable. To set that up, see [Parse events with the Splunk JSON source type](./splunk-json-source-type.md). The examples use `<index>` for the Splunk index that receives the logs. Replace it with the name of your index.

## Choose the right service log

Two services write most of the events in this page:

- The Application Programming Interface (API) service writes sign-in, token, policy, and Just-In-Time Access (JITA) request events. Its events carry `name=api`.
- The worker service grants and removes administrator privileges on systems. Its events carry `name=remediant` and `service=svc-worker`.

Searches that start with `name=api` return nothing for worker events, and the reverse is also true.

## Splunk queries

### Find events

Find API requests that contain a search term, excluding the sign-in endpoint. Replace `<term>` with the text to find:

```text
index="<index>" name=api "<term>" | spath "req.url" | search "req.url"!="/api/v1/login*"
```

### Count API status codes

Every API request ends with an event that has `msg` set to `request finish` and the HTTP status code in `res.statusCode`. For the meaning of each code, see [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) in the MDN Web Docs.

```text
index="<index>" name=api msg="request finish"
| stats count BY res.statusCode
| rename res.statusCode AS Status_Code
```

To watch status codes live on the server, run the following command:

```bash
s1 logs | grep -i "statusCode"
```

### Find authentication events

The `authInfo` field is a list. Splunk writes it as `authInfo{}` in searches. Each entry has a `type` that names the authentication method:

| `authInfo{}.type` | Method |
| --- | --- |
| `superadmin` | The built-in `secureone` account |
| `ldap` | A directory user with a password |
| `radius` | Remote Authentication Dial-In User Service (RADIUS) |
| `saml:authenticate`, `saml:directMatch`, `saml:templateMatch` | Security Assertion Markup Language (SAML) single sign-on (SSO) |
| `refreshToken:isRegistered`, `refreshToken:isUserAllowed`, `refreshToken:isUserProvisioned` | An API key |
| `username` | The user name lookup that precedes a directory sign-in |

Find successful sign-ins:

```text
index="<index>" name=api message="Successful authentication by:*"
```

Find failed sign-ins. A wrong password for the `secureone` account or a directory user sets `authInfo{}.success` to `false`:

```text
index="<index>" name=api "authInfo{}.success"=false
```

The failed sign-in search doesn't find an unknown user name, because that event has no `success` field. To find every rejected sign-in, search for the status code of the sign-in request:

```text
index="<index>" name=api msg="request finish" req.url="/api/v1/login*" res.statusCode>=400
```

Find sign-ins by authentication type:

```text
index="<index>" name=api "authInfo{}.type"=saml*
```

```text
index="<index>" name=api "authInfo{}.type"=refreshToken*
```

The first search finds SSO sign-ins. The second finds API key authentication, where an application exchanges its key for an access token.

### Find token events

After a successful sign-in, the product issues a JSON Web Token (JWT) that authenticates later requests. The product logs three token events: `token create`, `token validate`, and `token update`. The `token validate` event appears on every authenticated request, so exclude it when you only want new tokens.

```text
index="<index>" name=api message="token create"
```

Find tokens by the role of the user. The role is `superadmin` for the built-in account, or `admin`, `operator`, or `user`.

```text
index="<index>" name=api message="token create" "authData.access.role"=admin
```

The token events carry these time fields:

| Field | Description |
| --- | --- |
| `authData.issuedAt` | Time the token was issued, in Coordinated Universal Time (UTC) |
| `authData.iat` | UNIX epoch time when the token was issued |
| `authData.expires` | Time the token expires, in UTC |
| `authData.exp` | UNIX epoch time when the token expires |

### Find system policy changes

When an administrator changes the policy of a system, the API logs the message `Updated policy for system`. Use the following base search for all policy changes:

```text
index="<index>" name=api message="Updated policy for system"
```

The following fields describe the change.

| Field | Description |
| --- | --- |
| `policy.scan` | The scan setting after the change. `true` means Scan Mode is **Enabled**. |
| `policy.secure` | The protect setting after the change. `true` means Protect Mode is **Enabled**. |
| `policy.strict_secure` | `true` means **New Accounts: Deny**. `false` with `policy.secure` set to `true` means **New Accounts: JITA**. |
| `previousPolicy.scan`, `previousPolicy.secure`, `previousPolicy.strict_secure` | The same three settings before the change. |
| `targetSystem.cn` | The name of the system. |
| `system` | The fully qualified domain name of the system. |
| `access.user.sAMAccountName` | The account that made the change. |

The `policy` field repeats all three settings, even when the change affects only one of them. To find only the changes that turned on Protect Mode, compare the two fields:

```text
index="<index>" name=api message="Updated policy for system" policy.secure=true previousPolicy.secure=false
| table _time, targetSystem.cn, access.user.sAMAccountName
```

### Find administrator inventory changes

The API logs a message when an administrator adds an account to the inventory of a system, changes it, or removes it. The three messages are `Added new administrator`, `Modified administrator`, and `Removed administrator`.

```text
index="<index>" name=api message="Removed administrator"
| table _time, createdBy, targetSystem.cn, user.distinguishedName
```

The `createdBy` field holds the account name of the person who made the change. The `user` field describes the account that changed, and `targetSystem` describes the system.

### Find offline credential retrievals

When a user retrieves a managed local account password, the API logs an event with `category` set to `password-history`. The `message` field says whether the user retrieved the most recent password or a previous one.

```text
index="<index>" name=api category="password-history"
| table _time, user.username, target.admin.admin_account_name, target.system_name, message
```

To count retrievals per day, replace the last line with `| timechart span=1d count`.

### Find JITA events

A JITA session has two parts. The API service records the request, and the worker service adds the user to the local administrators of the system and removes the user again when the session ends.

Find JITA requests. A request that a user makes for themselves logs `Access request granted.` A request on behalf of another user logs `User <domain>\<user> requested access for user <domain>\<user>.`:

```text
index="<index>" name=api (message="Access request granted." OR message="User * requested access for user *")
| table _time, system, request.requested_by_info.sAMAccountName, request.request.userInfo.distinguishedName, request.request.expires
```

Find session expirations and extensions that users request:

```text
index="<index>" name=api (message="Manual expiration of session requested*" OR message="User * requested expiration of session*")
```

```text
index="<index>" name=api (message="Extended session by*" OR message="User * extended session time for user*")
```

Find the moments when the worker adds and removes administrator privileges. The message starts with the host name of the system:

```text
index="<index>" name=remediant service=svc-worker ("Adding admin privileges" OR "Removing admin privileges")
```

### Measure JITA grant time {#measure-jit-access-time}

Measure how long the product takes to grant a session. Use this search to find slow privilege elevation. The API request event and the worker event share the request identifier: `request.id` in the API event and `queue._id` in the worker event.

```text
index="<index>" ((name=api (message="Access request granted." OR message="User * requested access for user *")) OR (name=remediant service=svc-worker "Adding admin privileges"))
| eval request_id=coalesce('request.id', 'queue._id')
| stats earliest(_time) AS requested, latest(_time) AS granted, count BY request_id
| where count>=2
| eval seconds_to_grant=granted-requested
| stats avg(seconds_to_grant) AS average_seconds, max(seconds_to_grant) AS slowest_seconds
```

To list each request instead of the average, remove the last line.

## Non-Splunk queries

For other SIEM solutions, search for the key string in each section. To view the matching events on the server, run the command that follows each key string. The `s1 logs` command reads the output of the `fluentd` service, and `--no-follow` ends the command after the last line. The `-A 30` option shows the 30 lines after each match, so you see the whole event.

### Successful sign-in

Key string:

```text
Successful authentication by:
```

```bash
s1 logs --since 5m --no-follow | grep -A 30 "Successful authentication by"
```

The event looks like the following example:

```json
{
  "message": "Successful authentication by: jpatel",
  "req": { "method": "POST", "url": "/api/v1/login/" },
  "authInfo": [{ "username": "jpatel", "success": true, "type": "ldap" }]
}
```

### Failed sign-in with an unknown user name

The sign-in page shows the error `Sign In Failed.` The API returns status 401.

Key string:

```text
User Not Found
```

```bash
s1 logs --since 5m --no-follow | grep -A 30 "User Not Found"
```

The event looks like the following example:

```json
{
  "message": "User Not Found",
  "client": { "requestIP": "::ffff:192.0.2.10" },
  "authInfo": [{ "username": "unknown_user", "domain": "CORP", "type": "username" }],
  "req": { "method": "POST", "url": "/api/v1/login" }
}
```

### Failed sign-in with a wrong password

For a directory user, the sign-in page shows `Sign In Failed`, the API returns status 401, and the log contains the message `Password failed for: <user>`. For the built-in `secureone` account, the sign-in page shows `Password failed for secureone`, and the API returns status 400.

Key string:

```text
Password failed for
```

```bash
s1 logs --since 5m --no-follow | grep -A 30 "Password failed for"
```

For the `secureone` account, the failure appears in the end-of-request event, as in the following example:

```json
{
  "msg": "request finish",
  "res": { "statusCode": 400, "body": "{\"message\":\"Password failed for secureone\"}" },
  "req": { "method": "POST", "url": "/api/v1/login" },
  "authInfo": [{ "username": "secureone", "success": false, "type": "superadmin" }]
}
```

### Failed sign-in with an invalid token

Two different errors contain the word token:

- `Invalid token.` is the sign-in page error for a wrong two-factor code. The API returns status 401 on the sign-in request.
- `invalid token` is the API response to any request that carries an expired or malformed JWT. The API returns status 401.

Key string:

```text
invalid token
```

```bash
s1 logs --since 5m --no-follow | grep -i -A 30 "invalid token"
```

The event for an expired or malformed JWT looks like the following example:

```json
{
  "msg": "request finish",
  "res": { "statusCode": 401, "body": "{\"message\":\"invalid token\"}" },
  "req": { "method": "GET", "url": "/api/v1/computers" }
}
```
