---
title: "Download Security Service Logs with the API"
description: "Download the Directory Manager Security Service logs as an encrypted zip file by sending a GET request to the Logs API."
keywords:
  - Security Service logs
  - Logs API
  - download logs
  - GET request
  - Directory Manager security
sidebar_position: 70
unlisted: true
---

# Download Security Service Logs with the API

This API fetches Directory Manager Security service logs. See the
[Security Service in Directory Manager](/docs/directorymanager/11.2/admincenter/service/securityservice/overview.md) topic for additional
information on the Security Service.

## Endpoint

**https://demomachine:4443/GroupIDSecurityService/api/Logs/Download**

## HTTP Method

**GET**

### Sample Response Syntax

```
<Encrypted response>
```

Save the encrypted response as a zip file to a desired location.
