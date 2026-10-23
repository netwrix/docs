---
title: "Audit log event reference"
description: "Look up the audit events that Privilege Secure for Discovery writes for sign-ins, tokens, users, systems, administrators, access sessions, and credentials."
sidebar_position: 30
---

Netwrix Privilege Secure for Discovery writes an audit event for each security-relevant action. Use this reference to build SIEM searches and alerts for authentication, access changes, and Just-In-Time Access (JITA) activity. For the fields that every API message includes and for the log levels, see [Log format reference](./logs.md).

All events in this reference come from the API service. In each table, the **Message** column shows the text of the `message` field exactly. Angle brackets mark a value that changes. Examples omit the common fields (`name`, `hostname`, `pid`, `level`, `time`, `req_id`, `access`, `client`, and `req`), and they use example names, domains, and identifiers. Timestamps are illustrative.

## Request events

Every request writes a request-finish event with `"msg": "request finish"`. It records the response status code and, for a sign-in, the authentication result. It's the only event that a request writes when nothing else happens.

| Field | Description |
| --- | --- |
| `res.statusCode` | The HTTP status code. A 400-range code indicates a rejected request, and a 500-range code indicates an application error. |
| `res.body` | The response body. Present only when the status code isn't 200, 204, or 301. |
| `duration` | The request time in milliseconds. |

The following example shows a rejected request for a resource the user can't access.

```json
{
  "msg": "request finish",
  "res": {
    "body": "User does not have access to this resource.",
    "statusCode": 403
  },
  "duration": 3.27,
  "targetSystem": {
    "_id": "<system-id>",
    "cn": "WS-001",
    "distinguishedName": "CN=WS-001,CN=Computers,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO"
  }
}
```

## Authentication events

A sign-in request writes one or more `authInfo` steps. Each step has a `type` and, for most types, a `success` Boolean value.

| `authInfo[].type` | Meaning |
| --- | --- |
| `username` | The user name and domain that the sign-in request submitted. |
| `ldap` | The directory password check. `success` is `true` or `false`, and `user` identifies the account. |
| `superadmin` | A sign-in with the built-in local administrator account. |
| `saml:authenticate`, `saml:templateMatch`, `saml:directMatch` | The steps of a single sign-on (SSO) sign-in through Security Assertion Markup Language (SAML). |
| `radius` | The second-factor check with Remote Authentication Dial-In User Service (RADIUS). |
| `refreshToken:isRegistered`, `refreshToken:isUserAllowed`, `refreshToken:isUserProvisioned` | The checks that an API key passes when it requests an access token. |

| Message | When it's written |
| --- | --- |
| `Successful authentication by: <account>` | A sign-in succeeds. |
| `Password failed for: <account>` | A directory sign-in fails. The response is `401` with the body `Sign In Failed`. A second message follows with the reason from the directory. |
| `Password failed for secureone` | A sign-in with the local administrator account fails. The response is `400`. |
| `User Not Found` | The user name isn't a known user. The response is `401` with `Sign In Failed.`. |
| `SAML STRATEGY (IdP-Initiated)`, `SAML STRATEGY (SP-Initiated)`, `SAML AUTH` | The steps of an SSO sign-in. |

The following example shows a failed directory sign-in.

```json
{
  "authInfo": [
    {
      "domain": "CONTOSO",
      "type": "username",
      "username": "asmith"
    },
    {
      "success": false,
      "type": "ldap"
    }
  ],
  "message": "Password failed for: asmith"
}
```

The following example shows a successful sign-in.

```json
{
  "authInfo": [
    {
      "domain": "CONTOSO",
      "type": "username",
      "username": "asmith"
    },
    {
      "success": true,
      "type": "ldap",
      "user": {
        "_id": "<user-id>",
        "domain_netbios": "CONTOSO",
        "objectSid": "S-1-5-21-1111111111-2222222222-3333333333-1001",
        "sAMAccountName": "asmith"
      }
    }
  ],
  "message": "Successful authentication by: asmith"
}
```

