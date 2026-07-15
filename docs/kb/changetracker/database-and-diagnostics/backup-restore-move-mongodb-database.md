---
description: >-
  How to back up, restore, or move your MongoDB database used by Netwrix Change
  Tracker, including copying required files and troubleshooting the "Key not
  valid in specified state" error.
keywords:
  - MongoDB
  - backup
  - restore
  - migrate
  - Netwrix Change Tracker
  - mongodump
  - mongorestore
  - NNTHubService
products:
  - changetracker
knowledge_article_id: ka0Qk0000005oqbIAA
sidebar_label: Backing Up, Restoring, or Moving Your MongoDB Database
tags: [kb, database-and-diagnostics]
title: Backing Up, Restoring, or Moving Your MongoDB Database
---

# Backing Up, Restoring, or Moving Your MongoDB Database

## Overview

This article describes how to back up MongoDB, restore MongoDB, or set up a new server to host your Netwrix Change Tracker software while retaining all previous data, such as events, agents, configuration, etc.

> **IMPORTANT:** Verify that the MongoDB versions match on your current and target servers. For additional Netwrix Change Tracker installation prerequisites, refer to the [Requirements](pathname:///docs/changetracker/8_2/requirements/overview) article.

## Instructions

## Pre-Requisites - 

1. Download MongoDB Shell Tool (https://www.mongodb.com/try/download/shell)
2. Download MongoDB Command Line Tools (https://www.mongodb.com/try/download/database-tools)
3. Extract each of these into the MongoDB Bin folder (C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin)

### Step 1 — Back Up the MongoDB Database

1. Connect to the server that hosts your Netwrix Change Tracker software via RDP.
2. Open a **Command Prompt** and run it as an **Administrator**.
3. Enter the following commands in order:
   - `iisreset /stop`
   - `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`
   - `mongodump.exe -d NNTHubService -o C:\MongoDump --gzip`

<img width="1256" height="209" alt="image" src="https://github.com/user-attachments/assets/e6047d12-1326-4890-8a31-1d2a25c73cdd" />

<img width="1255" height="273" alt="image" src="https://github.com/user-attachments/assets/8d524a31-3a32-4269-9399-c00395d698e3" />

Copy the following folders and transfer them to the new server:

- `C:\MongoDump`
- `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Configs\DPKeys`
- `C:\ProgramData\Change Tracker Generation 7 (NetCore)\MongoDB\db`

### Step 2 — Prepare the New Server

1. Connect to the server where Netwrix Change Tracker will be installed via RDP.
2. Run the **Change Tracker** installer and install the same version that you used on the old server.

### Step 3 — Restore the MongoDB Database

These steps apply whether you are restoring to an existing server or moving to a new server:

1. Open a **Command Prompt** and run it as an **Administrator**.
2. Enter the following commands in order:
   - `iisreset /stop`
   - `sc stop MongoDB`
   - `cd C:\ProgramData\Change Tracker Generation 7 (NetCore)\MongoDB`
   - `rmdir db /s` (enter `Y` and **Enter** when prompted)
   - `mkdir db`
   - `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`
   - `sc start MongoDB`
   - `mongorestore.exe C:\MongoDump\NNTHubService -d NNTHubService --gzip`

<img width="976" height="512" alt="image" src="https://github.com/user-attachments/assets/10e4c2b9-7ae0-47ba-b1b4-0877be9a0681" />

### Step 4 — Finish the Restore

Allow time for the database to re-index. Once the re-index completes, the word **done** appears in the Command Prompt window.

1. Enter the following command: `iisreset /start`.
2. Close the Command Prompt window.
3. Confirm that you can log in to **Netwrix Change Tracker** and open the **Settings** page.

## Troubleshooting

If you see the following error on the **Settings** screen, follow the troubleshooting steps.

```text
    Error: Key not valid in specified state
```

### Reset the Remote Credentials Password

1. Open a **Command Prompt** and run it as an **Administrator**.
2. Enter the following commands in order:
   - `iisreset /stop`
   - `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`
   - `mongo.exe`
   - `show dbs`
   - `use NNTHubService`
   - `db.RemoteCredentials.update({},{$set: { "pa.Password": "" }}, { multi: true });`
   - `exit`
   - `iisreset /start`
3. Close the Command Prompt window.
4. Confirm that you can log in to Netwrix Change Tracker.

<img width="974" height="511" alt="image" src="https://github.com/user-attachments/assets/e4124dcc-b3f7-4311-b4e5-465abca59183" />

> **NOTE:** If you changed the admin user's password on the old server, that password still works.

### Clear the SMTP Password Entries

If this does not resolve the issue and you still see the `Key not valid in specified state` error, try the following steps:

1. Open a **Command Prompt** and run it as an **Administrator**.
2. Enter the following commands in order:
   - `iisreset /stop`
   - `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`
   - `mongo.exe`
   - `show dbs`
   - `use NNTHubService`
   - `db.HubConfigData.remove({ "Key" : "SMTP Password" });`
   - `db.HubConfigData.remove({ "Key" : "SMTP Password2" });`
   - `exit`
   - `iisreset /start`
3. Close the Command Prompt window.

<img width="976" height="509" alt="image" src="https://github.com/user-attachments/assets/3be061b1-67b9-4a0a-89be-3e9fbf169afb" />

