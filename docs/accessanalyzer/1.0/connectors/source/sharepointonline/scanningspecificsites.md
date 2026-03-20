---
title: "Scanning Specific Sites"
description: "Targeting specific SharePoint sites for scanning"
sidebar_position: 40
---

# Scanning Specific Sites

By default, the SharePoint Online connector scans all sites accessible to the configured app registration. You can narrow the scope by including or excluding specific sites.

## Configuring Site Filters

Site filtering is configured during scan creation in the **Configure Details** step:

1. Navigate to **Configuration** > **Scans**
2. Create a new scan for the SharePoint Online source
3. In the **Configure Details** step, set site include or exclude filters

## Filter Options

| Option | Behavior |
| --- | --- |
| **Include specific sites** | Only scan the listed sites |
| **Exclude specific sites** | Scan all sites except those listed |

## Use Cases

- **Compliance scanning** — Scan only sites that contain regulated data (HR, Finance, Legal)
- **Incremental rollout** — Start with a subset of sites and expand over time
- **Performance** — Reduce scan duration by excluding large, low-priority sites
