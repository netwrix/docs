---
title: "Manage Scanners"
description: "View scanner health, edit scanner configuration, and delete scanners in Access Analyzer"
sidebar_position: 40
---

# Manage Scanners

The Scanners page lists all registered scanner nodes and their current status. Navigate to **Configuration** > **Scanners** to access it.

## Scanners table

Each row in the table represents one registered scanner.

| Column | Description |
|--------|-------------|
| Name / IP | Hostname or IP address of the scanner host |
| Labels | Labels assigned to the scanner, displayed as chips. If a scanner has more than two labels, the first two are shown with an overflow count (for example, **+3**). Hover over the count to see all labels. |
| Source Groups | Number of source groups that target this scanner |
| Sources | Total number of sources assigned to this scanner |
| Scanning | Number of sources being scanned at this time |
| Health Status | Current health of the scanner node |
| Scan Status | Whether the scanner is idle or actively running a scan |
| Version | Scanner software version. If an update is available, an **Update** action appears. |

## Health status

| Status | Color | Meaning |
|--------|-------|---------|
| Healthy | Green | The scanner node is reachable and operating normally |
| Warning | Yellow | The node is reachable but under resource pressure (disk, memory, or CPU) |
| Error | Red | The node is reachable but in an unhealthy state |
| Offline | Gray | The node is not reachable from the Access Analyzer server |

Scans may perform poorly on a scanner in Warning state — consider resolving the resource pressure before scheduling large scans. Investigate the scanner host when the status is Error. An Offline scanner cannot run scans — source groups that target it will not execute until the scanner comes back online or a different scanner with the matching label becomes available.

## Scan status

| Status | Color | Meaning |
|--------|-------|---------|
| Idle | Gray | No scans are running on this scanner |
| In Progress | Blue | One or more scans are running |

## Search scanners

Use the search field at the top of the page to filter the scanner list. The search matches against scanner names, IP addresses, and label values. Results update as you type.

## Connect a scanner to source groups

If a scanner has no associated source groups, a **+ Connect source** action appears on its row. Click it to assign source groups that will use this scanner.

To route scans from a source group to a specific scanner or scanner pool, set the scanner location when configuring the source group. Match the source group's scanner selection to the label on the scanner you want to use.

## Delete a scanner

:::warning
Deleting a scanner removes it from the cluster. Source groups that target the deleted scanner's labels will not be able to run scans unless another scanner with the same labels is available.
:::

To delete a scanner:

1. Navigate to **Configuration** > **Scanners**.
2. Click the delete icon on the scanner row.
3. Confirm the deletion.

A scanner can only be deleted when no scan jobs are running on it. If scans are in progress, wait for them to complete before deleting. The system scanner (built-in scanner on the Access Analyzer server) cannot be deleted.
