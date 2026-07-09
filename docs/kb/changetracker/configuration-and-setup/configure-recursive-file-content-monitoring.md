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

You can monitor for file-content changes alongside FIM using the File Integrity Monitoring tracker, but you must make changes to a Change Tracker configuration file and to the configuration template attached to your devices.

By default, the FIM/File-content combination is not enabled on the web console. To make this available, complete the following procedures.

<!-- SME: confirm the correct install path — this article uses "Change Tracker Generation 7 Hub" but other articles use "NNT Change Tracker Suite\Gen7". Verify which is canonical for 8.x. -->

## Instructions

### Enable the FIM/File-content Option on the Web Console

1. Connect to the server hosting your Netwrix Change Tracker server via RDP.
2. Browse to the following folder: `C:\inetpub\wwwroot\Change Tracker Generation 7 Hub\bin\Filters`
3. Edit the following file: `default.xml`
4. Locate the following line, then remove the `<!--` and `-->` comment markers so the line becomes an active `<filetrackerchangesfilter ... />` element:

   ```
   <!--filetrackerchangesfilter name="filecontentschangesonly" description="File attributes (including contents) only" priority="low" source="globalLow" watchdirectories="false" watchfiles="true" created="false" length="true" lastaccess="false" lastwrite="true" filename="true" directoryname="true" attributes="true" security="true" datastreams="true" content="true" /-->
   ```

5. Save and close the file.
6. Log off from the RDP session.

### Apply the FIM/File-content Filter to a Configuration Template

Apply the FIM/File-content filter to your device configuration template:

1. Log in to **Netwrix Change Tracker**.
2. Browse to **Settings**.
3. Browse to **Configuration Templates**.
4. Select the appropriate configuration template from the list and select the **Edit** button next to it.
5. Browse to the **FIM File Integrity tracker**.
6. Select the **Tracked Folder** entry that you wish to monitor for file content changes recursively and select the **Edit** button next to it.
7. Under the **Tracked Attributes** column, select the drop-down menu and select the **File attributes (including contents) only** option.
8. Click **Update**.
9. Click **Save Changes** at the top of the screen.

<!-- Image removed: FIM tracker configuration screen showing the Tracked Attributes dropdown with "File attributes (including contents) only" selected -->

Once the saved template changes take effect, the agent receives the updated configuration and runs a new baseline scan. Allow time for this scan to complete before making test changes to files within the directory, because the baseline may capture the changes and not report them as changes.
