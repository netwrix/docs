---
description: >-
  This article explains what a "File Read-Write" event is on the Endpoint Protector Server and provides instructions for setting up alerts and tracking existing alerts.
keywords:
  - File Read-Write event
  - Endpoint Protector
  - alert setup
products:
  - endpoint-protector
sidebar_label: File Read-Write Event Overview
tags:
  - enforced-encryption-and-easylock
title: What Is a "File Read-Write" Event?
knowledge_article_id: kA0Qk0000002BAiKAM
---

# What Is a "File Read-Write" Event?

## Question

What is a "File Read-Write" event on the Endpoint Protector Server?

## Answer

On the Endpoint Protector Server, a "File Read-Write" event monitors scenarios where files are accessed for both reading and writing, such as when editing a document. Administrators can set up alerts for these events to track and respond to such activities effectively.

### Setting Up a "File Read-Write" Alert

1. Navigate to **Device Control Alerts** in the Endpoint Protector console as root, Super Admin, or Device Control Admin.
2. Click **Create** to start setting up a new alert.
3. Configure the alert information:
   - **Event:** Select **File Read-Write** from the drop-down menu.
   - **Administrators:** Choose the administrators who should receive alert notifications.
   - **Alert Name:** Provide a meaningful name for the alert.
4. Specify device types and devices:
   - **Device Type:** Choose the type of device (for example, USB, external hard drive) where you want the alert to be active.
   - **Device:** Select the specific device(s) to which the alert should apply.
5. Select monitored entities:
   - Choose which groups, computers, or users should be monitored for this event.
6. Click **Save** to finalize the alert setup.

### Tracking Existing Alerts

1. Navigate to **Log Reports** within the **Reports and Analysis** section.
2. In **Log Reports**, go to **Filters** > **Events**.
3. Select **File Read-Write** from the drop-down menu.
4. Click **Apply** to view events that match your criteria.