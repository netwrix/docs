---
title: "Download Scheduler Service Logs with the API"
description: "Download the GroupID Scheduler Service logs as an encrypted zip file by sending a GET request to the Logs API."
keywords:
  - Scheduler Service logs
  - Logs API
  - download logs
  - GET request
  - GroupID scheduler
sidebar_position: 60
unlisted: true
---

# Download Scheduler Service Logs with the API

Using this API, you can get Scheduler Service logs. See the
[GroupID Scheduler Service](/docs/directorymanager/11.0/signin/service/schedulerservice.md) topic
for additional information on the Scheduler Service.

## Endpoint

https://demomachine:4443/GroupIDSchedulerService/api/Logs/Download

## HTTP Method

GET

### Sample Response Syntax

```
<Encrypted response>
```

Save the encrypted response as a zip file to a desired location.

## See Also

- [GroupID API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [GroupID Logs APIs](/docs/directorymanager/11.0/apis/logs/logsapis.md)
