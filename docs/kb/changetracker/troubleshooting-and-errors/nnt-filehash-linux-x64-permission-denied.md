---
description: >-
  Resolves a "Permission denied" error when running the NNT_FILEHASH_LINUX_X64
  binary on agentless Linux devices monitored by Netwrix Change Tracker.
keywords:
  - NNT_FILEHASH_LINUX_X64
  - filehash
  - permission denied
  - Linux
  - agentless
  - Netwrix Change Tracker
  - chmod
  - Proxy Agent
products:
  - changetracker
knowledge_article_id: ka0Qk000000DnvlIAC
sidebar_label: 'Rolling-Log Fix: NNT_FILEHASH_LINUX_X64 Permission Denied'
tags: [kb, troubleshooting-and-errors]
title: 'Rolling-Log Fix: NNT_FILEHASH_LINUX_X64 Permission Denied'
---

# Rolling-Log Fix: NNT_FILEHASH_LINUX_X64 Permission Denied

## Symptom

The rolling log for an agentless Linux device shows an error similar to the following:

```text
Script error executing line 6: ExecuteAndCaptureChunked,0,/usr/bin/NNT_FILEHASH_LINUX_X64 -l10 -r -t -x"/etc/vmware/*/dvsdata.db" ...
Error: ExecuteAndCaptureChunked failed: ... -sh: /usr/bin/NNT_FILEHASH_LINUX_X64: Permission denied
```

## Cause

The `NNT_FILEHASH_LINUX_X64` binary does not have execute permission for the account the Netwrix Change Tracker Proxy Agent uses to connect to the device.

## Resolution

1. On the monitored device, navigate to the location where the `NNT_FILEHASH_LINUX_X64` binary is stored. By default, this is `/usr/bin`.
2. Grant execute permission on the binary to the account the Proxy Agent uses to connect to this device:

   ```bash
   chmod 775 /usr/bin/NNT_FILEHASH_LINUX_X64
   ```

   > **IMPORTANT:** Confirm the binary's ownership matches an account the Proxy Agent's connection credentials can execute as. Set ownership with `chown` if needed, using a user and group that exist on this device.

3. Confirm the fix by running the binary directly from the command line. This hashes the `/etc` directory:

   ```bash
   /usr/bin/NNT_FILEHASH_LINUX_X64 -l10 -r -t -x /etc/*
   ```

4. In the Netwrix Change Tracker console, go to the **Devices** tab and select **Start Tracker** on the agentless device.

Once the tracker starts successfully, Netwrix Change Tracker can hash files on this device without the permission error.
