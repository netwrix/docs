---
title: "Log Parsing & Reporting: Top 5 End-User Activity Log Data"
description: "Log Parsing & Reporting: Top 5 End-User Activity Log Data"
sidebar_position: 50
---

# Log Parsing & Reporting: Top 5 End-User Activity Log Data

Log Parsing & Reporting: Top 5 End-User Activity Log Data

# Log Parsing & Reporting: Top 5 End-User Activity Log Data

## Overview

Every log message emitted by the API will include the following fields:

- `req_id` — unique identifier for an incoming request. All API events that are generated as part of
  this request will have the same value.
- `request.requested_by` — properties about the user making the request
- `req`

- `headers` — HTTP request headers
- `method` — HTTP method
- `url` — request URL
- `params` — params, if any from the body or the URL
- `query` — pagination information, if any
- `remoteAddress` / `remotePort` — requestor IP information

- `res`

- `statusCode` — HTTP response status code
- `header` — HTTP response headers
- `body` — response body

## Examples

NOTE: For these examples, the log details provide is one of many event lines that are included in a
single action by a user. Here are a few things to be aware of when reviewing these messages

- These logs were taken straight from Fluentd’s stdout (standard out), which is the central log
  location that all of Privilege Secure activities are sent to prior to the data being forwarded to
  a SIEM.
- For brevity, the additional lines for each set of actions have been excluded and only the “core”
  action’s event has been listed below. In general there can be between 3 and 30+ lines/events per
  action/process taken within Privilege Secure.
- These log details are for Privilege Secure version 1.13.63 and higher.
- For all of the user activity below, the user that is initiating the 5 different actions/events is
  “chuser”. These actions are being taken towards the system “WINCOMP2”. This user and system
  information is provided to help in reference to the log data below for what user is taking action
  to what system.
- This list of five end user activities is a small portion of the total end user log activities to
  be generated and even smaller of total Privilege Secure logs events created. Any questions  or
  request for additional  log data on a specific action can be sent to NetwrixSupport and our
  Customer Success Engineers will be happy to assist.

UPDATE: For purposes of accessing the on-prem logs of these end-user activities there are 2 methods
used (stdout vs local logging).

- The stdout method is the default logging that is accessible automatically from a new deployment of
  Netwrix Privilege Secure. This method of logging is not best for historical view/access. The
  stdout stream only has a limited, by default, amount of output that can be accessed. This is the
  downside of relying on stdout for log access and viewing. NOTE: This method of log viewing is only
  useful when an event is replicable live. In general, the provided command for stdout needs to be
  executed **BEFORE** the activity happens.
- The local logging, which is setup by default for all services **but** the API by default. This
  local logging method is one that has to be configured by our Customer Success team. The API log,
  by default. is not logged locally due to this service having the largest accumulated number of
  events and total log file size. Because of this, access to the API Iog is through Fluentd's
  standard out (stdout). The biggest benefit for local logging, outside of a SIEM, is having logger
  access lengths for viewing these logs. To access the local logs for API the below steps will need
  to be followed:
    1. Locate the node running the fluentd service. This can be done through the UI on the
       Configure > Services page or on the command line with the command "s1 status".
    2. Next, SSH into the node that fluentd is running from.
    3. Finally, run the below commands based off of the end-user activity being looked for.

### 1. Successful login to Privilege Secure’s front-door

Here are the two methods to view these event details for this action.

- **stdout:** The display of the below API activity will be through the standard terminal, below is
  command. (This command can be run from any node within a Netwrix Privilege Secure swarm)

```
s1 logs --tail 50 | grep "Successful authentication by"
```

- **local logging**: The below command can show this end-user activity that is logged locally. The
  file name "svc-api.20201221.log" will need to be updated to the local file that has the log data
  to review. In the below examples the file "svc-api.20201221.log" is the file being used to pulled
  the data, which is located in the /discovery/data/logs/api/ directory on the appliance.

