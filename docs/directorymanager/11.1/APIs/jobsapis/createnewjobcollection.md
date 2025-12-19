---
title: "Create a New Job Collection"
description: "Create a New Job Collection"
sidebar_position: 20
---

# Create a New Job Collection

Using this API you can create a new job collection which is a group of individual jobs that run in a
particular order.

See the [Create a Job Collection ](/docs/directorymanager/11.1/portal/synchronize/collection/create.md)topic for
additional information on the Job collection.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSyncJobs/Collections**

## HTTP Method

**POST**

#### Sample Request Syntax

```
{
    "isTemplate": false,
    "description": null,
    "isNotificationEnabled": false,
    "notificationSendIndividualEmail": false,
    "notifyWhen": 3,
    "notificationRecipients": "",
    "jobCollectionInfo": {
        "id": 0,
        "jobCollectionGuid": "",
        "name": "TestCollection",
        "description": "TestCollection",
        "totalJobs": 0,
        "timesRun": 0,
        "lastRunDate": null,
        "lastOutCome": "None",
        "lastOutComeDisplayText": null,
        "nextRun": null,
        "created": "2024-06-04T10:46:33.13Z",
        "modified": "2024-06-04T10:45:47Z",
        "schedule": "0",
        "smartgroupSchedule": null,
        "enabled": false,
        "jobs": [
            {
                "jobId": 0,
                "templateId": null,
                "jobGuid": null,
                "name": "Sync_API",
                "type": 2,
                "description": "Sync_API",
                "sourceProvider": "ExcelOne",
                "destinationProvider": "ADEnt",
                "lastRun": null,
                "lastOutCome": "None",
                "lastOutComeDisplayText": null,
                "nextRun": null,
                "timesRun": 0,
                "created": "2024-06-04T10:46:33.13Z",
                "modified": null,
                "schedule": "",
                "smartgroupSchedule": null,
                "enabled": true,
                "onFailure": "Abort",
                "runOrder": 1,
                "isEnable": true,
                "action": 0,
                "collectionId": null,
                "scheduledTask": null
            }
        ]
    },
    "jobs": [
        {
            "isTemplate": false,
            "jobInfo": {
                "jobId": 0,
                "templateId": null,
                "jobGuid": null,
                "name": "Sync_API",
                "type": 2,
                "description": "Sync_API",
                "sourceProvider": "ExcelOne",
                "destinationProvider": "ADEnt",
                "lastRun": null,
                "lastOutCome": "None",
                "lastOutComeDisplayText": null,
                "nextRun": null,
                "timesRun": 0,
                "created": "2024-06-04T10:46:33.13Z",
                "modified": null,
                "schedule": "",
                "smartgroupSchedule": "",
                "enabled": false,
                "onFailure": "Abort",
                "runOrder": 1,
                "isEnable": true,
                "action": 0,
                "collectionId": 0,
                "scheduledTask": null
            },
            "fieldsMap": [
                {
                    "action": 0,
                    "sourceField": "",
                    "destinationField": "cn",
                    "id": 0,
                    "delimiter": "",
                    "transform": "Join:field=First;separator=_api_;field=Last",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "First",
                    "destinationField": "givenName",
                    "id": 0,
                    "delimiter": "",
                    "transform": "",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "",
                    "destinationField": "sAMAccountName",
                    "id": 0,
                    "delimiter": "",
                    "transform": "Join:field=First;separator=_api_;field=Last",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": true,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "Last",
                    "destinationField": "sn",
                    "id": 0,
                    "delimiter": "",
                    "transform": "",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": null
                },
                {
                    "action": 0,
                    "sourceField": "",
                    "destinationField": "password",
                    "id": 0,
                    "delimiter": "",
                    "transform": "Static:value=password123",
                    "forCreateOnly": true,
                    "objectType": 1,
                    "isKey": false,
                    "options": "{\"passwordLength\":7,\"includeUppercaseAlphabets\":true,\"includeLowercaseAlphabets\":true,\"includeDigits\":true,\"includeSpecialSymbols\":false,\"specialSymbols\":\"%^&*(\",\"excludeSimilarSymbols\":false,\"managerNotification\":false,\"passwordType\":0}"
                }
            ],
            "objectsOption": [
                {
                    "objectType": 1,
                    "id": 0,
                    "jobId": 0,
                    "isCreate": true,
                    "displayName": "User",
                    "isDelete": false,
                    "isSelected": true,
                    "containerOption": "1",
                    "containerOptionValue": "OU=API,DC=groupid,DC=lab",
                    "createObjectContainerStrategy": 1,
                    "isDeprovisioning": false,
                    "objectTypeSettings": null,
                    "action": 0
                }
            ],
            "syncQuery": [
                {
                    "action": 0,
                    "id": 0,
                    "queryFor": null,
                    "objectType": 1,
                    "query": "SELECT * FROM [TTSheet1$]",
                    "queryType": "SQL",
                    "isSource": true,
                    "timeStampField": "",
                    "updateAll": true
                },
                {
                    "action": 0,
                    "id": 0,
                    "queryFor": null,
                    "objectType": 1,
                    "query": "objectClass is exactly \"user\"",
                    "queryType": "GroupID",
                    "isSource": false,
                    "timeStampField": null,
                    "updateAll": false
                }
            ],
            "settings": [
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.Type",
                    "value": "4",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "SourceProvider",
                    "value": "4",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "JobOwners",
                    "value": "Administrator#b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "JobOwnerIds",
                    "value": "b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.Provider",
                    "value": "4",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.ProviderName",
                    "value": "Microsoft Excel",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.ProviderType",
                    "value": "2",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.IsDirectoryProvider",
                    "value": "False",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.IsTableProvider",
                    "value": "True",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Source.Table",
                    "value": "TTSheet1",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.Type",
                    "value": "24",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "DestinationProvider",
                    "value": "24",
                    "dataType": "System.Int32",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.Type",
                    "value": "24",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.Provider",
                    "value": "24",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ProviderName",
                    "value": "Active Directory",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ProviderType",
                    "value": "1",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.IsDirectoryProvider",
                    "value": "True",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.IsTableProvider",
                    "value": "False",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ChangeServiceAccount",
                    "value": "",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ContainerDetails",
                    "value": "{\r\n  \"id\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"name\": \"API\",\r\n  \"children\": [],\r\n  \"parentId\": \"8ce5599b-5589-487d-aff8-bb5ffd073e5d\",\r\n  \"showChildren\": false,\r\n  \"hasChildren\": false,\r\n  \"nodeType\": \"Container\",\r\n  \"DistinguishedName\": \"OU=API,DC=groupid,DC=lab\",\r\n  \"IdFromIdentityStore\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"DisplayName\": \"API\",\r\n  \"isSelected\": true,\r\n  \"isFocused\": true\r\n}",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ShouldIncludeSubTree",
                    "value": "True",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.Container",
                    "value": "OU=API,DC=groupid,DC=lab",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ScriptingLanguage",
                    "value": "0",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "Destination.ExposedScriptCode",
                    "value": "Option Strict Off\r\n\r\nImports System\r\nImports System.Text\r\nImports System.Text.RegularExpressions\r\nImports System.IO\r\nImports System.Math\r\nImports Microsoft.VisualBasic\r\nImports Imanami.DataSyncServices.Scripting\r\n\r\nModule ImanamiExposedCode\r\n\r\n#Region \"Imanami Generated Code\"\r\n'<--- PowerTool Instance Definitions --->\t\r\n#End Region\r\n\r\n#Region \" User-definable code \"\r\n    Sub DTM_Startup(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Startup\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_BuildSourceQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildSourceQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowStarting(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.RowStarting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n\r\n    Sub DTM_BuildDestinationQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildDestinationQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanging(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanging\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanged(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanged\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdding(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdding\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdded(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdded\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleting(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleted(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleted\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinishing(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinishing\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinished(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinished\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFailed(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFailed\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_Shutdown(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Shutdown\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n#End Region\r\n\r\nend Module ' ImanamiExposedCode\r\n",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "IsNotificationEnabled",
                    "value": "False",
                    "dataType": "System.Boolean",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "ScheduledTask",
                    "value": "",
                    "dataType": "System.String",
                    "objectType": null
                },
                {
                    "action": 0,
                    "id": 0,
                    "key": "SmartGroupScheduleTask",
                    "value": "",
                    "dataType": "System.String",
                    "objectType": null
                }
            ],
            "hasAccess": false
        }
    ],
    "totalJobs": 0,
    "hasAccess": false
}
```

#### Sample Response Syntax

```
{
    "name": null,
    "type": 6,
    "status": 0,
    "message": null,
    "data": 21,
    "identityStoreObject": null,
    "details": [],
    "currentDirectoryServer": null,
    "errorCode": null,
    "exceptionMessagesAttributeWise": null,
    "isResyncAble": true
}
```