## Token events

The API service issues a JSON Web Token (JWT) after a successful sign-in, and it validates the token on every later request. Each token event has `"type": "token"`, an `action`, the `tokenType`, and the decoded token in `authData`.

| Message | `action` | When it's written |
| --- | --- | --- |
| `token create` | `create` | The service issues a token after a sign-in or an API key request. |
| `token validate` | `validate` | A request presents a token. This event is the most frequent in the logs. |
| `token update` | `update` | The service renews the issue time of a token. |

The `authData` field includes the following values:

- `access.role`: the role of the token holder, `user`, `admin`, or `superadmin` for the local administrator account.
- `sAMAccountName`, `distinguishedName`, `objectSid`, and `domain_netbios`: the identity of the token holder.
- `jti`: the unique token ID.
- `issuedAt` and `expires`: the UTC timestamps of issue and expiry.
- `iat` and `exp`: the same times in UNIX epoch seconds.

```json
{
  "action": "create",
  "authData": {
    "access": {
      "date_added": "2026-01-01T00:00:00.000Z",
      "role": "admin"
    },
    "distinguishedName": "CN=Alice Smith,CN=Users,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO",
    "exp": 1767254400,
    "expires": "2026-01-01T08:00:00.000Z",
    "iat": 1767225600,
    "id": "<user-id>",
    "issuedAt": "2026-01-01T00:00:00.000Z",
    "jti": "<token-id>",
    "objectSid": "S-1-5-21-1111111111-2222222222-3333333333-1001",
    "sAMAccountName": "asmith",
    "type": "access"
  },
  "message": "token create",
  "tokenType": "access",
  "type": "token"
}
```

API key events carry `"type": "api-key"`, the `appId`, and the `user` that made the change.

| Message | `action` |
| --- | --- |
| `api-key created` | `create` |
| `revoking api key` | `revoke` |
| `api key revoked` | `revoke` |

## User management events

When an administrator changes who can sign in, the product writes a message with the following fields:

- `type`: `access`, `twoFactor`, or `privilege`.
- `action`: `add`, `remove`, `reset`, `setAdmin`, or `setUser`. The values `add` and `remove` apply to `access`, `reset` applies to `twoFactor`, and `setAdmin` and `setUser` apply to `privilege`.
- `modified`: the distinguished name (DN) of the user or group that the action targets.
- `user`: the DN of the user who made the change.

The `message` field has the form `<user DN> is modifying <modified DN>: <type> - <action>`.

```json
{
  "action": "add",
  "message": "CN=Alice Smith,CN=Users,DC=contoso,DC=com is modifying CN=Bob Jones,CN=Users,DC=contoso,DC=com: access - add",
  "modified": "CN=Bob Jones,CN=Users,DC=contoso,DC=com",
  "type": "access",
  "user": "CN=Alice Smith,CN=Users,DC=contoso,DC=com"
}
```

A change to a user's profile writes `Updated user information for <DN> (id: <id>)`.

## System management events

| Message | When it's written | Extra fields |
| --- | --- | --- |
| `Updated policy for system` | Someone changes the scan or Protect policy of a system. | `policy`, `previousPolicy`, `system`, `user`, `targetSystem` |
| `Updated directory bridging config for system` | Someone changes the directory bridging of a Linux system. | `directoryBridgingConfig`, `previousDirectoryBridgingConfig`, `systemDomain`, `previousSystemDomain` |
| `Updated EDR Integration config for system` | Someone changes the endpoint detection and response (EDR) integration of a system. | `system`, `user`, `targetSystem` |
| `System lookup` | Someone opens a system. | `targetSystem` |
| `Computer register request for <system>` | Someone registers a system. | `data` (the request parameters, without the password) |
| `Computer unregister request for <system>` | Someone unregisters a system. | `data` |

A policy change includes the following fields:

