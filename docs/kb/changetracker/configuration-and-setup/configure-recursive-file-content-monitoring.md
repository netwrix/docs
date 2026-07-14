---
description: >-
  Shows how to enable recursive file content monitoring by editing the Change
  Tracker web server configuration and applying the filter to a configuration
  template in Netwrix Change Tracker.
keywords:
  - file integrity monitoring
  - FIM
  - file content monitoring
  - Change Tracker
  - default.xml
  - configuration template
  - recursive monitoring
  - FIM filter
products:
  - changetracker
knowledge_article_id: ka04u000000Hd7lAAC
sidebar_label: Configuring Recursive File Content Monitoring
tags: [kb, configuration-and-setup]
title: Configuring Recursive File Content Monitoring
---

# Configuring Recursive File Content Monitoring

## Overview

The File Integrity Monitoring (FIM) tracker in Netwrix Change Tracker monitors changes to file attributes. You can extend it to also monitor file-content changes, but this FIM/file-content combination is disabled by default on the web console.

This article describes how to enable the FIM/file-content option on the web console, then apply it to a device configuration template.

<!-- SME: confirm the correct install path — this article uses "Change Tracker Generation 7 Hub" but other articles use "NNT Change Tracker Suite\Gen7". Verify which is canonical for 8.x. -->

## Instructions

### Enable the FIM/File-content Option on the Web Console

1. Connect to the server hosting your Netwrix Change Tracker server via RDP.
2. Browse to `C:\inetpub\wwwroot\Change Tracker Generation 7 (NetCore) Hub\Filters` and edit the `default.xml` file.
3. Find the line below, then remove the `<!--` and `-->` comment markers so it becomes an active `<filetrackerchangesfilter ... />` element:

   ```
   <!--filetrackerchangesfilter name="filecontentschangesonly" description="File attributes (including contents) only" priority="low" source="globalLow" watchdirectories="false" watchfiles="true" created="false" length="true" lastaccess="false" lastwrite="true" filename="true" directoryname="true" attributes="true" security="true" datastreams="true" content="true" /-->
   ```

4. Save and close the file.
5. Log off from the RDP session.

### Apply the FIM/File-content Filter to a Configuration Template

1. Log in to Netwrix Change Tracker.
2. Browse to **Settings** > **Policy Templates**.
3. Select the appropriate configuration template from the list and select the **Edit** button next to it.
4. Browse to the **FIM File Integrity** tracker.
5. Select the **Tracked Folder** entry you want to monitor for file-content changes recursively, then select the **Edit** button next to it.
6. Under the **Tracked Attributes** column, select the drop-down menu, then select the **File attributes (including contents) only** option.
7. Click **Update**, then click **Save Changes** at the top of the screen.

<img width="1171" height="779" alt="image" src="https://github.com/user-attachments/assets/1763a48d-c23a-4a3c-8626-6e0a6cd93b39" />

> **IMPORTANT:** After the saved template changes take effect, the agent runs a new baseline scan. Allow the scan to complete before testing file changes in the directory — otherwise the baseline may capture your test changes and not report them as changes.
