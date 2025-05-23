---
sidebar_position: 1526
title: Integration Event Log Fields
---

Filter: 

* All Files

Submit Search

# Integration Event Log Fields

This section describes how the add-on fills in the Netwrix Auditor **Integration** event log fields with data retrieved from Activity Records.

The Activity Record structure is described in the [Reference for Creating Activity Records](../../API/ActivityRecordReference "Reference for Creating Activity Records")topic.

| Event log field name | Filled in with value | Details |
| --- | --- | --- |
| Source | **NA****{Data Source Name}**  -OR-  **Netwrix \_Auditor\_Integration\_API** | Depending on *SetDataSourceAsEventSource* in-script parameter. |
| EventID | **{Calculated by add-on}**  -OR-  **0** | Depending on *GenerateEventId* in-script parameter (calculation result also depends on *IncludeDataSourceToMakeEventId* parameter — if *GenerateEventId* = *True*). |
| Task Category | **{DataSource ID}**  -OR-  **1** | Depending on *SetDataSourceAsEventCategory* in-script parameter. |

See the [Define Parameters](Parameters "Define Parameters") topic for additional information.

EventData is filled in with data from the Activity Record fields as follows:

| Entry in EventData | Activity Record field |
| --- | --- |
| DataSource | {DataSource} |
| Action | {Action} |
| Message | {Action ObjectType} |
| Where | {Where} |
| ObjectType | {ObjectType} |
| Who | {Who} |
| What | {What} |
| When | {When} |
| Workstation | {Workstation} |
| Details | {Details} |

Details are filled in only if this Activity Record field is not empty.

[![](../../../../../../static/images/Auditor_10.7/Content/Resources/Images/Auditor/Addon/EventLogExample_thumb_0_0.png)](../../../Resources/Images/Auditor/Addon/EventLogExample.png)