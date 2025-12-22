---
title: "Auditing"
description: "Auditing Page"
sidebar_position: 10
---

# Auditing Page

The Auditing page within the System Settings interface contains the Audit History table with
information about all application events.

Use the gear icon in the upper right corner of the console to open the Configuration menu. Then
select **System Settings** to open the System Settings interface.

Click **Auditing** in the navigation pane.

![System Settings interface on the Auditing page](/images/threatprevention/7.5/reportingmodule/configuration/systemsettings/interface.webp)

The Audit History table displays the following information:

- Log Level – The relative impact of the action. This feature is auto-assigned by the application.
- Log Type – The overall type of activity source of the change:

  - Audit – User-performed action
  - System – Change made by the application
  - Security – Log into the console

- Time Stamp – The date timestamp for when the changed occurred
- Description – A summary of the event that occurred
- User Name – The name of the user account that performed the audit event
- IP Address – The IP address for the user's client machine
- Category – The general categorization of the operation that was performed
- Sub-Category – The specific category of the operation
- Status – Indicates whether the event was completed successfully or failed
- Resource – Where applicable, identifies the related resource that was changed or accessed

The table is designed to display 10 records at a time, by default. However, you can set this to 50,
100, or 1,000 rows with the drop-down menu above the right corner of the table. There is a search
box above the left corner of the table. Page navigation buttons are below the table. You can also
export the data from the current page using the **Export CSV** button.

## Filter Audit Records

You can filter the records in the Audit History table on the Auditing interface.

- Select an option from the drop-down menu next to the search box. The options correspond to column
  headers in the Audit History table:

  - Log Level
  - Log Type
  - Username
  - IP Address
  - Category
  - Sub-Category
  - Status

  Then enter a search string in the search box to display records that contain the given text in
  the selected column.

- Click on **Today** to open the calendar along with several other options to filter the data for a
  specific time period. For example:

  - Click _Last 7 Days_ to view the audit data for the last week
  - Click _Custom Range_ and then use the calendar to specify a time range to view audit data for
    that period

  Click **Apply** after making a selection.
