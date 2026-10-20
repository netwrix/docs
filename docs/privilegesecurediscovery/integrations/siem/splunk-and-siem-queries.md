---
title: "Splunk and SIEM queries"
description: "Use example Splunk searches and command-line filters to find sign-in, policy, and JIT access events from Privilege Secure for Discovery."
sidebar_position: 50
---

:::warning[Screenshot needs attention: remove before publishing]
TODO: 360048705953_blobid0.webp, 360048705953_blobid2.webp, and 360048705953_blobid3.webp: review for domain, user, and host details. The Splunk screenshots show an Active Directory domain SID. Redact or replace.

TODO: This page references 360048705953_blobid0.webp twice (the status code example and the bad username example). Capture a separate screenshot for the bad username example.

TODO: Verify the queries against 26.09.1 events. They were written for earlier releases. Evidence: none.
:::

This page lists example searches for Splunk and command-line filters for other SIEM solutions. Use them to find events that Netwrix Privilege Secure for Discovery forwards. To forward logs, see [Forward logs to a syslog server or SIEM](./forward-logs.md). For the event structure, see [Audit log event reference](./additional-logs.md).

The examples use `<index>` as the Splunk index that receives the logs. Replace it with the name of your index. The field descriptions show the key fields only.

## Splunk queries

### Find events

Find requests that contain a search term, excluding the login endpoint. Replace `<term>` with the text to find:

```text
index="<index>" "<term>" | spath "req.url" | search "req.url"!="/api/login"
```

Find user or group removals:

```text
index="<index>" "access - remove"
```

### Count offline credential retrievals

```text
index="<index>" "Accessed most recent local account password"
| table _time, _id, "user.username", target.admin.admin_account_name, target.system_name
| timechart count by _id
| rename "NULL" as "Passwords Accessed"
```

### Measure JIT access time

Show the time between the creation of a JIT request and the completion of the request. This search is useful for finding slow JIT access.

```text
index="<index>" "queue.request.activity{}.message"="Successfully added user:*"
| eval start_time = strptime(tostring('queue.request.created'), "%Y-%m-%dT%H:%M:%S.%6N")
| eval completed_time = strptime(tostring('queue.processed'), "%Y-%m-%dT%H:%M:%S.%6N")
| eval diff = completed_time - start_time
| eval accessDate = strftime(start_time, "%Y-%m-%d")
| sort _time
| table accessDate, queue.request.type, queue.request.created, diff, message
```

Show the average time to grant JIT access per day:

```text
index="<index>" "request.request.type"=access "request.request.activity.message"="Successfully added user*"
| eval start_time = strptime(tostring('request.request.created'), "%Y-%m-%dT%H:%M:%S.%6N")
| eval completed_time = strptime(tostring('request.processed'), "%Y-%m-%dT%H:%M:%S.%6N")
| eval diff = completed_time - start_time
| eval accessDate = strftime(start_time, "%Y-%m-%d")
| table accessDate, request.request.type, request.request.created, diff
| chart avg(diff) as average by accessDate
| eval average = round(average, 2)
```

To list each request instead of the daily average, remove the last two lines of the preceding search.

### Find system policy changes

When an administrator changes the policy of a system, the product logs the message `Updated policy for system`. Use the following base search for all policy changes:

```text
index="<index>" "message":"Updated policy for system"
```

The following fields describe the change.

| Field | Description | Example search |
| --- | --- | --- |
| `policy.scan` | Whether the system is scanned. `true` means Scan Mode is **Enabled**. `false` means Scan Mode is **Disabled**. | `index="<index>" "message":"Updated policy for system" \| spath "policy.scan" \| search "policy.scan"=true` |
| `policy.secure` | Whether the system is in Protect mode. `true` means Protect Mode is **Enabled**. `false` means it is **Disabled**. | `index="<index>" "message":"Updated policy for system" \| spath "policy.secure" \| search "policy.secure"=true` |
| `policy.strict_secure` | For a system in Protect mode, `true` when the product excludes newly discovered administrators from the inventory (**New Accounts: JITA**). `false` when it adds them to the inventory. | `index="<index>" "message":"Updated policy for system" \| spath "policy.strict_secure" \| search "policy.strict_secure"=true` |
| `targetSystem.cn` | The system that the change affects. | `index="<index>" "message":"Updated policy for system" \| spath "targetSystem.cn" \| search "targetSystem.cn"="*"` |
| `user.distinguishedName` | The user that made the change. | `index="<index>" "message":"Updated policy for system" \| spath "user.distinguishedName" \| search "user.distinguishedName"="*"` |

