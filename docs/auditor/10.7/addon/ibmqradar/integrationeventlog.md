---
title: "Integration Event Log Fields"
description: "Integration Event Log Fields"
sidebar_position: 60
---

# Integration Event Log Fields

This section describes how the add-on fills in the Netwrix Auditor **Integration** event log fields
with data retrieved from Activity Records.

The Activity Record structure is described in the
[Reference for Creating Activity Records](/docs/auditor/10.7/api/activityrecordreference.md)topic.

| Event log field name | Filled in with value                                                          | Details                                                                                                                                                             |
| -------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Source               | **NA\_\_**`{Data Source Name}`** -OR- **Netwrix \_Auditor_Integration_API\_\_ | Depending on _SetDataSourceAsEventSource_ in-script parameter.                                                                                                      |
| EventID              | **`{Calculated by add-on}`** -OR- **0**                                       | Depending on _GenerateEventId_ in-script parameter (calculation result also depends on _IncludeDataSourceToMakeEventId_ parameter — if _GenerateEventId_ = _True_). |
| Task Category        | **`{DataSource ID}`** -OR- **1**                                              | Depending on _SetDataSourceAsEventCategory_ in-script parameter.                                                                                                    |

See the [Define Parameters](/docs/auditor/10.7/addon/ibmqradar/parameters.md) topic for additional information.

EventData is filled in with data from the Activity Record fields as follows:

| Entry in EventData | Activity Record field |
| ------------------ | --------------------- |
| DataSource         | `{DataSource}`        |
| Action             | `{Action}`            |
| Message            | `{Action ObjectType}` |
| Where              | `{Where}`             |
| ObjectType         | `{ObjectType}`        |
| Who                | `{Who}`               |
| What               | `{What}`              |
| When               | `{When}`              |
| Workstation        | `{Workstation}`       |
| Details            | `{Details}`           |

Details are filled in only if this Activity Record field is not empty.

![eventlogexample_thumb_0_0](/images/auditor/10.7/addon/solarwinds/eventlogexample_thumb_0_0.webp)
