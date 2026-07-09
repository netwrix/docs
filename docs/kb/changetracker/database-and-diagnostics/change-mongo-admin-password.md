---
description: >-
  Step-by-step instructions to reset the MongoDB admin account password when
  authentication is enabled and the admin password is lost. Requires access to
  the server hosting MongoDB.
keywords:
  - MongoDB
  - admin password
  - reset password
  - mongo.conf
  - mongo.exe
  - Change Tracker
  - authentication
  - db.changeUserPassword
products:
  - changetracker
knowledge_article_id: ka04u000000QmcbAAC
sidebar_label: Changing the Admin Password for MongoDB
tags: [kb, database-and-diagnostics]
title: Changing the Admin Password for MongoDB
---

# Changing the Admin Password for MongoDB

## Overview

If authentication is enabled in MongoDB and the admin password is lost, use this procedure to reset it.

> **IMPORTANT:** You must log on to the server hosting MongoDB to complete this procedure.

## Instructions

1. Stop the MongoDB service using `services.msc` or `sc stop MongoDB`.

2. Disable MongoDB authentication:
   1. Navigate to `C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\conf`.
   2. Edit the `mongo.conf` file.
   3. Comment each line out using the `#` symbol except for `logpath`, `dbpath`, and `storageEngine`.

   <!-- Image removed: mongo.conf file open in a text editor with all lines commented out except logpath, dbpath, and storageEngine -->

3. Start the MongoDB service using `services.msc` or `sc start MongoDB`.

4. Open the Mongo shell by running the following program: `C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin\mongo.exe`

   The Mongo shell window opens.

   <!-- Image removed: Mongo shell window after launching mongo.exe -->

5. Enter the following command:

   ```bash
   use admin
   ```

6. Enter the following command:

   ```bash
   db.changeUserPassword("admin", "<YourAgentPassword>")
   ```

   > **NOTE:** Replace `<YourAgentPassword>` with the new password you wish to use.

   Changing the password returns you to a new line without an output:

   <!-- Image removed: Mongo shell showing the db.changeUserPassword command completing without output -->

7. Close the `mongo.exe` window and stop the MongoDB service in Task Manager.

8. Re-enable MongoDB authentication:
   1. Navigate to `C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\conf`.
   2. In the `mongo.conf` file, remove all `#` symbols from each of the lines. Save the changes.

      <!-- Image removed: mongo.conf file open in a text editor with the # symbols removed to re-enable authentication -->

9. Start the MongoDB service using `services.msc` or `sc start MongoDB`.

10. Open Command Prompt and verify your Mongo logon using your authentication command. The following is an example:

    ```bash
    "C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin\mongo" --ssl --sslCAFile C:\mongo.crt --host 192.168.1.X --port 27017 -u admin -p <YourAgentPassword> --authenticationDatabase admin --sslAllowInvalidCertificates
    ```

    > **NOTE:** The IP address and password parameters must reflect the IP of the server hosting MongoDB and the new password entered in the preceding command.
