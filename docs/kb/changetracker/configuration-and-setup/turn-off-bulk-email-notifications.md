---
description: >-
  Shows how to configure Netwrix Change Tracker to send a separate real-time
  email notification for each change, instead of compiling multiple changes
  into a single email.
keywords:
  - Netwrix Change Tracker
  - email notifications
  - bulk email
  - appsettings.json
  - enableBulkNotifications
  - real-time notifications
  - IIS
  - MongoDB
products:
  - changetracker
knowledge_article_id: ka04u000000HdB0AAK
sidebar_label: Turning Off Bulk Email Notifications
tags: [kb, configuration-and-setup]
title: Turning Off Bulk Email Notifications
---

# Turning Off Bulk Email Notifications

## Overview

This article describes how to configure Netwrix Change Tracker to send each change as a separate email instead of compiling multiple changes into one. By default, Change Tracker groups all changes detected during a single tracking cycle into one bulk email rather than sending a separate email per change. Turning off bulk notifications increases email volume, since Change Tracker sends one email per detected change instead of one email per tracking cycle. Consider your notification infrastructure's capacity before disabling this setting. Disable it only if you need per-change alerting, such as for a compliance workflow.

## Instructions

1. Open an administrative **Command Prompt** and stop IIS:

   ```bat
   iisreset /stop
   ```

2. Navigate to `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Configs`.
3. Open the `appsettings.json` file and edit the following lines within the file:

   ```json
   ,
   "roleSettings" : {
       "enableBulkNotifications" : "no"
   }
   ```

   > **NOTE:** If you split off your MongoDB database to a different server, edit the existing `appsettings.json` file directly using these steps rather than replacing it.

4. Save the file.
5. Start IIS:

   ```bat
   iisreset /start
   ```

After IIS restarts, Netwrix Change Tracker sends each change as its own email instead of compiling multiple changes into one.
