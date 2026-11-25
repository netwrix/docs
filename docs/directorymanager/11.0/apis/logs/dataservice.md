---
title: "Download Data Service Logs with the API"
description: "Download the Directory Manager Data Service logs as an encrypted zip file by sending a GET request to the Logs API."
keywords:
  - Data Service logs
  - Logs API
  - download Data Service logs
  - Data Service log download endpoint
  - Directory Manager Data Service
sidebar_position: 20
unlisted: true
---

# Download Data Service Logs with the API

Use this API to get Directory Manager Data Service logs. See the
[Directory Manager Data Service](/docs/directorymanager/11.0/signin/service/dataservice/overview.md) topic for
additional information on the Data Service.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/Logs/Download

## HTTP Method

GET

### Sample Response Syntax

```
<Encrypted response>
```

Save the encrypted response as a zip file to a desired location.

See Also

- [Directory Manager API Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Directory Manager Logs APIs](/docs/directorymanager/11.0/apis/logs/logsapis.md)
