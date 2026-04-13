---
title: "Scans"
description: "Scan types, configuration, and scheduling in Access Analyzer source groups"
sidebar_position: 2
---

# Scans

A scan defines what Access Analyzer collects from a source and how often it runs. Each source in a group can have one or more scans, one per scan type. Scans are persistent configurations — each run of a scan produces a [scan execution](scan-executions.md).

## Scan types

| Scan Type | What it collects |
| --- | --- |
| **Access Scan** | Permissions, group memberships, and access rights across the data source. |
| **Sensitive Data Scan** | Files or objects that contain sensitive content, based on the classification policies configured under **Configuration** > **Sensitive Data**. |

A source group can be configured with one or both scan types. The scan types available depend on the connector:

| Source Type | Access Scan | Sensitive Data Scan |
| --- | --- | --- |
| Active Directory | Yes | No |
| File Server | Yes | Yes |
| Entra ID | Yes | No |
| SharePoint Online | Yes | Yes |

## Scan configuration

When you create a source group, the setup wizard collects scan parameters and creates scan configurations that apply to all sources added to the group. Each scan configuration includes:

- **Scan type** — Access Scan, Sensitive Data Scan, or both.
- **Schedule** — A cron expression that controls when the scan runs automatically. Leave the schedule empty to run scans manually only.
- **Scan parameters** — Source-type-specific settings such as scope, depth, and included paths. These vary by connector.

Individual sources can override the group-level scan configuration if their requirements differ from the group default.

## Max concurrent scans

The **Max Concurrent Scans** setting on a source group controls how many sources in that group can scan simultaneously. When a group-level scan run is triggered, Access Analyzer queues executions for all sources and processes them in batches up to the configured limit.

| Value | Effect |
| --- | --- |
| **1** (default) | Sources scan one at a time. Lowest resource impact; longest total run time for large groups. |
| **2–10** | Moderate parallelism. Suitable for most environments. |
| **11–30** | High parallelism. Use only when target infrastructure and network bandwidth can support it. |

The default value of 1 is intentionally conservative. Increase it only after confirming the target environment and network can sustain parallel connections without performance degradation.

:::note
The Max Concurrent Scans limit applies within a single source group. It does not limit scan activity across multiple source groups running simultaneously.
:::

## Schedules

Scans run on a cron schedule that you set during source group creation. The schedule is stored per scan configuration, not per source — all sources in the group run on the same schedule by default.

To modify the schedule for a source group's scans, edit the group and update the schedule field.

Sources with no schedule configured will not run automatically. Run them manually from the source groups list using the **Run** action.
