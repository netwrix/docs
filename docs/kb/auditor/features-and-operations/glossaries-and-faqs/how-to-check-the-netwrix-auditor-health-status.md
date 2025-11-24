---
description: >-
  Use the Health Status dashboard to monitor Netwrix Auditor components
  including activity records, monitoring plans, the Health Log, database
  statistics, Long Term Archive (LTA), and the Working Folder.
keywords:
  - health status
  - activity records
  - health log
  - long term archive
  - working folder
  - database statistics
  - monitoring plans
  - SQL Express
  - LTA
  - Netwrix Auditor
products:
  - auditor
sidebar_label: How to Check the Netwrix Auditor Health Status
tags: []
title: "How to Check the Netwrix Auditor Health Status"
knowledge_article_id: kA00g000000H9eZCAS
---

# How to Check the Netwrix Auditor Health Status

## Health Status Dashboard

As a Netwrix Administrator you need the tools and knowledge to maintain a healthy and efficient installation of Netwrix Auditor. Here are the tips and tricks for monitoring Netwrix Auditor health.

From the home page we can click **Health Status**. This presents administrators with a handful of extremely useful visuals.

### Activity Records by Date

This dashboard tile helps an administrator maintain visibility on data flow. The most obvious purpose this serves is confirmation of collection. You may also find that these statistics help you predict future need of resources. If incoming activity records increase, consideration of more storage or CPU cores may be required. You can use the matrix seen here to see recommended hardware based on incoming Activity Records per day.

### Monitoring Overview

The Monitoring Overview allows administrators to see all a complete picture of monitoring plan health. Plans with errors will show with a status of **Take Action**, while healthy plans will show **Ready**. The **Filter** option allows administrators to look at specific Data Sources or groups of Monitoring Plans to tailor visibility to specific needs.

### Health Log

The information seen in the Netwrix Auditor Health Log is directly pulled from a Windows Event Log called `Netwrix Auditor System Health`. Information seen here can vary vastly between environments. Messages can vary from informational, warning, and error based.

There is also the chance that the Health Log is relaying an error received from an audited data source. If limited information is found in our documentation, you may find that the error is directly from the audited source. In this case, it is beneficial to google search the error as well. This often reveals that the error exists with the data source itself.

The Health Log also provides the option for filtering, allowing administrators to view messages from specific data sources/monitoring plans, as well as different types of messages (Information, warning, errors).

There may be times where Netwrix Auditor Technical Support requests a copy of your Health Log. To provide this file, please view the steps [How to Save and Zip Netwrix Auditor System Health Event Log](/docs/kb/auditor/monitoring-plans/event-log-management/how-to-save-and-zip-netwrix-auditor-system-health-event-log). More details on the Health Log can be obtained here.

### Database Statistics

Similar to the Activity Records Statistics tile, this dashboard allows administrators to view the status of SQL Audit Databases, size of Audit Databases, and amount of Activity Records stored.

Double-clicking a database name will expand the block and reveal more information.

This dashboard can assist with troubleshooting in instances where data may not be available for searching and reporting. Remember that SQL Express databases have a limit of 10 GB for storage.

### Long Term Archive

This simple, yet effective, tile gives administrators insight on Long Term Archive storage usage. You may hear Technical Support refer to this as the "LTA". If you notice rapid growth and you have not placed the Long Term Archive on a drive independent of the System Drive, please follow the steps [here](https://docs.netwrix.com/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-move-long-term-archive-to-a-new-location) to migrate your Long Term Archive.

### Working Folder

The Working Folder is a structure of files that plays an integral part in event processing. Similar to the LTA tile, this tile will provide visibility on Working Folder growth. Expect this directory to grow and shrink periodically as it receives data, processes, and then sends it off for storage in SQL and the LTA. This directory can also be migrated to a drive independent to the system drive. The steps to migrate the Working Folder can be viewed [How to Migrate Netwrix Auditor Working Folder to a New Location](/docs/kb/auditor/system-administration/migration-and-upgrade/how-to-migrate-netwrix-auditor-working-folder-to-a-new-location).
