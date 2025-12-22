---
title: "Get File Server Metadata by Type"
description: "Get File Server Metadata by Type"
sidebar_position: 100
---

# Get File Server Metadata by Type

Using this API you can get metadata information of data source(s) by server type. For example, all
Excel data source(s) defined so far in Directory Manager that have their source files in cloud.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSource/GetFileServerMetaDataByType??fileServerType=OneDrive**

## HTTP Method

**GET**

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": {
        "name": null,
        "type": 0,
        "icon": null,
        "fileServerType": "OneDrive",
        "configurations": [
            {
                "name": "FileServer",
                "displayName": "File Server",
                "dataType": "dropdown",
                "defaultValue": "OneDrive",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 1,
                "values": [
                    "LocalServer",
                    "OneDrive"
                ]
            },
            {
                "name": "ServiceAccounUserName",
                "displayName": "Service Account (e.g. admin@xyz.onmicrosoft.com)",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 2,
                "values": null
            },
            {
                "name": "ServiceAccountPassword",
                "displayName": "Service Account Password",
                "dataType": "System.Security.SecureString",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 3,
                "values": null
            },
            {
                "name": "ApplicationId",
                "displayName": "Registered Application ID on Azure Active Directory",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 4,
                "values": null
            },
            {
                "name": "TenantId",
                "displayName": "Registered Tenant ID on Azure Active Directory",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 5,
                "values": null
            },
            {
                "name": "FileName",
                "displayName": "File_Name",
                "dataType": "dropdown-search",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": true,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 6,
                "values": null
            }
        ]
    },
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
