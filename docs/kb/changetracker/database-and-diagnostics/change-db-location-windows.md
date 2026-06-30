---
title: Windows — Change the DB Location
description: >-
  Instructions to change the MongoDB database file location used by Netwrix
  Change Tracker on Windows. Steps include stopping IIS and MongoDB services,
  editing mongod.conf, and restarting services.
sidebar_label: Change DB Location (Windows)
keywords:
  - MongoDB
  - mongod.conf
  - dbpath
  - iisreset
  - Netwrix Change Tracker
  - Windows Services
  - Change DB location
  - Mongo DB service
  - NNT Change Tracker Suite
  - database migration
products:
  - change-tracker
tags:
  - kb
  - database-and-diagnostics
knowledge_article_id:
---

# Windows — Change the DB Location

## Instructions

1. Stop the IIS Web server using the command line `iisreset /stop`, or use the **IIS Management Console**, or use the **Windows Services Console**.
2. Stop the MongoDB service using the **Windows Services Console**.
3. Edit the `mongod.conf` file located in `C:\Program Files\NNT Change Tracker Suite\Gen7\MongoDB\conf`.
4. Edit the `dbpath` parameter to change the location for DB files.
5. Start the MongoDB service, followed by `iisreset /start`.
