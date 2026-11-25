---
title: "Download Portal Logs with the API"
description: "Download the Directory Manager portal logs as an encrypted zip file by sending a GET request to the Logs API."
keywords:
  - portal logs
  - Logs API
  - download portal logs
  - portal log download endpoint
  - Directory Manager portal
sidebar_position: 40
---

# Download Portal Logs with the API

Use this API to get Directory Manager portal logs. See the
[Directory Manager Portal History Tracking](/docs/directorymanager/11.0/welcome/history/overview.md) topic for additional
information on portal history.

## Endpoint

https://demomachine:4443/GroupIDPortal/api/Logs/Download

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
