---
title: "Data Tracking - Change Logs"
description: "Data Tracking - Change Logs"
sidebar_position: 3
---

# Data Tracking - Change Logs

## Overview

Change Logs allow you to view details about modifications made to records on tracked objects. 

**Data Tracking – Change Logs** can be accessed from the **Change Logs** tab by selecting the **Data Tracking Changes** list view.

1. Click the **Change Logs** tab.
2. Change the pinned list view from **Recently Viewed** to **Data Tracking Changes**.
3. Click a **Change Log Name** to open the record.

![Data Tracking Changes - ListView](/images/platgovsalesforce/change_management/data_tracking_changes_listview.webp)

:::info
The platform supports different change tracking behaviors that determine how changes are recorded and enforced when modifications are made to tracked records.

#### Tracked, Non-Blocking

When an object is configured as **Tracked, Non-Blocking**, the changes are monitored and recorded in Change Logs.

- If the change is associated with an **approved Change Request**, the system records it as a **Compliant Change Log**.
- If the change occurs **without an approved Change Request**, the system records it as a **Non-Compliant Change Log**.

This mode allows users to complete their changes while ensuring that all activity is tracked and evaluated for compliance.

#### Tracked, Blocking

When an object is configured as **Tracked, Blocking**, the system enforces stricter change control.

- If a change is associated with an **approved Change Request**, the system records it as a **Compliant Change Log**.
- If a user attempts to make a change **without an approved Change Request**, the system blocks the operation.

In this case, an error message is displayed and the change is not saved. This mode ensures that all modifications follow the required approval process before being applied.

:::

Alternatively, you can access Change Logs from the following navigation path:

**Netwrix Dashboard → Reports → Change Enablement → Data Tracking Change Logs**

---

## Reviewing Data-Record Change Logs

The **Netwrix Platform Governance** Change Log has some features specific to data-record changes:

![CPQ Change Log](/images/platgovsalesforce/change_management/discount_schedule_change_log.webp)

- **Customization:** Data record Customization for the tracked object.
- **Metadata Type:** Always blank, because it’s not metadata.
- **Field Name:** Always “Data Change Tracking”. Can be used for creating filtered Change Log Reports and List Views.
- **Change Overview:** Data record name, API Name of the tracked object, and operation that was done.
- **Data Record Id:** Data record’s Salesforce Id. Use this to URL-hack directly to the updated record.
- **Data Record Name:** Data record name.
- **Data Record SObject API:** The tracked object’s API name.
- **Filters:** List of filters whose criteria matched this record. (Only populated when an object has filters applied.)

---

## Filtering Change Logs

In some cases, you may want **Change Logs** to be created only when specific conditions are met.

For example:
- You may want to create an **Opportunity Change Log** only when an admin updates specific fields on a **Closed Won Opportunity**.
- You may want to **exclude Change Logs** for **User-Defined CPQ Discount Schedules**.

**Netwrix Platform Governance** allows you to apply filters to tracked objects using either a **Report** or a custom **Apex Class**.

---

### Using a Report as a Filter

Using a **Report** is the simplest way to implement a filter.

Create a report that returns a list of **record Ids**. If a tracked record update matches the report’s filter criteria, a **Change Log** will be created for that record.

#### Report Requirements

The report must meet the following requirements:

- The **Show Me** filter must return **all records being filtered**.
- The **standard date filter** must be set to the **Created Date** of the record type being filtered.
- The **first column** in the report must be the **Id** of the record.

Example: Do not create Change Logs for changes in “User-Defined” CPQ Discount Schedules
This report returns only the Discount Schedule Ids of records that do not have the “User Defined” checkbox checked.

![Data Tracking - Report Filter](/images/platgovsalesforce/change_management/data_tracking_report_filter.webp)

---

### Using an Apex Class as a Filter

If your filtering logic is too complex to implement with a report, you can create a custom **Apex Class**.

**Netwrix Platform Governance** provides support for custom logic by allowing Apex classes to act as filters.

#### Apex Class Requirements

The Apex class must:

- Be declared as **global**.
- Implement the **`FLODocs.IChangeLogFilter`** interface.

To implement this interface, the class must include the following method:

```apex
global Set<Id> getFilteredIds(Datetime start, Datetime end)
```

:::important
The start and end times should be used by your filtering logic to return a Set of record Ids that have been modified during that time interval.
:::

#### Example: Do not create Change Logs for changes in “User-Defined” CPQ Discount Schedules.

Here’s an example that does the same job as the Report filter above.

```apex
global without sharing class DiscountScheduleFilter implements FLODocs.IChangeLogFilter {
    global Set<Id> getFilteredIds(Datetime lastModifiedStart, Datetime lastModifiedEnd) {
        Map<Id,SBQQ__DiscountSchedule__c> schedules
            = new Map<Id,SBQQ__DiscountSchedule__c>([SELECT Id
                                                   FROM SBQQ__DiscountSchedule__c
                                                   WHERE SBQQ__UserDefined__c = false
                                                   AND LastModifiedDate > :lastModifiedStart
                                                   AND LastModifiedDate < :lastModifiedEnd]);
        return schedules.keySet();
    }
}
```

---

### Applying a Filter to a Tracked Object

After the **Netwrix Platform Governance** scanner runs, a **Customization** record is automatically created for the corresponding **Report** or **Apex Class**.

To configure the filter:

1. Navigate to the **Customization** record associated with the filter.
2. In the **Change Enablement** tab, locate the **Filtered Data Records** field.
3. Update this field by selecting the **Data Record Customization** that corresponds to the tracked object.


#### Example: Apply the `DiscountScheduleFilter` Apex class to the **CPQ Discount Schedule** object by linking the appropriate **Data Record Customization** in the **Filtered Data Records** field.

![DiscountScheduleFilter - Apex Class Filter](/images/platgovsalesforce/change_management/data_tracking_apex_filter.webp)


