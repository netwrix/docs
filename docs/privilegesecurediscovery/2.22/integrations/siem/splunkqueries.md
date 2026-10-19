---
title: "Splunk and SIEM Queries"
description: "Splunk and SIEM Queries"
sidebar_position: 30
---

# Splunk and SIEM Queries

Splunk and SIEM Queries

# Splunk and SIEM Queries

The purpose of this document is to outline helpful queries from different SIEM's, Splunk being a
main platform, in relation to the Privilege Secure application and any logs being forwarded.

**NOTE:** For the "examples" provide the key fields/data have been show and all other information in
the event has been excluded for condensed context of the log information.

## Splunk Queries

`index = "remediant" "APL-Remediant_Endusers"| spath "req.url" | search "req.url"!="/api/login"`

`index = "remediant" "access - remove"`

## OAM Usage:

`index="remediant" | search "Accessed most recent local account password"| table _time, _id, "user.username", target.admin.admin_account_``````name, target.system_name | timechart count by _id | rename "NULL" as "Passwords Accessed"`

## Slow JITA access

index="remediant" "queue.request.activity\{\}.message"="Successfully added user:\*"
| eval start_time = strptime(tostring('queue.request.created') , "%Y-%m-%dT%H:%M:%S.%6N")
| eval completed_time = strptime(tostring('queue.processed') , "%Y-%m-%dT%H:%M:%S.%6N")
| eval diff = completed_time - start_time
| eval accessDate = strftime(start_time, "%Y-%m-%d")
| sort _time
| table accessDate, queue.request.type, queue.request.created, diff message
queue.request.activity\{\}.message

## Time it takes for JITA access

index="remediant" "request.request.type"=access "request.request.activity.message"="Successfully
added user\*"
| eval start_time = strptime(tostring('request.request.created') , "%Y-%m-%dT%H:%M:%S.%6N")
| eval completed_time = strptime(tostring('request.processed') , "%Y-%m-%dT%H:%M:%S.%6N")
| eval diff = completed_time - start_time
| eval accessDate = strftime(start_time, "%Y-%m-%d")
| table accessDate, request.request.type, request.request.created, diff
| chart avg(diff) as average by accessDate
| eval average = round(average,2)

## HOURLY (similar to above)

index="remediant" "request.request.type"=access "request.request.activity.message"="Successfully
added user\*"
| eval start_time = strptime(tostring('request.request.created') , "%Y-%m-%dT%H:%M:%S.%6N")
| eval completed_time = strptime(tostring('request.processed') , "%Y-%m-%dT%H:%M:%S.%6N")
| eval diff = completed_time - start_time
| eval accessDate = strftime(start_time, "%Y-%m-%d")
| table accessDate, request.request.type, request.request.created, diff

## CHANGE SYSTEM POLICY

- policy.scan — boolean, whether the system should be scanned

    - index="remediant_stg" "message" "Updated policy for system"| spath "policy.scan" | search
      "policy.scan"=true
    - index="remediant_stg" "message" "Updated policy for system"| spath "policy.scan" | search
      "policy.scan"=false

- When Scan Mode is set to “Enabled” / “true”
- When Scan Mode is set to “Disabled” / false

- policy.secure — boolean, whether the system is in protect-mode

    - index="remediant_stg" "message" "Updated policy for system"| spath "policy.secure" | search
      "policy.secure"=true
    - index="remediant_stg" "message" "Updated policy for system"| spath "policy.secure" | search
      "policy.secure"=true

- When Protect Mode is “Enabled” / True:
- When Protect Mode is “Disabled” / false:

- policy.strict_secure — boolean, if the system is in protect-mode, is true if SecureONE should
  exclude any newly discovered admins from the system inventory, false if the admin should be added
  to the inventory

    - `index="remediant_stg" "message":"Updated policy for system"| spath "policy.strict_secure" | search "policy.strict_secure"=true`
    - index="remediant_stg" "message" "Updated policy for system"| spath "policy.strict_secure" |
      search "policy.strict_secure"=true
    - `index="remediant_stg" "message":"Updated policy for system"| spath "policy.strict_secure" | search "policy.strict_secure"=false`
    - When Protect Mode is set to “New Accounts JITA” (true) and is being excluded:

