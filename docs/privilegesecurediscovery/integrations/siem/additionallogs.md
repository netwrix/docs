---
title: "Additional Logs"
description: "Additional Logs"
sidebar_position: 50
---

# Additional Logs

Additional Logs

# Additional Logs

## Log Levels

- Critical – Service is going down
- Eerror – a problem
- Warning – Something concerning, but may not actually be a problem

    - Example:  Most network-related issues are only a problem if they happen frequently

- Info – Normal events informational logs
- Debug – More information than is normally needed, usually only used when troubleshooting

## Common Event Fields

**NOTE:** The common fields are excluded from the examples illustrated below for the sake of
brevity.

Every log message emitted by the API will include the following fields:

- req id – Unique identifier for an incoming request. All API events that are generated as part of
  this request will have the same value.
- access.user – Properties about the authenticated user making the request
- client

    - forwardedForIPs – List of IPs that have acted as proxies for this request
    - requestIP – IP for the origin of the request
    - userAgent – User-agent information

- req

    - headers – HTTP request headers
    - method – HTTP method
    - url – Request URL
    - params – Params, if any from the body or the URL
    - query – Pagination information, if any
    - emoteAddress / remotePort – requestor IP information

- res

    - statusCode – HTTP response status code
    - header – HTTP response header
    - body – Response body

## Common event messages

### Token Validation

At the start of each request, the request processing middleware will validate the included JWT and
will emit a message like the following:

```
{
 "action":"validate",
  "authData":{
    "access":{
      "date_added":"2018-09-04T18:50:44.980Z",
      "ga_enabled":false,
      "role":"admin"
    },
    "distinguishedName":"CN=Ivan Tam,CN=Users,DC=rtest,DC=com",
    "domain_netbios":"RTEST",
    "exp":1567138410,
    "expires":"2019-08-30T04:13:30.000Z",
    "iat":1567109610,
    "id":"5b7f3046e9097a902057d51b",
    "issuedAt":"2019-08-29T20:13:30.000Z",
   "jti":"a865034c-b1d9-465f-ac56-f3c698a1b874",
    "objectSid":"S-1-5-21-1366766991-2637077591-3940904154-210120",
    "sAMAccountName":"ivan",
    "type":"access"
  },
  "message":"token validate",
  "req_id":"09224d70-ca9d-11e9-9f18-239ada945066",
  "tokenType":"access",
  "type":"token"
}

```

### End-of-request

At the end each request, an end-of-request event is always emitted. Even if no other log messages
are emitted during the processing of the request, this event will capture the returned HTTP status
code and authentication status.

API responses with an HTTP status code in the 400 or 500 range are often accompanied by an error
message and dialog in the UI.

It can be identified by the `"msg": "request finish"` field and value.

The following is a complete example:

```
{
"client":{
"forwardedForIPs":[],
    "requestIP":"::ffff:172.25.0.1",
    "userAgent":{
      "browser":"Chrome",
      "os":"macOS High Sierra",
      "platform":"Apple Mac",
      "version":"76.0.3809.100"
    }
  },
  "msg":"request finish",
  "req":{
    "headers":{
      "accept":"application/json, text/plain, */*",
      "accept-encoding":"gzip, deflate, br",
      "accept-language":"en-US,en;q=0.9",
      "authorization":null,
      "connection":"keep-alive",
      "content-length":"59",
      "content-type":"application/json",
      "cookie":"JSESSIONID.468b264d=node0bn5w93ovhv6u1qgn96r2rfgtd598633.node0; screenResolution=2560x1440",
      "dnt":"1",
     "host":"localhost:3000",
      "origin":"https://localhost:3000",
      "referer":"https://localhost:3000/",
     "sec-fetch-mode":"cors",
      "sec-fetch-site":"same-origin",
      "user-agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36",
      "x-access-token":null
    },
    "method":"POST",
    "params":{
   },
    "query":{
      "limit":100,
      "page":1
    },
    "remoteAddress":"::ffff:172.25.0.1",
    "remotePort":46362,
    "url":"/api/v1/login/"
  },
  "req_id":"e5e743e0-ca94-11e9-9f18-239ada945066",
  "res":{
    "body":"{\"message\":\"Invalid username/password\"}",
    "header":{
      "content-length":"39",
      "content-type":"application/json; charset=utf-8",
      "etag":"W/\"27-HlzKdT02c/CdCZmForhE8nWbiVU\"",
      "strict-transport-security":"max-age=15552000; includeSubDomains",
      "x-content-type-options":"nosniff",
      "x-dns-prefetch-control":"off",
      "x-download-options":"noopen",
      "x-frame-options":"SAMEORIGIN",
      "x-request-id":"e5e743e0-ca94-11e9-9f18-239ada945066",
      "x-xss-protection":"1; mode=block"
    },
    "statusCode":401
  }
}
```

