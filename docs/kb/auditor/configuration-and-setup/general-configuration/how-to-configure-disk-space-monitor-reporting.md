---
description: >-
  Learn how to configure Netwrix Auditor Disk Space Monitor reporting, including
  server targets, thresholds, SMTP settings, and real-time notifications.
keywords:
  - disk space
  - monitor
  - WMI
  - SMTP
  - email
  - threshold
  - real-time
  - report
  - Netwrix Auditor
products:
  - auditor
sidebar_label: How to configure Disk Space Monitor reporting
tags: []
title: "How to configure Disk Space Monitor reporting"
knowledge_article_id: kA00g000000PbdcCAC
---

# How to configure Disk Space Monitor reporting

To configure the Netwrix Auditor Disk Space Monitor reporting, perform the following steps:

## Steps

1. Run the software configurator tool.

2. Enter the names of the servers you want to monitor. Enter values without quotes. Format examples:
   - Entire server: `myserver`
   - UNC Path: `\myserverpublic`
   - Individual drive: `myserverc:`
   - Mount point: `myserverc:foldernamemount_point_name`

3. Specify the threshold in MB of free space or percentage of available space (for example, `100` percent).

4. Check the **Send notifications in real-time** checkbox if you want the software to check the servers every 10 minutes.

4. Supply a comma-separated list of e-mail addresses to send reports to (at least one e-mail is required).

5. Specify SMTP server settings (name, port, from address).

6. Click **OK** and enter an account name and password which will be used to generate reports.

This account must be powerful enough to connect to all managed servers using WMI.

## How it works

It will work as follows:
-------------------------------------
The product task begins to work on a scheduled basis and repeats every 10 minutes, so disks are monitored in real-time.
When the **Send notifications in real-time** checkbox is checked, the Netwrix Auditor Disk Space Monitor sends notifications on the detected servers with low free disk space if disk capacity change occurs.
The default summary report schedule is daily at 3:00 AM.
