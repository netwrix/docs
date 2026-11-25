---
title: "Download Replication Service Logs with the API"
description: "Download the Directory Manager Replication Service logs as an encrypted zip file by sending a GET request to the Logs API."
keywords:
  - Replication Service logs
  - Logs API
  - download logs
  - GET request
  - Directory Manager replication
sidebar_position: 50
---

# Download Replication Service Logs with the API

Use this API to get Replication Service logs. See the
[Directory Manager Replication Service](/docs/directorymanager/11.0/signin/service/replicationservice.md)
topic for additional information on the Replication Service.

## Endpoint

https://demomachine:4443/GroupIDReplicationService/api/Logs/Download

## HTTP Method

GET

### Sample Response Syntax

```
<Encrypted response>
```

Save the encrypted response as a zip file to a desired location.

## See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Logs APIs](/docs/directorymanager/11.0/apis/logs/logsapis.md)
