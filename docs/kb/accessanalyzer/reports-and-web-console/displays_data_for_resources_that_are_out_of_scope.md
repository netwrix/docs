---
description: >-
  This article explains how Netwrix Access Analyzer displays data for file system resources that are out of scope and provides options for removing such data.
keywords:
  - Netwrix Access Analyzer
  - out of scope resources
  - data removal
sidebar_label: Out of Scope Data in Access Analyzer
tags: []
title: "Displays Data for Resources That Are Out of Scope"
knowledge_article_id: kA0Qk0000002tEvKAI
products:
  - accessanalyzer
---

# Displays Data for Resources That Are Out of Scope

## Symptom

Netwrix Access Analyzer (formerly Enterprise Auditor) displays data for file system resources that are no longer within the defined scan scope.

## Cause

The resources in question were previously within the scan scope and were collected by Access Analyzer. Once removed from scope, Access Analyzer no longer updates or scans them—by design—but does not automatically purge them from the database.

Scoping in Access Analyzer controls what is collected or updated going forward, not retroactively removing previously scanned data. Therefore, out-of-scope resources can still appear in reports and interfaces, although they are no longer maintained.

## Resolution

There are two options for removing out-of-scope data:

### Option 1: Full Host Data Removal

Netwrix Support can assist with dropping all file system data for the specified host. This removes all collected data for that host, not just the out-of-scope folders.

Refer to [How to Drop File System Data from Netwrix Access Analyzer](/docs/kb/accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data.md) for detailed instructions.

**Considerations:**

- This action is irreversible and deletes historical activity not preserved in the Netwrix Activity Monitor.
- There is no impact on sensitive data or permissions.
- A new scan must be performed afterward using updated scoping rules.

### Option 2: Custom Cleanup via Professional Services

For more granular removal (e.g., specific folders or paths), a one-time cleanup can be arranged through a paid Professional Services engagement.

**Details:**

- Tailored script-based cleanup of only the out-of-scope items.
- Maintains in-scope data and avoids a full purge.
- Requires coordination with the Professional Services team.

> **Best Practice:** When setting the scan scope, define exclusions first. Then, add inclusions to target only the desired resources.

## Related Link

- [How to Drop File System Data from Netwrix Access Analyzer](/docs/kb/accessanalyzer/file-system-and-sensitive-data-discovery/dropping_file_system_data.md)