## Authentication

### Login

- authInfo[].success — boolean;

    - false — unsuccessful authentication
    - true — successful authentication

- authInfo[].type — string; type of authentication; LDAP or SSO

_Failed authentication_

```
{
 "authInfo":[
{
 "domain":"RTEST",
"type":"username",
"username":"ivan"
},
{
 "success":false,
 "type":"ldap"
}
 ],
"message":"Password failed for: ivan"
}
```

_Successful authentication_

```
{
"authInfo":[
 {
 "domain":"RTEST",
"domain":"RTEST",
 "type":"username",
"username":"ivan"
},
{
"success":true,
 "type":"ldap",
"user":{
"objectSid":"\u0001\u0005\u0000\u0000\u0000\u0000\u0000\u0005\u0015\u0000\u0000\u0000\ufffd5wQW\ufffd.\ufffd\ufffdl\ufffd\ufffd\ufffd4\u0003\u0000",        "sAMAccountName":"ivan"
}
}
 ],
"message":"Successful authentication by: ivan"
}
```

### Token Issuance

- Upon successful login, a JWT token is issued and used to authenticate further requests.
- authData.access.role — string, “user” or “admin”, role of the user who’s being issued a token
- authData.issuedAt — UTC timestamp, when this token was issued
- authData.iat — UNIX epoch, when this token was issued
- authData.expires — UTC timestamp, when this token will expire
- authData.exp — UNIX epoch, when this token will expire

```
{
"action":"create",
 "authData":{
"access":{
 "date_added":"2018-09-04T18:50:44.980Z",
"ga_enabled":false,
"role":"admin"
 },
"distinguishedName":"CN=Ivan Tam,CN=Users,DC=rtest,DC=com",
"domain_netbios":"RTEST",
"exp":1567140330,
 "expires":"2019-08-30T04:45:30.000Z",
 "iat":1567111530,
 "id":"5b7f3046e9097a902057d51b",
 "issuedAt":"2019-08-29T20:45:30.000Z",
"jti":"338917d1-3465-42bf-88db-ab1db97ed628",
"objectSid":"S-1-5-21-1366766991-2637077591-3940904154-210120",
"sAMAccountName":"ivan",
"type":"access"
 },
"authInfo":[
{
"domain":"RTEST",
"type":"username",
"username":"ivan"
},
 {
"success":true,
 "type":"ldap",
"user":{
"objectSid":"\u0001\u0005\u0000\u0000\u0000\u0000\u0000\u0005\u0015\u0000\u0000\u0000\ufffd5wQW\ufffd.\ufffd\ufffdl\ufffd\ufffd\ufffd4\u0003\u0000",        "sAMAccountName":"ivan"
}
}
 ],
"message":"token create",
"tokenType":"access",
 "type":"token"
}

```

## User Management

Add/remove Users/Group or Make User/Group an Admin

When a Privilege Secure admin makes a change to who is able to log into Privilege Secure or who
should be treated as an admin of Privilege Secure, the following log message is emitted:

- action: string, which is one of the following values:

    - “add” — a user or group was added
    - “setAdmin” — a user or group was made an admin
    - "remove" — a user or group was removed

