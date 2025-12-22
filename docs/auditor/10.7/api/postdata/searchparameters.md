---
title: "Search Parameters"
description: "Search Parameters"
sidebar_position: 20
---

# Search Parameters

Send the search parameters in the POST request body to narrow down the search results returned by
the [/netwrix/api/v1/activity_records/search](/docs/auditor/10.7/api/searchactivityrecords.md) endpoint. The Search
parameters file includes one or more filters with operators and values (e.g., to find entries where
_data source_ is _SharePoint_); it may also contain a [Continuation Mark](/docs/auditor/10.7/api/postdata/continuationmark.md).
Generally, the Search parameters file looks similar to the following:

**XML:**
```xml
<?xml version="1.0" encoding="utf-8"?>
<ActivityRecordSearch xmlns="http://schemas.netwrix.com/api/v1/activity_records/">
    <ContinuationMark>Continuation mark</ContinuationMark>
    <FilterList>
        <Filter1>Value</Filter1>
        <Filter2>Value1</Filter2>
        <Filter2>Value2</Filter2>
        <Filter3 Operator="MatchType1">Value1</Filter3>
        <Filter3 Operator="MatchType2">Value2</Filter3>
        <Filter4>Value1</Filter4>
        <Filter4 Operator="MatchType">Value2</Filter4>
    </FilterList>
</ActivityRecordSearch>
```

**JSON:**
```json
{
    "ContinuationMark": "Continuation Mark",
    "FilterList": {
        "Filter1": "Value",
        "Filter2": ["Value1", "Value2"],
        "Filter3": {
            "MatchType1": "Value1",
            "MatchType2": "Value2"
        },
        "Filter4": [
            "Value1",
            {"MatchType": "Value2"}
        ]
    }
}
```

Ensure to pass information about transferred data, including `Content-Type:application/xml` or
`application/json `and encoding. The syntax greatly depends on the tool you use.

## Schema

| Format | Schema description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| XML    | The file must be compatible with the XML schema. On the computer where Auditor Server resides, you can find XSD file under _Netwrix_Auditor_installation_folder\Audit Core\API Schemas_. The `ActivityRecordSearch` root element includes the `FilterList `element with one or more `Filter `elements inside. The root element may contain a `ContinuationMark `element. Each `Filter `specified within the `FilterList `must have a value to search for. The element may also include a modifier—a match type operator. minOccurs="0" indicates that element is optional and may be absent in the Search parameters. ![filterschema](/images/auditor/10.7/api/postdata/filterschema.webp) |
| JSON   | The `FilterList `object includes with one or more `Filter `entries inside. JSON may contain a `ContinuationMark `object. Each `Filter `specified within the `FilterList `must have a value to search for. The entry may also include a modifier—a match type operator.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

Review the following for additional information:

- [Filters](/docs/auditor/10.7/api/filterreference/filters.md)
- [Operators](/docs/auditor/10.7/api/filterreference/filteroperators.md)

## Example

**XML:**
```xml
<?xml version="1.0" encoding="utf-8"?>
<ActivityRecordSearch xmlns="http://schemas.netwrix.com/api/v1/activity_records/">
    <FilterList>
        <Who Operator="NotEqualTo">Administrator</Who>
        <MonitoringPlan>My Hybrid Cloud enterprise</MonitoringPlan>
        <DataSource>Active Directory</DataSource>
        <DataSource Operator="StartsWith">Exchange</DataSource>
        <Action>Removed</Action>
        <Action>Added</Action>
        <ObjectType Operator="DoesNotContain">Group</ObjectType>
        <When>
            <From>2016-01-16T16:30:00+11:00</From>
            <To>2017-01-01T00:00:00Z</To>
        </When>
    </FilterList>
</ActivityRecordSearch>
```

**JSON:**
```json
{
    "FilterList": {
        "Who": {
            "NotEqualTo": "Administrator"
        },
        "MonitoringPlan": "My Hybrid Cloud enterprise",
        "DataSource": [
            "Active Directory",
            { "StartsWith": "Exchange" }
        ],
        "Action": [
            "Added",
            "Removed"
        ],
        "ObjectType": {
            "DoesNotContain": "Group"
        },
        "When": {
            "From": "2016-01-16T16:30:00+11:00",
            "To": "2017-01-01T00:00:00Z"
        }
    }
}
```