- ... (false) if the admin should be added to the inventory

- system — string, hostname of the system affected by the policy change
    - `index="remediant_stg" "message":"Updated policy for system"| spath "targetSystem.cn" | search "targetSystem.cn"="*"`
- targetSystem — properties describing the system affected by the policy change

- `index="remediant_stg" "message":"Updated policy for system"| spath "targetSystem.cn" | search "targetSystem.cn"="*"`

- user — properties describing the user who initiated the policy change

- `index="remediant_stg" "message":"Updated policy for system"| spath "user.distinguishedName" | search "user.distinguishedName"="*"`

Base search for changes to system policy =
index=`"remediant_stg" "message":"Updated policy for system“`

## Authentication - LOGIN

- authInfo[].success — boolean;

    - **NOTE** the syntax for this command shows the results using {} and not [] brackets
    - index="remediant_stg" name=api "authInfo\{\}.success"=false
    - index="remediant_stg" name=api "authInfo\{\}.success"=true message="Successful authentication
      by:\*“

- false — unsuccessful authentication
- true — successful authentication

- authInfo[].type — string; type of authentication; LDAP or SSO

    - index="remediant_stg" name=api "authInfo\{\}.type"=saml\*
    - index="remediant_stg" name=api "authInfo\{\}.type"=refreshToken\*

- SAML
- SSO+2FA

Base search for login activity = index="remediant_stg"

## TOKEN ISSUANCE

Upon successful login, a JWT token is issued and used to authenticate further requests.

- authData.access.role — string, “user” or “admin”, role of the user who’s being issued a token

    - index="remediant_stg" name=api "authData.access.role"=user
    - index="remediant_stg" name=api "authData.access.role"=admin

- Updated as of 11.7.19
- Updated as of 11.7.19

NOTE: The below queries are set through the “admin” role. This can be updated to “user” by changing
`"authData.access.role"=admin to "authData.access.role"=user`

- authData.issuedAt — UTC timestamp, when this token was issued

    - index="remediant_stg" name=api "authData.access.role"=admin "authData.issuedAt"="\*"

- Updated:

- authData.iat — UNIX epoch, when this token was issued

- index="remediant_stg" name=api "authData.access.role"=admin "authData.iat"="\*"

- authData.expires — UTC timestamp, when this token will expire

- index="remediant_stg" name=api "authData.access.role"=admin "authData.expires"="\*"

- authData.exp — UNIX epoch, when this token will expire

- index="remediant_stg" name=api "authData.access.role"=admin "authData.exp"="\*"

Log message example:

```
11    2019-10-25T15:02:12+00:00    docker.s1_api.1.kmqbf6iejjt8g4p6r0mt6xfw8    \{"source":"stdout","log":"\{\"name\":\"api\",\"hostname\":\"642e0dc7b14f\",\"pid\":74,\"req_id\":\"6c96eb50-f738-11e9-8b07-8f26a349cfdf\",\"level\":30,\"action\":\"create\",\"authData\":\{\"distinguishedName\":\"CN=Craig Harper,CN=Users,DC=rtest,DC=com\",\"domain_netbios\":\"RTEST\",\"objectSid\":\"S-1-5-21-1366766991-2637077591-3940904154-210953\",\"sAMAccountName\":\"charper2\",\"access\":\{\"date_added\":\"2019-08-18T23:47:28.288Z\",\"role\":\"admin\",\"ga_enabled\":true\},\"id\":\"5d56e36b85e2c7db0e589b02\",\"type\":\"access\",\"iat\":1572015732,\"exp\":1572044532,\"jti\":\"5addf00d-38b6-4ba5-b806-872299ddb7dc\",\"expires\":\"2019-10-25T23:02:12.000Z\",\"issuedAt\":\"2019-10-25T15:02:12.000Z\"\},\"tokenType\":\"access\",\"type\":\"token\",\"message\":\"token create\",\"access\":\{\"type\":\"other\",\"_source\":\"cache\",\"user\":\{\"_id\":\"5d56e36b85e2c7db0e589b02\",\"domain_netbios\":\"RTEST\",\"objectSid\":\"S-1-5-21-1366766991-2637077591-3940904154-210953\",\"sAMAccountName\":\"charper2\"\}\},\"client\":\{\"requestIP\":\"::ffff:10.255.0.2\",\"forwardedForIps\":[],\"userAgent\":\{\"browser\":\"Chrome\",\"os\":\"macOS Mojave\",\"platform\":\"Apple Mac\",\"version\":\"77.0.3865.120\"\}\},\"req\":\{\"method\":\"POST\",\"url\":\"/api/v1/login/\",\"headers\":\{\"host\":\"10.30.1.124\",\"connection\":\"keep-alive\",\"content-length\":\"78\",\"accept\":\"application/json, text/plain, */*\",\"origin\":\"https://10.30.1.124\",\"user-agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36\",\"dnt\":\"1\",\"sec-fetch-mode\":\"cors\",\"content-type\":\"application/json\",\"sec-fetch-site\":\"same-origin\",\"referer\":\"https://10.30.1.124/\",\"accept-encoding\":\"gzip, deflate, br\",\"accept-language\":\"en-US,en;q=0.9\",\"x-access-token\":null,\"authorization\":null\},\"query\":\{\"page\":1,\"limit\":100\},\"remoteAddress\":\"::ffff:10.255.0.2\",\"remotePort\":51081,\"params\":\{\}\},\"authInfo\":[\{\"username\":\"charper2\",\"domain\":\"rtest\",\"type\":\"username\"\},\{\"user\":\{\"objectSid\":\"\\u0001\\u0005\\u0000\\u0000\\u0000\\u0000\\u0000\\u0005\\u0015\\u0000\\u0000\\u00005wQW.l\\t8\\u0003\\u0000\",\"sAMAccountName\":\"charper2\"\},\"success\":true,\"type\":\"ldap\"\}],\"msg\":\"\",\"time\":\"2019-10-25T15:02:12.501Z\",\"v\":0\}","container_id":"642e0dc7b14fcb23b27ead94f7d6dc5d325ac50497e99e9839cd1eefab36248d","container_name":"/s1_api.1.kmqbf6iejjt8g4p6r0mt6xfw8"\}
```

For token creation is index="remediant_stg" name=api "access.type"=token message="\*"
For token expiration, index="remediant_stg" name=api "access.type"=token message="Expiring request"

## JITA ACCESS — GRANTED

When a JITA session is successfully granted, the following log message is emitted:

- request.request.start — UTC timestamp, when the JITA access was granted

    - The message for this activity can be found with the below query
    - index="remediant" name=api "request.request.activity.message"="Successfully added user: \*“

- index="remediant_stg" name=api "request.request.start"="\*"

- request.request.expires — UTC timestamp, when the JITA access session is set to expire
  request.request.userInfo — properties describing the user who is granted access

- index="remediant_stg" name=api "request.request.expires"="\*"| spath "request.request.status" |
  search "request.request.status"=completed

- request.requested_by_info — properties describing the user who requested the JITA session; should
  be the same as the request.request.userInfo
    - index="remediant*stg" name=api "request.request.activity.message"="Successfully added user:*"|
      spath "request.requested*by_info.sAMAccountName" | search
      "request.requested_by_info.sAMAccountName"=*
- targetSystem — properties describing the system where the JITA access session was granted

- index="remediant*stg" name=api "request.request.activity.message"="Successfully added user:*" |
  spath "request.system.cn"_ _| search "request.system.cn"=_

Example message log

