# Create a Data Source for MS Access

Use this API to create a new data source.

See the
[Create a Data Source for MS Access](/versioned_docs/groupid_11.0/groupid/admincenter/datasource/create.md#create-a-data-source-for-ms-access)
section of the
[Create a Data Source](/versioned_docs/groupid_11.0/groupid/admincenter/datasource/create.md) topic
to create an MS Access data source using the GroupID interface.

## Endpoint

https://demomachine:4443/GroupIDDataService/api/DataSource/Create

## HTTP Method

POST

#### Sample Request Syntax

The following request syntax provides you information for creating a data source for an Access
database. GroupID enables you to connect to an Access file that is placed on a local server or on
OneDrive.

```
{
    "name": "Access_API",
    "providerTypeName": "Microsoft Access",
    "type": 2,
    "creationDate": "2024-05-07T04:08:56.95",
    "lastUpdate": null,
    "configurationValues": {
        "FileServer": "LocalServer",
        "FilePath": "C:\\Users\\administrator.GROUPID\\Documents\\GroupIDAccess.accdb",
        "FilePassword": "",
        "ConnectionString": "",
        "UserName": "",
        "Password": ""
    }
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 6,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```

See Also

- [Data Source APIs](/versioned_docs/groupid_11.0/groupid/api/datasource/datasourceapis.md)
- [Common Errors](/versioned_docs/groupid_11.0/groupid/api/commonerrors.md)
