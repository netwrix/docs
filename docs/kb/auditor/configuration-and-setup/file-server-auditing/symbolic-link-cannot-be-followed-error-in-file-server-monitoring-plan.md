---
description: >-
  This article explains how to resolve the "The symbolic link cannot be
  followed" (0x80049610) error that appears during State-in-Time data collection
  for a File Server monitoring plan. It shows how to check and enable symbolic
  link evaluation settings using fsutil on the Netwrix Auditor server.
keywords:
  - symbolic link
  - symlink
  - fsutil
  - SymlinkEvaluation
  - Netwrix Auditor
  - File Server monitoring
  - State-in-Time
  - 2147784208
  - Health Log
products:
  - auditor
sidebar_label: Symbolic Link Cannot Be Followed Error in File Ser
tags: []
title: "Symbolic Link Cannot Be Followed Error in File Server Monitoring Plan"
knowledge_article_id: kA04u0000011141CAA
---

# Symbolic Link Cannot Be Followed Error in File Server Monitoring Plan

## Symptom

You see the following error in the Health Log for your File Server monitoring plan:

```
Error: 0x80049610
The symbolic link cannot be followed
Make sure the local-to-local, local-to-remote, remote-to-local, and remote-to-remote symbolic link evaluations are enabled on the computer that hosts Netwrix Auditor Server.
```

The error shows only during State-in-Time data collection.

## Cause

Symbolic links (symlinks) are disabled or misconfigured.

## Resolution

Enable all symbolic link types.

1. On your **Netwrix Auditor server**, open an elevated Command Prompt and run:

    ```text
    fsutil behavior query SymlinkEvaluation
    ```

    Once executed, you'll see the settings for symbolic links (enabled or disabled).

    ![SymlinkEvaluation output]./../0-images/servlet_image_3823966b1661.png)

2. To enable a symlink type, run the following command:

    ```text
    fsutil behavior set SymlinkEvaluation R2L:1
    ```

    The `R2L:1` stands for remote-to-local enabled. You can change `R` to `L` and vice versa to enable the disabled symlink.

Learn more about fsutil syntax in the Microsoft documentation: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/fsutil-behavior (fsutil behavior ⸱ Microsoft)