"log": "\{\"name\":\"api\",\"hostname\":\"f29055b8bc5c\",\"pid\":85,\"req_id\":\
"7e5be320-f77b-11e9-8cab-45c72e721028\",\"level\":30,\"message\":\"Queue ID Lookup\"
,\"request\":\{\"requested_by\":\"5c192e747d629e76ab4c0baa\",\"requested_by_info\
":\{\"distinguishedName\":\"CN=Craig Harper,OU=Remediant,DC=demo,DC=remediant,DC=io\"
,\"sAMAccountName\":\"craig\",\"domain_netbios\":\"DEMO\",\"domain_fqdn\":\
"demo.remediant.io\"\},\"__v\":0,\"processed\":\"2019-10-25T23:02:17.436Z\",\"stale\"
:false,\"comment\":\"\",\"request\":\{\"user\":\"5c192e747d629e76ab4c0baa\",\
"userInfo\":\{\"distinguishedName\":\
"CN=Craig Harper,OU=Remediant,DC=demo,DC=remediant,DC=io\"\},\"inProgress\":false,\
"activity\":\{\"code\":0,\"message\":\"Successfully added user: DEMO\\\\craig\",\
"timestamp\":\"2019-10-25T23:02:17.436Z\",\"count\":1\},\"start\":\
"2019-10-26T03:02:16.996Z\",\"expires\":\"2019-10-26T03:02:16.996Z\",\
"created\":\"2019-10-25T23:02:16.996Z\",\"status\":\"expiring\",\"type\":\
"access\"\},\"system\":\{\"id\":\"5b3402c72483c338d10ce3fc\",\"cn\":\"HR-SERVER\"
,\"distinguishedName\":\"CN=HR-SERVER,CN=Computers,DC=demo,DC=remediant,DC=io\"
,\"dNSHostName\":\"HR-SERVER.demo.remediant.io\"\},\"id\":\"5db37ef8e4b0a20055354722\"
\},\"msg\":\"\",\"time\":\"2019-10-25T23:02:18.460Z\",\"v\":0\}",

## JITA ACCESS — EXPIRE

- request.request.expires — UTC timestamp, when the JITA access session is set to expire; should be
  “now”

    - index="remediant_stg" name=api "request.request.activity.message"="Successfully removed
      user:\*“

- index="remediant_stg" name=api "request.request.expires"="\*"
- A direct “message“ for this activity can be found with the below query

- request.request.userInfo — properties describing the user who had been granted the access now set
  to expire

- index="remediant_stg" name=api "request.request.userInfo.distinguishedName"="\*"

- request.requested_by_info — properties describing the user who requested the JITA session to
  expire; should be the same as the request.request.userInfo

- index="remediant_stg" name=api "request.requested_by"=\*

- targetSystem — properties describing the system where the JITA access session is set to manually
  expire

- index="remediant_stg" name=api "targetSystem._id"=\*

## Access Error: STATUS_ACCESS_DENIED for a specific OU:

Original Query

index=”remediant" source=s1_worker\* "queue.system.cn"=\*
"queue.request.activity\{\}.message"="Access Error: STATUS_ACCESS_DENIED -
\{Access Denied\} A process has requested access to an object but has not been
granted those access rights." | table
asctime,queue.request.activity\{\}.message,queue.requested_by_info.distinguishe
dName, queue.system_info.distinguishedName
| rename "asctime" as
Request_Timestamp(UTC),"queue.request.activity\{\}.message" as Action_Taken,
"queue.requested_by_info.distinguishedName" as member,
queue.system_info.distinguishedName as ComputerDN
| lookup `<>` distinguishedName as ComputerDN OUTPUT dNSHostName| where
ComputerDN LIKE "%,OU=`<>`%"

## API Status Codes

