---
title: "Get Filenames by Type"
description: "Get Filenames by Type"
sidebar_position: 80
---

# Get Filenames by Type

Use this API to get source file name(s) residing on local server(s) or in cloud for a specific type
of a data source(s), let's say source file name(s) residing in OneDrive for Excel data source(s).

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/GetFilesNameByType**

## HTTP Method

**GET**

#### Sample Request Syntax

```
{
    "type": 1,
    "configurationValues": {
        "FileServer": "OneDrive",
        "ServiceAccounUserName": "sqatestautomation@5cjshm.onmicrosoft.com",
        "ServiceAccountPassword": "password123",
        "ApplicationId": "5556091a-8f10-41ed-88cd-41c43e8c3041",
        "TenantId": "60a911a6-e22c-44f1-90f2-fa8d846eb070"
    }
}
```

#### Sample Response Syntax

```
[
    "User5.xls"
]
```
