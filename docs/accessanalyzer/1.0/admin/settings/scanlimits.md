---
title: "Concurrent Scan Limits"
description: "Configuring maximum concurrent scan execution"
sidebar_position: 20
---

# Concurrent Scan Limits

Access Analyzer limits the number of scans that can run simultaneously to manage system resource consumption. Administrators configure these limits based on available server capacity.

## Configuration

To configure scan limits:

1. Navigate to **Settings** in the sidebar.
2. Locate the **Concurrent Scan Limits** section.
3. Set the desired values and click **Save**.

## Available Settings

| Setting | Description | Default |
|---|---|---|
| **Max Concurrent Access Scans** | Maximum number of access scans running at the same time | 5 |
| **Max Concurrent Sensitive Data Scans** | Maximum number of sensitive data scans running at the same time | 3 |
| **Max Total Concurrent Scans** | Combined limit across all scan types | 8 |

## Behavior When Limits Are Reached

When a scan is triggered (manually or by schedule) and the concurrent limit has been reached, the scan enters a **Pending** state and is queued. Queued scans start automatically as running scans complete, in first-in-first-out order.

:::note
Sensitive data scans are typically more resource-intensive than access scans. Consider setting a lower concurrent limit for sensitive data scans to avoid impacting system performance.
:::

## Monitoring

View the current number of running and queued scans from the **Scans** list page. The status column indicates whether each scan is **Running**, **Pending**, or **Queued**.