Status codes and there meaning
[https://restfulapi.net/http-status-codes/](https://restfulapi.net/http-status-codes/)
HTTP defines these standard status codes that can be used to convey the results of a client’s
request. The status codes are divided into five categories.

- [1xx: Informational](https://restfulapi.net/http-status-codes/#1xx-informational) – Communicates
  transfer protocol-level information.
- [2xx: Success](https://restfulapi.net/http-status-codes/#2xx-success) – Indicates that the
  client’s request was accepted successfully.
- [3xx: Redirection](https://restfulapi.net/http-status-codes/#3xx-redirection) – Indicates that the
  client must take some additional action in order to complete their request.
- [4xx: Client Error](https://restfulapi.net/http-status-codes/#4xx-client-error) – This category of
  error status codes points the finger at clients.
- [5xx: Server Error](https://restfulapi.net/http-status-codes/#5xx-server-error) – The server takes
  responsibility for these error status codes.

Running list of known returned HTTP status codes (200, 201, 202, 204, 301, 304, 400, 401, 403, 404,
405, 409, 410, 422, 500)
**Key log field:** res.statusCode
**Log containing code:** API
**Command line log search command:**

```
s1 logs --tail 50 | grep -i "statusCode"
```

- This command is to be used to view "live" log details via stdout (standard output) of the terminal
  from the Fluentd service events.

**Splunk Query:**

- Base (raw) query to show all
  `index=<SECUREONE_INDEX> container_name="/s1_api*"`
- Tabular data to display count of distinct status codes (res.statusCode) field

`index=<SECUREONE_INDEX> container_name="/s1_api*"`

`| table res.statusCode`

`| rename "res.statusCode" as Status_Code,"req.method" as API_Method,"req.url" as URL`

`| stats count(Status_Code) BY Status_Code`

Example:

![blobid0.webp](/images/privilegesecure/4.2/discovery/integrations/siem/360048705953_blobid0.webp)

## Non-Splunk Queries

### Successful Login to PrivilegeSecure UI

1. **Key string:**

    `message="Successful authentication by: *"`

2. **Command Line Use/Syntax:**

    `sudo docker service logs --raw --no-trunc --since 30s --tail 50 --follow=True s1_fluentd | awk '/Successful authentication by/,/time/'`

3. **Log Details Example:**

"message": "Successful authentication by: thadmin",
"access": \{
"type": "other",
"user": \{
"_id": "5e562a67dea345d0a59e74fb",
"domain_netbios": "CSTEST",
"objectSid": "S-1-5-21-4099641008-4128879968-2022382535-1118",
"sAMAccountName": "thadmin"

## Failed UI Login - Bad Username

**UI Error__**:__ User not found.

![blobid1.webp](/images/privilegesecure/4.2/discovery/integrations/siem/360048705953_blobid0.webp)

1. **Key String:** User not found
2. **Command line use/syntax:**

    `sudo docker service logs --raw --no-trunc --since 30s --tail 50 --follow=True s1_fluentd | awk '/User not found/,/time/'`

3. **Log Detail Example:**
    1. Fluentd

"message": "User not found."
},
"access": \{
},
"client": \{
"requestIP": "::ffff:10.255.0.2",
"forwardedForIps": [
"authInfo": [ \{ "username": "bad_user", "domain": "cstest", "type": "username" } ],
"msg": "",
"time": "2020-03-05T17:06:13.412Z",
...
"body": "\{\"name\":\"Unauthorized\",\"message\":\"User not found.\"\}"
},
"duration": 5.111348,
"req": \{
"method": "POST",
"url": "/api/v1/login/"

## Failed UI Login - Bad Password

1. **UI Error__**:__ Invalid username/password

![blobid2.webp](/images/privilegesecure/4.2/discovery/integrations/siem/360048705953_blobid2.webp)

1. **Key String:** Password failed for
2. **Command Line Use/Syntax:**

    `sudo docker service logs --raw --no-trunc --since 30s --tail 50 --follow=True s1_fluentd | awk '/Password failed for/,/time/'`

3. **Log Details Example:**
    1. Fluentd

"message": "Password failed for: thadmin",
"access": \{
"type": "other",
"user": \{
"_id": "5e562a67dea345d0a59e74fb",
"domain_netbios": "CSTEST",
"objectSid": "S-1-5-21-4099641008-4128879968-2022382535-1118",
"sAMAccountName": "thadmin"
}
},

## Failed UI Login - Bad Token

1. **UI Error__**:__ Invalid token.

![blobid3.webp](/images/privilegesecure/4.2/discovery/integrations/siem/360048705953_blobid3.webp)

1. **Key String__**:__ Invalid token
2. **Command Line Use/Syntax:**

    `sudo docker service logs --raw --no-trunc --since 30s --tail 50 --follow=True s1_fluentd | awk '/Invalid token/,/time/'`

3. **Log Details Example:**
    1. Fluentd

"body": "\{\"message\":\"Invalid token.\"\}"
},
"duration": 12.633498,
"req": \{
"method": "POST",
"url": "/api/v1/login/",
