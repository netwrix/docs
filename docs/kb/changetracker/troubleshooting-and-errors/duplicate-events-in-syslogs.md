---
description: >-
  Explains why old or duplicate events appear as new in syslogs and shows how
  to remove pending notifications from MongoDB to prevent re-reporting of
  outdated events in Netwrix Change Tracker.
keywords:
  - syslogs
  - duplicate events
  - MongoDB
  - NotificationQueue
  - PendingNotifications
  - NNTHubService
  - MongoDB Shell
  - Netwrix Change Tracker
  - old events
  - IncomingEventQueue
  - BackgroundTaskQueue
  - troubleshooting
knowledge_article_id: ka0Qk0000001R2zIAE
products:
  - change-tracker
sidebar_label: Duplicate Events in Syslogs
tags: [kb, troubleshooting-and-errors]
title: Old or Duplicate Events Reported as New in Syslogs
---

This article explains why old or duplicate events may appear as new in syslogs and how to resolve the issue by clearing the pending notifications queue in MongoDB.

## Symptom

- Old events appear in syslogs as new events. Upon further investigation, these are confirmed to be duplicates of previously reported events.
- The affected events have not been resubmitted.

## Cause

The pending notifications queue in the MongoDB database contains notifications for older events. When the outdated notifications are released, they are reported as new events or duplicates of previously reported events.

## Resolution

1. Install MongoDB Shell — download the MongoDB Shell `.zip` and place the contents into `C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`. Download MongoDB Shell from the [MongoDB Shell download page](https://www.mongodb.com/try/download/shell).

2. Once copied, run the `mongosh.exe` application to connect to your MongoDB database. Run the following command:

   ```text
   mongodb://localhost:27017
   ```

   > **NOTE:** Replace `27017` with the correct port if MongoDB in your environment uses a different port.

3. Once connected to your MongoDB database, run the following commands to confirm whether notifications are queued:

   ```text
   use NNTHubService
   db.IncomingEventQueue.countDocuments()
   db.NotificationQueue.countDocuments()
   db.PendingNotifications.countDocuments()
   db.BackgroundTaskQueue.countDocuments()
   ```

4. To clean up the queued notifications, run the following commands:

   ```text
   use NNTHubService
   db.NotificationQueue.deleteMany({})
   ```
