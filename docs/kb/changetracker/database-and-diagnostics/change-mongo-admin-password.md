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
   - Navigate to `C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`.
   - Edit the `mongod.cfg` file.
   - Comment each line out using the `#` symbol except for `logpath`, `dbpath`, `net`, `port`, `bindIp` and `storageEngine`.

   <img width="785" height="578" alt="image" src="https://github.com/user-attachments/assets/6d3bdc96-d99b-413c-9f95-d23832d9b7dc" />

3. Start the MongoDB service using `services.msc` or `sc start MongoDB`.

4. Open the **Mongo shell** by running the following program: `C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin\mongosh.exe`.

   <img width="977" height="509" alt="image" src="https://github.com/user-attachments/assets/059ce8e8-d65f-473c-959c-1456077b42f8" />

5. Enter the following commands in the Mongo shell, in order:

   ```bash
   use admin
   db.changeUserPassword("admin", "<YourAdminPassword>")
   ```

   > **NOTE:** Replace `<YourAdminPassword>` with the new password you wish to use.

   Changing the password returns you to a new line without an output.

   <img width="976" height="510" alt="image" src="https://github.com/user-attachments/assets/fce34fef-b612-4a68-aad2-3e41a3831b12" />

6. Close the `mongosh.exe` window and stop the MongoDB service in Task Manager.

7. Re-enable MongoDB authentication:
   - Navigate to `C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin`.
   - In the `mongod.cfg` file, remove all `#` symbols from each of the lines. Save the changes.

      <img width="748" height="578" alt="image" src="https://github.com/user-attachments/assets/f07ab983-8cf2-422c-9333-93b09dd826df" />

8. Start the MongoDB service using `services.msc` or `sc start MongoDB`.

9. Open Command Prompt and verify your Mongo logon using your authentication command. The following is an example:

    ```bash
    "C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin\mongosh.exe" --ssl --sslCAFile C:\mongo.crt --host 192.168.1.X --port 27017 -u admin -p <YourAdminPassword> --authenticationDatabase admin --sslAllowInvalidCertificates
    ```

    > **NOTE:** The IP address and password parameters must reflect the IP of the server hosting MongoDB and the new password entered in the preceding command.
