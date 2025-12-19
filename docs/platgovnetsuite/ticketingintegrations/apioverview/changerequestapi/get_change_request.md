---
title: "Get Change Request"
description: "Get Change Request"
sidebar_position: 10
---

# Get Change Request

Returns the Change Request associated with an external ID.

## Request

**Name**

**URL**:
`https://<account id xxx>.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=customscript_flo_int_change_request_api&deploy=1&actionType=getChangeRequest`

**HTTP Method**: GET

### URL Parameters

**Name** / **Value**

**externalId**: `<external_ticket_id>`

:::note
URL parameters are case sensitive and mandatory.
:::

### Sample Request URL

```
https://tstdrv1715311.restlets.api.netsuite.com/app/site/hosting/restlet.nl?
script=customscript_flo_int_change_request_api&deploy=1&actionType=getChangeRequest&externalId=SMPL-0001
```

### Request Headers

This API uses OAuth 1.0 type for its request headers and Token Based Authentication for user
credentials. Header tokens should be encoded in HMAC SHA256.

### Format

**Authorization**: `<_encoded authentication code_>`

### Sample Request Header

`Authorization: OAuth oauth_consumer_key="xxx", oauth_nonce="xxx", oauth_signature="xxx", oauth_signature_method="HMAC-SHA256", oauth_timestamp="1698722057", oauth_token="xxx", oauth_version="1.0",realm="xxx"`

## Response

Returns a JSON format string.

### Object Definition

**Name** / **Type**

**status**: string

**message**: string

**data**: JSON object

### Data Object Definition

**Name** / **Type**

**name**: string

**description**: string

**externalCrId**: string

**link**: string

**crStatus**: JSON object

**approvalStatus**: JSON object

**completionStatus**: JSON object

**changeLevel**: JSON object

**changePolicy**: JSON object

**affectedBundleId**: string

**customizations**: Array of JSON objects

**proposedCustomizations**: Array of strings

### crStatus JSON Object

**Name** / **Type**

**id**: string

**name**: string

### approvalStatus JSON Object

**Name** / **Type**

**id**: string

**name**: string

### completionStatus JSON Object

**Name** / **Type**

**id**: string

**name**: string

### changeLevel JSON Object

**Name** / **Type**

**id**: string

**name**: string

### changePolicy JSON Object

**Name** / **Type**

**id**: string

**name**: string

### customizations JSON Object

**Name** / **Type**

**internalId**: string

**scriptId**: string

**name**: string

### Response JSON Object

```
{
    "status": success or failed,
    "message": Server response message,
    "data": {
        "name": <change request name>,
        "description": <change request description>,
        "externalCrId": "NS-0000",
        "link": <link to the change request record>,
        "crStatus": {
            "id": <status id>,
            "name": <status display text>
        },
        "approvalStatus": {
            "id": <approval status id>,
            "name": <approval status display text>
        },
        "completionStatus": {
            "id": <completion status id>,
            "name": <completion status display text>
        },
        "changeLevel": {
            "id": <change level id>,
            "name": <change level display name>
        },
        "changePolicy": {
            "id": <change policy id>,
            "name": <change policy display name>
        },
        "affectedBundleId": <bundle ids>,
        "customizations": [
            {
                "internalId": <customization id>,
                "scriptId": <customization script id>,
                "name": <customization name>
            }
        ],
        "proposedCustomizations": [<array of customization script ids>]
    }
}
```

### Response Messages

**Message**

**"Change Request retrieved successfully."**: Successfully pulled a list of customizations and
associated ERD links.

### Error Messages

**Message**

**"Unable to load Change Request. External ID: xxxx"**: There is an error with the change request.

Error messages are returned if any exceptions are encountered.

### Sample Response

```
{
    "status": "success",
    "message": "Change Request retrieved successfully.",
    "data": {
        "name": "xxxx",
        "description": "<p>asas</p>",
        "externalCrId": "NS-0000",
        "link": "/app/common/custom/custrecordentry.nl?rectype=1079&id=14755&compid=TSTDRV1715311",
        "crStatus": {
            "id": "",
            "name": ""
        },
        "approvalStatus": {
            "id": "",
            "name": ""
        },
        "completionStatus": {
            "id": "",
            "name": ""
        },
        "changeLevel": {
            "id": "5",
            "name": "Full Software Development Lifecycle"
        },
        "changePolicy": {
            "id": "1",
            "name": "Default Policy"
        },
        "affectedBundleId": "",
        "customizations": [
            {
                "internalId": "15701",
                "scriptId": "",
                "name": "Accountant (User Role)"
            }
        ],
        "proposedCustomizations": []
    }
}
```

## Development

The Change Request API is developed using a RESTlet with API version 2.1.

**Script Name**: Strongpoint Int Change Request API

**Script ID**: customscript_flo_int_change_request_api

**Filename**: StrongpointIntegrationChangeRequestAPI.js
