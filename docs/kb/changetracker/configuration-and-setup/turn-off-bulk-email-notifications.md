---
description: >-
  Shows how to configure Netwrix Change Tracker to send a separate real-time
  email notification for each change, instead of compiling multiple changes
  into a single email.
keywords:
  - Netwrix Change Tracker
  - email notifications
  - bulk email
  - localhost.json
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

This article describes how to configure Netwrix Change Tracker to send each change as a separate email instead of compiling multiple changes into one. By default, Change Tracker compiles multiple changes into a single real-time email notification. [See the SME Review Needed note in the pull request description and confirm the current file and key name for disabling bulk email notifications.]

## Instructions

1. Open an administrative **Command Prompt** and stop IIS:

   ```bat
   iisreset /stop
   ```

2. Navigate to `C:\inetpub\wwwroot\Change Tracker Generation 7 Hub\bin\Configs`.
3. Open the `localhost.json` file and add the following lines at the end of the file:

   ```json
   ,
   "pipeline" : {
       "enableBulkNotifications" : "no"
   }
   ```

   > **NOTE:** If your MongoDB database has been split off to a different server, edit the existing `localhost.json` file directly using these steps rather than replacing it.

4. Save the file.
5. Start IIS:

   ```bat
   iisreset /start
   ```

After IIS restarts, Netwrix Change Tracker sends each change as its own email instead of compiling multiple changes into one.
