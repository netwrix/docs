---
title: "SPAA: Bulk Import Settings"
description: "SPAA: Bulk Import Settings"
sidebar_position: 80
---

# SPAA: Bulk Import Settings

Use the Bulk Import Settings page to configure the bulk import process settings. It's a
wizard page for the categories of:

- Bulk Import Access Scan Results
- Bulk Import Sensitive Content Scan Results

![Bulk Import Settings page](/images/accessanalyzer/11.6/admin/datacollector/spaa/bulkimportsettings.webp)

Subsequent hosts in job lists will get host IDs incremented by 1. The Host Identifier may require an
offset to avoid overlapping IDs in collected data. If you leave the **Set Host ID** checkbox
unchecked, Enterprise Auditor assigns values starting from 1 to every host. This feature is
intended only for SQL Server Replication.