- `policy.scan`: a Boolean value that indicates whether the product scans the system.
- `policy.secure`: a Boolean value that indicates whether the system is in Protect mode.
- `policy.strict_secure`: for a system in Protect mode, `true` if the product removes newly discovered administrators from the system, and `false` if it adds them to the inventory.
- `previousPolicy`: the policy before the change.
- `system`: the name of the system, in the form `<name>.<domain FQDN>`.
- `user`: the user who made the change (`distinguishedName`, `sid`, and `id`).

```json
{
  "message": "Updated policy for system",
  "policy": {
    "scan": true,
    "secure": true,
    "strict_secure": false
  },
  "previousPolicy": {
    "scan": true,
    "secure": false,
    "strict_secure": false
  },
  "system": "ws-001.contoso.com",
  "targetSystem": {
    "_id": "<system-id>",
    "cn": "WS-001",
    "distinguishedName": "CN=WS-001,CN=Computers,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO"
  },
  "user": {
    "distinguishedName": "CN=Alice Smith,CN=Users,DC=contoso,DC=com",
    "id": "<user-id>",
    "sid": "S-1-5-21-1111111111-2222222222-3333333333-1001"
  }
}
```

## Administrator inventory events

These events record changes to the list of local administrators that the product tracks for a system.

| Message | When it's written | Extra fields |
| --- | --- | --- |
| `Added new administrator` | Someone adds a user or group to the inventory of a system. | `system`, `createdBy`, `user` |
| `Removed administrator` | Someone removes a user or group from the inventory. | `system`, `createdBy`, `user` |
| `Modified administrator` | Someone sets or clears the persistent state of an administrator. | `system`, `createdBy`, `persistent`, `user` |
| `Admin list lookup` | Someone views the administrators of a system. | `system`, `targetSystem` |

In these events, `system` holds the system ID, `createdBy` holds the `sAMAccountName` of the user who made the change, and `user` identifies the affected account (`cn`, `distinguishedName`, `objectSid`, `domain_netbios`, `domain_fqdn`, and `id`).

```json
{
  "createdBy": "asmith",
  "message": "Modified administrator",
  "persistent": true,
  "system": "<system-id>",
  "targetSystem": {
    "_id": "<system-id>",
    "cn": "WS-001",
    "distinguishedName": "CN=WS-001,CN=Computers,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO"
  },
  "user": {
    "cn": "Helpdesk Admins",
    "distinguishedName": "CN=Helpdesk Admins,CN=Users,DC=contoso,DC=com",
    "domain_fqdn": "contoso.com",
    "domain_netbios": "CONTOSO",
    "id": "<account-id>",
    "objectSid": "S-1-5-21-1111111111-2222222222-3333333333-1002"
  }
}
```

For Linux systems, the product also writes `"type": "system_sudoers"` events when it changes the sudoers configuration.

| Message | Level |
| --- | --- |
| `Added sudo privileges for new inventory admin` | Info |
| `Removed sudo privileges for removed inventory admin` | Info |
| `Unable to add sudo privileges for added inventory admin` | Error |
| `Unable to remove sudo privileges for removed inventory admin` | Error |
| `Created staged sudoers` | Info |
| `Removed staged sudoers` | Info |
| `Error updating inventory to system sudoers` | Error |
| `Assigned sudoers to system` | Info |

## JITA session events

| Message | When it's written |
| --- | --- |
| `Access request granted.` | A user requests a session for themselves, and the product grants it. |
| `User <DOMAIN>\<requester> requested access for user <DOMAIN>\<target>.` | A user requests a session for another user. When access comes through a group, the message ends with `, access via group <DOMAIN>\<group>.` |
| `Manual expiration of session requested.` | A user ends their own session. |
| `User <DOMAIN>\<requester> requested expiration of session for user <DOMAIN>\<target>.` | A user ends another user's session. |
| `Extended session by <n> minutes.` | A user extends their own session. |
| `User <DOMAIN>\<requester> extended session time for user <DOMAIN>\<target> by <n> minutes.` | A user extends another user's session. |
| `Queue ID Lookup` | Someone looks up a queued request. |
| `Queue Job <id> dismissed by <user> (<sid>)` | Someone dismisses a queued job. This event is a warning. |

