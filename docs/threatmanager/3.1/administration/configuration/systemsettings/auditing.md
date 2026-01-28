---
title: "Auditing Page"
description: "Auditing Page"
sidebar_position: 10
---

# Auditing Page

The Auditing page within the System Settings interface contains the Audit History table with
information about all application events.

![System Settings interface showing the Auditing page](/images/threatmanager/3.0/administration/configuration/systemsettings/interface.webp)

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
