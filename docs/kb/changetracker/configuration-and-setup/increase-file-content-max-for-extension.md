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

This article describes how to increase the file content max limit when file contents are not tracked because a file exceeds the configured size.

Netwrix Change Tracker agents enforce a maximum file size for file content tracking. If a monitored file exceeds this limit, the agent logs the following message and does not track the file's contents:

```text
Contents will not be tracked, file length is bigger than current filecontentmaxforextension limit: (701206 bytes)
```

Increasing this limit lets the agent track larger files, but raises the resources and time the agent needs to process file contents — the larger the file, the longer it takes to generate a hash value.

## Instructions

1. Stop the **Netwrix ChangeTracker Gen7 Agent NetCore** service.
2. Open `C:\Program Files\NNT Change Tracker Suite\Gen7Agent (NetCore)\Gen7Agent.App.NetCore.dll.config` in a text editor.
3. Locate the `filecontentmaxforextension` key.
4. Set the value to the size, in bytes, that you want to allow. For example, to allow 1 MB:

   ```xml
   filecontentmaxforextension="1048576"
   ```

5. Save and close the file.
6. Start the **Netwrix ChangeTracker Gen7 Agent NetCore** service.

> **NOTE:** To apply the same limit across multiple agents on the same version and in a default configuration state, copy the edited file to each agent, then stop and start the **Netwrix ChangeTracker Gen7 Agent NetCore** service on each one for the change to take effect.

After the service restarts, trigger a change on the file that previously exceeded the limit, or wait for the next scheduled tracking cycle. Confirm the fix worked by checking that the agent's rolling log no longer logs the `filecontentmaxforextension` message for that file, and that the agent now tracks the file's content change with a hash value instead of flagging it as untracked.

## Related Articles

- [Increasing File Hash Max for Extension](./increase-file-hash-max-for-extension)
