---
description: >-
  Instructions to increase the File Content Max for extension setting on the
  Netwrix Change Tracker agent when file contents are not tracked because a
  file exceeds the configured size limit.
keywords:
  - change tracker
  - file content max
  - Gen7Agent
  - filecontentmaxforextension
  - Gen7Agent.Service.exe.config
  - agent
  - file size
  - file contents
products:
  - changetracker
knowledge_article_id: ka04u000000Hd8YAAS
sidebar_label: Increasing File Content Max for Extension
tags: [kb, configuration-and-setup]
title: Increasing File Content Max for Extension
---

# Increasing File Content Max for Extension

## Overview

Netwrix Change Tracker agents enforce a maximum file size for file content tracking. If a monitored file exceeds this limit, the agent logs the following message and does not track the file's contents:

```text
Contents will not be tracked, file length is bigger than current filecontentmaxforextension limit: (701206 bytes)
```

Increasing this limit lets the agent track larger files, but raises the resources and time the agent needs to process file contents — the larger the file, the longer it takes to generate a hash value.

## Instructions

1. Stop the **Gen7Agent** service.
2. Open `C:\Program Files\NNT Change Tracker Suite\Gen7Agent\Gen7Agent.Service.exe.config` in a text editor.
3. Locate the `filecontentmaxforextension` key.
4. Set the value to the size, in bytes, that you want to allow. For example, to allow 1 MB:

   ```xml
   filecontentmaxforextension="1048576"
   ```

5. Save and close the file.
6. Start the **Gen7Agent** service.

> **TIP:** To apply the same limit across multiple agents on the same version and in a default configuration state, copy the edited file to each agent, then stop and start the **Gen7Agent** service on each one for the change to take effect.

## Related Articles

- [Moving Your Linux Server MongoDB Database to a Windows Server](../database-and-diagnostics/move-linux-mongodb-to-windows)
- [Increasing File Hash Max for Extension](./increase-file-hash-max-for-extension)
- [Fixing the "Check Log for Details" Message in the Event Details](../troubleshooting-and-errors/check-log-for-details-message)
