---
title: "Non-Triggerable Objects"
description: "Learn how to track changes for Non-Triggerable Salesforce objects using Field History Tracking"
sidebar_position: 2
---

# Non-Triggerable Objects

Some **Standard Salesforce objects are not triggerable**, which means it is not possible to generate and deploy triggers for them in the Salesforce environment. Because of this limitation, **Netwrix Platform Governance** cannot block the creation of records for these objects.

As a result, the tracking process for these objects is different.

For **Non-Triggerable objects**, such as **Price Book Entry**, **Netwrix Platform Governance** uses Salesforce’s built-in **Field History Tracking** to monitor changes.

---

## Enable Tracking for a Non-Triggerable Object

Follow these steps to enable tracking:

### 1. Open the Object in Salesforce

Navigate to: **Setup → Object Manager**

Then select the object you want to track.

### 2. Enable Field History Tracking

If Field History Tracking is not already enabled:

1. Go to **Details**
2. Click **Edit**
3. Enable **Track Field History**
4. Click **Save**

### 3. Select Fields to Track

1. Go to **Fields & Relationships**
2. Click **Set History Tracking**
3. Select the fields you want to track
4. Click **Save**

### 4. Configure Tracking in the Netwrix Configuration App

1. Open the **Netwrix Configuration** app.
2. Navigate to the **Data Tracking - Object Config** tab.
3. Set the object's tracking mode to: **Tracked, Non-Blocking**
4. Click **Save All Records**.

:::important
If a user attempts to configure one of these objects as **Tracked, Blocking**, Salesforce will return a validation error.
:::

## Enable the Non-Triggerable Standard Object Data Scanner

To track changes for non-triggerable objects, the **Non-Triggerable Standard Object Data Scanner** must be enabled in the Netwrix Lightning app.

### Enable the Scanner

1. Open the **Netwrix Dashboard**.
2. Navigate to: **Scanner → Scheduler**
3. Enable **Non-Triggerable Standard Object Data Scanner**.

![Non-Triggerable Standard Object Data Scanner](/images/platgovsalesforce/change_management/data_scan_scheduler.webp)

## How the Data Scanner Works

The **Data Scanner runs every hour** and searches for new **Field History records** created since the previous scan.

When new field history records are found, the scanner:

1. Identifies the data records that were modified.
2. Creates a **Change Log** for each updated record.

Each Change Log is marked as either:

- **Compliant** — if an open and approved **Change Request** is associated with the record update.
- **Non-Compliant** — if no approved Change Request can be associated with the update.

:::important
A **Change Log is not created when a data record is deleted**, because Salesforce does not generate **Field History records** for deleted records.
:::