```
tail -f svc-api.20201221.log | grep -i "Successful authentication by"
```

Highlighted log event details:

```
2020-03-28 15:01:56 +0000 docker.s1_api.1.c2889ouhsn3ev0pgeyhbw3l6j: {  "source": "stdout",  "log": "{\"name\":\"api\",\"hostname\":\"209536469e96\",\"pid\":54,\"req_id\    ":\"10fd1ca0-7105-11ea-ba78-71c445f3e23d\",\"level\":30,\"message\":\    "Successful authentication by: chuser\",\"msg\":\"\",\"time\":\    "2020-03-28T15:01:56.227Z\",\"v\":0}",  "container_id": "209536469e966a218abf8f34e8a105f9fc72befb49a83dff31129d8e8aba01ef",  "container_name": "/s1_api.1.c2889ouhsn3ev0pgeyhbw3l6j",  "name": "api",  "hostname": "209536469e96",  "pid": 54,  "req_id": "10fd1ca0-7105-11ea-ba78-71c445f3e23d",  "level": 30,  "message": "Successful authentication by: chuser",  "msg": "",  "time": "2020-03-28T15:01:56.227Z",  "v": 0}
```

### 2. Failed login to Privilege Secure’s front-door due to bad password

Error generated/seen by end-user for this activity:

![mceclip0.webp](/images/privilegesecure/4.2/discovery/admin/reporting/1500000515721_mceclip0.webp)

Here are the two methods to view these event details for this action.

- **stdout:** The display of the below API activity will be through the standard terminal, below is
  command. (This command can be run from any node within a Netwrix Privilege Secure swarm)

```
s1 logs --tail 50 | grep -i "Invalid username/password"
```

- **local logging**: The below command can show this end-user activity that is logged locally. The
  file name "svc-api.20201221.log" will need to be updated to the local file that has the log data
  to review. In the below examples the file "svc-api.20201221.log" is the file being used to pulled
  the data, which is located in the /discovery/data/logs/api/ directory on the appliance.

```
tail -f svc-api.20201221.log | grep -i "Invalid username/password"
```

Highlighted log event details:

```
2020-03-28 05:16:35 +0000 docker.s1_api.1.c2889ouhsn3ev0pgeyhbw3l6j: {  "container_id": "209536469e966a218abf8f34e8a105f9fc72befb49a83dff31129d8e8aba01ef",  "container_name": "/s1_api.1.c2889ouhsn3ev0pgeyhbw3l6j",  "source": "stdout",  "log": "{\"name\":\"api\",\"hostname\":\"209536469e96\",\"pid\":54,\"req_id\":\    "4b5f86f0-70b3-11ea-ba78-71c445f3e23d\",\"level\":30,\"message\":\    "Password failed for: chuser\",\"msg\":\"\",\"time\":\"2020-03-28T05:16:35.432Z\    ",\"v\":0}",  "name": "api",  "hostname": "209536469e96",  "pid": 54,  "req_id": "4b5f86f0-70b3-11ea-ba78-71c445f3e23d",  "level": 30,  "message": "Password failed for: chuser",  "msg": "",  "time": "2020-03-28T05:16:35.432Z",  "v": 0}
```

### 3. Search for a system

Here are the two methods to view these event details for this action.

- **stdout:** The display of the below API activity will be through the standard terminal, below is
  command. (This command can be run from any node within a Netwrix Privilege Secure swarm)

```
s1 logs --tail 50 | grep -i "Admin list lookup"
```

- **local logging**: The below command can show this end-user activity that is logged locally. The
  file name "svc-api.20201221.log" will need to be updated to the local file that has the log data
  to review. In the below examples the file "svc-api.20201221.log" is the file being used to pulled
  the data, which is located in the /discovery/data/logs/api/ directory on the appliance.

```
tail -f svc-api.20201221.log | grep -i "Admin list lookup"
```

Highlighted log event details:

```
2020-03-28 15:56:40 +0000 docker.s1_api.1.c2889ouhsn3ev0pgeyhbw3l6j: {  "container_name": "/s1_api.1.c2889ouhsn3ev0pgeyhbw3l6j",  "source": "stdout",  "log": "{\"name\":\"api\",\"hostname\":\"209536469e96\",\"pid\":54,\"req_id\":\    "b649af50-710c-11ea-ba78-71c445f3e23d\",\"level\":30,\"message\":\    "Admin list lookup\",\"system\":\"WINCOMP2.cstest.test\",\"msg\":\"\",\    "time\":\"2020-03-28T15:56:40.015Z\",\"v\":0}",  "container_id": "209536469e966a218abf8f34e8a105f9fc72befb49a83dff31129d8e8aba01ef",  "name": "api",  "hostname": "209536469e96",  "pid": 54,  "req_id": "b649af50-710c-11ea-ba78-71c445f3e23d",  "level": 30,  "message": "Admin list lookup",  "system": "WINCOMP2.cstest.test",  "msg": "",  "time": "2020-03-28T15:56:40.015Z",  "v": 0}
```

### 4. Successfully granted access to a System, through Privilege Secure

Message end-users will see during this activity. The domain/username will be specific to the
organization and environment:

![mceclip1.webp](/images/privilegesecure/4.2/discovery/admin/reporting/1500000515721_mceclip1.webp)

Here are the two methods to view these event details for this action.

- **stdout:** The display of the below API activity will be through the standard terminal, below is
  command. (This command can be run from any node within a Netwrix Privilege Secure swarm)

```
s1 logs --tail 50 | grep -i "Successfully added user"
```

- **local logging**: The below command can show this end-user activity that is logged locally. The
  file name "svc-api.20201221.log" will need to be updated to the local file that has the log data
  to review. In the below examples the file "svc-api.20201221.log" is the file being used to pulled
  the data, which is located in the /discovery/data/logs/api/ directory on the appliance.

```
tail -f svc-api.20201221.log | grep -i "Successfully added user"
```

Highlighted log event details:

```
2020-03-28 15:56:39 +0000 docker.s1_api.1.c2889ouhsn3ev0pgeyhbw3l6j: {  "source": "stdout",  "log": "{\"name\":\"api\",\"hostname\":\"209536469e96\",\"pid\":54,\"req_id\":\    "b632a4e0-710c-11ea-ba78-71c445f3e23d\",\"level\":30,\"message\":\    "Queue ID Lookup\",\"request\":{\"requested_by\":\"5e566054dea345d0a59eabf6\",    \"requested_by_info\":{\"distinguishedName\":\"CN=chuser,CN=Users,DC=cstest,    DC=test\",\"sAMAccountName\":\"chuser\",\"domain_netbios\":\"CSTEST\",    \"domain_fqdn\":\"cstest.test\"},\"__v\":0,\"processed\":\    "2020-03-28T15:56:38.908Z\",\"comment\":\"\",\"request\":{\"user\":\    "5e566054dea345d0a59eabf6\",\"userInfo\":{\"distinguishedName\":\    "CN=chuser,CN=Users,DC=cstest,DC=test\"},\"inProgress\":false,\    "activity\":{\"code\":0,\"message\":\"Successfully added user: CSTEST\\\\chuser\    ",\"timestamp\":\"2020-03-28T15:56:38.908Z\",\"count\":1},\"start\":\    "2020-03-28T19:56:38.708Z\",\"expires\":\"2020-03-28T19:56:38.708Z\",\    "created\":\"2020-03-28T15:56:38.708Z\",\"status\":\"expiring\",\"type\":\    "access\"},\"system\":{\"id\":\"5e562a67dea345d0a59e74f7\",\"cn\":\"WINCOMP2\",\    "distinguishedName\":\"CN=WINCOMP2,CN=Computers,DC=cstest,DC=test\",\    "dNSHostName\":\"wincomp2.cstest.test\"},\"access_details\":{\"password\":\"\"},    \"id\":\"5e7f73b6639aed00362574f9\"},\"msg\":\"\",\"time\":\    "2020-03-28T15:56:39.857Z\",\"v\":0}",  "container_id": "209536469e966a218abf8f34e8a105f9fc72befb49a83dff31129d8e8aba01ef",  "container_name": "/s1_api.1.c2889ouhsn3ev0pgeyhbw3l6j",  "name": "api",  "hostname": "209536469e96",  "pid": 54,  "req_id": "b632a4e0-710c-11ea-ba78-71c445f3e23d",  "level": 30,  "message": "Queue ID Lookup",  "request": {    "requested_by": "5e566054dea345d0a59eabf6",    "requested_by_info": {      "distinguishedName": "CN=chuser,CN=Users,DC=cstest,DC=test",      "sAMAccountName": "chuser",      "domain_netbios": "CSTEST",      "domain_fqdn": "cstest.test"    },    "__v": 0,    "processed": "2020-03-28T15:56:38.908Z",    "comment": "",    "request": {      "user": "5e566054dea345d0a59eabf6",      "userInfo": {        "distinguishedName": "CN=chuser,CN=Users,DC=cstest,DC=test"      },      "inProgress": false,      "activity": {        "code": 0,        "message": "Successfully added user: CSTEST\\chuser",        "timestamp": "2020-03-28T15:56:38.908Z",        "count": 1      },      "start": "2020-03-28T19:56:38.708Z",      "expires": "2020-03-28T19:56:38.708Z",      "created": "2020-03-28T15:56:38.708Z",      "status": "expiring",      "type": "access"    },    "system": {      "id": "5e562a67dea345d0a59e74f7",      "cn": "WINCOMP2",      "distinguishedName": "CN=WINCOMP2,CN=Computers,DC=cstest,DC=test",      "dNSHostName": "wincomp2.cstest.test"    },    "access_details": {      "password": ""    },    "id": "5e7f73b6639aed00362574f9"  },  "msg": "",  "time": "2020-03-28T15:56:39.857Z",  "v": 0}s1_fluentd.1.qxbdzsgz6en1@ip-10-
```

### 5. 403 - Failed access request to a system, through Privilege Secure

Error generated/seen by end-user for this activity:

![mceclip2.webp](/images/privilegesecure/4.2/discovery/admin/reporting/1500000515721_mceclip2.webp)

Note: This error can be referenced by the work "Forbidden" and the phrase "User does not have access
to this resource". For the below log parsing, the phrase is used, but that can be replaced with the
word.

- **stdout:** The display of the below API activity will be through the standard terminal, below is
  command. (This command can be run from any node within a Netwrix Privilege Secure swarm)

```
s1 logs --tail 50 | grep -i "User does not have access to this resource."
```

- **local logging**:  The below command can show this end-user activity that is logged locally. The
  file name "svc-api.20201221.log" will need to be updated to the local file that has the log data
  to review. In the below examples the file "svc-api.20201221.log" is the file being used to pulled
  the data, which is located in the /discovery/data/logs/api/ directory on the appliance.

```
tail -f svc-api.20201221.log | grep -i "User does not have access to this resource"
```

Highlighted log event details:

```
2020-03-28 15:40:18 +0000 docker.s1_api.1.c2889ouhsn3ev0pgeyhbw3l6j: {  "container_name": "/s1_api.1.c2889ouhsn3ev0pgeyhbw3l6j",  "source": "stdout",  "log": "{\"name\":\"api\",\"hostname\":\"209536469e96\",\"pid\":54,\"req_id\":\    "6d2563c0-710a-11ea-ba78-71c445f3e23d\",\"level\":30,\"res\":{\"statusCode\    ":403,\"header\":\"HTTP/1.1 403 Forbidden\\r\\nX-DNS-Prefetch-Control: off\\r\    \nX-Frame-Options: SAMEORIGIN\\r\\nStrict-Transport-Security:     max-age=15552000; includeSubDomains\\r\\nX-Download-Options:     noopen\\r\\nX-Content-Type-Options: nosniff\\r\\nX-XSS-Protection: 1;     mode=block\\r\\nX-Request-Id: 6d2563c0-710a-11ea-ba78-71c445f3e23d\\r\    \nContent-Type: text/html; charset=utf-8\\r\\nContent-Length: 43\\r\    \nETag: W/\\\"2b-karzciS8T1xzOuUu5K02nYjxGlw\\\"\\r\\nDate: Sat,     28 Mar 2020 15:40:18 GMT\\r\\nConnection: keep-alive\\r\\n\\r\\n\"},\    "duration\":22.953651999999998,\"req\":{\"method\":\"GET\",\"url\":\    "/api/v1/computers/5e562a67dea345d0a59e74f7/admins\",\"headers\":    {\"host\":\"10.100.11.20\",\"connection\":\"keep-alive\",\"accept\":\    "application/json, text/plain, */*\",\"sec-fetch-dest\":\"empty\",\    "authorization\":null,\"user-agent\":\"Mozilla/5.0 (Macintosh; Intel Mac OS X     10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132     Safari/537.36\",\"dnt\":\"1\",\"sec-fetch-site\":\"same-origin\",\    "sec-fetch-mode\":\"cors\",\"referer\":\"https://10.100.11.20/\",\    "accept-encoding\":\"gzip, deflate, br\",\"accept-language\":\"en-US,en;q=0.9\    ",\"x-access-token\":null},\"query\":{\"page\":1,\"limit\":100},\    "remoteAddress\":\"::ffff:10.255.0.2\",\"remotePort\":65210},\"addtlData\":\    "None\",\"msg\":\"request finish\",\"time\":\"2020-03-28T15:40:18.323Z\",\"v\    ":0}",  "container_id": "209536469e966a218abf8f34e8a105f9fc72befb49a83dff31129d8e8aba01ef",  "name": "api",  "hostname": "209536469e96",  "pid": 54,  "req_id": "6d2563c0-710a-11ea-ba78-71c445f3e23d",  "level": 30,  "res": {    "statusCode": 403,    "header": "HTTP/1.1 403 Forbidden\r\nX-DNS-Prefetch-Control:       off\r\nX-Frame-Options: SAMEORIGIN\r\nStrict-Transport-Security:       max-age=15552000; includeSubDomains\r\nX-Download-Options:       noopen\r\nX-Content-Type-Options: nosniff\r\nX-XSS-Protection: 1;       mode=block\r\nX-Request-Id: 6d2563c0-710a-11ea-ba78-71c445f3e23d\r\      nContent-Type: text/html; charset=utf-8\r\nContent-Length: 43\r\nETag:       W/\"2b-karzciS8T1xzOuUu5K02nYjxGlw\"\r\nDate: Sat, 28 Mar 2020 15:40:18 GMT\      r\nConnection: keep-alive\r\n\r\n"  },  "duration": 22.953651999999998,  "req": {    "method": "GET",    "url": "/api/v1/computers/5e562a67dea345d0a59e74f7/admins",    "headers": {      "host": "10.100.11.20",      "connection": "keep-alive",      "accept": "application/json, text/plain, */*",      "sec-fetch-dest": "empty",      "authorization": null,      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6)         AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132         Safari/537.36",      "dnt": "1",      "sec-fetch-site": "same-origin",      "sec-fetch-mode": "cors",      "referer": "https://10.100.11.20/",      "accept-encoding": "gzip, deflate, br",      "accept-language": "en-US,en;q=0.9",      "x-access-token": null    },    "query": {      "page": 1,      "limit": 100    },    "remoteAddress": "::ffff:10.255.0.2",    "remotePort": 65210  },  "addtlData": "None",  "msg": "request finish",  "time": "2020-03-28T15:40:18.323Z",  "v": 0}
```
