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

This article describes how to back up MongoDB, restore MongoDB, or set up a new server to host your Netwrix Change Tracker software while retaining all previous data (events, agents, configuration, and so on).

> **IMPORTANT:** For additional information on Netwrix Change Tracker installation prerequisites, refer to the System Requirements Overview article. <!-- link removed: helpcenter.netwrix.com v7.6 requirements page — restore link when 8.x equivalent identified -->

> **IMPORTANT:** Verify the MongoDB versions match on both your current and target servers.

## Instructions

### Back Up the MongoDB Database

Back up your MongoDB database first:

1. Connect to the server that hosts your Netwrix Change Tracker software via RDP.
2. Open a **Command Prompt** and run it as an **Administrator**.
3. Enter the following command: `iisreset /stop`
4. Enter the following command: `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`
5. Enter the following command: `mongodump.exe -d NNTHubService -o C:\MongoDump --gzip`

<!-- Image removed: Command Prompt output from running mongodump.exe against NNTHubService with --gzip -->

Copy the following folders and transfer them to the new server:

- `C:\MongoDump`
- `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Configs\DPKeys`
- `C:\ProgramData\Change Tracker Generation 7 (NetCore)\MongoDB\db`

### Prepare the New Server

1. Connect to the server where Netwrix Change Tracker will be installed via RDP.
2. Run the **Change Tracker** installer and install the same version that you used on the old server.
3. On the **Database Storage Engine** step, make sure this option matches the storage engine of your existing database on the old server. If you are not sure what to look for, contact Netwrix Support for clarification.

<!-- Image removed: Change Tracker installer Database Storage Engine step showing the storage engine option -->

### Restore the MongoDB Database

The following steps apply whether you are restoring the database to an existing server or moving it to a new server using the preceding steps.

1. Open a **Command Prompt** and run it as an **Administrator**.
2. Enter the following command: `iisreset /stop`
3. Enter the following command: `sc stop MongoDB`
4. Enter the following command: `cd C:\ProgramData\Change Tracker Generation 7 (NetCore)\MongoDB`
5. Enter the following command: `rmdir db /s`
6. Enter `Y` and `Enter` when prompted.
7. Enter the following command: `mkdir db`
8. Enter the following command: `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`
9. Enter the following command: `sc start MongoDB`
10. Enter the following command: `mongorestore.exe C:\MongoDump\NNTHubService -d NNTHubService --gzip`

<!-- Image removed: Command Prompt output from running mongorestore.exe against the MongoDump folder -->

Allow time for the database to re-index. Once the re-index completes, the word **done** appears in the Command Prompt window.

1. Enter the following command: `iisreset /start`
2. Close the Command Prompt window.

Confirm that you can log in to **Netwrix Change Tracker** and open the **Settings** page.

## Troubleshooting

If you see the following error on the **Settings** screen, follow the troubleshooting steps.

```text
    Error: Key not valid in specified state
```

### Reset the Remote Credentials Password

1. Open a **Command Prompt** and run it as an **Administrator**.
2. Enter the following command: `iisreset /stop`
3. Enter the following command: `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`
4. Enter the following command: `mongo.exe`
5. Enter the following command: `show dbs`
6. Enter the following command: `use NNTHubService`
7. Enter the following command: `db.RemoteCredentials.update({},{$set: { "pa.Password": "" }}, { multi: true });`
8. Enter the following command: `exit`
9. Enter the following command: `iisreset /start`
10. Close the Command Prompt window.

<!-- Image removed: Mongo shell output confirming the RemoteCredentials password reset command completed -->

Confirm that you can log in to the Netwrix Change Tracker software.

After completing the preceding steps, try to log in to Netwrix Change Tracker. If you changed the admin user's password on the old server, that password still works.

> **NOTE:** If this does not resolve the issue and you still see the `Key not valid in specified state` error, try the following:

### Clear the SMTP Password Entries

1. Open a **Command Prompt** and run it as an **Administrator**.
2. Enter the following command: `iisreset /stop`
3. Enter the following command: `cd C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`
4. Enter the following command: `mongo.exe`
5. Enter the following command: `show dbs`
6. Enter the following command: `use NNTHubService`
7. Enter the following command: `db.HubConfigData.remove({ "Key" : "SMTP Password" });`
8. Enter the following command: `db.HubConfigData.remove({ "Key" : "SMTP Password2" });`
9. Enter the following command: `exit`
10. Enter the following command: `iisreset /start`
11. Close the Command Prompt window.
