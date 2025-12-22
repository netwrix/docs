---
title: "Get Job Collection Details By Job Collection ID"
description: "Get Job Collection Details By Job Collection ID"
sidebar_position: 60
---

# Get Job Collection Details By Job Collection ID

Using this API you can retrieve information about a job collection ID of which is given in the
endpoint URL.

See the [Create a Job Collection ](/docs/directorymanager/11.1/portal/synchronize/collection/create.md)topic for
additional information.

## Endpoint

`https://machinename:4443/GroupIDDataService/api/DataSyncJobs/Collections/{jobCollectionId}/Details`

## HTTP Method

**GET**

#### Sample Response Syntax

```
{
    "count": 2,
    "data": {
        "isTemplate": false,
        "description": null,
        "isNotificationEnabled": false,
        "notificationSendIndividualEmail": false,
        "notifyWhen": 3,
        "notificationRecipients": "",
        "jobCollectionInfo": {
            "id": 1,
            "jobCollectionGuid": "",
            "name": "DataSync_API",
            "description": "DataSync_API",
            "totalJobs": 0,
            "timesRun": 0,
            "lastRunDate": null,
            "lastOutCome": "None",
            "lastOutComeDisplayText": null,
            "nextRun": null,
            "created": "2024-06-04T10:08:43.887Z",
            "modified": "2024-06-04T10:08:24Z",
            "schedule": "0",
            "smartgroupSchedule": null,
            "enabled": false,
            "jobs": [
                {
                    "jobId": 7,
                    "templateId": null,
                    "jobGuid": null,
                    "name": "NewJob",
                    "type": 2,
                    "description": "NewJob",
                    "sourceProvider": "AdStore",
                    "destinationProvider": "Azure",
                    "lastRun": null,
                    "lastOutCome": "None",
                    "lastOutComeDisplayText": null,
                    "nextRun": null,
                    "timesRun": 0,
                    "created": "2024-06-04T10:08:43.89Z",
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
                },
                {
                    "jobId": 8,
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
                    "created": "2024-06-04T10:08:43.89Z",
                    "modified": null,
                    "schedule": "",
                    "smartgroupSchedule": null,
                    "enabled": true,
                    "onFailure": "Abort",
                    "runOrder": 2,
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
                    "jobId": 7,
                    "templateId": null,
                    "jobGuid": null,
                    "name": "NewJob",
                    "type": 2,
                    "description": "NewJob",
                    "sourceProvider": "AdStore",
                    "destinationProvider": "Azure",
                    "lastRun": null,
                    "lastOutCome": "None",
                    "lastOutComeDisplayText": null,
                    "nextRun": null,
                    "timesRun": 0,
                    "created": "2024-06-04T10:08:43.89Z",
                    "modified": null,
                    "schedule": "",
                    "smartgroupSchedule": "",
                    "enabled": false,
                    "onFailure": "Abort",
                    "runOrder": 1,
                    "isEnable": true,
                    "action": 0,
                    "collectionId": 1,
                    "scheduledTask": null
                },
                "fieldsMap": [
                    {
                        "action": 0,
                        "sourceField": "description",
                        "destinationField": "description",
                        "id": 66,
                        "delimiter": "",
                        "transform": "",
                        "forCreateOnly": true,
                        "objectType": 4,
                        "isKey": false,
                        "options": null
                    },
                    {
                        "action": 0,
                        "sourceField": "displayName",
                        "destinationField": "displayname",
                        "id": 67,
                        "delimiter": "",
                        "transform": "",
                        "forCreateOnly": true,
                        "objectType": 4,
                        "isKey": true,
                        "options": null
                    },
                    {
                        "action": 0,
                        "sourceField": "",
                        "destinationField": "grouptype",
                        "id": 68,
                        "delimiter": "",
                        "transform": "Static:value=8",
                        "forCreateOnly": true,
                        "objectType": 4,
                        "isKey": false,
                        "options": null
                    },
                    {
                        "action": 0,
                        "sourceField": "",
                        "destinationField": "mailNickname",
                        "id": 69,
                        "delimiter": "",
                        "transform": "Script:text=DTM.Result = DTM.Source(\"cn\") & \"_\" & DTM.Source(\"cn\") & \"@5cjshm.onmicrosoft.com\"",
                        "forCreateOnly": true,
                        "objectType": 4,
                        "isKey": false,
                        "options": ""
                    }
                ],
                "objectsOption": [
                    {
                        "objectType": 4,
                        "id": 9,
                        "jobId": 7,
                        "isCreate": true,
                        "displayName": "Group",
                        "isDelete": false,
                        "isSelected": true,
                        "containerOption": "1",
                        "containerOptionValue": "DC=5cjshm,DC=onmicrosoft,DC=com",
                        "createObjectContainerStrategy": 1,
                        "isDeprovisioning": false,
                        "objectTypeSettings": null,
                        "action": 0
                    }
                ],
                "syncQuery": [
                    {
                        "action": 0,
                        "id": 5,
                        "queryFor": null,
                        "objectType": 4,
                        "query": "objectClass is exactly \"group\"",
                        "queryType": "GroupID",
                        "isSource": true,
                        "timeStampField": "",
                        "updateAll": true
                    },
                    {
                        "action": 0,
                        "id": 6,
                        "queryFor": null,
                        "objectType": 4,
                        "query": "odatatype is exactly \"#microsoft.graph.group\"",
                        "queryType": "GroupID",
                        "isSource": false,
                        "timeStampField": null,
                        "updateAll": false
                    }
                ],
                "settings": [
                    {
                        "action": 0,
                        "id": 95,
                        "key": "Source.Type",
                        "value": "2",
                        "dataType": "System.Int32",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 96,
                        "key": "SourceProvider",
                        "value": "2",
                        "dataType": "System.Int32",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 97,
                        "key": "JobOwners",
                        "value": "Administrator#b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 98,
                        "key": "JobOwnerIds",
                        "value": "b9989fd7-bdbf-41cb-9aa4-eca35a329682",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 99,
                        "key": "Source.Provider",
                        "value": "2",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 100,
                        "key": "Source.ProviderName",
                        "value": "Active Directory",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 101,
                        "key": "Source.ProviderType",
                        "value": "1",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 102,
                        "key": "Source.IsDirectoryProvider",
                        "value": "True",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 103,
                        "key": "Source.IsTableProvider",
                        "value": "False",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 104,
                        "key": "Source.ContainerDetails",
                        "value": "{\r\n  \"id\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"name\": \"API\",\r\n  \"children\": [],\r\n  \"parentId\": \"8ce5599b-5589-487d-aff8-bb5ffd073e5d\",\r\n  \"showChildren\": false,\r\n  \"hasChildren\": false,\r\n  \"nodeType\": \"Container\",\r\n  \"DistinguishedName\": \"OU=API,DC=groupid,DC=lab\",\r\n  \"IdFromIdentityStore\": \"efc6ad49-9091-47f4-91f0-0e033177e87e\",\r\n  \"DisplayName\": \"API\",\r\n  \"isSelected\": true,\r\n  \"isFocused\": true\r\n}",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 105,
                        "key": "Source.ShouldIncludeSubTree",
                        "value": "True",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 106,
                        "key": "Source.Container",
                        "value": "OU=API,DC=groupid,DC=lab",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 107,
                        "key": "Destination.Type",
                        "value": "3",
                        "dataType": "System.Int32",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 108,
                        "key": "DestinationProvider",
                        "value": "3",
                        "dataType": "System.Int32",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 109,
                        "key": "Destination.Type",
                        "value": "3",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 110,
                        "key": "Destination.Provider",
                        "value": "3",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 111,
                        "key": "Destination.ProviderName",
                        "value": "Microsoft Entra ID",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 112,
                        "key": "Destination.ProviderType",
                        "value": "1",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 113,
                        "key": "Destination.IsDirectoryProvider",
                        "value": "True",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 114,
                        "key": "Destination.IsTableProvider",
                        "value": "False",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 115,
                        "key": "Destination.ContainerDetails",
                        "value": "{\r\n  \"id\": \"5cjshm.onmicrosoft.com\",\r\n  \"name\": \"5cjshm\",\r\n  \"children\": [],\r\n  \"parentId\": \"5cjshm.onmicrosoft.com-gc\",\r\n  \"showChildren\": true,\r\n  \"hasChildren\": false,\r\n  \"nodeType\": \"Domain\",\r\n  \"DistinguishedName\": \"DC=5cjshm,DC=onmicrosoft,DC=com\",\r\n  \"IdFromIdentityStore\": \"5cjshm.onmicrosoft.com\",\r\n  \"DisplayName\": \"5cjshm\",\r\n  \"isSelected\": true,\r\n  \"isLoading\": false,\r\n  \"isFocused\": true\r\n}",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 116,
                        "key": "Destination.Container",
                        "value": "DC=5cjshm,DC=onmicrosoft,DC=com",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 117,
                        "key": "Destination.ConfiguredMessagingProvider",
                        "value": "6",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 118,
                        "key": "Destination.ConfiguredMessagingProviderName",
                        "value": "Office 365",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 119,
                        "key": "Destination.MessagingProviderConfiguredFrom",
                        "value": "1",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 120,
                        "key": "Destination.MessagingProviderCloud",
                        "value": "Global",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 121,
                        "key": "Destination.MessagingProviderHostName",
                        "value": "5cjshm.onmicrosoft.com",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 122,
                        "key": "Destination.MessagingProviderUserName",
                        "value": "sqatestautomation@5cjshm.onmicrosoft.com",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 123,
                        "key": "Destination.MessagingProviderCertificatePassword",
                        "value": "0AA##0PV7#/UpeaeHwXI8b+g==+Rd63Vt8VsM3G91yz+iE4IVWAck7fP/YG3U8F+oa6iQ=",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 124,
                        "key": "Destination.MessagingProviderCertificate",
                        "value": "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",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 125,
                        "key": "Destination.MessagingProviderPassword",
                        "value": "0AA##0PV7#vROlrrh+SfW0uw==HMzEF/RUhCc5iKNZpSoqnbJ6pS85HaOCbLNVyFtHfw0=",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 126,
                        "key": "Destination.MessagingProviderApplicationId",
                        "value": "5556091a-8f10-41ed-88cd-41c43e8c3041",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 127,
                        "key": "Destination.MessagingProviderServer",
                        "value": "ps.outlook.com",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 128,
                        "key": "Destination.ScriptingLanguage",
                        "value": "0",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 129,
                        "key": "Destination.ExposedScriptCode",
                        "value": "Option Strict Off\r\n\r\nImports System\r\nImports System.Text\r\nImports System.Text.RegularExpressions\r\nImports System.IO\r\nImports System.Math\r\nImports Microsoft.VisualBasic\r\nImports Imanami.DataSyncServices.Scripting\r\n\r\nModule ImanamiExposedCode\r\n\r\n#Region \"Imanami Generated Code\"\r\n'<--- PowerTool Instance Definitions --->\t\r\n#End Region\r\n\r\n#Region \" User-definable code \"\r\n    Sub DTM_Startup(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Startup\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_BuildSourceQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildSourceQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowStarting(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.RowStarting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n\r\n    Sub DTM_BuildDestinationQuery(ByVal dtmsource As Object, ByVal args As QueryEventArgs) Handles DTM.BuildDestinationQuery\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanging(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanging\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowChanged(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowChanged\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdding(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdding\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowAdded(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowAdded\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleting(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleting\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowDeleted(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowDeleted\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinishing(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinishing\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFinished(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFinished\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_RowFailed(ByVal dtmsource As Object, ByVal args As JobEventArgs) Handles DTM.RowFailed\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n\r\n    Sub DTM_Shutdown(ByVal dtmsource As Object, ByVal args As EventArgs) Handles DTM.Shutdown\r\n        ' User-definable script goes here -----------------\r\n\r\n        ' -------------------------------------------------\r\n    End Sub\r\n#End Region\r\n\r\nend Module ' ImanamiExposedCode\r\n",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 130,
                        "key": "IsNotificationEnabled",
                        "value": "False",
                        "dataType": "System.Boolean",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 131,
                        "key": "ScheduledTask",
                        "value": "",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 132,
                        "key": "SmartGroupScheduleTask",
                        "value": "",
                        "dataType": "System.String",
                        "objectType": null
                    },
                    {
                        "action": 0,
                        "id": 133,
                        "key": "memberkey",
                        "value": "sAMAccountName",
                        "dataType": "System.String",
                        "objectType": null
                    }
                ],
                "delimiterSchema": null,
                "sourceSchema": null,
                "destinationSchema": null,
                "hasAccess": false
            },
            {
                "isTemplate": false,
                "jobInfo": {
                    "jobId": 8,
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
                    "created": "2024-06-04T10:08:43.89Z",
                    "modified": null,
                    "schedule": "",
                    "smartgroupSchedule": "",
                    "enabled": false,
                    "onFailure": "Abort",
                    "runOrder": 2,
                    "isEnable": true,
                    "action": 0,
                    "collectionId": 1,
                    "scheduledTask": null
                },
                "fieldsMap": [
                    {
                        "action": 0,
                        "sourceField": "",
                        "destinationField": "cn",
                        "id": 70,
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
                        "id": 71,
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
                        "id": 72,
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
                        "id": 73,
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
                        "id": 74,
                        "delimiter": "",
                        "transform": "Static:value=password123",
                        "forCreateOnly": true,
                        "objectType": 1,
                        "isKey": false,
                        "options": "{\"passwordLength\":7,\"includeUppercaseAlphabets\":true,\"includeLowercaseAlphabets\":true,\"includeDigits\":true,\"includeSpecialSymbols\":false,\"specialSymbols\":\"%^&*(\",\"excludeSimilarSymbols\":false,\"managerNotification\":false,\"passwordType\":0}"
                  
```
