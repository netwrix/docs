---
title: "Scan Depth and Worker Configuration"
description: "Configuring recursion depth and concurrent workers"
sidebar_position: 40
---

# Scan Depth and Worker Configuration

The CIFS/SMB connector supports configurable scan depth and concurrent worker threads to balance thoroughness with performance. These settings are configured in Step 3 (scan setup) of the Connect Source wizard when the **Access** scan option is enabled.

## Scan Depth

Scan depth controls how many levels of subdirectories the connector traverses within each share.

| Setting | Description |
| --- | --- |
| **Default** | 50 levels deep |
| **Custom** | Set to any positive integer |

The default depth of 50 covers the vast majority of file server hierarchies. Increase this value only if your environment has deeply nested folder structures that exceed 50 levels.

:::note
Setting scan depth to a very high number does not significantly impact performance if the actual folder hierarchy is shallower — the connector stops when there are no more subdirectories to traverse.
:::

## Worker Threads

Worker threads control how many directories are scanned concurrently. More threads mean faster scans but higher load on the file server.

| Setting | Description |
| --- | --- |
| **Default** | 3 concurrent workers |
| **Range** | 1 to 20 workers |

Guidelines for choosing a worker count:

| Workers | Use Case |
| --- | --- |
| **1–3** | Conservative scanning with minimal file server impact (default) |
| **5–10** | Balanced performance for most environments |
| **10–20** | Maximum parallelism for large file servers with high I/O capacity |

:::warning
Increasing worker count improves scan speed but also increases load on the file server. Start with the default of 3 and increase gradually based on file server capacity and observed scan duration.
:::

## Configuration Location

Both settings are found in the **Access scan options** section of the scan setup step, which appears when the **Access** scan type is enabled during source group creation.

## Related Topics

- [Share Enumeration and Filtering](/docs/accessanalyzer/1_0/connectors/source/cifs/shareenumeration) — Controlling which shares are scanned
- [File-Level vs Share-Level Permissions](/docs/accessanalyzer/1_0/connectors/source/cifs/filevssharelevel) — Permission scanning granularity
