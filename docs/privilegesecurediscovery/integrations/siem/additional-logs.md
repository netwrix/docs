---
title: "Audit log event reference"
description: "Review example log messages for sign-in, token, user management, system management, and JIT access events in Privilege Secure for Discovery."
sidebar_position: 30
---

This reference shows the structure of common API log events. Use it to build SIEM searches and alerts for authentication, access changes, and Just-In-Time Access (JITA) activity. For the log levels and the fields that every API message includes, see [Log format reference](./logs.md).

The examples omit the common API fields, and they use example names, domains, and identifiers. Your logs contain your own values. Timestamps in the examples are illustrative.

## Common event messages

### Token validation

At the start of each request, the request-processing middleware validates the JSON Web Token (JWT) and emits a message like the following.

```json
{
  "action": "validate",
  "authData": {
    "access": {
      "date_added": "2026-01-01T00:00:00.000Z",
      "ga_enabled": false,
      "role": "admin"
    },
    "distinguishedName": "CN=Alice Smith,CN=Users,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO",
    "exp": 1767243600,
    "expires": "2026-01-01T05:00:00.000Z",
    "iat": 1767225600,
    "id": "<user-id>",
    "issuedAt": "2026-01-01T00:00:00.000Z",
    "jti": "<token-id>",
    "objectSid": "S-1-5-21-1111111111-2222222222-3333333333-1001",
    "sAMAccountName": "asmith",
    "type": "access"
  },
  "message": "token validate",
  "req_id": "<request-id>",
  "tokenType": "access",
  "type": "token"
}
```

### End of request

Each request emits an end-of-request event, even if no other log message is emitted while the request is processed. The event records the returned HTTP status code and the authentication status. Identify it by the `"msg": "request finish"` field and value.

API responses with an HTTP status code in the 400 or 500 range are often accompanied by an error message and dialog in the interface.

The following example shows a failed sign-in request.

```json
{
  "client": {
    "forwardedForIPs": [],
    "requestIP": "::ffff:192.0.2.10",
    "userAgent": {
      "browser": "Chrome",
      "os": "Windows",
      "platform": "Microsoft Windows",
      "version": "126.0.0.0"
    }
  },
  "msg": "request finish",
  "req": {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-US,en;q=0.9",
      "authorization": null,
      "connection": "keep-alive",
      "content-length": "59",
      "content-type": "application/json",
      "host": "psd.example.com",
      "origin": "https://psd.example.com",
      "referer": "https://psd.example.com/",
      "x-access-token": null
    },
    "method": "POST",
    "params": {},
    "query": {
      "limit": 100,
      "page": 1
    },
    "remoteAddress": "::ffff:192.0.2.10",
    "remotePort": 46362,
    "url": "/api/v1/login/"
  },
  "req_id": "<request-id>",
  "res": {
    "body": "{\"message\":\"Invalid username/password\"}",
    "header": {
      "content-length": "39",
      "content-type": "application/json; charset=utf-8",
      "strict-transport-security": "max-age=15552000; includeSubDomains",
      "x-content-type-options": "nosniff",
      "x-frame-options": "SAMEORIGIN",
      "x-request-id": "<request-id>"
    },
    "statusCode": 401
  }
}
```

## Authentication

### Sign in

Sign-in messages include the following fields:

- `authInfo[].success`: a Boolean value. `false` is an unsuccessful authentication, and `true` is a successful authentication.
- `authInfo[].type`: the type of authentication, `ldap` or `sso`.

The following example shows a failed authentication.

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

