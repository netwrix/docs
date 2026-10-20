---
description: >-
  Provides steps to repair a corrupted MongoDB database that causes the MongoDB
  service to stop repeatedly for Netwrix Change Tracker.
keywords:
  - mongodb
  - mongod
  - mongodb service
  - database corruption
  - repair
  - iisreset
  - Netwrix Change Tracker
  - Change Tracker
products:
  - changetracker
knowledge_article_id: ka04u000000wwBDAAY
sidebar_label: MongoDB Service Terminated Unexpectedly
tags: [kb, database-and-diagnostics]
title: MongoDB Service Terminated Unexpectedly
---

# MongoDB Service Terminated Unexpectedly

## Symptom

The MongoDB service does not stay running and stops after each startup.

## Cause

The issue occurs when a database is corrupted. Corruption can happen when a server shuts down unexpectedly, because MongoDB does not have time to shut down safely.

## Resolution

1. Using RDP, connect to the server that hosts the MongoDB service utilised by Change Tracker.
2. Through the Services screen, stop the **MongoDB Server (MongoDB)** service.
3. Through the Services screen, stop the **World Wide Web Publishing Service**.

   > **NOTE:** You can configure the Change Tracker web application and MongoDB to run on separate servers, so you may need to connect to a different server for this step.
4. Open a **Command Prompt** as an Administrator.
5. Enter the following commands in order:

   ```bat
   cd "C:\Program Files\NNT Change Tracker Suite (Netcore)\Gen7\MongoDB\bin"
   mongod.exe --dbpath "C:\ProgramData\Change Tracker Generation 7 (Netcore)\MongoDB\db" --repair
   ```

   > **NOTE:** The `--dbpath` shown above is the default location that Change Tracker uses. If the db folder has been moved to another location, set the `--dbpath` value accordingly.

6. Close the Command Prompt window.
7. If the repair was successful, through the Services screen, start the **MongoDB Server (MongoDB)** service, if it isn't running already.
8. Through the Services screen, start the **World Wide Web Publishing Service**.
9. Access the Change Tracker login screen and attempt to login to the application.
