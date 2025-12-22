---
title: "Get a Job Details"
description: "Get a Job Details"
sidebar_position: 90
---

# Get a Job Details

Use this API to get details of a job specified in endpoint URL.

## Endpoint

**https://machinename:4443/GroupIDDataService/api/DataSyncJobs/{jobId}/Details**

## HTTP Method

**GET**

#### Sample Response Syntax

```
{
    "count": 0,
    "data": {
        "isTemplate": false,
        "jobInfo": {
            "jobId": 6,
            "templateId": null,
            "jobGuid": null,
            "name": "Sync_API",
            "type": 1,
            "description": "Sync_API",
            "sourceProvider": "ExcelOne",
            "destinationProvider": "ADEnt",
            "lastRun": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "timesRun": 0,
            "created": "2024-06-04T09:45:25.373Z",
            "modified": null,
            "schedule": "",
            "smartgroupSchedule": "",
            "enabled": false,
            "onFailure": "Abort",
            "runOrder": 0,
            "isEnable": true,
            "action": 0,
            "collectionId": null,
            "scheduledTask": null
        },
        "fieldsMap": [
            {
                "action": 0,
                "sourceField": "",
                "destinationField": "cn",
                "id": 61,
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
                "id": 62,
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
                "id": 63,
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
                "id": 64,
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
                "id": 65,
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
                "id": 8,
                "jobId": 6,
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
                "id": 3,
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
                "id": 4,
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
                "id": 68,
                "key": "Source.Type",
                "value": "4",
                "dataType": "System.Int32",
                "objectType": null
            },
            {
                "action": 0,
                "id": 69,
                "key": "SourceProvider",
                "value": "4",
                "dataType": "System.Int32",
                "objectType": null
            },
            {
                "action": 0,
                "id": 70,
                "key": "JobOwners",
                "value": "Administrator#b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 71,
                "key": "JobOwnerIds",
                "value": "b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 72,
                "key": "Source.ProviderName",
                "value": "Microsoft Excel",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 73,
                "key": "Source.Provider",
                "value": "4",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 74,
                "key": "Source.ProviderType",
                "value": "2",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 75,
                "key": "Source.IsDirectoryProvider",
                "value": "False",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 76,
                "key": "Source.IsTableProvider",
                "value": "True",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 77,
                "key": "Source.Table",
                "value": "TTSheet1",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 78,
                "key": "Destination.Type",
                "value": "24",
                "dataType": "System.Int32",
                "objectType": null
            },
            {
                "action": 0,
                "id": 79,
                "key": "DestinationProvider",
                "value": "24",
                "dataType": "System.Int32",
                "objectType": null
            },
            {
                "action": 0,
                "id": 80,
                "key": "Destination.ProviderName",
                "value": "Active Directory",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 81,
                "key": "Destination.Provider",
                "value": "24",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 82,
                "key": "Destination.Type",
                "value": "24",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 83,
                "key": "Destination.ProviderType",
                "value": "1",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 84,
                "key": "Destination.IsDirectoryProvider",
                "value": "True",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 85,
                "key": "Destination.IsTableProvider",
                "value": "False",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 86,
                "key": "Destination.ChangeServiceAccount",
                "value": "",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 87,
                "key": "Destination.ContainerDetails",
                "value": "{\r\n  \"id\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"name\": \"API\",\r\n  \"children\": [],\r\n  \"parentId\": \"8ce5599b-5589-487d-aff8-bb5ffd073e5d\",\r\n  \"showChildren\": false,\r\n  \"hasChildren\": false,\r\n  \"nodeType\": \"Container\",\r\n  \"DistinguishedName\": \"OU=API,DC=groupid,DC=lab\",\r\n  \"IdFromIdentityStore\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"DisplayName\": \"API\",\r\n  \"isSelected\": true,\r\n  \"isFocused\": true\r\n}",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 88,
                "key": "Destination.ShouldIncludeSubTree",
                "value": "True",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 89,
                "key": "Destination.Container",
                "value": "OU=API,DC=groupid,DC=lab",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 90,
                "key": "Destination.ScriptingLanguage",
                "value": "0",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 91,
                "key": "Destination.ExposedScriptCode",
                "value": "Option Strict Off\r\n\r\nImports System\r\nImports System.Text\r\nImports System.Text.RegularExpressions\r\nImports System.IO\r\nImports System.Math\r\nImports Microsoft.VisualBasic\r\nImports Imanami.DataSyncServices.Scripting\r\n\r\nModule ImanamiExposedCode\r\n\r\n#Region \"Imanami Generated Code\"\r\n'<--- PowerTool Instance Definitions --->\t\r\n#End Region\r\n\r\n#Region \" User-definable code \"\r\n    Sub DTM_Startup(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Startup\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_BuildSourceQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildSourceQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowStarting(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.RowStarting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n\r\n    Sub DTM_BuildDestinationQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildDestinationQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanging(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanging\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanged(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanged\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdding(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdding\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdded(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdded\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleting(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleted(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleted\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinishing(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinishing\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinished(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinished\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFailed(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFailed\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_Shutdown(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Shutdown\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n#End Region\r\n\r\nend Module ' ImanamiExposedCode\r\n",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 92,
                "key": "IsNotificationEnabled",
                "value": "False",
                "dataType": "System.Boolean",
                "objectType": null
            },
            {
                "action": 0,
                "id": 93,
                "key": "ScheduledTask",
                "value": "",
                "dataType": "System.String",
                "objectType": null
            },
            {
                "action": 0,
                "id": 94,
                "key": "SmartGroupScheduleTask",
                "value": "",
                "dataType": "System.String",
                "objectType": null
            }
        ],
        "delimiterSchema": null,
        "sourceSchema": null,
        "destinationSchema": null,
        "hasAccess": true
    },
    "status": 0,
    "message": null
}
```
