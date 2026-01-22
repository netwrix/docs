---
description: >-
  Use these steps to remove duplicate Netwrix Threat Prevention Windows agent
  entries from the Netwrix Threat Prevention Admin Console. The procedure covers
  stopping services, inspecting the `nvmonitorconfig` server table, removing
  duplicate records, and restarting services.
keywords:
  - duplicate agents
  - Netwrix Threat Prevention
  - nvmonitorconfig
  - Enterprise Manager
  - Scheduler service
  - Reporting service
  - Admin Console
  - Windows agent
  - remove duplicate entries
products:
  - threat-prevention
sidebar_label: 'Duplicate Threat Prevention Windows agent entries '
tags: []
title: "Duplicate Threat Prevention Windows agent entries in the Threat Prevention Admin Console"
knowledge_article_id: kA04u0000000J0DCAU
---

# Duplicate Netwrix Threat Prevention Windows agent entries in the Netwrix Threat Prevention Admin Console

## Summary
Basic steps to remove duplicate Netwrix Threat Prevention Windows agent entries.

## Issue
Remove duplicate Netwrix Threat Prevention Windows agent entries in the **Netwrix Threat Prevention Admin Console**.

## Instructions
Steps to remove duplicate Netwrix Threat Prevention Windows agent entries in the **Netwrix Threat Prevention Admin Console**:

1. Open the **Netwrix Threat Prevention Admin Console**.
2. Verify duplicate Netwrix Threat Prevention Windows agent entries in the **Netwrix Threat Prevention Admin Console**.
   - As needed, use the data grid in the agents view to filter the duplicate entries.
   - As needed, take reference screen shot of the duplicate entries.
3. Try to delete the duplicate entry using the **Remove Server from List** right-click menu option. If this fails then perform the following steps:
   1. Exit the **Netwrix Threat Prevention Admin Console**.
   2. Exit any additional **Netwrix Threat Prevention Admin Console** sessions.
   3. Temporarily stop the Threat Prevention Scheduler service.
      - Stopping the Threat Prevention Scheduler service will also stop the Threat Prevention Reporting service.
   4. Temporarily stop the Threat Prevention Enterprise Manager service.
   5. Query the server table in the `nvmonitorconfig` database to list all entries.
   6. Referencing duplicate server entries, usually the ‘Name’ and LastMgrContact’ columns, remove duplicate entries in the server table in the `nvmonitorconfig` database.
   7. Query the server table in the `nvmontiorconfig` database, and verify duplicate entries are deleted.
   8. Start the Threat Prevention Enterprise Manager service.
   9. Check log entries in the Threat Prevention Enterprise Manager service logs for any errors.
      - If there are any errors captured, compress and send the Threat Prevention Enterprise Manager log folder.
   10. Open the **Netwrix Threat Prevention Admin Console**, and check for duplicate Netwrix Threat Prevention Windows agent entries.
   11. Start the Threat Prevention Reporting service.
       - Starting the Threat Prevention Reporting service will also start the Threat Prevention Scheduler service.

Note: Netwrix Threat Prevention services need to be stopped to avoid any caching of Netwrix Threat Prevention Windows agent entries.

## Affected Versions
Netwrix Threat Prevention 4.0, Netwrix Threat Prevention 4.1, Netwrix Threat Prevention 5.0, Netwrix Threat Prevention 5.1, Netwrix Threat Prevention 5.2, Netwrix Threat Prevention 6.0, Netwrix Threat Prevention 6.1, Netwrix Threat Prevention 7.0

## Affected Module
Netwrix Threat Prevention Admin Console

## Dev Ticket
SI-3193

## Resolved In Version
not applicable

## KB Type
How To
