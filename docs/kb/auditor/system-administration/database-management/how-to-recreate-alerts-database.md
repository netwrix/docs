---
description: >-
  Shows how to recreate the Netwrix_AlertsDB database used to store Alerts data:
  back up the current database, recreate it in SQL Server, and restart the
  Netwrix Auditor Management service.
keywords:
  - Netwrix_AlertsDB
  - Netwrix Auditor
  - recreate database
  - SQL Server
  - SSMS
  - backup
  - Alerts database
  - service restart
products:
  - auditor
sidebar_label: How to Recreate Alerts Database?
tags: []
title: "How to Recreate Alerts Database?"
knowledge_article_id: kA04u000000wnozCAA
---

# How to Recreate Alerts Database?

## Overview

Sometimes, for some reasons, you need to recreate the `Netwrix_AlertsDB` database used to store your Alerts data and hosted by the specified instance of the SQL Server. For example, if the current database is full. For additional information on special Netwrix Auditor databases capacity, refer to the following article: Health Status Dashboard — Database Statistics — v10.6.

This article explains how to recreate this database.

## Instructions

To recreate the `Netwrix_AlertsDB` database, do the following:

1. Connect to SQL Server Management Studio and create a backup of your current `Netwrix_AlertsDB` database. Learn more in [Quickstart: Backup and restore a SQL Server database with SSMS ⸱ Microsoft &#129125;](https://learn.microsoft.com/en-us/sql/relational-databases/backup-restore/quickstart-backup-restore-database?view=sql-server-ver16&tabs=ssms).
2. Then, delete the existing database and create a new one with the name of `Netwrix_AlertsDB`.
3. On the computer that hosts your Netwrix Auditor Server, start the **Services** snap-in and restart the **Netwrix Auditor Management** service.
