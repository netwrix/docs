---
description: >-
  Instructions to increase the File Hash Max for extension setting on the
  Netwrix Change Tracker agent when a file hash is not calculated because a
  file exceeds the configured size limit.
keywords:
  - change tracker
  - file hash max
  - Gen7Agent
  - filehashmaxforextension
  - Gen7Agent.Service.exe.config
  - agent
  - hashing
products:
  - changetracker
knowledge_article_id: ka04u000000HdASAA0
sidebar_label: Increasing File Hash Max for Extension
tags: [kb, configuration-and-setup]
title: Increasing File Hash Max for Extension
---

# Increasing File Hash Max for Extension

## Overview

Netwrix Change Tracker agents enforce a maximum file size for file hash calculation. If a monitored file exceeds this limit, the agent logs a message similar to the following and does not calculate a hash for the file:

```text
Hash attribute not calculated, file length is bigger than the current filehashmaxforextension limit: C:\folder\subfolder\myfile.exe (171758423 bytes)
```

Increasing this limit lets the agent hash larger files, but raises the resources and time the agent needs to hash each file.

## Instructions

1. Stop the **Gen7Agent** service.
2. Open `C:\Program Files\NNT Change Tracker Suite\Gen7Agent\Gen7Agent.Service.exe.config` in a text editor.
3. Locate the `filehashmaxforextension` key.
4. Set the value to the size, in bytes, that you want to allow. For example, to allow 500 MB:

   ```xml
   filehashmaxforextension="524288000"
   ```

5. Save and close the file.
6. Start the **Gen7Agent** service.

> **TIP:** To apply the same limit across multiple agents on the same version and in a default configuration state, copy the edited file to each agent, then stop and start the **Gen7Agent** service on each one for the change to take effect.

After the service restarts, trigger a change on the file that previously exceeded the limit, or wait for the next scheduled tracking cycle. Confirm the fix worked by checking that the agent's rolling log no longer logs the `filehashmaxforextension` message for that file, and that a hash value now populates for the file instead of it being flagged as unhashed.

## Related Articles

- [Increasing File Content Max for Extension](./increase-file-content-max-for-extension)
- [NNT_FILEHASH_LINUX_X64 Log Fix: Permission Denied](../troubleshooting-and-errors/nnt-filehash-linux-x64-permission-denied)
