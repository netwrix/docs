---
title: "Get Metadata of Data Source by Server Type and ID"
description: "Get Metadata of Data Source by Server Type and ID"
sidebar_position: 110
---

# Get Metadata of Data Source by Server Type and ID

Use this API to retrieve metadata information of all data sources defined so far in GroupID by File
Server type (i.e., local server or a cloud server) and by data source type (i.e., MS Excel or
Text/CSV or MS Access or SQL server).

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/GetMetaDataByType/{serverType}/{datasourceType}

## HTTP Method

GET

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": {
        "name": "Text/CSV",
        "type": 4,
        "icon": "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",
        "fileServerType": "LocalServer",
        "configurations": [
            {
                "name": "FileServer",
                "displayName": "File Server",
                "dataType": "dropdown",
                "defaultValue": "LocalServer",
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
                "name": "File",
                "displayName": "File Path",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": "(\\\\\\\\|[\\w]:\\\\)([^\\\\:*?\"<>|]+\\\\)*[^\\\\:*?\"<>|]+\\.((csv)|(txt))",
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
                "name": "Delimiter",
                "displayName": "Delimiter",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": "^([^\\s]|(tab)|(Tab)|(TAB))$",
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
                "name": "Server",
                "displayName": "Domain/Hostname (Optional)",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": false,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 4,
                "values": null
            },
            {
                "name": "UserName",
                "displayName": "Username (Optional)",
                "dataType": "System.String",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": false,
                "isDisabled": false,
                "isNewOnly": false,
                "renderingOrder": 5,
                "values": null
            },
            {
                "name": "Password",
                "displayName": "Password (Optional)",
                "dataType": "System.Security.SecureString",
                "defaultValue": "",
                "regularExpression": null,
                "validationMessage": null,
                "minLength": null,
                "maxLength": null,
                "isRequired": false,
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

See Also

- [Common Errors](/docs/directorymanager/11.0/apis/commonerrors.md)
- [Data Source APIs](/docs/directorymanager/11.0/apis/datasource/datasourceapis.md)
