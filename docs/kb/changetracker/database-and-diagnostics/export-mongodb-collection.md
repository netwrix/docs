---
description: >-
  Shows how to export or back up individual MongoDB collections used by Netwrix
  Change Tracker. Includes commands to view collections and use mongodump for
  exporting collections.
keywords:
  - MongoDB
  - mongodump
  - export
  - backup
  - collections
  - Netwrix Change Tracker
  - NNTHubService
  - mongodump command
products:
  - changetracker
knowledge_article_id: ka04u000000HdAkAAK
sidebar_label: Exporting a Collection from MongoDB
tags: [kb, database-and-diagnostics]
title: Exporting a Collection from MongoDB
---

# Exporting a Collection from MongoDB

## Overview

This article explains how to export or back up specific collections from MongoDB. Exporting a collection is useful when you need to send data to Development after you determine a problem lies within MongoDB (for example, when troubleshooting Netwrix Change Tracker).

## Instructions

1. Access the Hub machine and determine where MongoDB is installed. The default location is:
   - `C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB`
2. Open **Command Prompt** as Administrator.
3. Enter the following commands in order to open the **Mongo shell**:
   - `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin` (if you need to change drives first, enter `X:`, replacing `X` with your drive letter)
   - `.\mongo.exe`
4. In the **Mongo shell**, enter the following commands in order:
   - `show dbs`
   - `use NNTHubService`
   - `show collections` (all collections located in MongoDB appear in the output)

     <!-- Image removed: Mongo shell output listing all collections after running `show collections` -->

   - `exit`
5. To export a collection, run the following command from Command Prompt (edit the placeholders as needed):
   - `mongodump -d NNTHubService -c ENTER-COLLECTION-NAME -o "C:\ENTER PATH HERE"`
6. In the `ENTER-COLLECTION-NAME` field, enter the collection you wish to export.
7. In the `C:\ENTER PATH HERE` field, enter the path you wish to export to.

    <!-- Image removed: Example mongodump command with collection name and output path filled in -->

> **NOTE:** The following are all collections in MongoDB.

```
AgentTaskQueue        IncomingEventQueue        SavedUserData
AgentTasks            IpAddressActivity         ScheduledPolicy
BackgroundTaskQueue   Licensing                 Sequences
BackgroundTasks       NotificationQueue         SystemDirectory
Counters              PendingNotifications      UserAuth
DefaultFilters        PerformanceData           UserAuthDetails
EventStats            PlannedChangeDefinitions  UserRoles
Events                PlannedChangeInstances    fs.chunks
Hashes                Policy                    fs.files
HubBackups            RemoteCredentials
HubConfigData
```
