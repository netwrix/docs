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

The issue occurs when a database is corrupted. Corruption can happen when a server is shut down unexpectedly, because MongoDB does not have time to shut down safely.

## Resolution

1. On the computer that hosts **Netwrix Change Tracker** software, stop the **MongoDB** service.
2. Open a **Command Prompt** as an Administrator.
3. Enter the following command:
   ```bat
   cd "C:\Program Files\NNT Change Tracker Suite (Netcore)\Gen7\MongoDB\bin"
   ```
4. Enter the following command:
   ```bat
   mongod.exe --dbpath "C:\ProgramData\Change Tracker Generation 7 (Netcore)\MongoDB\db" --repair
   ```
5. Enter the following command:
   ```bat
   iisreset
   ```
6. Close the command prompt window.
