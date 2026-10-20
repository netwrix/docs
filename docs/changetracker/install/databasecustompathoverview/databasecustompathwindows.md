---
title: "Windows"
description: "Windows"
sidebar_position: 20
---

# Windows

To change the location of the Change Tracker database files, follow these steps:

**Step 1 –** Stop the **IIS Web server** using command line iisreset /stop or use the **IIS
Management Console**, or **Windows Services Console**.

**Step 2 –** Stop the **MongoDB Server (MongoDB)** service using the **Windows Services Console**.

**Step 3 –** Edit the **mongod.cfg** file located in **"C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\bin"**

**Step 4 –** Edit the parameters for `dbpath` to change the location for DB files.

<img width="685" height="487" alt="image" src="https://github.com/user-attachments/assets/06d4c67c-865a-45aa-867f-a8f3b22aa727" />

**Step 5 –** Start the **MongoDB Server (MongoDB)** service using the **Windows Services Console**.

**Step 6 –** Start the **IIS Web server** using command line iisreset /start or use the **IIS
Management Console**, or **Windows Services Console**.
