---
title: "Get Impact Analysis"
description: "Get Impact Analysis"
sidebar_position: 50
---

# Get Impact Analysis

Returns the impact analysis data of the customizations attached to a Change Request. Customization
impact analysis data are categorized as **Safe to modify**, **Not safe to modify** and **Inactive**.

## Request

**Name**

**URL**:
`https://<account id xxx>.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=customscript_flo_int_change_request_api&deploy=1&actionType=getImpactAnalysis`

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
script=customscript_flo_int_change_request_api&deploy=1&actionType=getImpactAnalysis&externalId=SMPL-0001
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

**safe**: Array of JSON objects

**notSafe**: Array of JSON objects

**notActive**: Array of JSON objects

### Safe Object Definition

**Name** / **Type**

**id**: string

**name**: string

### Not Safe Object Definition

**Name** / **Type**

**object**: string

**warning**: string

**impactedCustomizations**: Array of JSON object

### Impacted Customizations Object Definition

**Name** / **Type**

**name**: string

**link**: string

### Not Active Object Definition

**Name** / **Type**

**id**: string

**name**: string

### Response JSON Object

```
{
    "status": success or failed,
    "message": Server response message,
    "data":
        {
            "safe": [
                        {
                            "id": <customization id>,
                            "name": <customization name>
                        }
            ],
            "notSafe": [
                {
                    "object": <attached customization record name>,
                    "warning": <impact analysis warning message>,
                    "impactedcustomizations": [
                        {
                            "name": <customization name>,
                            "link": <link to customization>
                        }           
                    ]
                }
            ],
            "notActive": [
                        {
                            "id": <customization id>,
                            "name": <customization name>
                        }                    
            ]
        }
}
```

### Response Messages

**Message**

**"Impact Analysis retrieved successfully."**: Successfully pulled impact analysis for the
customizations attached to the change request.

**"No Impact Analysis detected."**: No impact analysis detected, either no customizations attached or
the attached customizations do not have impact analysis data available.

### Error Messages

**Message**

**"Unable to load Impact Analysis. External ID: xxxx"**: There is an error with the change request.

Error messages are returned if any exceptions are encountered.

### Sample Response

```
{
    "status": "success",
    "message": "Impact Analysis retrieved successfully",
    "data":
        {
            "safe": [
                {
                    "id": "39117",
                    "name": "QA 2463 New User Event Record (Deployment)"
                }
            ],
            "notSafe": [
                {
                    "object": "Customization (Record)",
                    "warning": "DEPENDENT SCRIPTS,RECENTLY USED,DATA SOURCE,DEPENDENT MANAGED BUNDLE",
                    "impactedcustomizations": [
                        {
                            "name": "Strongpoint Agent Large Control Mailer (Scheduled Script)",
                            "link": "<a target=\"detail\" href=\"/app/site/hosting/scriptlet.nl?
                            script=customscript_flo_go_to_cust&deploy=1&cid=60229\">
                            Strongpoint Agent Large Control Mailer (Scheduled Script)</a>"
                        }
                    ]                
                }
            ],
            "notActive": [
                {
                    "id": "39111",
                    "name": "QA Test New User Event Record (Deployment)"
                }                    
            ]
        }
}
```

## Development

The Change Request API is developed using a RESTlet with API version 2.1.

**Script Name**: Strongpoint Int Change Request API

**Script ID**: customscript_flo_int_change_request_api

**Filename**: StrongpointIntegrationChangeRequestAPI.js
