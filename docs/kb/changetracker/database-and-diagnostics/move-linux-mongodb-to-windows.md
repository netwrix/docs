---
description: >-
  Instructions to migrate a MongoDB database used by Netwrix Change Tracker
  from a Linux Hub server to a Windows Hub server, including exporting on
  Linux, restoring on Windows, and resolving the "Key not valid in specified
  state" error.
keywords:
  - MongoDB
  - migrate
  - Linux
  - Windows
  - Netwrix Change Tracker
  - mongodump
  - mongorestore
  - NNTHubService
  - Linux Hub
products:
  - changetracker
knowledge_article_id: ka0Qk000000DlcDIAS
sidebar_label: Moving Your Linux Server MongoDB Database to Windows
tags: [kb, database-and-diagnostics]
title: Moving Your Linux Server MongoDB Database to a Windows Server
---

# Moving Your Linux Server MongoDB Database to a Windows Server

## Overview

This article describes how to migrate a Linux Hub's MongoDB database to a new Windows Hub server, retaining all existing data such as events, agents, and configuration.

Netwrix Change Tracker no longer supports the Linux Hub, so use this procedure if you are still running one.

> **IMPORTANT:** Verify that the MongoDB versions match on your current and target servers. For additional Netwrix Change Tracker installation prerequisites, refer to the [Requirements](pathname:///docs/changetracker/8_2/requirements/overview) article.

## Instructions

### Step 1 — Export the Database on the Linux Hub

1. Connect to the Linux server that hosts your Netwrix Change Tracker Hub.
2. Stop the `nnthubservice` and `nntgen7agentcore` services:

   ```bash
   service nnthubservice stop
   service nntgen7agentcore stop
   ```

3. Create a directory to hold the mongodump output, and change to it. For example:

   ```bash
   mkdir /example/MongoDump
   cd /example/MongoDump
   ```

4. Export the database:

   ```bash
   mongodump -d NNTHubService
   ```

5. Copy the resulting dump directory to the new Windows server.

### Step 2 — Prepare the New Windows Server

1. Connect to the server where Netwrix Change Tracker will be installed via RDP.
2. Run the **Change Tracker** installer and install the same version that was running on the Linux Hub.

    > **NOTE:** If the installer prompts you for a database storage engine, select the option that matches the storage engine of your existing database. Contact [Netwrix Support](https://www.netwrix.com/support.html) if you are unsure which one your Linux Hub used.

### Step 3 — Restore the Database on Windows

1. Open a **Command Prompt** and run it as an **Administrator**.
2. Enter the following commands in order:
   - `iisreset /stop`
   - `sc stop MongoDB`
   - `cd C:\ProgramData\Change Tracker Generation 7 (NetCore)\MongoDB`
   - `rmdir db /s` (enter `Y` and **Enter** when prompted)
   - `mkdir db`
   - `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`
   - `sc start MongoDB`
   - `mongorestore.exe <path-to-dump>\NNTHubService -d NNTHubService`
3. Allow time for the database to re-index. Once the re-index completes, the word **done** appears in the Command Prompt window.
4. Enter the following command: `iisreset /start`.
5. Close the Command Prompt window.
6. Confirm that you can log in to Netwrix Change Tracker and open the **Settings** page. If you changed the admin user's password on the Linux Hub, that password still works.

## Troubleshooting

If you see the following error on the **Settings** page, follow the troubleshooting steps.

```text
Error: Key not valid in specified state
```

Change Tracker encrypts the Remote Credentials password and SMTP password entries using a key tied to the specific Hub server that stored them. Restoring the database on a different server — as in this migration — means the new server cannot decrypt those fields, which is why the Settings page shows this error. Clearing the affected entries removes the ciphertext the new server cannot read, but you must re-enter the Remote Credentials password and SMTP settings afterward.

### Reset the Remote Credentials Password

1. Open a **Command Prompt** and run it as an **Administrator**.
2. Enter the following commands in order:
   - `iisreset /stop`
   - `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`
   - `mongosh.exe`
   - `show dbs`
   - `use NNTHubService`
   - `db.RemoteCredentials.update({},{$set: { "pa.Password": "" }}, { multi: true });`
   - `exit`
   - `iisreset /start`
3. Close the Command Prompt window.
4. Confirm that you can log in to Netwrix Change Tracker.

### Clear the SMTP Password Entries

If the error persists, try the following steps:

1. Open a **Command Prompt** and run it as an **Administrator**.
2. Enter the following commands in order:
   - `iisreset /stop`
   - `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`
   - `mongosh.exe`
   - `show dbs`
   - `use NNTHubService`
   - `db.HubConfigData.remove({ "Key" : "SMTP Password" });`
   - `db.HubConfigData.remove({ "Key" : "SMTP Password2" });`
   - `exit`
   - `iisreset /start`
3. Close the Command Prompt window.

## Related Articles

- [Backing Up, Restoring, or Moving Your MongoDB Database](./backup-restore-move-mongodb-database)
- [Changing the Admin Password for MongoDB](./change-mongo-admin-password)