The following example shows a successful authentication.

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
        "objectSid": "<binary-sid>",
        "sAMAccountName": "asmith"
      }
    }
  ],
  "message": "Successful authentication by: asmith"
}
```

### Token issuance

After a successful sign-in, the product issues a JWT that authenticates later requests. The message includes the following fields:

- `authData.access.role`: the role of the user that receives the token, `user` or `admin`.
- `authData.issuedAt`: the UTC timestamp when the token was issued.
- `authData.iat`: the UNIX epoch time when the token was issued.
- `authData.expires`: the UTC timestamp when the token expires.
- `authData.exp`: the UNIX epoch time when the token expires.

```json
{
  "action": "create",
  "authData": {
    "access": {
      "date_added": "2026-01-01T00:00:00.000Z",
      "ga_enabled": false,
      "role": "admin"
    },
    "distinguishedName": "CN=Alice Smith,CN=Users,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO",
    "exp": 1767243600,
    "expires": "2026-01-01T05:00:00.000Z",
    "iat": 1767225600,
    "id": "<user-id>",
    "issuedAt": "2026-01-01T00:00:00.000Z",
    "jti": "<token-id>",
    "objectSid": "S-1-5-21-1111111111-2222222222-3333333333-1001",
    "sAMAccountName": "asmith",
    "type": "access"
  },
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
        "objectSid": "<binary-sid>",
        "sAMAccountName": "asmith"
      }
    }
  ],
  "message": "token create",
  "tokenType": "access",
  "type": "token"
}
```

## User management

### Add, remove, or promote a user or group

When an administrator changes who can sign in or who is an administrator, the product emits a message with the following fields:

- `action`: one of the following values:
  - `add`: a user or group was added.
  - `setAdmin`: a user or group was made an administrator.
  - `remove`: a user or group was removed.
- `modified`: the distinguished name (DN) of the user or group that is the target of the action.
- `user`: the DN of the user that started the action.

```json
{
  "action": "add",
  "message": "CN=Alice Smith,CN=Users,DC=contoso,DC=com is modifying CN=Bob Jones,CN=Users,DC=contoso,DC=com: access - add",
  "modified": "CN=Bob Jones,CN=Users,DC=contoso,DC=com",
  "type": "access",
  "user": "CN=Alice Smith,CN=Users,DC=contoso,DC=com"
}
```

## System management

### Change the system policy

A policy change message includes the following fields:

- `policy.scan`: a Boolean value that indicates whether the system is scanned.
- `policy.secure`: a Boolean value that indicates whether the system is in Protect mode.
- `policy.strict_secure`: for a system in Protect mode, `true` if the product excludes newly discovered administrators from the system inventory, and `false` if it adds them to the inventory.
- `system`: the host name of the system that the policy change affects.
- `targetSystem`: the properties of the system that the policy change affects.
- `user`: the properties of the user that made the change.

```json
{
  "message": "Updated policy for system",
  "policy": {
    "scan": true,
    "secure": true,
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

### Set the persistent state of a user or group

The message includes `targetSystem`, the properties of the system inventory in which the administrator became persistent or stopped being persistent.

```json
{
  "message": "Modified administrator",
  "persistent": "true",
  "system": "<system-id>",
  "targetSystem": {
    "_id": "<system-id>",
    "cn": "WS-001",
    "distinguishedName": "CN=WS-001,CN=Computers,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO"
  },
  "user": "S-1-5-21-1111111111-2222222222-3333333333-1002"
}
```

### Add or remove a user or group in the system inventory

The message includes the following fields:

- `targetSystem`: the properties of the system inventory that the administrator was added to or removed from.
- `user`: the properties of the administrator user or group that was added or removed.

```json
{
  "message": "Removed administrator",
  "user": {
    "_id": "<user-id>",
    "cn": "Helpdesk Admins",
    "distinguishedName": "CN=Helpdesk Admins,CN=Users,DC=contoso,DC=com",
    "domain_fqdn": "contoso.com"
  },
  "system": "<system-id>",
  "targetSystem": {
    "_id": "<system-id>",
    "cn": "WS-001",
    "distinguishedName": "CN=WS-001,CN=Computers,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO",
    "policy": {
      "scan": false,
      "secure": false,
      "strict_secure": false
    }
  }
}
```

## JITA access

### Access granted

When a JITA session is granted, the product emits a message with the following fields:

- `request.request.start`: the UTC timestamp when the access was granted.
- `request.request.expires`: the UTC timestamp when the access session expires.
- `request.request.userInfo`: the properties of the user that receives access.
- `request.requested_by_info`: the properties of the user that requested the session. This value is normally the same as `request.request.userInfo`.
- `targetSystem`: the properties of the system where access was granted.

```json
{
  "message": "Access request granted",
  "request": {
    "comment": "",
    "id": "<request-id>",
    "request": {
      "activity": [],
      "created": "2026-01-01T00:00:07.762Z",
      "expires": "2026-01-01T04:00:07.762Z",
      "start": "2026-01-01T00:00:00.000Z",
      "status": "pending",
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
    "stale": false,
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

### Access denied

When a user is denied a JITA session, the product emits a message with the following fields:

- `res.body`: a message that describes the reason for the denial.
- `res.statusCode`: the HTTP status code. A 400-range code indicates an authorization error, and a 500-range code indicates an application error or exception.
- `targetSystem`: the properties of the system where the session was attempted.

```json
{
  "msg": "request finish",
  "res": {
    "body": "User does not have access to this resource.",
    "statusCode": 403
  },
  "targetSystem": {
    "_id": "<system-id>",
    "cn": "WS-001",
    "distinguishedName": "CN=WS-001,CN=Computers,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO"
  }
}
```

### Access expired

When a user ends a session manually or a session expires, the product emits a message with the following fields:

- `request.request.expires`: the UTC timestamp when the access session is set to expire. For a manual expiration, this value is the current time.
- `request.request.userInfo`: the properties of the user whose access expires.
- `request.requested_by_info`: the properties of the user that requested the expiration. This value is normally the same as `request.request.userInfo`.
- `targetSystem`: the properties of the system where the access session expires.

```json
{
  "message": "Expiring request",
  "request": {
    "comment": "",
    "id": "<request-id>",
    "processed": "2026-01-01T01:00:00.623Z",
    "request": {
      "created": "2026-01-01T01:00:00.187Z",
      "expires": "2026-01-01T01:00:07.620Z",
      "inProgress": false,
      "start": "2026-01-01T01:00:07.621Z",
      "status": "expiring",
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
    "stale": false,
    "system": {
      "cn": "WS-001",
      "dNSHostName": "ws-001.contoso.com",
      "distinguishedName": "CN=WS-001,CN=Computers,DC=contoso,DC=com",
      "id": "<system-id>"
    }
  },
  "targetSystem": {
    "_id": "<system-id>",
    "cn": "WS-001",
    "distinguishedName": "CN=WS-001,CN=Computers,DC=contoso,DC=com",
    "domain_netbios": "CONTOSO"
  }
}
```