- modifed: DN, which user/group is the target of the action
- user: DN, user who initiated this action

```
{
"action":"add",
"message":"CN=Ivan Tam,CN=Users,DC=rtest,DC=com is modifying CN=Al Apone,CN=Users,DC=rtest,DC=com: access - add",
"modified":"CN=Al Apone,CN=Users,DC=rtest,DC=com",
 "type":"access",
 "user":"CN=Ivan Tam,CN=Users,DC=rtest,DC=com"
}

```

## System Management

Change system policy

- policy.scan — boolean, whether the system should be scanned
- policy.secure — boolean, whether the system is in protect-mode
- policy.strict_secure — boolean, if the system is in protect-mode, is true if Privilege
  Secureshould exclude any newly discovered admins from the system inventory, false if the admin
  should be added to the inventory
- system — string, hostname of the system affected by the policy change
- targetSystem — properties describing the system affected by the policy change
- user — properties describing the user who initiated the policy change

```
{
"message":"Updated policy for system",
 "policy":{
 "scan":true,
"secure":true,
 "strict_secure":false
 },
"system":"IVANTHRASHBOX-W.rtest.com",
"targetSystem":{
 "_id":"5b7f3024e9097a9020564e58",
 "cn":"IVANTHRASHBOX-W",
  "distinguishedName":"CN=IVANTHRASHBOX-W,CN=Computers,DC=rtest,DC=com",
"domain_netbios":"RTEST"
},
"user":{
 "distinguishedName":"CN=Ivan Tam,CN=Users,DC=rtest,DC=com",
 "id":"5b7f3046e9097a902057d51b",
"sid":"S-1-5-21-1366766991-2637077591-3940904154-210120"
}
}

```

### Set User/Group Persistent State

- targetSystem — properties describing the system inventory that the admin was made persistent or
  made no longer persistent

```
{
"message":"Modified administrator",
 "persistent":"true",
"system":"5b7f3024e9097a9020564e58",
"targetSystem":{
  "_id":"5b7f3024e9097a9020564e58",
 "cn":"IVANTHRASHBOX-W",
"distinguishedName":"CN=IVANTHRASHBOX-W,CN=Computers,DC=rtest,DC=com",
 "domain_netbios":"RTEST"
},
"user":"S-1-5-21-1366766991-2637077591-3940904154-210924"
}

```

### Add/Remove Users/Groups from the System Inventory

- targetSystem — properties describing the system inventory that the admin was added or removed
  from.
- user — properties describing the administrator User or Group that was added/removed

```
{
 "message":"Removed administrator",
"user":{
"_id":"5d6024f5469530b7ef7d02ce",
 "cn":"RicosRoughnecks",
"distinguishedName":"CN=RicosRoughnecks,CN=Users,DC=rtest,DC=com",
"domain_fqdn":"rtest.com"
},
 "system":"5b7f3024e9097a9020564e58",
 "targetSystem":{
 "_id":"5b7f3024e9097a9020564e58",
 "cn":"IVANTHRASHBOX-W",
"distinguishedName":"CN=IVANTHRASHBOX-W,CN=Computers,DC=rtest,DC=com",
 "domain_netbios":"RTEST",
"policy":{
 "scan":false,
"secure":false,
"strict_secure":false
}
}
}

```

## JITA Access

### JITA Access — Granted

When a JITA session is successfully granted, the following log message is emitted:

- request.request.start — UTC timestamp, when the JITA access was granted
- request.request.expires — UTC timestamp, when the JITA access session is set to expire
- request.request.userInfo — properties describing the user who is granted access
- request.requested_by_info — properties describing the user who requested the JITA session; should
  be the same as the request.request.userInfo
- targetSystem — properties describing the system where the JITA access session was granted

