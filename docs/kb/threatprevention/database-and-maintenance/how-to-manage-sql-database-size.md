---
description: >-
  Learn how to monitor and maintain the NVMonitorData SQL database used by
  Netwrix Threat Prevention, configure Database Maintenance and Archive DB
  settings, and troubleshoot large databases to preserve performance and control
  storage usage.
keywords:
  - SQL database
  - NVMonitorData
  - database maintenance
  - Archive DB
  - Netwrix Threat Prevention
  - SQL Server Agent
  - Investigate
  - Recent Events
products:
  - threat-prevention
sidebar_label: How to Manage SQL Database Size
tags: []
title: "How to Manage SQL Database Size"
knowledge_article_id: kA0Qk0000001HDJKA2
---

# How to Manage SQL Database Size

## Overview

It is important to monitor the size of the NVMonitorData SQL database (DB) used by **Netwrix Threat Prevention** to store collected event data. In production environments, the event dataset can grow significantly over time. Unchecked DB growth leads to excessive disk space usage and decreased performance during data insertion. Members can also experience slower performance when reporting data via the Console or the Web Reporting modules of **Netwrix Threat Prevention**.

**Netwrix Threat Prevention** includes a DB maintenance system for managing the data stored in the SQL DB. It supports a two-tier storage model. Tier 1, also called the **Production** DB, is the SQL DB specified upon installation. All real-time data is reported here for **Investigate**, **Recent Events**, and **Web Reports**. An optional Tier-2 DB, also called the **Archive DB**, can be set up in the **Database Maintenance** dialog's **Archive DB** tab. The **Investigate** panel of the Console allows users to toggle between **Production** and **Archive** databases when searching event data.

The **Database Maintenance** dialog is accessed through **Configuration | Database | Maintenance** menu in the Console. It is a GUI front-end that configures a SQL Server job via the SQL Server Agent to run a series of stored procedures. These procedures delete or move event records based on their age and are scheduled to run daily, weekly, or monthly.

## Instructions

1. Start using DB Maintenance soon after deploying the product to control DB size.
2. Configure the **Archive DB** tab first, as it influences options for both 'move' and 'delete'. For Archive DB configurations, we recommend moving events to the Archive DB based on age so they are not accessed via the **Recent Events** panel. They remain accessible via the **Investigate** panel by selecting the **Archive** option.

Use the **Schedule** tab to run the maintenance **Daily** during off-peak hours. Daily runs move or delete only one day’s older event data, ensuring timely completion before the following day's activity. In some situations, **Weekly** runs might be preferred, but make sure these runs begin early enough to finish before the next workweek begins.

Reference DB maintenance alerts in the **Threat Prevention** Console's **Alerts** panel, which provides details regarding start and stop times of maintenance and the type of events moved or deleted. Use these timestamps to calculate the required time for each policy type's processing. Check regularly as policy changes can impact collected event volume and removal schedules.

### Policy vs. Event Type Tab

The **Policy** tab allows for detailed data retention times on a per-policy basis. Set retention times to meet organizational needs for data retrieval, utilizing the Archive DB for long-term storage. For frequently changing or low-value events, keep shorter retention times after evaluating them. Note that sorting the “Event Count” column aids retention time decisions.

The **Event Type** acts as a fallback to policy tab settings with longer retention times, ensuring old data removal even for policies not picked or updated in these settings. Both tabs work independently, so configure retention times accordingly.

Separate tables store analytics event data from policies, operating independently of **Event Type** and **Policy** tab settings.

### Archive DB Management

Archive DB management is the customer’s responsibility for controlling size. Delete events with SQL queries based on a specified date. Alternatively, update the DB Maintenance to a new Archive DB annually, keeping the older Archive DB offline. Retrieve old data via:

1. Update the **Archive DB** tab on the DB Maintenance panel to point to the `old` DB. Use the Console’s **Investigate** panel with **Archive** selected. Do not leave at this setting if a scheduled maintenance job needs to run.
2. Install a standalone machine with **Netwrix Threat Prevention** Server + Console without deploying from or pointing agents to it. Set the **DB Maintenance** Archive Tab for the `old` archive DB without configuring the **DB Maintenance Schedule** tab. Use the Console's **Investigate** panel to query indefinitely.
3. Retrieve event data using your SQL queries from any **Threat Prevention** Event DB.

### Troubleshooting Unused DB Maintenance and Large DBs

If the production DB becomes extensive quickly from lack of maintenance (such as many TB), moving or deleting events could face challenges or never complete. Configure the **Type** tab by prioritizing events: retain first for only a few days less than the oldest event. Check DB Maintenance alerts, so future runs do not exceed operational thresholds and finish within 6 hours.
