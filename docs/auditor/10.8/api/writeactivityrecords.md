---
title: "Write Activity Records"
description: "Write Activity Records"
sidebar_position: 60
---

# Write Activity Records

## Endpoint

Write data to the Audit Database and to the Long-Term Archive. By default, all imported data is
written to a special Netwrix_Auditor_API database and recognized as the Netwrix API data source.
This data is not associated with any monitoring plan in the product. You can associate Activity
Records with a plan, in this case data will be written to a database linked to this plan. Make sure
the plan you specify is already created in Netwrix Auditor, the Netwrix API data source is added to
the plan and enabled for monitoring.

To feed data, send a POST request containing Activity Records. The user sending a request must be
assigned the Contributor role in Netwrix Auditor. After feeding data to the Audit Database it will
become available for search in the Netwrix Auditor client and through
[/netwrix/api/v1/activity_records/search](/docs/auditor/10.8/api/searchactivityrecords.md) and
[/netwrix/api/v1/activity_records/enum](/docs/auditor/10.8/api/retrieveactivityrecords.md) endpoints.

| Method | Endpoint                                                             | POST Data                                       |
| ------ | -------------------------------------------------------------------- | ----------------------------------------------- |
| `POST` | `https://{host:port}/netwrix/api/v1/activity_records/{?format=json}` | [Activity Records](/docs/auditor/10.8/api/postdata/activityrecords.md) |

Netwrix recommends limiting the input Activity Records file to 50MB and maximum 1,000 Activity
Records.

## Request Parameters

| Parameter      | Mandatory | Description                                                                                                                                                                                                                                                    |
| -------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `host:port`    | Yes       | Replace with the IP address or a name of your Netwrix Auditor Server host and port (e.g., _172.28.6.15:9699_, _stationwin12:9699_, _WKSWin2012.enterprise.local:9699_). With enabled HTTPS, provide the computer name as it appears in certificate properties. |
| `?format=json` | No        | Add this parameter to write data in JSON format. Otherwise, Netwrix Auditor Server will expect XML-formatted Activity Records and will consider JSON invalid.                                                                                                  |

## Response

| Request Status | Response                                                                                                                                                                                                                                |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Success        | The HTTP status code in the response header is 200 OK and the body is empty. `HTTP/1.1 200 OK `````` Server: Microsoft-HTTPAPI/2.0 `````` Content-Length: 0 `````` Content-Type: text/plain `````` Date: Fri, 08 Apr 2017 13:56:22 GMT` |
| Error          | The header status code is an error code. Depending on the error code, the response body may contain an error object. [See Response Status Codes for more information.](/docs/auditor/10.8/api/responsestatuscodes.md)                                          |

## Usage Example—Write Data

This example describes how to feed Activity Records to the Audit Database.

**Step 1 –** Send a POST request containing Activity Records.
[Activity Records](/docs/auditor/10.8/api/postdata/activityrecords.md) For example:

**XML:**

```bash
curl -H "Content-Type:application/xml; Charset=UTF-8" https://WKSWin2012:9699/netwrix/api/v1/activity_records/ -u Enterprise\NetwrixUser:NetwrixIsCool --data-binary @C:\APIdocs\Input.xml
```

```xml
<?xml version="1.0" encoding="utf-8"?>
<ActivityRecordList xmlns="http://schemas.netwrix.com/api/v1/activity_records/">
    <ActivityRecord>
        <Who>Admin</Who>
        <ObjectType>Stored Procedure</ObjectType>
        <Action>Added</Action>
        <What>Databases\ReportServer\Stored Procedures\dbo.sp_New</What>
        <MonitoringPlan>
            <Name>Integrations and custom sources</Name>
        </MonitoringPlan>
        <Where>WKSWin12SQL</Where>
        <When>2017-02-19T03:43:49-11:00</When>
    </ActivityRecord>
    <ActivityRecord>
        <Action>Modified</Action>
        <ObjectType>Mailbox</ObjectType>
        <What>Shared Mailbox</What>
        <When>2017-02-10T14:46:00Z</When>
        <Where>BLUPR05MB1940</Where>
        <Who>admin@enterprise.onmicrosoft.com</Who>
        <DetailList>
            <Detail>
                <PropertyName>Custom_Attribute</PropertyName>
                <Before>1</Before>
                <After>2</After>
            </Detail>
        </DetailList>
    </ActivityRecord>
</ActivityRecordList>
```

**JSON:**

```bash
curl -H "Content-Type:application/json; Charset=UTF-8" https://WKSWin2012:9699/netwrix/api/v1/activity_records/?format=json -u Enterprise\NetwrixUser:NetwrixIsCool --data-binary @C:\APIdocs\Input.json
```

```json
[
    {
        "Who": "Admin",
        "ObjectType": "Stored Procedure",
        "Action": "Added",
        "MonitoringPlan": {"Name": "Integrations and custom sources"},
        "What": "Databases\\ReportServer\\Stored Procedures\\dbo.sp_New",
        "Where": "WKSWin12SQL",
        "When": "2017-02-19T03:43:49-11:00"
    },
    {
        "Action": "Modified",
        "ObjectType": "Mailbox",
        "What": "Shared Mailbox",
        "When": "2017-02-10T14:46:00Z",
        "Where": "BLUPR05MB1940",
        "Who": "admin@enterprise.onmicrosoft.com",
        "DetailList": [
            {
                "PropertyName": "Custom_Attribute",
                "Before": "1",
                "After": "2"
            }
        ]
    }
]
```


Ensure to pass information about transferred data, including `Content-Type:application/xml` or
`application/json `and encoding. The syntax greatly depends on the tool you use.

**Step 2 –** Receive the response. Below is an example of a successful write request. The status is
200 OK and the body is empty.

```
HTTP/1.1 200 OK

Server: Microsoft-HTTPAPI/2.0

Content-Length: 0

Content-Type: text/plain

Date: Fri, 08 Apr 2017 13:56:22 GMT
```

**Step 3 –** Send more POST requests containing Activity Records if necessary.

**Step 4 –** Check that posted data is now available in the Audit Database. Run a search request to [/netwrix/api/v1/activity_records/search](/docs/auditor/10.8/api/searchactivityrecords.md) endpoint or use interactive search in the Netwrix Auditor client. For example:

![apiactivity_thumb_0_0](/images/auditor/10.8/api/apiactivity_thumb_0_0.webp)

**Step 5 –** For input Activity Records, the data source is set to Netwrix API.

![apiactivitydetails](/images/auditor/10.8/api/apiactivitydetails.webp)