```
{
 "message":"Access request granted",
"request":{
 "comment":"",
 "id":"5d6843df883ab300acdde38e",
 "request":{
 "activity":[
],
 "created":"2019-08-29T21:30:07.762Z",
 "expires":"2019-08-30T01:30:07.762Z",
"start":"2019-08-29T21:29:37.762Z",
"status":"pending",
      "type":"access",
 "user":"5b7f3046e9097a902057d51b",
"userInfo":{
"distinguishedName":"CN=Ivan Tam,CN=Users,DC=rtest,DC=com"
}
"requested_by":"5b7f3046e9097a902057d51b",
"requested_by_info":{
"distinguishedName":"CN=Ivan Tam,CN=Users,DC=rtest,DC=com",
"domain_fqdn":"rtest.com",
"domain_netbios":"RTEST",
"sAMAccountName":"ivan"
 },
 "stale":false,
"system":{
 "cn":"IVANTHRASHBOX-W",
"dNSHostName":"IvanThrashbox-Windows10.rtest.com",
"distinguishedName":"CN=IVANTHRASHBOX-W,CN=Computers,DC=rtest,DC=com",
"id":"5b7f3024e9097a9020564e58"
}
},
"system":"IVANTHRASHBOX-W.rtest.com",
"targetSystem":{
"_id":"5b7f3024e9097a9020564e58",
"cn":"IVANTHRASHBOX-W",
"distinguishedName":"CN=IVANTHRASHBOX-W,CN=Computers,DC=rtest,DC=com",
"domain_netbios":"RTEST"
}
}

```

### JITA Access — Denied

When a user is denied a JITA session to a system, the following log message is emitted:

- res.body — string, message describing the reason for denying the JITA session
- res.statusCode — HTTP status code, 400-range for authorization errors; 500-range for application
  errors or exceptions.
- targetSystem — properties describing the system where the JITA access session was attempted

```
{
 "msg":"request finish",
 "res":{
 "body":"User does not have access to this resource.",
  "statusCode":403
 },
 "targetSystem":{
 "_id":"5b7f3024e9097a9020564e58",
 "cn":"IVANTHRASHBOX-W",
 "distinguishedName":"CN=IVANTHRASHBOX-W,CN=Computers,DC=rtest,DC=com",
 "domain_netbios":"RTEST"
}
}
```

### JITA Access — Expire

- request.request.expires — UTC timestamp, when the JITA access session is set to expire; should be
  “now”
- request.request.userInfo — properties describing the user who had been granted the access now set
  to expire
- request.requested_by_info — properties describing the user who requested the JITA session to
  expire; should be the same as the request.request.userInfo
- targetSystem — properties describing the system where the JITA access session is set to manually
  expire

```
{
 "message":"Expiring request",
 "request":{
"comment":"",
"id":"5d684831883ab300acdde3e0",
"processed":"2019-08-29T21:48:33.623Z",
 "request":{
"created":"2019-08-29T21:48:33.187Z",
"expires":"2019-08-29T21:48:40.620Z",
 "inProgress":false,
"start":"2019-08-29T21:48:40.621Z",
"status":"expiring",
"type":"access",
"user":"5b7f3046e9097a902057d51b",
"userInfo":{
"distinguishedName":"CN=Ivan Tam,CN=Users,DC=rtest,DC=com"
}
 },
"requested_by":"5b7f3046e9097a902057d51b",
 "requested_by_info":{
"distinguishedName":"CN=Ivan Tam,CN=Users,DC=rtest,DC=com",
"domain_fqdn":"rtest.com",
"domain_netbios":"RTEST",
 "sAMAccountName":"ivan"
},
"stale":false,
 "system":{
"cn":"IVANTHRASHBOX-W",
"dNSHostName":"IvanThrashbox-Windows10.rtest.com",
"distinguishedName":"CN=IVANTHRASHBOX-W,CN=Computers,DC=rtest,DC=com",
 "id":"5b7f3024e9097a9020564e58"
}
 },
 "targetSystem":{
 "_id":"5b7f3024e9097a9020564e58",
 "cn":"IVANTHRASHBOX-W",
 "distinguishedName":"CN=IVANTHRASHBOX-W,CN=Computers,DC=rtest,DC=com",
 "domain_netbios":"RTEST"
}
}

```
