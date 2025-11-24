---
description: >-
  Shows how to collect and save all Netwrix Directory Manager v11 log files
  using the Logs Download feature in the Admin Center.
keywords:
  - directory manager
  - logs
  - log files
  - Logs Download
  - Admin Center
  - v11
  - troubleshooting
  - Downloads
  - logging
products:
  - directory-manager
visibility: public
sidebar_label: Collecting All Log Files in v11
tags:
  - system-administration-and-maintenance
title: "Collecting All Log Files in v11"
knowledge_article_id: kA0Qk0000002CbNKAU
---

# Collecting All Log Files in v11

## Applies To

Directory Manager 11

## Overview

Netwrix Directory Manager (formerly GroupID) is a suite of applications that perform a wide range of identity and access management functions. To help track and troubleshoot anomalies, Directory Manager includes a comprehensive logging mechanism. If logging is enabled for the identity store, the application generates log files for its various modules and events and saves them in different locations on the file system.

## Instructions

Follow the steps below to use the **Logs Download** feature to collect and save all Directory Manager log files to a specific location, rather than locating each log file individually.

1. From the Directory Manager v11 server, open the **Admin Center**.
2. Navigate to **Settings**.
3. Select the **Logs** option.
4. On the Logs screen:
   - Select the **Select all** checkbox. This will select all logs from:
     - Applications
     - Tools & Management Shell
     - Event Viewer
5. Click **Download**.
6. A zipped file containing the logs will be downloaded to your server's Downloads folder.

![Logs Download screen in Directory Manager Admin Center](./../0-images/ka0Qk000000DvID_0EMQk00000BSOM1.png)
