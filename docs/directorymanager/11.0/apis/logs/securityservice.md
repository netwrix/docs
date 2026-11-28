---
title: "Download Security Service Logs with the API"
description: "Download the GroupID Security Service logs as an encrypted zip file by sending a GET request to the Logs API."
keywords:
  - Security Service logs
  - Logs API
  - download logs
  - GET request
  - GroupID security
sidebar_position: 70
unlisted: true
---

# Download Security Service Logs with the API

This API fetches GroupID Security Service logs. See the
[Security Service in GroupID](/docs/directorymanager/11.0/signin/service/securityservice/overview.md)
topic for additional information on the Security Service.

## Endpoint

https://demomachine:4443/GroupIDSecurityService/api/Logs/Download

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
