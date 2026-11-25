---
title: "Get File Names by Data Source Type API"
description: "List source file names on local servers or in the cloud for a data source type, such as Excel files stored in OneDrive."
keywords:
  - data source file names API
  - GetFilesNameByType endpoint
  - OneDrive Excel data source
  - Excel file names OneDrive
sidebar_position: 80
unlisted: true
---

# Get File Names by Data Source Type API

Use this API to get source file names residing on local servers or in the cloud for a specific type
of data source. For example, retrieve file names for Excel data sources stored in OneDrive.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/GetFilesNameByType**

## HTTP Method

**GET**

### Sample Request Syntax

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

### Sample Response Syntax

```
[
    "User5.xls"
]
```
