---
title: "Windows"
description: "Windows"
sidebar_position: 20
---

# Windows

To change the DB location or to switch to ‘smallfiles’ operation, do the following:

**Step 1 –** Stop the **IIS Web server** using command line iisreset /stop or use the **IIS
Management Console**, or **Windows Services Console**.

**Step 2 –** Stop the **Mongo DB** service using the **Windows Services Console**.

**Step 3 –** Edit the **mongod.conf** file located in C:\Program Files\NNT Change Tracker™
Suite\Gen7\MongoDB\conf

**Step 4 –** Edit the parameters for `dbpath `to change the location for DB files. If you prefer to
invoke ‘**smallfiles**’ operation then add the config line as below.

![CustomDatabasePathWindows](/images/changetracker/8.0/install/deployment/customdatabasepathwindows.webp)

5. Then start the **Mongod** service, followed by an `iisreset /start`.