### Find authentication events

The `authInfo{}` field uses braces in Splunk searches, not brackets.

Find failed sign-ins:

```text
index="<index>" name=api "authInfo{}.success"=false
```

Find successful sign-ins:

```text
index="<index>" name=api "authInfo{}.success"=true message="Successful authentication by:*"
```

Find sign-ins by authentication type:

```text
index="<index>" name=api "authInfo{}.type"=saml*
```

```text
index="<index>" name=api "authInfo{}.type"=refreshToken*
```

The first search finds single sign-on (SSO) sign-ins. The second finds sign-ins that use a refresh token, which applies to SSO with two-factor authentication.

### Find token events

After a successful sign-in, the product issues a JSON Web Token (JWT) that authenticates later requests.

Find token creation and token expiration events:

```text
index="<index>" name=api "access.type"=token message="*"
```

```text
index="<index>" name=api "access.type"=token message="Expiring request"
```

Find tokens by the role of the user. Replace `admin` with `user` to find tokens for non-administrator users.

```text
index="<index>" name=api "authData.access.role"=admin
```

The following fields give the token times:

| Field | Description |
| --- | --- |
| `authData.issuedAt` | UTC timestamp when the token was issued |
| `authData.iat` | UNIX epoch time when the token was issued |
| `authData.expires` | UTC timestamp when the token expires |
| `authData.exp` | UNIX epoch time when the token expires |

For example, to show token issue times for administrators:

```text
index="<index>" name=api "authData.access.role"=admin "authData.issuedAt"="*"
```

### Find JIT access events

Find granted JIT sessions:

```text
index="<index>" name=api "request.request.activity.message"="Successfully added user:*"
```

Find granted sessions that are complete:

```text
index="<index>" name=api "request.request.expires"="*" | spath "request.request.status" | search "request.request.status"=completed
```

Find the user that requested a session:

```text
index="<index>" name=api "request.request.activity.message"="Successfully added user:*" | spath "request.requested_by_info.sAMAccountName" | search "request.requested_by_info.sAMAccountName"=*
```

Find the system where access was granted:

```text
index="<index>" name=api "request.request.activity.message"="Successfully added user:*" | spath "request.system.cn" | search "request.system.cn"=*
```

Find expired sessions:

```text
index="<index>" name=api "request.request.activity.message"="Successfully removed user:*"
```

Find the user whose access expired, the user that requested the expiration, and the system:

```text
index="<index>" name=api "request.request.userInfo.distinguishedName"="*"
```

```text
index="<index>" name=api "request.requested_by"=*
```

```text
index="<index>" name=api "targetSystem._id"=*
```

### Find access errors for an organizational unit

Find requests that failed with `STATUS_ACCESS_DENIED` for the systems in a specific organizational unit (OU). Replace `<lookup>` with a lookup that maps a computer DN to its DNS host name, and replace `<ou>` with the name of the OU.

```text
index="<index>" source=s1_worker* "queue.system.cn"=*
"queue.request.activity{}.message"="Access Error: STATUS_ACCESS_DENIED - {Access Denied} A process has requested access to an object but has not been granted those access rights."
| table asctime, queue.request.activity{}.message, queue.requested_by_info.distinguishedName, queue.system_info.distinguishedName
| rename "asctime" as "Request_Timestamp(UTC)", "queue.request.activity{}.message" as Action_Taken, "queue.requested_by_info.distinguishedName" as member, queue.system_info.distinguishedName as ComputerDN
| lookup <lookup> distinguishedName as ComputerDN OUTPUT dNSHostName
| where ComputerDN LIKE "%,OU=<ou>%"
```

