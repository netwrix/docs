---
title: "Activity Records"
description: "Activity Records"
sidebar_position: 30
---

# Activity Records

In Netwrix terms, one operable chunk of information is called the Activity Record. Netwrix Auditor
Integration API processes both XML and JSON Activity Records. The Activity Records have the format
similar to the following—the exact schema depends on operation (input or output).

**XML:**
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ActivityRecordList xmlns="http://schemas.netwrix.com/api/v1/activity_records/">
    <ActivityRecord>
        <Who>Who</Who>
        <ObjectType>Object Type</ObjectType>
        <Action>Action</Action>
        <What>What</What>
        <When>When</When>
        <Where>Where</Where>
        <MonitoringPlan>
            <ID>Unique ID</ID>
            <Name>Name</Name>
        </MonitoringPlan>
        <DataSource>Data source</DataSource>
        <Item>
            <Name>Item name (Item type)</Name>
        </Item>
        <DetailList>
            <Detail>
                <Before>Before Value</Before>
                <After>After Value</After>
                <PropertyName>Property</PropertyName>
                <Message>Text</Message>
            </Detail>
        </DetailList>
    </ActivityRecord>
    <ActivityRecord>...</ActivityRecord>
</ActivityRecordList> 
```
 
**JSON:**
```json
[
    {
        "Action": "Action",
        "MonitoringPlan": {
            "ID": "Unique ID",
            "Name": "Name"
        },
        "DataSource": "Data source",
        "Item": {
            "Name": "Item name (Item type)"
        },
        "DetailList": [
            {
                "Before": "Before Value",
                "After": "After Value",
                "PropertyName": "Property",
                "Message": "Text"
            }
        ],
        "ObjectType": "Object Type",
        "What": "What",
        "When": "When",
        "Where": "Where",
        "Who": "Who"
    },
    {...}
] 
```

To feed data from a custom audit source to Netwrix Auditor, send a POST request containing Activity
Records. [Write Activity Records](/docs/auditor/10.9/api/writeactivityrecords.md)

## Schema

The Activity Records you want to feed to Netwrix Auditor must be compatible with input schema. The
output schema resembles the input schema and can be used to validate Activity Records returned
by Netwrix Auditor before further data parsing.

| Format | Schema description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| XML    | The file must be compatible with the XML schema. On the computer where Auditor Server resides, you can find XSD file under _Netwrix_Auditor_installation_folder\Audit Core\API Schemas_. The `ActivityRecordList` root element includes the `ActivityRecord `elements. Each `ActivityRecord` contains values in the `Who`, `When`, `Where`, etc. fields. The `MonitoringPlan` element contains sub-elements such as `Name `and `ID`, the `Item `element contains `Name`. Both `MonitoringPlan` and `Item `are optional for input Activity Records. The `DetailList `element is optional too, it may include one or more `Detail `entries. The `Detail `element may contain sub-elements with values (e.g., before and after values). For input Activity Records, the data source is automatically set to Netwrix API. minOccurs="0" indicates that element is optional and may be absent when writing data to the Audit Database. |
| JSON   | Activity Records are sent as an array collected within square brackets [ ]. Each `ActivityRecord` object is collected in braces {} and contains values in the `Who`, `When`, `Where`, etc. fields. The `DetailList `field is not mandatory, it may include one or more detail. The `Detail `field may contain sub-fields with values (e.g., before and after values). For input Activity Records, the data source is automatically set to Netwrix API.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

## Example

The examples below show an output Activity Record.

**XML:**
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<ActivityRecordList xmlns="http://schemas.netwrix.com/api/v1/activity_records/">
    <ActivityRecord>
        <Action>Modified</Action>
        <MonitoringPlan>
            <ID>{42F64379-163E-4A43-A9C5-4514C5A23798}</ID>
            <Name>Compliance</Name>
        </MonitoringPlan>
        <DataSource>Exchange Online</DataSource>
        <Item>
            <Name>mail@enterprise.onmicrosoft.com (Office 365 tenant)</Name>
        </Item>
        <ObjectType>Mailbox</ObjectType>
        <What>Shared Mailbox</What>
        <When>2017-03-17T09:37:11Z</When>
        <Where>BLUPR05MB1940</Where>
        <Who>admin@enterprise.onmicrosoft.com</Who>
        <DetailList>
            <Detail>
                <Before>1</Before>
                <After>2</After>
                <PropertyName>Custom_attribute</PropertyName>
            </Detail>
        </DetailList>
    </ActivityRecord>
</ActivityRecordList> 
```
 
**JSON:**
```json
[
    {
        "Action": "Modified",
        "MonitoringPlan": {
            "ID": "{42F64379-163E-4A43-A9C5-4514C5A23798}",
            "Name": "Compliance"
        },
        "DataSource": "Exchange Online",
        "Item": {
            "Name": "mail@enterprise.onmicrosoft.com (Office 365 tenant)"
        },
        "ObjectType": "Mailbox",
        "What": "Shared Mailbox",
        "When": "2017-03-17T09:37:11Z",
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
