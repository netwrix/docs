---
title: "Source Groups"
description: "Organizing sources into groups with shared configuration"
sidebar_position: 50
---

# Source Groups

A source group is a named collection of related sources that share a common service account, configuration, and scan settings. Source groups are the primary organizational unit for sources in Access Analyzer.

## How Source Groups Work

Source groups are created through the **Connect Source** wizard, which creates the group, all its sources, and associated scans in a single atomic operation. Each source group has:

- A **name** to identify the group
- A **source type** (all sources in the group are the same type)
- A **service account** shared by all sources in the group
- One or more **sources** (the actual connection targets)
- One or more **scans** with a shared schedule

## Source Groups by Type

| Source Type | Sources per Group | Example |
| --- | --- | --- |
| **File Server** | Multiple servers | `Finance File Servers` with `fs01`, `fs02`, `fs03` — all sharing one service account and domain |
| **Active Directory** | Multiple domain controllers | `Corp AD` with `dc01`, `dc02` |
| **Entra ID** | Single tenant | `Corporate Entra ID` with one Azure AD tenant |
| **SharePoint Online** | Multiple site collections | `Marketing SharePoint` with several sites |

## Creating a Source Group

Source groups are created exclusively through the Connect Source wizard:

1. Navigate to **Sources** in the sidebar
2. Click **Connect Source**
3. Follow the 3-step wizard: select source type, configure sources, set up scans
4. Click **Complete Setup**

For detailed instructions, see [Adding a Data Source](/docs/accessanalyzer/1_0/gettingstarted/firstscan/addingsource).

## Viewing Source Groups

The sources list displays individual sources, each showing its parent source group. You can filter by source group to see all sources within a group.

## Deleting a Source Group

Deleting a source group removes the group, all its sources, and all associated scans.

:::warning
Deleting a source group is permanent and removes all sources and scan configurations within it. Scan execution history is preserved for audit purposes.
:::