### Count API status codes

HTTP status codes convey the result of a request. The product returns the following status codes: 200, 201, 202, 204, 301, 304, 400, 401, 403, 404, 405, 409, 410, 422, and 500. The key log field is `res.statusCode`, in the API log. For the meaning of each code, see [HTTP status codes](https://restfulapi.net/http-status-codes/).

To view status codes live on the command line, run the following command on the server.

```bash
s1 logs --tail 50 | grep -i "statusCode"
```

To count the distinct status codes in Splunk, run the following search.

```text
index="<index>" container_name="/s1_api*"
| table res.statusCode
| rename "res.statusCode" as Status_Code
| stats count(Status_Code) BY Status_Code
```

![A Splunk table that counts the API status codes](/images/privilegesecure/4.2/discovery/integrations/siem/360048705953_blobid0.webp)

## Non-Splunk queries

For other SIEM solutions, search for the key string. To view the matching events on the server, run the command that follows each key string.

### Successful sign-in

Key string:

```text
message="Successful authentication by: *"
```

```bash
sudo docker service logs --raw --no-trunc --since 30s --tail 50 --follow=True s1_fluentd | awk '/Successful authentication by/,/time/'
```

The log shows the following details:

```json
{
  "message": "Successful authentication by: asmith",
  "access": {
    "type": "other",
    "user": {
      "_id": "<user-id>",
      "domain_netbios": "CONTOSO",
      "objectSid": "S-1-5-21-1111111111-2222222222-3333333333-1001",
      "sAMAccountName": "asmith"
    }
  }
}
```

### Failed sign-in with an unknown user name

The interface shows the error `User not found.`

![The sign-in error for an unknown user name](/images/privilegesecure/4.2/discovery/integrations/siem/360048705953_blobid0.webp)

Key string:

```text
User not found
```

```bash
sudo docker service logs --raw --no-trunc --since 30s --tail 50 --follow=True s1_fluentd | awk '/User not found/,/time/'
```

The log shows the following details:

```json
{
  "message": "User not found.",
  "client": {
    "requestIP": "::ffff:192.0.2.10"
  },
  "authInfo": [{ "username": "unknown_user", "domain": "contoso", "type": "username" }],
  "time": "2026-01-01T17:06:13.412Z",
  "res": {
    "body": "{\"name\":\"Unauthorized\",\"message\":\"User not found.\"}"
  },
  "req": {
    "method": "POST",
    "url": "/api/v1/login/"
  }
}
```

### Failed sign-in with a wrong password

The interface shows the error `Invalid username/password`.

![The sign-in error for a wrong password](/images/privilegesecure/4.2/discovery/integrations/siem/360048705953_blobid2.webp)

Key string:

```text
Password failed for
```

```bash
sudo docker service logs --raw --no-trunc --since 30s --tail 50 --follow=True s1_fluentd | awk '/Password failed for/,/time/'
```

The log shows the following details:

```json
{
  "message": "Password failed for: asmith",
  "access": {
    "type": "other",
    "user": {
      "_id": "<user-id>",
      "domain_netbios": "CONTOSO",
      "objectSid": "S-1-5-21-1111111111-2222222222-3333333333-1001",
      "sAMAccountName": "asmith"
    }
  }
}
```

### Failed sign-in with an invalid token

The interface shows the error `Invalid token.`

![The sign-in error for an invalid token](/images/privilegesecure/4.2/discovery/integrations/siem/360048705953_blobid3.webp)

Key string:

```text
Invalid token
```

```bash
sudo docker service logs --raw --no-trunc --since 30s --tail 50 --follow=True s1_fluentd | awk '/Invalid token/,/time/'
```

The log shows the following details:

```json
{
  "res": {
    "body": "{\"message\":\"Invalid token.\"}"
  },
  "req": {
    "method": "POST",
    "url": "/api/v1/login/"
  }
}
```