These events share the following fields:

- `request.id`: the identifier of the request.
- `request.request.start`: the UTC time that the session starts. The product sets it 30 seconds before the grant time.
- `request.request.expires`: the UTC time that the session expires. For a manual expiration, this value is the current time.
- `request.request.user` and `request.request.userInfo`: the user who receives access.
- `request.requested_by_info`: the user who made the request. This value is normally the same as `request.request.userInfo`.
- `request.system`: the system where the session applies (`id`, `cn`, `distinguishedName`, and `dNSHostName`).
- `system`: the name of the system, for a grant.

```json
{
  "message": "Access request granted.",
  "request": {
    "id": "<request-id>",
    "request": {
      "expires": "2026-01-01T04:00:00.000Z",
      "start": "2025-12-31T23:59:30.000Z",
      "type": "access",
      "user": "<user-id>",
      "userInfo": {
        "distinguishedName": "CN=Alice Smith,CN=Users,DC=contoso,DC=com"
      }
    },
    "requested_by": "<user-id>",
    "requested_by_info": {
      "distinguishedName": "CN=Alice Smith,CN=Users,DC=contoso,DC=com",
      "domain_fqdn": "contoso.com",
      "domain_netbios": "CONTOSO",
      "sAMAccountName": "asmith"
    },
    "system": {
      "cn": "WS-001",
      "dNSHostName": "ws-001.contoso.com",
      "distinguishedName": "CN=WS-001,CN=Computers,DC=contoso,DC=com",
      "id": "<system-id>"
    }
  },
  "system": "ws-001.contoso.com",
  "targetSystem": {
    "_id": "<system-id>",
    "cn": "WS-001",
    "distinguishedName": "CN=WS-001,CN=Computers,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO"
  }
}
```

A denied request produces a request-finish event with a 400-range status code and the reason in `res.body`. For the 403 example, see [Request events](#request-events).

The Expire service doesn't write the grant or the end of a session. It checks the queue and notifies the workers. For its messages, see [Log format reference](./logs.md#python-service-log-fields).

## Credential events

The product records each use of a managed local account password in an audit event with `"type": "credentials"`. The event includes a `category`, the user who acted (`user.username`, `user.user_sid`, and `user.user_domain`), and the target system (`target.system_name` and `target.computer_id`), and, for a password event, the account (`target.admin`).

| `category` | Message | When it's written |
| --- | --- | --- |
| `password-history` | `Accessed most recent local account password for <DOMAIN\account> (<sid>)` | A user views the current managed password. The text says `previous` for an older password. |
| `password-history` | `Password rotation requested for <DOMAIN\account> (<sid>)` | A user forces a password rotation. |
| `endpoint-enablement` | `<Enabled or Disabled> Manage Passwords for system <DOMAIN>\<system>` | A user turns Offline Access Management (OAM) password management on or off for a system. |
| `capability-enablement` | `<Enabled or Disabled> the Local Account Password Management capability on <URL> which supersedes individual managed system configurations.` | A user turns the capability on or off for the whole deployment. |

## Access configuration rule events

| Message | When it's written |
| --- | --- |
| `User <id> create new rule <name>: <result>` | Someone creates a rule. |
| `User <id> updated rule <name>: <result>` | Someone changes a rule or its patterns. |
| `User <id> deleted rule <name>: <result>` | Someone deletes a rule. |
| `User <id> associated rule <name> to <DOMAIN>\<system>.` | Someone applies a rule to a system. |
| `User <id> unassociated rule <name> from <DOMAIN>\<system>.` | Someone removes a rule from a system. |

In these messages, `<id>` is the internal ID of the user, not the account name.
