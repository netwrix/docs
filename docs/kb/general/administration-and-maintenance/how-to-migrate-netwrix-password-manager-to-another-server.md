---
description: >-
  Describes how to migrate Netwrix Password Manager to a new server by copying
  the installation files, transferring enrollment data, and updating client
  settings and GPOs.
keywords:
  - Netwrix Password Manager
  - migrate
  - server migration
  - secrets.bin
  - alinfo.bin
  - PredefinedQuestions.txt
  - Templates
  - GPO
  - Password Manager Server URL
products:
  - general
sidebar_label: How to migrate Netwrix Password Manager to another
tags:
  - administration-and-maintenance
title: "How to migrate Netwrix Password Manager to another server"
knowledge_article_id: kA00g000000H9T5CAK
---

# How to migrate Netwrix Password Manager to another server?

---

To migrate Netwrix Password Manager perfrom the following steps:

1. Install Netwrix Password Manager on a new server.
2. Then, stop the product service on the new server.
3. Stop the Netwrix Password Manager service on the old server
4. Copy the following files from the Password Manager installation directory on the old server to the same location on the new server:
   - `secrets.bin`
   - `alinfo.bin`
   - `PredefinedQuestions.txt` (if you changed predefined questions)
   - `Templates` subfolder (if you cahnged notifications text)

![User-added image](./../0-images/ka04u00000116Rj_0EM700000004xV4.png)

5. Start the Netwrix Password Manager service on the new server.
6. Wait for several minutes to allow the service read the users enrollment data.
7. Go to Administrative portal and apply license
8. Make sure firewall is configured corretly o the new server to accept connections

**NOTE.** If you use the Password Manager clients, change the Password Manager server address in their settings.To do this, perform the following steps

1. Navigate to **Start - -> Group Policy Management** Console snap-in.
2. Right-click the GPO created for Netwrix Password Manager and select **Edit** from the popup menu.
3. In the dialog that opens, navigate to **Computer Configuration - -> Administrative Templates - -> &lt;Your_Password_Manager_Template&gt;**.
4. In the right pane, specify the new server URL in the **Password Manager Server URL** entry field.
